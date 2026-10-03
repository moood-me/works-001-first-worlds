var last = scene.get("child_position") || 0;
scene.every(0.3, function () {
  var p = scene.get("child_position") || 0;
  var mv = Math.abs(p - last) > 0.0005;
  if (mv !== !!scene.get("child_walking")) scene.set("child_walking", mv);
  last = p;
});
scene.on("change", "child_position", function (v, o) {
  if (v > 0 && !(o > 0)) scene.tell("A small figure in a red scarf appears along the shore, coming from the right.");
  if (v >= 0.999 && o < 0.999) scene.tell("The child has reached the bench by the boathouse.");
});
scene.every(15, function () {
  var d = scene.get("dusk");
  if (d < 1) scene.set("dusk", Math.min(1, d + 0.04), 14);
});
scene.on("change", "dusk", function (v, o) {
  if (v >= 0.999 && o < 0.999) scene.tell("The last of the sunset is gone: full night, the cove lit only by the moon.");
});
scene.every(20, function () {
  var L = scene.get("light_level"),
    b = scene.get("box_visible");
  if (L > 0.5 && b < 0.8) scene.set("box_visible", Math.min(0.8, b + 0.03), 18);
});
scene.on("change", "box_visible", function (v, o) {
  if (v >= 0.6 && o < 0.6)
    scene.tell("Moonlight has crept under the bench: the little tin box glints, its padlock catching the light.");
});
scene.on("change", "box_locked", function (v, o) {
  if (v === false && o !== false) scene.tell("The tin box is open now.");
});
scene.on("change", "bench_legs", function (v, o) {
  if (v >= 0.95 && o < 0.95)
    scene.tell(
      "The bench has crawled off along the shore on its many legs; the tin box lies alone in the open sand.",
      "bench",
    );
});
