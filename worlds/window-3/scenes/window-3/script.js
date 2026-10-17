const open = () => {
  if (scene.get("window") === "break") {
    scene.set("window", "open");
    scene.tell(tr('Window 3 is open again.'), "inspector");
  }
};
const shut = () => {
  scene.set("window", "break");
  scene.tell(tr('Window 3 has closed for a technical break.'), "inspector");
  scene.after(60, open);
};
if (scene.get("window") === "break") scene.after(30, open);
const v = scene.get("vip") || 0;
if (v > 0 && v < 1) scene.set("vip", 0);
scene.every(12, () => {
  if (scene.get("window") !== "open") return;
  const n = (scene.get("now") || 0) + 1;
  scene.set("now", n);
  if (n % 20 === 0) shut();
});
scene.every(150, () => {
  scene.set("vip", 0);
  scene.set("vip", 1, 12);
  scene.after(12.5, () => {
    scene.set("vip", 0);
    scene.set("mine", (scene.get("mine") || 0) + 1);
    scene.tell(tr('A golden yacht with a flashing light went straight to the window, no queue. Your number has been recalculated.'), "yacht");
  });
});
