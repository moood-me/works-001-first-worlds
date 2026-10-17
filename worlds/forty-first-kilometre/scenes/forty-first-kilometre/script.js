scene.every(1, () => {
  if (scene.get("pose") !== "walking") return;
  const n = scene.get("near") || 0;
  if (n >= 0.999) {
    scene.set("pose", "close");
    scene.tell(tr('He reached the bus stop and stopped under the lamp.'), "stranger");
  } else scene.set("near", Math.min(1, n + 0.012), 1);
});
