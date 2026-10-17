var gr = g.createRadialGradient(4, -6, 2, 0, 0, 45);
gr.addColorStop(0, "#2c4a3a");
gr.addColorStop(0.5, "#1b3328");
gr.addColorStop(1, "#0e1c18");
g.fillStyle = gr;
g.fillRect(-45, -30, 90, 60);
for (var i = 0; i < 3500; i++) {
  var x = (e.rnd() - 0.5) * 90,
    y = (e.rnd() - 0.5) * 60;
  g.strokeStyle = e.rnd() < 0.5 ? "rgba(80,130,100,0.35)" : "rgba(10,24,18,0.5)";
  g.lineWidth = 0.03;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + (e.rnd() - 0.5) * 0.2, y - 0.2 - e.rnd() * 0.3);
  g.stroke();
}
var mg = g.createRadialGradient(6, -4, 0, 6, -4, 14);
mg.addColorStop(0, "rgba(170,200,240,0.18)");
mg.addColorStop(1, "rgba(170,200,240,0)");
g.fillStyle = mg;
g.fillRect(-10, -20, 32, 32);
g.globalCompositeOperation = "destination-out";
var f = g.createLinearGradient(0, -30, 0, -20);
f.addColorStop(0, "rgba(0,0,0,1)");
f.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = f;
g.fillRect(-45, -30, 90, 10);
