scene.on("change", "lid_open", function (v, old) {
  if (v === old) return;
  if (v) {
    scene.set("glow", Math.max(scene.get("glow"), 0.95), 6);
    scene.set("runes", 1, 8);
    scene.tell("Крышка колодца откинута — изнутри поднимается холодный свет.", "well");
  } else {
    scene.set("glow", 0.35, 4);
    scene.set("runes", 0.25, 6);
    scene.tell("Крышка колодца снова легла на место, свет ушёл в щели.", "well");
  }
});
