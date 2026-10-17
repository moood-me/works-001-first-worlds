const t = e.t;
let s = 57;
const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
const top = -1.455;
for (let i = 0; i < 46; i++) {
  const v = R(),
    y = top + 0.02 + v * v * 2.4,
    ph = R() * 6.283,
    sp = 1 + R() * 1.6,
    len = 0.06 + R() * 0.2 * (1 + v * 2);
  const a = (0.55 + 0.45 * Math.sin(t * sp + ph)) * (1 - v) * 0.55;
  const x = 0.16 + Math.sin(t * 0.6 + ph + y * 3) * 0.05 * (1 + v * 3);
  g.fillStyle = "rgba(255,176,102," + a + ")";
  g.fillRect(x - len / 2, y, len, Math.max(e.px, 0.025));
}
