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
      scene.tell("Огонёк между стволами на миг погас, будто кто-то прошёл перед ним, и загорелся снова.");
    }
  }
  scene.after(40 + Math.random() * 35, blink);
};
scene.after(20 + Math.random() * 15, blink);
scene.on("change", "figure", (v, o) => {
  if (v >= 0.5 && !(o >= 0.5)) scene.tell("Между стволами, левее огонька, проступила неподвижная фигура.");
});
