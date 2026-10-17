g.fillStyle = "#0e1211";
g.fillRect(-200, -100, 400, 200);
for (let i = 0; i < 900; i++) {
  const x = -60 + e.rnd() * 120,
    y = -100 + e.rnd() * 200;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(40,48,40,0.35)" : "rgba(0,0,0,0.3)";
  g.fillRect(x, y, 0.2 + e.rnd() * 0.8, 0.1 + e.rnd() * 0.4);
}
const L = e.state.lamp;
let gr = g.createRadialGradient(5.5, 87, 0, 5.5, 87, 6);
gr.addColorStop(0, "rgba(140,175,150," + 0.3 * L + ")");
gr.addColorStop(1, "rgba(140,175,150,0)");
g.fillStyle = gr;
g.fillRect(-1, 79, 14, 16);
