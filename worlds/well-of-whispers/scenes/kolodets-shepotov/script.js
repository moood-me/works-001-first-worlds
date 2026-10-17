scene.on("change", "lid_open", function (v, old) {
  if (v === old) return;
  if (v) {
    scene.set("glow", Math.max(scene.get("glow"), 0.95), 6);
    scene.set("runes", 1, 8);
    scene.tell(tr('The well\'s lid has swung open, and a cold light is rising from inside.'), "well");
  } else {
    scene.set("glow", 0.35, 4);
    scene.set("runes", 0.25, 6);
    scene.tell(tr('The well\'s lid has settled back into place, and the light has gone back into the cracks.'), "well");
  }
});
