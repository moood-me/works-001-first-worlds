var s = scene,
  lf0 = s.get("light_fade") || 0,
  told1 = lf0 >= 0.6,
  told2 = lf0 >= 0.98,
  toldG = false;
s.every(12, function () {
  var v = s.get("light_fade") || 0;
  if (v < 1) s.set("light_fade", Math.min(1, v + 0.012), 12);
});
s.on("change", "light_fade", function (v) {
  if (!told1 && v >= 0.6) {
    told1 = true;
    s.tell("The last sun shafts have faded from the pines; the path lies in shadow.");
  }
  if (!told2 && v >= 0.98) {
    told2 = true;
    s.tell("Dusk has closed in under the pines; only the pale feathers still show on the path.");
  }
});
function gustLoop() {
  s.after(18 + Math.random() * 30, function () {
    s.set("gust", 1, 2.5);
    s.after(3, function () {
      s.set("gust", 0, 6);
    });
    if (!toldG && (s.get("figure_present") || 0) > 0.5) {
      toldG = true;
      s.tell("A breath of wind lifts the ribbons on the stump; the figure on the path does not stir.");
    }
    gustLoop();
  });
}
gustLoop();
