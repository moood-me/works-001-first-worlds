var A = e.aspect;
function H(x) {
  return Math.max(
    0.001,
    0.007 + 0.004 * Math.sin(x * 4.3 + 1.4) + 0.0025 * Math.sin(x * 11.3 + 0.2) + 0.0008 * Math.sin(x * 37 + 2),
  );
}
var gr = g.createLinearGradient(0, 0.625, 0, 0.66);
gr.addColorStop(0, "#7e5646");
gr.addColorStop(1, "#8f6448");
g.fillStyle = gr;
g.beginPath();
g.moveTo(-0.1, 0.7);
for (var x = -0.1; x <= A + 0.1; x += 0.003) g.lineTo(x, 0.642 - H(x));
g.lineTo(A + 0.1, 0.7);
g.closePath();
g.fill();
g.strokeStyle = "rgba(60,40,32,0.55)";
g.lineWidth = 0.0011;
for (var i = 0; i < 60; i++) {
  var x = -0.05 + e.rnd() * (A + 0.1);
  var y = 0.642 - H(x);
  var bh = 0.002 + e.rnd() * 0.005;
  g.beginPath();
  g.moveTo(x, y + 0.001);
  g.lineTo(x + (e.rnd() - 0.5) * 0.001, y - bh);
  g.stroke();
}
var sx = 0.76 * A;
g.lineWidth = 0.0012;
for (var x = sx - 0.3; x < sx + 0.3; x += 0.003) {
  var a = Math.exp(-Math.pow((x - sx) / 0.15, 2));
  if (a < 0.05) continue;
  g.strokeStyle = "rgba(255,196,130," + (0.45 * a).toFixed(3) + ")";
  g.beginPath();
  g.moveTo(x, 0.642 - H(x));
  g.lineTo(x + 0.003, 0.642 - H(x + 0.003));
  g.stroke();
}
