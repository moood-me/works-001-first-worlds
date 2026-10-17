const m = e.state.moon || 0;
g.fillStyle = "#565f6b";
g.fillRect(-700, -160, 1400, 320);
g.fillStyle = "rgba(170,180,195," + 0.2 * m + ")";
g.fillRect(-700, -160, 1400, 320);
for (let i = 0; i < 500; i++) {
  const x = -700 + e.rnd() * 1400,
    y = -160 + e.rnd() * 320,
    w = 1 + e.rnd() * 8;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(140,150,165,0.10)" : "rgba(25,30,38,0.10)";
  g.beginPath();
  g.ellipse(x, y, w * 2.5, w * 0.7, 0, 0, 7);
  g.fill();
}
