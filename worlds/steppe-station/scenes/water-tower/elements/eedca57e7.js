var t = e.t;
for (var i = 0; i < 46; i++) {
  var x0 = e.rnd() * 22,
    y0 = -0.1 - Math.pow(e.rnd(), 1.6) * 4.5,
    v = 0.35 + e.rnd() * 0.7,
    ph = e.rnd() * 6.28,
    sz = 0.006 + e.rnd() * 0.012;
  var x = ((((x0 + t * v + 0.3 * Math.sin(t * 0.5 + ph)) % 22) + 22) % 22) - 11;
  var y = y0 + 0.15 * Math.sin(t * 0.37 + ph) + 0.06 * Math.sin(t * 1.3 + ph * 2);
  var a = 0.35 + 0.3 * Math.sin(t * 0.8 + ph);
  g.fillStyle = "rgba(220,180,125," + a.toFixed(3) + ")";
  g.beginPath();
  g.arc(x, y, sz, 0, 6.283);
  g.fill();
}
for (var j = 0; j < 5; j++) {
  var x0 = e.rnd() * 30,
    v = 1.2 + e.rnd() * 0.9,
    yy = -0.05 - e.rnd() * 0.35,
    len = 2 + e.rnd() * 4;
  var q = (x0 + t * v) % 30;
  var x = q - 15;
  var a = 0.1 * Math.sin((Math.PI * q) / 30);
  var lg = g.createLinearGradient(x, 0, x + len, 0);
  lg.addColorStop(0, "rgba(210,170,120,0)");
  lg.addColorStop(0.5, "rgba(210,170,120," + a.toFixed(3) + ")");
  lg.addColorStop(1, "rgba(210,170,120,0)");
  g.strokeStyle = lg;
  g.lineWidth = 0.04 + 0.05 * Math.abs(Math.sin(t * 0.7 + j));
  g.beginPath();
  g.moveTo(x, yy);
  g.quadraticCurveTo(x + len * 0.5, yy - 0.08, x + len, yy + 0.02);
  g.stroke();
}
var gu = ((t * 0.6) % 48) - 24;
var ga = 0.07 * Math.max(0, Math.sin(t * 0.09));
if (ga > 0.005) {
  g.save();
  g.translate(gu, -0.6);
  g.scale(3.5, 0.9);
  var gg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  gg.addColorStop(0, "rgba(205,165,115," + ga.toFixed(3) + ")");
  gg.addColorStop(1, "rgba(205,165,115,0)");
  g.fillStyle = gg;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
}
