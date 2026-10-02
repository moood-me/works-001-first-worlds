const str = (v) => String(v == null ? "" : v);
const ns = () => {
  const n = str(scene.get("note_state"));
  return /read|чита|строк/.test(n) ? 2 : /unroll|open|развер|развёр|разворач/.test(n) ? 1 : 0;
};
const bs = () => {
  const b = str(scene.get("bottle_state"));
  return /broke|разб/.test(b) ? 2 : /slip|выскольз|скатил|упал/.test(b) ? 1 : 0;
};
const surf = () =>
  /strong|surf|сильн|прибой|storm|шторм/.test(str(scene.get("tide"))) || /storm|шторм/.test(str(scene.get("weather")));
const rain = () => /rain|дожд|storm|шторм/.test(str(scene.get("weather")));
const beamOn = () => {
  const b = scene.get("beam_pass");
  return b !== false && !/нет|^no|off|false/i.test(str(b));
};
const catHere = () => {
  const c = scene.get("fitil_present");
  return c !== false && !/нет|^no|false/i.test(str(c));
};
// strong tide: waves wash over the stone and take the bottle
let wash = 0;
scene.every(5, () => {
  if (!surf()) {
    wash = 0;
    return;
  }
  wash += 5;
  if (bs() === 0 && wash >= 30) {
    wash = 0;
    scene.set("bottle_state", "slipped");
    scene.tell("Волна перехлестнула через камень — бутылка выскользнула и застряла в щели между камнями.");
  } else if (bs() === 1 && wash >= 25) {
    wash = 0;
    scene.set("bottle_state", "broken");
    scene.tell(
      "Следующая волна выдернула бутылку из щели — стекло лопнуло о камень. Осколки блестят на мокром граните.",
    );
  }
});
// rain on the open paper
let wet = 0;
scene.every(6, () => {
  if (rain() && ns() > 0) {
    wet += 6;
    if (wet >= 24 && !scene.get("ink_told")) {
      scene.set("ink_told", true);
      scene.tell("Дождь падает на развёрнутую бумагу — нижние строки начинают расплываться.");
    }
  } else wet = 0;
});
// the beam on the open page
scene.every(10.5, () => {
  if (ns() === 2 && beamOn() && !scene.get("beam_read_told")) {
    scene.set("beam_read_told", true);
    scene.tell("Луч маяка на миг лёг на лист — первые строки стали видны ясно, чернила блеснули.");
  }
});
scene.on("click", (id) => {
  const n = ns();
  if (id === "scroll") {
    if (n === 0) {
      scene.set("note_state", "unrolling");
      scene.tell("Игрок поддел ногтем сургуч — печать треснула, нитка ослабла, свиток начал разворачиваться.");
    } else if (n === 1) {
      scene.set("note_state", "reading");
      scene.tell("Игрок развернул лист до конца. Бумага мокрая, но первые строки читаются.");
    } else scene.tell("Игрок наклоняет лист к лунному свету, вглядывается в строки.");
  } else if (id === "bottle") {
    const b = bs();
    scene.tell(
      b === 0
        ? "Игрок касается бутылки на камне — внутри ещё что-то перекатывается? Нет, только вода."
        : b === 1
          ? "Игрок тянется к бутылке в щели — пальцы скользят по мокрому стеклу."
          : "Игрок смотрит на осколки — зелёное стекло, горлышко с сургучом.",
    );
  } else if (id === "fitil" && catHere())
    scene.tell("Фитиль не смотрит на бутылку — он смотрит на свиток. Кончик хвоста подрагивает.");
});
