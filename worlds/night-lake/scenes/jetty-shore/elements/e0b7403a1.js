const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const P = [];
for (let i = 0; i <= 220; i++) {
  const x = -1500 + (3000 * i) / 220;
  let s = 0;
  for (let k = 0; k < 8; k++) {
    const c = -1400 + 1450 * h(k + 1),
      w = 110 + 260 * h(k + 11),
      a = 12 + 30 * h(k + 21);
    const d = (x - c) / w;
    s += a * Math.exp(-d * d);
  }
  s = s / (1 + s / 70);
  const env = x > -150 ? Math.max(0, 1 - (x + 150) / 520) : 1;
  s = (s + 2.2 * (h(i + 40) - 0.5) + 1.3 * Math.sin(x * 0.03)) * env;
  P.push([x, -Math.max(0.5, s)]);
}
const path = (sg) => {
  g.beginPath();
  g.moveTo(-1500, 0);
  for (const p of P) g.lineTo(p[0], p[1] * sg);
  g.lineTo(1500, 0);
  g.closePath();
};
g.globalAlpha = 0.3;
g.fillStyle = "#18233f";
path(-1);
g.fill();
g.globalAlpha = 1;
const gr = g.createLinearGradient(0, -50, 0, 0);
gr.addColorStop(0, "#34446a");
gr.addColorStop(1, "#223053");
g.fillStyle = gr;
path(1);
g.fill();
g.strokeStyle = "rgba(160,180,220,0.22)";
g.lineWidth = e.px * 1.2;
g.beginPath();
for (let i = 1; i < P.length; i++) {
  if (P[i][1] > P[i - 1][1] + 0.05 && P[i][1] < -3) {
    g.moveTo(P[i - 1][0], P[i - 1][1]);
    g.lineTo(P[i][0], P[i][1]);
  }
}
g.stroke();
