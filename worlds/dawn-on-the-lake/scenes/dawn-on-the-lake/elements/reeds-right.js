var t = e.t;
g.lineCap = "round";
for (var i = 0; i < 18; i++) {
  var bx = (e.rnd() - 0.3) * 1.6,
    h = 0.8 + e.rnd() * 0.9,
    ph = e.rnd() * 6.28,
    sw = Math.sin(t * 0.6 + ph) * 0.05 * h,
    lean = (e.rnd() - 0.6) * 0.25;
  g.strokeStyle = "#221f29";
  g.lineWidth = 0.016 + e.rnd() * 0.014;
  g.beginPath();
  g.moveTo(bx, 0.05);
  g.quadraticCurveTo(bx + lean * 0.4, -h * 0.6, bx + lean + sw, -h);
  g.stroke();
}
