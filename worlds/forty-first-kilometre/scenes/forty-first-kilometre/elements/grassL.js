for (let i = 0; i < 170; i++) {
  const x = -2.8 + e.rnd() * 5.6;
  const r = e.rnd();
  const h = 0.15 + r * r * 0.85;
  const ph = e.rnd() * 6;
  const w = Math.sin(e.t * 0.6 + ph + x * 0.4) * 0.035 + Math.sin(e.t * 0.23 + ph) * 0.025;
  const c = e.rnd();
  g.strokeStyle = c < 0.5 ? "#141916" : c < 0.85 ? "#1b201b" : "#2a2620";
  g.lineWidth = 0.005 + e.rnd() * 0.008;
  g.beginPath();
  g.moveTo(x, 0.2);
  g.quadraticCurveTo(x + w * 0.4, -h * 0.5, x + w + (e.rnd() - 0.5) * 0.15, -h);
  g.stroke();
}
