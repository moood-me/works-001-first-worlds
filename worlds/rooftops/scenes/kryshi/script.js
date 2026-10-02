let said = false;
scene.every(0.3, () => {
  const h = scene.hero();
  if (!said && h && Math.abs(h.across - 62.06) < 3) {
    said = true;
    scene.speak("cat", "Мяу. Дальше только луна.");
  }
});
