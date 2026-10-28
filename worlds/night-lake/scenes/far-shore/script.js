scene.every(1, () => {
  const d = Math.max(0, +scene.get("fogDrift") || 0);
  scene.set("fogX", (+scene.get("fogX") || 0) + 0.15 + 2.2 * d, 1);
});
let told = false;
const blink = () => {
  const v = +scene.get("lantern") || 0;
  if (scene.get("lanternBlink") && v > 0.08) {
    scene.set("lantern", 0.02, 1.2);
    scene.after(3 + Math.random() * 4, () => {
      if ((+scene.get("lantern") || 0) < 0.05) scene.set("lantern", v, 2.5);
    });
    if (!told) {
      told = true;
      scene.tell(tr('The light between the trunks went out for a moment, as if someone had passed in front of it, and came on again.'));
    }
  }
  scene.after(40 + Math.random() * 35, blink);
};
scene.after(20 + Math.random() * 15, blink);
scene.on("change", "figure", (v, o) => {
  if (v >= 0.5 && !(o >= 0.5)) scene.tell(tr('Between the trunks, left of the light, a motionless figure has appeared.'));
});
