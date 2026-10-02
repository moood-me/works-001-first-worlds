let gr = g.createLinearGradient(0, -150, 0, 150);
gr.addColorStop(0, "#16213a");
gr.addColorStop(0.75, "#111b30");
gr.addColorStop(1, "#0d1628");
g.fillStyle = gr;
g.fillRect(-350, -150, 700, 300);
const mg = g.createRadialGradient(60, -20, 0, 60, -20, 160);
mg.addColorStop(0, "rgba(70,88,128,0.32)");
mg.addColorStop(1, "rgba(70,88,128,0)");
g.fillStyle = mg;
g.fillRect(-350, -150, 700, 300);
g.lineCap = "round";
for (let i = 0; i < 2600; i++) {
  const x = (e.rnd() - 0.5) * 700,
    y = (e.rnd() - 0.5) * 300,
    l = 1 + e.rnd() * 4;
  g.strokeStyle = `rgba(120,140,182,${0.08 + e.rnd() * 0.18})`;
  g.lineWidth = 0.1 + e.rnd() * 0.22;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + l / 2, y - 0.25, x + l, y);
  g.stroke();
}
gr = g.createLinearGradient(0, -150, 0, -110);
gr.addColorStop(0, "rgba(14,23,41,1)");
gr.addColorStop(1, "rgba(14,23,41,0)");
g.globalCompositeOperation = "destination-out";
g.fillStyle = gr;
g.fillRect(-350, -150, 700, 40);
