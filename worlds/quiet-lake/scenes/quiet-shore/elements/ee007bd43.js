var t = e.t,
  S = 31;
var st = e.state || {},
  s = Math.max(0, Math.min(1, st.sunset || 0)),
  m = Math.max(0, Math.min(1, st.morning || 0));
function P(h) {
  var n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function C(a, b, c, al) {
  var A = P(a),
    B = P(b),
    D = P(c),
    o = [];
  for (var i = 0; i < 3; i++) {
    var v = A[i] + (B[i] - A[i]) * s;
    o.push(Math.round(v + (D[i] - v) * m));
  }
  return al == null ? "rgb(" + o.join(",") + ")" : "rgba(" + o.join(",") + "," + Math.max(0, al).toFixed(3) + ")";
}
var sw = (1 - m) * (1 - 0.55 * s);
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var gr = g.createLinearGradient(0, 0, 0, 40);
gr.addColorStop(0, C("#e29c6c", "#7e4448", "#c8c2cc", 0));
gr.addColorStop(0.03, C("#dc9264", "#7a4048", "#c6c0cb", 0.28));
gr.addColorStop(0.07, C("#d2845e", "#6e3a46", "#c2bdca", 0.6));
gr.addColorStop(0.125, C("#c0705a", "#5a3446", "#b6b6c8"));
gr.addColorStop(0.216, C("#8a4e60", "#3a2840", "#a0a9c2"));
gr.addColorStop(0.371, C("#4c3a5a", "#231d37", "#8494b6"));
gr.addColorStop(0.605, C("#2c2842", "#16152a", "#6d82a6"));
gr.addColorStop(0.9, C("#1f1d33", "#111023", "#64799c"));
var cB = C("#1c1a30", "#0f0e20", "#60769a");
gr.addColorStop(1, cB);
g.fillStyle = gr;
g.fillRect(-75, 0, 150, 40);
g.fillStyle = cB;
g.fillRect(-75, 39.9, 150, 52.1);
if (sw > 0.01) {
  g.save();
  g.globalCompositeOperation = "lighter";
  var hgr = g.createLinearGradient(-6, 0, 6, 0);
  hgr.addColorStop(0, "rgba(255,180,120,0)");
  hgr.addColorStop(0.5, "rgba(255,180,120," + (0.2 * sw).toFixed(3) + ")");
  hgr.addColorStop(1, "rgba(255,180,120,0)");
  g.fillStyle = hgr;
  for (var b = 0; b < 26; b++) {
    var yb = b * 1.5;
    g.globalAlpha = Math.min(1, (yb + 0.75) / 1.4) * Math.exp(-yb / 16);
    g.fillRect(-6, yb, 12, 1.5);
  }
  g.restore();
}
g.globalAlpha = 1;
var cL = C("#f0ae80", "#9a5a52", "#eceef4"),
  cD = C("#1a1426", "#0c0a16", "#4a5a7a");
for (var i = 0; i < 110; i++) {
  var r1 = R(),
    y = 1 + Math.pow(r1, 1.7) * 38,
    x = (R() - 0.5) * 140,
    L = 0.25 + y * 0.09 + R() * y * 0.08,
    lt = R() < 0.55,
    ph = R() * 6.283,
    fr = 0.05 + R() * 0.09;
  var dx = Math.sin(t * fr + ph) * (0.08 + y * 0.01);
  g.globalAlpha =
    (0.06 + 0.07 * (0.5 + 0.5 * Math.sin(t * fr * 1.7 + ph * 2))) *
    Math.min(1, y / 2.5) *
    (lt ? Math.max(0.35, 1 - y / 40) : 1);
  g.fillStyle = lt ? cL : cD;
  g.fillRect(x + dx - L / 2, y, L, e.px * (0.9 + y / 14));
}
g.globalAlpha = 1;
if (sw > 0.01) {
  g.save();
  g.globalCompositeOperation = "lighter";
  for (var j = 0; j < 80; j++) {
    var r2 = R(),
      yg = 0.3 + Math.pow(r2, 1.9) * 37,
      ss = 0.01933 * (yg + 1.7),
      hw = 1.3 + yg * 0.065,
      xg = (R() + R() - 1) * hw,
      Lg = 0.12 + yg * 0.035 + R() * yg * 0.03,
      f = 0.4 + R() * 1.2,
      p = R() * 6.283;
    var w = Math.sin(t * f + p) + 0.6 * Math.sin(t * f * 1.73 + p * 1.3);
    var a = w > 0.6 ? Math.min(1, (w - 0.6) / 0.9) : 0;
    var bb = Math.exp(-Math.max(0, ss - 0.06) / 0.2) * Math.min(1, yg / 1.4);
    if (a > 0) {
      g.globalAlpha = a * bb * 0.8 * sw;
      g.fillStyle = "#ffdcaa";
      g.fillRect(xg - Lg / 2 + Math.sin(t * 0.3 + p) * 0.05 * (1 + yg * 0.05), yg, Lg, e.px * (1 + yg / 12));
    }
  }
  g.restore();
}
g.globalAlpha = 1;
if (m > 0.01) {
  S = 77;
  for (var n = 0; n < 6; n++) {
    var my = 2 + R() * 16,
      mx = (R() - 0.5) * 100 + Math.sin(t * 0.02 + n) * 4,
      mrx = 14 + R() * 24,
      mry = 0.6 + my * 0.08;
    g.globalAlpha = 0.13 * m;
    g.fillStyle = "#f0f2f6";
    g.beginPath();
    g.ellipse(mx, my, mrx, mry, 0, 0, 6.283);
    g.fill();
  }
  g.globalAlpha = 1;
}
