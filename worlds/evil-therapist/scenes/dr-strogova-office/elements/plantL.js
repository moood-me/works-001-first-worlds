g.fillStyle = "rgba(60,85,72,0.22)";
g.beginPath();
g.ellipse(0, 0, 0.2, 0.03, 0, 0, 6.283);
g.fill();
[-3, 3, -2, 2, -1, 1, 0].forEach(function (i) {
  var a = Math.abs(i),
    bx = i * 0.022,
    tx = i * 0.055,
    ty = -0.95 + a * 0.09;
  g.fillStyle = a % 2 ? "#4d6b5b" : "#5a7a68";
  g.beginPath();
  g.moveTo(bx - 0.022, -0.28);
  g.lineTo(tx - 0.013, ty + 0.12);
  g.lineTo(tx, ty);
  g.lineTo(tx + 0.013, ty + 0.12);
  g.lineTo(bx + 0.022, -0.28);
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(200,225,205,0.22)";
  g.lineWidth = 0.004;
  g.beginPath();
  g.moveTo(bx, -0.3);
  g.lineTo(tx, ty + 0.06);
  g.stroke();
});
var pg = g.createLinearGradient(-0.14, 0, 0.14, 0);
pg.addColorStop(0, "#f1f5f2");
pg.addColorStop(1, "#c9d3cd");
g.fillStyle = pg;
g.beginPath();
g.moveTo(-0.14, -0.3);
g.lineTo(0.14, -0.3);
g.lineTo(0.11, 0);
g.lineTo(-0.11, 0);
g.closePath();
g.fill();
g.fillStyle = "#d6ded9";
g.fillRect(-0.145, -0.31, 0.29, 0.03);
