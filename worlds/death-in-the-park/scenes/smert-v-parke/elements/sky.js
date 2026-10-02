var A = e.aspect,
  hz = 0.5;
var gr = g.createLinearGradient(0, -0.35, 0, hz);
gr.addColorStop(0, "#141a30");
gr.addColorStop(0.5, "#2c2c48");
gr.addColorStop(0.82, "#6a4a58");
gr.addColorStop(1, "#b0705a");
g.fillStyle = gr;
g.fillRect(-0.35, -0.4, A + 0.7, hz + 0.41);
for (var i = 0; i < 90; i++) {
  var x = e.rnd() * (A + 0.7) - 0.35,
    y = -0.35 + e.rnd() * 0.45,
    b = e.rnd();
  g.fillStyle = "rgba(230,230,255," + (0.15 + b * 0.45) + ")";
  g.fillRect(x, y, 0.0012, 0.0012);
}
for (var k = 0; k < 5; k++) {
  var cx = e.rnd() * (A + 0.7) - 0.35,
    cy = 0.22 + e.rnd() * 0.2,
    w = 0.25 + e.rnd() * 0.35;
  g.fillStyle = "rgba(60,50,80,0.35)";
  g.beginPath();
  g.ellipse(cx, cy, w, 0.018 + e.rnd() * 0.015, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "rgba(200,130,110,0.12)";
  g.beginPath();
  g.ellipse(cx, cy + 0.008, w * 0.8, 0.006, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = "#1d1a24";
g.fillRect(-0.35, hz, A + 0.7, 1.3 - hz);
