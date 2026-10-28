var cl = [
  [-520, 170],
  [-300, 80],
  [-130, 50],
  [70, 150],
  [280, 60],
];
for (var c = 0; c < cl.length; c++) {
  var cx = cl[c][0],
    w = cl[c][1];
  var n = Math.floor(w / 5);
  for (var k = 0; k < n; k++) {
    var tx = cx + (e.rnd() - 0.5) * w,
      th = 11 + e.rnd() * 13,
      crown = th * (0.22 + e.rnd() * 0.14);
    g.strokeStyle = "#2f362c";
    g.lineWidth = 0.6;
    g.beginPath();
    g.moveTo(tx, 0);
    g.lineTo(tx, -th * 0.5);
    g.stroke();
    for (var j = 0; j < 5; j++) {
      var ox = (e.rnd() - 0.5) * crown * 1.2,
        oy = -th + crown + (e.rnd() - 0.3) * crown * 1.3,
        rr = crown * (0.5 + e.rnd() * 0.4);
      g.fillStyle = "#38443a";
      g.beginPath();
      g.arc(tx + ox, oy, rr, 0, 6.2832);
      g.fill();
      g.fillStyle = "rgba(150,146,100,0.45)";
      g.beginPath();
      g.arc(tx + ox - rr * 0.35, oy - rr * 0.25, rr * 0.55, 0, 6.2832);
      g.fill();
    }
  }
}
var b = g.createLinearGradient(0, -6, 0, 2);
b.addColorStop(0, "rgba(236,228,226,0)");
b.addColorStop(1, "rgba(236,228,226,0.5)");
g.fillStyle = b;
g.fillRect(-800, -6, 1600, 8);
