const f = e.state.fog ?? 0.6;
for (let i = 0; i < 22; i++) {
  const sp = 0.6 + e.rnd() * 0.8;
  const bx = -420 + ((i * 40 + e.t * sp + e.rnd() * 40) % 840);
  const by = -2 - e.rnd() * 5;
  const rx = 40 + e.rnd() * 50,
    ry = 2.5 + e.rnd() * 3;
  g.save();
  g.translate(bx, by);
  g.scale(1, ry / rx);
  let gg = g.createRadialGradient(0, 0, 0, 0, 0, rx);
  gg.addColorStop(0, "rgba(120,136,155," + 0.22 * f + ")");
  gg.addColorStop(1, "rgba(120,136,155,0)");
  g.fillStyle = gg;
  g.beginPath();
  g.arc(0, 0, rx, 0, 7);
  g.fill();
  g.restore();
}
