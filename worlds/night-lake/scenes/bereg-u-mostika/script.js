let busy = false,
  lastTell = -1e9;
if ((scene.get("gust") || 0) > 0.01) scene.set("gust", 0, 4);
scene.every(1, () => {
  if (busy) return;
  if (Math.random() < 0.03) {
    busy = true;
    const a = 0.35 + 0.45 * Math.random();
    scene.set("gust", a, 2.5);
    scene.after(5 + 4 * Math.random(), () => {
      scene.set("gust", 0, 6);
      scene.after(6.5, () => {
        busy = false;
      });
    });
    if (a > 0.6 && scene.time - lastTell > 120) {
      lastTell = scene.time;
      scene.tell(
        scene.get("boatPresent") !== false
          ? "Порыв ветра: камыш зашуршал, лодка дёрнула верёвку на колышке."
          : "Порыв ветра: камыш зашуршал, по воде у кромки прошла дрожь.",
      );
    }
  }
});
