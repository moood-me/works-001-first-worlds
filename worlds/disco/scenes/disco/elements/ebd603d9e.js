var T = Math.PI * 2;
var gr = g.createLinearGradient(0, -1.7, 0, 9.6);
gr.addColorStop(0, "#7c2a7a");
gr.addColorStop(0.03, "#3d1654");
gr.addColorStop(0.22, "#25103b");
gr.addColorStop(1, "#11071c");
g.fillStyle = gr;
g.fillRect(-70, -1.72, 140, 11.4);
g.globalCompositeOperation = "lighter";
g.save();
g.translate(0, -1.55);
g.scale(1, 0.05);
var rg = g.createRadialGradient(0, 0, 0, 0, 0, 40);
rg.addColorStop(0, "rgba(255,63,164,0.28)");
rg.addColorStop(1, "rgba(255,63,164,0)");
g.fillStyle = rg;
g.beginPath();
g.arc(0, 0, 40, 0, T);
g.fill();
g.restore();
g.globalCompositeOperation = "source-over";
g.strokeStyle = "rgba(180,90,220,0.07)";
g.lineWidth = e.px;
g.beginPath();
for (var X = -60; X <= 60; X += 3.5) {
  g.moveTo(0, -1.7);
  g.lineTo((X * 11.3) / 1.7, 9.6);
}
g.stroke();
