g.fillStyle = "#2b262d";
g.fillRect(-130, -38, 260, 76);
for (let i = 0; i < 140; i++) {
  const x = -130 + e.rnd() * 260,
    y = -38 + e.rnd() * 76,
    r = 1 + e.rnd() * 5;
  g.fillStyle = "rgba(42,54,38," + (0.2 + e.rnd() * 0.3) + ")";
  g.beginPath();
  g.ellipse(x, y, r * 1.6, r, 0, 0, 7);
  g.fill();
}
