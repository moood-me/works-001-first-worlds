scene.every(1, () => {
  if (scene.get("pose") !== "идёт") return;
  const n = scene.get("near") || 0;
  if (n >= 0.999) {
    scene.set("pose", "рядом");
    scene.tell("Он дошёл до остановки и остановился под фонарём.", "stranger");
  } else scene.set("near", Math.min(1, n + 0.012), 1);
});
