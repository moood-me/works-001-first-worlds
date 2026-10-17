scene.every(30, function () {
  var s = scene.get("sunset") || 0,
    m = scene.get("morning") || 0;
  if (m < 0.05 && s < 1) {
    scene.set("sunset", Math.min(1, s + 0.01), 30);
  }
});
scene.on("change", "sunset", function (v, o) {
  if (o < 0.6 && v >= 0.6) scene.tell(tr('The sun has touched the forest on the far shore.'), "ec5e3fd7b");
  if (o < 0.98 && v >= 0.98) scene.tell(tr('The sun has set; twilight is left over the lake.'), "ec5e3fd7b");
});
scene.on("change", "morning", function (v, o) {
  if (o < 0.95 && v >= 0.95) scene.tell(tr('Dawn over the lake; mist creeps over the water.'), "ec5e3fd7b");
});
scene.on("change", "benchWalk", function (v, o) {
  if (o < 0.99 && v >= 0.99) scene.tell(tr('The bench has walked off along the shore and is out of sight.'), "bench");
});
scene.on("change", "shedRise", function (v, o) {
  if (o < 0.99 && v >= 0.99) scene.tell(tr('The shed has risen on its chicken legs and stands there, shifting from foot to foot.'), "shed");
});
