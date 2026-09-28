g.fillStyle = "#5f5e44";
for (let i = 0; i < 46; i++) {
  const x = (e.rnd() * 2 - 1) * 1550;
  const h = 4 + e.rnd() * 6;
  const w = h * (0.8 + e.rnd() * 0.8);
  if (e.rnd() < 0.6) {
    const tw = Math.max(0.5, e.px * 1.2);
    g.fillRect(x - tw / 2, -h * 0.8, tw, h * 0.8);
    g.beginPath();
    g.ellipse(x, -h * 0.85, w, h * 0.18, 0, 0, 6.2832);
    g.fill();
  } else {
    g.beginPath();
    g.ellipse(x, 0, w * 0.5, h * 0.3, 0, Math.PI, 0);
    g.fill();
  }
}
g.fillRect(-1600, -0.8, 3200, 0.8);
