g.fillStyle = "#23160c";
g.fillRect(-7, -2.15, 14, 4.3);
for (let i = -7; i < 7; i += 0.16) {
  g.fillStyle = `rgba(${e.rnd() < 0.5 ? "60,38,20" : "20,12,6"},${0.2 + e.rnd() * 0.25})`;
  g.fillRect(i, -2.15, 0.155, 4.3);
  g.fillStyle = "rgba(0,0,0,0.45)";
  g.fillRect(i + 0.155, -2.15, 0.006, 4.3);
  for (let k = 0; k < 2; k++) {
    g.fillStyle = "rgba(0,0,0,0.5)";
    g.fillRect(i, -2.15 + e.rnd() * 4.3, 0.155, 0.006);
  }
}
const glow = (x, y, rx, ry, c, a) => {
  const r = g.createRadialGradient(x, y, 0, x, y, rx);
  r.addColorStop(0, `rgba(${c},${a})`);
  r.addColorStop(1, `rgba(${c},0)`);
  g.save();
  g.translate(x, y);
  g.scale(1, ry / rx);
  g.translate(-x, -y);
  g.fillStyle = r;
  g.fillRect(x - rx, y - rx, 2 * rx, 2 * rx);
  g.restore();
};
// moonlight: the window's shape thrown on the boards, bluish
g.fillStyle = "rgba(159,180,224,0.1)";
g.beginPath();
g.moveTo(-3.3, -2.15);
g.lineTo(-1.8, -2.15);
g.lineTo(-1.2, -0.6);
g.lineTo(-2.9, -0.6);
g.closePath();
g.fill();
glow(1.35, -1.75, 2.4, 1.6, "255,190,110", 0.22);
g.fillStyle = "rgba(255,214,144,0.13)";
g.beginPath();
g.moveTo(2.3, -2.15);
g.lineTo(3.2, -2.15);
g.lineTo(3.6, -0.4);
g.lineTo(2.2, -0.9);
g.closePath();
g.fill();
// a rug by the bed
g.fillStyle = "rgba(90,30,24,0.55)";
g.fillRect(-2.9, -1.2, 1.9, 1.1);
g.strokeStyle = "rgba(200,150,90,0.25)";
g.lineWidth = 0.03;
g.strokeRect(-2.8, -1.1, 1.7, 0.9);
