const n = e.state.night ?? 0.3,
  t = e.t;
const c = n > 0.6 ? "96,96,128" : "200,170,165";
for (let i = 0; i < 16; i++) {
  const w = 6 + e.rnd() * 14,
    y = -3 + e.rnd() * 8,
    sp = 0.12 + e.rnd() * 0.25;
  const x = ((e.rnd() * 140 + t * sp) % 140) - 70;
  g.save();
  g.translate(x, y);
  g.scale(1, 0.2);
  const rg = g.createRadialGradient(0, 0, 0, 0, 0, w);
  rg.addColorStop(0, "rgba(" + c + "," + (0.28 + 0.1 * Math.sin(t * 0.2 + i)) + ")");
  rg.addColorStop(1, "rgba(" + c + ",0)");
  g.fillStyle = rg;
  g.beginPath();
  g.arc(0, 0, w, 0, 6.283);
  g.fill();
  g.restore();
}
