const t = e.t;
g.fillStyle = "#070a10";
g.beginPath();
g.moveTo(-0.22, 0);
g.lineTo(-0.08, -17);
g.lineTo(0.08, -17);
g.lineTo(0.22, 0);
g.closePath();
g.fill();
const n = 34;
for (let i = 0; i < n; i++) {
  const u = i / (n - 1),
    y = -17 + u * 15.8,
    L = 0.35 + u * 3.3 * (0.8 + 0.35 * e.rnd());
  const sw = 0.05 * Math.sin(t * 0.37 + i * 0.8) + 0.025 * Math.sin(t * 0.91 + i * 1.9);
  for (const dir of [-1, 1]) {
    const l = L * (0.75 + 0.45 * e.rnd()),
      droop = 0.25 + 0.55 * u,
      th = 0.4 + 0.5 * u;
    const ex = dir * l,
      ey = y + droop + sw * 2,
      cx = dir * l * 0.5,
      cy = y - 0.12 + sw;
    g.fillStyle = e.rnd() < 0.5 ? "#070a10" : "#090d14";
    g.beginPath();
    g.moveTo(0, y);
    g.quadraticCurveTo(cx, cy, ex, ey);
    const m = Math.floor(10 + l * 7);
    for (let k = m; k >= 0; k--) {
      const q = k / m,
        bx = 2 * (1 - q) * q * cx + q * q * ex,
        by = (1 - q) * (1 - q) * y + 2 * (1 - q) * q * cy + q * q * ey;
      const d = th * (0.3 + 0.7 * (1 - q)) * (k % 2 ? 1 : 0.8) * (0.85 + 0.3 * e.rnd());
      g.lineTo(bx - dir * 0.04, by + d);
    }
    g.closePath();
    g.fill();
  }
}
g.strokeStyle = "rgba(90,110,145,0.12)";
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-0.2, -12);
g.lineTo(-0.2, 0);
g.stroke();
