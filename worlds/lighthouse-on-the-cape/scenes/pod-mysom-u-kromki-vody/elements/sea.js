var H = 1.7,
  t = e.t,
  S = e.state.surf_height || 0;
g.save();
g.beginPath();
g.rect(-6000, -H, 12000, 1402);
g.clip();
var bg = g.createLinearGradient(0, -H, 0, 1000);
bg.addColorStop(0, "#5a6680");
bg.addColorStop(0.012, "#434e68");
bg.addColorStop(0.08, "#2c3650");
bg.addColorStop(0.35, "#1b2338");
bg.addColorStop(1, "#0f1422");
g.fillStyle = bg;
g.fillRect(-6000, -H, 12000, 1402);
g.save();
g.translate(-1500, -H);
g.scale(1, 0.06);
var wr = g.createRadialGradient(0, 0, 0, 0, 0, 1400);
wr.addColorStop(0, "rgba(180,140,135,0.25)");
wr.addColorStop(0.5, "rgba(140,125,140,0.08)");
wr.addColorStop(1, "rgba(120,120,140,0)");
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
    f1 = 0.3 + e.rnd() * 0.5,
    kind = e.rnd();
  var dx = Math.sin(t * f1 * 0.5 + ph) * L * 0.18 + Math.sin(t * 0.13 + ph * 1.7) * L * 0.1;
  var a = 0.5 + 0.5 * Math.sin(t * f1 + ph) * Math.sin(t * f1 * 0.61 + ph * 0.3);
  var warm = Math.exp(-Math.pow((x + 1500) / 900, 2)) * Math.max(0, 1 - q / 120);
  var y = q - H;
  if (kind < 0.6) {
    g.fillStyle =
      "rgba(" +
      Math.round(140 + warm * 50) +
      "," +
      Math.round(155 + warm * 5) +
      "," +
      Math.round(185 - warm * 25) +
      "," +
      (a * (0.1 + 0.2 * Math.max(0, 1 - q / 500)) + warm * 0.12).toFixed(3) +
      ")";
  } else {
    g.fillStyle = "rgba(10,14,24," + (a * 0.4).toFixed(3) + ")";
  }
  g.beginPath();
  g.ellipse(x + dx, y, L / 2, th / 2, 0, 0, 6.283);
  g.fill();
}
var n = Math.round(30 + S * 150);
for (var i = 0; i < n; i++) {
  var u = e.rnd(),
    q = 1.5 + Math.pow(u, 1.8) * 520,
    x = (e.rnd() * 2 - 1) * 2800,
    ph = e.rnd() * 6.283,
    f = 0.12 + e.rnd() * 0.22,
    wl = 0.4 + e.rnd() * 1.1;
  var life = Math.sin(t * f + ph);
  if (life < 0.55) continue;
  var a = ((life - 0.55) / 0.45) * (0.25 + 0.45 * S) * Math.max(0.15, 1 - q / 650);
  var w = Math.min(q * wl, 320),
    th = Math.max(e.px * 0.8, q * 0.012);
  g.fillStyle = "rgba(200,210,228," + a.toFixed(3) + ")";
  g.beginPath();
  g.ellipse(x + Math.sin(t * 0.2 + ph) * w * 0.2, q - H, w / 2, th / 2, 0, 0, 6.283);
  g.fill();
}
g.restore();
