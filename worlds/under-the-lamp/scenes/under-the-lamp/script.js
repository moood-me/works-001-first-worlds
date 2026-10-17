scene.every(30, () => {
  scene.set("time", (scene.get("time") + 1) % 1440);
});
