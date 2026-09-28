g.lineCap = "round";
var t = e.t;
for (var i = 0; i < 28; i++) {
  var x = (e.rnd() - 0.5) * 1.7,
    h = 0.45 + e.rnd() * 1.2,
    bend = (e.rnd() - 0.35) * 0.45,
    kind = e.rnd(),
    ph = e.rnd() * 6.2832,
    fr = 0.3 + e.rnd() * 0.45,
    dk = e.rnd(),
    lw = e.rnd(),
    cat = e.rnd(),
    rim = e.rnd();
  var w = (Math.sin(t * fr + ph) * 0.6 + Math.sin(t * fr * 2.13 + ph * 1.7) * 0.4) * 0.04 * h;
  var tx = x + bend + w,
    ty = -h;
  var col = dk < 0.5 ? "#0e111b" : "#141827";
  if (kind < 0.22) {
    g.fillStyle = col;
    var bw = 0.018 + lw * 0.02;
    g.beginPath();
    g.moveTo(x - bw, 0.05);
    g.quadraticCurveTo(x + bend * 0.25 - bw * 0.5, -h * 0.55, tx, ty);
    g.quadraticCurveTo(x + bend * 0.25 + bw, -h * 0.5, x + bw, 0.05);
    g.closePath();
    g.fill();
  } else if (kind < 0.32) {
    var kx = x + bend * 0.3 + w * 0.5,
      ky = -h * 0.55;
    g.strokeStyle = col;
    g.lineWidth = 0.016 + lw * 0.01;
    g.beginPath();
    g.moveTo(x, 0.05);
    g.quadraticCurveTo(x + bend * 0.1, -h * 0.3, kx, ky);
    g.lineTo(kx + (bend > 0 ? 0.22 : -0.22) + w * 0.3, ky + 0.2 + lw * 0.15);
    g.stroke();
  } else {
    g.strokeStyle = col;
    g.lineWidth = 0.012 + lw * 0.018;
    g.beginPath();
    g.moveTo(x, 0.05);
    g.quadraticCurveTo(x + bend * 0.3 + w * 0.3, -h * 0.6, tx, ty);
    g.stroke();
    if (cat < 0.3) {
      g.fillStyle = "#1b1714";
      g.beginPath();
      g.ellipse(x + bend * 0.9 + w * 0.9, -h * 0.86, 0.022 + lw * 0.006, 0.08 + cat * 0.05, bend * 0.5, 0, 6.2832);
      g.fill();
    }
    if (rim < 0.4) {
      g.strokeStyle = "rgba(170,185,220,0.2)";
      g.lineWidth = 1.1 * e.px;
      g.beginPath();
      g.moveTo(x + 0.008, 0);
      g.quadraticCurveTo(x + bend * 0.3 + w * 0.3 + 0.008, -h * 0.6, tx + 0.006, ty);
      g.stroke();
    }
  }
}
