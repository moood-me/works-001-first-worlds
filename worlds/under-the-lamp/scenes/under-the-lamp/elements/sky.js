const w = e.aspect;
const gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#06080b");
gr.addColorStop(0.3, "#0d1318");
gr.addColorStop(0.44, "#26313a");
gr.addColorStop(0.55, "#141b21");
gr.addColorStop(1, "#0a0d10");
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, w + 0.6, 1.6);
for (let i = 0; i < 16; i++) {
  const cx = -0.3 + e.rnd() * (w + 0.6) + Math.sin(e.t * 0.01 + i) * 0.03;
  const cy = -0.1 + e.rnd() * 0.4;
  const r = 0.15 + e.rnd() * 0.3;
  g.save();
  g.translate(cx, cy);
  g.scale(1, 0.3);
  const rg = g.createRadialGradient(0, 0, 0, 0, 0, r);
  rg.addColorStop(0, "rgba(58,70,80,0.2)");
  rg.addColorStop(1, "rgba(58,70,80,0)");
  g.fillStyle = rg;
  g.beginPath();
  g.arc(0, 0, r, 0, 7);
  g.fill();
  g.restore();
}
