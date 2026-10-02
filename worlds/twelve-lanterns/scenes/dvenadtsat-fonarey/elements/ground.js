g.fillStyle = "#16111b";
g.fillRect(-35, -18, 70, 36);
for (let i = 0; i < 3200; i++) {
  const x = (e.rnd() - 0.5) * 70,
    y = (e.rnd() - 0.5) * 36;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(90,75,95,0.18)" : "rgba(0,0,0,0.3)";
  g.fillRect(x, y, 0.05 + e.rnd() * 0.12, 0.05 + e.rnd() * 0.12);
}
for (let i = 0; i < 1100; i++) {
  const x = (e.rnd() - 0.5) * 14,
    y = -18 + e.rnd() * 9;
  g.fillStyle = "rgba(120,105,120," + (0.1 + e.rnd() * 0.2) + ")";
  g.beginPath();
  g.arc(x, y, 0.03 + e.rnd() * 0.06, 0, 7);
  g.fill();
}
g.fillStyle = "rgba(200,195,210,0.13)";
for (let x = -35; x < 35; x += 3) g.fillRect(x, 6.5, 1.8, 0.14);
const m = e.state.machine ?? 1,
  vg = g.createRadialGradient(-2.8, 10.6, 0, -2.8, 10.6, 4);
vg.addColorStop(0, "rgba(170,200,240," + 0.32 * m + ")");
vg.addColorStop(1, "rgba(170,200,240,0)");
g.fillStyle = vg;
g.fillRect(-7, 6.6, 8, 8);
g.save();
g.translate(0.7, 6);
g.rotate(0.6);
g.fillStyle = "#5e4130";
g.beginPath();
g.ellipse(0, 0, 0.11, 0.24, 0, 0, 7);
g.fill();
g.strokeStyle = "#b02a2a";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.08, 0.02);
g.lineTo(0, -0.14);
g.lineTo(0.08, 0.02);
g.stroke();
g.restore();
g.save();
g.translate(-1.4, 8.6);
g.rotate(-0.4);
g.fillStyle = "rgba(220,170,180,0.55)";
g.beginPath();
g.arc(0, 0, 0.16, 0, 7);
g.fill();
g.fillStyle = "#4a3a30";
g.fillRect(-0.015, 0.14, 0.03, 0.2);
g.restore();
g.fillStyle = "rgba(210,205,200,0.4)";
g.beginPath();
g.ellipse(2.2, 4, 0.06, 0.1, 0.8, 0, 7);
g.fill();
