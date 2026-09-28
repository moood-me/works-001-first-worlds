let s = 29;
const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
const P = [
  [-14, -2.6],
  [-8, -1.6],
  [-4.5, -0.8],
  [-2.6, -0.35],
  [-1.2, -0.1],
  [0, 0],
  [1.0, 0.03],
  [1.8, 0.13],
  [2.8, 0.2],
  [5, 0.24],
  [14, 0.26],
];
const ey = (x) => {
  for (let i = 0; i < P.length - 1; i++)
    if (x <= P[i + 1][0]) {
      const u = (x - P[i][0]) / (P[i + 1][0] - P[i][0]);
      return P[i][1] + (P[i + 1][1] - P[i][1]) * u;
    }
  return 0.26;
};
const edge = (c) => {
  g.beginPath();
  if (c) {
    g.moveTo(-14, 4);
    g.lineTo(P[0][0], P[0][1]);
  } else g.moveTo(P[0][0], P[0][1]);
  for (let i = 1; i < P.length - 1; i++) {
    const mx = (P[i][0] + P[i + 1][0]) / 2,
      my = (P[i][1] + P[i + 1][1]) / 2;
    g.quadraticCurveTo(P[i][0], P[i][1], mx, my);
  }
  g.lineTo(P[P.length - 1][0], P[P.length - 1][1]);
  if (c) {
    g.lineTo(14, 4);
    g.closePath();
  }
};
edge(true);
const gr = g.createLinearGradient(0, -1.2, 0, 1.2);
gr.addColorStop(0, "#171c26");
gr.addColorStop(0.5, "#10141c");
gr.addColorStop(1, "#07090d");
g.fillStyle = gr;
g.fill();
g.save();
g.clip();
const w = g.createRadialGradient(0.45, 0.05, 0, 0.45, 0.05, 1.6);
w.addColorStop(0, "rgba(255,165,95,0.16)");
w.addColorStop(1, "rgba(255,165,95,0)");
g.fillStyle = w;
g.fillRect(-2, -1.6, 5, 3.4);
for (let i = 0; i < 60; i++) {
  const x = -6 + R() * 14,
    y = ey(x) + 0.03 + Math.pow(R(), 2) * 0.9,
    r = 0.015 + R() * 0.05,
    warm = Math.max(0, 1 - Math.hypot(x - 0.4, y) / 1.4);
  g.fillStyle = "#1b202a";
  g.beginPath();
  g.ellipse(x, y, r, r * 0.55, (R() - 0.5) * 0.4, 0, 6.283);
  g.fill();
  g.strokeStyle = warm > 0.05 ? "rgba(255,170,100," + 0.3 * warm + ")" : "rgba(150,160,185,0.1)";
  g.lineWidth = e.px;
  g.beginPath();
  g.ellipse(x, y, r, r * 0.55, 0, 3.5, 5.9);
  g.stroke();
}
g.restore();
edge(false);
g.strokeStyle = "rgba(150,165,195,0.1)";
g.lineWidth = e.px * 1.2;
g.stroke();
