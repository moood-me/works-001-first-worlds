var A = e.aspect,
  t = e.t,
  H = 0.52,
  S = 7;
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
var gr = g.createLinearGradient(0, -0.35, 0, H);
gr.addColorStop(0, C("#141830", "#070918", "#4c6a97"));
gr.addColorStop(0.4, C("#252a4b", "#10142c", "#7891ba"));
gr.addColorStop(0.63, C("#56435f", "#231f3c", "#a9b5ce"));
gr.addColorStop(0.77, C("#a05a63", "#432e48", "#cec3cf"));
gr.addColorStop(0.885, C("#dd8358", "#763e48", "#e6ccc6"));
gr.addColorStop(0.954, C("#f4ad6c", "#a3503f", "#f1d5c6"));
gr.addColorStop(1, C("#ffd39a", "#c46a45", "#f7e1cc"));
g.fillStyle = gr;
g.fillRect(-0.35, -0.4, A + 0.7, H + 0.405);
g.fillStyle = C("#d88a60", "#7a4048", "#d6cdd2");
g.fillRect(-0.35, H, A + 0.7, 0.8);
var sa = (0.25 + 0.75 * s) * (1 - m),
  lim = 0.08 + 0.24 * s;
for (var i = 0; i < 60; i++) {
  var sx = -0.3 + R() * (A + 0.6),
    sy = -0.35 + Math.pow(R(), 1.4) * 0.62,
    sz = 0.0007 + R() * 0.0012,
    f1 = 0.3 + R() * 0.8,
    p1 = R() * 6.283;
  var a = Math.max(0, Math.min(1, (lim - sy) / 0.3)) * 0.75 * sa * (0.7 + 0.3 * Math.sin(t * f1 + p1));
  if (a > 0.01) {
    g.globalAlpha = a;
    g.fillStyle = "#efe9f6";
    g.beginPath();
    g.arc(sx, sy, sz, 0, 6.283);
    g.fill();
  }
}
g.globalAlpha = 1;
var sunX = 0.57 * A,
  sunY = 0.432 + 0.1 * s,
  Rs = 0.03,
  sv = 1 - m;
if (sv > 0.01) {
  g.globalCompositeOperation = "lighter";
  var gl = g.createRadialGradient(sunX, sunY, 0, sunX, sunY, 0.55);
  gl.addColorStop(0, "rgba(255,175,105," + (0.3 * sw).toFixed(3) + ")");
  gl.addColorStop(0.18, "rgba(255,140,90," + (0.12 * sw).toFixed(3) + ")");
  gl.addColorStop(0.5, "rgba(200,90,90," + (0.04 * sw).toFixed(3) + ")");
  gl.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = gl;
  g.fillRect(sunX - 0.6, sunY - 0.6, 1.2, 1.2);
  g.save();
  g.translate(sunX, H);
  g.scale(4, 0.5);
  var hg = g.createRadialGradient(0, 0, 0, 0, 0, 0.3);
  hg.addColorStop(0, "rgba(255,190,130," + (0.22 * sw).toFixed(3) + ")");
  hg.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = hg;
  g.beginPath();
  g.arc(0, 0, 0.3, 0, 6.283);
  g.fill();
  g.restore();
  g.globalCompositeOperation = "source-over";
}
if (m > 0.01) {
  g.globalCompositeOperation = "lighter";
  g.save();
  g.translate(0.1 * A, H - 0.01);
  g.scale(3, 0.6);
  var mg = g.createRadialGradient(0, 0, 0, 0, 0, 0.35);
  mg.addColorStop(0, "rgba(255,214,190," + (0.26 * m).toFixed(3) + ")");
  mg.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = mg;
  g.beginPath();
  g.arc(0, 0, 0.35, 0, 6.283);
  g.fill();
  g.restore();
  g.globalCompositeOperation = "source-over";
}
var C1 = C("#6e4a68", "#2a2140", "#9aa3bf"),
  C2 = C("#ffb07c", "#b85a48", "#fff0e4"),
  CL = [
    [0.1, 0.3, 0.3, 0.01, 0.0011],
    [0.5, 0.215, 0.44, 0.009, 0.0007],
    [0.86, 0.335, 0.26, 0.007, 0.0009],
    [1.25, 0.25, 0.36, 0.012, 0.0006],
    [0.33, 0.385, 0.2, 0.005, 0.001],
  ];
for (var c = 0; c < CL.length; c++) {
  var q = CL[c],
    Wd = A + 0.9,
    cx = ((((q[0] * A + t * q[4]) % Wd) + Wd) % Wd) - 0.45,
    cy = q[1],
    L = q[2],
    T = q[3];
  var near = Math.max(0, 1 - Math.abs(cx - sunX) / 0.9) * (1 - m) + 0.45 * m;
  for (var k = 0; k < 16; k++) {
    var u = R() - 0.5,
      px = cx + u * L,
      py = cy + (R() - 0.5) * T * 1.4 + u * u * T * 1.5,
      rx = Math.max(0.004, L * (0.07 + R() * 0.1) * (1 - Math.abs(u))),
      ry = T * (0.5 + R() * 0.7);
    g.globalAlpha = 0.2;
    g.fillStyle = C1;
    g.beginPath();
    g.ellipse(px, py, rx, ry, 0, 0, 6.283);
    g.fill();
    g.globalAlpha = (0.08 + 0.22 * near) * (1 - 0.6 * s * (1 - m));
    g.fillStyle = C2;
    g.beginPath();
    g.ellipse(px, py + ry * 0.45, rx * 0.85, ry * 0.45, 0, 0, 6.283);
    g.fill();
  }
}
g.globalAlpha = 1;
if (sv > 0.01) {
  g.globalAlpha = sv;
  var dg = g.createRadialGradient(sunX, sunY, 0, sunX, sunY, Rs * 1.25);
  dg.addColorStop(0, C("#fff4da", "#ffb27a", "#fff4da"));
  dg.addColorStop(0.55, C("#ffdc9c", "#ff9a5e", "#ffdc9c"));
  dg.addColorStop(0.78, C("#ffbf72", "#f07a4a", "#ffbf72"));
  dg.addColorStop(0.86, "rgba(255,170,100,0.55)");
  dg.addColorStop(1, "rgba(255,160,100,0)");
  g.fillStyle = dg;
  g.beginPath();
  g.ellipse(sunX, sunY, Rs * 1.25, Rs * 1.19, 0, 0, 6.283);
  g.fill();
  g.globalAlpha = 1;
  e.light(sunX, sunY, 0.09, "#ffc27a", 0.35 * sw);
}
