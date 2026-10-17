scene.every(40, function () {
  var d = scene.get("dusk");
  if (d == null) d = 0;
  if (d < 1) scene.set("dusk", Math.min(1, d + 0.02), 20);
  var c = scene.get("cityGlow");
  if (c == null) c = 0;
  if (c < 1) scene.set("cityGlow", Math.min(1, Math.round((c + 0.03) * 100) / 100));
});
scene.on("change", "dusk", function (v, o) {
  if (o < 0.999 && v >= 0.999) scene.tell(tr('The blue hour is over: real night above the roof.'));
});
scene.on("change", "cityGlow", function (v, o) {
  if (o < 0.95 && v >= 0.95) scene.tell(tr('The city below has lit nearly all its windows.'));
});
