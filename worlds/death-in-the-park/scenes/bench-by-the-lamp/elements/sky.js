var A = e.aspect,
  hz = 0.45;
var gr = g.createLinearGradient(0, -0.35, 0, hz);
gr.addColorStop(0, "#090d22");
gr.addColorStop(0.35, "#121a38");
gr.addColorStop(0.7, "#25305a");
gr.addColorStop(0.92, "#414b78");
gr.addColorStop(1, "#5e5f86");
g.fillStyle = gr;
g.fillRect(-0.1, -0.4, A + 0.2, hz + 0.41);
for (var i = 0; i < 60; i++) {
  var x = e.rnd() * A,
    y = -0.35 + e.rnd() * 0.5,
    b = e.rnd();
  var a = (0.1 + b * 0.4) * Math.max(0, 1 - Math.max(0, y) / 0.2);
  g.fillStyle = "rgba(220,226,255," + a + ")";
  g.fillRect(x, y, 0.0012, 0.0012);
}
for (var k = 0; k < 4; k++) {
  var cx = e.rnd() * A,
    cy = 0.28 + e.rnd() * 0.12,
    w = 0.3 + e.rnd() * 0.4;
  g.fillStyle = "rgba(30,36,64,0.45)";
  g.beginPath();
  g.ellipse(cx, cy, w, 0.012 + e.rnd() * 0.012, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "rgba(150,140,170,0.08)";
  g.beginPath();
  g.ellipse(cx, cy + 0.007, w * 0.8, 0.004, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = "#11141c";
g.fillRect(-0.1, hz, A + 0.2, 1.3 - hz);
