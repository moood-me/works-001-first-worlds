const t = e.t;
g.fillStyle = "rgba(70,48,25,0.32)";
g.beginPath();
g.ellipse(3.5, 0.2, 6, 0.5, 0, 0, 6.2832);
g.fill();
g.strokeStyle = "#3f3226";
g.lineCap = "round";
const B = [
  [0, 0, -0.05, -1.3, -0.2, -2.5, 0.45],
  [-0.2, -2.5, -1.0, -3.6, -2.6, -5.7, 0.28],
  [-0.2, -2.5, 1.2, -3.5, 3.0, -5.9, 0.26],
  [-0.2, -2.5, -0.3, -4.4, 0.4, -6.2, 0.2],
  [-1.6, -4.6, -2.8, -5.0, -4.2, -5.7, 0.1],
  [1.9, -4.6, 3.0, -4.9, 4.6, -5.6, 0.1],
];
for (const b of B) {
  g.lineWidth = b[6];
  g.beginPath();
  g.moveTo(b[0], b[1]);
  g.quadraticCurveTo(b[2], b[3], b[4], b[5]);
  g.stroke();
}
function layer(cx, cy, rx, ry, col, n) {
  g.fillStyle = col;
  for (let i = 0; i < n; i++) {
    const a = e.rnd(),
      b = e.rnd(),
      c = e.rnd();
    const x = cx + (a - 0.5) * rx * 2,
      y = cy + (b - 0.5) * ry * 1.2 + Math.sin(t * 0.6 + i * 1.3) * 0.03;
    const r = 0.6 + c * 0.9;
    g.beginPath();
    g.ellipse(x, y, r * 1.4, r * 0.45, 0, 0, 6.2832);
    g.fill();
  }
}
layer(0, -5.9, 5.2, 0.9, "#3d4424", 38);
layer(-0.3, -6.5, 4.6, 0.7, "#56602f", 32);
layer(-1, -6.9, 3.6, 0.5, "#7a7c42", 20);
g.globalAlpha = 0.6;
layer(-2, -7.1, 2.2, 0.3, "#9c9557", 10);
g.globalAlpha = 1;
