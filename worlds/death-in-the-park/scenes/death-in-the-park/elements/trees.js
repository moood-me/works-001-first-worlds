function tree(x, h, s) {
  g.strokeStyle = "#17151c";
  g.lineCap = "round";
  var br = function (x0, y0, a, l, w, d) {
    if (d > 6 || w < 0.04) return;
    var x1 = x0 + Math.cos(a) * l,
      y1 = y0 + Math.sin(a) * l;
    g.lineWidth = w;
    g.beginPath();
    g.moveTo(x0, y0);
    g.lineTo(x1, y1);
    g.stroke();
    br(x1, y1, a - 0.35 - e.rnd() * 0.3, l * 0.75, w * 0.68, d + 1);
    br(x1, y1, a + 0.3 + e.rnd() * 0.3, l * 0.72, w * 0.66, d + 1);
  };
  br(x, 0, -Math.PI / 2 + (e.rnd() - 0.5) * 0.1, h * 0.32, 0.45 * s, 0);
  var cols = ["rgba(170,110,40,0.55)", "rgba(140,70,30,0.5)", "rgba(190,140,60,0.45)"];
  for (var i = 0; i < 60; i++) {
    var a = -Math.PI * (0.1 + 0.8 * e.rnd()),
      r = h * (0.3 + e.rnd() * 0.45);
    g.fillStyle = cols[i % 3];
    g.beginPath();
    g.ellipse(
      x + Math.cos(a) * r * 0.9,
      -h * 0.55 + Math.sin(a) * r * 0.7,
      0.5 + e.rnd() * 0.7,
      0.35 + e.rnd() * 0.4,
      0,
      0,
      Math.PI * 2,
    );
    g.fill();
  }
}
for (var i = 0; i < 16; i++) tree(-85 + i * 11 + (e.rnd() - 0.5) * 5, 12 + e.rnd() * 6, 0.8 + e.rnd() * 0.5);
var m = g.createLinearGradient(0, -6, 0, 1);
m.addColorStop(0, "rgba(70,60,80,0)");
m.addColorStop(1, "rgba(80,70,90,0.5)");
g.fillStyle = m;
g.fillRect(-90, -6, 180, 7);
