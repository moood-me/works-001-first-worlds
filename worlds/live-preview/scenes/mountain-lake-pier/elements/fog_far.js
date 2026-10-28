var t = e.t,
  R = e.rnd;
var bg = g.createLinearGradient(0, -9, 0, 4);
bg.addColorStop(0, "rgba(170,162,186,0)");
bg.addColorStop(0.6, "rgba(170,162,186,0.2)");
bg.addColorStop(1, "rgba(170,162,186,0.08)");
g.fillStyle = bg;
g.fillRect(-900, -9, 1800, 13);
for (var i = 0; i < 18; i++) {
  var cx = -820 + R() * 1640 + 30 * Math.sin(t * 0.017 + i * 1.9) + 12 * Math.sin(t * 0.043 + i);
  var cy = -1 - R() * 8,
    w = 110 + R() * 260,
    h = 2 + R() * 5,
    a = 0.14 + R() * 0.22;
  a *= 0.75 + 0.25 * Math.sin(t * 0.05 + i * 2.7);
  g.save();
  g.translate(cx, cy);
  g.scale(w, h);
  var gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  gr.addColorStop(0, "rgba(176,168,192," + a.toFixed(3) + ")");
  gr.addColorStop(1, "rgba(176,168,192,0)");
  g.fillStyle = gr;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
}
