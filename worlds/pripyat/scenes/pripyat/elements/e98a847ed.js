const W = e.aspect,
  t = e.t;
g.strokeStyle = "#3b3f3e";
g.lineCap = "round";
for (let i = 0; i < 5; i++) {
  const r = 0.04 + e.rnd() * 0.05;
  const cx = W * 0.74 + e.rnd() * 0.05;
  const cy = 0.2 + e.rnd() * 0.06;
  const sp = 0.05 + e.rnd() * 0.03;
  const a = t * sp + e.rnd() * 6.28;
  const x = cx + Math.cos(a) * r * 1.8;
  const y = cy + Math.sin(a) * r * 0.5;
  const s = 0.006;
  const f = Math.sin(t * (2.2 + i * 0.37) + i) * 0.8;
  g.lineWidth = 0.0018;
  g.beginPath();
  g.moveTo(x - s, y - s * f * 0.8);
  g.quadraticCurveTo(x - s * 0.4, y - s * 0.2, x, y);
  g.quadraticCurveTo(x + s * 0.4, y - s * 0.2, x + s, y - s * f * 0.8);
  g.stroke();
}
