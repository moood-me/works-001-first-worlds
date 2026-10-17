const W = String(e.state.weather || ""),
  wind = /wind|storm/.test(W) ? 1 : 0.4;
const P = [
  [16, 0.3],
  [10, -0.8],
  [4, -2.6],
  [-4, -5.5],
  [-12, -8.8],
  [-22, -12.5],
  [-36, -16],
  [-52, -19],
  [-75, -21],
  [-75, 0.3],
];
const ridge = [];
g.beginPath();
g.moveTo(P[0][0], P[0][1]);
for (let i = 1; i < P.length; i++) {
  const [x0, y0] = P[i - 1],
    [x1, y1] = P[i],
    j = i < P.length - 1;
  for (let k = 1; k <= 6; k++) {
    const t = k / 6,
      x = x0 + (x1 - x0) * t + (j ? (e.rnd() - 0.5) * 1.2 : 0),
      y = y0 + (y1 - y0) * t + (j ? (e.rnd() - 0.5) * 0.7 : 0);
    g.lineTo(x, y);
    if (j) ridge.push([x, y]);
  }
}
g.closePath();
let gr = g.createLinearGradient(0, -21, 0, 0.3);
gr.addColorStop(0, "#0b0e14");
gr.addColorStop(1, "#06070b");
g.fillStyle = gr;
g.fill();
g.save();
g.clip();
for (let i = 0; i < 260; i++) {
  const x = -75 + e.rnd() * 91,
    y = -21 + e.rnd() * 21.3,
    l = 0.5 + e.rnd() * 2;
  g.strokeStyle = e.rnd() < 0.5 ? "rgba(100,112,140,0.06)" : "rgba(0,0,0,0.35)";
  g.lineWidth = 0.08 + e.rnd() * 0.2;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + l, y + l * 0.3);
  g.stroke();
}
g.strokeStyle = "rgba(70,76,92,0.35)";
g.lineWidth = 0.35;
g.lineJoin = "round";
g.beginPath();
g.moveTo(13, 0.1);
g.lineTo(6, -1.2);
g.lineTo(9, -2.0);
g.lineTo(0, -3.6);
g.lineTo(4, -4.6);
g.lineTo(-8, -7.2);
g.lineTo(-4, -8.4);
g.lineTo(-18, -11.6);
g.stroke();
g.strokeStyle = "#05060a";
g.lineWidth = 0.12;
g.beginPath();
[
  [11, 0],
  [7, -1.4],
  [2, -3.6],
  [-3, -5.3],
  [-8, -7.5],
  [-13, -9.6],
].forEach(([x, y]) => {
  g.moveTo(x, y);
  g.lineTo(x, y - 1);
});
g.stroke();
g.restore();
g.strokeStyle = "rgba(140,155,185,0.22)";
g.lineWidth = 0.18;
g.beginPath();
ridge.forEach((q, i) => (i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1])));
g.stroke();
g.strokeStyle = "#0a0c11";
g.lineWidth = 0.06;
g.lineCap = "round";
for (let i = 0; i < 120; i++) {
  const q = ridge[Math.floor(e.rnd() * ridge.length)],
    h = 0.3 + e.rnd() * 0.8,
    ph = e.rnd() * 6,
    bend = (0.25 + 0.2 * Math.sin(e.t * 1.3 + ph) + 0.08 * Math.sin(e.t * 3.1 + ph * 2)) * wind;
  g.beginPath();
  g.moveTo(q[0], q[1] + 0.1);
  g.quadraticCurveTo(q[0] + bend * h * 0.4, q[1] - h * 0.6, q[0] + bend * h, q[1] - h * (1 - bend * 0.3));
  g.stroke();
}
