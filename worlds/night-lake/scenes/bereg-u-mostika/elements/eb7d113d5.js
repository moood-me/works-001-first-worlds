const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t,
  S = e.state || {};
const tremble = Math.min(1, (S.waterTremble ?? 0.25) + (S.gust || 0) * 0.5);
const P = [];
let x = 4.3,
  k = 0;
while (x > -12.4) {
  P.push({
    x: x,
    w: 0.14 + 0.04 * h(k + 1),
    ln: (h(k + 2) - 0.5) * 0.04,
    top: k === 0 || h(k + 3) < 0.16 ? -1.1 - 0.3 * h(k + 4) : -0.7,
    k: k,
    land: x > 3.6,
  });
  x -= 1.7 + 0.6 * h(k + 5);
  k++;
}
g.fillStyle = "#070c19";
for (const p of P) {
  if (p.land) continue;
  for (let s = 0; s < 10; s++) {
    const y = s * 0.07;
    const dx =
      (Math.sin(t * 0.8 + y * 10 + p.k) * 0.02 * (1 + s * 0.35) + Math.sin(t * 0.31 + y * 4 + p.k * 2) * 0.012 * s) *
      (0.5 + 2 * tremble);
    g.globalAlpha = 0.36 * (1 - s / 12);
    g.fillRect(p.x - p.w / 2 + dx, y, p.w, 0.066);
  }
}
for (let s = 0; s < 3; s++) {
  const y = 0.6 + s * 0.07;
  g.globalAlpha = 0.25 - 0.06 * s;
  for (let u = -12.5; u < 3.6; u += 0.5) {
    const dx = Math.sin(t * 0.7 + y * 9 + u * 0.8) * 0.04 * (0.5 + 2 * tremble);
    g.fillRect(u + dx, y, 0.52, 0.066);
  }
}
g.globalAlpha = 1;
g.strokeStyle = "rgba(125,150,200," + (0.15 + 0.25 * tremble) + ")";
g.lineWidth = 0.012;
for (const p of P) {
  if (p.land) continue;
  const w = p.w * (1.5 + 0.4 * Math.sin(t * 0.9 + p.k * 1.7) + 0.8 * tremble);
  g.beginPath();
  g.ellipse(p.x, 0.012, w, w * 0.14, 0, 0, 6.283);
  g.stroke();
}
g.strokeStyle = "#0a101d";
g.lineWidth = 0.05;
for (let j = 0; j < P.length - 1; j++) {
  if (h(j + 60) < 0.45) {
    const a = P[j],
      b = P[j + 1];
    g.beginPath();
    if (h(j + 80) < 0.5) {
      g.moveTo(a.x, -0.62);
      g.lineTo(b.x, -0.1);
    } else {
      g.moveTo(a.x, -0.1);
      g.lineTo(b.x, -0.62);
    }
    g.stroke();
  }
}
g.fillStyle = "#121a2d";
g.fillRect(-12.5, -0.72, 17, 0.13);
g.strokeStyle = "rgba(150,172,215,0.26)";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-12.5, -0.72);
g.lineTo(4.5, -0.72);
g.stroke();
for (const p of P) {
  const tt = -p.top;
  g.fillStyle = "#0b1221";
  g.beginPath();
  g.moveTo(p.x - p.w / 2, 0.02);
  g.lineTo(p.x - p.w / 2 + p.ln * tt, p.top);
  g.lineTo(p.x + p.w / 2 + p.ln * tt, p.top - 0.015);
  g.lineTo(p.x + p.w / 2, 0.02);
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(140,162,205,0.30)";
  g.lineWidth = 0.016;
  g.beginPath();
  g.moveTo(p.x + p.w / 2 - 0.008, 0);
  g.lineTo(p.x + p.w / 2 + p.ln * tt - 0.008, p.top);
  g.stroke();
}
