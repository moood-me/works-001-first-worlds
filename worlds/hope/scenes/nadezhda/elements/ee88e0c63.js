var A = e.aspect,
  mx = 0.8 * A,
  my = 0.2;
for (var i = 0; i < 180; i++) {
  var x = e.rnd() * A;
  var y = -0.35 + Math.pow(e.rnd(), 1.25) * 0.85;
  var m = e.rnd();
  var f = 0.25 + e.rnd() * 1.1;
  var ph = e.rnd() * 6.283;
  var fade = Math.min(1, Math.max(0, (0.52 - y) / 0.3));
  var dm = Math.sqrt((x - mx) * (x - mx) + (y - my) * (y - my));
  var mf = Math.min(1, Math.max(0, (dm - 0.05) / 0.2));
  var tw = 0.7 + 0.2 * Math.sin(e.t * f + ph) + 0.1 * Math.sin(e.t * f * 2.73 + ph * 1.3);
  var a = (0.2 + m * 0.65) * fade * mf * tw;
  if (a < 0.02) continue;
  var r = (0.45 + m * m * 1.2) * e.px;
  g.globalAlpha = a;
  g.fillStyle = m > 0.93 ? "#ece6d6" : m < 0.3 ? "#c2cbe0" : "#d8dde8";
  g.beginPath();
  g.arc(x, y, r, 0, 6.283);
  g.fill();
  if (m > 0.97) {
    g.globalAlpha = a * 0.3;
    g.fillRect(x - r * 4, y - e.px * 0.35, r * 8, e.px * 0.7);
    g.fillRect(x - e.px * 0.35, y - r * 4, e.px * 0.7, r * 8);
  }
}
g.globalAlpha = 1;
