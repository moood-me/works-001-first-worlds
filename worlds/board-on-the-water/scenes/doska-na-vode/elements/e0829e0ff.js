var W = e.aspect,
  H0 = 0.47,
  sx = W / 2 - 0.463,
  sy = 0.3;
var gr = g.createLinearGradient(0, -0.35, 0, H0);
gr.addColorStop(0, "#1c1f3b");
gr.addColorStop(0.33, "#2f3150");
gr.addColorStop(0.6, "#5e4b6f");
gr.addColorStop(0.8, "#a8788a");
gr.addColorStop(0.93, "#dca894");
gr.addColorStop(1, "#efc29c");
g.fillStyle = gr;
g.fillRect(-0.2, -0.4, W + 0.4, H0 + 0.41);
g.fillStyle = "#efc29c";
g.fillRect(-0.2, H0, W + 0.4, 0.85);
g.save();
g.translate(sx, sy);
g.scale(1.6, 1);
var rg = g.createRadialGradient(0, 0, 0, 0, 0, 0.55);
rg.addColorStop(0, "rgba(255,214,170,0.55)");
rg.addColorStop(0.18, "rgba(250,190,150,0.28)");
rg.addColorStop(0.5, "rgba(235,160,140,0.1)");
rg.addColorStop(1, "rgba(235,160,140,0)");
g.fillStyle = rg;
g.fillRect(-0.6, -0.6, 1.2, 1.2);
g.restore();
var hb = g.createLinearGradient(0, H0 - 0.12, 0, H0);
hb.addColorStop(0, "rgba(255,215,175,0)");
hb.addColorStop(1, "rgba(255,215,175,0.3)");
g.fillStyle = hb;
g.fillRect(-0.2, H0 - 0.12, W + 0.4, 0.12);
