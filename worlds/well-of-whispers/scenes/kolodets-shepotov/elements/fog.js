const f = e.state.fog,
  gl = e.state.glow,
  t = e.t;
if (f < 0.01) return;
for (let i = 0; i < 9; i++) {
  const sp = 0.18 + 0.09 * (i % 4);
  let x = ((i * 17.3 + t * sp) % 90) - 45;
  const y = -0.3 - (i % 4) * 0.55 + 0.1 * Math.sin(t * 0.06 + i * 1.7),
    w = 9 + (i % 3) * 5;
  for (const xx of [x, x - 90, x + 90]) {
    if (xx < -60 || xx > 60) continue;
    g.save();
    g.translate(xx, y);
    g.scale(1, 0.09);
    let c = g.createRadialGradient(0, 0, 0, 0, 0, w);
    c.addColorStop(0, "rgba(95,120,155," + 0.22 * f + ")");
    c.addColorStop(1, "rgba(95,120,155,0)");
    g.fillStyle = c;
    g.beginPath();
    g.arc(0, 0, w, 0, Math.PI * 2);
    g.fill();
    g.restore();
  }
}
