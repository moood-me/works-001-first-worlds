function PX(r) {
  return 1.0 - 5.0 * Math.exp(-(r - 4) / 4.5);
}
function Y(r) {
  return 136 / r - 1.7;
}
var A = e.aspect || 1.78;
var sx = (0.26 * A * 80) / 0.87;
g.save();
g.beginPath();
g.rect(-170, -1.75, 340, 82);
g.clip();
var gr = g.createLinearGradient(0, -1.9, 0, 80);
gr.addColorStop(0, "#c48d60");
gr.addColorStop(0.008, "#ad7851");
gr.addColorStop(0.03, "#84603f");
gr.addColorStop(0.07, "#684c32");
gr.addColorStop(0.15, "#56422b");
gr.addColorStop(0.4, "#433222");
gr.addColorStop(1, "#30251a");
g.fillStyle = gr;
g.fillRect(-170, -1.9, 340, 82);
g.save();
g.translate(sx, -1.1);
g.scale(75, 2.4);
var sg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
sg.addColorStop(0, "rgba(255,196,128,0.5)");
sg.addColorStop(1, "rgba(255,170,110,0)");
g.fillStyle = sg;
g.beginPath();
g.arc(0, 0, 1, 0, 6.283);
g.fill();
g.restore();
g.save();
g.translate(-100, 30);
g.scale(120, 35);
var cg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
cg.addColorStop(0, "rgba(34,24,30,0.28)");
cg.addColorStop(1, "rgba(34,24,30,0)");
g.fillStyle = cg;
g.beginPath();
g.arc(0, 0, 1, 0, 6.283);
g.fill();
g.restore();
for (var i = 0; i < 45; i++) {
  var yb = -1.5 + Math.pow(e.rnd(), 1.5) * 70,
    xb = (e.rnd() - 0.5) * 340;
  var s = (yb + 1.7) / 1.7;
  var w = 1 + e.rnd() * 4;
  var c = e.rnd();
  g.save();
  g.translate(xb, yb);
  g.scale(w * s, Math.max(w * 1.3 * 0.02125 * s * s, 0.02));
  var pg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  pg.addColorStop(0, c > 0.5 ? "rgba(128,100,68,0.35)" : "rgba(62,46,30,0.35)");
  pg.addColorStop(1, "rgba(100,80,56,0)");
  g.fillStyle = pg;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
}
[
  [0.8, "rgba(96,74,50,0.4)"],
  [0.42, "rgba(140,110,76,0.32)"],
].forEach(function (p) {
  var L = [],
    Q = [];
  for (var r = 3.4; r <= 18; r += 0.12) {
    var X = PX(r);
    var w = p[0] * (0.9 + 0.12 * Math.sin(r * 1.7)) * Math.min(1, (18 - r) / 3.5);
    var s = 80 / r,
      yb = Y(r);
    L.push(X * s - w * s, yb);
    Q.push(X * s + w * s, yb);
  }
  g.fillStyle = p[1];
  g.beginPath();
  g.moveTo(L[0], L[1]);
  for (var i = 2; i < L.length; i += 2) g.lineTo(L[i], L[i + 1]);
  for (var i = Q.length - 2; i >= 0; i -= 2) g.lineTo(Q[i], Q[i + 1]);
  g.closePath();
  g.fill();
});
for (var i = 0; i < 30; i++) {
  var r = 4 + e.rnd() * 13,
    X = PX(r) + (e.rnd() - 0.5) * 1.2;
  var s = 80 / r,
    yb = Y(r);
  g.fillStyle = e.rnd() < 0.5 ? "rgba(150,126,96,0.6)" : "rgba(60,46,32,0.6)";
  g.beginPath();
  g.ellipse(X * s, yb, 0.05 * s, 0.02 * s, 0, 0, 6.283);
  g.fill();
}
var rA = 28.8,
  rB = 30.3;
g.fillStyle = "rgba(92,78,64,0.45)";
g.fillRect(-170, Y(31.8), 340, Y(27.4) - Y(31.8));
var sc = ["#3a2d24", "#46362a", "#2f261f", "#4a3a2c"];
for (var X = -62; X < 62; X += 0.62 + e.rnd() * 0.06) {
  if (e.rnd() < 0.14) continue;
  var j = (e.rnd() - 0.5) * 0.25;
  var r0 = rA - 0.45,
    r1 = rB + 0.45;
  var w = 0.12;
  g.fillStyle = sc[Math.floor(e.rnd() * 4)];
  g.beginPath();
  g.moveTo(((X - w) * 80) / r0, Y(r0));
  g.lineTo(((X + w) * 80) / r0, Y(r0));
  g.lineTo(((X + w + j) * 80) / r1, Y(r1));
  g.lineTo(((X - w + j) * 80) / r1, Y(r1));
  g.closePath();
  g.fill();
}
var ts = Math.min(0.9, Math.max(0.3, (sx + 170) / 340));
var rg = g.createLinearGradient(-170, 0, 170, 0);
rg.addColorStop(0, "rgba(140,86,58,0.55)");
rg.addColorStop(ts - 0.25, "rgba(186,118,74,0.7)");
rg.addColorStop(ts, "rgba(255,208,142,0.95)");
rg.addColorStop(ts + 0.09, "rgba(210,140,86,0.8)");
rg.addColorStop(1, "rgba(150,94,62,0.55)");
function rail(r, x0) {
  var y = Y(r),
    s = 80 / r;
  g.fillStyle = "#2a1d16";
  g.fillRect(x0, y - 0.15 * s, 170 - x0, 0.15 * s);
  g.strokeStyle = rg;
  g.lineWidth = Math.max(e.px * 1.2, 0.035 * s);
  g.beginPath();
  g.moveTo(x0, y - 0.15 * s);
  g.lineTo(170, y - 0.15 * s);
  g.stroke();
}
rail(rB, -104);
rail(rA, -70);
g.strokeStyle = "#2a1d16";
g.lineWidth = 0.3;
g.lineCap = "round";
g.beginPath();
g.moveTo(-70, Y(rA) - 0.2);
g.quadraticCurveTo(-72.5, Y(rA) - 0.3, -74, Y(rA) - 1.1);
g.stroke();
var cols = ["#7d6c48", "#6a5a3c", "#907a52", "#5a4a32", "#84704a", "#9a8456"];
for (var i = 0; i < 700; i++) {
  var yb = -1.62 + Math.pow(e.rnd(), 1.35) * 78,
    xb = (e.rnd() - 0.5) * 340;
  var n = 2 + Math.floor(e.rnd() * 4),
    hh0 = 0.16 + e.rnd() * 0.36,
    ci = Math.floor(e.rnd() * 6);
  var s = (yb + 1.7) / 1.7,
    r = 80 / s;
  if (r < 18 && Math.abs(xb / s - PX(r)) < 0.55) continue;
  var hh = hh0 * s;
  g.strokeStyle = cols[ci];
  g.lineWidth = Math.max(e.px * 0.8, 0.016 * s);
  g.beginPath();
  for (var k = 0; k < n; k++) {
    var ox = (e.rnd() - 0.5) * 0.22 * s,
      lean = (0.1 + e.rnd() * 0.5) * hh,
      hj = hh * (0.55 + e.rnd() * 0.45);
    g.moveTo(xb + ox, yb);
    g.quadraticCurveTo(xb + ox + lean * 0.15, yb - hj * 0.6, xb + ox + lean, yb - hj);
  }
  g.stroke();
}
for (var i = 0; i < 90; i++) {
  var r = 27.6 + e.rnd() * 4,
    xb = (e.rnd() - 0.5) * 340;
  var s = 80 / r,
    yb = Y(r);
  var hh = (0.2 + e.rnd() * 0.35) * s;
  g.strokeStyle = cols[Math.floor(e.rnd() * 6)];
  g.lineWidth = Math.max(e.px * 0.8, 0.016 * s);
  g.beginPath();
  for (var k = 0; k < 3; k++) {
    var ox = (e.rnd() - 0.5) * 0.3 * s,
      lean = (0.1 + e.rnd() * 0.4) * hh;
    g.moveTo(xb + ox, yb);
    g.quadraticCurveTo(xb + ox + lean * 0.15, yb - hh * 0.6, xb + ox + lean, yb - hh);
  }
  g.stroke();
}
g.restore();
