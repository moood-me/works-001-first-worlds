const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t,
  S = e.state || {};
const w = Math.min(1.3, (S.wind ?? 0.35) + (S.gust || 0));
g.fillStyle = "#0b111d";
g.beginPath();
g.moveTo(-3, 0.12);
g.lineTo(-3, -0.14);
g.bezierCurveTo(-1.9, -0.22, -0.7, -0.12, 0.1, 0.0);
g.bezierCurveTo(0.5, 0.04, 0.9, 0.06, 1.3, 0.08);
g.lineTo(1.3, 0.12);
g.closePath();
g.fill();
g.lineCap = "round";
for (let i = 0; i < 19; i++) {
  const bx = -2.8 + 2.9 * h(i + 1);
  const by = -0.12 + (0.1 * (bx + 2.8)) / 2.9;
  const H = 0.8 + 1.1 * h(i + 2);
  const lean = (h(i + 3) - 0.3) * 0.5;
  const sw =
    (0.4 + 1.5 * w) *
      (0.05 * Math.sin(t * (0.33 + 0.22 * h(i + 4)) + i * 1.9) + 0.022 * Math.sin(t * (0.87 + 0.4 * h(i + 5)) + i)) +
    w * w * 0.02 * Math.sin(t * (3.3 + 1.5 * h(i + 14)) + i * 3.7);
  const tx = bx + lean * H + sw * H,
    ty = by - H;
  const cx = bx + lean * H * 0.3,
    cy = by - H * 0.5;
  g.strokeStyle = h(i + 6) < 0.5 ? "#0b111e" : "#0e1523";
  g.lineWidth = 0.012 + 0.012 * h(i + 7);
  g.beginPath();
  g.moveTo(bx, by);
  g.quadraticCurveTo(cx, cy, tx, ty);
  g.stroke();
  if (h(i + 9) < 0.4) {
    g.strokeStyle = "rgba(135,155,200,0.18)";
    g.lineWidth = 0.005;
    g.beginPath();
    g.moveTo(bx + 0.008, by);
    g.quadraticCurveTo(cx + 0.008, cy, tx + 0.008, ty);
    g.stroke();
  }
  if (h(i + 8) < 0.35) {
    const s = 0.86,
      qx = (1 - s) * (1 - s) * bx + 2 * (1 - s) * s * cx + s * s * tx,
      qy = (1 - s) * (1 - s) * by + 2 * (1 - s) * s * cy + s * s * ty;
    const an = Math.atan2(ty - cy, tx - cx);
    g.fillStyle = "#0a0d16";
    g.beginPath();
    g.ellipse(qx, qy, 0.1, 0.028, an, 0, 6.283);
    g.fill();
  }
  if (h(i + 10) < 0.45) {
    const dir = h(i + 11) < 0.5 ? -1 : 1;
    const lx = bx + dir * (0.35 + 0.3 * h(i + 12)) + sw * 0.6,
      ly = by - H * (0.35 + 0.2 * h(i + 13));
    g.fillStyle = "#0b101c";
    g.beginPath();
    g.moveTo(bx - 0.01, by);
    g.quadraticCurveTo(bx + dir * 0.1, by - H * 0.75, lx, ly);
    g.quadraticCurveTo(bx + dir * 0.14, by - H * 0.6, bx + 0.02, by);
    g.closePath();
    g.fill();
  }
}
