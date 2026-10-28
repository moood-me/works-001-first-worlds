const A = e.aspect,
  hz = 0.6;
let gr = g.createLinearGradient(0, -0.35, 0, hz);
gr.addColorStop(0, "#06061a");
gr.addColorStop(0.45, "#1b1538");
gr.addColorStop(0.8, "#43284a");
gr.addColorStop(0.95, "#6e3446");
gr.addColorStop(1, "#7d4048");
g.fillStyle = gr;
g.fillRect(-0.35, -0.4, A + 0.7, hz + 0.41);
for (let i = 0; i < 160; i++) {
  const x = e.rnd() * (A + 0.7) - 0.35,
    y = -0.35 + Math.pow(e.rnd(), 1.4) * (hz + 0.2),
    s = 0.0008 + e.rnd() * 0.0012;
  g.fillStyle = "rgba(235,225,250," + (0.2 + e.rnd() * 0.5) * Math.max(0, 1 - (y + 0.1) / (hz + 0.1)) + ")";
  g.fillRect(x, y, s, s);
}
const mx = A * 0.6,
  my = 0.18;
let h = g.createRadialGradient(mx, my, 0, mx, my, 0.34);
h.addColorStop(0, "rgba(245,200,180,0.35)");
h.addColorStop(0.15, "rgba(220,150,150,0.12)");
h.addColorStop(1, "rgba(200,120,140,0)");
g.fillStyle = h;
g.fillRect(mx - 0.4, my - 0.4, 0.8, 0.8);
const md = g.createRadialGradient(mx - 0.015, my - 0.015, 0.005, mx, my, 0.055);
md.addColorStop(0, "#f6e6d6");
md.addColorStop(1, "#d6a39a");
g.fillStyle = md;
g.beginPath();
g.arc(mx, my, 0.055, 0, 7);
g.fill();
g.fillStyle = "rgba(160,100,100,0.18)";
for (let i = 0; i < 7; i++) {
  g.beginPath();
  g.arc(mx + (e.rnd() - 0.5) * 0.07, my + (e.rnd() - 0.5) * 0.07, 0.004 + e.rnd() * 0.009, 0, 7);
  g.fill();
}
for (let j = 0; j < 9; j++) {
  const y = 0.05 + j * 0.055 + e.rnd() * 0.03,
    w = 0.35 + e.rnd() * 0.6,
    sp = 0.002 + e.rnd() * 0.003;
  const span = A + 1.4,
    x = ((e.rnd() * span + e.t * sp) % span) - 0.7;
  const c = g.createLinearGradient(0, y - 0.012, 0, y + 0.012);
  c.addColorStop(0, "rgba(20,14,36,0)");
  c.addColorStop(0.5, "rgba(20,14,36,0.75)");
  c.addColorStop(0.85, "rgba(150,80,100,0.25)");
  c.addColorStop(1, "rgba(150,80,100,0)");
  g.fillStyle = c;
  g.beginPath();
  g.ellipse(x, y, w / 2, 0.012 + j * 0.0015, 0, 0, 7);
  g.fill();
}
gr = g.createLinearGradient(0, hz - 0.08, 0, hz);
gr.addColorStop(0, "rgba(120,60,80,0)");
gr.addColorStop(1, "rgba(140,70,85,0.45)");
g.fillStyle = gr;
g.fillRect(-0.35, hz - 0.08, A + 0.7, 0.08);
g.fillStyle = "#0d0912";
g.fillRect(-0.35, hz, A + 0.7, 1.3 - hz);
