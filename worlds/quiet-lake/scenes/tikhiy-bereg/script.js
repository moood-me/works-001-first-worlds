scene.every(30, function () {
  var s = scene.get("sunset") || 0,
    m = scene.get("morning") || 0;
  if (m < 0.05 && s < 1) {
    scene.set("sunset", Math.min(1, s + 0.01), 30);
  }
});
scene.on("change", "sunset", function (v, o) {
  if (o < 0.6 && v >= 0.6) scene.tell("Солнце коснулось леса на том берегу.", "ec5e3fd7b");
  if (o < 0.98 && v >= 0.98) scene.tell("Солнце село; над озером остались сумерки.", "ec5e3fd7b");
});
scene.on("change", "morning", function (v, o) {
  if (o < 0.95 && v >= 0.95) scene.tell("Над озером рассвело, по воде стелется туман.", "ec5e3fd7b");
});
scene.on("change", "benchWalk", function (v, o) {
  if (o < 0.99 && v >= 0.99) scene.tell("Скамейка ушла вдоль берега и скрылась из виду.", "bench");
});
scene.on("change", "shedRise", function (v, o) {
  if (o < 0.99 && v >= 0.99) scene.tell("Сарай поднялся на курьих ножках и стоит, переминаясь.", "shed");
});
