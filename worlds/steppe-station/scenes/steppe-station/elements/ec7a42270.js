var A = e.aspect;
var gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#17121f");
gr.addColorStop(0.2, "#241b31");
gr.addColorStop(0.33, "#3a2640");
gr.addColorStop(0.44, "#6e3a45");
gr.addColorStop(0.53, "#a8533a");
gr.addColorStop(0.585, "#d77a3f");
gr.addColorStop(0.625, "#f0a15c");
gr.addColorStop(0.7, "#d98c58");
gr.addColorStop(1, "#7a5040");
g.fillStyle = gr;
g.fillRect(-0.35, -0.4, A + 0.7, 1.7);
var sx = 0.76 * A;
var hg = g.createRadialGradient(sx, 0.62, 0, sx, 0.62, A * 0.9);
hg.addColorStop(0, "rgba(255,190,120,0.35)");
hg.addColorStop(0.4, "rgba(240,140,90,0.12)");
hg.addColorStop(1, "rgba(200,100,80,0)");
g.fillStyle = hg;
g.fillRect(-0.35, -0.4, A + 0.7, 1.7);
var cg = g.createRadialGradient(0, 0.6, 0, 0, 0.6, A * 0.7);
cg.addColorStop(0, "rgba(90,60,90,0.25)");
cg.addColorStop(1, "rgba(90,60,90,0)");
g.fillStyle = cg;
g.fillRect(-0.35, -0.4, A + 0.7, 1.7);
for (var i = 0; i < 80; i++) {
  var x = e.rnd() * (A + 0.7) - 0.35,
    y = -0.35 + e.rnd() * 0.62,
    s = e.rnd(),
    ph = e.rnd() * 6.28;
  var a = (0.27 - y) / 0.5;
  if (a <= 0) continue;
  a = Math.min(1, a);
  var tw = 0.65 + 0.25 * Math.sin(e.t * (0.5 + s * 0.9) + ph) + 0.1 * Math.sin(e.t * (1.7 + s) + ph * 2);
  g.globalAlpha = a * tw * (0.25 + s * 0.55);
  g.fillStyle = s > 0.9 ? "#ffe9c4" : "#f5e6c8";
  g.beginPath();
  g.arc(x, y, 0.0009 + s * s * 0.0022, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
