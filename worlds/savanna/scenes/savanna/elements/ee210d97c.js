const A = e.aspect,
  H = 0.6;
let gr = g.createLinearGradient(0, -0.35, 0, H);
gr.addColorStop(0, "#4f7394");
gr.addColorStop(0.4, "#8eaab7");
gr.addColorStop(0.78, "#dccba2");
gr.addColorStop(1, "#f2d9a6");
g.fillStyle = gr;
g.fillRect(-0.35, -0.35, A + 0.7, H + 0.37);
