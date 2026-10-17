var t = e.t;
for (var i = 0; i < 8; i++) {
  var cx = (e.rnd() - 0.5) * 110;
  var w = 3 + e.rnd() * 9;
  var cy = -0.1 - e.rnd() * 0.35;
  var hh = 0.08 + e.rnd() * 0.14;
  var ph = e.rnd() * 6.283;
  var sp = 0.04 + e.rnd() * 0.05;
  var x = cx - t * sp;
  x = ((((x + 60) % 120) + 120) % 120) - 60;
  var a = 0.07 + 0.05 * Math.sin(t * 0.05 + ph) + 0.03 * Math.sin(t * 0.13 + ph * 2);
  g.save();
  g.translate(x, cy);
  g.scale(w, hh);
  var rg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  rg.addColorStop(0, "rgba(108,118,133," + Math.max(0, a).toFixed(3) + ")");
  rg.addColorStop(1, "rgba(108,118,133,0)");
  g.fillStyle = rg;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
}
