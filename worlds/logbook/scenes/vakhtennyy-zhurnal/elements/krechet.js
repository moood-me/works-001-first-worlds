const x = ((e.t * 2.2) % 900) - 450;
g.save();
g.translate(x, 0);
g.fillStyle = "#05070b";
g.beginPath();
g.moveTo(-60, 0);
g.lineTo(66, 0);
g.lineTo(52, -10);
g.lineTo(18, -10);
g.lineTo(18, -24);
g.lineTo(-4, -24);
g.lineTo(-4, -10);
g.lineTo(-56, -10);
g.closePath();
g.fill();
g.restore();
e.light(x - 46, -7, 22, "#ff4a3c", 0.9);
e.light(x + 4, -38, 20, "#fff6e0", 0.9);
e.light(x + 34, -8, 14, "#ffd296", 0.6);
e.light(x - 22, -8, 14, "#ffd296", 0.6);
for (let k = 1; k < 6; k++) {
  g.fillStyle = `rgba(255,90,70,${0.25 / k})`;
  g.fillRect(x - 50 + Math.sin(e.t * 3 + k) * 3, 4 + k * 7, 8, 3);
}
