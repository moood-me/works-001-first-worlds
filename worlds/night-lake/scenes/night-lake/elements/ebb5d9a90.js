const t = e.t,
  W = 0.75;
const tx = 2.3 + 0.45 * Math.sin(t * 0.19) + 0.22 * Math.sin(t * 0.47 + 1.3);
const br = 0.006 * Math.sin(t * 1.2) + 0.003 * Math.sin(t * 0.53);
const a1 = 0.22 * Math.sin(t * 0.83) + 0.07 * Math.sin(t * 0.31 + 0.5);
const a2 = 0.2 * Math.sin(t * 0.71 + 2.1) + 0.06 * Math.sin(t * 0.27 + 1);
const hx = 0.07 + 0.01 * Math.sin(t * 0.37),
  hy = -0.26 + br * 0.5;
const ang = Math.atan2(W - hy, tx - hx);
const ca = Math.cos(ang),
  sa = Math.sin(ang);
const lx = hx + ca * 0.15,
  ly = hy + sa * 0.15;
const hdx = -0.13,
  hdy = -0.62 + br * 1.2;
const leg = (ax, a, col) => {
  g.strokeStyle = col;
  g.lineCap = "round";
  g.lineWidth = 0.1;
  g.beginPath();
  g.moveTo(-0.26, -0.07);
  g.lineTo(ax, -0.06);
  g.stroke();
  g.lineWidth = 0.08;
  const fx = ax + 0.32 * Math.sin(a),
    fy = -0.06 + 0.32 * Math.cos(a);
  g.beginPath();
  g.moveTo(ax, -0.06);
  g.lineTo(fx, fy);
  g.stroke();
  g.fillStyle = col;
  g.beginPath();
  g.ellipse(fx + 0.04, fy + 0.02, 0.075, 0.045, a * 0.8, 0, 6.283);
  g.fill();
};
const S = (col, acc) => {
  leg(0.04, a2, col);
  g.fillStyle = col;
  g.beginPath();
  g.ellipse(-0.3, -0.08, 0.15, 0.1, 0, 0, 6.283);
  g.fill();
  g.beginPath();
  g.moveTo(-0.44, -0.03);
  g.bezierCurveTo(-0.5, -0.24, -0.4, -0.44 + br, -0.25, -0.5 + br);
  g.bezierCurveTo(-0.14, -0.53 + br, -0.08, -0.42 + br, -0.09, -0.3);
  g.bezierCurveTo(-0.1, -0.18, -0.12, -0.08, -0.16, -0.02);
  g.closePath();
  g.fill();
  g.beginPath();
  g.arc(hdx, hdy, 0.105, 0, 6.283);
  g.fill();
  g.beginPath();
  g.moveTo(hdx - 0.115, hdy - 0.01);
  g.bezierCurveTo(hdx - 0.12, hdy - 0.16, hdx + 0.08, hdy - 0.17, hdx + 0.1, hdy - 0.03);
  g.closePath();
  g.fill();
  g.beginPath();
  g.arc(hdx - 0.07, hdy - 0.155, 0.035, 0, 6.283);
  g.fill();
  const sw = 0.03 * Math.sin(t * 1.1) + 0.015 * Math.sin(t * 2.3 + 1);
  g.fillStyle = acc;
  g.beginPath();
  g.moveTo(-0.24, -0.52 + br);
  g.quadraticCurveTo(-0.15, -0.56 + br, -0.07, -0.5 + br);
  g.lineTo(-0.08, -0.46 + br);
  g.quadraticCurveTo(-0.16, -0.49 + br, -0.25, -0.46 + br);
  g.quadraticCurveTo(-0.33, -0.44 + sw, -0.36, -0.36 + sw * 1.5);
  g.lineTo(-0.31, -0.36 + sw);
  g.quadraticCurveTo(-0.29, -0.44, -0.24, -0.52 + br);
  g.closePath();
  g.fill();
  leg(0.07, a1, col);
  g.strokeStyle = col;
  g.lineCap = "round";
  g.lineJoin = "round";
  g.lineWidth = 0.075;
  g.beginPath();
  g.moveTo(-0.17, -0.44 + br);
  g.quadraticCurveTo(-0.08, -0.26, hx, hy);
  g.stroke();
  g.save();
  g.translate(hx, hy);
  g.rotate(ang);
  g.fillStyle = "#1d1b24";
  g.fillRect(-0.03, -0.022, 0.14, 0.044);
  g.fillRect(0.1, -0.032, 0.05, 0.064);
  g.restore();
};
g.save();
g.translate(0, 2 * W);
g.scale(1, -1);
g.globalAlpha = 0.2;
S("#0a1020", "#231a24");
g.restore();
g.globalAlpha = 1;
const rx0 = 2.55;
for (let k = 0; k < 3; k++) {
  const p = (t / 7.3 + k / 3) % 1;
  const r = 0.08 + 1.3 * p;
  const near = Math.max(0, 1 - Math.abs(rx0 - tx) / 1.2);
  const al = (1 - p) * (1 - p) * 0.4 * (0.5 + 0.5 * Math.sin(t * 0.13 + k * 2));
  g.strokeStyle =
    "rgba(" +
    Math.round(120 + 120 * near) +
    "," +
    Math.round(140 + 80 * near) +
    "," +
    Math.round(190 - 40 * near) +
    "," +
    al +
    ")";
  g.lineWidth = 0.012;
  g.beginPath();
  g.ellipse(rx0, W, r, r * 0.12, 0, 0, 6.283);
  g.stroke();
}
S("#0d1424", "#6a3b3b");
g.strokeStyle = "rgba(165,185,225,0.28)";
g.lineWidth = 0.012;
g.beginPath();
g.arc(hdx, hdy, 0.1, -1.2, 0.5);
g.stroke();
g.globalCompositeOperation = "lighter";
const d = Math.hypot(tx - lx, W - ly);
const rs = 0.12 + d * 0.16;
g.save();
g.translate(tx, W);
g.scale(1, 0.16);
const sgr = g.createRadialGradient(0, 0, 0, 0, 0, rs * 1.6);
sgr.addColorStop(0, "rgba(255,205,125,0.45)");
sgr.addColorStop(0.5, "rgba(230,170,95,0.15)");
sgr.addColorStop(1, "rgba(200,140,80,0)");
g.fillStyle = sgr;
g.fillRect(-rs * 1.6, -rs * 1.6, rs * 3.2, rs * 3.2);
g.restore();
g.fillStyle = "rgba(255,215,150,0.9)";
for (let i = 0; i < 9; i++) {
  const q = Math.sin(i * 91.3) * 0.5 + 0.5;
  const gx = tx + (q - 0.5) * rs * 2.2 + Math.sin(t * 0.6 + i * 2) * 0.05;
  const gy = W + 0.01 + (Math.sin(i * 37.7) * 0.5 + 0.5) * 0.12;
  const on = Math.max(0, Math.sin(t * (0.7 + q * 0.6) + i * 2.7));
  g.globalAlpha = on * on * 0.5;
  g.fillRect(gx - 0.07, gy, 0.14 * (0.5 + q), 0.008);
}
g.globalAlpha = 1;
const px = -sa,
  py = ca;
g.beginPath();
g.moveTo(lx + px * 0.025, ly + py * 0.025);
g.lineTo(tx + rs, W);
g.lineTo(tx - rs, W);
g.lineTo(lx - px * 0.025, ly - py * 0.025);
g.closePath();
const bg = g.createLinearGradient(lx, ly, tx, W);
bg.addColorStop(0, "rgba(255,220,150,0.30)");
bg.addColorStop(0.6, "rgba(255,205,130,0.10)");
bg.addColorStop(1, "rgba(255,195,120,0.05)");
g.fillStyle = bg;
g.fill();
g.fillStyle = "#ffe3b0";
for (let i = 0; i < 7; i++) {
  const f = (t * 0.03 * (1 + i * 0.17) + i * 0.137) % 1;
  const s = Math.sin(t * 0.4 + i * 3) * 0.5;
  g.globalAlpha = 0.5 * Math.sin(f * 3.14);
  g.beginPath();
  g.arc(lx + (tx - lx) * f + s * rs * f, ly + (W - ly) * f, 0.008, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
const wg = g.createRadialGradient(lx, ly, 0, lx, ly, 0.7);
wg.addColorStop(0, "rgba(255,200,120,0.28)");
wg.addColorStop(1, "rgba(255,180,100,0)");
g.fillStyle = wg;
g.fillRect(lx - 0.7, ly - 0.7, 1.4, 1.4);
g.fillStyle = "#ffd08a";
for (let i = 0; i < 4; i++) {
  g.globalAlpha = Math.max(0, 0.25 + 0.2 * Math.sin(t * 0.9 + i * 1.8));
  g.fillRect(lx - 0.05 + Math.sin(t * 0.5 + i) * 0.03, 2 * W - ly + i * 0.05, 0.1 - i * 0.015, 0.01);
}
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
e.light(lx, ly, 0.6, "#ffd27a", 0.9);
