var W = 9000;
function H(x) {
  return (
    230 +
    70 * Math.sin(x / 1500 + 0.4) +
    60 * Math.sin(x / 610 + 2.0) +
    28 * Math.sin(x / 230 + 0.9) +
    10 * Math.abs(Math.sin(x / 9.7)) +
    5 * Math.sin(x / 4.3 + 1)
  );
}
var S = 6;
function path() {
  g.beginPath();
  g.moveTo(-W, 40);
  for (var x = -W; x <= W; x += S) g.lineTo(x, -H(x));
  g.lineTo(W, 40);
  g.closePath();
}
var gr = g.createLinearGradient(0, -380, 0, 0);
gr.addColorStop(0, "#55666a");
gr.addColorStop(1, "#43534f");
path();
g.fillStyle = gr;
g.fill();
g.save();
path();
g.clip();
for (var i = 0; i < 3200; i++) {
  var x = (e.rnd() - 0.5) * 2 * W;
  var hx = H(x);
  var y = -hx + e.rnd() * hx;
  var r = 5 + e.rnd() * 7;
  g.fillStyle = "rgba(33,46,44,0.38)";
  g.beginPath();
  g.arc(x, y, r, 0, 6.2832);
  g.fill();
  g.fillStyle = "rgba(196,174,134,0.09)";
  g.beginPath();
  g.arc(x - r * 0.4, y - r * 0.3, r * 0.55, 0, 6.2832);
  g.fill();
}
g.globalCompositeOperation = "screen";
for (var x = -W; x < W; x += 30) {
  var s = (H(x + 80) - H(x - 80)) / 160;
  if (s > 0.03) {
    g.globalAlpha = Math.min(0.45, s * 1.6);
    g.fillStyle = "#8a7a5c";
    g.beginPath();
    g.moveTo(x, -H(x));
    g.lineTo(x + 31, -H(x + 30));
    g.lineTo(x + 31 + 90, -H(x + 30) + 260);
    g.lineTo(x + 90, -H(x) + 260);
    g.closePath();
    g.fill();
  }
}
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
var hz = g.createLinearGradient(0, -220, 0, 0);
hz.addColorStop(0, "rgba(205,208,222,0)");
hz.addColorStop(1, "rgba(214,214,226,0.9)");
g.fillStyle = hz;
g.fillRect(-W, -220, 2 * W, 260);
g.restore();
