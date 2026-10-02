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
  if (m >= mins("00:30") && !(scene.get("krechet") > 0)) {
    scene.set("krechet", 1, Math.max(20, (mins("01:10") - m) * 2));
    scene.tell("Справа, за стеклом, из-за мыса вышли огни «Кречета».");
  }
};
follow(scene.get("time"));
scene.every(20, () => {
  const m = mins(scene.get("time"));
  if (m < mins("06:00")) scene.set("time", fmt(m + 10));
});
scene.on("change", "time", follow);
// the wick chars: the lamp slowly dims until someone trims it
scene.every(45, () => {
  const l = scene.get("lamp") ?? 0.7;
  if (l <= 0.3) return;
  const n = Math.max(0.3, l - 0.02);
  scene.set("lamp", n, 6);
  if (l >= 0.35 && n < 0.35) scene.tell("Лампа коптит и тускнеет — фитиль пора подрезать.");
});
// a signal is beaten out with the blind in front of the flame
if (scene.get("shutter")) scene.set("shutter", 0);
scene.on("change", "signal", (v) => {
  if (!v) return;
  scene.set("shutter", 1, 0.5);
  let t = 1.2;
  for (const ch of String(v)) {
    const d = ch === "·" || ch === "." ? 0.45 : ch === "—" || ch === "-" || ch === "–" ? 1.3 : 0;
    if (!d) continue;
    scene.after(t, () => scene.set("shutter", 0, 0.1));
    t += d;
    scene.after(t, () => scene.set("shutter", 1, 0.1));
    t += 0.55;
  }
  scene.after(t + 0.3, () => scene.set("shutter", 0, 0.8));
  scene.after(t + 1, () => scene.tell("Свет отбил знак: " + v));
});
