var t = e.t,
  top = -1.43,
  S = 68;
var gr = g.createLinearGradient(0, top, 0, 60);
gr.addColorStop(0, "rgba(96,106,122,0.28)");
gr.addColorStop(0.04, "rgba(58,68,84,0.36)");
gr.addColorStop(0.3, "rgba(36,44,58,0.5)");
gr.addColorStop(1, "rgba(20,26,36,0.66)");
g.fillStyle = gr;
g.fillRect(-220, top, 400, 72);
g.fillStyle = "rgba(176,184,198,0.22)";
g.fillRect(-220, top, 400, Math.max(e.px, 0.015));
for (var i = 0; i < 240; i++) {
  var u = e.rnd();
  var y = top + Math.pow(u, 2.1) * 62;
  var sc = (40 * (y + 1.7)) / S;
  var x = -220 + e.rnd() * 400;
  var L = (0.5 + e.rnd() * 1.1) * sc;
  var th = Math.max(e.px * 0.9, 0.02 * sc);
  var fq = 0.05 + e.rnd() * 0.12,
    ph = e.rnd() * 6.283;
  var dark = e.rnd() < 0.45;
  var xx = x + (Math.sin(t * fq + ph) * 0.8 + Math.sin(t * fq * 2.3 + ph) * 0.3) * sc;
  var a = (0.1 + 0.1 * Math.sin(t * fq * 3.1 + ph * 1.9)) * (dark ? 1.1 : 1);
  if (a < 0.01) continue;
  g.globalAlpha = a;
  g.fillStyle = dark ? "#141a24" : "#9aa4b6";
  g.beginPath();
  g.ellipse(xx, y, L / 2, th / 2, 0, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
