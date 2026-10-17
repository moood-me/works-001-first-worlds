const t = e.t;
g.fillStyle = "#17181e";
for (let x = -220; x < 220; ) {
  const w = 6 + e.rnd() * 18,
    h = 8 + e.rnd() * 26;
  g.fillRect(x, -h, w + 0.5, h + 0.5);
  x += w;
}
g.strokeStyle = "#17181e";
g.lineWidth = 1.2;
g.beginPath();
g.moveTo(-40, 0);
g.lineTo(-40, -58);
g.lineTo(-10, -58);
g.moveTo(-60, -58);
g.lineTo(-40, -58);
g.lineTo(-40, -50);
g.lineTo(-25, -58);
g.stroke();
const b = Math.max(0, Math.sin(t * 1.3)) ** 8;
e.light(-40, -59, 6, "#c03030", 0.15 + 0.6 * b);
