var S = 11;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
function ridge(a, b, c, p, dip) {
  var pts = [];
  for (var i = 0; i <= 350; i++) {
    var x = -1750 + i * 10,
      h =
        a +
        b * Math.sin(x / c + p) +
        b * 0.55 * Math.sin(x / (c * 0.43) + p * 2.3) +
        1.6 * Math.sin(x / 14.5 + p) +
        R() * 1.2;
    h *= 1 - dip * Math.exp(-Math.pow((x - 127) / 70, 2));
    pts.push([x, -Math.max(3, h)]);
  }
  return pts;
}
function path(pts, close) {
  g.beginPath();
  g.moveTo(pts[0][0], pts[0][1]);
  for (var i = 1; i < pts.length - 1; i++) {
    g.quadraticCurveTo(pts[i][0], pts[i][1], (pts[i][0] + pts[i + 1][0]) / 2, (pts[i][1] + pts[i + 1][1]) / 2);
  }
  g.lineTo(pts[pts.length - 1][0], pts[pts.length - 1][1]);
  if (close) {
    g.lineTo(1750, 4);
    g.lineTo(-1750, 4);
    g.closePath();
  }
}
var back = ridge(14, 7, 150, 2.4, 0.5),
  front = ridge(10, 5, 80, 0.9, 0.55);
path(back, true);
var gb = g.createLinearGradient(0, -30, 0, 0);
gb.addColorStop(0, "#8a5a6c");
gb.addColorStop(1, "#a0666c");
g.fillStyle = gb;
g.fill();
path(back, false);
g.strokeStyle = "rgba(255,180,130,0.18)";
g.lineWidth = e.px * 1.2;
g.stroke();
path(front, true);
var gf = g.createLinearGradient(0, -22, 0, 0);
gf.addColorStop(0, "#664563");
gf.addColorStop(1, "#7e5268");
g.fillStyle = gf;
g.fill();
path(front, false);
g.strokeStyle = "rgba(255,170,120,0.14)";
g.stroke();
