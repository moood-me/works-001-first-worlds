scene.every(0.1, () => {
  const g = scene.get("guest"),
    goal = scene.get("guest_goal");
  const d = goal - g;
  if (Math.abs(d) > 0.0005) {
    scene.set("guest", g + Math.sign(d) * Math.min(Math.abs(d), 0.004));
  }
});
scene.every(20, () => {
  const l = scene.get("light");
  if (l > 0.05) scene.set("light", Math.max(0.05, l - 0.01), 18);
});
let told = scene.get("guest") >= 0.97;
scene.on("change", "guest", (v) => {
  if (v >= 0.97 && !told) {
    told = true;
    scene.tell(tr('The traveller reached the keeper and stopped one step from her lantern'), "guest");
  }
});
