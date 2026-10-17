const P = [
  [-240, -17],
  [-150, -16.4],
  [-80, -15.3],
  [-35, -14.3],
  [-14, -13.6],
  [-5, -13.2],
  [7, -13],
  [15, -12.3],
  [25, -10.3],
  [37, -7.6],
  [50, -4.8],
  [64, -2.5],
  [78, -1],
  [92, -0.1],
  [106, 0.3],
];
g.beginPath();
g.moveTo(-240, 0.35);
P.forEach(([x, y]) => g.lineTo(x, y + (e.rnd() - 0.5) * 0.35));
g.lineTo(106, 0.35);
g.closePath();
const gr = g.createLinearGradient(0, -17, 0, 1);
gr.addColorStop(0, "#10141d");
gr.addColorStop(1, "#06080d");
g.fillStyle = gr;
g.fill();
g.save();
g.clip();
for (let i = 0; i < 700; i++) {
  const x = -240 + e.rnd() * 346,
    y = -17 + e.rnd() * 18;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(90,100,125,0.06)" : "rgba(0,0,0,0.3)";
  g.fillRect(x, y, 0.4 + e.rnd() * 2.5, 0.12 + e.rnd() * 0.25);
}
g.strokeStyle = "rgba(70,76,92,0.35)";
g.lineWidth = 0.22;
g.beginPath();
g.moveTo(4, -12.6);
g.lineTo(22, -10.2);
g.lineTo(12, -8.4);
g.lineTo(38, -6.3);
g.lineTo(30, -4.4);
g.lineTo(62, -2.1);
g.lineTo(54, -0.9);
g.lineTo(90, 0.1);
g.stroke();
g.restore();
g.strokeStyle = "rgba(125,140,172,0.28)";
g.lineWidth = 0.35;
g.beginPath();
g.moveTo(7, -13);
for (let i = 7; i < P.length; i++) g.lineTo(P[i][0], P[i][1]);
g.stroke();
g.lineCap = "round";
for (let i = 0; i < 90; i++) {
  const x = 18 + e.rnd() * 88,
    l = 1 + e.rnd() * 5;
  g.strokeStyle = `rgba(185,198,225,${0.08 + 0.16 * e.rnd()})`;
  g.lineWidth = 0.25 + e.rnd() * 0.3;
  g.beginPath();
  g.moveTo(x, 0.22);
  g.lineTo(x + l, 0.24);
  g.stroke();
}
for (let i = 0; i < 160; i++) {
  const x = -60 + e.rnd() * 140;
  const top = x < 7 ? -13.1 - Math.max(0, -x) * 0.012 : -13 + (x - 7) * 0.2;
  g.strokeStyle = "rgba(10,12,18,0.9)";
  g.lineWidth = 0.12;
  g.beginPath();
  g.moveTo(x, top + 0.3);
  g.lineTo(x + 0.3, top - 0.4 - e.rnd() * 0.6);
  g.stroke();
}
