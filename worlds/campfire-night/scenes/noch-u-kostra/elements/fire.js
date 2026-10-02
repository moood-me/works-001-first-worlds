var t = e.t;
g.strokeStyle = "#2a1a10";
g.lineWidth = 0.12;
g.lineCap = "round";
g.beginPath();
g.moveTo(-0.6, 0);
g.lineTo(0.5, -0.15);
g.moveTo(0.6, 0);
g.lineTo(-0.5, -0.15);
g.moveTo(-0.1, 0.02);
g.lineTo(0.15, -0.25);
g.stroke();
for (var i = 0; i < 5; i++) {
  var ph = i * 1.7,
    h = 0.7 + 0.35 * Math.sin(t * 7 + ph) + 0.15 * Math.sin(t * 13 + ph),
    w = 0.3 - i * 0.04,
    x = (i - 2) * 0.06 + Math.sin(t * 5 + ph) * 0.04;
  g.fillStyle = i < 2 ? "rgba(255,120,40,0.85)" : i < 4 ? "rgba(255,180,70,0.85)" : "rgba(255,240,200,0.9)";
  g.beginPath();
  g.moveTo(x - w, -0.05);
  g.quadraticCurveTo(x - w * 0.6, -h * 0.55, x + Math.sin(t * 4 + ph) * 0.08, -h);
  g.quadraticCurveTo(x + w * 0.6, -h * 0.55, x + w, -0.05);
  g.closePath();
  g.fill();
}
for (var j = 0; j < 10; j++) {
  var p = (t * 0.4 + j * 0.13) % 1;
  g.fillStyle = "rgba(255,190,90," + (1 - p).toFixed(2) + ")";
  g.fillRect(Math.sin(j * 3 + t) * 0.3 * p, -0.8 - p * 1.2, 0.03, 0.03);
}
e.light(0, -0.4, 9, "#ff9a48", 1.1);
