const f = e.state.fog ?? 0.85;
for (let i = 0; i < 24; i++) {
  const sp = 0.15 + e.rnd() * 0.25;
  const bx = -130 + ((i * 11 + e.t * sp + e.rnd() * 25) % 260);
  const by = -0.3 - e.rnd() * 1.8;
  const rx = 8 + e.rnd() * 14,
    ry = 0.6 + e.rnd() * 1.1;
  g.save();
  g.translate(bx, by);
  g.scale(1, ry / rx);
  let gg = g.createRadialGradient(0, 0, 0, 0, 0, rx);
  gg.addColorStop(0, "rgba(232,228,224," + 0.45 * f + ")");
  gg.addColorStop(1, "rgba(232,228,224,0)");
  g.fillStyle = gg;
  g.beginPath();
  g.arc(0, 0, rx, 0, 7);
  g.fill();
  g.restore();
}
[
  [-7 + Math.sin(e.t * 0.05) * 2, -0.5, 9, 0.9, 0.55],
  [-3 + Math.sin(e.t * 0.04 + 2) * 2, -0.25, 6, 0.5, 0.45],
  [-12, -1.1, 8, 0.8, 0.4],
].forEach((p) => {
  g.save();
  g.translate(p[0], p[1]);
  g.scale(1, p[3] / p[2]);
  let gg = g.createRadialGradient(0, 0, 0, 0, 0, p[2]);
  gg.addColorStop(0, "rgba(238,234,228," + p[4] * f + ")");
  gg.addColorStop(1, "rgba(238,234,228,0)");
  g.fillStyle = gg;
  g.beginPath();
  g.arc(0, 0, p[2], 0, 7);
  g.fill();
  g.restore();
});
