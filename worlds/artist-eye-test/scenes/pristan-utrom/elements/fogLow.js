const f = e.state.fog ?? 0.85;
for (let i = 0; i < 14; i++) {
  const sp = 0.08 + e.rnd() * 0.12;
  const bx = -42 + ((i * 3.3 + e.t * sp + e.rnd() * 10) % 44);
  const by = 0.3 - e.rnd() * 1.3;
  const rx = 3 + e.rnd() * 6,
    ry = 0.25 + e.rnd() * 0.4;
  const edge = Math.min(1, Math.max(0, (2 - bx) / 6));
  g.save();
  g.translate(bx, by);
  g.scale(1, ry / rx);
  let gg = g.createRadialGradient(0, 0, 0, 0, 0, rx);
  gg.addColorStop(0, "rgba(236,232,226," + 0.28 * f * edge + ")");
  gg.addColorStop(1, "rgba(236,232,226,0)");
  g.fillStyle = gg;
  g.beginPath();
  g.arc(0, 0, rx, 0, 7);
  g.fill();
  g.restore();
}
