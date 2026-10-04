scene.set("crash", 0);
function crash() {
  var S = scene.get("surf_height") || 0;
  scene.set("crash", 1, 1.4);
  scene.after(1.8, function () {
    scene.set("crash", 0, 5);
  });
  if (S > 0.6) {
    scene.after(1.2, function () {
      var w = scene.get("path_wetness") || 0;
      scene.set("path_wetness", Math.min(1, w + 0.15), 3);
      var fd = scene.get("figure_distance");
      if (fd == null) fd = 0.6;
      if (fd < 0.35)
        scene.tell("A big wave bursts over the foot of the path, right beside the figure on the rocks.", "figure");
      else scene.tell("A big wave bursts over the low end of the path and runs back down the stones.", "path");
    });
  }
}
function loop() {
  scene.after(12 + Math.random() * 16, function () {
    var S = scene.get("surf_height") || 0;
    if (Math.random() < 0.2 + 0.75 * S) crash();
    loop();
  });
}
loop();
