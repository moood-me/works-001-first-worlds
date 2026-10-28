g.fillStyle = "#16191b";
g.fillRect(-3.5, -80, 7, 160);
for (let i = 0; i < 500; i++) {
  g.fillStyle = e.rnd() < 0.5 ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.14)";
  g.fillRect(-3.5 + e.rnd() * 7, -80 + e.rnd() * 160, 0.05 + e.rnd() * 0.4, 0.05 + e.rnd() * 0.3);
}
g.fillStyle = "rgba(170,175,165,0.2)";
g.fillRect(-3.3, -80, 0.12, 160);
g.fillRect(3.18, -80, 0.12, 160);
for (let y = -80; y < 80; y += 6) {
  g.fillStyle = "rgba(180,180,160," + (0.12 + e.rnd() * 0.1) + ")";
  g.fillRect(-0.06, y, 0.12, 3);
}
for (let i = 0; i < 7; i++) {
  const x = -3 + e.rnd() * 6,
    y = 40 + e.rnd() * 38;
  g.fillStyle = "rgba(8,10,11,0.45)";
  g.beginPath();
  g.ellipse(x, y, 0.6 + e.rnd() * 1.2, 0.3 + e.rnd() * 0.5, 0, 0, 7);
  g.fill();
}
const L = e.state.lamp;
let gr = g.createRadialGradient(6.5, 67, 0, 6.5, 67, 9);
gr.addColorStop(0, "rgba(150,185,165," + 0.3 * L + ")");
gr.addColorStop(1, "rgba(150,185,165,0)");
g.fillStyle = gr;
g.fillRect(-3.5, 55, 7, 25);
g.fillStyle = "rgba(150,185,165," + 0.08 * L + ")";
g.fillRect(2.4, 58, 1.1, 10);
