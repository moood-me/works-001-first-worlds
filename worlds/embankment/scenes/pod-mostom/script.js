var DUR = 90,
  GAP = 70;
function start() {
  scene.set("tram", 0);
  scene.tell("Из-под дальнего моста вышел речной трамвайчик с огнями", "tram");
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
    scene.tell("Пролёты дальнего моста поднялись — мост разведён", "bridge");
  } else if (val < 0.5 && raised) {
    raised = false;
    scene.tell("Пролёты дальнего моста опустились, мост сведён", "bridge");
  }
});
scene.on("change", "lamp", function (val) {
  scene.tell(val ? "Фонарь под аркой зажёгся" : "Фонарь под аркой погас", "lantern");
});
