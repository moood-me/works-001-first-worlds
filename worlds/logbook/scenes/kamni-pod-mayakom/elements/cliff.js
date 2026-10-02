const P = [
  [-175, 0.3],
  [-175, -40],
  [-140, -36],
  [-110, -30],
  [-80, -24],
  [-50, -18],
  [-25, -14],
  [-6, -13],
  [12, -12.5],
  [24, -10.5],
  [36, -7],
  [50, -3.5],
  [64, -1],
  [80, 0],
  [92, 0.3],
];
const ridge = [];
g.beginPath();
g.moveTo(P[0][0], P[0][1]);
for (let i = 1; i < P.length; i++) {
  const [x0, y0] = P[i - 1],
    [x1, y1] = P[i],
    j = i > 1 && i < P.length - 1;
  for (let k = 1; k <= 5; k++) {
    const t = k / 5,
      x = x0 + (x1 - x0) * t + (j ? (e.rnd() - 0.5) * 1.5 : 0),
      y = y0 + (y1 - y0) * t + (j ? (e.rnd() - 0.5) * 1.1 : 0);
    g.lineTo(x, y);
    if (j || i === 1) ridge.push([x, y]);
  }
}
g.closePath();
let gr = g.createLinearGradient(0, -40, 0, 0.3);
gr.addColorStop(0, "#0d1017");
gr.addColorStop(1, "#07090d");
g.fillStyle = gr;
g.fill();
g.save();
g.clip();
for (let i = 0; i < 300; i++) {
  const x = -175 + e.rnd() * 267,
    y = -40 + e.rnd() * 40.3,
    l = 1 + e.rnd() * 4;
  g.strokeStyle = e.rnd() < 0.5 ? "rgba(110,122,150,0.06)" : "rgba(0,0,0,0.35)";
  g.lineWidth = 0.2 + e.rnd() * 0.5;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + l, y + l * 0.35);
  g.stroke();
}
gr = g.createRadialGradient(45, -12, 0, 45, -12, 60);
gr.addColorStop(0, "rgba(90,105,135,0.12)");
gr.addColorStop(1, "rgba(90,105,135,0)");
g.fillStyle = gr;
g.fillRect(-20, -50, 140, 52);
g.restore();
g.strokeStyle = "rgba(140,155,185,0.16)";
g.lineWidth = 0.45;
g.beginPath();
ridge.slice(20).forEach((q, i) => (i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1])));
g.stroke();
for (let i = 0; i < 46; i++) {
  const x = -30 + e.rnd() * 118,
    r = 1 + e.rnd() * 3,
    a = Math.max(0, 0.08 + 0.12 * Math.sin(e.t * 0.8 + i * 1.3) + 0.05 * Math.sin(e.t * 1.9 + i));
  g.fillStyle = `rgba(200,212,232,${a})`;
  g.beginPath();
  g.ellipse(x, 0, r, 0.25, 0, 0, 7);
  g.fill();
}
