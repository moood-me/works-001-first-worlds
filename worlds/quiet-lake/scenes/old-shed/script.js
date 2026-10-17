scene.every(30, function () {
  var d = scene.get("dusk") || 0;
  if (d < 1) scene.set("dusk", Math.min(1, d + 0.01), 28);
});
scene.on("change", "dusk", function (v, o) {
  o = o || 0;
  if (o < 0.45 && v >= 0.45)
    scene.tell("The sun has slipped behind the far forest; the sand by the shed turns grey-blue.");
  if (o < 0.8 && v >= 0.8) scene.tell("Dusk has settled on the lake; the first stars show above the shed roof.");
});
