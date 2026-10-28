var A = e.aspect,
  cx = A / 2,
  sx = cx - 0.078,
  sy = 0.365;
var gr = g.createLinearGradient(0, -0.35, 0, 0.552);
gr.addColorStop(0, "#1a1420");
gr.addColorStop(0.3, "#33233b");
gr.addColorStop(0.55, "#6e3a45");
gr.addColorStop(0.72, "#b85e3c");
gr.addColorStop(0.86, "#e6904f");
gr.addColorStop(0.96, "#ffbe78");
gr.addColorStop(1, "#ffd08e");
g.fillStyle = gr;
g.fillRect(-0.1, -0.4, A + 0.2, 0.952);
var hg = g.createRadialGradient(sx, sy, 0, sx, sy, 0.7);
hg.addColorStop(0, "rgba(255,220,160,0.75)");
hg.addColorStop(0.08, "rgba(255,180,110,0.4)");
hg.addColorStop(0.35, "rgba(240,130,80,0.12)");
hg.addColorStop(1, "rgba(220,110,70,0)");
g.fillStyle = hg;
g.fillRect(-0.1, -0.4, A + 0.2, 0.952);
var d = g.createRadialGradient(sx, sy, 0, sx, sy, 0.04);
d.addColorStop(0, "#fff4d8");
d.addColorStop(0.6, "#ffd490");
d.addColorStop(1, "rgba(255,170,90,0)");
g.fillStyle = d;
g.beginPath();
g.arc(sx, sy, 0.04, 0, 6.283);
g.fill();
var lg = g.createLinearGradient(0, 0.55, 0, 1.25);
lg.addColorStop(0, "#b07448");
lg.addColorStop(0.03, "#7c5236");
lg.addColorStop(0.15, "#5a3e2a");
lg.addColorStop(1, "#3a291c");
g.fillStyle = lg;
g.fillRect(-0.1, 0.55, A + 0.2, 0.7);
g.fillStyle = "#8e5e46";
g.beginPath();
g.moveTo(-0.1, 0.556);
for (var x = -0.1; x <= A + 0.1; x += 0.01)
  g.lineTo(x, 0.545 - 0.004 * Math.sin(x * 5.1 + 1) - 0.002 * Math.sin(x * 17));
g.lineTo(A + 0.1, 0.556);
g.closePath();
g.fill();
g.save();
g.translate(sx, 0.55);
g.scale(0.6, 0.03);
var hz = g.createRadialGradient(0, 0, 0, 0, 0, 1);
hz.addColorStop(0, "rgba(255,205,145,0.6)");
hz.addColorStop(1, "rgba(255,180,120,0)");
g.fillStyle = hz;
g.beginPath();
g.arc(0, 0, 1, 0, 6.283);
g.fill();
g.restore();
g.strokeStyle = "rgba(255,206,150,0.55)";
g.lineWidth = 0.0012;
g.beginPath();
g.moveTo(-0.1, 0.588);
g.lineTo(A + 0.1, 0.588);
g.moveTo(-0.1, 0.603);
g.lineTo(A + 0.1, 0.603);
g.stroke();
for (var i = 0; i < 140; i++) {
  var x = -0.05 + e.rnd() * (A + 0.1),
    y = 0.56 + Math.pow(e.rnd(), 1.5) * 0.3,
    h = (0.004 + e.rnd() * 0.01) * (1 + (y - 0.55) * 8);
  g.strokeStyle = "rgba(40,28,20,0.55)";
  g.lineWidth = 0.0012;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + h * 0.3, y - h);
  g.stroke();
  g.strokeStyle = "rgba(255,190,120,0.35)";
  g.lineWidth = 0.0006;
  g.beginPath();
  g.moveTo(x + h * 0.15, y - h * 0.5);
  g.lineTo(x + h * 0.3, y - h);
  g.stroke();
}
