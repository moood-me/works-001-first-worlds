const mins = (t) => {
  const [h, m] = String(t).split(":").map(Number);
  return (h < 12 ? h + 24 : h) * 60 + m;
};
const fmt = (m) => {
  m %= 1440;
  return String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0");
};
const WATCHES = [
  [mins("20:00"), "first"],
  [mins("22:00"), "second"],
  [mins("00:00"), "midnight"],
  [mins("00:30"), "night"],
  [mins("02:00"), "graveyard"],
  [mins("04:00"), "before-dawn"],
];
const follow = (t) => {
  const m = mins(t);
  const w = WATCHES.filter(([at]) => m >= at).pop();
  if (w && scene.get("watch") !== w[1]) scene.set("watch", w[1]);
  const dawn = Math.max(0, Math.min(1, (m - mins("04:00")) / 120));
  if (dawn > (scene.get("dawn") || 0)) scene.set("dawn", dawn, 4);
  // the Krechet rounds the cape at 00:28 and is gone behind it by 01:08
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
  if ((o || 0) <= 0.001 && v > 0.001) scene.tell(tr('On the right, from behind the cape, the lights of the Krechet have appeared.'), "krechet");
  if ((o || 0) < 0.999 && v >= 0.999) scene.tell(tr('The Krechet has gone behind the cape; its lights can no longer be seen.'), "krechet");
});
scene.on("change", "lamp", (v, o) => {
  if (o > 0.32 && v <= 0.32) scene.tell(tr('The lamp is smoking, the light in the lens has sunk: time to trim the wick.'), "lens");
});
