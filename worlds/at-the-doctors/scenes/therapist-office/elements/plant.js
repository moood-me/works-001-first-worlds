var cs = ["#222b1c", "#2b3624", "#34402c"];
g.strokeStyle = "#2a2a20";
g.lineWidth = 0.018;
g.lineCap = "round";
var L = [];
for (var i = 0; i < 26; i++) {
  var lx = (e.rnd() - 0.5) * 1.1,
    ly = -0.6 - e.rnd() * 1.15,
    c = cs[Math.floor(e.rnd() * 3)],
    r = e.rnd() * 3.14;
  L.push([lx, ly, c, r]);
  g.beginPath();
  g.moveTo(lx * 0.15, -0.45);
  g.quadraticCurveTo(lx * 0.3, ly + 0.3, lx, ly);
  g.stroke();
}
L.forEach(function (q) {
  g.fillStyle = q[2];
  g.beginPath();
  g.ellipse(q[0], q[1], 0.13, 0.065, q[3], 0, 6.283);
  g.fill();
  g.fillStyle = "rgba(140,160,185,0.12)";
  g.beginPath();
  g.ellipse(q[0] + 0.03, q[1] - 0.01, 0.07, 0.03, q[3], 0, 6.283);
  g.fill();
});
g.fillStyle = "#3a2e26";
g.beginPath();
g.moveTo(-0.22, -0.46);
g.lineTo(0.22, -0.46);
g.lineTo(0.17, 0);
g.lineTo(-0.17, 0);
g.closePath();
g.fill();
g.fillStyle = "rgba(140,160,185,0.12)";
g.fillRect(0.1, -0.46, 0.1, 0.46);
