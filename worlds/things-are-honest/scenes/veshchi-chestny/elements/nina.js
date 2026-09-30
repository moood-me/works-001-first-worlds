const br = Math.sin(e.t * 0.9) * 0.008;
const wv = g.createLinearGradient(-1.2, 0, -1.05, 0);
wv.addColorStop(0, "#4a2a16");
wv.addColorStop(1, "#6e4226");
g.fillStyle = wv;
g.fillRect(-1.2, -0.98, 0.12, 0.98);
g.fillStyle = "#6e4226";
g.beginPath();
g.arc(-1.14, -0.98, 0.06, 0, 7);
g.fill();
g.fillStyle = "#3a2418";
g.fillRect(-1.1, -0.34, 2.25, 0.3);
g.fillRect(1.05, -0.62, 0.1, 0.62);
g.fillRect(-1.08, -0.05, 0.06, 0.05);
g.fillRect(1.0, -0.05, 0.06, 0.05);
g.fillStyle = "#d9ccb2";
g.fillRect(-1.08, -0.52, 2.15, 0.2);
// pillow, her head, grey hair in a bun
g.fillStyle = "#efe6d2";
g.beginPath();
g.ellipse(-0.8, -0.56, 0.24, 0.1, 0, 0, 7);
g.fill();
g.fillStyle = "#d8b898";
g.beginPath();
g.ellipse(-0.74, -0.63, 0.085, 0.075, 0.2, 0, 7);
g.fill();
g.fillStyle = "#b8b4ae";
g.beginPath();
g.ellipse(-0.8, -0.67, 0.09, 0.055, 0.1, Math.PI, 0);
g.fill();
g.beginPath();
g.arc(-0.9, -0.64, 0.045, 0, 7);
g.fill();
g.strokeStyle = "#3a2418";
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(-0.72, -0.6);
g.quadraticCurveTo(-0.7, -0.59, -0.68, -0.6);
g.stroke();
// the plaid, rising and falling
g.save();
g.beginPath();
g.moveTo(-0.66, -0.52);
g.quadraticCurveTo(-0.3, -0.72 - br, 0.3, -0.64 - br * 0.6);
g.quadraticCurveTo(0.9, -0.6, 1.05, -0.5);
g.lineTo(1.05, -0.3);
g.lineTo(-0.7, -0.3);
g.closePath();
g.fillStyle = "#6a3a2a";
g.fill();
g.clip();
g.strokeStyle = "rgba(210,170,110,0.4)";
g.lineWidth = 0.02;
for (let x = -0.7; x < 1.1; x += 0.12) {
  g.beginPath();
  g.moveTo(x, -0.8);
  g.lineTo(x, -0.3);
  g.stroke();
}
for (let y = -0.78; y < -0.3; y += 0.12) {
  g.beginPath();
  g.moveTo(-0.7, y);
  g.lineTo(1.1, y);
  g.stroke();
}
g.fillStyle = "rgba(0,0,0,0.25)";
g.fillRect(-0.7, -0.8, 1.8, 0.5);
g.restore();
g.strokeStyle = "rgba(159,180,224,0.3)";
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(-0.66, -0.52);
g.quadraticCurveTo(-0.3, -0.72 - br, 0.3, -0.64 - br * 0.6);
g.stroke();
// her hand outside the plaid
g.fillStyle = "#d8b898";
g.beginPath();
g.ellipse(-0.25, -0.62 - br, 0.05, 0.022, 0.3, 0, 7);
g.fill();
