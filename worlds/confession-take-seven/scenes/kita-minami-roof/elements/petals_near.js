const t = e.t,
  k = (e.state.wind ?? 1) * Math.min(1, (e.state.petals ?? 1) * 4);
if (k < 0.02) return;
for (let i = 0; i < 7; i++) {
  const s = e.rnd(),
    s2 = e.rnd();
  const ph = (t / (4 + s2 * 3) + s) % 1;
  const x = -3 + ph * 6.5,
    y = -2.2 + s2 * 1.4 + ph * 0.9 + Math.sin(t * 1.7 + s * 10) * 0.12;
  const fl = Math.cos(t * (2 + s * 2) + s * 20);
  g.save();
  g.translate(x, y);
  g.rotate(s * 5 + t * 0.7);
  g.scale(1, 0.3 + 0.7 * Math.abs(fl));
  g.globalAlpha = 0.6 * k * Math.sin(ph * Math.PI);
  g.fillStyle = fl > 0 ? "#f6c3cf" : "#d99aae";
  g.beginPath();
  g.ellipse(0, 0, 0.03, 0.018, 0, 0, 7);
  g.fill();
  g.restore();
}
