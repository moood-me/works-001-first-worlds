var t = e.t + 23;
var s = t * 1.6 + 1.2 * Math.sin(t * 0.43 + 0.5) + 0.6 * Math.sin(t * 1.17 + 2);
var X = ((((s + 4) % 44) + 44) % 44) - 11.5;
if (X < 12) {
  var R = 0.23;
  var hop = Math.abs(Math.sin(X * 1.6)) * 0.12 * (0.5 + 0.5 * Math.sin(X * 0.5));
  var ang = X / R;
  g.fillStyle = "rgba(26,18,14,0.25)";
  g.beginPath();
  g.ellipse(X - 0.25, 0.02, R * 1.1, R * 0.12, 0, 0, 6.283);
  g.fill();
  g.save();
  g.translate(X, -R - hop);
  g.rotate(ang);
  g.lineCap = "round";
  for (var i = 0; i < 9; i++) {
    var a0 = e.rnd() * 6.283,
      k = 0.5 + e.rnd() * 0.5;
    g.strokeStyle = i % 2 ? "rgba(150,118,78,0.8)" : "rgba(112,88,58,0.85)";
    g.lineWidth = 0.011;
    g.beginPath();
    for (var n = 0; n <= 10; n++) {
      var u = n / 10;
      var aa = a0 + u * 4.2,
        rr = R * k * (0.2 + 0.8 * u);
      var px = Math.cos(aa) * rr,
        py = Math.sin(aa) * rr;
      if (n == 0) g.moveTo(px, py);
      else g.lineTo(px, py);
    }
    g.stroke();
  }
  g.strokeStyle = "rgba(100,78,50,0.9)";
  g.lineWidth = 0.014;
  g.beginPath();
  g.moveTo(0, 0);
  g.quadraticCurveTo(R * 0.8, R * 0.3, R * 1.6, R * 0.1);
  g.stroke();
  g.restore();
  g.strokeStyle = "rgba(255,190,120,0.4)";
  g.lineWidth = e.px * 1.2;
  g.beginPath();
  g.arc(X, -R - hop, R * 0.9, -1.2, 0.2);
  g.stroke();
}
