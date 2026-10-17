var t = e.t;
var fl = 0.8 + 0.12 * Math.sin(t * 7.3) + 0.08 * Math.sin(t * 12.1 + 1) + 0.05 * Math.sin(t * 19.7);
g.save();
g.translate(0, 0.05);
g.scale(1, 0.16);
var pg = g.createRadialGradient(0, 0, 0, 0, 0, 3.6);
pg.addColorStop(0, "rgba(255,140,60," + (0.45 * fl).toFixed(3) + ")");
pg.addColorStop(0.4, "rgba(230,100,45," + (0.18 * fl).toFixed(3) + ")");
pg.addColorStop(1, "rgba(200,80,40,0)");
g.fillStyle = pg;
g.beginPath();
g.arc(0, 0, 3.6, 0, 6.283);
g.fill();
g.restore();
e.light(0, -0.4, 4.5, "#ff7a33", 0.85);
for (var i = 0; i < 7; i++) {
  var life = (t * 0.045 + i / 7) % 1;
  var x = 0.1 + life * life * 4.2 + 0.2 * Math.sin(t * 0.4 + i * 1.9);
  var y = -0.8 - life * 5.4;
  var r = 0.25 + life * 1.3;
  var a = 0.13 * Math.sin(Math.PI * life);
  var sg = g.createRadialGradient(x, y, 0, x, y, r);
  sg.addColorStop(0, "rgba(150,118,102," + a.toFixed(3) + ")");
  sg.addColorStop(1, "rgba(150,118,102,0)");
  g.fillStyle = sg;
  g.beginPath();
  g.arc(x, y, r, 0, 6.283);
  g.fill();
}
var st = [];
var sc = ["#4a3c30", "#5c4a3a", "#3d332b", "#524236", "#463a33"];
for (var i = 0; i < 9; i++) {
  var an = (i / 9) * 6.283 + e.rnd() * 0.4;
  st.push({
    x: 0.58 * Math.cos(an),
    y: 0.13 * Math.sin(an),
    r: 0.08 + e.rnd() * 0.08,
    c: sc[Math.floor(e.rnd() * 5)],
    b: Math.sin(an) < 0,
  });
}
function stone(s) {
  g.fillStyle = s.c;
  g.beginPath();
  g.ellipse(s.x, s.y - s.r * 0.6, s.r * 1.25, s.r * 0.75, 0, 0, 6.283);
  g.fill();
  g.fillStyle = "rgba(255,140,70," + (0.3 * fl).toFixed(3) + ")";
  g.beginPath();
  g.ellipse(s.x - s.x * 0.15, s.y - s.r * 0.95, s.r * 0.8, s.r * 0.3, 0, 0, 6.283);
  g.fill();
}
st.forEach(function (s) {
  if (s.b) stone(s);
});
g.save();
g.translate(0, -0.05);
g.scale(1, 0.35);
var cg = g.createRadialGradient(0, 0, 0, 0, 0, 0.55);
cg.addColorStop(0, "rgba(255,190,90," + (0.9 * fl).toFixed(3) + ")");
cg.addColorStop(0.5, "rgba(230,80,30,0.6)");
cg.addColorStop(1, "rgba(120,40,20,0)");
g.fillStyle = cg;
g.beginPath();
g.arc(0, 0, 0.55, 0, 6.283);
g.fill();
g.restore();
g.lineCap = "round";
g.strokeStyle = "#23170f";
g.lineWidth = 0.11;
g.beginPath();
g.moveTo(-0.55, -0.02);
g.lineTo(0.25, -0.32);
g.moveTo(0.5, -0.01);
g.lineTo(-0.18, -0.36);
g.moveTo(-0.1, 0.02);
g.lineTo(0.12, -0.45);
g.stroke();
var fls = [
  [-0.16, 0.42, 0.13, 1.3, 0.2],
  [0.12, 0.5, 0.12, 1.7, 1.4],
  [0.0, 0.72, 0.16, 1.1, 2.6],
  [-0.05, 0.35, 0.1, 2.3, 3.1],
  [0.2, 0.3, 0.08, 2.0, 4.4],
];
for (var pass = 0; pass < 2; pass++) {
  fls.forEach(function (f) {
    var sc2 = pass ? 0.55 : 1;
    var h =
      (f[1] + 0.12 * Math.sin(t * (3.1 + f[3]) + f[4]) + 0.06 * Math.sin(t * (7.3 + f[3] * 2) + f[4] * 2)) * sc2 * fl;
    var w = f[2] * sc2;
    var lean = 0.1 + 0.08 * Math.sin(t * (1.7 + f[3] * 0.5) + f[4]) + 0.04 * Math.sin(t * 4.3 + f[4]);
    var bx = f[0] * (pass ? 0.7 : 1);
    var gr = g.createLinearGradient(0, 0, 0, -h);
    if (pass) {
      gr.addColorStop(0, "rgba(255,240,190,0.95)");
      gr.addColorStop(0.6, "rgba(255,200,110,0.8)");
      gr.addColorStop(1, "rgba(255,160,80,0)");
    } else {
      gr.addColorStop(0, "rgba(255,170,80,0.9)");
      gr.addColorStop(0.5, "rgba(240,100,40,0.75)");
      gr.addColorStop(1, "rgba(180,50,25,0)");
    }
    g.fillStyle = gr;
    g.beginPath();
    g.moveTo(bx - w, -0.12);
    g.bezierCurveTo(bx - w * 1.3, -h * 0.45, bx + lean * h * 0.5 - w * 0.3, -h * 0.75, bx + lean * h, -h);
    g.bezierCurveTo(bx + lean * h * 0.5 + w * 0.4, -h * 0.7, bx + w * 1.3, -h * 0.4, bx + w, -0.12);
    g.closePath();
    g.fill();
  });
}
st.forEach(function (s) {
  if (!s.b) stone(s);
});
for (var i = 0; i < 16; i++) {
  var sp = 0.12 + e.rnd() * 0.14,
    off = e.rnd(),
    dx = (e.rnd() - 0.5) * 0.4,
    wv = e.rnd() * 6.28;
  var life = (t * sp + off) % 1;
  var y = -0.35 - life * (2.8 + dx * 2);
  var x = dx + life * life * 1.8 + 0.12 * Math.sin(t * 1.7 + wv) * life;
  var a = (1 - life) * (0.6 + 0.4 * Math.sin(t * 9 + wv));
  if (a <= 0) continue;
  g.fillStyle = "rgba(255,170,90," + a.toFixed(3) + ")";
  g.beginPath();
  g.arc(x, y, 0.018 + 0.012 * (1 - life), 0, 6.283);
  g.fill();
}
