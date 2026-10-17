for (var layer = 0; layer < 3; layer++) {
  var c = ["#1a2e42", "#122334", "#0b1826"][layer];
  g.fillStyle = c;
  for (var i = 0; i < 80; i++) {
    var x = -200 + e.rnd() * 400,
      h = 9 + e.rnd() * 12 - layer * 1.5,
      w = 3 + e.rnd() * 4;
    g.fillRect(x - w * 0.08, -h, w * 0.16, h);
    g.beginPath();
    g.ellipse(x, -h, w, h * 0.28, 0, 0, 7);
    g.fill();
    for (var k = 0; k < 3; k++) {
      g.beginPath();
      g.ellipse(x + (e.rnd() - 0.5) * w * 1.4, -h * (0.6 + e.rnd() * 0.35), w * 0.7, h * 0.14, 0, 0, 7);
      g.fill();
    }
  }
}
var mist = g.createLinearGradient(0, -8, 0, 1);
mist.addColorStop(0, "rgba(60,90,120,0)");
mist.addColorStop(1, "rgba(70,100,130,0.5)");
g.fillStyle = mist;
g.fillRect(-200, -8, 400, 9);
