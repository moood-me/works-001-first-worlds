const mx = e.aspect * 0.38,
  my = 0.3,
  r = 0.052;
let h = g.createRadialGradient(mx, my, r * 0.8, mx, my, r * 4);
h.addColorStop(0, "rgba(230,232,225,0.35)");
h.addColorStop(0.4, "rgba(170,185,200,0.1)");
h.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = h;
g.beginPath();
g.arc(mx, my, r * 4, 0, 7);
g.fill();
let d = g.createRadialGradient(mx - r * 0.3, my - r * 0.3, 0, mx, my, r);
d.addColorStop(0, "#f6f3e8");
d.addColorStop(1, "#d9d6c8");
g.fillStyle = d;
g.beginPath();
g.arc(mx, my, r, 0, 7);
g.fill();
g.filter = "blur(2px)";
g.fillStyle = "rgba(150,150,140,0.13)";
[
  [-0.3, -0.2, 0.32],
  [0.25, -0.05, 0.25],
  [0.05, 0.35, 0.22],
  [-0.35, 0.25, 0.14],
  [0.4, 0.35, 0.1],
].forEach((m) => {
  g.beginPath();
  g.ellipse(mx + m[0] * r, my + m[1] * r, m[2] * r, m[2] * r * 0.85, 0.4, 0, 7);
  g.fill();
});
g.filter = "none";
