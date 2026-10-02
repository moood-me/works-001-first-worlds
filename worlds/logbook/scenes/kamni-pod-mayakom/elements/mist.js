const W = String(e.state.weather || ""),
  fog = /fog|туман/.test(W),
  k = fog ? 1 : 0.35;
for (let i = 0; i < 16; i++) {
  const r1 = e.rnd(),
    r2 = e.rnd(),
    r3 = e.rnd(),
    r4 = e.rnd();
  const x = (r1 - 0.5) * 340 + Math.sin(e.t * 0.02 + i * 1.7) * 15,
    y = -1 - r2 * 7,
    rx = 35 + r3 * 60,
    ry = 1.6 + r4 * 2.5;
  const gr = g.createRadialGradient(x, y, 0, x, y, rx);
  gr.addColorStop(0, "rgba(64,76,102," + 0.2 * k + ")");
  gr.addColorStop(1, "rgba(64,76,102,0)");
  g.save();
  g.translate(x, y);
  g.scale(1, ry / rx);
  g.translate(-x, -y);
  g.fillStyle = gr;
  g.fillRect(x - rx, y - rx, 2 * rx, 2 * rx);
  g.restore();
}
