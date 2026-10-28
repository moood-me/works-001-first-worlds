const R = 11.6,
  cy = -14.4,
  t = e.t,
  N = 16;
g.lineCap = "round";
g.lineJoin = "round";
g.fillStyle = "#66675b";
g.fillRect(-7, -0.6, 14, 0.7);
g.strokeStyle = "#4f4d42";
g.lineWidth = 0.4;
g.beginPath();
g.moveTo(-5.6, 0);
g.lineTo(0, cy);
g.lineTo(5.6, 0);
g.moveTo(-3.6, 0);
g.lineTo(0, cy);
g.lineTo(3.6, 0);
g.stroke();
g.lineWidth = 0.12;
g.beginPath();
for (let k = 1; k < 6; k++) {
  const f = k / 6,
    f2 = (k + 0.5) / 6;
  g.moveTo(-5.6 * (1 - f), cy * f);
  g.lineTo(5.6 * (1 - f), cy * f);
  g.moveTo(-5.6 * (1 - f), cy * f);
  g.lineTo(-3.6 * (1 - f2), cy * f2);
  g.moveTo(5.6 * (1 - f), cy * f);
  g.lineTo(3.6 * (1 - f2), cy * f2);
}
g.stroke();
g.strokeStyle = "#857645";
g.lineWidth = 0.09;
g.beginPath();
for (let i = 0; i < N * 2; i++) {
  const a = (i * Math.PI) / N;
  g.moveTo(0, cy);
  g.lineTo(Math.cos(a) * R, cy + Math.sin(a) * R);
}
g.stroke();
g.strokeStyle = e.color;
g.lineWidth = 0.32;
g.beginPath();
g.arc(0, cy, R, 0, 6.2832);
g.stroke();
g.beginPath();
g.arc(0, cy, R - 0.9, 0, 6.2832);
g.stroke();
g.lineWidth = 0.09;
g.beginPath();
for (let i = 0; i < N * 4; i++) {
  const a = (i * Math.PI) / (N * 2),
    a2 = ((i + 1) * Math.PI) / (N * 2);
  g.moveTo(Math.cos(a) * R, cy + Math.sin(a) * R);
  g.lineTo(Math.cos(a2) * (R - 0.9), cy + Math.sin(a2) * (R - 0.9));
}
g.stroke();
g.fillStyle = "#5f5d4f";
g.beginPath();
g.arc(0, cy, 0.9, 0, 6.2832);
g.fill();
for (let i = 0; i < N; i++) {
  const a = (i * 2 * Math.PI) / N + 0.1;
  const px = Math.cos(a) * R,
    py = cy + Math.sin(a) * R;
  const sw = 0.05 * Math.sin(t * 0.6 + i * 1.7) + 0.03 * Math.sin(t * 0.37 + i * 0.9);
  const rx = e.rnd(),
    ry = e.rnd(),
    rs = e.rnd();
  g.save();
  g.translate(px, py);
  g.rotate(sw);
  g.strokeStyle = "#4f4d42";
  g.lineWidth = 0.1;
  g.beginPath();
  g.moveTo(0, 0);
  g.lineTo(0, 0.95);
  g.stroke();
  g.fillStyle = e.color;
  g.beginPath();
  g.moveTo(-0.95, 0.95);
  g.lineTo(0.95, 0.95);
  g.lineTo(0.7, 1.2);
  g.lineTo(-0.7, 1.2);
  g.closePath();
  g.fill();
  g.beginPath();
  g.moveTo(-0.8, 1.2);
  g.lineTo(0.8, 1.2);
  g.quadraticCurveTo(0.85, 2.2, 0.55, 2.4);
  g.lineTo(-0.55, 2.4);
  g.quadraticCurveTo(-0.85, 2.2, -0.8, 1.2);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(105,68,40,0.55)";
  g.beginPath();
  g.ellipse(-0.3 + rx * 0.5, 1.8 + ry * 0.4, 0.25 + rs * 0.25, 0.14, 0, 0, 6.2832);
  g.fill();
  g.fillStyle = "rgba(40,40,34,0.28)";
  g.fillRect(0.3, 1.2, 0.5, 1.2);
  g.restore();
}
