g.fillStyle = "#3a3540";
g.fillRect(-100, -2.3, 200, 4.6);
for (var x = -100; x < 100; x += 0.9) {
  g.fillStyle = "rgba(20,18,26,0.35)";
  g.fillRect(x, -2.3, 0.025, 4.6);
}
for (var y = -2.3; y < 2.3; y += 0.6) {
  g.fillStyle = "rgba(20,18,26,0.28)";
  g.fillRect(-100, y, 200, 0.02);
}
var gr = g.createLinearGradient(0, -2.3, 0, 2.3);
gr.addColorStop(0, "rgba(255,210,150,0.10)");
gr.addColorStop(1, "rgba(0,0,0,0.25)");
g.fillStyle = gr;
g.fillRect(-100, -2.3, 200, 4.6);
