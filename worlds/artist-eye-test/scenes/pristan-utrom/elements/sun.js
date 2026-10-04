const A = e.aspect,
  d = e.state.dawn ?? 0.3,
  f = e.state.fog ?? 0.85;
const sx = A * 0.34,
  sy = 0.5 - d * 0.14,
  r = 0.036;
let h = g.createRadialGradient(sx, sy, r * 0.6, sx, sy, r * 6);
h.addColorStop(0, "rgba(255,238,212,0.5)");
h.addColorStop(0.35, "rgba(250,215,185,0.14)");
h.addColorStop(1, "rgba(250,215,185,0)");
g.fillStyle = h;
g.beginPath();
g.arc(sx, sy, r * 6, 0, 7);
g.fill();
g.filter = "blur(3px)";
g.globalAlpha = 0.3 + 0.55 * (1 - f) + 0.15 * d;
g.fillStyle = "#fff5e6";
g.beginPath();
g.arc(sx, sy, r, 0, 7);
g.fill();
g.filter = "none";
for (let i = 0; i < 4; i++) {
  const yy = sy - r + ((i * 0.37 + e.t * 0.004 * (1 + i * 0.3)) % 1) * r * 2.4;
  g.globalAlpha = 0.18 * f;
  g.fillStyle = "#e6dcd2";
  g.fillRect(sx - r * 1.6, yy, r * 3.2, r * 0.18 + i * r * 0.05);
}
g.globalAlpha = 1;
