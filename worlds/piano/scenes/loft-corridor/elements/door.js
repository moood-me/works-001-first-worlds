var S = e.state;
var D = Math.max(0, Math.min(1, S.doorOpen == null ? 0 : S.doorOpen));
var LL = S.loftLights == null ? 1 : S.loftLights;
var L = S.sconceLit == null ? 1 : S.sconceLit;
var x0 = 0.5,
  x1 = 1.5,
  tp = -2.15;
g.fillStyle = "#22150e";
g.fillRect(0.4, -2.27, 1.2, 2.27);
g.fillStyle = "rgba(255,175,100," + (0.06 + 0.14 * L) + ")";
g.fillRect(0.4, -2.27, 0.025, 2.27);
g.fillRect(0.4, -2.27, 1.2, 0.02);
g.fillStyle = "#120b08";
g.fillRect(x0, tp, 1, -tp);
if (LL > 0.01) {
  g.globalAlpha = LL;
  var ig = g.createLinearGradient(0, tp, 0, 0);
  ig.addColorStop(0, "#3a2216");
  ig.addColorStop(0.45, "#7e4c2f");
  ig.addColorStop(0.75, "#8f5836");
  ig.addColorStop(0.76, "#4e3022");
  ig.addColorStop(1, "#5e3a27");
  g.fillStyle = ig;
  g.fillRect(x0, tp, 1, -tp);
  g.fillStyle = "rgba(40,20,14,0.3)";
  for (var r = 0; r < 16; r++) {
    g.fillRect(x0, tp + 0.25 + r * 0.08, 1, 0.01);
  }
  g.strokeStyle = "rgba(30,18,12,0.45)";
  g.lineWidth = 0.008;
  g.beginPath();
  for (var i = 0; i < 7; i++) {
    var fx = x0 + i * 0.17;
    g.moveTo(1.0 + (fx - 1.0) * 0.4, -0.52);
    g.lineTo(fx + (fx - 1.0) * 0.6, 0);
  }
  g.stroke();
  g.fillStyle = "#1e120c";
  g.fillRect(1.02, -1.05, 0.6, 0.55);
  g.fillStyle = "rgba(255,190,120,0.25)";
  g.fillRect(1.02, -1.05, 0.6, 0.01);
  g.strokeStyle = "#140c09";
  g.lineWidth = 0.006;
  g.beginPath();
  g.moveTo(0.78, tp);
  g.lineTo(0.78, -1.78);
  g.stroke();
  var bg = g.createRadialGradient(0.78, -1.72, 0, 0.78, -1.72, 0.06);
  bg.addColorStop(0, "rgba(255,235,190,1)");
  bg.addColorStop(1, "rgba(255,160,80,0)");
  g.fillStyle = bg;
  g.fillRect(0.7, -1.8, 0.16, 0.16);
  g.globalAlpha = 1;
}
var a = D * 1.35,
  ca = Math.cos(a),
  sa = Math.sin(a),
  w = ca;
var xf = x1 - w;
var P = function (u, v) {
  var x = x1 - w * u;
  var yt = tp + 0.09 * sa * u,
    yb = -0.05 * sa * u;
  return [x, yt + (yb - yt) * v];
};
var quad = function (u0, v0, u1, v1) {
  var p = [P(u0, v0), P(u1, v0), P(u1, v1), P(u0, v1)];
  g.beginPath();
  g.moveTo(p[0][0], p[0][1]);
  for (var j = 1; j < 4; j++) g.lineTo(p[j][0], p[j][1]);
  g.closePath();
};
if (w > 0.01) {
  quad(0, 0, 1, 1);
  g.fillStyle = "#3a2519";
  g.fill();
  g.fillStyle = "rgba(8,5,4," + (0.15 + 0.4 * sa) + ")";
  g.fill();
  var lg = g.createLinearGradient(xf, 0, x1, 0);
  lg.addColorStop(0, "rgba(255,170,100," + 0.12 * L * (1 - sa) + ")");
  lg.addColorStop(1, "rgba(255,170,100,0)");
  g.fillStyle = lg;
  g.fill();
  quad(0.13, 0.06, 0.87, 0.46);
  g.fillStyle = "rgba(0,0,0,0.22)";
  g.fill();
  g.strokeStyle = "rgba(255,190,130,0.08)";
  g.lineWidth = 0.012;
  g.stroke();
  quad(0.13, 0.52, 0.87, 0.94);
  g.fillStyle = "rgba(0,0,0,0.22)";
  g.fill();
  g.stroke();
  var N = P(0.5, 0.17);
  g.fillStyle = "#8a6c3c";
  g.fillRect(N[0] - 0.04 * ca, N[1] - 0.05, 0.08 * ca, 0.1);
  var K = P(0.9, 0.52);
  g.fillStyle = "#9a7a44";
  g.beginPath();
  g.ellipse(K[0], K[1], 0.035 * Math.max(0.3, ca), 0.035, 0, 0, 6.283);
  g.fill();
  g.fillStyle = "rgba(255,220,160," + (0.2 + 0.4 * L) + ")";
  g.beginPath();
  g.arc(K[0] - 0.01 * ca, K[1] - 0.01, 0.01, 0, 6.283);
  g.fill();
  if (sa > 0.02) {
    var E0 = P(1, 0),
      E1 = P(1, 1);
    g.fillStyle = LL > 0.01 ? "#6a4028" : "#2a1a12";
    g.fillRect(E0[0] - 0.045 * sa, E0[1], 0.045 * sa, E1[1] - E0[1]);
  }
}
if (D < 0.05 && LL > 0.01) {
  g.fillStyle = "rgba(255,175,90," + 0.7 * LL + ")";
  g.fillRect(x0 + 0.02, -0.012, 0.96, 0.012);
  e.light(1.0, -0.01, 0.4, "#ffa04a", 0.3 * LL);
}
if (D > 0.01 && LL > 0.01) {
  e.light((x0 + xf) / 2, -1.2, 0.5 + 1.8 * D, "#ffa04a", 0.55 * LL * Math.min(1, D * 5));
}
