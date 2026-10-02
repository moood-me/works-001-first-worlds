var t = e.t,
  st = e.state || {},
  L = st.light_level == null ? 0.7 : st.light_level,
  Rp = st.ripples == null ? 0.35 : st.ripples,
  S = 29;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var gr = g.createLinearGradient(0, 0, 0, 42);
gr.addColorStop(0, "rgba(40,54,90,0)");
gr.addColorStop(0.04, "rgba(36,50,86,0.55)");
gr.addColorStop(0.1, "#22304f");
gr.addColorStop(0.3, "#18223c");
gr.addColorStop(0.6, "#111930");
gr.addColorStop(1, "#0d1427");
g.fillStyle = gr;
g.fillRect(-90, 0, 180, 42.5);
g.save();
g.globalCompositeOperation = "lighter";
var cg = g.createLinearGradient(-7, 0, 7, 0);
cg.addColorStop(0, "rgba(150,170,230,0)");
cg.addColorStop(0.5, "rgba(150,170,230," + (0.12 * L).toFixed(3) + ")");
cg.addColorStop(1, "rgba(150,170,230,0)");
g.fillStyle = cg;
for (var b = 0; b < 26; b++) {
  var yb = b * 1.5;
  g.globalAlpha = Math.min(1, (yb + 0.75) / 1.4) * Math.exp(-yb / 14);
  g.fillRect(-7, yb, 14, 1.5);
}
g.restore();
g.globalAlpha = 1;
var amp = 0.4 + Rp * 1.2;
for (var i = 0; i < 170; i++) {
  var y = 1 + Math.pow(R(), 1.7) * 38,
    x = (R() - 0.5) * 170,
    Ls = 0.25 + y * 0.09 + R() * y * 0.08,
    lt = R() < 0.5,
    ph = R() * 6.283,
    fr = 0.07 + R() * 0.13;
  var dx = Math.sin(t * fr * (0.7 + Rp) + ph) * (0.15 + y * 0.02) * amp;
  g.globalAlpha =
    (0.07 + 0.09 * (0.5 + 0.5 * Math.sin(t * fr * 1.7 + ph * 2))) *
    Math.min(1, y / 2.5) *
    (0.5 + Rp * 0.9) *
    (lt ? L : 1);
  g.fillStyle = lt ? "#7a8cbc" : "#070b16";
  g.fillRect(x + dx - Ls / 2, y, Ls, e.px * (0.9 + y / 14));
}
g.globalAlpha = 1;
g.save();
g.globalCompositeOperation = "lighter";
for (var j = 0; j < 130; j++) {
  var yg = 0.3 + Math.pow(R(), 1.8) * 37,
    hw = 1.2 + yg * 0.07 * (0.7 + Rp * 0.8),
    xg = (R() + R() - 1) * hw,
    Lg = 0.12 + yg * 0.035 + R() * yg * 0.03,
    f = 0.5 + R() * 1.6,
    p = R() * 6.283;
  var w = Math.sin(t * f + p) + 0.6 * Math.sin(t * f * 1.73 + p * 1.3);
  var a = w > 0.5 ? Math.min(1, (w - 0.5) / 0.9) : 0;
  var bb = Math.exp(-yg / 30) * Math.min(1, yg / 1.4);
  if (a > 0) {
    g.globalAlpha = a * bb * 0.85 * L;
    g.fillStyle = "#e4ebff";
    g.fillRect(xg - Lg / 2 + Math.sin(t * 0.3 + p) * 0.08 * (1 + yg * 0.05), yg, Lg, e.px * (1 + yg / 12));
  }
}
g.restore();
g.globalAlpha = 1;
for (var m = 0; m < 6; m++) {
  var fx = (R() - 0.5) * 160 + Math.sin(t * 0.02 + m) * 6,
    fy = 0.4 + R() * 2.5,
    frx = 20 + R() * 40,
    fry = 0.3 + R() * 0.6;
  g.globalAlpha = 0.06 + 0.04 * Math.sin(t * 0.1 + m * 2);
  g.fillStyle = "#6a7ca8";
  g.beginPath();
  g.ellipse(fx, fy, frx, fry, 0, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
