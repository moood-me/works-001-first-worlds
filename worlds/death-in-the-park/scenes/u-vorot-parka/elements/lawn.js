var gr = g.createLinearGradient(0, -60, 0, 60);
gr.addColorStop(0, "#141614");
gr.addColorStop(1, "#22281e");
g.fillStyle = gr;
g.fillRect(-100, -60, 200, 120);
var cols = ["#6a4020", "#8a5c26", "#4e321a", "#94662a", "#5e2a1c"];
for (var i = 0; i < 3200; i++) {
  var x = (e.rnd() - 0.5) * 80,
    y = 35 + (e.rnd() - 0.5) * 48;
  g.fillStyle = cols[i % 5];
  g.globalAlpha = 0.25 + e.rnd() * 0.4;
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
