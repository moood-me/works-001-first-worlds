var W = e.aspect,
  t = e.t;
var d = e.state.dusk == null ? 0.15 : e.state.dusk;
var gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#090d26");
gr.addColorStop(0.2, "#141d46");
gr.addColorStop(0.33, "#26336a");
gr.addColorStop(0.41, "#4a5186");
gr.addColorStop(0.44, "#8e7492");
gr.addColorStop(0.453, "#b48a88");
gr.addColorStop(0.47, "#3a3656");
gr.addColorStop(1, "#100e1c");
g.fillStyle = gr;
g.fillRect(-0.2, -0.35, W + 0.4, 1.6);
var ag = g.createRadialGradient(W * 0.24, 0.46, 0, W * 0.24, 0.46, 0.6);
ag.addColorStop(0, "rgba(230,150,130," + 0.24 * (1 - d) + ")");
ag.addColorStop(1, "rgba(230,150,130,0)");
g.fillStyle = ag;
g.fillRect(-0.2, -0.2, W + 0.4, 1);
g.fillStyle = "rgba(5,6,20," + 0.55 * d + ")";
g.fillRect(-0.2, -0.35, W + 0.4, 1.6);
for (var k = 0; k < 4; k++) {
  var cw = 0.25 + e.rnd() * 0.35,
    cy = 0.3 + k * 0.03 + e.rnd() * 0.02,
    sp = 0.0015 * (1 + k * 0.4);
  var cx = ((e.rnd() * (W + 0.8) + t * sp) % (W + 0.8)) - 0.4;
  var cg = g.createLinearGradient(cx - cw, 0, cx + cw, 0);
  cg.addColorStop(0, "rgba(34,38,78,0)");
  cg.addColorStop(0.5, "rgba(34,38,78,0.55)");
  cg.addColorStop(1, "rgba(34,38,78,0)");
  g.fillStyle = cg;
  g.beginPath();
  g.ellipse(cx, cy, cw, 0.006 + k * 0.001, 0, 0, 6.283);
  g.fill();
  g.fillStyle = "rgba(205,145,145," + 0.12 * (1 - d) + ")";
  g.beginPath();
  g.ellipse(cx + cw * 0.1, cy + 0.004, cw * 0.7, 0.0018, 0, 0, 6.283);
  g.fill();
}
for (var i = 0; i < 60; i++) {
  var x = e.rnd() * W,
    y = -0.35 + e.rnd() * 0.6,
    r = 0.0009 + e.rnd() * 0.0012,
    f = 0.5 + e.rnd(),
    b = e.rnd();
  var a =
    (0.12 + b * 0.4) *
    (0.35 + 0.65 * d) *
    (0.7 + 0.3 * Math.sin(t * f + i * 2.1)) *
    (1 - Math.max(0, (y - 0.1) / 0.25));
  if (a <= 0) continue;
  g.globalAlpha = a;
  g.fillStyle = "#e8ecff";
  g.beginPath();
  g.arc(x, y, r, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
var mx = W * 0.8,
  my = 0.1,
  mr = 0.016;
var mg = g.createRadialGradient(mx, my, 0, mx, my, 0.09);
mg.addColorStop(0, "rgba(220,225,255,0.12)");
mg.addColorStop(1, "rgba(220,225,255,0)");
g.fillStyle = mg;
g.fillRect(mx - 0.1, my - 0.1, 0.2, 0.2);
g.fillStyle = "#e9e4d6";
g.beginPath();
g.arc(mx, my, mr, -Math.PI / 2, Math.PI / 2, false);
g.ellipse(mx, my, mr * 0.55, mr, 0, Math.PI / 2, -Math.PI / 2, true);
g.closePath();
g.fill();
