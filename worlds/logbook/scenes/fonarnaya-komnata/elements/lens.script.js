scene.on("click", () => {
  const l = scene.get("lamp") ?? 0.7;
  if (l >= 0.85) return;
  scene.set("lamp", 0.9, 4);
  scene.tell("Игрок подрезал фитиль — лампа разгорелась ровнее.");
});
