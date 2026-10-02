g.fillStyle = "#17181c";
g.fillRect(-11, -2, 22, 4);
g.strokeStyle = "rgba(8,9,12,0.6)";
g.lineWidth = 0.03;
for (let x = -11; x < 11; x += 1.1) {
  g.beginPath();
  g.moveTo(x, -2);
  g.lineTo(x, 1.8);
  g.stroke();
}
for (let y = -2; y < 1.8; y += 1.1) {
  g.beginPath();
  g.moveTo(-11, y);
  g.lineTo(11, y);
  g.stroke();
}
g.fillStyle = "#25262b";
g.fillRect(-11, 1.75, 22, 0.25);
for (let i = 0; i < 14; i++) {
  const x = -11 + e.rnd() * 22,
    y = -1.8 + e.rnd() * 3.4,
    r = 0.3 + e.rnd() * 0.8;
  let c = g.createRadialGradient(x, y, 0, x, y, r);
  c.addColorStop(0, "rgba(60,66,78,0.3)");
  c.addColorStop(1, "rgba(60,66,78,0)");
  g.fillStyle = c;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
