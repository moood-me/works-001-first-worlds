const P = [
  [-90, -7.4],
  [-50, -6.8],
  [-30, -6],
  [-18, -4.6],
  [-10, -3.4],
  [-4, -2.7],
  [3, -2],
  [9, -1.3],
  [15, -0.7],
  [20, -0.4],
  [25, 0.2],
];
g.beginPath();
g.moveTo(-90, 0.3);
P.forEach(([x, y]) => g.lineTo(x + (e.rnd() - 0.5) * 0.6, Math.min(0.25, y + (e.rnd() - 0.5) * 0.3)));
g.lineTo(25, 0.3);
g.closePath();
const gr = g.createLinearGradient(0, -7, 0, 1);
gr.addColorStop(0, "#0e1119");
gr.addColorStop(1, "#06080c");
g.fillStyle = gr;
g.fill();
g.save();
g.clip();
for (let i = 0; i < 300; i++) {
  const x = -90 + e.rnd() * 115,
    y = -7 + e.rnd() * 8;
  g.fillStyle = e.rnd() < 0.4 ? "rgba(110,122,150,0.07)" : "rgba(0,0,0,0.35)";
  g.beginPath();
  g.ellipse(x, y, 0.3 + e.rnd() * 1.2, 0.15 + e.rnd() * 0.4, 0, 0, 7);
  g.fill();
}
g.restore();
g.strokeStyle = "rgba(130,145,175,0.22)";
g.lineWidth = 0.12;
g.beginPath();
g.moveTo(-18, -4.6);
for (let i = 4; i < P.length; i++) g.lineTo(P[i][0], P[i][1]);
g.stroke();
