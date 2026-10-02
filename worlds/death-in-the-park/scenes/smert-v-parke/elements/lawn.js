var gr = g.createLinearGradient(0, -60, 0, 60);
gr.addColorStop(0, "#1a1d1a");
gr.addColorStop(1, "#2a3024");
g.fillStyle = gr;
g.fillRect(-100, -60, 200, 120);
var cols = ["#7a4a22", "#9a6a2a", "#5a3a1e", "#a8742e", "#6e2e1e"];
for (var i = 0; i < 3000; i++) {
  var x = (e.rnd() - 0.5) * 80,
    y = 35 + (e.rnd() - 0.5) * 48;
  g.fillStyle = cols[i % 5];
  g.globalAlpha = 0.3 + e.rnd() * 0.4;
  g.save();
  g.translate(x, y);
  g.rotate(e.rnd() * 6);
  g.beginPath();
  g.ellipse(0, 0, 0.07, 0.04, 0, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
g.globalAlpha = 1;
g.globalCompositeOperation = "destination-out";
var f = g.createLinearGradient(0, -60, 0, -40);
f.addColorStop(0, "rgba(0,0,0,1)");
f.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = f;
g.fillRect(-100, -60, 200, 20);
