var H = 1.7,
  t = e.t;
g.save();
g.beginPath();
g.rect(-6000, -H, 12000, 1402);
g.clip();
var bg = g.createLinearGradient(0, -H, 0, 1000);
bg.addColorStop(0, "#5d5872");
bg.addColorStop(0.012, "#4a4a64");
bg.addColorStop(0.08, "#343750");
bg.addColorStop(0.35, "#22263a");
bg.addColorStop(1, "#141826");
g.fillStyle = bg;
g.fillRect(-6000, -H, 12000, 1402);
g.save();
g.translate(-830, -H);
g.scale(1, 0.06);
var wr = g.createRadialGradient(0, 0, 0, 0, 0, 1400);
wr.addColorStop(0, "rgba(200,145,120,0.35)");
wr.addColorStop(0.5, "rgba(150,115,125,0.12)");
wr.addColorStop(1, "rgba(120,100,130,0)");
g.fillStyle = wr;
g.beginPath();
g.arc(0, 0, 1400, 0, 6.283);
g.fill();
g.restore();
for (var i = 0; i < 280; i++) {
  var u = e.rnd(),
    q = 0.6 + Math.pow(u, 2.2) * 850,
    x = (e.rnd() * 2 - 1) * 3200,
    Lr = 0.8 + e.rnd() * 2.2,
    L = Math.min(q * Lr, 650),
    th = Math.max(e.px * 0.7, q * 0.01),
    ph = e.rnd() * 6.283,
    f1 = 0.25 + e.rnd() * 0.4,
    kind = e.rnd();
  var dx = Math.sin(t * f1 * 0.5 + ph) * L * 0.15 + Math.sin(t * 0.11 + ph * 1.7) * L * 0.08;
  var a = 0.5 + 0.5 * Math.sin(t * f1 + ph) * Math.sin(t * f1 * 0.61 + ph * 0.3);
  var warm = Math.exp(-Math.pow((x + 830) / 900, 2)) * Math.max(0, 1 - q / 120);
  var y = q - H;
  if (kind < 0.62) {
    g.fillStyle =
      "rgba(" +
      Math.round(140 + warm * 70) +
      "," +
      Math.round(138 + warm * 20) +
      "," +
      Math.round(165 - warm * 20) +
      "," +
      (a * (0.1 + 0.22 * Math.max(0, 1 - q / 500)) + warm * 0.15).toFixed(3) +
      ")";
  } else {
    g.fillStyle = "rgba(14,17,28," + (a * 0.35).toFixed(3) + ")";
  }
  g.beginPath();
  g.ellipse(x + dx, y, L / 2, th / 2, 0, 0, 6.283);
  g.fill();
}
g.restore();
