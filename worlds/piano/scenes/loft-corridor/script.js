scene.every(12, function () {
  var s = scene.get("steam") || 0;
  if (s > 0) {
    var n = Math.max(0, Math.round((s - 0.03) * 100) / 100);
    scene.set("steam", n, 3);
    if (n === 0) scene.tell("The tea in the cup has gone cold - no more steam.");
  }
});
scene.on("change", "catFollowing", function (v, o) {
  o = o || 0;
  if (v > 0.05 && o <= 0.05 && (scene.get("doorOpen") || 0) < 0.3) {
    scene.set("doorOpen", 0.35, 2.5);
    scene.tell("The cat nosed the loft door wider and slipped out into the hallway.");
  }
  if (v >= 0.99 && o < 0.99) {
    scene.tell(
      (scene.get("caretakerHere") || 0) > 0.5
        ? "The cat has reached the caretaker and is winding round his ankles."
        : "The cat is out in the hallway, alone.",
    );
  }
});
scene.on("change", "doorOpen", function (v, o) {
  o = o || 0;
  if (v > 0.6 && o <= 0.6 && (scene.get("caretakerHere") || 0) > 0.5)
    scene.tell("The loft door stands open; warm light falls across the caretaker.");
  if (v < 0.02 && o >= 0.02) scene.tell("The loft door has clicked shut.");
});
scene.on("change", "sconceLit", function (v, o) {
  o = o == null ? 1 : o;
  if (v < 0.05 && o >= 0.05) scene.tell("The sconce went out; only the light from the loft door is left.");
  if (v > 0.95 && o <= 0.95) scene.tell("The sconce is lit again.");
});
scene.on("change", "caretakerHere", function (v, o) {
  o = o || 0;
  if (v >= 0.99 && o < 0.99) scene.tell("The caretaker has stopped by the loft door, mid-step.");
  if (v <= 0.01 && o > 0.01) scene.tell("The caretaker has gone down the stairs.");
});
