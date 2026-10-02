const A = e.aspect,
  H = 0.6,
  m = e.state.moon || 0;
let gr = g.createLinearGradient(0, -0.35, 0, H);
gr.addColorStop(0, "#06080b");
gr.addColorStop(0.55, "#121820");
gr.addColorStop(1, "#2a323b");
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
const mx = A * 0.78,
  my = 0.17;
let rg = g.createRadialGradient(mx, my, 0, mx, my, 0.42);
rg.addColorStop(0, "rgba(175,186,198," + (0.06 + 0.2 * m) + ")");
rg.addColorStop(0.3, "rgba(150,162,176," + (0.03 + 0.08 * m) + ")");
rg.addColorStop(1, "rgba(150,162,176,0)");
g.fillStyle = rg;
g.fillRect(mx - 0.45, my - 0.45, 0.9, 0.9);
let md = g.createRadialGradient(mx, my, 0, mx, my, 0.03);
md.addColorStop(0, "rgba(215,220,226," + (0.1 + 0.6 * m) + ")");
md.addColorStop(0.7, "rgba(200,206,214," + (0.06 + 0.4 * m) + ")");
md.addColorStop(1, "rgba(200,206,214,0)");
g.fillStyle = md;
g.fillRect(mx - 0.04, my - 0.04, 0.08, 0.08);
g.filter = "blur(14px)";
for (let i = 0; i < 14; i++) {
  const r = e.rnd(),
    y = -0.1 + e.rnd() * 0.62,
    w = 0.3 + e.rnd() * 0.7,
    h = 0.03 + e.rnd() * 0.05,
    a = 0.35 + 0.3 * e.rnd();
  const x = ((r * (A + 1.4) + e.t * 0.0015 * (1 + i * 0.13)) % (A + 1.4)) - 0.7;
  g.fillStyle = "rgba(9,12,16," + Math.max(0.08, a - 0.3 * m) + ")";
  g.beginPath();
  g.ellipse(x, y, w, h, 0, 0, 7);
  g.fill();
}
g.filter = "none";
