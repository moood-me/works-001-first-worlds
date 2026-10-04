var H = 15.7;
for (var k = 0; k < 3; k++) {
  var yy = -H - 6 + k * 9 + Math.sin(e.t * 0.05 + k) * 2,
    hh = 14 + k * 8;
  var gr = g.createLinearGradient(0, yy - hh, 0, yy + hh);
  gr.addColorStop(0, "rgba(110,108,138,0)");
  gr.addColorStop(0.5, "rgba(110,108,138," + (0.16 - k * 0.03).toFixed(3) + ")");
  gr.addColorStop(1, "rgba(110,108,138,0)");
  g.fillStyle = gr;
  g.fillRect(-6000, yy - hh, 12000, hh * 2);
}
for (var i = 0; i < 12; i++) {
  var x = ((e.rnd() * 9000 + e.t * (1.5 + e.rnd() * 2)) % 9000) - 4500,
    y = -H + (e.rnd() - 0.5) * 16,
    rx = 500 + e.rnd() * 900,
    ry = 4 + e.rnd() * 6;
  g.save();
  g.translate(x, y);
  g.scale(1, ry / rx);
  var r = g.createRadialGradient(0, 0, 0, 0, 0, rx);
  r.addColorStop(0, "rgba(120,116,146,0.14)");
  r.addColorStop(1, "rgba(120,116,146,0)");
  g.fillStyle = r;
  g.beginPath();
  g.arc(0, 0, rx, 0, 6.283);
  g.fill();
  g.restore();
}
