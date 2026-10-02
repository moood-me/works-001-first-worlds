var A = e.aspect,
  H = 0.48,
  L = -0.35,
  R = A + 0.35;
var s = g.createLinearGradient(0, -0.35, 0, H);
s.addColorStop(0, "#141a33");
s.addColorStop(0.55, "#3a3f68");
s.addColorStop(0.88, "#8a6d86");
s.addColorStop(1, "#c98f86");
g.fillStyle = s;
g.fillRect(L, -0.35, R - L, H + 0.351);
var w = g.createLinearGradient(0, H, 0, 1.25);
w.addColorStop(0, "#5b5372");
w.addColorStop(0.25, "#2f3352");
w.addColorStop(1, "#151a2e");
g.fillStyle = w;
g.fillRect(L, H, R - L, 1.25 - H);
g.fillStyle = "rgba(255,255,255,0.8)";
for (var i = 0; i < 120; i++) {
  var x = L + e.rnd() * (R - L),
    y = -0.35 + Math.pow(e.rnd(), 1.4) * 0.6;
  g.globalAlpha = 0.2 + e.rnd() * 0.6;
  g.fillRect(x, y, e.px * 1.4, e.px * 1.4);
}
g.globalAlpha = 1;
var mx = 0.82 * A,
  my = 0.12;
var m = g.createRadialGradient(mx, my, 0, mx, my, 0.2);
m.addColorStop(0, "rgba(240,232,214,0.35)");
m.addColorStop(1, "rgba(240,232,214,0)");
g.fillStyle = m;
g.fillRect(mx - 0.2, my - 0.2, 0.4, 0.4);
g.fillStyle = "#efe7d4";
g.beginPath();
g.arc(mx, my, 0.018, 0, 6.283);
g.fill();
