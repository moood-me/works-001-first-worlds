var t = e.t,
  S = e.state,
  w = S.wind_strength == null ? 0.6 : S.wind_strength;
var B = [
  [-2.2, -3.3],
  [1.3, -4.4],
  [2.8, -2.0],
];
for (var i = 0; i < 3; i++) {
  var p1 = e.rnd() * 6.283,
    p2 = e.rnd() * 6.283,
    sc = 0.85 + e.rnd() * 0.3;
  var x = B[i][0] + Math.sin(t * 0.11 + p1) * 1.0 + Math.sin(t * 0.27 + p2) * 0.4;
  var y =
    B[i][1] +
    Math.sin(t * 0.17 + p2) * 0.5 +
    Math.sin(t * 0.6 + p1) * 0.08 +
    w * Math.sin(t * 1.9 + p1) * Math.sin(t * 0.7 + p2) * 0.2;
  var tilt = Math.sin(t * 0.5 + p1) * 0.12 + w * Math.sin(t * 2.1 + p2) * 0.08;
  var fc = (t * 0.07 + p1 / 6.283) % 1;
  var flap = fc < 0.05 ? Math.sin((fc / 0.05) * Math.PI * 4) * 0.5 : 0;
  var bd = 0.22 + flap + Math.sin(t * 1.3 + p2) * 0.04 * (0.5 + w);
  g.save();
  g.translate(x, y);
  g.rotate(tilt);
  g.scale(sc, sc);
  for (var sd = -1; sd <= 1; sd += 2) {
    g.fillStyle = "#a6a5b8";
    g.beginPath();
    g.moveTo(0, -0.02);
    g.quadraticCurveTo(sd * 0.16, -0.16 - bd * 0.3, sd * 0.32, -0.1 - bd * 0.28);
    g.quadraticCurveTo(sd * 0.5, -0.06 - bd * 0.12, sd * 0.66, 0.05 - bd * 0.05);
    g.quadraticCurveTo(sd * 0.46, -0.01, sd * 0.3, -0.02);
    g.quadraticCurveTo(sd * 0.14, 0.03, 0, 0.04);
    g.closePath();
    g.fill();
    g.fillStyle = "#262636";
    g.beginPath();
    g.moveTo(sd * 0.55, -0.02 - bd * 0.09);
    g.quadraticCurveTo(sd * 0.62, -bd * 0.07, sd * 0.66, 0.05 - bd * 0.05);
    g.lineTo(sd * 0.52, -bd * 0.02);
    g.closePath();
    g.fill();
    g.strokeStyle = "rgba(228,200,190,0.35)";
    g.lineWidth = 0.02;
    g.beginPath();
    g.moveTo(0, -0.02);
    g.quadraticCurveTo(sd * 0.16, -0.16 - bd * 0.3, sd * 0.32, -0.1 - bd * 0.28);
    g.stroke();
  }
  g.fillStyle = "#bdbccb";
  g.beginPath();
  g.ellipse(-0.02, 0, 0.16, 0.045, 0, 0, 6.283);
  g.fill();
  g.beginPath();
  g.arc(-0.15, -0.02, 0.04, 0, 6.283);
  g.fill();
  g.restore();
}
