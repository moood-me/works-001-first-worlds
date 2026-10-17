var G = e.state.cityGlow == null ? 0.6 : e.state.cityGlow;
var hz = g.createLinearGradient(0, -120, 0, 40);
hz.addColorStop(0, "rgba(240,150,120,0)");
hz.addColorStop(0.55, "rgba(220,140,130," + 0.08 * G + ")");
hz.addColorStop(1, "rgba(255,165,100," + 0.22 * G + ")");
g.fillStyle = hz;
g.fillRect(-800, -120, 1600, 160);
var far = "#2a2c4c",
  near = "#1a1b30";
g.fillStyle = far;
g.fillRect(148, -100, 4, 140);
g.beginPath();
g.ellipse(150, -82, 7, 4, 0, 0, 6.283);
g.fill();
g.fillRect(149.4, -125, 1.2, 25);
g.fillRect(-275, -78, 30, 120);
g.fillRect(367, -70, 26, 110);
g.fillRect(-537, -60, 34, 100);
function layer(n, base, hmax, col, wa, lit) {
  for (var i = 0; i < n; i++) {
    var x = -800 + e.rnd() * 1600,
      w = 14 + e.rnd() * 34,
      h = base + Math.pow(e.rnd(), 1.7) * hmax,
      ant = e.rnd();
    g.fillStyle = col;
    g.fillRect(x, -h, w, h + 45);
    if (ant < 0.25) {
      g.fillRect(x + w * 0.5, -h - 7, 1, 7);
    }
    for (var yy = -h + 3; yy < 32; yy += 3.4) {
      for (var xx = x + 2; xx < x + w - 2; xx += 2.8) {
        var r = e.rnd(),
          a = e.rnd(),
          c = e.rnd();
        if (r < lit * G + 0.025) {
          g.globalAlpha = wa * (0.4 + a * 0.6);
          g.fillStyle = c < 0.82 ? "#ffc27a" : "#cfdcff";
          g.fillRect(xx, yy, 1.3, 1.7);
        }
      }
    }
    g.globalAlpha = 1;
  }
}
layer(80, 4, 45, far, 0.55, 0.26);
layer(60, 2, 26, near, 0.85, 0.3);
var sg = g.createLinearGradient(0, -14, 0, 8);
sg.addColorStop(0, "rgba(255,160,90,0)");
sg.addColorStop(1, "rgba(255,160,90," + 0.22 * G + ")");
g.fillStyle = sg;
g.fillRect(-800, -14, 1600, 22);
