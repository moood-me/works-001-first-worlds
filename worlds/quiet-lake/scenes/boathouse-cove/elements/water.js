var t = e.t,
  st = e.state || {},
  L = st.light_level == null ? 0.7 : st.light_level,
  Rp = st.ripples == null ? 0.35 : st.ripples,
  S = 29;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
function cl(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}
function sm(a, b, v) {
  v = cl((v - a) / (b - a));
  return v * v * (3 - 2 * v);
}
function ma(a, b, k, al) {
  var A = parseInt(a.slice(1), 16),
    B = parseInt(b.slice(1), 16);
  return (
    "rgba(" +
    Math.round((A >> 16) * (1 - k) + (B >> 16) * k) +
    "," +
    Math.round(((A >> 8) & 255) * (1 - k) + ((B >> 8) & 255) * k) +
    "," +
    Math.round((A & 255) * (1 - k) + (B & 255) * k) +
    "," +
    (al == null ? 1 : al).toFixed(3) +
    ")"
  );
}
var ND = cl(st.night_day || 0),
  wa = sm(0.1, 0.85, ND),
  ws = sm(0.55, 1, ND),
  wm = 1 - sm(0, 0.5, ND);
var gr = g.createLinearGradient(0, 0, 0, 42);
gr.addColorStop(0, "rgba(40,54,90,0)");
gr.addColorStop(0.04, ma("#24324f", "#c6a4a2", wa, 0.55));
gr.addColorStop(0.1, ma("#22304f", "#b4999e", wa));
gr.addColorStop(0.3, ma("#18223c", "#7a84a2", wa));
gr.addColorStop(0.6, ma("#111930", "#56618a", wa));
gr.addColorStop(1, ma("#0d1427", "#3c4769", wa));
g.fillStyle = gr;
g.fillRect(-90, 0, 180, 42.5);
g.save();
g.globalCompositeOperation = "lighter";
var cg = g.createLinearGradient(-7, 0, 7, 0);
cg.addColorStop(0, "rgba(150,170,230,0)");
cg.addColorStop(0.5, ma("#96aae6", "#ffc896", ws, 0.12 * L * wm + 0.3 * ws));
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
    (lt ? L * (1 - wa) + wa : 1);
  g.fillStyle = lt ? ma("#7a8cbc", "#f2dccc", wa) : ma("#070b16", "#364266", wa);
  g.fillRect(x + dx - Ls / 2, y, Ls, e.px * (0.9 + y / 14));
}
g.globalAlpha = 1;
g.save();
g.globalCompositeOperation = "lighter";
for (var j = 0; j < 130; j++) {
  var yg = 0.3 + Math.pow(R(), 1.8) * 37,
    hw = (1.2 + yg * 0.07 * (0.7 + Rp * 0.8)) * (1 + 0.6 * ws),
    xg = (R() + R() - 1) * hw,
    Lg = 0.12 + yg * 0.035 + R() * yg * 0.03,
    f = 0.5 + R() * 1.6,
    p = R() * 6.283;
  var w = Math.sin(t * f + p) + 0.6 * Math.sin(t * f * 1.73 + p * 1.3);
  var a = w > 0.5 ? Math.min(1, (w - 0.5) / 0.9) : 0;
  var bb = Math.exp(-yg / 30) * Math.min(1, yg / 1.4);
  if (a > 0) {
    g.globalAlpha = Math.min(1, a * bb * (0.85 * L * wm + 1.1 * ws));
    g.fillStyle = ma("#e4ebff", "#ffe6bc", ws);
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
  var fo = 1 - sm(0.1 + m * 0.07, 0.45 + m * 0.07, ND);
  fx += (m % 2 ? 1 : -1) * 40 * (1 - fo);
  fry *= 0.3 + 0.7 * fo;
  g.globalAlpha = (0.06 + 0.04 * Math.sin(t * 0.1 + m * 2)) * fo;
  g.fillStyle = ma("#6a7ca8", "#d6c2c4", wa);
  g.beginPath();
  g.ellipse(fx, fy, frx, fry, 0, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
