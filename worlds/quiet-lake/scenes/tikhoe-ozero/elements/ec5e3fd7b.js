var A = e.aspect,
  t = e.t,
  H = 0.52,
  S = 7;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var gr = g.createLinearGradient(0, -0.35, 0, H);
gr.addColorStop(0, "#141830");
gr.addColorStop(0.4, "#252a4b");
gr.addColorStop(0.63, "#56435f");
gr.addColorStop(0.77, "#a05a63");
gr.addColorStop(0.885, "#dd8358");
gr.addColorStop(0.954, "#f4ad6c");
gr.addColorStop(1, "#ffd39a");
g.fillStyle = gr;
g.fillRect(-0.35, -0.4, A + 0.7, H + 0.405);
g.fillStyle = "#d88a60";
g.fillRect(-0.35, H, A + 0.7, 0.8);
for (var i = 0; i < 26; i++) {
  var sx = R() * A,
    sy = -0.35 + Math.pow(R(), 1.4) * 0.5,
    sz = 0.0008 + R() * 0.0011,
    f1 = 0.3 + R() * 0.8,
    p1 = R() * 6.283;
  var a = Math.max(0, Math.min(1, (0.14 - sy) / 0.35)) * 0.7 * (0.7 + 0.3 * Math.sin(t * f1 + p1));
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
  sunY = 0.432 + 0.03 * Math.min(t / 600, 1),
  Rs = 0.03;
g.globalCompositeOperation = "lighter";
var gl = g.createRadialGradient(sunX, sunY, 0, sunX, sunY, 0.55);
gl.addColorStop(0, "rgba(255,175,105,0.30)");
gl.addColorStop(0.18, "rgba(255,140,90,0.12)");
gl.addColorStop(0.5, "rgba(200,90,90,0.04)");
gl.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = gl;
g.fillRect(sunX - 0.6, sunY - 0.6, 1.2, 1.2);
g.save();
g.translate(sunX, H);
g.scale(4, 0.5);
var hg = g.createRadialGradient(0, 0, 0, 0, 0, 0.3);
hg.addColorStop(0, "rgba(255,190,130,0.22)");
hg.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = hg;
g.beginPath();
g.arc(0, 0, 0.3, 0, 6.283);
g.fill();
g.restore();
g.globalCompositeOperation = "source-over";
var C = [
  [0.1, 0.3, 0.3, 0.01, 0.0011],
  [0.5, 0.215, 0.44, 0.009, 0.0007],
  [0.86, 0.335, 0.26, 0.007, 0.0009],
  [1.25, 0.25, 0.36, 0.012, 0.0006],
  [0.33, 0.385, 0.2, 0.005, 0.001],
];
for (var c = 0; c < C.length; c++) {
  var q = C[c],
    Wd = A + 0.9,
    cx = ((((q[0] * A + t * q[4]) % Wd) + Wd) % Wd) - 0.45,
    cy = q[1],
    L = q[2],
    T = q[3];
  var near = Math.max(0, 1 - Math.abs(cx - sunX) / 0.9);
  for (var k = 0; k < 16; k++) {
    var u = R() - 0.5,
      px = cx + u * L,
      py = cy + (R() - 0.5) * T * 1.4 + u * u * T * 1.5,
      rx = Math.max(0.004, L * (0.07 + R() * 0.1) * (1 - Math.abs(u))),
      ry = T * (0.5 + R() * 0.7);
    g.globalAlpha = 0.2;
    g.fillStyle = "#6e4a68";
    g.beginPath();
    g.ellipse(px, py, rx, ry, 0, 0, 6.283);
    g.fill();
    g.globalAlpha = 0.08 + 0.22 * near;
    g.fillStyle = "#ffb07c";
    g.beginPath();
    g.ellipse(px, py + ry * 0.45, rx * 0.85, ry * 0.45, 0, 0, 6.283);
    g.fill();
  }
}
g.globalAlpha = 1;
var dg = g.createRadialGradient(sunX, sunY, 0, sunX, sunY, Rs * 1.25);
dg.addColorStop(0, "#fff4da");
dg.addColorStop(0.55, "#ffdc9c");
dg.addColorStop(0.78, "#ffbf72");
dg.addColorStop(0.86, "rgba(255,170,100,0.55)");
dg.addColorStop(1, "rgba(255,160,100,0)");
g.fillStyle = dg;
g.beginPath();
g.ellipse(sunX, sunY, Rs * 1.25, Rs * 1.19, 0, 0, 6.283);
g.fill();
e.light(sunX, sunY, 0.09, "#ffc27a", 0.35);
