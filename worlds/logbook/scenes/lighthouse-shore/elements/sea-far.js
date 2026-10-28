let gr = g.createLinearGradient(0, -2300, 0, 2300);
gr.addColorStop(0, "#1d2740");
gr.addColorStop(0.5, "#111a2d");
gr.addColorStop(1, "#0a1120");
g.fillStyle = gr;
g.fillRect(-6000, -2300, 12000, 4600);
g.lineCap = "round";
for (let i = 0; i < 2600; i++) {
  const x = (e.rnd() - 0.5) * 12000,
    y = (e.rnd() - 0.5) * 4600,
    l = 20 + e.rnd() * 60;
  g.strokeStyle = `rgba(110,130,170,${0.05 + e.rnd() * 0.1})`;
  g.lineWidth = 3 + e.rnd() * 5;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + l, y);
  g.stroke();
}
