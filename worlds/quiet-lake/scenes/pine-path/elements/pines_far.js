var t = e.t,
  st = e.state,
  lf = st.light_fade || 0,
  S = 401;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var D = 40,
  pc = 0.9 * Math.sin(D / 8) * Math.min(1, D / 12),
  N = 24,
  SP = 62,
  GAP = 1.8,
  TW = 0.5,
  TH = 26,
  COL = "#2c2030",
  FOL = "#281d2c",
  rA = 0.32 * (1 - lf),
  TX = [],
  TY = [];
for (var i = 0; i < N; i++) {
  var x = -SP + R() * 2 * SP,
    q = R();
  if (Math.abs(x - pc) < GAP) x = pc + (x < pc ? -1 : 1) * (GAP + q * 2);
  var w = TW * (0.7 + R() * 0.6),
    h = TH * (0.8 + R() * 0.35),
    ln = (R() - 0.5) * 0.03 * h,
    sw = Math.sin(t * 0.13 + i * 1.7) * 0.002 * h;
  TX.push(x + ln + sw);
  TY.push(-h);
  g.fillStyle = COL;
  g.beginPath();
  g.moveTo(x - w / 2, 0.1);
  g.lineTo(x - w * 0.17 + ln + sw, -h);
  g.lineTo(x + w * 0.17 + ln + sw, -h);
  g.lineTo(x + w / 2, 0.1);
  g.closePath();
  g.fill();
  g.beginPath();
  g.ellipse(x, 0.04, w * 0.85, w * 0.14, 0, 0, 6.283);
  g.fill();
  if (rA > 0.01) {
    g.strokeStyle = "rgba(255,165,105," + rA.toFixed(3) + ")";
    g.lineWidth = w * 0.1;
    g.beginPath();
    g.moveTo(x - w * 0.45, 0);
    g.lineTo(x - w * 0.2 + ln * 0.8 + sw, -h * 0.8);
    g.stroke();
  }
  var nb = 5 + Math.floor(R() * 5);
  for (var b = 0; b < nb; b++) {
    var f = 0.5 + (0.5 * b) / nb + R() * 0.04,
      by = -h * f,
      bx = x + (ln + sw) * f,
      sd = b % 2 ? 1 : -1,
      L = h * (0.05 + R() * 0.07) * (1.25 - f * 0.5),
      wv = Math.sin(t * 0.37 + i + b * 0.7) * L * 0.03,
      ex = bx + sd * L,
      ey = by + L * 0.28 + wv;
    g.strokeStyle = COL;
    g.lineWidth = w * 0.1;
    g.beginPath();
    g.moveTo(bx, by);
    g.quadraticCurveTo(bx + sd * L * 0.5, by - L * 0.06, ex, ey);
    g.stroke();
    g.fillStyle = FOL;
    for (var c = 0; c < 4; c++) {
      var u = 0.3 + c * 0.22;
      g.beginPath();
      g.ellipse(bx + sd * L * u, by + L * 0.28 * u * u + L * 0.05 + wv * u, L * 0.2, L * 0.08, sd * 0.12, 0, 6.283);
      g.fill();
    }
  }
}
g.fillStyle = FOL;
for (var k = 0; k < TX.length; k++) {
  var nc = 3 + Math.floor(R() * 3),
    ws = Math.sin(t * 0.2 + k * 1.3) * 0.06;
  for (var c = 0; c < nc; c++) {
    var cy = TY[k] * (0.86 + c * 0.06 + R() * 0.04),
      rx = TH * (0.045 + R() * 0.05) * (1.2 - c * 0.12),
      cx = TX[k] + (R() - 0.5) * rx * 0.8 + ws * (c + 1);
    for (var m = 0; m < 6; m++) {
      var ex = cx - rx + m * rx * 0.4,
        er = rx * (0.28 + R() * 0.12);
      g.beginPath();
      g.ellipse(ex, cy - (m % 2) * er * 0.25, er, er * 0.42, 0, 0, 6.283);
      g.fill();
    }
  }
}
