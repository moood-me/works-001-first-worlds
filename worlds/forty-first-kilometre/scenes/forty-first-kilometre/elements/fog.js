const f = e.state && e.state.fog != null ? e.state.fog : 0.6;
let b = g.createLinearGradient(0, -4, 0, 1.5);
b.addColorStop(0, "rgba(110,125,120,0)");
b.addColorStop(0.65, "rgba(110,125,120," + 0.26 * f + ")");
b.addColorStop(1, "rgba(110,125,120,0)");
g.fillStyle = b;
g.fillRect(-90, -4, 180, 5.5);
for (let i = 0; i < 8; i++) {
  const y = -0.2 - i * 0.7 + Math.sin(e.t * 0.05 + i) * 0.2;
  const sp = 0.2 + e.rnd() * 0.3;
  const off = ((e.rnd() * 180 + e.t * sp) % 180) - 90;
  const r = 18 + e.rnd() * 20;
  for (const dx of [-180, 0, 180]) {
    g.save();
    g.translate(off + dx, y);
    g.scale(1, 0.08);
    let c = g.createRadialGradient(0, 0, 0, 0, 0, r);
    c.addColorStop(0, "rgba(125,140,135," + 0.2 * f + ")");
    c.addColorStop(1, "rgba(125,140,135,0)");
    g.fillStyle = c;
    g.fillRect(-r, -r, 2 * r, 2 * r);
    g.restore();
  }
}
