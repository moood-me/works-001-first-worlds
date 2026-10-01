scene.on("click", function () {
  var v = scene.get("lights");
  scene.set("lights", v > 0.5 ? 0 : 1, 1.5);
});
