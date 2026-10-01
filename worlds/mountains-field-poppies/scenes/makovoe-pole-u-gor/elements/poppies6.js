var W = 11,
  NB = 2200,
  NP = 170,
  HG = 0.55,
  R = 0.045,
  BOT = 0.8,
  LW = 0.008;
g.fillStyle = "#50643a";
g.fillRect(-W, -0.04, 2 * W, BOT + 0.05);
var gc = ["#4f6436", "#5f7540", "#738550", "#8a9660", "#a3a876", "#46592f"];
for (var i = 0; i < NB; i++) {
  var x = (e.rnd() - 0.5) * 2 * W,
    y = e.rnd() * BOT,
    h = HG * (0.3 + e.rnd() * 0.9),
    l = (e.rnd() - 0.5) * h * 0.35;
  g.strokeStyle = gc[(e.rnd() * 6) | 0];
  g.lineWidth = LW * (0.6 + e.rnd() * 0.8);
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + l * 0.3, y - h * 0.6, x + l, y - h);
  g.stroke();
}
var cs = [];
for (var c = 0; c < 6; c++) cs.push((e.rnd() - 0.5) * 2 * W);
for (var i = 0; i < NP; i++) {
  var cx = cs[(e.rnd() * 6) | 0];
  var x = cx + (e.rnd() + e.rnd() - 1) * W * 0.35,
    y = e.rnd() * BOT,
    h = HG * (0.7 + e.rnd() * 0.7),
    l = (e.rnd() - 0.5) * h * 0.25,
    r = R * (0.7 + e.rnd() * 0.6),
    bud = e.rnd() < 0.15;
  var hx = x + l,
    hy = y - h;
  g.strokeStyle = "#5b7039";
  g.lineWidth = LW * 0.6;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + l * 0.2, y - h * 0.5, hx, hy);
  g.stroke();
  if (bud) {
    g.fillStyle = "#6d7d47";
    g.beginPath();
    g.ellipse(hx + r * 0.3, hy + r * 0.4, r * 0.35, r * 0.55, 0.5, 0, 6.2832);
    g.fill();
    continue;
  }
  g.fillStyle = "#9e1f1a";
  g.beginPath();
  g.ellipse(hx + r * 0.15, hy - r * 0.1, r, r * 0.8, 0, 0, 6.2832);
  g.fill();
  g.fillStyle = "#d23a28";
  g.beginPath();
  g.ellipse(hx - r * 0.15, hy, r * 0.85, r * 0.7, 0, 0, 6.2832);
  g.fill();
  g.fillStyle = "rgba(255,140,100,0.55)";
  g.beginPath();
  g.ellipse(hx - r * 0.45, hy - r * 0.1, r * 0.35, r * 0.45, 0, 0, 6.2832);
  g.fill();
  g.fillStyle = "#2b1c18";
  g.beginPath();
  g.ellipse(hx, hy - r * 0.45, r * 0.35, r * 0.14, 0, 0, 6.2832);
  g.fill();
  g.fillStyle = "#7d8a5c";
  g.beginPath();
  g.ellipse(hx, hy - r * 0.5, r * 0.14, r * 0.07, 0, 0, 6.2832);
  g.fill();
}
