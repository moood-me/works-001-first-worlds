const t = e.t;
g.lineCap = "round";
for (let i = 0; i < 300; i++) {
  const side = e.rnd() < 0.6 ? -1 : 1;
  const x = side < 0 ? -6.8 + e.rnd() * 4.6 : 2.9 + e.rnd() * 3.9;
  const edge = side < 0 ? (x + 2.2) / -4.6 : (x - 2.9) / 3.9;
  const h = (0.25 + e.rnd() * 0.9) * (0.5 + 0.6 * Math.min(1, edge)) + 0.6;
  const ph = e.rnd() * 6.28,
    bend = (e.rnd() - 0.5) * 0.5;
  const sw = 0.06 * Math.sin(t * 0.55 + ph + x * 0.3) + 0.025 * Math.sin(t * 1.37 + ph * 1.7);
  const c = e.rnd();
  g.strokeStyle = c < 0.5 ? "#06080c" : c < 0.85 ? "#0a0e13" : "#111821";
  g.lineWidth = 0.012 + e.rnd() * 0.022;
  const y0 = 0.95;
  g.beginPath();
  g.moveTo(x, y0);
  g.bezierCurveTo(x, y0 - h * 0.5, x + bend * 0.5 + sw * 0.4, y0 - h * 0.8, x + bend + sw, y0 - h);
  g.stroke();
}
