var t = e.t;
var fl = 0.82 + 0.1 * Math.sin(t * 0.7) + 0.06 * Math.sin(t * 1.93 + 1.3);
g.globalCompositeOperation = "lighter";
for (var i = 0; i < 60; i++) {
  var u = e.rnd();
  var k = Math.pow(u, 1.6);
  var y = 0.3 + k * 26;
  var hw = 0.5 + k * 4.2;
  var x = -1.05 + (e.rnd() + e.rnd() - 1) * hw;
  var len = (0.4 + k * 5) * (0.4 + e.rnd());
  var th = Math.max(e.px, 0.1 + k * 0.7);
  var fq = 0.3 + e.rnd() * 1.1,
    ph = e.rnd() * 6.283;
  var s = Math.sin(t * fq + ph) * 0.6 + Math.sin(t * fq * 1.61 + ph * 1.7) * 0.4;
  var a = Math.max(0, s) * (0.85 - k * 0.55) * fl;
  if (a < 0.01) continue;
  g.globalAlpha = a;
  g.fillStyle = "#f0b870";
  g.beginPath();
  g.ellipse(x + Math.sin(t * 0.3 + ph) * hw * 0.1, y, len / 2, th / 2, 0, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
