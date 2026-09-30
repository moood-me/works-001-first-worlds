const wg = g.createLinearGradient(-5, 0, 5, 0);
wg.addColorStop(0, "#e3d3b8");
wg.addColorStop(1, "#c9b89c");
g.fillStyle = wg;
g.fillRect(-5, -3.9, 10, 3.9);
g.fillStyle = "rgba(110,70,40,.35)";
g.fillRect(-5, -3.9, 10, 0.2);
g.fillRect(-5, -0.25, 10, 0.25);
const rg = g.createLinearGradient(0, -7.5, 0, -3.8);
rg.addColorStop(0, "#687789");
rg.addColorStop(1, "#4a596c");
g.fillStyle = rg;
g.beginPath();
g.moveTo(-5.6, -3.7);
g.lineTo(0.4, -7.3);
g.lineTo(5.6, -3.7);
g.closePath();
g.fill();
for (const x of [-3.4, 0.6, 2.8]) {
  g.fillStyle = "#6b4a30";
  g.fillRect(x - 0.1, -3.0, 1.3, 1.3);
  g.fillStyle = "#86aec4";
  g.fillRect(x, -2.9, 1.1, 1.1);
  g.fillStyle = "#6b4a30";
  g.fillRect(x + 0.51, -2.9, 0.08, 1.1);
  g.fillRect(x, -2.39, 1.1, 0.08);
}
