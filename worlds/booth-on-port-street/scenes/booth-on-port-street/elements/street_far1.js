g.fillStyle = "#15151b";
g.fillRect(-27, -24 - e.rnd() * 5, 22.5, 24.4);
g.fillRect(4.5, -21 - e.rnd() * 7, 22.5, 21.4);
for (let i = 0; i < 40; i++) {
  const L = e.rnd() < 0.5;
  const x = L ? -26 + e.rnd() * 20 : 5.5 + e.rnd() * 20;
  const y = -19 + e.rnd() * 15;
  const lit = e.rnd() < 0.07;
  g.fillStyle = lit ? "rgba(215,160,90,0.55)" : "rgba(8,9,12,0.7)";
  g.fillRect(x, y, 0.9, 1.4);
}
g.strokeStyle = "#0e0e12";
g.lineWidth = 0.18;
g.beginPath();
g.moveTo(-3.6, 0);
g.lineTo(-3.6, -5);
g.quadraticCurveTo(-3.6, -5.4, -3.1, -5.3);
g.stroke();
e.light(-3, -5.1, 5, "#e0a060", 0.55);
