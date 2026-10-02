g.fillStyle = "#202136";
g.fillRect(-13, -4.5, 26, 9);
var tones = ["#25263c", "#212236", "#272840", "#1f2034"];
for (var x = -13, k = 0; x < 13; x += 1.05, k++) {
  g.fillStyle = tones[k % 4];
  g.fillRect(x, -4.5, 1.0, 9);
}
g.fillStyle = "rgba(8,8,18,0.5)";
for (var x2 = -13; x2 < 13; x2 += 1.05) {
  g.fillRect(x2 + 1.0, -4.5, 0.05, 9);
}
for (var i = 0; i < 1500; i++) {
  var px = -13 + e.rnd() * 26,
    py = -4.5 + e.rnd() * 9;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(150,160,210,0.09)" : "rgba(5,5,12,0.18)";
  g.fillRect(px, py, 0.03, 0.03);
}
var sh = g.createLinearGradient(0, -4.5, 0, 4.5);
sh.addColorStop(0, "rgba(120,120,185,0.16)");
sh.addColorStop(0.45, "rgba(120,120,185,0)");
sh.addColorStop(1, "rgba(6,6,14,0.5)");
g.fillStyle = sh;
g.fillRect(-13, -4.5, 26, 9);
var hg = g.createLinearGradient(-13, 0, 13, 0);
hg.addColorStop(0, "rgba(6,6,14,0.55)");
hg.addColorStop(0.3, "rgba(6,6,14,0)");
hg.addColorStop(0.7, "rgba(6,6,14,0)");
hg.addColorStop(1, "rgba(6,6,14,0.55)");
g.fillStyle = hg;
g.fillRect(-13, -4.5, 26, 9);
g.fillStyle = "rgba(86,94,148,0.32)";
g.beginPath();
g.moveTo(1.6, -1.9);
g.bezierCurveTo(2.4, -2.2, 3.6, -2.0, 3.7, -1.5);
g.bezierCurveTo(3.8, -1.0, 2.8, -0.8, 2.2, -0.95);
g.bezierCurveTo(1.5, -1.1, 1.1, -1.6, 1.6, -1.9);
g.fill();
g.fillStyle = "rgba(200,145,150,0.3)";
g.beginPath();
g.ellipse(2.5, -1.75, 0.7, 0.06, 0, 0, 6.283);
g.fill();
g.fillStyle = "rgba(225,200,220,0.18)";
g.fillRect(1.9, -1.45, 1.3, 0.02);
