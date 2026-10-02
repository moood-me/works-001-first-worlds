const P = 1 - Math.max(0, Math.min(1, e.state.petals ?? 1));
let gr = g.createLinearGradient(0, -5.5, 0, 5.5);
gr.addColorStop(0, "#c99282");
gr.addColorStop(0.35, "#9a7480");
gr.addColorStop(1, "#4e3c4c");
g.fillStyle = gr;
g.fillRect(-20, -5.5, 40, 11);
for (let i = 0; i < 30; i++) {
  const x = -20 + e.rnd() * 40,
    y = -5.5 + e.rnd() * 11,
    r = 0.4 + e.rnd() * 1.4;
  const c = g.createRadialGradient(x, y, 0, x, y, r);
  c.addColorStop(0, "rgba(50,30,48,0.18)");
  c.addColorStop(1, "rgba(50,30,48,0)");
  g.fillStyle = c;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
g.strokeStyle = "rgba(50,34,48,0.35)";
g.lineWidth = 0.03;
for (let x = -20; x <= 20; x += 1.2) {
  g.beginPath();
  g.moveTo(x, -5.5);
  g.lineTo(x, 5.5);
  g.stroke();
}
for (let y = -5.5; y <= 5.5; y += 1.2) {
  g.beginPath();
  g.moveTo(-20, y);
  g.lineTo(20, y);
  g.stroke();
}
g.save();
g.translate(-0.4, -2.2);
g.scale(1, 0.45);
const pg = g.createRadialGradient(0, 0, 0, 0, 0, 1.5);
pg.addColorStop(0, "rgba(255,220,176,0.6)");
pg.addColorStop(0.7, "rgba(240,160,130,0.3)");
pg.addColorStop(1, "rgba(240,160,130,0)");
g.fillStyle = pg;
g.beginPath();
g.arc(0, 0, 1.5, 0, 7);
g.fill();
g.restore();
for (let i = 0; i < 120; i++) {
  const x = -9 + e.rnd() * 20,
    y = -5 + e.rnd() * 9,
    a = e.rnd() * 6,
    v = e.rnd();
  if (v < P * 0.9 + 0.05) {
    g.fillStyle = v < 0.5 ? "#f0b4c4" : "#d898ac";
    g.save();
    g.translate(x, y);
    g.rotate(a);
    g.beginPath();
    g.ellipse(0, 0, 0.05, 0.03, 0, 0, 7);
    g.fill();
    g.restore();
  }
}
