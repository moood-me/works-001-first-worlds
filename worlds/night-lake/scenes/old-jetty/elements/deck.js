const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const E = Math.max(0, Math.min(1, e.state.playerAtJettyEdge ?? 0)),
  t = e.t;
const yE = -2.5 + 4 * E;
g.fillStyle = "#050913";
g.fillRect(-0.74, yE + 0.05, 0.13, 4 - yE);
g.fillRect(0.6, yE + 0.05, 0.13, 4 - yE);
let y = 4.1,
  i = 0;
while (y - 0.1 > yE) {
  const w = 0.15 + 0.05 * h(i + 1),
    gap = 0.022 + 0.03 * h(i + 2);
  const y0 = Math.max(yE, y - w);
  if (h(i + 3) < 0.05 && y0 > yE + 0.6 && y < 3.6) {
    y -= w + gap;
    i++;
    continue;
  }
  const L = -0.9 - 0.06 * h(i + 4) + (h(i + 5) < 0.12 ? 0.28 * h(i + 15) : 0),
    R = 0.9 + 0.06 * h(i + 6) - (h(i + 7) < 0.1 ? 0.32 * h(i + 17) : 0);
  const sk = (h(i + 8) - 0.5) * 0.03;
  const v = h(i + 9);
  g.fillStyle = "rgb(" + Math.round(28 + v * 12) + "," + Math.round(36 + v * 12) + "," + Math.round(54 + v * 15) + ")";
  g.beginPath();
  g.moveTo(L, y0 + sk);
  g.lineTo(R, y0 - sk);
  g.lineTo(R + 0.01, y - sk);
  g.lineTo(L - 0.01, y + sk);
  g.closePath();
  g.fill();
  const sh = g.createLinearGradient(L, 0, R, 0);
  sh.addColorStop(0, "rgba(140,160,205,0)");
  sh.addColorStop(1, "rgba(150,170,215," + (0.08 + 0.08 * h(i + 10)) + ")");
  g.fillStyle = sh;
  g.fill();
  g.strokeStyle = "rgba(8,12,24,0.5)";
  g.lineWidth = 0.006;
  g.beginPath();
  for (let q = 0; q < 3; q++) {
    const yy = y0 + (y - y0) * (0.25 + 0.5 * h(i * 5 + q + 20));
    const xa = L + (R - L) * h(i * 5 + q + 30) * 0.5;
    g.moveTo(xa, yy);
    g.lineTo(xa + 0.4 + 0.8 * h(i * 5 + q + 40), yy + (h(i * 5 + q + 50) - 0.5) * 0.02);
  }
  g.stroke();
  g.fillStyle = "rgba(6,10,20,0.6)";
  g.fillRect(L, y - 0.012, R - L, 0.012);
  g.strokeStyle = "rgba(150,172,215,0.22)";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(L, y0 + sk + 0.004);
  g.lineTo(R, y0 - sk + 0.004);
  g.stroke();
  for (const nx of [-0.67, 0.67]) {
    const gl = 0.25 + 0.25 * Math.max(0, Math.sin(t * 0.4 + i * 1.3 + nx));
    g.fillStyle = "rgba(185,200,230," + gl + ")";
    g.beginPath();
    g.arc(nx, (y0 + y) / 2, 0.012, 0, 6.283);
    g.fill();
  }
  y -= w + gap;
  i++;
}
for (const px of [-0.8, 0.8]) {
  g.fillStyle = "#0a0f1c";
  g.beginPath();
  g.arc(px, yE - 0.06, 0.13, 0, 6.283);
  g.fill();
  g.strokeStyle = "rgba(150,172,215,0.25)";
  g.lineWidth = 0.012;
  g.beginPath();
  g.arc(px, yE - 0.06, 0.12, -1.6, 0.6);
  g.stroke();
  g.strokeStyle = "rgba(30,40,62,0.8)";
  g.lineWidth = 0.006;
  g.beginPath();
  g.arc(px, yE - 0.06, 0.06, 0, 6.283);
  g.stroke();
}
