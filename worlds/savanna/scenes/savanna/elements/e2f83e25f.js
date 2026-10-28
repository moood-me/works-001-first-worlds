for (let i = 0; i < 40; i++) {
  const x = (e.rnd() * 2 - 1) * 1100,
    w = 40 + e.rnd() * 140,
    y = -0.5 - e.rnd() * 5,
    hh = 0.35 + e.rnd() * 0.5;
  const a = 0.05 + 0.05 * Math.sin(e.t * 0.9 + i * 1.7);
  g.globalAlpha = Math.max(0, a);
  g.fillStyle = i % 3 ? "#f4e4c0" : "#d8e0e0";
  g.fillRect(x + Math.sin(e.t * 0.5 + i) * 10, y + Math.sin(e.t * 1.3 + i) * 0.4, w, hh);
}
g.globalAlpha = 0.18;
let gr = g.createLinearGradient(0, -3, 0, 0.5);
gr.addColorStop(0, "rgba(220,228,230,0)");
gr.addColorStop(0.7, "rgba(220,228,230,0.9)");
gr.addColorStop(1, "rgba(220,228,230,0)");
g.fillStyle = gr;
g.fillRect(-1100, -3, 2200, 3.5);
g.globalAlpha = 1;
