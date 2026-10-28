if (!e.state.dust_visible) return;
const L = ((v) =>
  v === false || v === "false" ? 0 : v == null || v === true || v === "true" ? 1 : Math.max(0, Math.min(1, +v || 0)))(
  e.state.lamp_on,
);
for (let i = 0; i < 28; i++) {
  const x0 = (e.rnd() - 0.5) * 1.6,
    y0 = (e.rnd() - 0.5) * 1.2,
    sp = 0.02 + e.rnd() * 0.04,
    ph = e.rnd() * 6;
  const x = x0 + Math.sin(e.t * sp * 3 + ph) * 0.12,
    y = ((y0 + 0.6 + e.t * sp * 0.25) % 1.3) - 0.8;
  const a = (0.25 + 0.35 * Math.sin(e.t * 0.8 + ph)) * (0.3 + 0.7 * L);
  if (a > 0.04) {
    g.fillStyle = L > 0.5 ? `rgba(255,230,180,${a})` : `rgba(190,205,235,${a})`;
    g.fillRect(x, y, 0.006, 0.006);
  }
}
