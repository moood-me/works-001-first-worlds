var i,
  j,
  k,
  n,
  c = 2,
  x0 = -7;
function Y(z) {
  return 11 - z;
}
g.fillStyle = "#2e1f22";
g.fillRect(-7.4, -8.4, 16.8, 16.8);
for (j = 0; j < 8; j++)
  for (i = 0; i < 8; i++) {
    var xa = x0 + i * c,
      y0 = Y(3 + (j + 1) * c),
      dk = (i + j) % 2 == 0;
    g.fillStyle = dk ? "#4b322d" : "#e3caa6";
    g.fillRect(xa, y0, c, c);
    g.fillStyle = "rgba(60,30,25," + (e.rnd() * 0.09).toFixed(3) + ")";
    g.fillRect(xa, y0, c, c);
    g.strokeStyle = dk ? "rgba(15,8,8,0.2)" : "rgba(130,85,55,0.14)";
    g.lineWidth = 0.012;
    for (k = 0; k < 8; k++) {
      var yy = y0 + ((k + e.rnd()) / 8) * c,
        w = (e.rnd() - 0.5) * 0.12;
      g.beginPath();
      g.moveTo(xa + 0.04, yy);
      g.lineTo(xa + c - 0.04, yy - w);
      g.stroke();
    }
  }
g.strokeStyle = "rgba(20,12,14,0.3)";
g.lineWidth = 0.02;
g.strokeRect(-7, -8, 16, 16);
var gl = g.createLinearGradient(0, 8, 0, -8);
gl.addColorStop(0, "rgba(240,194,156,0.04)");
gl.addColorStop(1, "rgba(240,194,156,0.24)");
g.fillStyle = gl;
g.fillRect(-7, -8, 16, 16);
g.fillStyle = "rgba(255,210,160,0.35)";
g.fillRect(-7.4, -8.45, 16.8, 0.05);
g.save();
g.beginPath();
g.rect(-7.4, -8.4, 16.8, 16.8);
g.clip();
function A(r) {
  return r < 0.35 ? 0.6 - (0.38 * r) / 0.35 : r < 1 ? (0.22 * (1 - r)) / 0.65 : 0;
}
var z;
for (z = 2.6; z < 19.4; z += 0.2) {
  var zm = z + 0.1,
    d = 1.7 / zm,
    dv = (d - 0.17) / 0.3;
  if (Math.abs(dv) >= 1) continue;
  var hw = 0.135 * zm * Math.sqrt(1 - dv * dv),
    cx = -0.463 * zm,
    q = g.createLinearGradient(cx - hw, 0, cx + hw, 0),
    p;
  for (p = 0; p <= 6; p++) {
    var f = Math.abs(p / 3 - 1),
      r = Math.sqrt(f * f * (1 - dv * dv) + dv * dv);
    q.addColorStop(p / 6, "rgba(255,214,164," + A(r).toFixed(3) + ")");
  }
  g.fillStyle = q;
  g.fillRect(cx - hw, Y(z + 0.2), hw * 2, 0.21);
}
var T = [
  [-4, 16, 3.4, [0.78, 0.54, 0.34, 0.27, 0.26, 0.41, 0.1]],
  [4, 14, 3, [0.72, 0.51, 0.3, 0.24, 0.21, 0.39, 0.15]],
  [-2, 12, 1.6, [0.48, 0.32, 0.18, 0.14, 0.16, 0.24, 0]],
  [6, 18, 2.5, [0.65, 0.48, 0.25, 0.2, 0.2, 0.27, 0]],
  [2, 8, 2.3, [0.69, 0.46, 0.44, 0.39, 0.46, 0.46, 0.07]],
  [-2, 8, 1.6, [0.48, 0.32, 0.18, 0.14, 0.16, 0.24, 0]],
  [-4, 6, 1.9, [0.57, 0.38, 0.3, 0.29, 0.29, 0.38, 0.38]],
  [4, 6, 2.5, [0.65, 0.48, 0.25, 0.2, 0.2, 0.27, 0]],
  [1.2, 12.5, 1.75, [0.15, 0.14, 0.22, 0.24, 0.2, 0.13, 0.1]],
];
for (n = 0; n < T.length; n++) {
  var s0 = T[n],
    L = 6 * s0[2],
    ps;
  for (ps = 0; ps < 3; ps++) {
    var m = [1.35, 1.15, 1][ps],
      Al = [0.1, 0.14, 0.2][ps],
      Lp = [],
      Rp = [];
    for (k = 0; k <= 6; k++) {
      var s = (k / 6) * L,
        ww = s0[3][k] * m * (1 + (0.3 * k) / 6),
        gx = s0[0] + 0.42 * s,
        gz = s0[1] - 0.91 * s;
      Lp.push([gx - 0.91 * ww, Y(gz - 0.42 * ww)]);
      Rp.push([gx + 0.91 * ww, Y(gz + 0.42 * ww)]);
    }
    g.beginPath();
    g.moveTo(Lp[0][0], Lp[0][1]);
    for (k = 1; k <= 6; k++) g.lineTo(Lp[k][0], Lp[k][1]);
    for (k = 6; k >= 0; k--) g.lineTo(Rp[k][0], Rp[k][1]);
    g.closePath();
    g.fillStyle = "rgba(38,24,46," + Al + ")";
    g.fill();
  }
}
g.restore();
