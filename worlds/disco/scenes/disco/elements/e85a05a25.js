var w = e.aspect,
  h = 0.6,
  T = Math.PI * 2;
var gr = g.createLinearGradient(0, -0.35, 0, h + 0.01);
gr.addColorStop(0, "#0d0518");
gr.addColorStop(0.3, "#1a0b2e");
gr.addColorStop(0.62, "#4a1670");
gr.addColorStop(0.86, "#9c2a88");
gr.addColorStop(1, "#f0489e");
g.fillStyle = gr;
g.fillRect(-0.35, -0.35, w + 0.7, h + 0.36);
var gb = g.createLinearGradient(0, h, 0, 1.25);
gb.addColorStop(0, "#b8358c");
gb.addColorStop(0.15, "#2a0f3e");
gb.addColorStop(1, "#10061b");
g.fillStyle = gb;
g.fillRect(-0.35, h, w + 0.7, 1.25 - h);
g.globalCompositeOperation = "lighter";
var cs = ["#ff3fa4", "#6a2cff", "#23b8e8"];
for (var i = 0; i < 3; i++) {
  var cx = w * (0.18 + 0.32 * i) + 0.06 * Math.sin(e.t * 0.041 + i * 2.1),
    cy = h - 0.04 + 0.012 * Math.sin(e.t * 0.067 + i),
    r = 0.42 + 0.06 * i;
  g.save();
  g.translate(cx, cy);
  g.scale(1, 0.32);
  var rg = g.createRadialGradient(0, 0, 0, 0, 0, r);
  rg.addColorStop(0, cs[i]);
  rg.addColorStop(1, "rgba(0,0,0,0)");
  g.globalAlpha = 0.13 + 0.03 * Math.sin(e.t * 0.19 + i * 1.7);
  g.fillStyle = rg;
  g.beginPath();
  g.arc(0, 0, r, 0, T);
  g.fill();
  g.restore();
}
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
