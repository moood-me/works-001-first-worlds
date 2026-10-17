const f = e.state.fog ?? 0.6;
for (let i = 0; i < 20; i++) {
  const sp = 0.2 + e.rnd() * 0.3;
  const bx = -130 + ((i * 13 + e.t * sp + e.rnd() * 25) % 260);
  const by = -0.3 - e.rnd() * 1.4;
  const rx = 8 + e.rnd() * 14,
    ry = 0.6 + e.rnd() * 0.9;
  g.save();
  g.translate(bx, by);
  g.scale(1, ry / rx);
  let gg = g.createRadialGradient(0, 0, 0, 0, 0, rx);
  gg.addColorStop(0, "rgba(130,146,165," + 0.4 * f + ")");
  gg.addColorStop(1, "rgba(130,146,165,0)");
  g.fillStyle = gg;
  g.beginPath();
  g.arc(0, 0, rx, 0, 7);
  g.fill();
  g.restore();
}
[
  [-7 + Math.sin(e.t * 0.05) * 2, -0.5, 9, 0.9, 0.5],
  [-3 + Math.sin(e.t * 0.04 + 2) * 2, -0.25, 6, 0.5, 0.4],
  [-12, -1.1, 8, 0.8, 0.35],
].forEach((p) => {
  g.save();
  g.translate(p[0], p[1]);
  g.scale(1, p[3] / p[2]);
  let gg = g.createRadialGradient(0, 0, 0, 0, 0, p[2]);
  gg.addColorStop(0, "rgba(140,155,172," + p[4] * f + ")");
  gg.addColorStop(1, "rgba(140,155,172,0)");
  g.fillStyle = gg;
  g.beginPath();
  g.arc(0, 0, p[2], 0, 7);
  g.fill();
  g.restore();
});
