var L = e.state.lamp ? 1 : 0,
  d = e.state.dawn || 0;
function P() {
  g.beginPath();
  g.rect(-14, -10, 28, 10.03);
  g.moveTo(-3.4, 0.03);
  g.lineTo(-3.4, -1.4);
  g.ellipse(0, -1.4, 3.4, 2.9, 0, Math.PI, 0, false);
  g.lineTo(3.4, 0.03);
  g.closePath();
}
P();
g.fillStyle = "#211f28";
g.fill("evenodd");
g.save();
P();
g.clip("evenodd");
g.strokeStyle = "rgba(12,11,16,0.6)";
g.lineWidth = 0.025;
var j = 0;
for (var y = 0; y > -10; y -= 0.42) {
  g.beginPath();
  g.moveTo(-14, y);
  g.lineTo(14, y);
  g.stroke();
  var off = j++ % 2 ? 0.45 : 0;
  for (var x = -14 + off; x < 14; x += 0.9) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x, y - 0.42);
    g.stroke();
  }
}
g.fillStyle = "#2b2832";
g.beginPath();
g.ellipse(0, -1.4, 4.15, 3.65, 0, Math.PI, 0, false);
g.lineTo(3.4, -1.4);
g.ellipse(0, -1.4, 3.4, 2.9, 0, 0, Math.PI, true);
g.closePath();
g.fill();
g.strokeStyle = "rgba(12,11,16,0.7)";
g.lineWidth = 0.025;
for (var a = Math.PI; a <= 2 * Math.PI + 0.01; a += Math.PI / 22) {
  g.beginPath();
  g.moveTo(3.4 * Math.cos(a), -1.4 + 2.9 * Math.sin(a));
  g.lineTo(4.15 * Math.cos(a), -1.4 + 3.65 * Math.sin(a));
  g.stroke();
}
g.fillStyle = "#302d38";
g.beginPath();
g.moveTo(-0.28, -4.3);
g.lineTo(0.28, -4.3);
g.lineTo(0.38, -5.15);
g.lineTo(-0.38, -5.15);
g.closePath();
g.fill();
for (var i = 0; i < 14; i++) {
  var sx = -13 + e.rnd() * 26,
    sw = 0.15 + e.rnd() * 0.5,
    st = -9 + e.rnd() * 6,
    sl = 2 + e.rnd() * 5;
  var sg = g.createLinearGradient(0, st, 0, st + sl);
  sg.addColorStop(0, "rgba(10,10,14,0)");
  sg.addColorStop(0.3, "rgba(10,10,14,0.35)");
  sg.addColorStop(1, "rgba(10,10,14,0)");
  g.fillStyle = sg;
  g.fillRect(sx, st, sw, sl);
}
var wl = g.createLinearGradient(0, -0.9, 0, 0.3);
wl.addColorStop(0, "rgba(40,52,44,0)");
wl.addColorStop(1, "rgba(40,52,44,0.45)");
g.fillStyle = wl;
g.fillRect(-14, -0.9, 28, 1.2);
if (L) {
  var lg = g.createRadialGradient(-0.5, -3.0, 0, -0.5, -3.0, 5);
  lg.addColorStop(0, "rgba(255,200,140,0.26)");
  lg.addColorStop(0.5, "rgba(255,190,130,0.08)");
  lg.addColorStop(1, "rgba(255,190,130,0)");
  g.fillStyle = lg;
  g.fillRect(-5.5, -8, 10, 8.3);
}
var ed = g.createLinearGradient(-14, 0, 14, 0);
ed.addColorStop(0, "rgba(8,8,12,0.7)");
ed.addColorStop(0.32, "rgba(8,8,12,0)");
ed.addColorStop(0.68, "rgba(8,8,12,0)");
ed.addColorStop(1, "rgba(8,8,12,0.7)");
g.fillStyle = ed;
g.fillRect(-14, -10, 28, 10.3);
g.restore();
g.strokeStyle = "rgba(160,166,205," + (0.22 + 0.2 * d) + ")";
g.lineWidth = 0.03;
g.beginPath();
g.ellipse(0, -1.4, 3.4, 2.9, 0, Math.PI * 1.05, Math.PI * 1.95, false);
g.stroke();
if (L) {
  g.strokeStyle = "rgba(255,205,150,0.35)";
  g.lineWidth = 0.035;
  g.beginPath();
  g.ellipse(0, -1.4, 3.4, 2.9, 0, Math.PI * 1.08, Math.PI * 1.6, false);
  g.stroke();
}
