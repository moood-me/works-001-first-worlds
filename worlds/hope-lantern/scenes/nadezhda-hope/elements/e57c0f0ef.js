var t = e.t;
var bg = g.createLinearGradient(0, -9, 0, 3);
bg.addColorStop(0, "rgba(140,150,180,0)");
bg.addColorStop(0.6, "rgba(140,150,180,0.18)");
bg.addColorStop(0.85, "rgba(150,158,186,0.26)");
bg.addColorStop(1, "rgba(140,150,180,0.1)");
g.fillStyle = bg;
g.fillRect(-800, -9, 1600, 12);
for (var i = 0; i < 10; i++) {
  var cx = e.rnd() * 1600,
    cy = -0.5 - e.rnd() * 6,
    rx = 110 + e.rnd() * 240,
    ry = 1 + e.rnd() * 2.4,
    sp = 0.4 + e.rnd() * 0.9,
    ph = e.rnd() * 6.2832,
    a = 0.1 + e.rnd() * 0.16;
  var x = cx + Math.sin(t * 0.011 * sp + ph) * 50 + t * 0.7 * sp;
  x = (((x % 1600) + 1600) % 1600) - 800;
  g.save();
  g.translate(x, cy);
  g.scale(rx, ry);
  var gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  gr.addColorStop(0, "rgba(146,154,184," + a + ")");
  gr.addColorStop(0.5, "rgba(146,154,184," + a * 0.5 + ")");
  gr.addColorStop(1, "rgba(146,154,184,0)");
  g.fillStyle = gr;
  g.fillRect(-1, -1, 2, 2);
  g.restore();
}
