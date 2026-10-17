var A = e.aspect,
  mx = 0.8 * A,
  my = 0.2,
  R = 0.021,
  t = e.t;
var h = g.createRadialGradient(mx, my, R * 0.9, mx, my, 0.32);
h.addColorStop(0, "rgba(226,222,206,0.30)");
h.addColorStop(0.12, "rgba(196,200,212,0.12)");
h.addColorStop(0.45, "rgba(160,170,190,0.04)");
h.addColorStop(1, "rgba(150,160,180,0)");
g.fillStyle = h;
g.fillRect(mx - 0.32, my - 0.32, 0.64, 0.64);
var d = g.createRadialGradient(mx + R * 0.25, my - R * 0.3, R * 0.1, mx, my, R);
d.addColorStop(0, "#f0ecdf");
d.addColorStop(0.75, "#dddacd");
d.addColorStop(1, "#c6c4ba");
g.fillStyle = d;
g.beginPath();
g.arc(mx, my, R, 0, 6.283);
g.fill();
g.save();
g.beginPath();
g.arc(mx, my, R, 0, 6.283);
g.clip();
var M = [
  [-0.32, -0.28, 0.34, 0.5],
  [0.12, -0.12, 0.26, 0.2],
  [0.28, 0.3, 0.2, 1.1],
  [-0.12, 0.28, 0.17, 0.3],
  [-0.5, 0.08, 0.14, 0.9],
  [0.45, -0.4, 0.1, 0.2],
];
for (var j = 0; j < M.length; j++) {
  g.fillStyle = "rgba(118,124,136," + (0.16 + j * 0.02) + ")";
  g.beginPath();
  g.ellipse(mx + M[j][0] * R, my + M[j][1] * R, M[j][2] * R, M[j][2] * R * 0.78, M[j][3], 0, 6.283);
  g.fill();
}
var sh = g.createLinearGradient(mx - R, my, mx + R, my);
sh.addColorStop(0, "rgba(38,46,60,0.5)");
sh.addColorStop(0.3, "rgba(38,46,60,0)");
g.fillStyle = sh;
g.fillRect(mx - R, my - R, 2 * R, 2 * R);
g.restore();
var ry = 1.12 - my;
g.save();
g.beginPath();
g.rect(0, 0.563, A, 0.8);
g.clip();
g.translate(mx, ry);
g.scale(0.3, 1);
var rg = g.createRadialGradient(0, 0, 0, 0, 0, 0.42);
rg.addColorStop(0, "rgba(205,208,214,0.16)");
rg.addColorStop(1, "rgba(205,208,214,0)");
g.fillStyle = rg;
g.fillRect(-0.42, -0.42, 0.84, 0.84);
g.restore();
g.globalCompositeOperation = "lighter";
for (var i = 0; i < 140; i++) {
  var u = e.rnd();
  var k = Math.pow(u, 1.7);
  var y = 0.566 + k * 0.62;
  var sp = 0.004 + k * 0.075;
  var x = mx + (e.rnd() + e.rnd() - 1) * sp;
  var len = (0.003 + k * 0.045) * (0.4 + e.rnd());
  var th = Math.max(e.px * 0.8, 0.001 + k * 0.0035);
  var fq = 0.35 + e.rnd() * 1.2,
    ph = e.rnd() * 6.283;
  var s = Math.sin(t * fq + ph) * 0.6 + Math.sin(t * fq * 1.73 + ph * 2.1) * 0.4;
  var a = Math.max(0, s) * (0.6 - k * 0.35);
  if (a < 0.01) continue;
  g.globalAlpha = a;
  g.fillStyle = "#dcd9cd";
  g.beginPath();
  g.ellipse(x + Math.sin(t * 0.27 + ph) * sp * 0.12, y, len / 2, th / 2, 0, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
