const cols = ["#6a6c52", "#7b6c4a", "#5c6450", "#857048", "#6f6a4e", "#62684f"];
g.fillStyle = "#565b4a";
g.fillRect(-260, -3, 520, 4);
for (let i = 0; i < 170; i++) {
  const x = -260 + e.rnd() * 520;
  const h = 5 + e.rnd() * 6;
  const r = 2 + e.rnd() * 2.2;
  g.fillStyle = cols[Math.floor(e.rnd() * cols.length)];
  g.globalAlpha = 0.8 + e.rnd() * 0.2;
  g.fillRect(x - 0.15, -h, 0.3, h);
  g.beginPath();
  g.ellipse(x, -h, r, r * 1.15, 0, 0, 6.2832);
  g.fill();
  g.beginPath();
  g.ellipse(x + r * 0.7, -h + r * 0.7, r * 0.8, r * 0.85, 0, 0, 6.2832);
  g.fill();
  g.fillStyle = "rgba(255,250,230,0.06)";
  g.beginPath();
  g.ellipse(x - r * 0.35, -h - r * 0.35, r * 0.55, r * 0.55, 0, 0, 6.2832);
  g.fill();
}
g.globalAlpha = 1;
