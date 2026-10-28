const W = e.aspect,
  h = 0.6;
const gr = g.createLinearGradient(0, h, 0, 1.25);
gr.addColorStop(0, "#9a9c90");
gr.addColorStop(0.08, "#7d8274");
gr.addColorStop(0.4, "#5c6252");
gr.addColorStop(1, "#3e4238");
g.fillStyle = gr;
g.fillRect(-0.35, h, W + 0.7, 0.7);
for (let i = 0; i < 40; i++) {
  const y = h + Math.pow(e.rnd(), 1.6) * 0.65;
  const x = e.rnd() * (W + 0.7) - 0.35;
  const w = 0.05 + (y - h) * 0.9 * e.rnd();
  g.globalAlpha = 0.08 + e.rnd() * 0.08;
  g.fillStyle = e.rnd() < 0.5 ? "#6e6a4c" : "#4a5244";
  g.beginPath();
  g.ellipse(x, y, w, w * 0.12, 0, 0, 6.2832);
  g.fill();
}
g.globalAlpha = 1;
const fg = g.createLinearGradient(0, h - 0.06, 0, h + 0.05);
fg.addColorStop(0, "rgba(190,194,184,0)");
fg.addColorStop(0.55, "rgba(190,194,184,0.55)");
fg.addColorStop(1, "rgba(190,194,184,0)");
g.fillStyle = fg;
g.fillRect(-0.35, h - 0.06, W + 0.7, 0.11);
