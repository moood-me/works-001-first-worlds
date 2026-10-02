var A = e.aspect,
  x = 0.76 * A,
  y = 0.603,
  r = 0.034;
var gl = g.createRadialGradient(x, y, 0, x, y, 0.42);
gl.addColorStop(0, "rgba(255,214,150,0.65)");
gl.addColorStop(0.12, "rgba(255,170,95,0.3)");
gl.addColorStop(0.4, "rgba(235,120,75,0.09)");
gl.addColorStop(1, "rgba(220,100,70,0)");
g.fillStyle = gl;
g.fillRect(x - 0.45, y - 0.45, 0.9, 0.9);
g.save();
g.translate(x, 0.635);
g.scale(1, 0.07);
var hz = g.createRadialGradient(0, 0, 0, 0, 0, 1);
hz.addColorStop(0, "rgba(255,215,150,0.55)");
hz.addColorStop(0.5, "rgba(255,170,100,0.18)");
hz.addColorStop(1, "rgba(255,160,100,0)");
g.fillStyle = hz;
g.beginPath();
g.arc(0, 0, 1, 0, 6.283);
g.fill();
g.restore();
var p = 1 + 0.006 * Math.sin(e.t * 0.53) + 0.004 * Math.sin(e.t * 1.37 + 2);
g.save();
g.translate(x, y);
g.scale(1.02, 0.94 * p);
var d = g.createRadialGradient(0, 0, 0, 0, 0, r * 1.3);
d.addColorStop(0, "#fff4d6");
d.addColorStop(0.5, "#ffd48e");
d.addColorStop(0.74, "#ffb663");
d.addColorStop(0.82, "rgba(255,165,85,0.6)");
d.addColorStop(1, "rgba(255,150,80,0)");
g.fillStyle = d;
g.beginPath();
g.arc(0, 0, r * 1.3, 0, 6.283);
g.fill();
g.restore();
