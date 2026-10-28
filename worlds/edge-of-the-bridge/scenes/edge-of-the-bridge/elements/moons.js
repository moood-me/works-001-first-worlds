const A = e.aspect,
  n = e.state.night ?? 0.3;
const mx = 0.24 * A,
  my = 0.2,
  r = 0.05;
const gl = 0.45 + 0.55 * n;
let rg = g.createRadialGradient(mx, my, r * 0.8, mx, my, r * 7);
rg.addColorStop(0, "rgba(235,225,215," + 0.3 * gl + ")");
rg.addColorStop(1, "rgba(235,225,215,0)");
g.fillStyle = rg;
g.beginPath();
g.arc(mx, my, r * 7, 0, 6.283);
g.fill();
rg = g.createRadialGradient(mx - r * 0.3, my - r * 0.3, r * 0.1, mx, my, r);
rg.addColorStop(0, "rgba(246,240,228," + (0.75 + 0.25 * gl) + ")");
rg.addColorStop(1, "rgba(214,204,200," + (0.7 + 0.25 * gl) + ")");
g.fillStyle = rg;
g.beginPath();
g.arc(mx, my, r, 0, 6.283);
g.fill();
g.fillStyle = "rgba(150,140,160,0.14)";
[
  [0.2, -0.3, 0.25],
  [-0.35, 0.15, 0.18],
  [0.3, 0.35, 0.13],
  [-0.1, -0.45, 0.1],
].forEach((c) => {
  g.beginPath();
  g.arc(mx + c[0] * r, my + c[1] * r, c[2] * r, 0, 6.283);
  g.fill();
});
const sx = 0.84 * A,
  sy = 0.11,
  sr = 0.009;
rg = g.createRadialGradient(sx, sy, 0, sx, sy, sr * 5);
rg.addColorStop(0, "rgba(210,160,150," + 0.25 * gl + ")");
rg.addColorStop(1, "rgba(210,160,150,0)");
g.fillStyle = rg;
g.beginPath();
g.arc(sx, sy, sr * 5, 0, 6.283);
g.fill();
g.fillStyle = "rgba(214,170,160," + (0.55 + 0.3 * gl) + ")";
g.beginPath();
g.arc(sx, sy, sr, 0, 6.283);
g.fill();
