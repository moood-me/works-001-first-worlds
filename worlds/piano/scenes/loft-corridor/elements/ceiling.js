var L = e.state.sconceLit == null ? 1 : e.state.sconceLit;
g.fillStyle = "#140f0c";
g.fillRect(-10, -1.25, 20, 2.5);
g.fillStyle = "#1d1510";
for (var x = -10; x < 10; x += 0.7) {
  g.fillRect(x, -1.25, 0.14, 2.5);
}
var w = g.createRadialGradient(-0.4, -1.15, 0, -0.4, -1.15, 1.6);
w.addColorStop(0, "rgba(255,170,100," + 0.16 * L + ")");
w.addColorStop(1, "rgba(255,170,100,0)");
g.fillStyle = w;
g.fillRect(-2.5, -1.25, 4.2, 2.5);
