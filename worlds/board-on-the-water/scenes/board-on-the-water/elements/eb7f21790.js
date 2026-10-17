var X = 6,
  D = 18,
  H = 2.5,
  W = 1;
g.translate(X, 0);
var C = W
  ? ["#fff2da", "#efd3ae", "#c6a48b", "#8b6f78", "#5c4957"]
  : ["#f4b47e", "#6b4639", "#35252b", "#241a21", "#19131b"];
function sm(p, cl) {
  var n = p.length,
    i,
    a,
    b;
  g.beginPath();
  if (cl) {
    g.moveTo((p[n - 1][0] + p[0][0]) / 2, (p[n - 1][1] + p[0][1]) / 2);
    for (i = 0; i < n; i++) {
      a = p[i];
      b = p[(i + 1) % n];
      g.quadraticCurveTo(a[0], a[1], (a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
    }
    g.closePath();
  } else {
    g.moveTo(p[0][0], p[0][1]);
    for (i = 1; i < n - 1; i++) {
      g.quadraticCurveTo(p[i][0], p[i][1], (p[i][0] + p[i + 1][0]) / 2, (p[i][1] + p[i + 1][1]) / 2);
    }
    g.lineTo(p[n - 1][0], p[n - 1][1]);
  }
}
function out(pr) {
  var p = [],
    i;
  for (i = 0; i < pr.length; i++) p.push([pr[i][1] * H, -pr[i][0] * H]);
  for (i = pr.length - 1; i >= 0; i--) p.push([-pr[i][1] * H, -pr[i][0] * H]);
  p.push([0, (pr[0][1] * H * 1.7) / D]);
  return p;
}
function lft(pr) {
  var p = [],
    i;
  for (i = 0; i < pr.length; i++) p.push([-pr[i][1] * H, -pr[i][0] * H]);
  return p;
}
function fg(R) {
  var q = g.createLinearGradient(-R, 0, R, 0);
  q.addColorStop(0, C[0]);
  q.addColorStop(0.12, C[1]);
  q.addColorStop(0.4, C[2]);
  q.addColorStop(0.75, C[3]);
  q.addColorStop(1, C[4]);
  return q;
}
function rim(p, w) {
  g.save();
  g.lineWidth = w * e.px;
  g.strokeStyle = C[0];
  g.globalAlpha = 0.8;
  g.lineJoin = "round";
  g.lineCap = "round";
  sm(p, false);
  g.stroke();
  g.restore();
}
function ring(h, w) {
  var s = (w * (1.7 - h)) / D,
    a0 = s > 0 ? 0 : Math.PI;
  s = Math.max(Math.abs(s), 0.002);
  g.save();
  g.lineWidth = 2 * e.px;
  g.strokeStyle = "rgba(20,12,22,0.35)";
  g.beginPath();
  g.ellipse(0, -h, w, s, 0, a0, a0 + Math.PI);
  g.stroke();
  g.strokeStyle = W ? "rgba(255,238,215,0.3)" : "rgba(240,170,120,0.2)";
  g.beginPath();
  g.ellipse(0, -h - 2.5 * e.px, w * 0.98, s, 0, a0, a0 + Math.PI);
  g.stroke();
  g.restore();
}
function base(R) {
  g.fillStyle = "rgba(26,17,32,0.4)";
  g.beginPath();
  g.ellipse(0.12 * R, 0.01, R * 1.3, ((R * 1.7) / D) * 1.4 + 0.02, 0, 0, 2 * Math.PI);
  g.fill();
}
function body(pr) {
  var R = 0,
    i;
  for (i = 0; i < pr.length; i++) R = Math.max(R, pr[i][1] * H);
  sm(out(pr), true);
  g.fillStyle = fg(R);
  g.fill();
  rim(lft(pr), 2.5);
}
function ball(y, r) {
  g.beginPath();
  g.arc(0, -y, r, 0, 2 * Math.PI);
  g.fillStyle = fg(r);
  g.fill();
  g.save();
  g.strokeStyle = C[0];
  g.globalAlpha = 0.8;
  g.lineWidth = 2.5 * e.px;
  g.beginPath();
  g.arc(0, -y, r, 0.6 * Math.PI, 1.45 * Math.PI);
  g.stroke();
  g.restore();
}
var pr = [
  [0, 0.26],
  [0.06, 0.26],
  [0.09, 0.22],
  [0.12, 0.23],
  [0.16, 0.18],
  [0.22, 0.13],
  [0.4, 0.09],
  [0.55, 0.075],
  [0.59, 0.13],
  [0.63, 0.13],
  [0.66, 0.08],
  [0.69, 0.075],
  [0.73, 0.1],
  [0.79, 0.115],
  [0.85, 0.1],
  [0.9, 0.065],
  [0.94, 0.025],
  [0.955, 0],
];
base(0.26 * H);
body(pr);
ring(0.06 * H, 0.26 * H);
ring(0.12 * H, 0.23 * H);
ring(0.59 * H, 0.13 * H);
ring(0.63 * H, 0.13 * H);
g.save();
g.strokeStyle = C[4];
g.lineWidth = 0.02 * H;
g.lineCap = "round";
g.beginPath();
g.moveTo(0.09 * H, -0.87 * H);
g.lineTo(-0.02 * H, -0.75 * H);
g.stroke();
g.strokeStyle = C[1];
g.globalAlpha = 0.5;
g.lineWidth = 1.5 * e.px;
g.beginPath();
g.moveTo(0.08 * H, -0.885 * H);
g.lineTo(-0.03 * H, -0.765 * H);
g.stroke();
g.restore();
ball(0.975 * H, 0.03 * H);
