const A = e.aspect;
for (let i = 0; i < 6; i++) {
  const sp = 0.006 + e.rnd() * 0.007,
    x0 = A * (0.08 + e.rnd() * 0.2),
    ph = e.rnd() * 10,
    off = e.rnd();
  const y = ((e.t * sp + off) % 1) * 0.6 + 0.2;
  const x = x0 + Math.sin(e.t * 0.31 + ph) * 0.018 + Math.sin(e.t * 0.13 + ph * 2) * 0.01;
  g.save();
  g.translate(x, y);
  g.rotate(Math.sin(e.t * 0.7 + ph) * 1.2);
  g.fillStyle = "rgba(26,18,12,0.85)";
  g.beginPath();
  g.ellipse(0, 0, 0.0045, 0.0022, 0, 0, 7);
  g.fill();
  g.restore();
}
