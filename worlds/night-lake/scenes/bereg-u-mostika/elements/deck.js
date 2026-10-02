const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
g.lineWidth = 0.01;
let x = 4.5;
for (let i = 0; x > -12; i++) {
  const w = 0.13 + 0.02 * h(i + 1);
  x -= w + 0.015;
  if (h(i + 2) < 0.04) continue;
  const v = h(i + 3);
  const sk = (h(i + 4) - 0.5) * 0.04;
  const y0 = -0.7 + 0.03 * h(i + 5),
    y1 = 0.7 - 0.03 * h(i + 6);
  g.fillStyle =
    "rgb(" + (30 + Math.round(v * 10)) + "," + (39 + Math.round(v * 11)) + "," + (58 + Math.round(v * 14)) + ")";
  g.beginPath();
  g.moveTo(x, y0);
  g.lineTo(x + w, y0 + sk);
  g.lineTo(x + w, y1 + sk);
  g.lineTo(x, y1);
  g.closePath();
  g.fill();
  if (h(i + 7) < 0.5) {
    g.strokeStyle = "rgba(150,172,215,0.12)";
    g.beginPath();
    g.moveTo(x + w * 0.3, y0 + 0.1);
    g.lineTo(x + w * 0.3, y1 - 0.2 * h(i + 8));
    g.stroke();
  }
  g.fillStyle = "rgba(8,12,22,0.6)";
  g.fillRect(x + w * 0.45, y0 + 0.12, 0.02, 0.02);
  g.fillRect(x + w * 0.45, y1 - 0.14, 0.02, 0.02);
}
const sg = g.createLinearGradient(-12, 0, 4.5, 0);
sg.addColorStop(0, "rgba(140,160,205,0)");
sg.addColorStop(1, "rgba(140,160,205,0.10)");
g.fillStyle = sg;
g.fillRect(-12, -0.7, 16.5, 1.4);
