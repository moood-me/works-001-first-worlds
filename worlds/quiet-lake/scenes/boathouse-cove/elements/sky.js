var A = e.aspect,
  t = e.t,
  H = 0.5,
  st = e.state || {},
  dk = st.dusk == null ? 0.35 : st.dusk,
  L = st.light_level == null ? 0.7 : st.light_level,
  S = 5;
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
function hx(c) {
  var n = parseInt(c.slice(1), 16);
  return [n >> 16, (n >> 8) & 255, n & 255];
}
function tri(n, m, d, k1, k2, al) {
  var N = hx(n),
    M = hx(m),
    D = hx(d),
    o = [];
  for (var z = 0; z < 3; z++) o.push(Math.round((N[z] * (1 - k1) + M[z] * k1) * (1 - k2) + D[z] * k2));
  return "rgba(" + o.join(",") + "," + (al == null ? 1 : al) + ")";
}
var ND = cl(st.night_day || 0),
  a1 = sm(0, 0.55, ND),
  a2 = sm(0.15, 0.7, ND),
  a3 = sm(0.55, 1, ND);
var gr = g.createLinearGradient(0, -0.35, 0, H);
gr.addColorStop(0, tri("#060a18", "#1e2e55", "#4f6fa0", a1, a3));
gr.addColorStop(0.42, tri("#0e1630", "#2e4274", "#86a2c8", a1, a3));
gr.addColorStop(0.75, tri("#1b2747", "#55588a", "#cdbcc0", a2, a3));
gr.addColorStop(0.92, tri("#2c3a60", "#956f8a", "#f0c8a6", a2, a3));
gr.addColorStop(1, tri("#3d4c74", "#c48a8e", "#f8d6a8", a2, a3));
g.fillStyle = gr;
g.fillRect(-0.3, -0.4, A + 0.6, H + 0.405);
g.fillStyle = tri("#182240", "#5a5070", "#a89aa6", a2, a3);
g.fillRect(-0.3, H, A + 0.6, 0.8);
var ea = (1 - dk) * 0.5 * (1 - a1);
if (ea > 0.01) {
  g.save();
  g.translate(0.06 * A, H);
  g.scale(3.5, 0.6);
  var eg = g.createRadialGradient(0, 0, 0, 0, 0, 0.3);
  eg.addColorStop(0, "rgba(196,122,128," + ea.toFixed(3) + ")");
  eg.addColorStop(0.45, "rgba(112,80,120," + (ea * 0.45).toFixed(3) + ")");
  eg.addColorStop(1, "rgba(50,50,100,0)");
  g.fillStyle = eg;
  g.beginPath();
  g.arc(0, 0, 0.3, 0, 6.283);
  g.fill();
  g.restore();
}
if (a2 > 0.001) {
  g.save();
  g.translate(0.68 * A, H);
  g.scale(4, 1);
  var dr = 0.03 + 0.2 * a2 + 0.1 * a3,
    dg2 = g.createRadialGradient(0, 0, 0, 0, 0, dr);
  dg2.addColorStop(0, "rgba(255,196,140," + (0.55 * a2).toFixed(3) + ")");
  dg2.addColorStop(0.35, "rgba(236,150,140," + (0.35 * a2).toFixed(3) + ")");
  dg2.addColorStop(1, "rgba(200,140,170,0)");
  g.fillStyle = dg2;
  g.beginPath();
  g.arc(0, 0, dr, 0, 6.283);
  g.fill();
  g.restore();
}
var mx = 0.68 * A - 0.26 * A * sm(0, 1, ND),
  my = 0.215 - 0.035 * Math.min(t / 900, 1) - 0.06 * ND;
for (var i = 0; i < 110; i++) {
  var sx = R() * A,
    sy = -0.35 + Math.pow(R(), 1.25) * 0.78,
    sz = 0.0007 + R() * 0.0012,
    f = 0.4 + R() * 1.1,
    p = R() * 6.283,
    rk = R();
  if (rk > 0.25 + 0.75 * dk) continue;
  var v = Math.max(0, Math.min(1, (0.44 - sy) / 0.25)),
    dm = Math.hypot(sx - mx, sy - my),
    mv = Math.min(1, Math.max(0, (dm - 0.08) / 0.25));
  var a = v * mv * (0.55 + 0.45 * Math.sin(t * f + p)) * (0.5 + 0.5 * dk) * cl(((p / 6.283) * 0.5 + 0.03 - ND) / 0.04);
  if (a > 0.02) {
    g.globalAlpha = a;
    g.fillStyle = rk < 0.08 ? "#fff3dc" : "#dfe6fb";
    g.beginPath();
    g.arc(sx, sy, sz, 0, 6.283);
    g.fill();
  }
}
g.globalAlpha = 1;
g.globalCompositeOperation = "lighter";
var hl = g.createRadialGradient(mx, my, 0, mx, my, 0.5);
hl.addColorStop(0, "rgba(170,190,235," + (0.22 * L * (1 - a1)).toFixed(3) + ")");
hl.addColorStop(0.15, "rgba(120,140,200," + (0.09 * L * (1 - a1)).toFixed(3) + ")");
hl.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = hl;
g.fillRect(mx - 0.5, my - 0.5, 1, 1);
g.globalCompositeOperation = "source-over";
var Rm = 0.022;
var dg = g.createRadialGradient(mx - Rm * 0.3, my - Rm * 0.3, 0, mx, my, Rm * 1.15);
dg.addColorStop(0, "#fbf8ee");
dg.addColorStop(0.7, "#e6e6e2");
dg.addColorStop(0.87, "#cfd5e4");
dg.addColorStop(1, "rgba(200,210,235,0)");
g.globalAlpha = (0.55 + 0.45 * L) * (1 - 0.6 * a1);
g.fillStyle = dg;
g.beginPath();
g.arc(mx, my, Rm * 1.15, 0, 6.283);
g.fill();
g.fillStyle = "#7c8090";
var M = [
  [-0.3, -0.2, 0.33],
  [0.28, 0.08, 0.28],
  [-0.05, 0.38, 0.2],
  [0.1, -0.4, 0.15],
];
for (var m = 0; m < M.length; m++) {
  g.globalAlpha = 0.08;
  g.beginPath();
  g.arc(mx + M[m][0] * Rm, my + M[m][1] * Rm, M[m][2] * Rm, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
e.light(mx, my, 0.06, "#dce6ff", 0.25 * L * (1 - a1));
if (a3 > 0.001) {
  var sx2 = 0.68 * A,
    sy2 = H + 0.03 - 0.055 * a3;
  g.save();
  g.beginPath();
  g.rect(-0.3, -0.4, A + 0.6, H + 0.4);
  g.clip();
  var sgl = g.createRadialGradient(sx2, sy2, 0, sx2, sy2, 0.25);
  sgl.addColorStop(0, "rgba(255,230,190," + (0.6 * a3).toFixed(3) + ")");
  sgl.addColorStop(0.2, "rgba(255,190,140," + (0.25 * a3).toFixed(3) + ")");
  sgl.addColorStop(1, "rgba(255,170,140,0)");
  g.fillStyle = sgl;
  g.fillRect(sx2 - 0.3, sy2 - 0.3, 0.6, 0.6);
  g.fillStyle = "#fff3dc";
  g.globalAlpha = a3;
  g.beginPath();
  g.arc(sx2, sy2, 0.026, 0, 6.283);
  g.fill();
  g.globalAlpha = 1;
  g.restore();
  e.light(sx2, H - 0.01, 0.12, "#ffd6a8", 0.45 * a3);
}
var C = [
  [0.15, 0.12, 0.5, 0.008, 0.0009],
  [0.55, 0.235, 0.34, 0.006, 0.0006],
  [1.1, 0.06, 0.42, 0.01, 0.0007],
  [0.8, 0.37, 0.3, 0.005, 0.001],
  [0.35, 0.42, 0.45, 0.004, 0.0008],
];
for (var c = 0; c < C.length; c++) {
  var q = C[c],
    Wd = A + 0.9,
    cx = ((((q[0] * A + t * q[4]) % Wd) + Wd) % Wd) - 0.45,
    cy = q[1],
    Ln = q[2],
    T = q[3];
  var near = Math.max(0, 1 - Math.hypot(cx - mx, cy - my) / 0.6);
  for (var k = 0; k < 14; k++) {
    var u = R() - 0.5,
      px = cx + u * Ln,
      py = cy + (R() - 0.5) * T * 1.4 + u * u * T * 1.5,
      rx = Math.max(0.004, Ln * (0.07 + R() * 0.1) * (1 - Math.abs(u))),
      ry = T * (0.5 + R() * 0.7);
    g.globalAlpha = 0.3 + 0.15 * a2;
    g.fillStyle = tri("#1f2846", "#6e5f80", "#c7a9b0", a2, a3);
    g.beginPath();
    g.ellipse(px, py, rx, ry, 0, 0, 6.283);
    g.fill();
    g.globalAlpha = (0.04 + 0.22 * near) * L * (1 - a2) + (0.2 + 0.3 * near) * a2;
    g.fillStyle = tri("#9aaad4", "#ffb898", "#ffe2b8", a2, a3);
    g.beginPath();
    g.ellipse(px, py + ry * 0.4, rx * 0.85, ry * 0.4, 0, 0, 6.283);
    g.fill();
  }
}
g.globalAlpha = 1;
