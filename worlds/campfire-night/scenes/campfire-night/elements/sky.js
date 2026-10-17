var A = e.aspect,
  H = 0.52;
var s = g.createLinearGradient(0, -0.35, 0, H);
s.addColorStop(0, "#05070f");
s.addColorStop(0.7, "#0f1730");
s.addColorStop(1, "#1d2740");
g.fillStyle = s;
g.fillRect(-0.05, -0.35, A + 0.1, H + 0.36);
g.fillStyle = "#0b0f14";
g.fillRect(-0.05, H, A + 0.1, 0.8);
for (var i = 0; i < 700; i++) {
  var x = e.rnd() * A,
    y = -0.35 + Math.pow(e.rnd(), 1.3) * 0.8;
  g.globalAlpha = 0.15 + e.rnd() * 0.7;
  g.fillStyle = e.rnd() < 0.85 ? "#dfe6ff" : "#ffe9c4";
  var r = (0.6 + e.rnd() * 1.2) * e.px;
  g.fillRect(x, y, r, r);
}
g.globalAlpha = 1;
var mx = A * 0.917,
  my = 0.1;
var m = g.createRadialGradient(mx, my, 0, mx, my, 0.25);
m.addColorStop(0, "rgba(220,226,255,0.35)");
m.addColorStop(1, "rgba(220,226,255,0)");
g.fillStyle = m;
g.fillRect(mx - 0.25, my - 0.25, 0.5, 0.5);
g.fillStyle = "#eef0ff";
g.beginPath();
g.arc(mx, my, 0.02, 0, 6.283);
g.fill();
g.fillStyle = "#0a0e14";
g.beginPath();
g.moveTo(-0.05, H + 0.01);
for (var x = -0.05; x <= A + 0.05; x += 0.004) {
  var h =
    0.03 +
    0.012 * Math.sin(x * 7) +
    0.008 * Math.sin(x * 23 + 1) +
    0.006 * Math.sin(x * 61 + 2) +
    0.012 * Math.max(0, Math.sin(x * 3 + 0.5));
  g.lineTo(x, H - h);
}
g.lineTo(A + 0.05, H + 0.01);
g.closePath();
g.fill();
