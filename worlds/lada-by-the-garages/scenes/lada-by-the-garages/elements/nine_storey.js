const d = e.state.dusk || 0,
  t = e.t;
g.fillStyle = "#3e3a48";
g.fillRect(-20, -27, 40, 27);
let lg = g.createLinearGradient(-20, 0, 20, 0);
lg.addColorStop(0, "rgba(240,150,100," + 0.3 * (1 - d) + ")");
lg.addColorStop(0.5, "rgba(0,0,0,0)");
lg.addColorStop(1, "rgba(0,0,0,0.2)");
g.fillStyle = lg;
g.fillRect(-20, -27, 40, 27);
g.strokeStyle = "rgba(20,18,26,0.5)";
g.lineWidth = 0.08;
for (let f = 1; f < 9; f++) {
  g.beginPath();
  g.moveTo(-20, -f * 2.9);
  g.lineTo(20, -f * 2.9);
  g.stroke();
}
g.fillStyle = "#2a2732";
g.fillRect(-20.3, -27.6, 40.6, 0.7);
g.fillRect(-3, -29, 4, 1.5);
for (let f = 0; f < 9; f++)
  for (let c = 0; c < 14; c++) {
    const x = -19 + c * 2.75,
      y = -2.3 - f * 2.9;
    const r = e.rnd(),
      tv = e.rnd(),
      ph = e.rnd() * 6;
    if (r < 0.1 + 0.45 * d) {
      if (tv < 0.2) {
        const k = 0.5 + 0.5 * Math.sin(t * (2 + ph) + ph) * Math.sin(t * 0.7 + ph);
        g.fillStyle = "rgba(120,150,230," + (0.45 + 0.35 * k) + ")";
      } else g.fillStyle = tv < 0.6 ? "rgba(250,200,120,0.85)" : "rgba(240,170,100,0.75)";
    } else g.fillStyle = "rgba(30,28,40,0.9)";
    g.fillRect(x, y, 1.3, 1.5);
  }
g.fillStyle = "rgba(10,8,14," + 0.35 * d + ")";
g.fillRect(-20.3, -29, 40.6, 29);
