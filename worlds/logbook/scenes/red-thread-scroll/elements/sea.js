let gr = g.createLinearGradient(0, -150, 0, 150);
gr.addColorStop(0, "#0e1729");
gr.addColorStop(1, "#070c18");
g.fillStyle = gr;
g.fillRect(-350, -150, 700, 300);
g.lineCap = "round";
for (let i = 0; i < 1500; i++) {
  const x = (e.rnd() - 0.5) * 700,
    y = (e.rnd() - 0.5) * 300,
    l = 1.5 + e.rnd() * 5;
  g.strokeStyle = `rgba(110,130,170,${0.06 + e.rnd() * 0.14})`;
  g.lineWidth = 0.18 + e.rnd() * 0.3;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + l / 2, y - 0.3, x + l, y);
  g.stroke();
}
gr = g.createLinearGradient(0, -150, 0, -110);
gr.addColorStop(0, "rgba(14,23,41,1)");
gr.addColorStop(1, "rgba(14,23,41,0)");
g.globalCompositeOperation = "destination-out";
g.fillStyle = gr;
g.fillRect(-350, -150, 700, 40);
