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
e.light(x - 46, -7, 7, "#ff4a3c", 0.55);
e.light(x + 4, -38, 6, "#fff6e0", 0.5);
e.light(x + 34, -8, 4, "#ffd296", 0.35);
e.light(x - 22, -8, 4, "#ffd296", 0.35);
for (let k = 1; k < 6; k++) {
  g.fillStyle = `rgba(255,90,70,${0.25 / k})`;
  g.fillRect(x - 50 + Math.sin(e.t * 3 + k) * 3, 4 + k * 7, 8, 3);
}
