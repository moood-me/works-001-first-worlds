const A = e.aspect;
let gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#05080a");
gr.addColorStop(0.42, "#111819");
gr.addColorStop(0.47, "#222b2a");
gr.addColorStop(0.55, "#0e1312");
gr.addColorStop(1, "#080b0b");
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
const mx = A * 0.74,
  my = 0.13;
let rg = g.createRadialGradient(mx, my, 0, mx, my, 0.4);
rg.addColorStop(0, "rgba(140,158,152,0.16)");
rg.addColorStop(1, "rgba(140,158,152,0)");
g.fillStyle = rg;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
const W = A + 0.6;
for (let i = 0; i < 10; i++) {
  const y = -0.25 + i * 0.065 + e.rnd() * 0.03;
  const sp = 0.002 + e.rnd() * 0.003;
  const x0 = e.rnd() * W;
  const off = ((x0 + e.t * sp) % W) - 0.3;
  const r = 0.25 + e.rnd() * 0.3;
  for (const dx of [-W, 0, W]) {
    g.save();
    g.translate(off + dx, y);
    g.scale(1, 0.16);
    let c = g.createRadialGradient(0, 0, 0, 0, 0, r);
    c.addColorStop(0, "rgba(60,72,70,0.35)");
    c.addColorStop(1, "rgba(60,72,70,0)");
    g.fillStyle = c;
    g.fillRect(-r, -r, 2 * r, 2 * r);
    g.restore();
  }
}
