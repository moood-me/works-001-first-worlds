const W = (f) => (f === "дует" ? 1 : 0);
const restart = () => {
  const k = scene.get("take") || 7;
  scene.set("take", k + 1);
  scene.set("dusk", 0.1, 10);
  scene.set("petals", 1);
  scene.set("heat", 0);
  scene.set("fan", "дует");
  scene.set("wrap", false);
  scene.tell("Солнце вернули на место. Дубль " + (k + 1) + ". Все по позициям.", "sky");
};
const wrap = () => {
  scene.set("wrap", true);
  const k = scene.get("take") || 7;
  scene.tell(
    scene.get("senpai") === "в дверях"
      ? "Солнце село. Сэмпай стоит в дверях. Дубль " + k + " — снято."
      : "Солнце село. Сэмпай так и не пришёл. Дубль " + k + " — снято.",
    "sky",
  );
  scene.after(12, restart);
};
scene.on("load", (s) => {
  scene.set("wind", W(s.fan));
  if (s.wrap) scene.after(3, restart);
});
scene.on("change", "fan", (v) => scene.set("wind", W(v), W(v) ? 2 : 6));
scene.every(12, () => {
  let h = scene.get("heat") || 0;
  const f = scene.get("fan");
  if (f === "дует") {
    h = Math.min(1, +(h + 0.06).toFixed(2));
    scene.set("heat", h, 6);
    if (h >= 1) {
      scene.set("fan", "перегрелся");
      scene.tell("Ветродуй перегрелся и замолк. Волосы Хикари медленно опадают.", "fan");
    }
    const p = scene.get("petals") || 0;
    if (p > 0) {
      const q = Math.max(0, +(p - 0.025).toFixed(3));
      scene.set("petals", q);
      if (q === 0) scene.tell("У Кэнты кончились лепестки. Он трясёт пустой пакет над крышей.", "kenta");
    }
  } else if (f === "перегрелся") {
    h = Math.max(0, +(h - 0.12).toFixed(2));
    scene.set("heat", h, 6);
    if (h <= 0.3) {
      scene.set("fan", "дует");
      scene.tell("Ветродуй остыл и снова дует. Драма возвращается.", "fan");
    }
  } else if (h > 0) scene.set("heat", Math.max(0, +(h - 0.1).toFixed(2)), 6);
});
scene.every(20, () => {
  if (scene.get("wrap")) return;
  const d = scene.get("dusk") || 0;
  if (d >= 1) {
    wrap();
    return;
  }
  const n = Math.min(1, +(d + 0.02).toFixed(2));
  scene.set("dusk", n, 18);
});
