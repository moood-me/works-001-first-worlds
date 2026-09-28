var C = "#151926",
  t = e.t;
function top(x) {
  return -1 + 0.03 * Math.sin(x * 0.45) + 0.012 * Math.sin(x * 1.3);
}
var xs = [];
for (var j = 0; j < 8; j++) xs.push(-0.12 - j * 1.72 + 0.25 * Math.sin(j * 2.3));
for (var j = 0; j < xs.length; j++) {
  var x = xs[j],
    w = 0.11 + e.rnd() * 0.07,
    ln = (e.rnd() - 0.5) * 0.05,
    tl = e.rnd(),
    tall = tl < 0.3 ? 0.1 + tl * 0.8 : 0,
    tp = top(x) + 0.02 - tall;
  g.fillStyle = j % 3 == 1 ? "#12161f" : C;
  g.beginPath();
  g.moveTo(x - w / 2 + ln, tp);
  g.lineTo(x + w / 2 + ln, tp + 0.012);
  g.lineTo(x + w / 2, 0.08);
  g.lineTo(x - w / 2, 0.08);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(8,10,14,0.35)";
  g.fillRect(x - w / 2, -0.14, w, 0.22);
  g.strokeStyle = "rgba(165,180,215,0.2)";
  g.lineWidth = 1.2 * e.px;
  g.beginPath();
  g.moveTo(x + w / 2 + ln - 0.006, tp + 0.02);
  g.lineTo(x + w / 2 - 0.006, -0.02);
  g.stroke();
}
g.strokeStyle = "#11141e";
g.lineWidth = 0.045;
g.lineCap = "round";
for (var j = 0; j < xs.length - 1; j++) {
  if (j == 2 || j == 5) continue;
  var a = xs[j],
    b = xs[j + 1];
  g.beginPath();
  if (j % 2) {
    g.moveTo(a, top(a) + 0.2);
    g.lineTo(b, -0.2);
  } else {
    g.moveTo(a, -0.24);
    g.lineTo(b, top(b) + 0.2);
  }
  g.stroke();
}
g.beginPath();
g.moveTo(xs[5], top(xs[5]) + 0.2);
g.lineTo(xs[5] - 0.55, -0.05);
g.stroke();
g.fillStyle = C;
g.beginPath();
for (var x = -13.2; x < 0.05; x += 0.2) g.lineTo(x, top(x));
g.lineTo(0.05, top(0.05));
g.lineTo(0.05, top(0.05) + 0.15);
for (var x = 0.05; x > -13.25; x -= 0.2) g.lineTo(x, top(x) + 0.15);
g.closePath();
g.fill();
g.fillStyle = "#222737";
g.beginPath();
for (var x = -13.2; x < 0.05; x += 0.2) g.lineTo(x, top(x) - 0.075);
g.lineTo(0.05, top(0.05) - 0.075);
g.lineTo(0.05, top(0.05));
for (var x = 0.05; x > -13.25; x -= 0.2) g.lineTo(x, top(x));
g.closePath();
g.fill();
g.strokeStyle = "rgba(8,10,16,0.6)";
g.lineWidth = e.px;
var sx = -13.1;
while (sx < -0.05) {
  var tt = top(sx);
  g.beginPath();
  g.moveTo(sx, tt - 0.075);
  g.lineTo(sx + 0.012, tt);
  g.stroke();
  sx += 0.15 + e.rnd() * 0.1;
}
g.fillStyle = "#0a0c13";
[-5.3, -9.05, -9.3].forEach(function (gx) {
  var tt = top(gx);
  g.beginPath();
  g.moveTo(gx, tt - 0.075);
  g.lineTo(gx + 0.17, top(gx + 0.17) - 0.075);
  g.lineTo(gx + 0.18, top(gx + 0.18) + 0.02);
  g.lineTo(gx + 0.01, tt + 0.02);
  g.closePath();
  g.fill();
});
var hl = g.createLinearGradient(-13, 0, 0, 0);
hl.addColorStop(0, "rgba(170,185,220,0.06)");
hl.addColorStop(1, "rgba(200,210,236,0.45)");
g.strokeStyle = hl;
g.lineWidth = 1.5 * e.px;
g.beginPath();
for (var x = -13.2; x < 0.05; x += 0.2) g.lineTo(x, top(x) - 0.075);
g.stroke();
var fl = 0.86 + 0.09 * Math.sin(t * 7.3) + 0.05 * Math.sin(t * 12.7);
g.globalCompositeOperation = "source-atop";
var rg = g.createRadialGradient(-0.72, -1.12, 0, -0.72, -1.12, 1.7);
rg.addColorStop(0, "rgba(255,165,85," + 0.5 * fl + ")");
rg.addColorStop(0.4, "rgba(255,150,80," + 0.16 * fl + ")");
rg.addColorStop(1, "rgba(255,150,80,0)");
g.fillStyle = rg;
g.fillRect(-2.6, -1.5, 2.9, 1.7);
g.globalCompositeOperation = "source-over";
