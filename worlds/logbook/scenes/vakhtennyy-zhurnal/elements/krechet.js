const k = e.state.krechet || 0;
if (k <= 0.001 || k >= 0.999) return;
const x = -450 + 900 * k;
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
for (let j = 1; j < 6; j++) {
  g.fillStyle = `rgba(255,90,70,${0.25 / j})`;
  g.fillRect(x - 50, 4 + j * 7, 8, 3);
}
if (e.state.krechet_flash) {
  const f = g.createRadialGradient(x + 4, -44, 0, x + 4, -44, 140);
  f.addColorStop(0, "rgba(255,255,245,0.95)");
  f.addColorStop(0.1, "rgba(255,250,230,0.5)");
  f.addColorStop(1, "rgba(255,250,230,0)");
  g.fillStyle = f;
  g.fillRect(x - 140, -184, 280, 280);
  g.fillStyle = "rgba(255,255,240,0.5)";
  g.fillRect(x - 120, -45, 250, 2.5);
}
