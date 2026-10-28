for (let i = 0; i < 150; i++) {
  const x = -2.2 + e.rnd() * 5.6;
  const r = e.rnd();
  const h = 0.12 + r * r * 0.75;
  const ph = e.rnd() * 6;
  const w = Math.sin(e.t * 0.55 + ph + x * 0.4) * 0.035 + Math.sin(e.t * 0.19 + ph) * 0.025;
  const c = e.rnd();
  g.strokeStyle = c < 0.5 ? "#131816" : c < 0.85 ? "#1a1f1b" : "#28241f";
  g.lineWidth = 0.005 + e.rnd() * 0.008;
  g.beginPath();
  g.moveTo(x, 0.2);
  g.quadraticCurveTo(x + w * 0.4, -h * 0.5, x + w + (e.rnd() - 0.5) * 0.15, -h);
  g.stroke();
}
