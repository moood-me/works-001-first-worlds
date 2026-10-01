var W = e.aspect;
var gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#141a36");
gr.addColorStop(0.3, "#2c3058");
gr.addColorStop(0.43, "#6b4f6a");
gr.addColorStop(0.475, "#c98568");
gr.addColorStop(0.5, "#4a3a50");
gr.addColorStop(1, "#120f18");
g.fillStyle = gr;
g.fillRect(-0.2, -0.35, W + 0.4, 1.6);
g.fillStyle = "#f3e6d0";
for (var i = 0; i < 40; i++) {
  var x = e.rnd() * W,
    y = -0.35 + e.rnd() * 0.5;
  g.globalAlpha = 0.2 + e.rnd() * 0.4;
  g.beginPath();
  g.arc(x, y, 0.0012 + e.rnd() * 0.001, 0, 6.283);
  g.fill();
}
for (var j = 0; j < 260; j++) {
  var x2 = e.rnd() * W,
    y2 = 0.43 + Math.pow(e.rnd(), 1.5) * 0.4;
  g.globalAlpha = 0.25 + e.rnd() * 0.5;
  g.fillStyle = e.rnd() < 0.8 ? "#ffb870" : "#d8e0ff";
  g.fillRect(x2, y2, 0.0016, 0.0016);
}
g.globalAlpha = 1;
