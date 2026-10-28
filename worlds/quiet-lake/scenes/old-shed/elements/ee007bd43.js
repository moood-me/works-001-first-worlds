var t = e.t,
  S = 31;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var gr = g.createLinearGradient(0, 0, 0, 40);
gr.addColorStop(0, "rgba(226,156,108,0)");
gr.addColorStop(0.03, "rgba(220,146,100,0.28)");
gr.addColorStop(0.07, "rgba(210,132,94,0.6)");
gr.addColorStop(0.125, "rgba(192,112,90,1)");
gr.addColorStop(0.216, "#8a4e60");
gr.addColorStop(0.371, "#4c3a5a");
gr.addColorStop(0.605, "#2c2842");
gr.addColorStop(0.9, "#1f1d33");
gr.addColorStop(1, "#1c1a30");
g.fillStyle = gr;
g.fillRect(-75, 0, 150, 40);
g.fillStyle = "#1c1a30";
g.fillRect(-75, 40, 150, 2.5);
g.save();
g.globalCompositeOperation = "lighter";
var hgr = g.createLinearGradient(-6, 0, 6, 0);
hgr.addColorStop(0, "rgba(255,180,120,0)");
hgr.addColorStop(0.5, "rgba(255,180,120,0.2)");
hgr.addColorStop(1, "rgba(255,180,120,0)");
g.fillStyle = hgr;
for (var b = 0; b < 26; b++) {
  var yb = b * 1.5;
  g.globalAlpha = Math.min(1, (yb + 0.75) / 1.4) * Math.exp(-yb / 16);
  g.fillRect(-6, yb, 12, 1.5);
}
g.restore();
g.globalAlpha = 1;
for (var i = 0; i < 150; i++) {
  var r1 = R(),
    y = 1 + Math.pow(r1, 1.7) * 38,
    x = (R() - 0.5) * 140,
    L = 0.25 + y * 0.09 + R() * y * 0.08,
    lt = R() < 0.55,
    ph = R() * 6.283,
    fr = 0.08 + R() * 0.14;
  var dx = Math.sin(t * fr + ph) * (0.15 + y * 0.02);
  g.globalAlpha =
    (0.08 + 0.1 * (0.5 + 0.5 * Math.sin(t * fr * 1.7 + ph * 2))) *
    Math.min(1, y / 2.5) *
    (lt ? Math.max(0.35, 1 - y / 40) : 1);
  g.fillStyle = lt ? "#f0ae80" : "#1a1426";
  g.fillRect(x + dx - L / 2, y, L, e.px * (0.9 + y / 14));
}
g.globalAlpha = 1;
g.save();
g.globalCompositeOperation = "lighter";
for (var j = 0; j < 110; j++) {
  var r2 = R(),
    yg = 0.3 + Math.pow(r2, 1.9) * 37,
    s = 0.01933 * (yg + 1.7),
    hw = 1.3 + yg * 0.065,
    xg = (R() + R() - 1) * hw,
    Lg = 0.12 + yg * 0.035 + R() * yg * 0.03,
    f = 0.6 + R() * 1.8,
    p = R() * 6.283;
  var w = Math.sin(t * f + p) + 0.6 * Math.sin(t * f * 1.73 + p * 1.3);
  var a = w > 0.5 ? Math.min(1, (w - 0.5) / 0.9) : 0;
  var bb = Math.exp(-Math.max(0, s - 0.06) / 0.2) * Math.min(1, yg / 1.4);
  if (a > 0) {
    g.globalAlpha = a * bb * 0.9;
    g.fillStyle = "#ffdcaa";
    g.fillRect(xg - Lg / 2 + Math.sin(t * 0.3 + p) * 0.08 * (1 + yg * 0.05), yg, Lg, e.px * (1 + yg / 12));
  }
}
g.restore();
g.globalAlpha = 1;
