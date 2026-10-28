const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t,
  L = -24;
const dy = (u) => -0.7 + 0.018 * Math.sin(u * 0.9 + 1) + 0.01 * Math.sin(u * 2.3);
const P = [];
let x = 0.02,
  k = 0;
while (x > L) {
  P.push({
    x: x - 0.08,
    w: 0.12 + 0.05 * h(k + 1),
    ln: (h(k + 2) - 0.5) * 0.05,
    top: h(k + 3) < 0.14 ? -1.05 - 0.35 * h(k + 4) : -0.74,
    k: k,
  });
  x -= 1.8 + 0.8 * h(k + 5);
  k++;
}
g.fillStyle = "#070c19";
for (const p of P) {
  const n = Math.ceil(-p.top / 0.07);
  for (let s = 0; s < n; s++) {
    const y = s * 0.07;
    const dx =
      Math.sin(t * 0.8 + y * 10 + p.k) * 0.02 * (1 + s * 0.35) + Math.sin(t * 0.31 + y * 4 + p.k * 2) * 0.012 * s;
    g.globalAlpha = 0.34 * (1 - s / (n + 2));
    g.fillRect(p.x - p.w / 2 + dx - p.ln * y, y, p.w, 0.066);
  }
}
for (let u = L; u < 0.12; u += 0.5) {
  for (let s = 0; s < 3; s++) {
    const y = 0.54 + s * 0.06;
    const dx = Math.sin(t * 0.7 + y * 9 + u * 0.8) * 0.04;
    g.globalAlpha = 0.28 - s * 0.04;
    g.fillRect(u + dx, y, 0.52, 0.058);
  }
}
g.globalAlpha = 1;
g.strokeStyle = "rgba(125,150,200,0.28)";
g.lineWidth = 0.012;
for (const p of P) {
  const w = p.w * (1.5 + 0.4 * Math.sin(t * 0.9 + p.k * 1.7));
  g.beginPath();
  g.ellipse(p.x, 0.012, w, w * 0.12, 0, 0, 6.283);
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
      g.moveTo(a.x, -0.6);
      g.lineTo(b.x, -0.1);
    } else {
      g.moveTo(a.x, -0.1);
      g.lineTo(b.x, -0.6);
    }
    g.stroke();
  }
}
g.beginPath();
g.moveTo(L, dy(L) - 0.1);
for (let u = L; u < 0.12; u += 0.5) g.lineTo(u, dy(u) - 0.1);
g.lineTo(0.12, dy(0.12) - 0.1);
g.lineTo(0.12, dy(0.12) + 0.15);
for (let u = 0.12; u > L; u -= 0.5) g.lineTo(u, dy(u) + 0.15);
g.lineTo(L, dy(L) + 0.15);
g.closePath();
g.fillStyle = "#0e1628";
g.fill();
g.beginPath();
g.moveTo(L, dy(L) - 0.1);
for (let u = L; u < 0.12; u += 0.5) g.lineTo(u, dy(u) - 0.1);
g.lineTo(0.12, dy(0.12) - 0.1);
g.lineTo(0.12, dy(0.12));
for (let u = 0.12; u > L; u -= 0.5) g.lineTo(u, dy(u));
g.lineTo(L, dy(L));
g.closePath();
g.fillStyle = "#28344e";
g.fill();
g.strokeStyle = "#131c30";
g.lineWidth = 0.012;
g.beginPath();
let pu = 0.1,
  q = 0;
while (pu > L) {
  g.moveTo(pu, dy(pu) - 0.1);
  g.lineTo(pu, dy(pu));
  pu -= 0.15 + 0.06 * h(q + 200);
  q++;
}
g.stroke();
g.strokeStyle = "rgba(150,172,215,0.28)";
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(L, dy(L));
for (let u = L; u < 0.12; u += 0.5) g.lineTo(u, dy(u));
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
