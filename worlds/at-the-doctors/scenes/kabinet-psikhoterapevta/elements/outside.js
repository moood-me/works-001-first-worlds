var A = e.aspect,
  s = e.state || {},
  rn = s.rain == null ? 0.6 : s.rain;
var gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#1a2030");
gr.addColorStop(0.4, "#3d4659");
gr.addColorStop(0.44, "#6b6876");
gr.addColorStop(0.49, "#3a3f4c");
gr.addColorStop(1, "#121419");
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
var x = -0.3;
while (x < A + 0.3) {
  var w = 0.02 + e.rnd() * 0.04,
    top = 0.31 + e.rnd() * 0.07;
  g.fillStyle = "rgba(30,33,42," + (0.9 - rn * 0.3).toFixed(2) + ")";
  g.fillRect(x, top, w, 1.3 - top);
  for (var yy = top + 0.008; yy < 0.6; yy += 0.012) {
    for (var xx = x + 0.004; xx < x + w - 0.004; xx += 0.008) {
      if (e.rnd() < 0.22) {
        g.fillStyle = "rgba(225,180,115," + (0.25 + e.rnd() * 0.4).toFixed(2) + ")";
        g.fillRect(xx, yy, 0.003, 0.004);
      }
    }
  }
  x += w + 0.002;
}
g.fillStyle = "rgba(105,112,130," + (0.25 * rn).toFixed(2) + ")";
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
