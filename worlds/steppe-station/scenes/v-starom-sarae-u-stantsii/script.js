var told = false;
scene.every(30, function () {
  var v = scene.get("light_shafts");
  if (typeof v === "number" && v > 0.15) scene.set("light_shafts", Math.max(0.15, v - 0.015), 8);
});
scene.on("change", "light_shafts", function (v, o) {
  if (!told && o >= 0.25 && v < 0.25) {
    told = true;
    scene.tell("Щели в стене почти погасли: солнце ушло за степь, в сарае остаётся только свет из двери.");
  }
});
scene.on("change", "door_ajar", function (v, o) {
  if (v > 0.6 && !(o > 0.6) && scene.get("someone_present") === "bird") {
    scene.after(1.2, function () {
      if (scene.get("someone_present") === "bird") {
        scene.set("someone_present", "none");
        scene.tell("Ласточка сорвалась с балки и вылетела в распахнутую дверь, к закату.");
      }
    });
  }
});
scene.on("change", "found_bucket", function (v) {
  if (v === true || v === "true")
    scene.tell("Под мешковиной — оцинкованное ведро, в нём чистая вода. Кто-то принёс её недавно.");
});
