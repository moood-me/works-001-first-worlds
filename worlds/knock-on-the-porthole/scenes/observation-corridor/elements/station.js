const A = e.aspect,
  t = e.t,
  x = A * 0.537,
  y = 0.51;
g.save();
g.translate(x, y);
g.rotate(t * 0.015);
g.scale(1, 0.45);
g.lineWidth = 0.005;
for (let i = 0; i < 9; i++) {
  if (i === 2 || i === 6) continue;
  const a0 = i * 0.7,
    a1 = a0 + 0.55;
  g.strokeStyle = i < 4 ? "rgba(140,65,55,0.7)" : "rgba(55,55,70,0.75)";
  g.beginPath();
  g.arc(0, 0, 0.04, a0, a1);
  g.stroke();
}
g.strokeStyle = "rgba(70,70,85,0.6)";
g.lineWidth = 0.0025;
g.beginPath();
g.moveTo(-0.04, 0);
g.lineTo(0.04, 0);
g.moveTo(0, -0.04);
g.lineTo(0, 0.04);
g.stroke();
g.fillStyle = "#2a2830";
g.fillRect(-0.007, -0.007, 0.014, 0.014);
g.restore();
const b = Math.pow(Math.max(0, Math.sin(t * 0.9)), 30);
if (b > 0.02) {
  const c = g.createRadialGradient(x + 0.025, y - 0.008, 0, x + 0.025, y - 0.008, 0.018);
  c.addColorStop(0, "rgba(255,120,90," + b + ")");
  c.addColorStop(1, "rgba(255,120,90,0)");
  g.fillStyle = c;
  g.fillRect(x, y - 0.03, 0.05, 0.05);
}
