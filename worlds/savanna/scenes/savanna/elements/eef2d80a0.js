g.fillStyle = "#50523a";
g.strokeStyle = "#50523a";
g.lineCap = "round";
const T = [
  [-360, 9],
  [-210, 7],
  [255, 8.5],
  [400, 6],
];
for (const [x, h] of T) {
  g.lineWidth = h * 0.06;
  g.beginPath();
  g.moveTo(x, 0);
  g.quadraticCurveTo(x - h * 0.05, -h * 0.4, x - h * 0.25, -h * 0.72);
  g.moveTo(x - h * 0.02, -h * 0.35);
  g.quadraticCurveTo(x + h * 0.2, -h * 0.55, x + h * 0.35, -h * 0.7);
  g.stroke();
  for (let i = 0; i < 9; i++) {
    const px = x + (e.rnd() - 0.5) * h * 1.3,
      py = -h * (0.75 + e.rnd() * 0.15),
      r = h * (0.12 + e.rnd() * 0.12);
    g.beginPath();
    g.ellipse(px, py, r * 1.5, r * 0.4, 0, 0, 6.2832);
    g.fill();
  }
}
for (let i = 0; i < 14; i++) {
  const x = (e.rnd() * 2 - 1) * 440,
    w = 2 + e.rnd() * 4;
  g.beginPath();
  g.ellipse(x, 0, w, w * 0.45, 0, Math.PI, 0);
  g.fill();
}
