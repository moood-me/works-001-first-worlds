var P = [
  [-600, -11],
  [-520, -14],
  [-430, -17],
  [-340, -18],
  [-260, -15],
  [-190, -16],
  [-110, -13],
  [-30, -11],
  [50, -8],
  [130, -6],
  [200, -3.5],
  [260, -1.5],
  [300, -0.3],
];
g.beginPath();
g.moveTo(-600, 3);
for (var i = 0; i < P.length; i++) g.lineTo(P[i][0], P[i][1]);
g.lineTo(300, 3);
g.closePath();
g.fillStyle = "#34374f";
g.fill();
g.strokeStyle = "rgba(200,150,140,0.2)";
g.lineWidth = e.px * 1.1;
g.beginPath();
g.moveTo(P[0][0], P[0][1]);
for (var i = 1; i < P.length; i++) g.lineTo(P[i][0], P[i][1]);
g.stroke();
