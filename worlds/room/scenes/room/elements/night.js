var A = e.aspect;
var s = g.createLinearGradient(0, -0.35, 0, 0.5);
s.addColorStop(0, "#070a18");
s.addColorStop(1, "#1c2440");
g.fillStyle = s;
g.fillRect(-0.05, -0.35, A + 0.1, 1.6);
for (var i = 0; i < 400; i++) {
  g.globalAlpha = 0.2 + e.rnd() * 0.6;
  g.fillStyle = "#dfe6ff";
  g.fillRect(e.rnd() * A, -0.35 + e.rnd() * 0.8, e.px * 1.3, e.px * 1.3);
}
g.globalAlpha = 1;
g.fillStyle = "#0b0f1c";
g.beginPath();
g.moveTo(-0.05, 0.6);
for (var x = -0.05; x <= A + 0.05; x += 0.01) {
  g.lineTo(x, 0.5 - 0.04 - 0.03 * Math.abs(Math.sin(x * 9)) - 0.02 * Math.sin(x * 31));
}
g.lineTo(A + 0.05, 0.6);
g.fill();
for (var j = 0; j < 60; j++) {
  g.fillStyle = "rgba(255,210,140,0.8)";
  g.fillRect(e.rnd() * A, 0.47 + e.rnd() * 0.02, e.px * 2, e.px * 2);
}
