var t = e.t,
  S = e.state.surf_height || 0,
  C = e.state.crash || 0;
function path(P, bot) {
  g.beginPath();
  g.moveTo(P[0][0], bot);
  g.lineTo(P[0][0], P[0][1]);
  for (var k = 1; k < P.length - 1; k++) {
    var q = P[k],
      r = P[k + 1];
    g.quadraticCurveTo(q[0], q[1], (q[0] + r[0]) / 2, (q[1] + r[1]) / 2);
  }
  var L = P[P.length - 1];
  g.lineTo(L[0], L[1]);
  g.lineTo(L[0], bot);
  g.closePath();
}
function rim(P, k0, k1) {
  function m(k) {
    return [(P[k][0] + P[k + 1][0]) / 2, (P[k][1] + P[k + 1][1]) / 2 + 0.018];
  }
  var a = m(k0);
  g.beginPath();
  g.moveTo(a[0], a[1]);
  for (var k = k0 + 1; k <= k1; k++) {
    var b = m(k);
    g.quadraticCurveTo(P[k][0], P[k][1] + 0.018, b[0], b[1]);
  }
  g.stroke();
}
function stone(cx, by, w, h, lean, wm) {
  var n = 10,
    P = [];
  for (var k = 0; k <= n; k++) {
    var an = Math.PI * (1 - k / n),
      r = 0.86 + e.rnd() * 0.26;
    var yy = -Math.pow(Math.max(0, Math.sin(an)), 0.65) * h * r;
    if (k == 0 || k == n) yy = 0.05;
    var xx = cx + Math.cos(an) * w * (0.94 + e.rnd() * 0.12) - ((lean * yy) / h) * w * 0.3;
    P.push([xx, by + yy]);
  }
  var bot = by + 1.8;
  path(P, bot);
  var gr = g.createLinearGradient(0, by - h, 0, by + 0.4);
  gr.addColorStop(0, "#27314a");
  gr.addColorStop(0.3, "#161c2c");
  gr.addColorStop(0.75, "#0b0e17");
  gr.addColorStop(1, "#07090f");
  g.fillStyle = gr;
  g.fill();
  g.save();
  path(P, bot);
  g.clip();
  var sx = cx + w * 0.3,
    sy = by - h * 0.85,
    sr = w * 0.9;
  var sh = g.createRadialGradient(sx, sy, 0, sx, sy, sr);
  sh.addColorStop(0, "rgba(120,140,182,0.22)");
  sh.addColorStop(1, "rgba(120,140,182,0)");
  g.fillStyle = sh;
  g.fillRect(cx - w * 1.5, by - h * 1.6, w * 3, h * 2.2);
  for (var j = 0; j < 16; j++) {
    var k = 1 + Math.floor(e.rnd() * (n - 1));
    var p = P[k],
      dx = P[k + 1][0] - P[k - 1][0],
      dy = P[k + 1][1] - P[k - 1][1],
      ang = Math.atan2(dy, dx);
    var dd = h * (0.07 + e.rnd() * 0.5),
      x = p[0] + (e.rnd() - 0.5) * w * 0.15,
      y = p[1] + dd,
      len = w * (0.05 + e.rnd() * 0.14),
      ph = e.rnd() * 6.283,
      q = e.rnd(),
      q2 = e.rnd();
    var a = (0.07 + 0.15 * q) * (0.65 + 0.35 * Math.sin(t * 0.8 + ph)) * (1 - (dd / h) * 0.8);
    g.fillStyle =
      q2 < wm * 0.4 && x > cx
        ? "rgba(255,186,132," + (a * 1.3).toFixed(3) + ")"
        : "rgba(165,182,218," + a.toFixed(3) + ")";
    g.beginPath();
    g.ellipse(x, y, len, 0.012 + len * 0.05, ang * 0.8, 0, 6.283);
    g.fill();
  }
  if (C > 0.05) {
    for (var j = 0; j < 5; j++) {
      var x = cx - w * 0.6 + j * w * 0.3,
        len = h * 0.6,
        pos = ((t * 0.5 + j * 0.37) % 1) * len;
      g.fillStyle = "rgba(200,214,240," + (C * 0.5).toFixed(3) + ")";
      g.fillRect(x, by - h * 0.8 + pos, 0.02, 0.12);
    }
  }
  g.restore();
  g.lineCap = "round";
  g.strokeStyle = "rgba(170,186,220,0.28)";
  g.lineWidth = 0.02;
  rim(P, 1, 8);
  g.strokeStyle = "rgba(200,212,236,0.5)";
  g.lineWidth = 0.026;
  rim(P, 5, 8);
  for (var j = 0; j < 30; j++) {
    var x = cx - w * 1.1 + e.rnd() * w * 2.2,
      y = by - 0.02 + (e.rnd() - 0.4) * 0.14,
      r = 0.03 + e.rnd() * 0.12,
      ph = e.rnd() * 6.283,
      f = 0.35 + e.rnd() * 0.4;
    var a = Math.max(0, Math.sin(t * f + ph) * 0.6 + 0.4) * (0.25 + 0.45 * S + 0.3 * C);
    if (a < 0.03) continue;
    g.strokeStyle = "rgba(215,224,242," + Math.min(0.85, a).toFixed(3) + ")";
    g.lineWidth = 0.012;
    g.beginPath();
    g.ellipse(x, y, r * 1.8, r * 0.4, 0, 0, 6.283);
    g.stroke();
  }
  var sw = 0.5 + 0.5 * Math.sin(t * 0.6 + cx);
  g.strokeStyle = "rgba(220,228,244," + ((0.2 + 0.4 * S) * (0.4 + 0.6 * sw)).toFixed(3) + ")";
  g.lineWidth = 0.035;
  g.beginPath();
  for (var j = 0; j <= 24; j++) {
    var u = j / 24,
      x = cx - w * 1.05 + u * w * 2.1,
      y = by + 0.02 + Math.sin(u * 9 + t * 0.9 + cx) * 0.025 - sw * 0.04;
    if (j == 0) g.moveTo(x, y);
    else g.lineTo(x, y);
  }
  g.stroke();
  return P;
}
var A = stone(-4.3, 0.05, 2.45, 1.0, 0.35, 0.3);
stone(3.9, 0.0, 2.0, 0.75, -0.25, 1);
stone(0.55, 0.1, 0.6, 0.28, 0, 0.7);
for (var i = 0; i < 18; i++) {
  var x = -1.6 + e.rnd() * 3.6,
    y = 0.05 + e.rnd() * 0.35,
    ph = e.rnd() * 6.283,
    w = 0.15 + e.rnd() * 0.35;
  var a = Math.max(0, Math.sin(t * 0.7 + ph)) * (0.25 + 0.45 * S + 0.3 * C);
  if (a < 0.03) continue;
  g.fillStyle = "rgba(212,222,242," + Math.min(0.8, a).toFixed(3) + ")";
  g.beginPath();
  g.ellipse(x + Math.sin(t * 0.5 + ph) * 0.08, y, w, 0.018 + y * 0.02, 0, 0, 6.283);
  g.fill();
}
var K = [A[9], A[8], [A[10][0] - 0.1, -0.08]];
for (var j = 0; j < K.length; j++) {
  var bx = K[j][0],
    by = K[j][1] + 0.04,
    n = 5 + ((j * 3) % 4);
  for (var k = 0; k < n; k++) {
    var h = 0.18 + ((k * 0.37 + j * 0.21) % 1) * 0.3,
      ang = 0.5 + (((k * 0.61 + j * 0.13) % 1) - 0.5) * 0.6,
      ph = k * 1.7 + j,
      lw = 0.012;
    var sw = Math.sin(t * 0.9 + ph) * 0.08 + Math.sin(t * 0.37 + ph * 1.7) * 0.06;
    var a2 = ang + sw;
    g.strokeStyle = "rgba(98,86,64,0.9)";
    g.lineWidth = lw;
    g.beginPath();
    g.moveTo(bx, by);
    g.quadraticCurveTo(
      bx + Math.sin(ang * 0.5) * h * 0.5,
      by + h * 0.2,
      bx + Math.sin(a2) * h,
      by + Math.cos(a2) * h * 0.3,
    );
    g.stroke();
  }
}
stone(-2.0, 0.45, 0.95, 0.55, 0.2, 0.4);
stone(2.3, 0.55, 1.0, 0.6, -0.1, 0.9);
