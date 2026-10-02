var A = e.aspect;
var s = g.createLinearGradient(0, -0.35, 0, 1.25);
s.addColorStop(0, "#090b1d");
s.addColorStop(0.5, "#20224a");
s.addColorStop(1, "#3a3260");
g.fillStyle = s;
g.fillRect(-0.35, -0.35, A + 0.7, 1.6);
for (var i = 0; i < 300; i++) {
  g.globalAlpha = 0.2 + e.rnd() * 0.7;
  g.fillStyle = "#e8ecff";
  var r = (0.6 + e.rnd()) * e.px;
  g.fillRect(-0.35 + e.rnd() * (A + 0.7), -0.35 + Math.pow(e.rnd(), 1.3) * 0.9, r, r);
}
g.globalAlpha = 1;
var mx = 0.78 * A,
  my = 0.16,
  m = g.createRadialGradient(mx, my, 0, mx, my, 0.3);
m.addColorStop(0, "rgba(255,240,210,0.4)");
m.addColorStop(1, "rgba(255,240,210,0)");
g.fillStyle = m;
g.fillRect(mx - 0.3, my - 0.3, 0.6, 0.6);
g.fillStyle = "#fff3d8";
g.beginPath();
g.arc(mx, my, 0.055, 0, 6.283);
g.fill();
