const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t,
  S = e.state || {};
const gu = S.gust || 0;
const tremble = Math.min(1, (S.waterTremble ?? 0.25) + gu * 0.5);
const rs = Math.min(1, (S.ropeSway ?? 0.3) + gu * 0.6);
const has = S.boatPresent !== false;
const bob = 0.015 * Math.sin(t * 0.7) + 0.008 * Math.sin(t * 1.9 + 1) + tremble * 0.03 * Math.sin(t * 2.3 + 0.5);
const roll = 0.01 * Math.sin(t * 0.53 + 2) + tremble * 0.025 * Math.sin(t * 1.7) + rs * 0.02 * Math.sin(t * 0.9);
const cx = -1.1 + rs * 0.06 * Math.sin(t * 0.45) + 0.02 * Math.sin(t * 0.21),
  cy = bob;
const cr = Math.cos(roll),
  sr = Math.sin(roll);
const T = (x, y) => [cx + x * cr - y * sr, cy + x * sr + y * cr];
const nG = (x) => {
  const f = x / 1.3,
    p = Math.max(0, f);
  return -0.34 - 0.12 * p * p * p - 0.02 * f * f;
};
const off = (x) => {
  const f = x / 1.3;
  return 0.3 * Math.sqrt(Math.max(0, x < 0 ? 1 - 0.6 * f * f : 1 - f * f));
};
const fG = (x) => nG(x) - off(x);
const side = () => {
  g.beginPath();
  g.moveTo(-1.3, nG(-1.3));
  for (let x = -1.2; x <= 1.3001; x += 0.1) g.lineTo(x, nG(x));
  g.lineTo(1.12, 0.02);
  g.quadraticCurveTo(0, 0.06, -1.24, 0.03);
  g.closePath();
};
const inner = () => {
  g.beginPath();
  g.moveTo(-1.3, nG(-1.3));
  for (let x = -1.2; x <= 1.3001; x += 0.1) g.lineTo(x, nG(x));
  for (let x = 1.3; x >= -1.3001; x -= 0.1) g.lineTo(x, fG(x));
  g.closePath();
};
const line = (f, a, b, st) => {
  g.beginPath();
  g.moveTo(a, f(a));
  for (let x = a + st; x <= b + 0.0001; x += st) g.lineTo(x, f(x));
};
g.lineCap = "round";
g.lineJoin = "round";
if (has) {
  g.save();
  g.scale(1, -1);
  g.translate(cx, cy);
  g.rotate(roll);
  g.globalAlpha = 0.24;
  g.fillStyle = "#0a1020";
  side();
  g.fill();
  g.restore();
  g.strokeStyle = "#0f1a33";
  g.lineWidth = 0.012;
  for (let i = 0; i < 14; i++) {
    const y = 0.03 + i * 0.03;
    const dx = Math.sin(t * 0.9 + i * 1.3) * 0.05 * (1 + 2 * tremble);
    g.globalAlpha = 0.35;
    g.beginPath();
    g.moveTo(cx - 1.4 + dx, y);
    g.lineTo(cx + 1.4 + dx, y);
    g.stroke();
  }
  g.strokeStyle = "#8ea4d0";
  g.lineWidth = 0.01;
  for (let k = 0; k < 2; k++) {
    const p = (t / 6 + k / 2) % 1;
    const r = 1.45 + 0.9 * p;
    g.globalAlpha = (1 - p) * (1 - p) * (0.06 + 0.3 * tremble);
    g.beginPath();
    g.ellipse(cx, 0.02, r, r * 0.1, 0, 0, 6.283);
    g.stroke();
  }
  g.globalAlpha = 1;
  g.save();
  g.translate(cx, cy);
  g.rotate(roll);
  inner();
  g.fillStyle = "#090e1b";
  g.fill();
  g.save();
  inner();
  g.clip();
  g.strokeStyle = "rgba(120,140,185,0.10)";
  g.lineWidth = 0.008;
  for (let j = 1; j < 4; j++) {
    line((x) => nG(x) - off(x) * (0.2 + 0.2 * j) + 0.06, -1.25, 1.1, 0.1);
    g.stroke();
  }
  for (const sx of [-0.85, -0.1, 0.6]) {
    g.fillStyle = "#1c2640";
    g.beginPath();
    g.moveTo(sx, nG(sx) + 0.05);
    g.lineTo(sx + 0.13, nG(sx + 0.13) + 0.05);
    g.lineTo(sx + 0.16, fG(sx + 0.13) + 0.05);
    g.lineTo(sx + 0.03, fG(sx) + 0.05);
    g.closePath();
    g.fill();
    g.strokeStyle = "rgba(160,180,220,0.22)";
    g.lineWidth = 0.008;
    g.beginPath();
    g.moveTo(sx + 0.03, fG(sx) + 0.05);
    g.lineTo(sx, nG(sx) + 0.05);
    g.stroke();
  }
  g.strokeStyle = "#141b2c";
  g.lineWidth = 0.035;
  g.beginPath();
  g.moveTo(-1.05, nG(-1.05) - off(-1.05) * 0.45);
  g.lineTo(0.7, nG(0.7) - off(0.7) * 0.7);
  g.stroke();
  g.fillStyle = "#141b2c";
  g.beginPath();
  g.ellipse(-0.95, nG(-0.95) - off(-0.95) * 0.43, 0.2, 0.05, -0.08, 0, 6.283);
  g.fill();
  g.restore();
  g.strokeStyle = "rgba(165,185,225,0.30)";
  g.lineWidth = 0.012;
  line(fG, -1.3, 1.3, 0.1);
  g.stroke();
  side();
  const hg = g.createLinearGradient(0, -0.45, 0, 0.05);
  hg.addColorStop(0, "#1b2540");
  hg.addColorStop(1, "#0c1222");
  g.fillStyle = hg;
  g.fill();
  g.strokeStyle = "rgba(8,12,22,0.8)";
  g.lineWidth = 0.01;
  for (const d of [0.11, 0.22]) {
    line((x) => nG(x) + d * (1 - 0.3 * Math.max(0, x / 1.3)), -1.27, 1.17, 0.1);
    g.stroke();
  }
  g.strokeStyle = "rgba(175,195,232,0.42)";
  g.lineWidth = 0.018;
  line(nG, -1.3, 1.3, 0.1);
  g.stroke();
  g.strokeStyle = "#0e1526";
  g.lineWidth = 0.04;
  g.beginPath();
  g.moveTo(1.3, nG(1.3));
  g.lineTo(1.12, 0.02);
  g.stroke();
  g.strokeStyle = "#3a4258";
  g.lineWidth = 0.012;
  g.beginPath();
  g.arc(1.24, nG(1.24) + 0.06, 0.025, 0, 6.283);
  g.stroke();
  g.strokeStyle = "rgba(140,162,210," + (0.22 + 0.2 * tremble) + ")";
  g.lineWidth = 0.01;
  line((x) => 0.035 + 0.008 * Math.sin(x * 9 + t * 1.3), -1.24, 1.1, 0.08);
  g.stroke();
  g.restore();
}
g.fillStyle = "#141b2b";
g.beginPath();
g.moveTo(0.95, 0.16);
g.lineTo(0.99, -0.4);
g.lineTo(1.03, -0.43);
g.lineTo(1.06, -0.39);
g.lineTo(1.09, -0.41);
g.lineTo(1.08, 0.16);
g.closePath();
g.fill();
g.strokeStyle = "rgba(160,180,222,0.3)";
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(1.075, 0.12);
g.lineTo(1.085, -0.4);
g.stroke();
g.strokeStyle = "rgba(5,8,15,0.7)";
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(1.0, -0.3);
g.lineTo(1.02, -0.05);
g.stroke();
const K = [1.0, -0.27];
const rope = (a, b, c, d, ex, ey) => {
  g.strokeStyle = "#2b2f38";
  g.lineWidth = 0.022;
  g.beginPath();
  g.moveTo(a, b);
  g.quadraticCurveTo(c, d, ex, ey);
  g.stroke();
  g.strokeStyle = "rgba(170,185,215,0.25)";
  g.lineWidth = 0.007;
  g.beginPath();
  g.moveTo(a, b - 0.007);
  g.quadraticCurveTo(c, d - 0.007, ex, ey - 0.007);
  g.stroke();
};
if (has) {
  const B = T(1.24, nG(1.24) + 0.06);
  const sag = 0.05 + 0.12 * (1 - 0.6 * rs) + 0.03 * Math.sin(t * 0.7) * rs;
  const mx = (B[0] + K[0]) / 2 + rs * 0.05 * Math.sin(t * 1.1 + 0.4) + 0.01 * Math.sin(t * 0.37);
  const my = Math.max(B[1], K[1]) + sag + rs * 0.03 * Math.sin(t * 1.3 + 1);
  rope(B[0], B[1], mx, my, K[0], K[1]);
} else {
  const ex = 0.15 + 0.05 * Math.sin(t * 0.4) + rs * 0.06 * Math.sin(t * 0.9),
    ey = 0.05;
  rope(K[0], K[1], 0.88 + rs * 0.03 * Math.sin(t * 1.1), 0.12, ex, ey);
  const p = (t / 5) % 1;
  g.strokeStyle = "#8ea4d0";
  g.lineWidth = 0.008;
  g.globalAlpha = (1 - p) * (0.1 + 0.25 * tremble);
  g.beginPath();
  g.ellipse(ex, 0.06, 0.05 + 0.3 * p, (0.05 + 0.3 * p) * 0.12, 0, 0, 6.283);
  g.stroke();
  g.globalAlpha = 1;
}
g.strokeStyle = "#2b2f38";
g.lineWidth = 0.018;
for (const yy of [-0.29, -0.24]) {
  g.beginPath();
  g.ellipse(1.03, yy, 0.06, 0.02, 0, 0, 3.14);
  g.stroke();
}
if (S.flashlight && S.aim === "boat") {
  g.globalCompositeOperation = "lighter";
  const fx = cx + 0.2 * Math.sin(t * 0.33) + 0.06 * Math.sin(t * 0.91),
    fy = -0.25;
  const r = 1.1;
  g.save();
  g.translate(fx, fy);
  g.scale(1, 0.45);
  const fg = g.createRadialGradient(0, 0, 0, 0, 0, r);
  fg.addColorStop(0, "rgba(255,205,130,0.26)");
  fg.addColorStop(0.55, "rgba(230,170,100,0.09)");
  fg.addColorStop(1, "rgba(200,140,80,0)");
  g.fillStyle = fg;
  g.fillRect(-r, -r, 2 * r, 2 * r);
  g.restore();
  g.globalCompositeOperation = "source-over";
}
