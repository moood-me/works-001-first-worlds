var W = 800,
  rid = [];
g.beginPath();
g.moveTo(-W, 6);
for (var x = -W; x <= W; x += 10) {
  var h =
    38 + 18 * Math.sin(x * 0.006 + 1.3) + 12 * Math.sin(x * 0.017 + 0.4) + 6 * Math.sin(x * 0.041 + 2) + e.rnd() * 2.5;
  if (Math.abs(x) < 120) h -= 14 * (1 - Math.abs(x) / 120);
  rid.push(x, -h);
  g.lineTo(x, -h);
}
g.lineTo(W, 6);
g.closePath();
var gr = g.createLinearGradient(0, -80, 0, 0);
gr.addColorStop(0, "#4a2573");
gr.addColorStop(1, "#2c1648");
g.fillStyle = gr;
g.fill();
g.strokeStyle = "#ff6fc4";
g.globalAlpha = 0.3;
g.lineWidth = e.px * 1.5;
g.beginPath();
g.moveTo(rid[0], rid[1]);
for (var i = 2; i < rid.length; i += 2) g.lineTo(rid[i], rid[i + 1]);
g.stroke();
g.globalAlpha = 1;
var mg = g.createLinearGradient(0, -28, 0, 6);
mg.addColorStop(0, "rgba(255,79,166,0)");
mg.addColorStop(1, "rgba(255,79,166,0.35)");
g.fillStyle = mg;
g.fillRect(-W, -28, 2 * W, 34);
