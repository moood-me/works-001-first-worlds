var A = e.aspect,
  H = 0.45,
  t = e.t;
var gr = g.createLinearGradient(0, -0.35, 0, H);
gr.addColorStop(0, "#121829");
gr.addColorStop(0.4, "#262d4a");
gr.addColorStop(0.75, "#5d5873");
gr.addColorStop(0.93, "#a38083");
gr.addColorStop(1, "#bf9282");
g.fillStyle = gr;
g.fillRect(-0.35, -0.35, A + 0.7, H + 0.36);
var rg = g.createRadialGradient(A * 0.68, H, 0, A * 0.68, H, 0.55);
rg.addColorStop(0, "rgba(236,176,136,0.38)");
rg.addColorStop(0.5, "rgba(200,140,130,0.12)");
rg.addColorStop(1, "rgba(200,140,130,0)");
g.fillStyle = rg;
g.fillRect(-0.35, -0.35, A + 0.7, H + 0.36);
for (var i = 0; i < 80; i++) {
  var x = e.rnd() * (A + 0.7) - 0.35,
    y = -0.35 + e.rnd() * (H + 0.1),
    b = e.rnd();
  var tw = 0.65 + 0.35 * Math.sin(t * (0.3 + b * 0.7) + i * 2.3);
  var fade = Math.max(0, 1 - (y + 0.35) / (H + 0.15));
  g.globalAlpha = (0.12 + 0.55 * b) * tw * fade * fade;
  g.fillStyle = "#e6e2f0";
  g.beginPath();
  g.arc(x, y, e.px * (0.5 + b), 0, 6.283);
  g.fill();
}
g.globalAlpha = 0.85;
var vx = A * 0.5,
  vy = H - 0.27;
var vg = g.createRadialGradient(vx, vy, 0, vx, vy, e.px * 7);
vg.addColorStop(0, "rgba(255,240,220,0.9)");
vg.addColorStop(0.25, "rgba(255,230,210,0.25)");
vg.addColorStop(1, "rgba(255,230,210,0)");
g.fillStyle = vg;
g.beginPath();
g.arc(vx, vy, e.px * 7, 0, 6.283);
g.fill();
g.globalAlpha = 1;
var wg = g.createLinearGradient(0, H, 0, 1.25);
wg.addColorStop(0, "#a8858a");
wg.addColorStop(0.06, "#6a6278");
wg.addColorStop(0.3, "#363a55");
wg.addColorStop(1, "#151a2a");
g.fillStyle = wg;
g.fillRect(-0.35, H, A + 0.7, 1.26 - H);
var sg = g.createRadialGradient(A * 0.68, H, 0, A * 0.68, H, 0.45);
sg.addColorStop(0, "rgba(236,176,136,0.25)");
sg.addColorStop(1, "rgba(236,176,136,0)");
g.save();
g.translate(A * 0.68, H);
g.scale(0.6, 1);
g.translate(-A * 0.68, -H);
g.fillStyle = sg;
g.fillRect(0, H, A * 2, 0.8);
g.restore();
g.globalCompositeOperation = "lighter";
for (var j = 0; j < 70; j++) {
  var d = e.rnd(),
    yy = H + 0.004 + d * d * 0.45;
  var w = (0.01 + 0.06 * d) * (0.6 + 0.4 * Math.sin(t * (0.5 + e.rnd()) + j));
  var xx = A * 0.68 + (e.rnd() - 0.5) * (0.08 + d * 0.35) + Math.sin(t * 0.3 + j) * 0.004;
  g.globalAlpha = 0.18 * (1 - d) * (0.5 + 0.5 * Math.sin(t * 0.9 + j * 1.7));
  g.fillStyle = "#e8b896";
  g.fillRect(xx - w / 2, yy, w, e.px * (1 + d * 2));
}
g.globalCompositeOperation = "source-over";
g.globalAlpha = 1;
