var A = e.aspect || 1.78;
var sx = (0.26 * A * 80) / 0.87;
var ys = [136 / 28.8 - 1.7 - (0.15 * 80) / 28.8, 136 / 30.3 - 1.7 - (0.15 * 80) / 30.3];
for (var i = 0; i < 9; i++) {
  var k = e.rnd() < 0.5 ? 0 : 1;
  var x = sx + (e.rnd() - 0.5) * 90;
  if (k == 0 && x < -68) continue;
  var ph = e.rnd() * 6.28,
    fr = 0.3 + e.rnd() * 0.5;
  var a = Math.max(0, Math.sin(e.t * fr + ph)) * Math.exp(-Math.pow((x - sx) / 40, 2));
  if (a < 0.02) continue;
  var r = 0.35 + 0.4 * a;
  var gg = g.createRadialGradient(x, ys[k], 0, x, ys[k], r);
  gg.addColorStop(0, "rgba(255,236,190," + (0.9 * a).toFixed(3) + ")");
  gg.addColorStop(1, "rgba(255,200,130,0)");
  g.fillStyle = gg;
  g.beginPath();
  g.arc(x, ys[k], r, 0, 6.283);
  g.fill();
  g.strokeStyle = "rgba(255,236,200," + (0.5 * a).toFixed(3) + ")";
  g.lineWidth = e.px;
  g.beginPath();
  g.moveTo(x - r * 2.2, ys[k]);
  g.lineTo(x + r * 2.2, ys[k]);
  g.stroke();
}
