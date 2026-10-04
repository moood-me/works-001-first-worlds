const L = e.state.lantern ?? 1;
if (L < 0.01) return;
let gw = g.createRadialGradient(0, -0.3, 0, 0, -0.3, 4.5);
gw.addColorStop(0, "rgba(125,175,245," + 0.55 * L + ")");
gw.addColorStop(0.4, "rgba(110,165,240," + 0.2 * L + ")");
gw.addColorStop(1, "rgba(110,165,240,0)");
g.fillStyle = gw;
g.fillRect(-4.5, -5, 9, 10);
for (let i = 0; i < 46; i++) {
  const r = e.rnd();
  const y = -0.6 + Math.pow(r, 1.2) * 5.2;
  const sp = 0.35 + Math.abs(y) * 0.12;
  const ox = (e.rnd() - 0.5) * 2 * sp + Math.sin(e.t * 0.45 + i * 1.9) * sp * 0.3;
  const w = 0.12 + e.rnd() * 0.4;
  const a = 0.5 + 0.5 * Math.sin(e.t * (0.7 + e.rnd() * 1.3) + i * 2.7);
  g.globalAlpha = Math.min(
    1,
    L * (0.25 + a * 0.75) * (1 - Math.abs(y) / 5.2) * Math.max(0, 1.1 - Math.abs(ox) / (sp * 1.2)),
  );
  g.fillStyle = i % 3 ? "#86b8f5" : "#d6e9ff";
  g.fillRect(ox - w / 2, y, w, 0.09);
}
g.globalAlpha = 1;
