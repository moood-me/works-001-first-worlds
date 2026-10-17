var gr = g.createLinearGradient(0, -1.6, 0, 1.6);
gr.addColorStop(0, "#5e574e");
gr.addColorStop(0.5, "#776e62");
gr.addColorStop(1, "#5a544b");
g.fillStyle = gr;
g.fillRect(-35, -1.45, 70, 2.9);
for (var i = 0; i < 6000; i++) {
  var x = (e.rnd() - 0.5) * 70,
    y = (e.rnd() - 0.5) * 2.8;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(40,36,32,0.35)" : "rgba(170,160,145,0.25)";
  g.fillRect(x, y, 0.03, 0.03);
}
var cols = ["#8a5a26", "#a8742e", "#6e2e1e"];
for (var i = 0; i < 260; i++) {
  var x = (e.rnd() - 0.5) * 70,
    y = (e.rnd() - 0.5) * 2.6;
  g.fillStyle = cols[i % 3];
  g.globalAlpha = 0.7;
  g.save();
  g.translate(x, y);
  g.rotate(e.rnd() * 6);
  g.beginPath();
  g.ellipse(0, 0, 0.08, 0.045, 0, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
g.globalAlpha = 1;
g.fillStyle = "#3a3630";
g.fillRect(-35, -1.6, 70, 0.15);
g.fillRect(-35, 1.45, 70, 0.15);
