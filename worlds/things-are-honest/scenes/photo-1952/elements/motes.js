const A = e.aspect,
  t = e.t,
  S = e.state || {};
const glow = typeof S.lamp_glow === "number" ? Math.max(0, Math.min(1, S.lamp_glow)) : 0.8;
const hs = (n) => {
  const s = Math.sin(n * 91.7 + 17.3) * 43758.5453;
  return s - Math.floor(s);
};
for (let i = 0; i < 34; i++) {
  const sp = 0.004 + hs(i) * 0.01,
    ph = hs(i + 40) * 6.28;
  const x = A * (0.45 + hs(i + 80) * 0.55) + Math.sin(t * sp * 9 + ph) * 0.03 + Math.sin(t * 0.13 + ph * 2) * 0.01;
  const y = ((hs(i + 120) + t * sp) % 1.2) - 0.15;
  const near = hs(i + 160) > 0.82,
    r = near ? 0.006 + hs(i + 200) * 0.006 : 0.0014;
  const a = (0.12 + 0.3 * (0.5 + 0.5 * Math.sin(t * 0.7 + ph))) * glow * (near ? 0.3 : 1);
  const q = g.createRadialGradient(x, y, 0, x, y, r * 2);
  q.addColorStop(0, `rgba(255,228,180,${a})`);
  q.addColorStop(1, "rgba(255,228,180,0)");
  g.fillStyle = q;
  g.fillRect(x - r * 2, y - r * 2, r * 4, r * 4);
}
