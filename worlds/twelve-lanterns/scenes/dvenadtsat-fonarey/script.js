scene.every(40, () => {
  const L = scene.get("lanterns");
  if (L > 0) scene.set("lanterns", L - 1);
});
scene.on("change", "lanterns", (v) => {
  scene.set("girl", (12 - v) / 12, 8);
  scene.set("jizo_look", Math.min(1, (12 - v) / 8), 5);
  scene.set("machine", v > 0 ? 1 : 0.25, 3);
  if (v === 6)
    scene.tell("Половина фонарей на лестнице погасла. Девочка в маске лисы уже на середине ступеней.", "girl");
  if (v === 0)
    scene.tell("Погас последний фонарь. Автомат почти не светит. Девочка в маске стоит у нижней ступени.", "girl");
});
