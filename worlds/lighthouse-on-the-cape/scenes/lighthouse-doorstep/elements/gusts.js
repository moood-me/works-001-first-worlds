var t = e.t,
  S = e.state,
  w = S.wind_strength == null ? 0.6 : S.wind_strength;
var n = Math.round(46 * w);
g.lineCap = "round";
for (var i = 0; i < 46; i++) {
  var x0 = e.rnd() * 12,
    y0 = e.rnd() * 10,
    v = 0.7 + e.rnd() * 0.6,
    s = e.rnd(),
    ph = e.rnd() * 6.283;
  if (i >= n) continue;
  var vx = (1.5 + 6 * w) * v;
  var x = ((x0 + t * vx) % 12) - 6;
  var y = ((y0 + t * (0.5 + 0.4 * v) + Math.sin(t * 1.3 + ph) * 0.15) % 10) - 7;
  var L = 0.04 + w * 0.22 * v;
  g.strokeStyle = "rgba(222,228,242," + (0.25 + 0.45 * s).toFixed(3) + ")";
  g.lineWidth = 0.012 + s * 0.012;
  g.beginPath();
  g.moveTo(x - L, y - L * 0.12);
  g.lineTo(x, y);
  g.stroke();
}
