g.fillStyle = "#16161c";
g.fillRect(-27, -22 - e.rnd() * 8, 22.5, 30.4);
g.fillRect(4.5, -18 - e.rnd() * 9, 22.5, 27.4);
for (let i = 0; i < 40; i++) {
  const L = e.rnd() < 0.5;
  const x = L ? -26 + e.rnd() * 20 : 5.5 + e.rnd() * 20;
  const y = -17 + e.rnd() * 13;
  const lit = e.rnd() < 0.06;
  g.fillStyle = lit ? "rgba(215,160,90,0.5)" : "rgba(8,9,12,0.6)";
  g.fillRect(x, y, 0.9, 1.4);
}
g.strokeStyle = "#0e0e12";
g.lineWidth = 0.2;
g.beginPath();
g.moveTo(-3.6, 0);
g.lineTo(-3.6, -5);
g.quadraticCurveTo(-3.6, -5.4, -3.1, -5.3);
g.stroke();
e.light(-3, -5.1, 5, "#e0a060", 0.5);
