const s = e.state,
  t = e.t;
if (s.crow === "flown") {
  e.at(0, -0.3);
  return;
}
g.scale(-1, 1);
const tilt = Math.sin(t * 0.7) * 0.15 + (Math.sin(t * 0.23) > 0.8 ? 0.4 : 0);
const caw = Math.pow(Math.max(0, Math.sin(t * 0.71 + 2)), 40);
g.fillStyle = "#1d1622";
g.strokeStyle = "#1d1622";
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(-0.02, -0.06);
g.lineTo(-0.03, 0);
g.moveTo(0.04, -0.06);
g.lineTo(0.05, 0);
g.stroke();
g.beginPath();
g.ellipse(0, -0.14, 0.15, 0.085, -0.3, 0, 7);
g.fill();
g.beginPath();
g.moveTo(-0.1, -0.11);
g.lineTo(-0.32, -0.03);
g.lineTo(-0.3, 0.01);
g.lineTo(-0.08, -0.06);
g.fill();
g.save();
g.translate(0.13, -0.25);
g.rotate(tilt);
g.beginPath();
g.arc(0, 0, 0.06, 0, 7);
g.fill();
g.beginPath();
g.moveTo(0.04, -0.02);
g.lineTo(0.16, 0.0);
g.lineTo(0.04, 0.012);
g.fill();
g.beginPath();
g.moveTo(0.04, 0.012);
g.lineTo(0.14, 0.02 + caw * 0.06);
g.lineTo(0.04, 0.03);
g.fill();
g.fillStyle = "rgba(255,220,180,0.85)";
g.fillRect(0.015, -0.022, 0.013, 0.013);
g.restore();
g.strokeStyle = "rgba(255,170,130,0.55)";
g.lineWidth = 0.012;
g.beginPath();
g.ellipse(0, -0.14, 0.15, 0.085, -0.3, Math.PI * 1.05, Math.PI * 1.6);
g.stroke();
if (caw > 0.2) {
  g.scale(-1, 1);
  g.fillStyle = "rgba(255,240,230," + caw * 0.8 + ")";
  g.font = "bold 0.11px sans-serif";
  g.textAlign = "center";
  g.fillText(tr('CAW'), -0.12, -0.42);
}
e.at(-0.13, -0.35);
