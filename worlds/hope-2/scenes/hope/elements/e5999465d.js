const A = e.aspect || 1.7778,
  x = 0.7 * A,
  y = 0.18,
  r = 0.024;
const h = g.createRadialGradient(x, y, r * 0.8, x, y, r * 10);
h.addColorStop(0, "rgba(214,222,238,0.36)");
h.addColorStop(0.2, "rgba(175,188,212,0.14)");
h.addColorStop(1, "rgba(150,160,190,0)");
g.fillStyle = h;
g.fillRect(x - r * 10, y - r * 10, r * 20, r * 20);
const d = g.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
d.addColorStop(0, "#f3f4f8");
d.addColorStop(1, "#cdd4e2");
g.fillStyle = d;
g.beginPath();
g.arc(x, y, r, 0, 6.283);
g.fill();
g.save();
g.clip();
g.fillStyle = "rgba(118,128,150,0.2)";
[
  [-0.3, -0.2, 0.34, 0.4],
  [0.28, 0.12, 0.26, -0.3],
  [-0.05, 0.38, 0.2, 0.2],
  [0.32, -0.36, 0.14, 0.9],
  [-0.45, 0.25, 0.12, 0],
].forEach((m) => {
  g.beginPath();
  g.ellipse(x + m[0] * r, y + m[1] * r, m[2] * r, m[2] * r * 0.75, m[3], 0, 6.283);
  g.fill();
});
g.restore();
