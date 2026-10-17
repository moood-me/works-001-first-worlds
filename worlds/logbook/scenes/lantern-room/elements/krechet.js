const k = e.state.krechet || 0;
if (k <= 0.001 || k >= 0.999) return;
const S = 0.5,
  x = (-450 + 900 * k) * S;
g.save();
g.translate(x, 0);
g.scale(S, S);
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
for (let j = 1; j < 6; j++) {
  g.fillStyle = `rgba(255,90,70,${0.25 / j})`;
  g.fillRect(-50, 4 + j * 7, 8, 3);
}
if (e.state.krechet_flash) {
  const f = g.createRadialGradient(4, -44, 0, 4, -44, 140);
  f.addColorStop(0, "rgba(255,255,245,0.95)");
  f.addColorStop(0.1, "rgba(255,250,230,0.5)");
  f.addColorStop(1, "rgba(255,250,230,0)");
  g.fillStyle = f;
  g.fillRect(-140, -184, 280, 280);
  g.fillStyle = "rgba(255,255,240,0.5)";
  g.fillRect(-120, -45, 250, 2.5);
}
g.restore();
e.light(x - 23, -3.5, 14, "#ff4a3c", 0.7);
e.light(x + 2, -19, 14, "#fff6e0", 0.65);
e.light(x + 17, -4, 9, "#ffd296", 0.35);
e.light(x - 11, -4, 9, "#ffd296", 0.35);
