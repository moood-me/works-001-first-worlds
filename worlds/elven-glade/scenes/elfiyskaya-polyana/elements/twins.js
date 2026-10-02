function tree(x, h, w, c) {
  var tr = g.createLinearGradient(x - w, 0, x + w, 0);
  tr.addColorStop(0, "#0b0f14");
  tr.addColorStop(0.6, "#232a32");
  tr.addColorStop(1, "#11161c");
  g.fillStyle = tr;
  g.beginPath();
  g.moveTo(x - w * 1.8, 0.3);
  g.quadraticCurveTo(x - w, -2, x - w * 0.8, -h);
  g.lineTo(x + w * 0.8, -h);
  g.quadraticCurveTo(x + w, -2, x + w * 1.8, 0.3);
  g.fill();
  g.fillStyle = c;
  for (var i = 0; i < 18; i++) {
    g.beginPath();
    g.ellipse(x + (e.rnd() - 0.5) * w * 7, -h - e.rnd() * 4, 1.8 + e.rnd() * 1.5, 1.1 + e.rnd() * 0.8, 0, 0, 7);
    g.fill();
  }
}
tree(-2.5, 20, 1.1, "#11222a");
tree(2.6, 22, 1.3, "#0e1d24");
g.strokeStyle = "#2b241c";
g.lineWidth = 0.09;
g.beginPath();
g.moveTo(-2, -12);
g.quadraticCurveTo(0, -11.2, 2, -12.4);
g.stroke();
g.strokeStyle = "rgba(200,220,255,0.25)";
g.lineWidth = 0.02;
g.beginPath();
for (var x = -1.8; x < 1.9; x += 0.4) {
  g.moveTo(x, -11.9 + Math.pow(x / 2, 2) * 0.4);
  g.lineTo(x, -12.5);
}
g.stroke();
e.light(-2, -12.2, 1.5, "#a8d8ff", 0.5);
e.light(2.1, -12.6, 1.5, "#a8d8ff", 0.5);
