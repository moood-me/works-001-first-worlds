const A = e.aspect;
let gr = g.createLinearGradient(0, -0.35, 0, 0.6);
gr.addColorStop(0, "#06080a");
gr.addColorStop(0.7, "#101518");
gr.addColorStop(1, "#1a2124");
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
const mx = A * 0.24,
  my = 0.12;
let rg = g.createRadialGradient(mx, my, 0, mx, my, 0.4);
rg.addColorStop(0, "rgba(120,135,138,0.22)");
rg.addColorStop(1, "rgba(120,135,138,0)");
g.fillStyle = rg;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
for (let i = 0; i < 16; i++) {
  const y = -0.1 + e.rnd() * 0.5;
  const sp = 0.002 + e.rnd() * 0.003;
  const x = ((e.rnd() * (A + 0.6) + e.t * sp) % (A + 1.2)) - 0.6;
  const w = 0.4 + e.rnd() * 0.7,
    h = 0.03 + e.rnd() * 0.05;
  g.globalAlpha = 0.25 + e.rnd() * 0.3;
  g.fillStyle = e.rnd() < 0.5 ? "#090c0e" : "#1a2023";
  g.beginPath();
  g.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
  g.fill();
}
g.globalAlpha = 1;
