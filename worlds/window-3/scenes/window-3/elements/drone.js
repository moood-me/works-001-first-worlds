const t = e.t,
  dx = Math.sin(t * 0.31) * 0.4 + Math.sin(t * 0.13 + 1) * 0.2,
  dy = Math.sin(t * 0.73) * 0.1 + Math.sin(t * 1.9) * 0.03,
  tl = Math.sin(t * 0.31 + 1.5) * 0.08;
g.save();
g.translate(dx, dy);
g.rotate(tl);
for (const sx of [-0.42, 0.42]) {
  g.strokeStyle = "#2a2d34";
  g.lineWidth = 0.035;
  g.beginPath();
  g.moveTo(sx * 0.55, -0.28);
  g.lineTo(sx, -0.42);
  g.stroke();
  g.fillStyle = "rgba(185,195,215," + (0.12 + 0.05 * Math.sin(t * 40 + sx)) + ")";
  g.beginPath();
  g.ellipse(sx, -0.44, 0.3, 0.045, 0, 0, 7);
  g.fill();
}
const bg = g.createLinearGradient(-0.35, 0, 0.35, 0);
bg.addColorStop(0, "#3a3d45");
bg.addColorStop(0.7, "#b9b2a2");
bg.addColorStop(1, "#d8d0bf");
g.fillStyle = bg;
g.beginPath();
g.moveTo(-0.33, -0.3);
g.quadraticCurveTo(0, -0.38, 0.33, -0.3);
g.lineTo(0.3, 0.08);
g.quadraticCurveTo(0, 0.14, -0.3, 0.08);
g.closePath();
g.fill();
g.fillStyle = "#14171c";
g.fillRect(-0.22, -0.24, 0.44, 0.17);
g.fillStyle = "rgba(120,255,170,0.85)";
g.font = "bold 0.065px monospace";
g.textAlign = "center";
g.textBaseline = "middle";
g.fillText(Math.sin(t * 0.5) > 0 ? tr('COFFEE 40 cr') : tr('NO QUEUE*'), 0, -0.19);
g.font = "0.04px monospace";
g.fillStyle = "rgba(120,255,170,0.5)";
g.fillText(Math.sin(t * 0.5) > 0 ? tr('hot') : tr('*except coffee'), 0, -0.12);
g.strokeStyle = "#2a2d34";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-0.15, 0.1);
g.lineTo(-0.18, 0.2);
g.moveTo(0.15, 0.1);
g.lineTo(0.18, 0.2);
g.stroke();
g.fillStyle = "#2a2d34";
g.fillRect(-0.22, 0.2, 0.44, 0.025);
g.fillStyle = "#e8e0cc";
g.beginPath();
g.moveTo(-0.06, 0.2);
g.lineTo(-0.05, 0.09);
g.lineTo(0.05, 0.09);
g.lineTo(0.06, 0.2);
g.fill();
g.fillStyle = "#8a5a34";
g.fillRect(-0.055, 0.12, 0.11, 0.03);
g.restore();
for (let k = 0; k < 4; k++) {
  const ph = (t * 0.25 + k / 4) % 1;
  g.fillStyle = "rgba(230,230,230," + 0.12 * (1 - ph) + ")";
  g.beginPath();
  g.arc(dx + Math.sin(ph * 6 + k) * 0.04, dy + 0.07 - ph * 0.45, 0.02 + ph * 0.05, 0, 7);
  g.fill();
}
const r = Math.sin(t * 2.2) > 0.6;
e.light(dx + 0.3, dy - 0.3, 0.25, "#ff5040", r ? 0.8 : 0.15);
e.light(dx, dy - 0.16, 0.4, "#78ffaa", 0.25);
e.at(dx, dy - 0.5);
