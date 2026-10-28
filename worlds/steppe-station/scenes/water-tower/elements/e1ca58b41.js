var A = e.aspect || 1.78;
var sx = (0.26 * A * 80) / 0.87;
function Y(r) {
  return 136 / r - 1.7;
}
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
var cols = ["#7d6c48", "#6a5a3c", "#907a52", "#5a4a32", "#84704a", "#9a8456"];
for (var i = 0; i < 620; i++) {
  var r = 15 + Math.pow(e.rnd(), 0.75) * 63;
  var s = 80 / r,
    yb = Y(r);
  var xb = (e.rnd() - 0.5) * ((A * r) / 0.87 + 10) * s;
  var n = 2 + Math.floor(e.rnd() * 4),
    hh = (0.16 + e.rnd() * 0.36) * s,
    ci = Math.floor(e.rnd() * 6);
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
g.restore();
