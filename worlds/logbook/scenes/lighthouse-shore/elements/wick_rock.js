const t = e.t,
  I = 0.3 + 0.7 * (e.state.lamp ?? 0.8),
  a = t * 0.55,
  ab = Math.PI - 0.12;
const bf =
  Math.max(Math.pow(Math.max(0, Math.cos(a - ab)), 14), Math.pow(Math.max(0, Math.cos(a - Math.PI - ab)), 14)) * I;
const blob = (P) => {
  const n = P.length,
    m = (i) => [(P[i % n][0] + P[(i + 1) % n][0]) / 2, (P[i % n][1] + P[(i + 1) % n][1]) / 2];
  g.beginPath();
  const s = m(n - 1);
  g.moveTo(s[0], s[1]);
  for (let i = 0; i < n; i++) {
    const q = m(i);
    g.quadraticCurveTo(P[i][0], P[i][1], q[0], q[1]);
  }
  g.closePath();
};
const P = [
  [-0.72, 0.08],
  [-0.7, -0.4],
  [-0.56, -0.74],
  [-0.3, -0.86],
  [0.05, -0.88],
  [0.36, -0.86],
  [0.56, -0.72],
  [0.68, -0.4],
  [0.74, 0.08],
];
g.fillStyle = "rgba(110,130,170,0.045)";
g.beginPath();
g.ellipse(0.2, 0.08, 0.8, 0.07, 0, 0, 7);
g.fill();
blob(P);
g.save();
g.clip();
g.fillStyle = "rgba(135,150,182,0.6)";
g.fillRect(-1, -1, 2, 1.2);
blob(P.map(([x, y]) => [x - 0.02, y + 0.014]));
const gr = g.createRadialGradient(0.35, -0.7, 0, 0.35, -0.7, 1.3);
gr.addColorStop(0, "#1d2434");
gr.addColorStop(0.45, "#0d1119");
gr.addColorStop(1, "#05070b");
g.fillStyle = gr;
g.fill();
for (let i = 0; i < 26; i++) {
  const x = -0.1 + 0.75 * e.rnd(),
    y = -0.82 + 0.6 * e.rnd();
  g.strokeStyle = `rgba(180,195,225,${0.05 + 0.14 * e.rnd()})`;
  g.lineWidth = 0.009;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + 0.03, y - 0.02, x + 0.07, y + 0.01);
  g.stroke();
}
for (let i = 0; i < 40; i++) {
  g.fillStyle = `rgba(0,0,0,${0.15 + 0.2 * e.rnd()})`;
  g.beginPath();
  g.ellipse(-0.7 + 1.4 * e.rnd(), -0.8 + 0.85 * e.rnd(), 0.02 + 0.05 * e.rnd(), 0.01 + 0.02 * e.rnd(), 0, 0, 7);
  g.fill();
}
const wg = g.createLinearGradient(0, -0.3, 0, 0.08);
wg.addColorStop(0, "rgba(20,26,18,0)");
wg.addColorStop(1, "rgba(24,32,20,0.85)");
g.fillStyle = wg;
g.fillRect(-1, -0.3, 2, 0.4);
if (bf > 0.01) {
  const bw = g.createRadialGradient(-0.3, -0.85, 0, -0.3, -0.85, 1.2);
  bw.addColorStop(0, `rgba(255,215,160,${0.24 * bf})`);
  bw.addColorStop(1, "rgba(255,215,160,0)");
  g.globalCompositeOperation = "lighter";
  g.fillStyle = bw;
  g.fillRect(-1, -1, 2, 1.2);
}
g.restore();
