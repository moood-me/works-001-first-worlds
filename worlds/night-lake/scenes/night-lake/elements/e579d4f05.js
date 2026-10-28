const A = e.aspect,
  mx = A * 0.78,
  my = 0.17,
  R = 0.027;
const rg = g.createRadialGradient(mx, my, R * 0.8, mx, my, R * 9);
rg.addColorStop(0, "rgba(215,228,250,0.35)");
rg.addColorStop(0.25, "rgba(160,185,230,0.10)");
rg.addColorStop(1, "rgba(120,150,210,0)");
g.fillStyle = rg;
g.beginPath();
g.arc(mx, my, R * 9, 0, 6.283);
g.fill();
const dg = g.createRadialGradient(mx - R * 0.3, my - R * 0.3, R * 0.1, mx, my, R);
dg.addColorStop(0, "#f6f8fc");
dg.addColorStop(0.8, "#e4eaf4");
dg.addColorStop(1, "#cfd8e8");
g.fillStyle = dg;
g.beginPath();
g.arc(mx, my, R, 0, 6.283);
g.fill();
g.save();
g.beginPath();
g.arc(mx, my, R, 0, 6.283);
g.clip();
g.fillStyle = "#aeb9cf";
const m = [
  [-0.3, -0.25, 0.32, 0.22],
  [0.2, -0.1, 0.26, 0.18],
  [-0.05, 0.3, 0.22, 0.16],
  [0.35, 0.35, 0.14, 0.1],
  [-0.45, 0.15, 0.16, 0.12],
];
for (const q of m) {
  g.globalAlpha = 0.35;
  g.beginPath();
  g.ellipse(mx + q[0] * R, my + q[1] * R, q[2] * R, q[3] * R, 0.4, 0, 6.283);
  g.fill();
}
g.restore();
g.globalAlpha = 1;
