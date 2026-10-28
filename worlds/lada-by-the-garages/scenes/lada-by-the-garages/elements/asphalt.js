const d = e.state.dusk || 0;
g.fillStyle = "#302b31";
g.fillRect(-30, -11, 60, 22);
for (let i = 0; i < 60; i++) {
  const x = -30 + e.rnd() * 60,
    y = -11 + e.rnd() * 22,
    r = 0.5 + e.rnd() * 2.5;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(20,18,22,0.35)" : "rgba(72,66,70,0.25)";
  g.beginPath();
  g.ellipse(x, y, r, r * 0.6, e.rnd() * 3, 0, 7);
  g.fill();
}
g.strokeStyle = "rgba(15,13,17,0.7)";
g.lineWidth = 0.04;
for (let i = 0; i < 16; i++) {
  let x = -28 + e.rnd() * 56,
    y = -10 + e.rnd() * 20;
  g.beginPath();
  g.moveTo(x, y);
  for (let k = 0; k < 6; k++) {
    x += (e.rnd() - 0.5) * 1.6;
    y += (e.rnd() - 0.5) * 1.6;
    g.lineTo(x, y);
  }
  g.stroke();
}
let pg = g.createRadialGradient(4, 4, 0, 4, 4, 2.4);
pg.addColorStop(0, "rgba(225,150,120," + (0.55 - 0.4 * d) + ")");
pg.addColorStop(0.75, "rgba(120,90,110,0.35)");
pg.addColorStop(1, "rgba(40,36,44,0)");
g.fillStyle = pg;
g.beginPath();
g.ellipse(4, 4, 2.6, 1.3, 0.15, 0, 7);
g.fill();
g.strokeStyle = "rgba(225,220,205,0.45)";
g.lineWidth = 0.05;
const hx = -6.5,
  hy = 8.5;
const cells = [
  [0, 0],
  [0, 1],
  [-1, 2],
  [1, 2],
  [0, 3],
  [-1, 4],
  [1, 4],
  [0, 5],
];
for (const [c, r] of cells) {
  g.strokeRect(hx + c * 0.32 - 0.32, hy - r * 0.64 - 0.64, 0.64, 0.64);
}
g.font = "0.3px sans-serif";
g.textAlign = "center";
g.fillStyle = "rgba(225,220,205,0.4)";
g.fillText(tr('SKY'), hx, hy - 6 * 0.64 + 0.3);
