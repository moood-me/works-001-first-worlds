const str = (v) => String(v == null ? "" : v);
const isSurf = () =>
  /surf|сильн|прибой|storm|шторм/.test(str(scene.get("tide"))) || /storm|шторм/.test(str(scene.get("weather")));
const beamOn = () => {
  const b = scene.get("beam_pass");
  return b !== false && !/нет|^no|off|false/i.test(str(b));
};
const catHere = () => {
  const c = scene.get("fitil_present");
  return c !== false && !/нет|^no|false/i.test(str(c));
};
const where = () => {
  const b = str(scene.get("bottle_state"));
  return /broke|разб/.test(b)
    ? "broken"
    : /hand|рук/.test(b)
      ? "hands"
      : /clos|ближ|подпл/.test(b)
        ? "closer"
        : "stuck";
};
// a broken bottle lies where it was last: among the rocks, or at the player's feet
scene.on("change", "bottle_state", (v, old) => {
  if (/broke|разб/.test(str(v))) scene.set("broken_at", /clos|ближ|подпл|hand|рук/.test(str(old)) ? "near" : "rocks");
});
// strong surf works the bottle loose from the stones
let pull = 0;
scene.every(5, () => {
  if (isSurf() && where() === "stuck") {
    pull += 5;
    if (pull >= 45) {
      pull = 0;
      scene.set("bottle_state", "closer");
      scene.tell("Сильный прибой выбил бутылку из камней — волна подкатила её почти к ногам.");
    }
  } else pull = 0;
});
// the first time the beam finds the glass
scene.every(10.5, () => {
  if (scene.get("glint_told") || !beamOn()) return;
  const w = where();
  if (w === "stuck" || w === "closer") {
    scene.set("glint_told", true);
    scene.tell("Луч маяка прошёл по берегу — у самой воды, между камней, вспыхнуло зелёное стекло.");
  }
});
scene.on("click", (id) => {
  const w = where();
  if (id === "bottle" && w === "stuck")
    scene.tell("Игрок тянется к бутылке между камней — ледяная вода, пена по щиколотку.");
  else if (id === "bottle_near" && w === "closer") {
    scene.set("bottle_state", "in_hands");
    scene.tell("Игрок поднял бутылку из пены. Внутри — свёрнутая записка с красной ниткой; горлышко залито сургучом.");
  } else if ((id === "bottle" || id === "bottle_near") && w === "broken")
    scene.tell("Игрок наклоняется к осколкам — записка намокла, но ещё держится.");
  else if (id === "bottle_hands" && w === "hands")
    scene.tell("Игрок вертит бутылку в руках, разглядывает записку сквозь мокрое стекло.");
  else if (id === "fitil" && catHere()) scene.tell("Фитиль не сводит глаз с бутылки; уши прижаты от ветра.");
});
