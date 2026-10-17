scene.on("change", "stranger", (v, o) => {
  if (v > o)
    scene.tell(
      v >= 3
        ? tr('It is standing right by the house, under the window.')
        : v === 2
          ? tr('It has come out of the forest and stands in the middle of the field.')
          : tr('A tall pale figure stands at the edge of the forest.'),
      v >= 3 ? "stranger_near" : v === 2 ? "stranger_mid" : "stranger_far",
    );
});
scene.on("change", "lamp", (v, o) => {
  if (v === 0 && o > 0) scene.tell(tr('The light in the window has gone out.'), "house");
});
scene.on("change", "door", (v) => {
  if (v) scene.tell(tr('The door of the house is open; light spills onto the snow.'), "house");
});
