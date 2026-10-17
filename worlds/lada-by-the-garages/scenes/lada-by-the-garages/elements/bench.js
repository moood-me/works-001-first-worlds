const d = e.state.dusk || 0;
g.fillStyle = "rgba(10,8,12,0.4)";
g.beginPath();
g.ellipse(0, 0.02, 1.05, 0.07, 0, 0, 7);
g.fill();
g.fillStyle = "#6f6a68";
g.fillRect(-0.8, -0.45, 0.14, 0.45);
g.fillRect(0.66, -0.45, 0.14, 0.45);
g.fillStyle = "#5a5554";
g.fillRect(-0.78, -0.92, 0.08, 0.47);
g.fillRect(0.7, -0.92, 0.08, 0.47);
const sl = (y, h) => {
  g.fillStyle = "#4e6a48";
  g.fillRect(-0.95, y, 1.9, h);
  g.fillStyle = "rgba(170,160,130,0.35)";
  for (let i = 0; i < 6; i++) g.fillRect(-0.9 + e.rnd() * 1.7, y + e.rnd() * h * 0.6, 0.05 + e.rnd() * 0.15, h * 0.4);
};
sl(-0.93, 0.09);
sl(-0.77, 0.09);
sl(-0.5, 0.06);
g.fillStyle = "#5f7d58";
g.fillRect(-0.95, -0.54, 1.9, 0.04);
let lg = g.createLinearGradient(-1, 0, 1, 0);
lg.addColorStop(0, "rgba(255,170,110," + 0.2 * (1 - d) + ")");
lg.addColorStop(1, "rgba(0,0,0," + (0.15 + 0.3 * d) + ")");
g.fillStyle = lg;
g.fillRect(-0.95, -0.93, 1.9, 0.93);
for (let i = 0; i < 40; i++) {
  g.fillStyle = e.rnd() < 0.5 ? "rgba(25,24,28,0.9)" : "rgba(120,115,110,0.7)";
  g.fillRect(-0.9 + e.rnd() * 1.8, -0.02 + e.rnd() * 0.08, 0.02, 0.01);
}
