g.fillStyle = "#2f3033";
g.fillRect(-0.95, -0.95, 0.06, 0.5);
g.fillRect(0.89, -0.95, 0.06, 0.5);
g.fillStyle = "#3f5a46";
g.fillRect(-1.1, -0.93, 2.2, 0.09);
g.fillRect(-1.1, -0.76, 2.2, 0.09);
g.fillStyle = "#55565a";
g.fillRect(-1.0, -0.45, 0.14, 0.45);
g.fillRect(0.86, -0.45, 0.14, 0.45);
g.fillStyle = "#3c3e43";
g.fillRect(-1.0, -0.45, 0.05, 0.45);
g.fillRect(0.86, -0.45, 0.05, 0.45);
g.fillStyle = "#456249";
g.fillRect(-1.1, -0.48, 2.2, 0.06);
g.fillStyle = "#33493a";
g.fillRect(-1.1, -0.42, 2.2, 0.04);
g.fillStyle = "rgba(150,125,95,0.55)";
for (let i = 0; i < 16; i++) {
  const y = [-0.92, -0.75, -0.47][Math.floor(e.rnd() * 3)];
  g.fillRect(-1.05 + e.rnd() * 2.1, y + e.rnd() * 0.04, 0.04 + e.rnd() * 0.12, 0.02);
}
