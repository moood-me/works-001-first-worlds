let said = false;
scene.every(0.3, () => {
  const h = scene.hero();
  if (!said && h && Math.abs(h.across - 62.06) < 3) {
    said = true;
    scene.tell(tr('He made it to the cat at the edge of the rooftops. The cat: “Meow. Only the moon from here on.”'), "cat");
  }
});
