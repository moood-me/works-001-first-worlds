var a = e.aspect;
var gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#07090d");
gr.addColorStop(0.5, "#131820");
gr.addColorStop(0.62, "#2a2b30");
gr.addColorStop(1, "#0d0f13");
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, a + 0.6, 1.6);
for (var i = 0; i < 7; i++) {
  var cx = ((e.rnd() * a * 1.6 + e.t * 0.004 * (1 + i * 0.3)) % (a + 0.6)) - 0.3;
  var cy = 0.1 + e.rnd() * 0.35;
  var r = 0.25 + e.rnd() * 0.3;
  var cg = g.createRadialGradient(cx, cy, 0, cx, cy, r);
  cg.addColorStop(0, "rgba(60,62,70,0.18)");
  cg.addColorStop(1, "rgba(60,62,70,0)");
  g.fillStyle = cg;
  g.fillRect(cx - r, cy - r, 2 * r, 2 * r);
}
