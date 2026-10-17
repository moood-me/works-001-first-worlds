const s = e.state,
  d = s.dusk || 0,
  t = e.t;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
const col = mx([44, 42, 56], [18, 18, 30], d);
g.fillStyle = col;
g.strokeStyle = col;
const P = [-62, -38, -14, 10, 34, 58];
for (const x of P) {
  g.fillRect(x - 0.12, -8.6, 0.24, 8.6);
  g.fillRect(x - 1.1, -8.25, 2.2, 0.12);
  g.fillRect(x - 0.75, -7.45, 1.5, 0.1);
}
const sw = Math.sin(t * 0.7) * 0.04 + Math.sin(t * 1.9) * 0.015;
g.lineWidth = 0.03;
for (const [yy, ox] of [
  [-8.25, -1],
  [-8.25, 1],
  [-7.45, -0.7],
  [-7.45, 0.7],
]) {
  g.beginPath();
  g.moveTo(-95, yy + 0.6);
  g.quadraticCurveTo((-95 + P[0]) / 2, yy + 0.9 + sw, P[0] + ox, yy);
  for (let i = 0; i < P.length - 1; i++) {
    const a = P[i] + ox,
      b = P[i + 1] + ox;
    g.quadraticCurveTo((a + b) / 2, yy + 1.1 + sw, b, yy);
  }
  g.quadraticCurveTo((P[P.length - 1] + 95) / 2, yy + 0.9 + sw, 95, yy + 0.6);
  g.stroke();
}
const wy = (x, yy, ox) => {
  for (let i = 0; i < P.length - 1; i++) {
    const a = P[i] + ox,
      b = P[i + 1] + ox;
    if (x >= a && x <= b) {
      const u = (x - a) / (b - a);
      return yy + 2 * u * (1 - u) * (1.1 + sw);
    }
  }
  return yy;
};
for (const [cx, o] of [
  [2.2, 0],
  [3.0, 1],
]) {
  const y = wy(cx, -8.25, -1);
  const lean = Math.sin(t * 0.3 + o * 2) * 0.03;
  g.beginPath();
  g.ellipse(cx, y - 0.17, 0.12, 0.16, lean, 0, 7);
  g.fill();
  g.beginPath();
  g.arc(cx + (o ? -0.08 : 0.08), y - 0.36, 0.075, 0, 7);
  g.fill();
  g.beginPath();
  g.moveTo(cx - 0.04, y - 0.08);
  g.lineTo(cx + (o ? 0.28 : -0.28), y + 0.06);
  g.lineTo(cx + (o ? 0.24 : -0.24), y - 0.1);
  g.fill();
  g.beginPath();
  g.moveTo(cx + (o ? -0.15 : 0.15), y - 0.37);
  g.lineTo(cx + (o ? -0.24 : 0.24), y - 0.35);
  g.lineTo(cx + (o ? -0.15 : 0.15), y - 0.33);
  g.fill();
}
g.lineWidth = 0.09;
g.beginPath();
g.moveTo(10, -6.6);
g.quadraticCurveTo(10.3, -6.9, 11, -6.75);
g.stroke();
g.fillRect(10.75, -6.85, 0.45, 0.14);
if (s.lamp) {
  const f = 0.93 + 0.05 * Math.sin(t * 3.3) * Math.sin(t * 0.7);
  g.fillStyle = "rgba(255,240,200,0.95)";
  g.fillRect(10.8, -6.72, 0.35, 0.05);
  e.light(10.97, -6.62, 7, "#ffe6b0", 0.75 * f * Math.min(1, (d - 0.3) * 2));
}
