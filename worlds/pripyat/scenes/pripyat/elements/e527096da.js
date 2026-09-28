const W = e.aspect;
const gr = g.createLinearGradient(0, -0.35, 0, 0.62);
gr.addColorStop(0, "#646d70");
gr.addColorStop(0.55, "#9aa09d");
gr.addColorStop(1, "#c3c5bb");
g.fillStyle = gr;
g.fillRect(-0.1, -0.4, W + 0.2, 1.06);
const sx = W * 0.3,
  sy = 0.2;
const rg = g.createRadialGradient(sx, sy, 0, sx, sy, 0.5);
rg.addColorStop(0, "rgba(232,228,208,0.5)");
rg.addColorStop(0.35, "rgba(214,212,196,0.16)");
rg.addColorStop(1, "rgba(214,212,196,0)");
g.fillStyle = rg;
g.fillRect(-0.1, -0.4, W + 0.2, 1.06);
for (let i = 0; i < 26; i++) {
  const bx = e.rnd() * (W + 0.8);
  const by = -0.32 + e.rnd() * 0.84;
  const s = 0.1 + e.rnd() * 0.28;
  const sp = 0.0015 + e.rnd() * 0.002;
  const dark = e.rnd() < 0.55;
  const span = W + 0.8;
  const x = ((bx + e.t * sp) % span) - 0.4;
  g.save();
  g.translate(x, by);
  g.scale(1, 0.4 - by * 0.3);
  const cg = g.createRadialGradient(0, 0, 0, 0, 0, s);
  cg.addColorStop(0, dark ? "rgba(88,95,98,0.32)" : "rgba(214,214,204,0.28)");
  cg.addColorStop(1, "rgba(120,125,125,0)");
  g.fillStyle = cg;
  g.beginPath();
  g.arc(0, 0, s, 0, 6.2832);
  g.fill();
  g.restore();
}
