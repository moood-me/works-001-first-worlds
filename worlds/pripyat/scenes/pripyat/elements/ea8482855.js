const t = e.t;
for (let i = 0; i < 70; i++) {
  const x = -2.3 + e.rnd() * 4.6;
  const h = 0.4 + e.rnd() * 0.7;
  const c = e.rnd();
  const lw = 0.012 + e.rnd() * 0.01;
  const lean = (e.rnd() - 0.5) * 0.25;
  g.strokeStyle = c < 0.4 ? "#7d7550" : c < 0.75 ? "#5e6444" : "#8e8358";
  g.lineWidth = lw;
  const w = 0.06 * Math.sin(t * 0.8 + x * 1.3) + 0.03 * Math.sin(t * 1.37 + i);
  g.beginPath();
  g.moveTo(x, 0.05);
  g.quadraticCurveTo(x + lean * 0.5, -h * 0.55, x + lean + w * h, -h);
  g.stroke();
}
