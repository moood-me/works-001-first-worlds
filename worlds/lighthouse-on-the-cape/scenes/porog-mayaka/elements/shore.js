var t = e.t,
  S = e.state,
  w = S.wind_strength == null ? 0.6 : S.wind_strength;
for (var i = 0; i < 60; i++) {
  var x = -38 + e.rnd() * 76,
    L = 0.6 + e.rnd() * 2.5,
    ph = e.rnd() * 6.283,
    f = 0.25 + e.rnd() * 0.35;
  var a = Math.max(0, Math.sin(t * f + ph)) * (0.2 + 0.35 * w);
  if (a < 0.02) continue;
  g.fillStyle = "rgba(196,200,222," + a.toFixed(3) + ")";
  g.beginPath();
  g.ellipse(x + Math.sin(t * 0.3 + ph) * 0.5, -0.06 - Math.sin(t * f * 0.8 + ph) * 0.08, L / 2, 0.07, 0, 0, 6.283);
  g.fill();
}
var R = [];
for (var i = 0; i < 22; i++) {
  var cx = -34 + i * 3.2 + (e.rnd() - 0.5) * 2.2,
    wd = 1.4 + e.rnd() * 3.2,
    ht = 0.5 + e.rnd() * 2.1;
  if (Math.abs(cx + 2.4) < 2.6) ht = Math.min(ht, 1.05);
  R.push([cx, wd, ht, 0]);
}
R.splice(10, 0, [-2.4, 1.7, 1.42, 1]);
for (var i = 0; i < R.length; i++) {
  var r = R[i],
    cx = r[0],
    wd = r[1],
    ht = r[2],
    n = 9,
    pts = [];
  for (var j = 0; j <= n; j++) {
    var u = j / n,
      s = Math.sin(u * Math.PI);
    var tp = r[3]
      ? -ht * Math.min(1, s * 2.6) * (0.97 + 0.03 * e.rnd())
      : -ht * Math.pow(s, 0.6) * (0.8 + 0.35 * e.rnd());
    pts.push([cx + (u - 0.5) * wd + (e.rnd() - 0.5) * 0.15, tp]);
  }
  g.beginPath();
  g.moveTo(pts[0][0], 0.7);
  for (var j = 0; j < pts.length; j++) g.lineTo(pts[j][0], pts[j][1]);
  g.lineTo(pts[n][0], 0.7);
  g.closePath();
  var rg = g.createLinearGradient(0, -ht, 0, 0.6);
  rg.addColorStop(0, "#24263a");
  rg.addColorStop(1, "#111220");
  g.fillStyle = rg;
  g.fill();
  g.strokeStyle = "rgba(188,162,176,0.32)";
  g.lineWidth = 0.07;
  g.beginPath();
  g.moveTo(pts[0][0], pts[0][1]);
  for (var j = 1; j <= 5; j++) g.lineTo(pts[j][0], pts[j][1] - 0.02);
  g.stroke();
  g.strokeStyle = "rgba(140,145,175,0.14)";
  g.lineWidth = 0.05;
  g.beginPath();
  g.moveTo(pts[5][0], pts[5][1]);
  for (var j = 6; j < n; j++) g.lineTo(pts[j][0], pts[j][1]);
  g.stroke();
}
for (var i = 0; i < 46; i++) {
  var x = -30 + e.rnd() * 60,
    L = 0.5 + e.rnd() * 2,
    ph = e.rnd() * 6.283,
    f = 0.3 + e.rnd() * 0.35;
  var a = Math.pow(Math.max(0, Math.sin(t * f + ph)), 2) * (0.25 + 0.45 * w);
  if (a < 0.02) continue;
  g.fillStyle = "rgba(206,210,230," + a.toFixed(3) + ")";
  g.beginPath();
  g.ellipse(x + Math.sin(t * 0.25 + ph) * 0.4, 0.2 + Math.sin(t * f * 0.9 + ph) * 0.1, L / 2, 0.08, 0, 0, 6.283);
  g.fill();
}
