const w = e.aspect,
  t = e.t;
let gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#06070b");
gr.addColorStop(0.4, "#11141b");
gr.addColorStop(0.6, "#2b2a31");
gr.addColorStop(1, "#0e1014");
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, w + 0.6, 1.6);
let cg = g.createRadialGradient(w * 0.66, 0.6, 0, w * 0.66, 0.6, 0.7);
cg.addColorStop(0, "rgba(120,90,70,0.28)");
cg.addColorStop(1, "rgba(120,90,70,0)");
g.fillStyle = cg;
g.fillRect(-0.3, -0.35, w + 0.6, 1.6);
for (let i = 0; i < 16; i++) {
  const sp = 0.003 + e.rnd() * 0.004;
  const x = ((e.rnd() * (w + 0.8) + t * sp) % (w + 0.8)) - 0.4;
  const y = -0.1 + e.rnd() * 0.55;
  const s = 0.12 + e.rnd() * 0.22;
  g.save();
  g.translate(x, y);
  g.scale(2.6, 0.5);
  let c = g.createRadialGradient(0, 0, 0, 0, 0, s);
  c.addColorStop(0, "rgba(70,64,72,0.2)");
  c.addColorStop(1, "rgba(70,64,72,0)");
  g.fillStyle = c;
  g.beginPath();
  g.arc(0, 0, s, 0, 7);
  g.fill();
  g.restore();
}
