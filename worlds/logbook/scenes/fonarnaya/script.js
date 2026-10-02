const mins = (t) => {
  const [h, m] = String(t).split(":").map(Number);
  return (h < 12 ? h + 24 : h) * 60 + m;
};
const fmt = (m) => {
  m %= 1440;
  return String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0");
};
const WATCHES = [
  [mins("20:00"), "Первая вахта · лампа"],
  [mins("22:00"), "Вторая вахта · линза"],
  [mins("00:00"), "Полночь · погода"],
  [mins("00:30"), "Ночная вахта · сигнал"],
  [mins("02:00"), "Глухая вахта"],
  [mins("04:00"), "Перед рассветом · строка"],
];
const follow = (t) => {
  const m = mins(t);
  const w = WATCHES.filter(([at]) => m >= at).pop();
  if (w && scene.get("watch") !== w[1]) scene.set("watch", w[1]);
  const dawn = Math.max(0, Math.min(1, (m - mins("04:00")) / 120));
  if (dawn > (scene.get("dawn") || 0)) scene.set("dawn", dawn, 4);
  // the «Кречет» rounds the cape at 00:28 and is gone behind it by 01:08
  const k = Math.max(0, Math.min(1, (m - mins("00:28")) / 40));
  if (k > (scene.get("krechet") || 0) + 0.001) scene.set("krechet", k, 18);
};
follow(scene.get("time"));
scene.every(20, () => {
  const m = mins(scene.get("time"));
  if (m < mins("06:00")) scene.set("time", fmt(m + 10));
  // the wick chars a little every ten minutes; the light sags until someone trims it
  const l = scene.get("lamp");
  if (typeof l === "number" && l > 0.3) scene.set("lamp", Math.max(0.3, l - 0.012), 6);
});
scene.on("change", "time", follow);
scene.on("change", "krechet", (v, o) => {
  if ((o || 0) <= 0.001 && v > 0.001) scene.tell("Справа из-за мыса показались огни «Кречета».", "krechet");
  if ((o || 0) < 0.999 && v >= 0.999) scene.tell("«Кречет» ушёл за мыс — огней больше не видно.", "krechet");
});
scene.on("change", "lamp", (v, o) => {
  if (o > 0.32 && v <= 0.32) scene.tell("Лампа коптит, свет в линзе осел — пора подрезать фитиль.", "lens");
});
