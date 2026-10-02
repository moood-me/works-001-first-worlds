var A = e.aspect,
  hz = 0.52,
  T = Math.PI * 2;
var gr = g.createLinearGradient(0, -0.35, 0, hz);
gr.addColorStop(0, "#050a17");
gr.addColorStop(0.55, "#0d1b33");
gr.addColorStop(1, "#1f3550");
g.fillStyle = gr;
g.fillRect(-0.1, -0.4, A + 0.2, hz + 0.41);
for (var i = 0; i < 260; i++) {
  var x = e.rnd() * A,
    y = -0.35 + Math.pow(e.rnd(), 1.4) * (hz + 0.2),
    b = e.rnd();
  g.fillStyle = "rgba(225,235,255," + (0.2 + b * 0.6) * (1 - (y / hz) * 0.6) + ")";
  var s = 0.0008 + b * 0.0014;
  g.fillRect(x, y, s, s);
}
var mx = A * 0.62,
  my = 0.12;
var m = g.createRadialGradient(mx, my, 0, mx, my, 0.3);
m.addColorStop(0, "rgba(220,235,255,0.55)");
m.addColorStop(0.08, "rgba(190,215,250,0.25)");
m.addColorStop(1, "rgba(150,180,230,0)");
g.fillStyle = m;
g.fillRect(mx - 0.35, my - 0.35, 0.7, 0.7);
g.save();
g.beginPath();
g.arc(mx, my, 0.032, 0, T);
g.clip();
g.fillStyle = "#eef4ff";
g.fillRect(mx - 0.04, my - 0.04, 0.08, 0.08);
g.fillStyle = "#16243f";
g.beginPath();
g.arc(mx + 0.015, my - 0.008, 0.03, 0, T);
g.fill();
g.restore();
var hg = g.createLinearGradient(0, hz - 0.12, 0, hz + 0.01);
hg.addColorStop(0, "rgba(60,90,120,0)");
hg.addColorStop(1, "rgba(70,105,135,0.6)");
g.fillStyle = hg;
g.fillRect(-0.1, hz - 0.12, A + 0.2, 0.13);
g.fillStyle = "#0c1824";
g.fillRect(-0.1, hz, A + 0.2, 1.3 - hz);
