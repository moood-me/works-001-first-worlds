scene.every(40, () => {
  const L = scene.get("lanterns");
  if (L > 0) scene.set("lanterns", L - 1);
});
scene.on("change", "lanterns", (v) => {
  scene.set("girl", (12 - v) / 12, 8);
  scene.set("jizo_look", Math.min(1, (12 - v) / 8), 5);
  scene.set("machine", v > 0 ? 1 : 0.25, 3);
  if (v === 6)
    scene.tell(tr('Half the lanterns on the steps are out. The girl in the fox mask is halfway down.'), "girl");
  if (v === 0)
    scene.tell(tr('The last lantern is out. The vending machine barely glows. The girl in the mask stands at the bottom step.'), "girl");
});
