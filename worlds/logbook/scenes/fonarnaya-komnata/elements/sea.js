let gr = g.createLinearGradient(0, -300, 0, 300);
gr.addColorStop(0, "#0e1729");
gr.addColorStop(1, "#070c18");
g.fillStyle = gr;
g.fillRect(-700, -300, 1400, 600);
g.lineCap = "round";
for (let i = 0; i < 1800; i++) {
  const x = (e.rnd() - 0.5) * 1400,
    y = (e.rnd() - 0.5) * 600,
    l = 3 + e.rnd() * 10;
  g.strokeStyle = `rgba(110,130,170,${0.05 + e.rnd() * 0.12})`;
  g.lineWidth = 0.4 + e.rnd() * 0.7;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + l / 2, y - 0.6, x + l, y);
  g.stroke();
}
gr = g.createLinearGradient(0, -300, 0, -220);
gr.addColorStop(0, "rgba(14,23,41,1)");
gr.addColorStop(1, "rgba(14,23,41,0)");
g.globalCompositeOperation = "destination-out";
g.fillStyle = gr;
g.fillRect(-700, -300, 1400, 80);
