const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t,
  S = e.state || {};
const w = Math.min(1.3, (S.wind ?? 0.35) + (S.gust || 0));
const top = (x) =>
  (x < -1 ? -0.2 * Math.max(0, (x + 4.5) / 3.5) : -0.2 - 0.03 * Math.sin(x * 1.3)) + 0.02 * Math.sin(x * 5);
g.fillStyle = "#0b1120";
g.beginPath();
g.moveTo(-4.5, 0.8);
g.lineTo(-4.5, 0);
for (let x = -4.5; x <= 5.01; x += 0.25) g.lineTo(x, top(x));
g.lineTo(5, 0.06);
g.lineTo(-4.5, 0.06);
g.closePath();
g.fill();
g.strokeStyle = "rgba(140,160,205,0.18)";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-4.5, top(-4.5));
for (let x = -4.25; x <= 5.01; x += 0.25) g.lineTo(x, top(x));
g.stroke();
const R = (sg, al, onlyWater) => {
  for (let i = 0; i < 30; i++) {
    const q = i + 40;
    const bx = -3.4 + 8.2 * h(q);
    if (onlyWater && bx > -1.8) continue;
    const by = top(bx);
    const H = 0.7 + 0.9 * h(q + 1);
    const lean = (h(q + 2) - 0.6) * 0.45;
    const sw =
      (0.4 + 1.5 * w) *
        (0.045 * Math.sin(t * (0.3 + 0.2 * h(q + 3)) + i * 2.3) + 0.02 * Math.sin(t * (0.8 + 0.3 * h(q + 4)) + i)) +
      w * w * 0.018 * Math.sin(t * (3.1 + 1.7 * h(q + 7)) + i * 4.1);
    const tx = bx + lean * H + sw * H,
      ty = by - H;
    const cx = bx + lean * H * 0.3,
      cy = by - H * 0.5;
    g.globalAlpha = al;
    g.strokeStyle = h(q + 8) < 0.5 ? "#0a101c" : "#0d1422";
    g.lineCap = "round";
    g.lineWidth = 0.014 + 0.01 * h(q + 5);
    g.beginPath();
    g.moveTo(bx, (by + 0.02) * sg);
    g.quadraticCurveTo(cx, cy * sg, tx, ty * sg);
    g.stroke();
    if (h(q + 6) < 0.4) {
      const s = 0.85,
        qx = (1 - s) * (1 - s) * bx + 2 * (1 - s) * s * cx + s * s * tx,
        qy = (1 - s) * (1 - s) * by + 2 * (1 - s) * s * cy + s * s * ty;
      const an = Math.atan2((ty - cy) * sg, tx - cx);
      g.fillStyle = "#0a0d17";
      g.beginPath();
      g.ellipse(qx, qy * sg, 0.09, 0.026, an, 0, 6.283);
      g.fill();
    }
    if (sg > 0 && h(q + 9) < 0.35) {
      g.strokeStyle = "rgba(140,160,205,0.16)";
      g.lineWidth = 0.005;
      g.beginPath();
      g.moveTo(bx + 0.01, by);
      g.quadraticCurveTo(cx + 0.01, cy, tx + 0.01, ty);
      g.stroke();
    }
  }
};
R(-1, 0.2, true);
R(1, 1, false);
g.globalAlpha = 1;
