const p = [
  [-1.5, 1.15, -0.05],
  [0.2, 1.0, 0.12],
];
g.strokeStyle = "#20242a";
g.lineWidth = 0.01;
for (let k = 0; k < 2; k++) {
  const yo = k ? -0.45 : -0.85;
  g.beginPath();
  g.moveTo(-3.5, yo + 0.1);
  g.quadraticCurveTo(-2.5, yo + 0.2, p[0][0], yo);
  g.quadraticCurveTo(-0.6, yo + 0.2 + 0.02 * Math.sin(e.t * 0.4 + k), p[1][0], yo + 0.05);
  g.quadraticCurveTo(0.5, yo + 0.25, 0.75, yo + 0.45 + k * 0.05);
  g.stroke();
}
for (const q of p) {
  g.save();
  g.translate(q[0], 0);
  g.rotate(q[2]);
  g.fillStyle = "#14171b";
  g.fillRect(-0.05, -q[1], 0.1, q[1] + 0.15);
  g.fillStyle = "#7c8590";
  g.beginPath();
  g.ellipse(0, -q[1], 0.065, 0.03, 0, 0, 7);
  g.fill();
  g.restore();
}
g.strokeStyle = "#1d2126";
g.lineWidth = 0.01;
for (let i = 0; i < 24; i++) {
  const x = -3.5 + e.rnd() * 4.6,
    h = 0.15 + e.rnd() * 0.4,
    b = e.rnd() * 0.3 - 0.15;
  const s = Math.sin(e.t * 0.6 + i) * 0.02 + Math.sin(e.t * 0.23 + i * 2) * 0.015;
  g.beginPath();
  g.moveTo(x, 0.05);
  g.quadraticCurveTo(x + b * 0.5, -h * 0.6, x + b + s, -h);
  g.stroke();
}
