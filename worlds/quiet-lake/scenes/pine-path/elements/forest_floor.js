var st = e.state,
  lf = st.light_fade || 0,
  pd = st.path_depth == null ? 0.55 : st.path_depth,
  S = 211;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
function pc(y) {
  var d = 22 - y;
  return 0.9 * Math.sin(d / 8) * Math.min(1, Math.max(0, d) / 12);
}
var De = 10 + 40 * pd,
  i,
  x,
  y;
var bg = g.createLinearGradient(0, -24, 0, 24);
bg.addColorStop(0, "#3a2a3a");
bg.addColorStop(0.5, "#2c202c");
bg.addColorStop(1, "#1c141e");
g.fillStyle = bg;
g.fillRect(-30, -24, 60, 48);
g.lineWidth = 0.02;
for (i = 0; i < 1400; i++) {
  x = (R() - 0.5) * 60;
  y = (R() - 0.5) * 48;
  var a = R() * 6.283,
    l = 0.08 + R() * 0.25;
  g.globalAlpha = 0.25 + R() * 0.25;
  g.strokeStyle = R() < 0.5 ? "#1a1218" : "#4a3842";
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
  g.stroke();
}
for (i = 0; i < 60; i++) {
  x = (R() - 0.5) * 60;
  y = (R() - 0.5) * 48;
  var r1 = 0.5 + R() * 1.5,
    r2 = 0.3 + R() * 0.8,
    ro = R() * 3;
  if (Math.abs(x - pc(y)) < 1.6) continue;
  g.globalAlpha = 0.35;
  g.fillStyle = "#231a26";
  g.beginPath();
  g.ellipse(x, y, r1, r2, ro, 0, 6.283);
  g.fill();
}
var y0 = 22 - (De - 7),
  y1 = 22 - De;
function band(ex, col, al) {
  var gr = g.createLinearGradient(0, y0, 0, y1);
  gr.addColorStop(0, col.replace("A", al));
  gr.addColorStop(1, col.replace("A", 0));
  g.fillStyle = gr;
  g.beginPath();
  var yy;
  for (yy = 24; yy >= -24; yy -= 0.5) g.lineTo(pc(yy) - (0.62 + 0.12 * Math.sin(yy * 1.3)) - ex, yy);
  for (yy = -24; yy <= 24; yy += 0.5) g.lineTo(pc(yy) + (0.62 + 0.12 * Math.sin(yy * 1.3)) + ex, yy);
  g.closePath();
  g.fill();
}
g.globalAlpha = 1;
band(0.35, "rgba(106,74,74,A)", 0.25);
band(0, "rgba(122,88,80,A)", 0.65);
for (i = 0; i < 9; i++) {
  var ry = 22 - (2 + R() * (De - 6)),
    c = pc(ry),
    vis = Math.max(0, Math.min(1, (De - (22 - ry)) / 7)),
    j1 = (R() - 0.5) * 0.4,
    j2 = (R() - 0.5) * 0.6,
    j3 = (R() - 0.5) * 0.4,
    lw = 0.06 + R() * 0.06;
  g.globalAlpha = 0.55 * vis;
  g.strokeStyle = "#2a1c24";
  g.lineWidth = lw;
  g.beginPath();
  g.moveTo(c - 1.3, ry + j1);
  g.quadraticCurveTo(c, ry + j2, c + 1.4, ry + j3);
  g.stroke();
}
var sa = 1 - lf;
if (sa > 0.02) {
  g.globalCompositeOperation = "lighter";
  for (i = 0; i < 46; i++) {
    x = (R() - 0.5) * 40;
    y = -20 + R() * 40;
    var rx = 0.3 + R() * 0.9,
      aa = 0.08 + R() * 0.14;
    g.globalAlpha = sa * aa;
    g.fillStyle = "#ff9a60";
    g.beginPath();
    g.ellipse(x, y, rx, rx * 0.35, 1.15, 0, 6.283);
    g.fill();
  }
  g.globalCompositeOperation = "source-over";
}
function fe(x, y, a, l, col) {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.globalAlpha = 0.85;
  g.fillStyle = col;
  g.beginPath();
  g.moveTo(0, -l / 2);
  g.quadraticCurveTo(l * 0.2, -l * 0.1, l * 0.04, l * 0.45);
  g.quadraticCurveTo(-l * 0.16, 0, 0, -l / 2);
  g.fill();
  g.strokeStyle = "rgba(240,230,220,0.6)";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(0, -l / 2);
  g.lineTo(0.02, l / 2);
  g.stroke();
  g.restore();
}
for (i = 0; i < 26; i++) {
  var r = Math.pow(R(), 0.7) * 3.2,
    an = R() * 6.283;
  fe(
    1.6 + Math.cos(an) * r * 1.2,
    13 + Math.sin(an) * r,
    R() * 6.283,
    0.1 + R() * 0.14,
    R() < 0.75 ? "#cfc2bc" : "#3a2c34",
  );
}
for (i = 0; i < 8; i++) {
  y = 22 - (3 + R() * 20);
  fe(pc(y) + (R() - 0.5) * 1.2, y, R() * 6.283, 0.1 + R() * 0.1, "#c8bab4");
}
g.globalAlpha = 1;
var dk = g.createLinearGradient(0, 26 - De, 0, 16 - De);
dk.addColorStop(0, "rgba(18,13,24,0)");
dk.addColorStop(1, "rgba(18,13,24,0.6)");
g.fillStyle = dk;
g.fillRect(-30, -24, 60, Math.max(0, 50 - De));
g.fillStyle = "rgba(14,10,22," + (lf * 0.35).toFixed(3) + ")";
g.fillRect(-30, -24, 60, 48);
