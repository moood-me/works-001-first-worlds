var S = e.state,
  t = e.t,
  w =
    (S.wind_strength == null ? 0.6 : S.wind_strength) * Math.max(0, Math.min(1, S.door_open == null ? 1 : S.door_open));
var D = 1.4,
  n = Math.round(26 * w);
g.fillStyle = "#e2e6f3";
for (var i = 0; i < 26; i++) {
  var L = 4 + e.rnd() * 4,
    ph = e.rnd() * L,
    X0 = (e.rnd() - 0.5) * 1.1,
    h0 = 0.2 + e.rnd() * 2.0,
    sx = (e.rnd() - 0.5) * 2.2,
    sz = 0.6 + e.rnd() * 1.0,
    r0 = e.rnd();
  if (i >= n) continue;
  var s = ((t + ph) % L) / L;
  var Z = 3.35 - s * sz * 2.2;
  if (Z < 0.6) continue;
  var X = X0 + s * sx + Math.sin(t * 1.7 + ph * 3) * 0.05;
  var h = Math.max(0, h0 - s * (0.6 + h0 * 0.7));
  var k = D / Z,
    x = X * k,
    y = -1.7 + (1.7 - h) * k;
  var a = Math.min(1, s * 6) * (1 - s) * 0.8;
  var r = (0.004 + r0 * 0.005) * k;
  g.globalAlpha = a;
  g.beginPath();
  g.arc(x, y, r, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
