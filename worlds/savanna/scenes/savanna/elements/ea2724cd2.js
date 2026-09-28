g.scale(0.3, 0.3);
const t = e.t;
g.translate(Math.sin(t * 0.013) * 40, 0);
g.fillStyle = "#c8a676";
for (let i = 0; i < 26; i++) {
  const k = i / 25,
    y = -k * 150;
  const lean = Math.sin(t * 0.2 + k * 2) * 8 * k + k * 20;
  const w = 4 + k * k * 30 + Math.sin(t * 1.5 + k * 9) * 2;
  g.globalAlpha = 0.2 * (1 - k * 0.8);
  g.beginPath();
  g.ellipse(lean, y, w, 6, 0, 0, 6.2832);
  g.fill();
}
g.globalAlpha = 0.2;
g.beginPath();
g.ellipse(0, -3, 30, 6, 0, 0, 6.2832);
g.fill();
g.globalAlpha = 1;
