var A = e.aspect,
  sx = 0.76 * A;
function h(x) {
  return (
    0.016 +
    0.008 * Math.sin(x * 3.1 + 0.7) +
    0.005 * Math.sin(x * 7.9 + 2.1) +
    0.0025 * Math.sin(x * 19 + 0.3) +
    0.001 * Math.sin(x * 53 + 1.2) +
    0.01 * Math.exp(-Math.pow((x - sx - 0.06) / 0.1, 2))
  );
}
var gr = g.createLinearGradient(0, 0.585, 0, 0.645);
gr.addColorStop(0, "#9a6660");
gr.addColorStop(1, "#b37d66");
g.fillStyle = gr;
g.beginPath();
g.moveTo(-0.1, 0.7);
for (var x = -0.1; x <= A + 0.1; x += 0.004) g.lineTo(x, 0.638 - h(x));
g.lineTo(A + 0.1, 0.7);
g.closePath();
g.fill();
g.lineWidth = 0.0016;
for (var x = -0.1; x < A + 0.1; x += 0.004) {
  var a = Math.exp(-Math.pow((x - sx) / 0.22, 2));
  if (a < 0.03) continue;
  g.strokeStyle = "rgba(255,200,135," + (0.65 * a).toFixed(3) + ")";
  g.beginPath();
  g.moveTo(x, 0.638 - h(x));
  g.lineTo(x + 0.004, 0.638 - h(x + 0.004));
  g.stroke();
}
g.save();
g.translate(sx, 0.632);
g.scale(0.35, 0.02);
var sg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
sg.addColorStop(0, "rgba(255,190,120,0.35)");
sg.addColorStop(1, "rgba(255,170,110,0)");
g.fillStyle = sg;
g.beginPath();
g.arc(0, 0, 1, 0, 6.283);
g.fill();
g.restore();
