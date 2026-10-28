var told = false;
scene.every(30, function () {
  var v = scene.get("light_shafts");
  if (typeof v === "number" && v > 0.15) scene.set("light_shafts", Math.max(0.15, v - 0.015), 8);
});
scene.on("change", "light_shafts", function (v, o) {
  if (!told && o >= 0.25 && v < 0.25) {
    told = true;
    scene.tell(tr('The slits in the wall have almost gone dark: the sun has gone down beyond the steppe, and only the light from the door is left in the shed.'));
  }
});
scene.on("change", "door_ajar", function (v, o) {
  if (v > 0.6 && !(o > 0.6) && scene.get("someone_present") === "bird") {
    scene.after(1.2, function () {
      if (scene.get("someone_present") === "bird") {
        scene.set("someone_present", "none");
        scene.tell(tr('The swallow darted off the beam and flew out through the open door, toward the sunset.'));
      }
    });
  }
});
scene.on("change", "found_bucket", function (v) {
  if (v === true || v === "true")
    scene.tell(tr('Under the sacking, a galvanised bucket of clean water. Someone brought it not long ago.'));
});
