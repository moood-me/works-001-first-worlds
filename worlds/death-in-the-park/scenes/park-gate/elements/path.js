function shape() {
  g.beginPath();
  g.moveTo(-35, 0.05);
  g.lineTo(3.6, 0.05);
  g.bezierCurveTo(5.0, 0.05, 5.6, -0.4, 5.6, -1.1);
  g.lineTo(5.85, -3.5);
  g.lineTo(7.15, -3.5);
  g.lineTo(7.4, -1.1);
  g.bezierCurveTo(7.4, -0.4, 8.2, 0.05, 9.6, 0.0);
  g.bezierCurveTo(14, -0.2, 22, -1.2, 35, -2.3);
  g.lineTo(35, 0.6);
  g.bezierCurveTo(22, 0.9, 15, 2.95, 9, 2.95);
  g.lineTo(-35, 2.95);
  g.closePath();
}
shape();
var gr = g.createLinearGradient(0, -3.5, 0, 3);
gr.addColorStop(0, "#3e3a38");
gr.addColorStop(0.6, "#55504a");
gr.addColorStop(1, "#46423c");
g.fillStyle = gr;
g.fill();
g.save();
shape();
g.clip();
for (var i = 0; i < 6000; i++) {
  var x = (e.rnd() - 0.5) * 70,
    y = -3.5 + e.rnd() * 6.5;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(30,28,26,0.35)" : "rgba(160,150,140,0.18)";
  g.fillRect(x, y, 0.03, 0.03);
}
for (var i = 0; i < 60; i++) {
  var x = (e.rnd() - 0.5) * 40,
    y = -1 + e.rnd() * 3.8;
  g.fillStyle = "rgba(200,180,150,0.05)";
  g.fillRect(x, y, 1 + e.rnd() * 2, 0.02);
}
var P = [
  [-7.7, 0.7, 1.1, 0.35],
  [-1.2, 0.8, 0.75, 0.25],
  [6.3, -0.7, 0.55, 0.28],
  [2.2, 2.2, 0.9, 0.3],
  [6.7, -2.5, 0.45, 0.2],
  [-4, 2.4, 0.6, 0.2],
];
for (var i = 0; i < P.length; i++) {
  var p = P[i];
  g.fillStyle = "rgba(28,26,34,0.75)";
  g.beginPath();
  g.ellipse(p[0], p[1], p[2], p[3], 0, 0, Math.PI * 2);
  g.fill();
  var r = g.createRadialGradient(p[0], p[1] - p[3] * 0.3, 0, p[0], p[1], p[2]);
  r.addColorStop(0, "rgba(255,190,110,0.32)");
  r.addColorStop(1, "rgba(255,190,110,0)");
  g.fillStyle = r;
  g.beginPath();
  g.ellipse(p[0], p[1], p[2], p[3], 0, 0, Math.PI * 2);
  g.fill();
}
var cols = ["#7a4e22", "#9a682a", "#5e2a1a", "#6a3a1c"];
for (var i = 0; i < 340; i++) {
  var x = (e.rnd() - 0.5) * 60,
    y = -3.5 + e.rnd() * 6.5;
  g.fillStyle = cols[i % 4];
  g.globalAlpha = 0.55 + e.rnd() * 0.35;
  g.save();
  g.translate(x, y);
  g.rotate(e.rnd() * 6);
  g.beginPath();
  g.ellipse(0, 0, 0.08, 0.045, 0, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
g.globalAlpha = 1;
g.restore();
shape();
g.strokeStyle = "#2a2626";
g.lineWidth = 0.12;
g.stroke();
