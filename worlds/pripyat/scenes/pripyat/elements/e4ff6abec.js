const t = e.t;
for (let i = 0; i < 9; i++) {
  const x0 = -5 + e.rnd() * 10;
  const sp = 0.25 + e.rnd() * 0.2;
  const off = e.rnd() * 30;
  const c = e.rnd();
  const T = 6.5 / sp;
  const k = ((t + off) % T) / T;
  const y = -6 + k * 6.3;
  const x = x0 + Math.sin(t * 0.9 + i * 2.1) * 0.5 + k * 0.8;
  const rot = Math.sin(t * 1.3 + i) * 1.2;
  g.save();
  g.translate(x, y);
  g.rotate(rot);
  g.scale(1, Math.abs(Math.sin(t * 1.1 + i * 1.7)) * 0.8 + 0.2);
  g.globalAlpha = Math.min(1, k * 8, (1 - k) * 8) * 0.85;
  g.fillStyle = c < 0.5 ? "#a57a3c" : "#8a5a30";
  g.beginPath();
  g.ellipse(0, 0, 0.045, 0.028, 0, 0, 6.2832);
  g.fill();
  g.restore();
}
