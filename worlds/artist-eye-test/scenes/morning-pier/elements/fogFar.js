const f = e.state.fog ?? 0.85;
let b = g.createLinearGradient(0, -12, 0, 3);
b.addColorStop(0, "rgba(228,222,216,0)");
b.addColorStop(0.6, "rgba(228,222,216," + 0.55 * f + ")");
b.addColorStop(1, "rgba(222,218,214," + 0.3 * f + ")");
g.fillStyle = b;
g.fillRect(-400, -12, 800, 15);
for (let i = 0; i < 26; i++) {
  const sp = 0.6 + e.rnd() * 0.8;
  const bx = -420 + ((i * 33 + e.t * sp + e.rnd() * 40) % 840);
  const by = -2 - e.rnd() * 7;
  const rx = 40 + e.rnd() * 60,
    ry = 2.5 + e.rnd() * 4;
  g.save();
  g.translate(bx, by);
  g.scale(1, ry / rx);
  let gg = g.createRadialGradient(0, 0, 0, 0, 0, rx);
  gg.addColorStop(0, "rgba(236,230,224," + 0.3 * f + ")");
  gg.addColorStop(1, "rgba(236,230,224,0)");
  g.fillStyle = gg;
  g.beginPath();
  g.arc(0, 0, rx, 0, 7);
  g.fill();
  g.restore();
}
