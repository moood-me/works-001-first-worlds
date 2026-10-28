const s = e.state.stranger | 0;
if (s < 2) return;
const P = [
  [24, -40],
  [8, 5],
  [-16.5, 51],
];
g.fillStyle = "rgba(22,27,34,0.6)";
for (let k = 0; k < s - 1 && k < 2; k++) {
  const a = P[k],
    b = P[k + 1];
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const n = Math.floor(L / 0.8);
  const nx = -(b[1] - a[1]) / L,
    ny = (b[0] - a[0]) / L;
  for (let i = 0; i < n; i++) {
    const f = i / n,
      side = (i % 2 ? 1 : -1) * 0.18;
    const x = a[0] + (b[0] - a[0]) * f + nx * side + Math.sin(i * 0.7) * 0.2,
      y = a[1] + (b[1] - a[1]) * f + ny * side;
    g.beginPath();
    g.ellipse(x, y, 0.14, 0.24, Math.atan2(b[0] - a[0], -(b[1] - a[1])), 0, 7);
    g.fill();
  }
}
