var W = e.aspect,
  H = 0.52,
  t = e.t,
  mx = 0.74 * W;
var gr = g.createLinearGradient(0, H, 0, 1.25);
gr.addColorStop(0, "#666a8a");
gr.addColorStop(0.05, "#454c6e");
gr.addColorStop(0.3, "#2b3452");
gr.addColorStop(1, "#131829");
g.fillStyle = gr;
g.fillRect(-0.1, H, W + 0.2, 0.8);
g.save();
g.translate(W * 0.14, H + 0.01);
g.scale(2.6, 0.5);
var a = g.createRadialGradient(0, 0, 0, 0, 0, 0.3);
a.addColorStop(0, "rgba(190,150,155,0.16)");
a.addColorStop(1, "rgba(190,150,155,0)");
g.fillStyle = a;
g.fillRect(-0.3, -0.3, 0.6, 0.6);
g.restore();
g.save();
g.translate(mx, H + 0.16);
g.scale(0.07, 0.2);
var c = g.createRadialGradient(0, 0, 0, 0, 0, 1);
c.addColorStop(0, "rgba(230,222,205,0.12)");
c.addColorStop(1, "rgba(230,222,205,0)");
g.fillStyle = c;
g.fillRect(-1, -1, 2, 2);
g.restore();
for (var i = 0; i < 160; i++) {
  var f = e.rnd(),
    y = H + 0.002 + Math.pow(f, 2.1) * 0.72,
    d = y - H,
    x = e.rnd() * W,
    len = (0.012 + d * 0.45) * (0.3 + e.rnd()),
    ph = e.rnd() * 6.2832,
    lt = e.rnd(),
    al = e.rnd();
  var dx = Math.sin(t * 0.13 + ph) * d * 0.06;
  g.globalAlpha = (0.04 + 0.09 * al) * (0.6 + 0.4 * Math.sin(t * 0.31 + ph * 2));
  g.strokeStyle = lt < 0.55 ? "#9ea4c4" : "#161b30";
  g.lineWidth = Math.max(e.px, d * 0.005);
  g.beginPath();
  g.moveTo(x + dx - len / 2, y);
  g.lineTo(x + dx + len / 2, y);
  g.stroke();
}
for (var i = 0; i < 110; i++) {
  var f = e.rnd(),
    y = H + 0.003 + Math.pow(f, 1.5) * 0.6,
    d = y - H,
    ph = e.rnd() * 6.2832,
    sp = 0.35 + e.rnd() * 0.9,
    off = e.rnd() - 0.5,
    lw = e.rnd();
  var spread = 0.01 + d * 0.14;
  var x = mx + off * spread * 2 + Math.sin(t * sp * 0.4 + ph) * d * 0.03;
  var len = (0.004 + d * 0.08) * (0.4 + lw * 0.8);
  var a2 = (0.5 + 0.5 * Math.sin(t * sp + ph)) * (1 - Math.abs(off) * 1.7) * Math.min(1, d * 30) * (1 - d * 1.2) * 0.8;
  if (a2 <= 0.01) continue;
  g.globalAlpha = a2;
  g.fillStyle = lw > 0.75 ? "#fbf2df" : "#d9d2c4";
  g.fillRect(x - len / 2, y, len, Math.max(e.px, d * 0.007));
}
g.globalAlpha = 1;
