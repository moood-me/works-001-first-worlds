var t = e.t,
  st = e.state,
  lf = st.light_fade || 0,
  sl = 1 - lf,
  S = 601;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
function trunk(x, w, ln) {
  g.fillStyle = "#140e16";
  g.beginPath();
  g.moveTo(x - w * 0.7, 0.3);
  g.quadraticCurveTo(x - w / 2, -0.3, x - w / 2, -1);
  g.lineTo(x - w * 0.38 + ln, -16);
  g.lineTo(x + w * 0.38 + ln, -16);
  g.lineTo(x + w / 2, -1);
  g.quadraticCurveTo(x + w / 2, -0.3, x + w * 0.75, 0.3);
  g.closePath();
  g.fill();
  g.strokeStyle = "#211722";
  g.lineWidth = 0.025;
  for (var i = 0; i < 30; i++) {
    var py = -R() * 12,
      px = x - w * 0.4 + R() * w * 0.8 + (ln * -py) / 16,
      pl = 0.3 + R() * 0.9;
    g.beginPath();
    g.moveTo(px, py);
    g.lineTo(px + (ln * pl) / 16, py - pl);
    g.stroke();
  }
}
trunk(-2.8, 0.75, -0.2);
trunk(2.5, 0.55, 0.25);
if (sl > 0.02) {
  var rg = g.createLinearGradient(0, 0, 0, -9);
  rg.addColorStop(0, "rgba(255,160,100,0)");
  rg.addColorStop(0.3, "rgba(255,165,105," + (0.35 * sl).toFixed(3) + ")");
  rg.addColorStop(1, "rgba(255,160,100,0)");
  g.strokeStyle = rg;
  g.lineWidth = 0.03;
  g.beginPath();
  g.moveTo(2.235, -0.5);
  g.lineTo(2.393, -9);
  g.stroke();
}
var sw = Math.sin(t * 0.31) * 0.06 + Math.sin(t * 0.77 + 1) * 0.025,
  P0x = -2.45,
  P0y = -7.6,
  P1x = -0.8,
  P1y = -7.4 + sw,
  P2x = 0.9,
  P2y = -5.6 + sw * 2;
g.strokeStyle = "#140e16";
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(P0x, P0y);
g.quadraticCurveTo(P1x, P1y, P2x, P2y);
g.stroke();
for (var j = 0; j < 26; j++) {
  var u = j / 25,
    a0 = (1 - u) * (1 - u),
    a1 = 2 * (1 - u) * u,
    a2 = u * u,
    bx = a0 * P0x + a1 * P1x + a2 * P2x,
    by = a0 * P0y + a1 * P1y + a2 * P2y,
    s = 0.12 + 0.2 * Math.sin(u * 3.1),
    ws = Math.sin(t * 0.5 + j * 0.6) * 0.02 * u;
  g.fillStyle = "#120c14";
  g.beginPath();
  g.ellipse(bx + ws, by + s * 0.5, s * 1.1, s * 0.45, 0.25 + ws, 0, 6.283);
  g.fill();
  g.strokeStyle = "#120c14";
  g.lineWidth = 0.012;
  for (var n = 0; n < 5; n++) {
    var nx = bx + (n - 2) * s * 0.35;
    g.beginPath();
    g.moveTo(nx, by + s * 0.4);
    g.lineTo(nx + ws * 2 + 0.03, by + s * 1.3 + (n % 2) * 0.06);
    g.stroke();
  }
}
function fern(x) {
  for (var f = 0; f < 7; f++) {
    var an = -2.6 + f * 0.35 + (R() - 0.5) * 0.2,
      L = 0.45 + R() * 0.4,
      ws = Math.sin(t * 0.6 + f * 1.3 + x) * 0.03,
      cx = x + Math.cos(an) * L * 0.4,
      cy = -L * 0.75,
      ex = x + Math.cos(an) * L + ws,
      ey = -L * 0.2 + ws;
    g.strokeStyle = "#18101a";
    g.lineWidth = 0.018;
    g.beginPath();
    g.moveTo(x, 0.05);
    g.quadraticCurveTo(cx, cy, ex, ey);
    g.stroke();
    g.fillStyle = "#18101a";
    for (var k = 1; k < 9; k++) {
      var v = k / 9,
        b0 = (1 - v) * (1 - v),
        b1 = 2 * (1 - v) * v,
        b2 = v * v,
        lx = b0 * x + b1 * cx + b2 * ex,
        ly = b0 * 0.05 + b1 * cy + b2 * ey;
      g.beginPath();
      g.ellipse(lx, ly, 0.05 * (1 - v) + 0.015, 0.014, an, 0, 6.283);
      g.fill();
    }
  }
}
fern(-2.3);
fern(2.95);
fern(-3.5);
