var S = e.state,
  gl = Math.max(0, Math.min(1, S.lamp_glow == null ? 0.75 : S.lamp_glow));
var D = 1.45;
function P(X, Z, h) {
  var k = D / Z;
  return [X * k, -1.7 + (1.7 - h) * k];
}
function q(a, c) {
  g.beginPath();
  g.moveTo(a[0][0], a[0][1]);
  for (var i = 1; i < a.length; i++) g.lineTo(a[i][0], a[i][1]);
  g.closePath();
  g.fillStyle = c;
  g.fill();
}
var Zw = 3.2,
  Zf = 2.55,
  tk = 0.08,
  rail = [];
for (var k = 0; k < 14; k++) {
  var X0 = 1.95 + k * 0.34,
    X1 = X0 + 0.31,
    h = 0.2 * (k + 1);
  q(
    [P(X0 + 0.05, Zw, h - tk), P(X1 + 0.05, Zw, h - tk), P(X1 + 0.25, Zw, h - 0.45), P(X0 + 0.25, Zw, h - 0.45)],
    "rgba(8,7,16,0.28)",
  );
}
for (var k = 0; k < 14; k++) {
  var X0 = 1.95 + k * 0.34,
    X1 = X0 + 0.31,
    h = 0.2 * (k + 1),
    wm = Math.max(0, 1 - (X0 - 1.15) / 4) * gl;
  if (h < 1.7)
    q(
      [P(X0, Zf, h), P(X1, Zf, h), P(X1, Zw, h), P(X0, Zw, h)],
      "rgb(" + Math.round(70 + 60 * wm) + "," + Math.round(64 + 38 * wm) + "," + Math.round(80 + 20 * wm) + ")",
    );
  if (h - tk > 1.7) q([P(X0, Zf, h - tk), P(X1, Zf, h - tk), P(X1, Zw, h - tk), P(X0, Zw, h - tk)], "#211e2c");
  q(
    [P(X0, Zf, h), P(X0, Zw, h), P(X0, Zw, h - tk), P(X0, Zf, h - tk)],
    "rgb(" + Math.round(56 + 70 * wm) + "," + Math.round(48 + 40 * wm) + "," + Math.round(62 + 18 * wm) + ")",
  );
  q(
    [P(X0, Zf, h), P(X1, Zf, h), P(X1, Zf, h - tk), P(X0, Zf, h - tk)],
    "rgb(" + Math.round(44 + 30 * wm) + "," + Math.round(40 + 18 * wm) + "," + Math.round(56 + 8 * wm) + ")",
  );
  rail.push([X0 + 0.15, Zf + 0.06, h]);
}
g.strokeStyle = "#17151f";
g.lineWidth = 0.012;
g.beginPath();
for (var i = 0; i < rail.length; i++) {
  var r = rail[i],
    a = P(r[0], r[1], r[2]),
    b = P(r[0], r[1], r[2] + 0.9);
  g.moveTo(a[0], a[1]);
  g.lineTo(b[0], b[1]);
}
g.stroke();
g.lineWidth = 0.02;
g.beginPath();
for (var i = 0; i < rail.length; i++) {
  var r = rail[i],
    b = P(r[0], r[1], r[2] + 0.9);
  if (i == 0) g.moveTo(b[0], b[1]);
  else g.lineTo(b[0], b[1]);
}
g.stroke();
g.strokeStyle = "rgba(240,160,100," + (0.28 * gl).toFixed(3) + ")";
g.lineWidth = 0.006;
g.beginPath();
for (var i = 0; i < 5; i++) {
  var r = rail[i],
    b = P(r[0], r[1], r[2] + 0.91);
  if (i == 0) g.moveTo(b[0], b[1]);
  else g.lineTo(b[0], b[1]);
}
g.stroke();
