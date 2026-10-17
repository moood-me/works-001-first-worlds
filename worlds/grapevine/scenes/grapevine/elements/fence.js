g.fillStyle = "#b9a07a";
g.fillRect(-4.2, -1.05, 8.4, 0.1);
g.fillRect(-4.2, -0.6, 8.4, 0.1);
for (let i = 0; i < 12; i++) {
  const x = -4 + i * 0.72;
  g.fillStyle = i % 2 ? "#d2bb92" : "#cbb188";
  g.beginPath();
  g.moveTo(x - 0.14, 0);
  g.lineTo(x - 0.14, -1.1);
  g.lineTo(x, -1.25);
  g.lineTo(x + 0.14, -1.1);
  g.lineTo(x + 0.14, 0);
  g.fill();
  g.fillStyle = "rgba(90,60,30,.18)";
  g.fillRect(x + 0.06, -1.1, 0.07, 1.1);
}
