const s = e.state,
  t = e.t,
  W = s.wind ?? 1,
  H = s.heat || 0;
g.fillStyle = "rgba(40,22,40,0.3)";
g.beginPath();
g.ellipse(0.1, 0.22, 0.35, 0.16, 0.3, 0, 7);
g.fill();
g.strokeStyle = "#241a28";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-0.05, -0.02);
g.bezierCurveTo(-0.6, 0.1, -0.4, 0.35, -1.1, 0.5);
g.stroke();
g.strokeStyle = "#2a2030";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.3, 0);
g.lineTo(0, -0.25);
g.lineTo(0.3, 0);
g.moveTo(0, -0.25);
g.lineTo(0.05, 0.06);
g.moveTo(0, -0.25);
g.lineTo(0, -1.0);
g.stroke();
g.save();
g.translate(0, -0.6);
g.rotate(-0.06);
g.fillStyle = "#ece2c8";
g.fillRect(-0.26, -0.06, 0.52, 0.12);
g.fillStyle = "#9a2a2a";
g.font = "bold 0.065px sans-serif";
g.textAlign = "center";
g.textBaseline = "middle";
g.fillText(tr('HANDS OFF'), 0, 0.004);
g.restore();
g.fillStyle = "#2e2434";
g.beginPath();
g.ellipse(-0.08, -1.15, 0.16, 0.13, 0, 0, 7);
g.fill();
g.fillStyle = "rgba(255,80,50," + Math.max(0, H - 0.4) * 0.9 + ")";
g.beginPath();
g.ellipse(-0.1, -1.15, 0.12, 0.09, 0, 0, 7);
g.fill();
if (H > 0.5) e.light(-0.08, -1.15, 0.35, "#ff5030", (H - 0.5) * 1.2);
const cx = 0.12,
  cy = -1.15;
if (W > 0.05) {
  g.fillStyle = "rgba(70,58,80," + (0.25 + 0.3 * W) + ")";
  g.beginPath();
  g.ellipse(cx, cy, 0.17, 0.43, 0, 0, 7);
  g.fill();
  g.strokeStyle = "rgba(120,100,120," + 0.3 * W + ")";
  g.lineWidth = 0.02;
  for (let k = 0; k < 3; k++) {
    const a = t * 30 * W + k * 2.1;
    g.beginPath();
    g.ellipse(cx, cy, 0.12, 0.3, 0, a, a + 0.6);
    g.stroke();
  }
} else {
  g.fillStyle = "#3a3040";
  for (let k = 0; k < 3; k++) {
    const a = 0.4 + k * 2.094;
    g.save();
    g.translate(cx + Math.cos(a) * 0.06, cy + Math.sin(a) * 0.18);
    g.rotate(a);
    g.beginPath();
    g.ellipse(0, 0, 0.06, 0.2, 0, 0, 7);
    g.fill();
    g.restore();
  }
}
g.strokeStyle = "#3a3040";
g.lineWidth = 0.022;
g.beginPath();
g.ellipse(cx, cy, 0.2, 0.5, 0, 0, 7);
g.stroke();
g.lineWidth = 0.01;
g.beginPath();
g.ellipse(cx, cy, 0.11, 0.28, 0, 0, 7);
g.stroke();
for (let k = 0; k < 8; k++) {
  const a = (k * Math.PI) / 4;
  g.beginPath();
  g.moveTo(cx, cy);
  g.lineTo(cx + Math.cos(a) * 0.2, cy + Math.sin(a) * 0.5);
  g.stroke();
}
g.fillStyle = "#2a2030";
g.beginPath();
g.arc(cx, cy, 0.04, 0, 7);
g.fill();
g.strokeStyle = "rgba(255,170,130,0.6)";
g.lineWidth = 0.018;
g.beginPath();
g.ellipse(cx, cy, 0.2, 0.5, 0, Math.PI * 0.6, Math.PI * 1.4);
g.stroke();
for (let i = 0; i < 16; i++) {
  const s1 = e.rnd(),
    s2 = e.rnd(),
    s3 = e.rnd();
  if (W < 0.03) continue;
  const ph = (t * (0.5 + s1 * 0.5) + s2) % 1;
  const x = 0.4 + ph * 2.8,
    y = cy + (s3 - 0.5) * 0.8 * (0.7 + ph * 0.6);
  const a = W * 0.22 * Math.sin(ph * Math.PI);
  g.strokeStyle = "rgba(255,240,232," + a + ")";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + 0.15, y - 0.03 * Math.sin(t * 3 + i), x + 0.35, y);
  g.stroke();
}
if (s.fan === "overheated") {
  for (let k = 0; k < 6; k++) {
    const ph = (t * 0.25 + k / 6) % 1;
    g.fillStyle = "rgba(120,110,120," + 0.25 * (1 - ph) + ")";
    g.beginPath();
    g.arc(-0.1 + Math.sin(ph * 5 + k) * 0.06, -1.25 - ph * 0.8, 0.04 + ph * 0.12, 0, 7);
    g.fill();
  }
}
e.at(0.1, -1.75);
