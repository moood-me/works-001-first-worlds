var s = e.state;
var gr = g.createLinearGradient(-5, 0, 9, 0);
gr.addColorStop(0, "#1c1918");
gr.addColorStop(1, "#0d0c0d");
g.fillStyle = gr;
g.fillRect(-5, -17, 14, 17.3);
g.strokeStyle = "rgba(0,0,0,0.22)";
g.lineWidth = 0.03;
for (var y = -17; y < 0; y += 0.3) {
  g.beginPath();
  g.moveTo(-5, y);
  g.lineTo(9, y);
  g.stroke();
}
var lg = g.createRadialGradient(-6, -2, 0, -6, -2, 6);
lg.addColorStop(0, "rgba(230,180,110," + 0.2 * s.lamp + ")");
lg.addColorStop(1, "rgba(230,180,110,0)");
g.fillStyle = lg;
g.fillRect(-5, -9, 7, 9.3);
g.fillStyle = "#0a0b0e";
var rows = [-14.5, -10, -5.6];
for (var r = 0; r < 3; r++) {
  for (var c = 0; c < 2; c++) {
    if (r == 2 && c == 0) continue;
    g.fillRect(-3.5 + c * 5, rows[r], 1.6, 2.4);
  }
}
g.fillRect(-3.8, -2.6, 1.4, 2.6);
var wx = -3.5,
  wy = -5.6,
  ww = 1.6,
  wh = 2.4;
var on = s.watcher ? 0.72 : 0.4;
var wg = g.createLinearGradient(wx, wy, wx, wy + wh);
wg.addColorStop(0, "rgba(205,150,85," + on + ")");
wg.addColorStop(1, "rgba(140,92,45," + on + ")");
g.fillStyle = "#0a0b0e";
g.fillRect(wx, wy, ww, wh);
g.fillStyle = wg;
g.fillRect(wx, wy, ww, wh);
if (s.watcher) {
  var sw = 0.04 * Math.sin(e.t * 0.37) + 0.02 * Math.sin(e.t * 0.91);
  g.fillStyle = "rgba(18,13,10,0.88)";
  g.beginPath();
  g.ellipse(wx + 0.9 + sw, wy + 0.9, 0.2, 0.25, 0, 0, 6.283);
  g.fill();
  g.beginPath();
  g.moveTo(wx + 0.3 + sw, wy + wh);
  g.quadraticCurveTo(wx + 0.45 + sw, wy + 1.2, wx + 0.9 + sw, wy + 1.15);
  g.quadraticCurveTo(wx + 1.35 + sw, wy + 1.2, wx + 1.5 + sw, wy + wh);
  g.fill();
}
g.fillStyle = "rgba(30,20,13,0.82)";
var gap = s.watcher ? (0.5 + 0.5 * Math.sin(e.t * 0.21 + Math.sin(e.t * 0.07))) * 0.11 : 0;
for (var b = 0; b < 16; b++) {
  var by = wy + b * 0.15;
  var h = 0.1;
  if (b == 6) {
    h = 0.1 - gap * 0.8;
  }
  g.fillRect(wx, by, ww, h);
}
if (s.watcher && gap > 0.03) {
  g.fillStyle = "rgba(16,11,8,0.92)";
  g.fillRect(wx + 0.75, wy + 1.0 - gap, 0.05, gap * 0.7);
  g.fillRect(wx + 0.88, wy + 1.0 - gap, 0.05, gap * 0.7);
}
e.light(wx + ww / 2, wy + wh / 2, 2, "#e0a860", 0.25 * on);
g.strokeStyle = "#08080a";
g.lineWidth = 0.08;
g.strokeRect(wx, wy, ww, wh);
g.lineWidth = 0.05;
var fs = [-3.0, -7.4];
for (var f = 0; f < 2; f++) {
  var fy = fs[f];
  g.beginPath();
  g.moveTo(-4.3, fy);
  g.lineTo(3.6, fy);
  g.stroke();
  for (var q = -4.3; q < 3.6; q += 0.22) {
    g.beginPath();
    g.moveTo(q, fy);
    g.lineTo(q, fy - 0.9);
    g.stroke();
  }
  g.beginPath();
  g.moveTo(-4.3, fy - 0.9);
  g.lineTo(3.6, fy - 0.9);
  g.stroke();
}
g.beginPath();
g.moveTo(2.2, -3);
g.lineTo(3.4, -7.4);
g.moveTo(2.4, -3);
g.lineTo(3.6, -7.4);
g.stroke();
