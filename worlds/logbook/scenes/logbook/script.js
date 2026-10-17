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
  // from four the sky starts to pale; by six it is morning
  const dawn = Math.max(0, Math.min(1, (m - mins("04:00")) / 120));
  if (dawn > (scene.get("dawn") || 0)) scene.set("dawn", dawn, 4);
  // the Krechet rounds the cape at half past midnight and is gone in forty minutes
  if (m >= mins("00:30") && !(scene.get("krechet") > 0)) scene.set("krechet", 1, Math.max(20, (mins("01:10") - m) * 2));
};
follow(scene.get("time"));
scene.every(20, () => {
  const m = mins(scene.get("time"));
  if (m < mins("06:00")) scene.set("time", fmt(m + 10));
});
scene.on("change", "time", follow);
