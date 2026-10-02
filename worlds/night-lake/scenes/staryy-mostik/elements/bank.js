const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t;
const pr = (u, D) => [((u + 0.46 * (D - 7)) * 7) / D, 2.6 * (7 / D - 1)];
const SL = [
  [-30, 80],
  [-6, 45],
  [-3, 30],
  [-1.2, 16],
  [-0.2, 11],
  [0.4, 8.5],
  [0.55, 7.4],
  [0.5, 6.8],
  [0.2, 6],
  [-0.8, 4.8],
  [-2.2, 3.8],
  [-4, 3],
  [-7, 2.4],
];
const P = SL.map((p) => pr(p[0], p[1]));
const n = P.length;
const curve = () => {
  g.moveTo(P[0][0], P[0][1]);
  for (let i = 1; i < n - 1; i++) {
    g.quadraticCurveTo(P[i][0], P[i][1], (P[i][0] + P[i + 1][0]) / 2, (P[i][1] + P[i + 1][1]) / 2);
  }
  g.lineTo(P[n - 1][0], P[n - 1][1]);
};
const sU = (D) => {
  for (let j = 0; j < n - 1; j++) {
    const a = SL[j],
      b = SL[j + 1];
    if (D <= a[1] && D >= b[1]) return a[0] + ((b[0] - a[0]) * (a[1] - D)) / (a[1] - b[1]);
  }
  return -7;
};
g.save();
g.translate(0.15, 0.06);
g.globalAlpha = 0.5;
g.strokeStyle = "#040811";
g.lineWidth = 0.35;
g.beginPath();
curve();
g.stroke();
g.restore();
g.globalAlpha = 1;
const lg = g.createLinearGradient(0, -2.45, 0, 5);
lg.addColorStop(0, "#141d31");
lg.addColorStop(0.3, "#0e1626");
lg.addColorStop(1, "#080d18");
g.fillStyle = lg;
g.beginPath();
curve();
g.lineTo(-40, 5.4);
g.lineTo(-40, -2.45);
g.lineTo(P[0][0], -2.45);
g.closePath();
g.fill();
for (let i = 0; i < 110; i++) {
  const D = 2.6 + 22 * Math.pow(h(i + 300), 1.5);
  const u = sU(D) - 0.4 - 9 * h(i + 310);
  const p = pr(u, D),
    k = 7 / D;
  const rx = (0.25 + 0.7 * h(i + 320)) * k;
  g.globalAlpha = 0.35;
  g.fillStyle = h(i + 330) < 0.5 ? "#1a2338" : "#070b15";
  g.beginPath();
  g.ellipse(p[0], p[1], rx, (rx * 2.6) / D, 0, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
g.strokeStyle = "#1b2539";
g.lineWidth = 0.12;
g.beginPath();
curve();
g.stroke();
g.save();
g.translate(0.035, 0.012);
g.setLineDash([0.4, 0.2, 0.1, 0.3, 0.6, 0.25]);
g.lineDashOffset = -t * 0.03;
g.strokeStyle = "rgba(160,182,225,0.32)";
g.lineWidth = 0.018;
g.beginPath();
curve();
g.stroke();
g.restore();
g.setLineDash([]);
const PD = [
  [-0.7, 6.3],
  [-1.7, 5.2],
];
for (let j = 0; j < 2; j++) {
  const p = pr(PD[j][0], PD[j][1]),
    k = 7 / PD[j][1],
    f = 2.6 / PD[j][1];
  g.fillStyle = "#0a1426";
  g.beginPath();
  g.ellipse(p[0], p[1], 0.35 * k, 0.35 * k * f, 0, 0, 6.283);
  g.fill();
  g.fillStyle = "rgba(170,190,230," + (0.12 + 0.08 * Math.sin(t * 0.5 + j * 2)) + ")";
  g.beginPath();
  g.ellipse(p[0] + 0.08 * k, p[1] - 0.02 * k * f, 0.12 * k, 0.03 * k * f, 0, 0, 6.283);
  g.fill();
}
