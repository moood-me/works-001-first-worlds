var t = e.t;
for (var i = 0; i < 16; i++) {
  var cx = (e.rnd() - 0.5) * 1200,
    w = 60 + e.rnd() * 160,
    cy = -1 - e.rnd() * 5,
    ph = e.rnd() * 6.28;
  var x = ((((cx + t * 0.6 + 700) % 1400) + 1400) % 1400) - 700;
  var a = 0.12 + 0.06 * Math.sin(t * 0.05 + ph);
  g.save();
  g.translate(x, cy);
  g.scale(w, 2 + e.rnd() * 2);
  var r = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  r.addColorStop(0, "rgba(236,214,206," + a.toFixed(3) + ")");
  r.addColorStop(1, "rgba(236,214,206,0)");
  g.fillStyle = r;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
}
