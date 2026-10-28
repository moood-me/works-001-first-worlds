const t = e.t;
g.lineCap = "round";
for (let i = 0; i < 60; i++) {
  const x = (e.rnd() * 2 - 1) * 15.5,
    n = 4 + Math.floor(e.rnd() * 7),
    h = 0.25 + e.rnd() * 0.6,
    c = e.rnd();
  g.strokeStyle = c < 0.3 ? "#8a6b3a" : c < 0.75 ? "#b8955a" : "#d6b777";
  const w = Math.sin(t * 0.7 + x * 0.35) * 0.06 + Math.sin(t * 1.13 + x * 0.9 + i) * 0.03;
  for (let k = 0; k < n; k++) {
    const a = (e.rnd() - 0.5) * 0.9,
      hh = h * (0.6 + e.rnd() * 0.5);
    g.lineWidth = 0.014 + e.rnd() * 0.012;
    const tx = x + Math.sin(a) * hh + w * hh * 1.5,
      ty = -Math.cos(a) * hh;
    g.beginPath();
    g.moveTo(x + a * 0.05, 0.02);
    g.quadraticCurveTo(x + Math.sin(a) * hh * 0.4, -hh * 0.5, tx, ty);
    g.stroke();
  }
  if (e.rnd() < 0.35) {
    g.fillStyle = "#caa96a";
    g.beginPath();
    g.ellipse(x + w * h, -h * 1.05, 0.02, 0.07, 0.2, 0, 6.2832);
    g.fill();
  }
}
