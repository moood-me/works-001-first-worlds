const W = String(e.state.weather || "");
if (!/fog/.test(W)) return;
for (let i = 0; i < 12; i++) {
  const r1 = e.rnd(),
    r2 = e.rnd(),
    r3 = e.rnd(),
    r4 = e.rnd();
  const x = (r1 - 0.5) * 70 + Math.sin(e.t * 0.05 + i * 2.1) * 3,
    y = -0.3 - r2 * 2.2,
    rx = 6 + r3 * 8,
    ry = 0.5 + r4 * 0.8;
  const gr = g.createRadialGradient(x, y, 0, x, y, rx);
  gr.addColorStop(0, "rgba(70,82,108,0.18)");
  gr.addColorStop(1, "rgba(70,82,108,0)");
  g.save();
  g.translate(x, y);
  g.scale(1, ry / rx);
  g.translate(-x, -y);
  g.fillStyle = gr;
  g.fillRect(x - rx, y - rx, 2 * rx, 2 * rx);
  g.restore();
}
