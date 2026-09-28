var W = e.aspect,
  sx = W / 2 - 0.463,
  sy = 0.3,
  t = e.t,
  R = 0.03,
  br = 1 + 0.04 * Math.sin(t * 0.21) + 0.025 * Math.sin(t * 0.53 + 1);
var h = g.createRadialGradient(sx, sy, R * 0.8, sx, sy, R * 4.5 * br);
h.addColorStop(0, "rgba(255,236,200,0.5)");
h.addColorStop(0.3, "rgba(255,214,168,0.16)");
h.addColorStop(1, "rgba(255,200,160,0)");
g.fillStyle = h;
g.beginPath();
g.arc(sx, sy, R * 4.5 * br, 0, 6.283);
g.fill();
var s = g.createRadialGradient(sx, sy, R, sx, sy, R * 1.35);
s.addColorStop(0, "rgba(255,238,205,0.55)");
s.addColorStop(1, "rgba(255,238,205,0)");
g.fillStyle = s;
g.beginPath();
g.arc(sx, sy, R * 1.35, 0, 6.283);
g.fill();
var d = g.createRadialGradient(sx - R * 0.25, sy - R * 0.25, 0, sx, sy, R);
d.addColorStop(0, "#fffbf2");
d.addColorStop(0.7, "#fff0cf");
d.addColorStop(0.94, "#ffe2b4");
d.addColorStop(1, "rgba(255,220,175,0.7)");
g.fillStyle = d;
g.beginPath();
g.arc(sx, sy, R, 0, 6.283);
g.fill();
e.light(sx, sy, R * 3, "#ffe6c0", 0.3);
