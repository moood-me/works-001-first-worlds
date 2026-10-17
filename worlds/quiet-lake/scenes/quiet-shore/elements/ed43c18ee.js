var S = 11;
var st = e.state || {},
  s = Math.max(0, Math.min(1, st.sunset || 0)),
  m = Math.max(0, Math.min(1, st.morning || 0));
function P(h) {
  var n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function C(a, b, c, al) {
  var A = P(a),
    B = P(b),
    D = P(c),
    o = [];
  for (var i = 0; i < 3; i++) {
    var v = A[i] + (B[i] - A[i]) * s;
    o.push(Math.round(v + (D[i] - v) * m));
  }
  return al == null ? "rgb(" + o.join(",") + ")" : "rgba(" + o.join(",") + "," + Math.max(0, al).toFixed(3) + ")";
}
var sw = (1 - m) * (1 - 0.55 * s);
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
gb.addColorStop(0, C("#8a5a6c", "#3c2b45", "#8e99b3"));
gb.addColorStop(1, C("#a0666c", "#47304a", "#a2aac0"));
g.fillStyle = gb;
g.fill();
path(back, false);
g.strokeStyle = "rgba(255,180,130," + (0.18 * sw).toFixed(3) + ")";
g.lineWidth = e.px * 1.2;
g.stroke();
path(front, true);
var gf = g.createLinearGradient(0, -22, 0, 0);
gf.addColorStop(0, C("#664563", "#2a1f37", "#6e7c9b"));
gf.addColorStop(1, C("#7e5268", "#33243f", "#8490aa"));
g.fillStyle = gf;
g.fill();
path(front, false);
g.strokeStyle = "rgba(255,170,120," + (0.14 * sw).toFixed(3) + ")";
g.stroke();
