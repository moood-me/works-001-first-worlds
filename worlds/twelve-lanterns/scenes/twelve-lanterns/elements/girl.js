const T = -11,
  sy = (t) => T * (1 - Math.pow(1 - t, 1.6)),
  hw = (y) => 3 - 1.9 * (y / T);
const p = e.state.girl ?? 0,
  t = 0.9 - 0.86 * p,
  y = sy(t),
  s = (hw(y) / 3) * 1.35,
  gx = -0.45 * s;
const tilt = 0.16 + Math.sin(e.t * 0.23) * 0.05 + Math.sin(e.t * 0.61) * 0.02,
  b = Math.sin(e.t * 0.9) * 0.006;
e.at(gx, y - 1.45 * s);
g.save();
g.translate(gx, y);
g.scale(s, s);
g.fillStyle = "rgba(0,0,0,0.35)";
g.beginPath();
g.ellipse(0, 0, 0.3, 0.05, 0, 0, 7);
g.fill();
g.fillStyle = "#d8c8c4";
g.fillRect(-0.09, -0.12, 0.05, 0.12);
g.fillRect(0.04, -0.12, 0.05, 0.12);
g.fillStyle = "#4a3020";
g.fillRect(-0.11, -0.03, 0.08, 0.03);
const sw = Math.sin(e.t * 0.5) * 0.015;
g.fillStyle = "#1b2042";
g.beginPath();
g.moveTo(-0.17 + sw, -0.1);
g.lineTo(-0.14, -0.62);
g.quadraticCurveTo(-0.17, -1.0 + b, -0.12, -1.04 + b);
g.lineTo(0.12, -1.04 + b);
g.quadraticCurveTo(0.17, -1.0 + b, 0.14, -0.62);
g.lineTo(0.17 + sw, -0.1);
g.closePath();
g.fill();
for (const sd of [-1, 1]) {
  g.beginPath();
  g.moveTo(sd * 0.12, -1.0 + b);
  g.lineTo(sd * 0.27, -0.95 + b);
  g.lineTo(sd * (0.28 + sw), -0.55);
  g.lineTo(sd * 0.15, -0.55);
  g.closePath();
  g.fill();
}
g.fillStyle = "rgba(220,215,235,0.55)";
for (let i = 0; i < 16; i++) {
  const fx = (e.rnd() - 0.5) * 0.3,
    fy = -0.15 - e.rnd() * 0.8;
  g.beginPath();
  g.arc(fx, fy, 0.012, 0, 7);
  g.fill();
}
g.fillStyle = "#9a1c26";
g.fillRect(-0.145, -0.78, 0.29, 0.13);
g.fillStyle = "#c83a3a";
g.fillRect(-0.02, -0.76, 0.04, 0.09);
g.fillStyle = "rgba(255,170,100,0.2)";
g.fillRect(-0.15, -1.0, 0.05, 0.88);
g.fillStyle = "#d8c8c4";
g.fillRect(-0.03, -1.1 + b, 0.06, 0.08);
g.translate(0, -1.17 + b);
g.rotate(tilt);
g.fillStyle = "#0b0810";
g.beginPath();
g.ellipse(0, -0.02, 0.13, 0.14, 0, 0, 7);
g.fill();
g.fillRect(-0.13, -0.02, 0.26, 0.12);
if (e.state.mask !== false) {
  g.fillStyle = "#efe8e2";
  g.beginPath();
  g.moveTo(-0.1, -0.06);
  g.quadraticCurveTo(-0.1, 0.08, 0, 0.13);
  g.quadraticCurveTo(0.1, 0.08, 0.1, -0.06);
  g.quadraticCurveTo(0, -0.11, -0.1, -0.06);
  g.fill();
  for (const sd of [-1, 1]) {
    g.beginPath();
    g.moveTo(sd * 0.04, -0.09);
    g.lineTo(sd * 0.1, -0.2);
    g.lineTo(sd * 0.11, -0.05);
    g.closePath();
    g.fill();
  }
  g.strokeStyle = "#b4202a";
  g.lineWidth = 0.014;
  for (const sd of [-1, 1]) {
    g.beginPath();
    g.moveTo(sd * 0.02, -0.01);
    g.lineTo(sd * 0.075, -0.035);
    g.stroke();
    g.beginPath();
    g.moveTo(sd * 0.03, 0.06);
    g.lineTo(sd * 0.08, 0.04);
    g.stroke();
  }
  g.fillStyle = "#b4202a";
  g.beginPath();
  g.arc(0, -0.065, 0.012, 0, 7);
  g.fill();
  g.fillStyle = "#1a0c10";
  g.beginPath();
  g.arc(0, 0.1, 0.01, 0, 7);
  g.fill();
} else {
  g.fillStyle = "#e4d8d2";
  g.beginPath();
  g.ellipse(0, 0.02, 0.085, 0.1, 0, 0, 7);
  g.fill();
  g.fillStyle = "#0b0810";
  g.fillRect(-0.09, -0.08, 0.18, 0.05);
  g.strokeStyle = "#1a0c10";
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(-0.055, 0.01);
  g.lineTo(-0.02, 0.01);
  g.moveTo(0.02, 0.01);
  g.lineTo(0.055, 0.01);
  g.stroke();
  g.fillStyle = "#efe8e2";
  g.beginPath();
  g.ellipse(0.13, -0.04, 0.05, 0.08, 0.4, 0, 7);
  g.fill();
}
g.restore();
