var t = e.t,
  st = e.state || {},
  dk = Math.min(1, Math.max(0, st.dusk || 0)),
  rg = st.rings == null ? 0.2 : Math.max(0, Math.min(1, st.rings)),
  S = 41,
  i,
  k,
  n;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
function L(a, b) {
  var P = parseInt(a.slice(1), 16),
    Q = parseInt(b.slice(1), 16);
  return (
    "rgb(" +
    (((P >> 16) + ((Q >> 16) - (P >> 16)) * dk) | 0) +
    "," +
    ((((P >> 8) & 255) + (((Q >> 8) & 255) - ((P >> 8) & 255)) * dk) | 0) +
    "," +
    (((P & 255) + ((Q & 255) - (P & 255)) * dk) | 0) +
    ")"
  );
}
function dw(x) {
  var d = 7.8 - 0.5 * x + 0.05 * x * x + 0.3 * Math.sin(0.9 * x);
  return d > 12 ? 12 + (d - 12) * 0.15 : d;
}
var lt = L("#e6a47c", "#7a6c90"),
  dc = L("#1e1a2c", "#121222");
g.lineCap = "round";
g.strokeStyle = L("#6a4a4c", "#2a2638");
g.lineWidth = 0.5;
for (k = 0; k < 4; k++) {
  g.globalAlpha = 0.16 * (1 - k / 4);
  g.beginPath();
  for (var xx = -30; xx <= 30.01; xx += 0.5) {
    var yy = 20 - dw(xx) - 0.15 - k * 0.4;
    if (xx <= -30) g.moveTo(xx, yy);
    else g.lineTo(xx, yy);
  }
  g.stroke();
}
g.lineCap = "butt";
for (i = 0; i < 260; i++) {
  var d = 5.5 + Math.pow(R(), 0.9) * 29,
    x = (R() - 0.5) * 50,
    l = 0.3 + R() * 1.4 + d * 0.02,
    ph = R() * 6.283,
    f = 0.1 + R() * 0.18,
    isL = R() < 0.5;
  if (d < dw(x) + 0.15) continue;
  var th = 0.0007 * d * d,
    dx = Math.sin(t * f + ph) * 0.25;
  g.globalAlpha = 0.1 + 0.1 * (0.5 + 0.5 * Math.sin(t * f * 1.6 + ph * 2));
  g.fillStyle = isL ? lt : dc;
  g.fillRect(x + dx - l / 2, 20 - d, l, th);
}
g.globalCompositeOperation = "lighter";
var gk = Math.pow(1 - dk, 1.5);
for (i = 0; i < 90; i++) {
  var d2 = 5.8 + Math.pow(R(), 1.3) * 29,
    hw = 0.25 + d2 * 0.06,
    xg = 0.117 * d2 + (R() + R() - 1) * hw,
    lg = 0.08 + R() * 0.25 + d2 * 0.012,
    f2 = 0.6 + R() * 1.7,
    p = R() * 6.283;
  if (d2 < dw(xg) + 0.2 || gk < 0.01) continue;
  var w = Math.sin(t * f2 + p) + 0.5 * Math.sin(t * f2 * 1.61 + p * 1.7),
    a = w > 0.55 ? Math.min(1, (w - 0.55) / 0.8) : 0;
  if (a > 0) {
    g.globalAlpha = a * 0.8 * gk;
    g.fillStyle = "#ffdcaa";
    g.fillRect(xg - lg / 2, 20 - d2, lg, 0.0009 * d2 * d2);
  }
}
g.globalCompositeOperation = "source-over";
var C = [
    [0.7, 8.9, 6.1],
    [-0.9, 9.7, 7.4],
    [2.6, 7.7, 5.3],
  ],
  rc = L("#ffd6ac", "#b4a8cc");
for (k = 0; k < 3; k++) {
  var wk = Math.max(0, Math.min(1, rg * 3 - k));
  if (wk <= 0) continue;
  var cx = C[k][0],
    dd = C[k][1],
    cy = 20 - dd,
    Pp = C[k][2],
    wy = 0.0011 * dd * dd,
    wx = 0.014;
  for (n = 0; n < 3; n++) {
    var ag = (((t / Pp + k * 0.37 - n * 0.2) % 1) + 1) % 1,
      rr = 0.06 + ag * (1.1 + rg * 1.3),
      al = Math.pow(1 - ag, 2) * 0.55 * wk;
    g.globalAlpha = al;
    g.fillStyle = rc;
    g.beginPath();
    g.ellipse(cx, cy, rr + wx, rr + wy, 0, 0, 6.283);
    g.ellipse(cx, cy, rr, rr, 0, 0, 6.283);
    g.fill("evenodd");
    g.globalAlpha = al * 0.6;
    g.fillStyle = dc;
    g.beginPath();
    g.ellipse(cx, cy + wy, rr * 0.97 + wx, rr * 0.97 + wy, 0, 0, 6.283);
    g.ellipse(cx, cy + wy, rr * 0.97, rr * 0.97, 0, 0, 6.283);
    g.fill("evenodd");
  }
}
g.globalAlpha = 1;
