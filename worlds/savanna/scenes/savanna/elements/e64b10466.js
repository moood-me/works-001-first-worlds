const A = e.aspect,
  sx = A * 0.22,
  sy = 0.37;
let r = g.createRadialGradient(sx, sy, 0, sx, sy, 0.8);
r.addColorStop(0, "rgba(255,238,196,0.7)");
r.addColorStop(0.12, "rgba(255,218,160,0.35)");
r.addColorStop(0.45, "rgba(255,205,140,0.1)");
r.addColorStop(1, "rgba(255,200,130,0)");
g.fillStyle = r;
g.fillRect(-0.1, -0.35, A + 0.2, 0.97);
let c = g.createRadialGradient(sx, sy, 0, sx, sy, 0.04);
c.addColorStop(0, "#fffbee");
c.addColorStop(0.55, "rgba(255,244,214,0.95)");
c.addColorStop(1, "rgba(255,230,180,0)");
g.fillStyle = c;
g.beginPath();
g.arc(sx, sy, 0.04, 0, 6.2832);
g.fill();
e.light(sx, sy, 0.12, "#ffe6b0", 0.5);
