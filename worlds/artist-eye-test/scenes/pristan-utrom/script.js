scene.every(20, () => {
  const d = scene.get("dawn") ?? 0.3;
  if (d >= 1) return;
  const n = Math.min(1, d + 0.005);
  scene.set("dawn", n, 18);
  if (d < 0.6 && n >= 0.6) scene.tell("Солнце поднялось над туманом, вода посветлела", "sun");
});
scene.on("change", "bite", (v, old) => {
  if (v >= 0.5 && (old ?? 0) < 0.5) scene.tell("Поплавок ушёл под воду — у рыбака клюёт", "rod");
});
