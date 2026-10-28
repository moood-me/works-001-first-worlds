var t = e.t,
  S = 41;
var st = e.state || {},
  s = Math.max(0, Math.min(1, st.sunset || 0)),
  m = Math.max(0, Math.min(1, st.morning || 0));
function P(h) {
  var n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function C(a, b, c, al) {
  var A = P(a),
    B = P(b),
    D = P(c),
    o = [];
  for (var i = 0; i < 3; i++) {
    var v = A[i] + (B[i] - A[i]) * s;
    o.push(Math.round(v + (D[i] - v) * m));
  }
  return al == null ? "rgb(" + o.join(",") + ")" : "rgba(" + o.join(",") + "," + Math.max(0, al).toFixed(3) + ")";
}
var sw = (1 - m) * (1 - 0.55 * s);
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
function dw(x) {
  return 7 + 5 * (1 + Math.tanh((x - 2) / 4)) + 0.008 * x * x;
}
function yw(x) {
  return Math.max(-19.9, 14 - dw(x));
}
var x, i;
function shore() {
  g.beginPath();
  g.moveTo(-60, 20);
  for (x = -60; x <= 60.01; x += 0.5) g.lineTo(x, yw(x));
  g.lineTo(60, 20);
  g.closePath();
}
function edge(o) {
  g.beginPath();
  for (x = -60; x <= 60.01; x += 0.5) {
    var yy = yw(x) + o;
    if (x < -59.9) g.moveTo(x, yy);
    else g.lineTo(x, yy);
  }
}
var cDk = C("#2a1a22", "#140c14", "#5a525c"),
  cLt = C("#e8b090", "#7a5050", "#f4eeea");
shore();
var sg = g.createLinearGradient(0, -20, 0, 20);
sg.addColorStop(0, C("#b07c62", "#563840", "#cbbdb4"));
sg.addColorStop(0.5, C("#96664f", "#422b33", "#b8aaa4"));
sg.addColorStop(0.8, C("#6e4c48", "#2e2029", "#9c9096"));
sg.addColorStop(1, C("#4e3640", "#20161f", "#867a84"));
g.fillStyle = sg;
g.fill();
g.save();
shore();
g.clip();
for (i = 0; i < 70; i++) {
  var mx = (R() - 0.5) * 60,
    my = -12 + R() * 32,
    mr = 0.8 + R() * 3.5,
    dk = R() < 0.5,
    ma = R() * 3;
  g.globalAlpha = 0.06;
  g.fillStyle = dk ? cDk : cLt;
  g.beginPath();
  g.ellipse(mx, my, mr * 1.6, mr, ma, 0, 6.283);
  g.fill();
}
g.strokeStyle = cDk;
g.lineWidth = 0.02;
for (i = 0; i < 260; i++) {
  var rx = (R() - 0.5) * 44,
    ry = -6 + R() * 26,
    rl = 0.3 + R() * 0.9,
    cu = (R() - 0.5) * 0.12;
  g.globalAlpha = 0.08 + R() * 0.06;
  g.beginPath();
  g.moveTo(rx - rl / 2, ry);
  g.quadraticCurveTo(rx, ry + cu, rx + rl / 2, ry + cu * 0.3);
  g.stroke();
}
for (i = 0; i < 500; i++) {
  var px = (R() - 0.5) * 40,
    py = -6 + R() * 26,
    pr = 0.008 + R() * 0.022,
    lt = R() < 0.3;
  g.globalAlpha = lt ? 0.22 : 0.32;
  g.fillStyle = lt ? cLt : cDk;
  g.beginPath();
  g.arc(px, py, pr, 0, 6.283);
  g.fill();
}
for (i = 0; i < 22; i++) {
  var bx = (R() - 0.5) * 30,
    by = -3 + R() * 20,
    br = 0.03 + R() * 0.05,
    bo = R() * 3;
  g.globalAlpha = 0.6;
  g.fillStyle = cDk;
  g.beginPath();
  g.ellipse(bx, by, br * 1.3, br, bo, 0, 6.283);
  g.fill();
  g.globalAlpha = 0.3;
  g.fillStyle = cLt;
  g.beginPath();
  g.ellipse(bx, by - br * 0.4, br * 0.8, br * 0.4, bo, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
if (sw > 0.01) {
  g.globalCompositeOperation = "lighter";
  var sx = 1.5,
    sy = yw(1.5) + 1.5,
    shg = g.createRadialGradient(sx, sy, 0, sx, sy, 10);
  shg.addColorStop(0, "rgba(255,170,110," + (0.16 * sw).toFixed(3) + ")");
  shg.addColorStop(1, "rgba(255,170,110,0)");
  g.fillStyle = shg;
  g.fillRect(sx - 10, sy - 10, 20, 20);
  g.globalCompositeOperation = "source-over";
}
g.strokeStyle = cDk;
g.lineWidth = 0.05;
for (x = -24; x < 24; x += 0.18) {
  if (Math.sin(x * 1.3 + Math.sin(x * 0.37) * 2) < 0.2) continue;
  var wy = yw(x) + 1.8 + 0.35 * Math.sin(x * 0.6) + 0.15 * Math.sin(x * 2.1);
  g.globalAlpha = 0.28;
  g.beginPath();
  g.moveTo(x, wy);
  g.lineTo(x + 0.16, wy + 0.03 * Math.sin(x * 5));
  g.stroke();
}
g.globalAlpha = 0.5;
g.strokeStyle = C("#3a2630", "#1a121c", "#6e6874");
g.lineWidth = 0.8;
edge(0.4);
g.stroke();
g.globalAlpha = 0.3;
g.strokeStyle = C("#c48a70", "#6e4048", "#d8d6de");
g.lineWidth = 0.12;
edge(0.12);
g.stroke();
var fp = Math.max(0, Math.min(1, st.footprints || 0));
if (fp > 0) {
  var P0x = -2.9,
    P0y = 6.25,
    P1x = -0.95,
    P1y = 5.65,
    NF = 7,
    ux = P1x - P0x,
    uy = P1y - P0y,
    ln = Math.sqrt(ux * ux + uy * uy);
  ux /= ln;
  uy /= ln;
  var ang = Math.atan2(uy, ux);
  for (i = 0; i < NF; i++) {
    var k = i / (NF - 1),
      sd = (i % 2 ? 1 : -1) * 0.08,
      fx = P0x + (P1x - P0x) * k - uy * sd,
      fy = P0y + (P1y - P0y) * k + ux * sd;
    var al = Math.max(0, Math.min(1, fp * NF - i));
    if (al <= 0) continue;
    g.save();
    g.translate(fx, fy);
    g.rotate(ang);
    g.globalAlpha = 0.45 * al;
    g.fillStyle = cDk;
    g.beginPath();
    g.ellipse(0, 0, 0.1, 0.04, 0, 0, 6.283);
    g.fill();
    g.beginPath();
    g.ellipse(0.125, 0, 0.03, 0.036, 0, 0, 6.283);
    g.fill();
    g.globalAlpha = 0.25 * al;
    g.fillStyle = cLt;
    g.beginPath();
    g.ellipse(0, -0.045, 0.09, 0.012, 0, 0, 6.283);
    g.fill();
    g.restore();
  }
}
g.restore();
var lap = 0.04 * Math.sin(t * 0.35) + 0.02 * Math.sin(t * 0.13 + 1);
g.globalAlpha = 0.28 + 0.08 * Math.sin(t * 0.3);
g.strokeStyle = C("#ffd2a8", "#a86a60", "#f4f2f6");
g.lineWidth = 0.15;
edge(-0.05 + lap);
g.stroke();
g.globalAlpha = 1;
