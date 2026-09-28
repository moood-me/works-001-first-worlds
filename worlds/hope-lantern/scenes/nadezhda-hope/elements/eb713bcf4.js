var C = "#151926",
  p = e.phase * 6.2832;
g.fillStyle = C;
g.fillRect(-13, -1, 13, 0.13);
g.fillStyle = "#0f121b";
g.fillRect(-13, -0.87, 12.9, 0.07);
var xs = [];
for (var x = -0.12; x > -13; x -= 1.7) xs.push(x);
xs.forEach(function (x) {
  var w = 0.12 + e.rnd() * 0.05,
    t = 0.05 * e.rnd();
  g.fillStyle = C;
  g.fillRect(x - w / 2, -0.9, w, 0.9 + t);
});
for (var i = 0; i < xs.length - 1; i++) {
  g.strokeStyle = "#12151f";
  g.lineWidth = 0.04;
  g.beginPath();
  g.moveTo(xs[i], -0.82);
  g.lineTo(xs[i + 1], -0.25);
  g.stroke();
}
g.strokeStyle = "rgba(0,0,0,0.4)";
g.lineWidth = e.px;
for (var x = -12.9; x < 0; x += 0.22 + e.rnd() * 0.06) {
  g.beginPath();
  g.moveTo(x, -0.99);
  g.lineTo(x, -0.88);
  g.stroke();
}
var gr = g.createLinearGradient(-13, 0, 0, 0);
gr.addColorStop(0, "rgba(170,185,220,0)");
gr.addColorStop(1, "rgba(195,205,232,0.5)");
g.fillStyle = gr;
g.fillRect(-13, -1.005, 13, 0.02);
g.globalCompositeOperation = "source-atop";
var rg = g.createRadialGradient(-0.72, -1.12, 0, -0.72, -1.12, 1.6);
rg.addColorStop(0, "rgba(255,165,85,0.5)");
rg.addColorStop(1, "rgba(255,165,85,0)");
g.fillStyle = rg;
g.fillRect(-2.5, -1.3, 2.6, 1.4);
g.globalCompositeOperation = "source-over";
xs.forEach(function (x, j) {
  for (var k = 0; k < 2; k++) {
    var r = 0.22 + k * 0.22 + 0.06 * Math.sin(p + j * 1.3) + 0.03 * Math.sin(2 * p + j);
    g.strokeStyle = "rgba(175,190,222," + (0.16 - k * 0.06) + ")";
    g.lineWidth = 1.5 * e.px;
    g.beginPath();
    g.ellipse(x, 0.01, r, r * 0.1, 0, 0, 6.2832);
    g.stroke();
  }
});
