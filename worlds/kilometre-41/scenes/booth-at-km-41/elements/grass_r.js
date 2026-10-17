const t = e.t;
g.lineCap = "round";
for (let i = 0; i < 70; i++) {
  const x = (e.rnd() - 0.5) * 3;
  const h = 0.3 + e.rnd() * 0.8;
  const ph = e.rnd() * 6;
  const sw = Math.sin(t * 0.55 + ph + x) * 0.04 + Math.sin(t * 1.9 + ph) * 0.015;
  g.strokeStyle = e.rnd() < 0.3 ? "#262a21" : "#121512";
  g.lineWidth = 0.012 + e.rnd() * 0.015;
  const bend = (e.rnd() - 0.5) * 0.2;
  g.beginPath();
  g.moveTo(x, 0);
  g.quadraticCurveTo(x + sw * 0.5, -h * 0.5, x + sw * h * 2 + bend, -h);
  g.stroke();
}
