var t = e.t;
var b = g.createLinearGradient(0, -2.3, 0, -1.2);
b.addColorStop(0, "rgba(138,146,157,0)");
b.addColorStop(0.62, "rgba(138,146,157,0.32)");
b.addColorStop(0.85, "rgba(138,146,157,0.16)");
b.addColorStop(1, "rgba(138,146,157,0)");
g.fillStyle = b;
g.fillRect(-140, -2.3, 280, 1.1);
for (var i = 0; i < 10; i++) {
  var cx = (e.rnd() - 0.5) * 240;
  var w = 14 + e.rnd() * 34;
  var cy = -1.5 - e.rnd() * 0.4;
  var hh = 0.12 + e.rnd() * 0.25;
  var ph = e.rnd() * 6.283;
  var x = cx + Math.sin(t * 0.011 + ph) * 14 + Math.sin(t * 0.027 + ph * 1.7) * 5;
  var a = 0.14 + 0.07 * Math.sin(t * 0.043 + ph);
  g.save();
  g.translate(x, cy);
  g.scale(w, hh);
  var rg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  rg.addColorStop(0, "rgba(146,154,165," + a.toFixed(3) + ")");
  rg.addColorStop(1, "rgba(146,154,165,0)");
  g.fillStyle = rg;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
}
