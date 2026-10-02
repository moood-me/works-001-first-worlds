const A = e.aspect,
  H = 0.56,
  mx = A * 0.78,
  my = 0.17;
const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
for (let i = 0; i < 300; i++) {
  const x = h(i) * A;
  const y = -0.35 + Math.pow(h(i + 500), 1.25) * (H + 0.33);
  const d = Math.hypot(x - mx, y - my);
  if (d < 0.07) continue;
  const b = 0.2 + 0.8 * Math.pow(h(i + 900), 3);
  const tw =
    0.78 + 0.22 * Math.sin(e.t * (0.5 + 1.2 * h(i + 1300)) + i * 2.1) * Math.sin(e.t * (0.17 + 0.4 * h(i + 1700)) + i);
  const f = Math.min(1, Math.max(0, (H - 0.02 - y) / 0.14)) * Math.min(1, d / 0.4);
  const a = b * tw * f;
  if (a < 0.02) continue;
  const r = e.px * (0.5 + 1.4 * h(i + 2100) + (b > 0.75 ? 0.8 : 0));
  const c = h(i + 2500);
  g.fillStyle = c < 0.18 ? "#ffe6c4" : c > 0.82 ? "#cddcff" : "#f1f4ff";
  g.globalAlpha = a;
  g.beginPath();
  g.arc(x, y, r, 0, 6.283);
  g.fill();
  if (b > 0.8) {
    g.globalAlpha = a * 0.18;
    g.beginPath();
    g.arc(x, y, r * 4, 0, 6.283);
    g.fill();
  }
}
g.globalAlpha = 1;
