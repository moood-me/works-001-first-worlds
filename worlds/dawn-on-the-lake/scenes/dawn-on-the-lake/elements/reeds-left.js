var t = e.t;
g.lineCap = "round";
for (var i = 0; i < 26; i++) {
  var bx = (e.rnd() - 0.6) * 1.8,
    h = 1.1 + e.rnd() * 1.1,
    ph = e.rnd() * 6.28,
    sw = Math.sin(t * 0.7 + ph) * 0.05 * h,
    lean = (e.rnd() - 0.4) * 0.25;
  g.strokeStyle = i % 3 ? "#1d1a24" : "#26222e";
  g.lineWidth = 0.018 + e.rnd() * 0.016;
  g.beginPath();
  g.moveTo(bx, 0.05);
  g.quadraticCurveTo(bx + lean * 0.4, -h * 0.6, bx + lean + sw, -h);
  g.stroke();
  if (e.rnd() < 0.3) {
    g.fillStyle = "#2b2228";
    g.save();
    g.translate(bx + lean * 0.92 + sw * 0.9, -h + 0.16);
    g.rotate(lean * 0.4);
    g.beginPath();
    g.ellipse(0, 0, 0.035, 0.13, 0, 0, 6.283);
    g.fill();
    g.restore();
  }
}
