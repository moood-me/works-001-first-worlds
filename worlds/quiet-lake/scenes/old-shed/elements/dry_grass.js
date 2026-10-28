var t = e.t,
  st = e.state || {},
  dk = Math.min(1, Math.max(0, st.dusk || 0)),
  sun = 1 - dk,
  S = 101,
  i;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
function L(a, b) {
  var P1 = parseInt(a.slice(1), 16),
    Q = parseInt(b.slice(1), 16);
  return (
    "rgb(" +
    (((P1 >> 16) + ((Q >> 16) - (P1 >> 16)) * dk) | 0) +
    "," +
    ((((P1 >> 8) & 255) + (((Q >> 8) & 255) - ((P1 >> 8) & 255)) * dk) | 0) +
    "," +
    (((P1 & 255) + ((Q & 255) - (P1 & 255)) * dk) | 0) +
    ")"
  );
}
var col = L("#1a1318", "#100e16"),
  cl = [
    [-1.95, 0.9, 26],
    [-1.35, 0.6, 14],
    [1.75, 0.7, 16],
    [2.25, 0.55, 12],
  ];
for (var c = 0; c < cl.length; c++) {
  var cx = cl[c][0],
    hmax = cl[c][1],
    n = cl[c][2],
    lit = cx > 0;
  var sg = g.createRadialGradient(cx, 0.02, 0, cx, 0.02, 0.4);
  sg.addColorStop(0, "rgba(26,19,24,0.45)");
  sg.addColorStop(1, "rgba(26,19,24,0)");
  g.save();
  g.translate(cx, 0.02);
  g.scale(1, 0.14);
  g.translate(-cx, -0.02);
  g.fillStyle = sg;
  g.beginPath();
  g.arc(cx, 0.02, 0.4, 0, 6.283);
  g.fill();
  g.restore();
  for (i = 0; i < n; i++) {
    var bx = cx + (R() - 0.5) * 0.35,
      bh = hmax * (0.4 + R() * 0.6),
      lean = (R() - 0.5) * 0.6 + (cx > 0 ? 0.1 : -0.1),
      ph = R() * 6.283,
      f = 0.4 + R() * 0.4,
      sw = Math.sin(t * f + ph) * 0.04 + Math.sin(t * f * 2.3 + ph * 1.3) * 0.015,
      kink = R() < 0.25,
      tx = bx + (lean + sw) * bh,
      ty = -bh,
      qx = bx + lean * bh * 0.3,
      qy = -bh * 0.55;
    if (kink) {
      tx = bx + (lean + 0.6 + sw) * bh * 0.55;
      ty = -bh * 0.5;
      qy = -bh * 0.85;
    }
    var w = 0.008 + R() * 0.008;
    g.fillStyle = col;
    g.beginPath();
    g.moveTo(bx - w, 0.02);
    g.quadraticCurveTo(qx - w * 0.3, qy, tx, ty);
    g.quadraticCurveTo(qx + w * 0.3, qy, bx + w, 0.02);
    g.closePath();
    g.fill();
    if (lit || R() < 0.3) {
      g.strokeStyle = "rgba(255,176,120," + ((lit ? 0.3 : 0.12) * sun + 0.03).toFixed(3) + ")";
      g.lineWidth = e.px;
      g.beginPath();
      g.moveTo(bx + w, 0.02);
      g.quadraticCurveTo(qx + w * 0.3, qy, tx, ty);
      g.stroke();
    }
  }
}
