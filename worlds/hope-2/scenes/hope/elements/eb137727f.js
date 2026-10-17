const t = e.t;
let s = 23;
const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
g.save();
g.beginPath();
g.rect(-10, -1.455, 20, 18);
g.clip();
g.save();
g.translate(0, 3);
g.scale(3.2, 7);
const c = g.createRadialGradient(0, 0, 0, 0, 0, 1);
c.addColorStop(0, "rgba(200,210,232,0.07)");
c.addColorStop(1, "rgba(200,210,232,0)");
g.fillStyle = c;
g.beginPath();
g.arc(0, 0, 1, 0, 6.283);
g.fill();
g.restore();
for (let i = 0; i < 340; i++) {
  const D = 6 * Math.pow(410 / 6, R()),
    y = 100.3 / D - 1.7,
    W = 1 + (y + 1.7) * 0.22,
    u = (R() + R() + R() - 1.5) / 1.5,
    len = (((0.15 + R() * 0.6) * 59) / D) * 0.5,
    ph = R() * 6.283,
    sp = 0.5 + R() * 1.3;
  const f = Math.max(0, Math.sin(t * sp + ph) * 0.8 + Math.sin(t * sp * 0.53 + ph * 2) * 0.4);
  const a = f * f * (1 - Math.abs(u)) * 0.6;
  if (a < 0.01) continue;
  const x = u * W + Math.sin(t * 0.35 + ph) * 0.08 * W;
  g.fillStyle = "rgba(223,228,238," + Math.min(0.8, a) + ")";
  g.fillRect(x - len / 2, y, len, Math.max(e.px, (0.015 * 59) / D));
}
g.restore();
