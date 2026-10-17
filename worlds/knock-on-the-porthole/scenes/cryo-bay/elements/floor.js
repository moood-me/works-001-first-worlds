const s = e.state,
  fr = s.frost_density ?? 0.9,
  L = s.pod3_light ?? 0.2,
  R = e.rnd;
g.fillStyle = "#080b0f";
g.fillRect(-3.7, -3, 7.4, 6);
let c = g.createRadialGradient(0, 0.2, 0, 0, 0.2, 2.6);
c.addColorStop(0, "rgba(100,160,215," + (0.1 + 0.22 * L) + ")");
c.addColorStop(1, "rgba(100,160,215,0)");
g.fillStyle = c;
g.fillRect(-3.7, -3, 7.4, 6);
c = g.createRadialGradient(-1.45, -2.1, 0, -1.45, -2.1, 1.2);
c.addColorStop(0, "rgba(150,30,25,0.18)");
c.addColorStop(1, "rgba(150,30,25,0)");
g.fillStyle = c;
g.fillRect(-3.7, -3, 7.4, 6);
g.strokeStyle = "rgba(60,74,92,0.22)";
g.lineWidth = 0.012;
for (let x = -3.7; x <= 3.7; x += 0.15) {
  g.beginPath();
  g.moveTo(x, -3);
  g.lineTo(x, 3);
  g.stroke();
}
for (let y = -3; y <= 3; y += 0.15) {
  g.beginPath();
  g.moveTo(-3.7, y);
  g.lineTo(3.7, y);
  g.stroke();
}
g.strokeStyle = "rgba(0,0,0,0.7)";
g.lineWidth = 0.05;
for (let x = -3.6; x <= 3.7; x += 1.2) {
  g.beginPath();
  g.moveTo(x, -3);
  g.lineTo(x, 3);
  g.stroke();
}
c = g.createRadialGradient(0, 0, 0.3, 0, 0, 1.3);
c.addColorStop(0, "rgba(215,232,248," + 0.3 * fr + ")");
c.addColorStop(1, "rgba(215,232,248,0)");
g.fillStyle = c;
g.fillRect(-1.5, -1.5, 3, 3);
for (const p of [
  [-2, -0.6],
  [0, 0],
  [2, -0.6],
]) {
  g.fillStyle = "rgba(2,3,5,0.6)";
  g.beginPath();
  g.ellipse(p[0], p[1], 0.62, 0.5, 0, 0, 7);
  g.fill();
}
g.strokeStyle = "rgba(200,160,60,0.2)";
g.lineWidth = 0.05;
g.setLineDash([0.15, 0.15]);
g.beginPath();
g.ellipse(0, 0, 0.9, 0.8, 0, 0, 7);
g.stroke();
g.setLineDash([]);
for (let i = 0; i < 1500; i++) {
  const a = R() * 6.283,
    r = Math.pow(R(), 0.7) * 2.4,
    z = R(),
    k = R();
  if (k > fr) continue;
  g.fillStyle = "rgba(210,228,245," + (0.05 + 0.15 * z) * (1 - r / 2.6) + ")";
  g.fillRect(Math.cos(a) * r * 1.3, Math.sin(a) * r, 0.01 + z * 0.02, 0.01 + z * 0.02);
}
for (let i = 1; i < 15; i++) {
  const u = i / 15,
    x = (1 - u) * (1 - u) * -1.45 + u * u * 1.25,
    y = (1 - u) * (1 - u) * -1.8 + 2 * (1 - u) * u * 2.4 + u * u * 0.1,
    dx = 2 * (1 - u) * 1.45 + 2 * u * 1.25,
    dy = 2 * (1 - u) * 4.2 - 2 * u * 2.3,
    a = Math.atan2(dy, dx),
    sd = i % 2 ? 1 : -1;
  g.save();
  g.translate(x - Math.sin(a) * 0.09 * sd, y + Math.cos(a) * 0.09 * sd);
  g.rotate(a);
  g.fillStyle = "rgba(6,9,13," + 0.55 * fr + ")";
  g.beginPath();
  g.ellipse(0, 0, 0.12, 0.045, 0, 0, 7);
  g.fill();
  g.restore();
}
