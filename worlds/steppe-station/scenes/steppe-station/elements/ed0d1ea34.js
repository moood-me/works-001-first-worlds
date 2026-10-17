var t = e.t;
g.strokeStyle = "#33271b";
g.lineWidth = 0.01;
for (var i = 0; i < 9; i++) {
  var bx = (e.rnd() - 0.5) * 0.7,
    h = 0.15 + e.rnd() * 0.25,
    l = 0.04 + 0.03 * Math.sin(t * 1.1 + i * 1.3);
  g.beginPath();
  g.moveTo(bx, 0);
  g.quadraticCurveTo(bx + l * 0.3, -h * 0.6, bx + l + 0.03, -h);
  g.stroke();
}
for (var i = 0; i < 11; i++) {
  var bx = (e.rnd() - 0.5) * 0.5,
    h = 0.55 + e.rnd() * 0.45,
    ph = e.rnd() * 6.28,
    k = e.rnd();
  var sw =
    0.25 +
    0.12 * Math.sin(t * 0.9 + ph) +
    0.07 * Math.sin(t * 2.3 + ph * 1.3) +
    0.1 * Math.sin(t * 0.23 + 1) * Math.sin(t * 0.13);
  var mx = bx + Math.sin(sw * 0.5) * h * 0.5,
    my = -h * 0.6;
  var tx = bx + Math.sin(sw) * h,
    ty = -Math.cos(sw) * h;
  g.strokeStyle = "#3b2e20";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(bx, 0);
  g.quadraticCurveTo(mx, my, tx, ty);
  g.stroke();
  var pl = 0.25 + k * 0.2;
  var pa = sw + 1.0 + 0.18 * Math.sin(t * 1.3 + ph) + 0.08 * Math.sin(t * 3.7 + ph * 2);
  var cx = tx + Math.sin(sw + 0.4) * pl * 0.6,
    cy = ty - Math.cos(sw + 0.4) * pl * 0.6;
  var ex = cx + Math.sin(pa) * pl * 0.7,
    ey = cy - Math.cos(pa) * pl * 0.7;
  g.lineCap = "round";
  g.strokeStyle = "rgba(230,196,140,0.35)";
  g.lineWidth = 0.035;
  g.beginPath();
  g.moveTo(tx, ty);
  g.quadraticCurveTo(cx, cy, ex, ey);
  g.stroke();
  g.strokeStyle = "rgba(255,226,170,0.6)";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(tx, ty);
  g.quadraticCurveTo(cx, cy, ex, ey);
  g.stroke();
}
