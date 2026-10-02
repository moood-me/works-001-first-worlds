const A = e.aspect,
  H = 0.56,
  mx = A * 0.78,
  my = 0.17;
const gr = g.createLinearGradient(0, -0.35, 0, H + 0.01);
gr.addColorStop(0, "#03061a");
gr.addColorStop(0.4, "#081030");
gr.addColorStop(0.78, "#142246");
gr.addColorStop(1, "#2a3b5f");
g.fillStyle = gr;
g.fillRect(-0.1, -0.4, A + 0.2, H + 0.42);
const rg = g.createRadialGradient(mx, my, 0, mx, my, 0.8);
rg.addColorStop(0, "rgba(120,145,195,0.30)");
rg.addColorStop(0.35, "rgba(70,95,150,0.12)");
rg.addColorStop(1, "rgba(40,60,110,0)");
g.fillStyle = rg;
g.fillRect(-0.1, -0.4, A + 0.2, H + 0.42);
const hg = g.createLinearGradient(0, H - 0.12, 0, H + 0.01);
hg.addColorStop(0, "rgba(60,80,120,0)");
hg.addColorStop(1, "rgba(70,92,135,0.35)");
g.fillStyle = hg;
g.fillRect(-0.1, H - 0.12, A + 0.2, 0.13);
