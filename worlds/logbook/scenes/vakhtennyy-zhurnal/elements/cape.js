// the rock seen from above: a tongue of land from the viewer out to the tower, ragged edges
g.beginPath();
const pts = [
  [-55, 52],
  [-52, 20],
  [-48, -8],
  [-40, -30],
  [-30, -46],
  [-14, -52],
  [8, -50],
  [20, -40],
  [26, -24],
  [30, -6],
  [36, 12],
  [44, 30],
  [55, 52],
];
g.moveTo(pts[0][0], pts[0][1]);
for (let i = 1; i < pts.length; i++) {
  const [x0, y0] = pts[i - 1],
    [x1, y1] = pts[i];
  for (let k = 1; k <= 6; k++) {
    const t = k / 6;
    g.lineTo(x0 + (x1 - x0) * t + (e.rnd() - 0.5) * 3, y0 + (y1 - y0) * t + (e.rnd() - 0.5) * 3);
  }
}
g.closePath();
const gr = g.createRadialGradient(-10, -30, 5, -10, -30, 80);
gr.addColorStop(0, "#1a1f29");
gr.addColorStop(1, "#090b10");
g.fillStyle = gr;
g.fill();
g.save();
g.clip();
for (let i = 0; i < 900; i++) {
  const x = (e.rnd() - 0.5) * 110,
    y = (e.rnd() - 0.5) * 104;
  g.strokeStyle = e.rnd() < 0.5 ? "rgba(120,130,150,0.07)" : "rgba(0,0,0,0.35)";
  g.lineWidth = 0.2 + e.rnd() * 0.5;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + (e.rnd() - 0.3) * 4, y + e.rnd() * 2);
  g.stroke();
}
// the path: worn, a little lighter, winding to the tower door
g.strokeStyle = "rgba(52,56,66,0.5)";
g.lineWidth = 0.9;
g.beginPath();
g.moveTo(8, 52);
g.bezierCurveTo(10, 30, -2, 20, 0, 4);
g.bezierCurveTo(2, -12, -16, -24, -22, -35);
g.stroke();
g.restore();
// wet rim where the sea licks the rock
g.strokeStyle = "rgba(150,165,195,0.18)";
g.lineWidth = 0.6;
g.stroke();
