const t = e.t;
let s = 91;
const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
for (let i = 0; i < 14; i++) {
  const cx = (R() - 0.5) * 1.4,
    cy = -0.1 - R() * 0.9,
    ph = R() * 6.283,
    sp = 0.05 + R() * 0.08,
    r = 0.004 + R() * 0.004;
  const x = cx + Math.sin(t * sp + ph) * 0.25 + Math.sin(t * sp * 2.7 + ph) * 0.06,
    y = cy + Math.sin(t * sp * 1.3 + ph * 2) * 0.15;
  const d = Math.hypot(x, y + 0.13);
  const a = Math.max(0, 1 - d / 0.9) * 0.55 * (0.6 + 0.4 * Math.sin(t * 1.7 + ph));
  if (a < 0.01) continue;
  g.fillStyle = "rgba(255,210,160," + a + ")";
  g.beginPath();
  g.arc(x, y, r, 0, 6.283);
  g.fill();
}
