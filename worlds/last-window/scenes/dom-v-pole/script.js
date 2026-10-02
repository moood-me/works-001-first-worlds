scene.on("change", "stranger", (v, o) => {
  if (v > o)
    scene.tell(
      v >= 3
        ? "Оно стоит у самого дома, под окном."
        : v === 2
          ? "Оно вышло из леса и стоит посреди поля."
          : "У кромки леса стоит высокая бледная фигура.",
      v >= 3 ? "stranger_near" : v === 2 ? "stranger_mid" : "stranger_far",
    );
});
scene.on("change", "lamp", (v, o) => {
  if (v === 0 && o > 0) scene.tell("Свет в окне погас.", "house");
});
scene.on("change", "door", (v) => {
  if (v) scene.tell("Дверь дома открыта, свет лёг на снег.", "house");
});
