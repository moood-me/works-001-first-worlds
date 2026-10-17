var f = e.state.fog || 0,
  d = e.state.dawn || 0,
  t = e.t;
var R = Math.round(106 + 95 * d),
  G = Math.round(111 + 73 * d),
  B = Math.round(144 + 48 * d),
  base = 0.14 + 0.75 * f;
for (var i = 0; i < 10; i++) {
  var cx = -450 + e.rnd() * 900 + Math.sin(t * 0.03 + i * 1.7) * 30,
    cy = -1 - e.rnd() * (3 + 16 * f),
    rx = 120 + e.rnd() * 200,
    ry = 2.5 + e.rnd() * (4 + 14 * f);
  g.save();
  g.translate(cx, cy);
  g.scale(1, ry / rx);
  var gr = g.createRadialGradient(0, 0, 0, 0, 0, rx);
  gr.addColorStop(0, "rgba(" + R + "," + G + "," + B + "," + base * 0.7 + ")");
  gr.addColorStop(1, "rgba(" + R + "," + G + "," + B + ",0)");
  g.fillStyle = gr;
  g.fillRect(-rx, -rx, 2 * rx, 2 * rx);
  g.restore();
}
if (f > 0) {
  var lb = g.createLinearGradient(0, -45, 0, 5);
  lb.addColorStop(0, "rgba(" + R + "," + G + "," + B + ",0)");
  lb.addColorStop(0.5, "rgba(" + R + "," + G + "," + B + "," + 0.55 * f + ")");
  lb.addColorStop(1, "rgba(" + R + "," + G + "," + B + "," + 0.8 * f + ")");
  g.fillStyle = lb;
  g.fillRect(-500, -45, 1000, 50);
}
