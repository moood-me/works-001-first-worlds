var t = e.t,
  st = e.state;
var fd = st.figure_distance == null ? 0.4 : Math.max(0, Math.min(1, st.figure_distance)),
  I = Math.max(0, Math.min(1, st.figure_identity || 0)),
  HR = st.hand_raised == null ? 1 : Math.max(0, Math.min(1, st.hand_raised)),
  obj = st.object_in_hand || "none",
  S = st.surf_height || 0;
var dp = 30 - 23 * fd,
  s = 8 / dp,
  lx = 0.27 - 0.54 * fd,
  fy = 1.7 * (s - 1) - 0.5 * s;
var gu = Math.sin(t * 1.7) * 0.5 + Math.sin(t * 2.9 + 1) * 0.3 + Math.sin(t * 0.63) * 0.4;
var gust = 0.5 + 0.4 * gu;
var Ln = 0.05 + 0.02 * gu;
function WX(x, y) {
  return lx + s * (x + Ln * y);
}
function WY(y) {
  return fy + s * y;
}
g.save();
g.translate(lx, fy);
g.scale(s, s);
g.beginPath();
g.moveTo(-0.95, 0.6);
g.lineTo(-0.85, 0.12);
g.lineTo(-0.5, 0.02);
g.lineTo(0.1, -0.02);
g.lineTo(0.6, 0.03);
g.lineTo(0.9, 0.15);
g.lineTo(1.0, 0.6);
g.closePath();
var rg = g.createLinearGradient(0, 0, 0, 0.6);
rg.addColorStop(0, "#1f2638");
rg.addColorStop(1, "#0a0d16");
g.fillStyle = rg;
g.fill();
g.strokeStyle = "rgba(170,186,216,0.5)";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-0.85, 0.12);
g.lineTo(-0.5, 0.02);
g.lineTo(0.1, -0.02);
g.stroke();
for (var i = 0; i < 8; i++) {
  var x = -1.1 + i * 0.3,
    ph = i * 1.9;
  var a = Math.max(0, Math.sin(t * 0.7 + ph)) * (0.3 + 0.4 * S);
  g.fillStyle = "rgba(205,216,238," + a.toFixed(3) + ")";
  g.beginPath();
  g.ellipse(x, 0.5 + Math.sin(t * 0.9 + ph) * 0.03, 0.22, 0.035, 0, 0, 6.283);
  g.fill();
}
g.transform(1, 0, Ln, 1, 0, 0);
var ink = "#121624",
  rim = "rgba(150,172,210,0.45)";
g.fillStyle = "#0e111c";
g.beginPath();
g.moveTo(-0.13, -0.5);
g.lineTo(-0.24, 0);
g.lineTo(-0.12, 0);
g.lineTo(-0.03, -0.5);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(0.03, -0.5);
g.lineTo(0.14, 0);
g.lineTo(0.26, 0);
g.lineTo(0.14, -0.5);
g.closePath();
g.fill();
g.fillRect(-0.29, -0.07, 0.18, 0.07);
g.fillRect(0.12, -0.07, 0.18, 0.07);
var f1 = Math.sin(t * 3.1) * 0.06 + Math.sin(t * 4.7 + 1) * 0.04,
  f2 = Math.sin(t * 2.3 + 2) * 0.05,
  f3 = Math.sin(t * 5.3) * 0.03;
var tl = 0.18 + 0.22 * gust;
g.beginPath();
g.moveTo(-0.19, -1.42);
g.quadraticCurveTo(-0.15, -1.0, -0.2, -0.38);
g.lineTo(0.02, -0.36);
g.quadraticCurveTo(0.2 + tl * 0.5, -0.36 + f3, 0.3 + tl + f1, -0.42 + f2);
g.quadraticCurveTo(0.2 + tl * 0.6, -0.6 + f2, 0.36 + tl * 0.7 + f1 * 0.5, -0.72 + f3);
g.quadraticCurveTo(0.22, -0.85, 0.2, -1.05);
g.quadraticCurveTo(0.22, -1.3, 0.19, -1.42);
g.closePath();
g.fillStyle = ink;
g.fill();
g.beginPath();
g.ellipse(0, -1.42, 0.21, 0.06, 0, 0, 6.283);
g.fill();
g.strokeStyle = "rgba(55,66,92,0.7)";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0.18, -0.95);
g.quadraticCurveTo(0.26 + tl * 0.4, -0.62 + f2 * 0.5, 0.28 + tl * 0.8 + f1, -0.5 + f2);
g.stroke();
g.strokeStyle = rim;
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-0.2, -1.42);
g.quadraticCurveTo(-0.16, -1.0, -0.21, -0.38);
g.stroke();
if (I > 0.25) {
  var sa = Math.min(1, (I - 0.25) * 2);
  g.globalAlpha = sa;
  g.fillStyle = "#6e3a3c";
  g.fillRect(-0.08, -1.52, 0.16, 0.1);
  g.beginPath();
  g.moveTo(0.05, -1.5);
  g.quadraticCurveTo(0.2, -1.52 + f2, 0.32 + 0.15 * gust + f1, -1.44 + f3);
  g.lineTo(0.3 + 0.15 * gust + f1, -1.38 + f3);
  g.quadraticCurveTo(0.18, -1.43 + f2, 0.06, -1.43);
  g.closePath();
  g.fill();
  g.globalAlpha = 1;
}
if (I > 0.05) {
  g.strokeStyle = "rgba(118,104,98," + I.toFixed(3) + ")";
  g.lineWidth = 0.022;
  g.lineCap = "round";
  for (var k = 0; k < 6; k++) {
    var w1 = Math.sin(t * 4.1 + k * 1.3) * 0.03,
      w2 = Math.sin(t * 6.3 + k) * 0.02;
    g.beginPath();
    g.moveTo(-0.05 + k * 0.02, -1.67 + k * 0.01);
    g.quadraticCurveTo(
      0.08 + k * 0.01,
      -1.68 + k * 0.02 + w2,
      0.12 + (0.1 + 0.15 * gust) * I + k * 0.015,
      -1.64 + k * 0.025 + w1,
    );
    g.stroke();
  }
}
g.fillStyle = "#151925";
g.beginPath();
g.arc(0, -1.6, 0.095, 0, 6.283);
g.fill();
if (I > 0.05) {
  g.fillStyle = "rgba(118,104,98," + I.toFixed(3) + ")";
  g.beginPath();
  g.arc(0.005, -1.615, 0.097, Math.PI * 1.05, Math.PI * 1.95);
  g.fill();
  g.fillStyle = "rgba(150,165,198," + (0.45 * I).toFixed(3) + ")";
  g.beginPath();
  g.arc(0, -1.59, 0.085, Math.PI * 0.6, Math.PI * 1.3);
  g.arc(0.02, -1.59, 0.07, Math.PI * 1.3, Math.PI * 0.6, true);
  g.closePath();
  g.fill();
}
var hcx = 0.01 + 0.08 * I,
  hcy = -1.61 + 0.13 * I,
  hry = 0.15 - 0.08 * I,
  hrx = 0.13 - 0.02 * I;
g.fillStyle = ink;
g.beginPath();
if (I < 0.98) {
  g.ellipse(hcx, hcy, hrx, hry, 0.1 * I, Math.PI * (0.15 + 0.7 * I), Math.PI * (2.15 - 0.1 * I));
  g.quadraticCurveTo(
    hcx + 0.14 + 0.06 * gust,
    hcy - 0.04 + f3,
    hcx + 0.16 + 0.08 * gust + f1 * 0.5,
    hcy - 0.08 + f2 * 0.5,
  );
  g.closePath();
} else {
  g.ellipse(0.1, -1.48, 0.11, 0.07, 0, 0, 6.283);
}
g.fill();
if (I < 0.6) {
  g.strokeStyle = rim;
  g.lineWidth = 0.02;
  g.beginPath();
  g.arc(hcx, hcy, hrx, Math.PI * 0.75, Math.PI * 1.45);
  g.stroke();
}
var shX = -0.18,
  shY = -1.38;
var a1 = 1.72 + (4.36 - 1.72) * HR + Math.sin(t * 2.3) * 0.04 * HR + Math.sin(t * 3.7 + 1) * 0.02;
var ex = shX + Math.cos(a1) * 0.3,
  ey = shY + Math.sin(a1) * 0.3;
var a2 = a1 + 0.1 + 0.15 * HR;
var hx = ex + Math.cos(a2) * 0.28,
  hy = ey + Math.sin(a2) * 0.28;
g.lineCap = "round";
g.lineJoin = "round";
g.strokeStyle = ink;
g.lineWidth = 0.1;
g.beginPath();
g.moveTo(shX + 0.03, shY);
g.lineTo(ex, ey);
g.lineTo(hx, hy);
g.stroke();
g.strokeStyle = rim;
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(shX - 0.02, shY - 0.03);
g.lineTo(ex - 0.045, ey);
g.lineTo(hx - 0.045, hy);
g.stroke();
g.strokeStyle = ink;
g.lineWidth = 0.1;
g.beginPath();
g.moveTo(0.17, -1.36);
g.lineTo(0.16, -1.12);
g.lineTo(0.03, -1.3);
g.stroke();
g.fillStyle = "#1a1e2a";
g.beginPath();
g.arc(hx, hy, 0.045, 0, 6.283);
g.fill();
var LX = WX(hx, hy),
  LY = WY(hy);
var warm = 0;
if (obj == "lantern") {
  var ang = Math.sin(t * 1.9) * 0.2 + gust * 0.25;
  var fl = 0.85 + 0.15 * Math.sin(t * 13) * Math.sin(t * 7.3);
  g.save();
  g.translate(hx, hy);
  g.rotate(-ang);
  g.strokeStyle = "#0c0e16";
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(0, 0);
  g.lineTo(0, 0.07);
  g.stroke();
  var hg = g.createRadialGradient(0, 0.14, 0, 0, 0.14, 0.5);
  hg.addColorStop(0, "rgba(255,190,120," + (0.35 * fl).toFixed(3) + ")");
  hg.addColorStop(1, "rgba(255,170,100,0)");
  g.fillStyle = hg;
  g.fillRect(-0.5, -0.36, 1, 1);
  g.fillStyle = "#0c0e16";
  g.fillRect(-0.055, 0.07, 0.11, 0.15);
  var lg = g.createRadialGradient(0, 0.15, 0, 0, 0.15, 0.07);
  lg.addColorStop(0, "rgba(255,236,190," + fl.toFixed(3) + ")");
  lg.addColorStop(1, "rgba(240,150,80," + (0.85 * fl).toFixed(3) + ")");
  g.fillStyle = lg;
  g.fillRect(-0.04, 0.09, 0.08, 0.11);
  g.fillStyle = "#0c0e16";
  g.beginPath();
  g.moveTo(-0.06, 0.075);
  g.lineTo(0, 0.04);
  g.lineTo(0.06, 0.075);
  g.closePath();
  g.fill();
  g.restore();
  warm = 0.4 * fl;
  var cx = hx + Math.sin(ang) * 0.15,
    cy = hy + Math.cos(ang) * 0.15;
  e.light(WX(cx, cy), WY(cy), 3 * s, "#ffb070", 0.9 * fl);
} else if (obj == "flare") {
  var fl = 0.75 + 0.25 * Math.sin(t * 17) * Math.sin(t * 9.1 + 1);
  g.strokeStyle = "#5a2a26";
  g.lineWidth = 0.035;
  g.beginPath();
  g.moveTo(hx, hy + 0.03);
  g.lineTo(hx + 0.02, hy - 0.15);
  g.stroke();
  for (var j = 0; j < 12; j++) {
    var v = j / 11,
      q = Math.sin(j * 91.7) * 0.5;
    var sx = hx + 0.02 + v * (0.9 + 0.4 * gust) + Math.sin(t * 1.3 + j) * 0.04 * v,
      sy = hy - 0.2 - v * 0.35 + q * 0.1 * v,
      r = 0.05 + v * 0.28;
    var sg = g.createRadialGradient(sx, sy, 0, sx, sy, r);
    sg.addColorStop(0, "rgba(130,112,120," + ((1 - v) * 0.28).toFixed(3) + ")");
    sg.addColorStop(1, "rgba(120,105,115,0)");
    g.fillStyle = sg;
    g.beginPath();
    g.arc(sx, sy, r, 0, 6.283);
    g.fill();
  }
  var fx = hx + 0.02,
    fy2 = hy - 0.18;
  var fg = g.createRadialGradient(fx, fy2, 0, fx, fy2, 0.35 * fl);
  fg.addColorStop(0, "rgba(255,235,210,0.95)");
  fg.addColorStop(0.15, "rgba(255,120,80,0.8)");
  fg.addColorStop(0.5, "rgba(220,70,50,0.25)");
  fg.addColorStop(1, "rgba(200,60,40,0)");
  g.fillStyle = fg;
  g.beginPath();
  g.arc(fx, fy2, 0.35 * fl, 0, 6.283);
  g.fill();
  warm = 0.55 * fl;
  e.light(WX(fx, fy2), WY(fy2), 6 * s, "#ff6040", 1.0 * fl);
} else if (obj == "letter") {
  g.save();
  g.translate(hx, hy - 0.02);
  g.rotate(-0.3 + Math.sin(t * 6) * 0.08);
  g.fillStyle = "rgba(206,210,216,0.95)";
  g.beginPath();
  g.moveTo(0, -0.02);
  g.lineTo(0.16 + 0.02 * Math.sin(t * 9), -0.07 + 0.02 * Math.sin(t * 7));
  g.lineTo(0.17 + 0.015 * Math.sin(t * 8 + 1), 0.08 + 0.02 * Math.sin(t * 8));
  g.lineTo(0.01, 0.1);
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(120,128,150,0.6)";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(0.005, 0.04);
  g.lineTo(0.165, 0.0);
  g.stroke();
  g.restore();
} else if (obj == "rope") {
  g.strokeStyle = "#6d604f";
  g.lineWidth = 0.022;
  g.beginPath();
  g.ellipse(hx + 0.01, hy + 0.17, 0.08, 0.15, 0.1, 0, 6.283);
  g.stroke();
  g.beginPath();
  g.ellipse(hx + 0.03, hy + 0.18, 0.07, 0.14, -0.1, 0, 6.283);
  g.stroke();
  g.beginPath();
  g.moveTo(hx + 0.05, hy + 0.3);
  g.quadraticCurveTo(
    hx + 0.25,
    hy + 0.36 + Math.sin(t * 3.3) * 0.05,
    hx + 0.45 + 0.12 * gust,
    hy + 0.26 + Math.sin(t * 4.1) * 0.06,
  );
  g.stroke();
} else {
  g.strokeStyle = "#1a1e2a";
  g.lineWidth = 0.018;
  for (var k = 0; k < 4; k++) {
    var fa = a2 - 0.5 + k * 0.33;
    g.beginPath();
    g.moveTo(hx, hy);
    g.lineTo(hx + Math.cos(fa) * 0.08, hy + Math.sin(fa) * 0.08);
    g.stroke();
  }
}
if (warm > 0) {
  var wc = obj == "flare" ? "255,110,80" : "255,185,120";
  var hg2 = g.createRadialGradient(-0.03, -1.62, 0, -0.03, -1.62, 0.14);
  hg2.addColorStop(0, "rgba(" + wc + "," + (warm * (0.35 + 0.65 * I)).toFixed(3) + ")");
  hg2.addColorStop(1, "rgba(" + wc + ",0)");
  g.fillStyle = hg2;
  g.beginPath();
  g.arc(-0.03, -1.62, 0.14, 0, 6.283);
  g.fill();
}
g.restore();
e.at(WX(0, -1.6), WY(-1.6));
