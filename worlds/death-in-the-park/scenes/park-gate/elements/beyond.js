var S = e.state || {},
  o = S.gate || 0,
  m = S.mist == null ? 0.25 : S.mist;
var k = 0.3 + 0.5 * o + 0.2 * m;
var gr = g.createRadialGradient(6.5, -1.4, 0, 6.5, -1.4, 8);
gr.addColorStop(0, "rgba(196,206,222," + 0.32 * k + ")");
gr.addColorStop(0.5, "rgba(150,160,184," + 0.12 * k + ")");
gr.addColorStop(1, "rgba(150,160,184,0)");
g.fillStyle = gr;
g.fillRect(-4, -9, 21, 10);
for (var i = 0; i < 4; i++) {
  var x = 2 + e.rnd() * 9,
    h = 5 + e.rnd() * 3;
  g.fillStyle = "rgba(60,62,80," + 0.25 * (1 - m * 0.6) + ")";
  g.fillRect(x - 0.12, -h, 0.24, h);
}
e.light(6.5, -1.5, 5, "#c8d2e0", 0.22 * k);
