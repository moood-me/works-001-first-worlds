var t = e.t + 11;
var s = t * 0.95 + 2.1 * Math.sin(t * 0.29 + 2) + 0.7 * Math.sin(t * 0.77);
var X = ((((s + 30) % 72) + 72) % 72) - 26;
if (X < 26.5) {
  var R = 0.27;
  var hop = Math.abs(Math.sin(X * 1.3)) * 0.1;
  var ang = X / R;
  g.fillStyle = "rgba(26,18,14,0.22)";
  g.beginPath();
  g.ellipse(X - 0.3, 0.02, R * 1.1, R * 0.1, 0, 0, 6.283);
  g.fill();
  g.save();
  g.translate(X, -R * 0.9 - hop);
  g.scale(1.1, 0.9);
  g.rotate(ang);
  g.strokeStyle = "rgba(135,108,72,0.85)";
  g.lineCap = "round";
  for (var i = 0; i < 34; i++) {
    var a = e.rnd() * 6.283,
      r0 = e.rnd() * R * 0.3,
      r1 = R * (0.6 + e.rnd() * 0.4);
    g.lineWidth = 0.01 + e.rnd() * 0.008;
    var mid = r0 + (r1 - r0) * 0.55,
      a2 = a + (e.rnd() - 0.5) * 0.9;
    g.beginPath();
    g.moveTo(Math.cos(a) * r0, Math.sin(a) * r0);
    g.lineTo(Math.cos(a + 0.1) * mid, Math.sin(a + 0.1) * mid);
    g.lineTo(Math.cos(a2) * r1, Math.sin(a2) * r1);
    g.stroke();
  }
  g.restore();
}
