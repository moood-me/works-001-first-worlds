var t = e.t,
  st = e.state || {},
  Rp = st.ripples == null ? 0.35 : st.ripples,
  L = st.light_level == null ? 0.7 : st.light_level,
  S = 41;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
function ey(x) {
  var s = Math.min(1, Math.max(0, (x - 3) / 4));
  s = s * s * (3 - 2 * s);
  return -3.3 + 0.3 * Math.sin(x * 0.5 + 1) + 0.15 * Math.sin(x * 1.7 + 0.3) + s * 1.8;
}
var x;
g.beginPath();
g.moveTo(-20, 4.5);
for (x = -20; x <= 20; x += 0.25) g.lineTo(x, ey(x));
g.lineTo(20, 4.5);
g.closePath();
var lg = g.createLinearGradient(0, -3.5, 0, 4.5);
lg.addColorStop(0, "#2a3149");
lg.addColorStop(0.14, "#1f2438");
lg.addColorStop(1, "#11131d");
g.fillStyle = lg;
g.fill();
g.beginPath();
for (x = -20; x <= 20; x += 0.25) {
  var yy = ey(x) + 0.18;
  if (x == -20) g.moveTo(x, yy);
  else g.lineTo(x, yy);
}
g.strokeStyle = "rgba(70,86,128,0.45)";
g.lineWidth = 0.35;
g.stroke();
for (var i = 0; i < 420; i++) {
  var px = (R() - 0.5) * 40,
    py = ey(px) + 0.3 + R() * (4.2 - ey(px)),
    r = 0.015 + R() * 0.05,
    dk = R() < 0.6;
  g.fillStyle = dk ? "rgba(10,12,20,0.5)" : "rgba(70,80,110,0.28)";
  g.beginPath();
  g.ellipse(px, py, r * 1.3, r, R() * 3, 0, 6.283);
  g.fill();
}
for (var k = 0; k < 3; k++) {
  var ph = (t * 0.09 * (0.6 + Rp) + k / 3) % 1,
    o = ph * 0.4;
  g.beginPath();
  for (x = -20; x <= 20; x += 0.3) {
    var yy2 = ey(x) - 0.12 + o + 0.04 * Math.sin(x * 2.1 + t * 0.5 + k);
    if (x == -20) g.moveTo(x, yy2);
    else g.lineTo(x, yy2);
  }
  g.globalAlpha = Math.sin(Math.PI * ph) * (0.12 + 0.4 * Rp) * (0.5 + 0.5 * L);
  g.strokeStyle = "#9fb0d8";
  g.lineWidth = 0.03;
  g.stroke();
}
g.globalAlpha = 1;
for (var j = 0; j < 40; j++) {
  var gx = (R() - 0.5) * 30,
    gy = ey(gx) + 0.05 + R() * 0.3,
    f = 0.5 + R() * 1.4,
    p = R() * 6.283,
    w = Math.sin(t * f + p);
  if (w > 0.6) {
    g.globalAlpha = (w - 0.6) * 2 * L;
    g.fillStyle = "#dfe6ff";
    g.fillRect(gx - 0.08, gy, 0.16, 0.02);
  }
}
g.globalAlpha = 1;
