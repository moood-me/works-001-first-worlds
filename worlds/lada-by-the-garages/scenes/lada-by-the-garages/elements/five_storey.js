const d = e.state.dusk || 0;
g.fillStyle = "#5a4245";
g.fillRect(-14, -14.4, 28, 14.4);
g.strokeStyle = "rgba(30,18,20,0.25)";
g.lineWidth = 0.03;
for (let y = -14.2; y < 0; y += 0.35) {
  g.beginPath();
  g.moveTo(-14, y);
  g.lineTo(14, y);
  g.stroke();
}
g.fillStyle = "#3a2b2f";
g.fillRect(-14.3, -14.9, 28.6, 0.6);
for (let f = 0; f < 5; f++)
  for (let c = 0; c < 8; c++) {
    const x = -12.8 + c * 3.4,
      y = -2.2 - f * 2.8;
    if (f === 1 && c === 5) continue;
    const r = e.rnd(),
      k = e.rnd();
    g.fillStyle = "#cfc6be";
    g.fillRect(x - 0.08, y - 0.08, 1.46, 1.76);
    g.fillStyle =
      r < 0.12 + 0.5 * d ? (k < 0.25 ? "rgba(130,160,230,0.85)" : "rgba(250,196,120,0.9)") : "rgba(40,40,52,0.95)";
    g.fillRect(x, y, 1.3, 1.6);
    g.fillStyle = "#cfc6be";
    g.fillRect(x + 0.62, y, 0.06, 1.6);
  }
g.fillStyle = "#3a3238";
g.fillRect(-0.6, -2.1, 1.2, 2.1);
g.fillStyle = "#2a2328";
g.fillRect(-0.9, -2.4, 1.8, 0.25);
e.light(0, -2.25, 1.4, "#ffd290", 0.5);
let lg = g.createLinearGradient(-14, 0, 14, 0);
lg.addColorStop(0, "rgba(255,160,100," + 0.3 * (1 - d) + ")");
lg.addColorStop(1, "rgba(0,0,0," + (0.15 + 0.25 * d) + ")");
g.fillStyle = lg;
g.fillRect(-14.3, -14.9, 28.6, 14.9);
g.fillStyle = "rgba(10,8,14," + 0.3 * d + ")";
g.fillRect(-14.3, -14.9, 28.6, 14.9);
