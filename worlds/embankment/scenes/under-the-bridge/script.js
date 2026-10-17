var DUR = 90,
  GAP = 70;
function start() {
  scene.set("tram", 0);
  scene.tell(tr('A river bus with its lights on has come out from under the far bridge'), "tram");
  scene.set("tram", 1, DUR);
  scene.after(DUR + GAP, start);
}
var v = scene.get("tram");
if (typeof v == "number" && v >= 0 && v < 1) {
  scene.set("tram", 1, (1 - v) * DUR);
  scene.after((1 - v) * DUR + GAP, start);
} else {
  scene.after(25, start);
}
var raised = (scene.get("raise") || 0) >= 0.98;
scene.on("change", "raise", function (val) {
  if (val >= 0.98 && !raised) {
    raised = true;
    scene.tell(tr('The spans of the far bridge have risen: the bridge is up'), "bridge");
  } else if (val < 0.5 && raised) {
    raised = false;
    scene.tell(tr('The spans of the far bridge have come down: the bridge is closed'), "bridge");
  }
});
scene.on("change", "lamp", function (val) {
  scene.tell(val ? tr('The lamp under the arch has come on') : tr('The lamp under the arch has gone out'), "lantern");
});
