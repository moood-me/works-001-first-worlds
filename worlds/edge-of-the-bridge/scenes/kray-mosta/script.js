scene.every(30, () => {
  const n = scene.get("night");
  if (n < 1) scene.set("night", Math.min(1, n + 0.01), 30);
});
function whaleGo() {
  const x = scene.get("whaleX");
  const left = Math.max(1, ((1.25 - x) / 1.5) * 90);
  scene.set("whaleX", 1.25, left);
  scene.after(left, () => {
    scene.set("whale", false);
    scene.set("whaleX", -0.25);
    scene.tell("Небесный кит ушёл за край тумана", "whale");
  });
}
scene.on("load", (s) => {
  if (s.whale) whaleGo();
});
scene.on("change", "whale", (v, o) => {
  if (v && !o) {
    scene.set("whaleX", -0.25);
    whaleGo();
  }
});
