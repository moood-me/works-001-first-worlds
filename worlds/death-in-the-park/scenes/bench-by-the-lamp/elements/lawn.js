var S = e.state || {},
  L = S.lamp == null ? 0.75 : S.lamp;
var gr = g.createLinearGradient(0, -46, 0, 46);
gr.addColorStop(0, "#161b26");
gr.addColorStop(0.7, "#192024");
gr.addColorStop(1, "#1d2520");
g.fillStyle = gr;
g.fillRect(-130, -46, 260, 92);
for (var i = 0; i < 4000; i++) {
  var x = (e.rnd() - 0.5) * 40,
    y = 30 + e.rnd() * 16;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(40,52,46,0.5)" : "rgba(12,15,18,0.5)";
  g.fillRect(x, y, 0.04, 0.12);
}
var cols = ["#6a4422", "#875a26", "#4e3220", "#5e2a1c"];
for (var i = 0; i < 1600; i++) {
  var x = (e.rnd() - 0.5) * 34,
    y = 33 + e.rnd() * 13;
  g.fillStyle = cols[i % 4];
  g.globalAlpha = 0.35 + e.rnd() * 0.35;
  g.save();
  g.translate(x, y);
  g.rotate(e.rnd() * 6);
  g.beginPath();
  g.ellipse(0, 0, 0.07, 0.04, 0, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
g.globalAlpha = 1;
g.save();
g.translate(-1.15, 40.3);
var p = g.createRadialGradient(0, 0, 0, 0, 0, 4.2);
p.addColorStop(0, "rgba(255,195,125," + 0.32 * L + ")");
p.addColorStop(1, "rgba(255,195,125,0)");
g.fillStyle = p;
g.beginPath();
g.arc(0, 0, 4.2, 0, Math.PI * 2);
g.fill();
g.restore();
g.globalCompositeOperation = "destination-out";
var f = g.createLinearGradient(0, -46, 0, -26);
f.addColorStop(0, "rgba(0,0,0,1)");
f.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = f;
g.fillRect(-130, -46, 260, 20);
g.globalCompositeOperation = "source-over";
