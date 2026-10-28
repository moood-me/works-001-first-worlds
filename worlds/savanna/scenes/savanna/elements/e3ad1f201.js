const t = e.t;
g.lineCap = "round";
for (let i = 0; i < 14; i++) {
  const s = i % 2 ? 1 : -1,
    x = s * (1.5 + e.rnd() * 3.2),
    n = 6 + Math.floor(e.rnd() * 6),
    h = 0.5 + e.rnd() * 0.5,
    c = e.rnd();
  g.strokeStyle = c < 0.4 ? "#7a5c30" : c < 0.8 ? "#a3804a" : "#c9a86c";
  const w = Math.sin(t * 0.7 + x * 0.35) * 0.06 + Math.sin(t * 1.13 + x * 0.9 + i) * 0.03;
  for (let k = 0; k < n; k++) {
    const a = (e.rnd() - 0.5) * 0.9,
      hh = h * (0.6 + e.rnd() * 0.5);
    g.lineWidth = 0.01 + e.rnd() * 0.008;
    const tx = x + Math.sin(a) * hh + w * hh * 1.5,
      ty = -Math.cos(a) * hh;
    g.beginPath();
    g.moveTo(x + a * 0.05, 0.02);
    g.quadraticCurveTo(x + Math.sin(a) * hh * 0.4, -hh * 0.5, tx, ty);
    g.stroke();
  }
  if (e.rnd() < 0.4) {
    g.fillStyle = "#b89758";
    g.beginPath();
    g.ellipse(x + w * h, -h * 1.05, 0.02, 0.07, 0.2, 0, 6.2832);
    g.fill();
  }
}
