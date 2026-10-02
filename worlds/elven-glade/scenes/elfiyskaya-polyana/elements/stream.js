var T = Math.PI * 2,
  top = function (x) {
    return -1.6 + Math.sin(x / 7) * 1.6 + Math.sin(x / 3.1) * 0.3;
  },
  bot = function (x) {
    return 1.6 + Math.sin(x / 7) * 1.6 + Math.sin(x / 2.7) * 0.3;
  };
g.beginPath();
g.moveTo(-35, top(-35));
for (var x = -35; x <= 35; x += 0.5) g.lineTo(x, top(x));
for (var x = 35; x >= -35; x -= 0.5) g.lineTo(x, bot(x));
g.closePath();
var w = g.createLinearGradient(0, -4, 0, 4);
w.addColorStop(0, "#1d3550");
w.addColorStop(1, "#2e5072");
g.fillStyle = w;
g.fill();
g.save();
g.clip();
g.globalCompositeOperation = "lighter";
for (var i = 0; i < 90; i++) {
  var x = -35 + ((i * 1.37 + e.t * 0.5 * (1 + (i % 3))) % 70),
    y = Math.sin(x / 7) * 1.6 + (e.rnd() - 0.5) * 2.6;
  var a = 0.12 + 0.12 * Math.sin(e.t * 2 + i);
  g.strokeStyle = "rgba(190,215,255," + a + ")";
  g.lineWidth = 0.04;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + 0.7, y);
  g.stroke();
}
var mx = 6,
  my = Math.sin(mx / 7) * 1.6;
var mg = g.createRadialGradient(mx, my, 0, mx, my, 2.5);
mg.addColorStop(0, "rgba(220,235,255,0.4)");
mg.addColorStop(1, "rgba(220,235,255,0)");
g.fillStyle = mg;
g.fillRect(mx - 3, my - 3, 6, 6);
g.restore();
g.strokeStyle = "rgba(15,25,24,0.7)";
g.lineWidth = 0.18;
g.beginPath();
for (var x = -35; x <= 35; x += 0.5) x == -35 ? g.moveTo(x, top(x)) : g.lineTo(x, top(x));
g.stroke();
g.beginPath();
for (var x = -35; x <= 35; x += 0.5) x == -35 ? g.moveTo(x, bot(x)) : g.lineTo(x, bot(x));
g.stroke();
