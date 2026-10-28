var cols = ["#ffd98a", "#ff8fdf", "#8ff0ff", "#fff1c9", "#c9a0ff"],
  x = -430;
while (x < 430) {
  var bw = 10 + e.rnd() * 26,
    gap = e.rnd() < 0.35 ? 1 + e.rnd() * 6 : 0.4,
    bh = 14 + e.rnd() * e.rnd() * 52,
    type = e.rnd(),
    tone = e.rnd(),
    wc = cols[Math.floor(e.rnd() * 5)],
    den = 0.25 + e.rnd() * 0.5,
    wx = 2.6 + e.rnd() * 1.6,
    wy = 3 + e.rnd() * 1.2;
  var c = tone < 0.33 ? "#241036" : tone < 0.66 ? "#2b1242" : "#1e0c2f";
  g.fillStyle = c;
  if (type < 0.14) {
    var sh = 8 + bw * 0.6;
    g.beginPath();
    g.moveTo(x + bw * 0.28, -bh);
    g.lineTo(x + bw * 0.5, -bh - sh);
    g.lineTo(x + bw * 0.72, -bh);
    g.fill();
    e.light(x + bw * 0.5, -bh - sh, 3, "#ff3a5c", 0.8);
  } else if (type < 0.28) {
    g.beginPath();
    g.arc(x + bw / 2, -bh, bw * 0.38, Math.PI, 0);
    g.fill();
  } else if (type < 0.42) {
    g.fillRect(x + bw * 0.18, -bh * 1.22, bw * 0.64, bh * 0.22 + 1);
    g.fillRect(x + bw * 0.38, -bh * 1.36, bw * 0.24, bh * 0.14 + 1);
  } else if (type < 0.56) {
    g.fillRect(x + bw * 0.47, -bh - 13, 0.7, 13);
    e.light(x + bw * 0.5, -bh - 13, 2.2, "#ff4466", 0.75);
  } else if (type < 0.66) {
    g.beginPath();
    g.moveTo(x, -bh);
    g.lineTo(x + bw, -bh - bw * 0.35);
    g.lineTo(x + bw, -bh);
    g.fill();
  }
  g.fillRect(x, -bh, bw, bh + 4);
  g.fillStyle = "rgba(255,90,180,0.22)";
  g.fillRect(x, -bh, 0.7, bh);
  for (var yy = -bh + 3; yy < -2.5; yy += wy) {
    for (var xx = x + 1.5; xx < x + bw - 2.2; xx += wx) {
      if (e.rnd() < den) {
        g.globalAlpha = 0.25 + 0.7 * e.rnd();
        g.fillStyle = e.rnd() < 0.85 ? wc : cols[Math.floor(e.rnd() * 5)];
        g.fillRect(xx, yy, 1.3, 1.8);
      }
    }
  }
  g.globalAlpha = 1;
  if (type > 0.9 && bw > 16) {
    var sc = ["#ff4fd8", "#39e6ff", "#fff23d"][Math.floor(e.rnd() * 3)];
    g.strokeStyle = sc;
    g.lineWidth = 0.7;
    g.strokeRect(x + 2, -bh * 0.62, bw - 4, 4.5);
    e.light(x + bw / 2, -bh * 0.62 + 2.2, bw * 0.45, sc, 0.45);
  }
  x += bw + gap;
}
var bg = g.createLinearGradient(0, -32, 0, 4);
bg.addColorStop(0, "rgba(255,63,164,0)");
bg.addColorStop(1, "rgba(255,63,164,0.32)");
g.fillStyle = bg;
g.fillRect(-430, -32, 860, 36);
