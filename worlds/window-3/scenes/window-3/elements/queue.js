const t = e.t,
  N = 44;
for (let i = N - 1; i >= 0; i--) {
  const p = i / N,
    x = -60 + Math.pow(p, 0.85) * 210 + Math.sin(i * 2.3) * 7,
    y = -10 - Math.pow(p, 1.05) * 145 + Math.sin(i * 1.7) * 5,
    s = 6.2 - 5.2 * p,
    k = Math.floor(e.rnd() * 4),
    b = e.rnd();
  g.save();
  g.translate(x, y);
  g.scale(s, s);
  g.fillStyle = "rgb(" + Math.round(50 + b * 22) + "," + Math.round(54 + b * 20) + "," + Math.round(66 + b * 22) + ")";
  g.beginPath();
  if (k === 0) {
    g.ellipse(0, 0, 2, 0.6, 0, 0, 7);
  } else if (k === 1) {
    g.rect(-2, -0.6, 4, 1.2);
    g.rect(-0.6, -1.3, 1.6, 0.7);
  } else if (k === 2) {
    g.moveTo(-2, 0.4);
    g.lineTo(2, 0);
    g.lineTo(-1.6, -0.8);
    g.closePath();
  } else {
    g.arc(0, 0, 0.8, 0, 7);
    g.rect(-2.2, -0.15, 4.4, 0.3);
  }
  g.fill();
  g.fillStyle = "rgba(255,230,200,0.35)";
  g.fillRect(0.2, -0.62, 1.6, 0.14);
  g.restore();
  const bl = Math.sin(t * (1.1 + (i % 5) * 0.23) + i * 2.1) > 0.8;
  g.fillStyle = bl ? "rgba(255,90,70,0.95)" : "rgba(255,90,70,0.25)";
  g.fillRect(x - 2 * s, y - 0.2 * s, 0.45 * s, 0.4 * s);
  if (i < 8) e.light(x + 2.1 * s, y, 2.5 * s, "#9fc4ff", 0.3);
}
