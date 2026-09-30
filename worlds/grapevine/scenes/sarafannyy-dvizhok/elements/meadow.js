g.fillStyle = "#8dbd5d";
g.fillRect(-1200, -350, 2400, 700);
for (let i = 0; i < 400; i++) {
  g.fillStyle = `rgba(${e.rnd() < 0.5 ? "70,120,40" : "190,220,120"},0.14)`;
  g.beginPath();
  g.ellipse((e.rnd() - 0.5) * 2400, (e.rnd() - 0.5) * 700, 20 + e.rnd() * 60, 10 + e.rnd() * 30, 0, 0, 7);
  g.fill();
}
