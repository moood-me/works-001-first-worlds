const p = e.state.ducks ?? 0;
if (p <= 0.001 || p >= 0.999) return;
const t = e.t,
  X = 50 - p * 100;
const F = [
  [0, 0],
  [1.5, -0.6],
  [3.0, -1.1],
  [4.4, -1.6],
  [1.6, 0.55],
  [3.2, 1.0],
  [5.8, -2.0],
];
g.lineCap = "round";
g.lineJoin = "round";
F.forEach((o, i) => {
  const x = X + o[0] * 1.3 + Math.sin(t * 0.31 + i * 2.1) * 0.25,
    y = o[1] * 0.55 + Math.sin(t * 0.9 + i * 1.3) * 0.12 + Math.sin(t * 0.41 + i) * 0.08;
  const f = Math.sin(t * 8.5 + i * 1.9);
  g.fillStyle = "#45464b";
  g.beginPath();
  g.moveTo(x - 0.12, y - 0.03);
  g.quadraticCurveTo(x - 0.04, y - 0.22 * f - 0.03, x + 0.1, y - 0.4 * f);
  g.lineTo(x + 0.04, y - 0.02);
  g.closePath();
  g.fill();
  g.fillStyle = "#3a3b40";
  g.beginPath();
  g.ellipse(x, y, 0.26, 0.07, -0.05, 0, 7);
  g.fill();
  g.beginPath();
  g.moveTo(x + 0.22, y - 0.02);
  g.lineTo(x + 0.36, y + 0.01);
  g.lineTo(x + 0.22, y + 0.05);
  g.fill();
  g.strokeStyle = "#3a3b40";
  g.lineWidth = 0.06;
  g.beginPath();
  g.moveTo(x - 0.2, y - 0.01);
  g.lineTo(x - 0.4, y - 0.05);
  g.stroke();
  g.beginPath();
  g.arc(x - 0.42, y - 0.05, 0.055, 0, 7);
  g.fill();
  g.lineWidth = 0.03;
  g.beginPath();
  g.moveTo(x - 0.46, y - 0.04);
  g.lineTo(x - 0.53, y - 0.025);
  g.stroke();
  g.fillStyle = "#303136";
  g.beginPath();
  g.moveTo(x - 0.1, y - 0.02);
  g.quadraticCurveTo(x - 0.02, y - 0.3 * f, x + 0.16, y - 0.48 * f + 0.02);
  g.lineTo(x + 0.05, y - 0.01);
  g.closePath();
  g.fill();
});
