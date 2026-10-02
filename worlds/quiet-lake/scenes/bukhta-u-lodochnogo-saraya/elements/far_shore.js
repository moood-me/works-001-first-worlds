var t = e.t,
  st = e.state || {},
  L = st.light_level == null ? 0.7 : st.light_level,
  S = 17;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var X0 = -1880,
  N = 626,
  hm = [],
  i;
for (i = 0; i <= N; i++) {
  var x = X0 + i * 6,
    h =
      6 +
      3 * Math.sin(x / 170 + 0.5) +
      1.8 * Math.sin(x / 61 + 2) +
      0.8 * Math.sin(x / 19) +
      9 * Math.exp(-Math.pow((x + 760) / 380, 2));
  if (R() < 0.55) h += R() * 4.5;
  hm.push(h);
}
var wg = g.createLinearGradient(0, 0, 0, 30);
wg.addColorStop(0, "#33426a");
wg.addColorStop(0.3, "#24315a");
wg.addColorStop(1, "#1a2442");
g.fillStyle = wg;
g.fillRect(-1900, 0, 3800, 30);
for (var k = 0; k < 10; k++) {
  var y0 = k * 1.6;
  g.save();
  g.beginPath();
  g.rect(-1900, y0, 3800, 1.65);
  g.clip();
  g.translate(Math.sin(t * 0.4 + k * 0.9) * (0.6 + k * 0.15), 0);
  g.globalAlpha = 0.82 - k * 0.03;
  g.fillStyle = "#0c1222";
  g.beginPath();
  g.moveTo(X0, 0);
  for (i = 0; i <= N; i++) g.lineTo(X0 + i * 6, hm[i]);
  g.lineTo(-X0, 0);
  g.closePath();
  g.fill();
  g.restore();
}
g.globalAlpha = 1;
for (i = 0; i < 50; i++) {
  var ry = 0.5 + R() * 20,
    rx = (R() - 0.5) * 3600,
    rl = 20 + R() * 90,
    ph = R() * 6.283;
  g.globalAlpha = (0.1 + 0.1 * Math.sin(t * 0.3 + ph)) * L;
  g.fillStyle = "#6d7fae";
  g.fillRect(rx + Math.sin(t * 0.1 + ph) * 8 - rl / 2, ry, rl, e.px * 1.1);
}
g.globalAlpha = 1;
g.beginPath();
g.moveTo(X0, 0.3);
for (i = 0; i <= N; i++) g.lineTo(X0 + i * 6, -hm[i]);
g.lineTo(-X0, 0.3);
g.closePath();
var fg = g.createLinearGradient(0, -25, 0, 0);
fg.addColorStop(0, "#0a0f1e");
fg.addColorStop(1, "#10172b");
g.fillStyle = fg;
g.fill();
g.beginPath();
g.moveTo(X0, -hm[0]);
for (i = 1; i <= N; i++) g.lineTo(X0 + i * 6, -hm[i]);
g.strokeStyle = "rgba(140,160,210," + (0.16 * L).toFixed(3) + ")";
g.lineWidth = e.px;
g.stroke();
g.save();
g.globalCompositeOperation = "lighter";
for (i = 0; i < 40; i++) {
  var gx = (R() + R() - 1) * 40,
    gy = 0.2 + R() * 3,
    gl = 3 + R() * 10,
    f = 0.5 + R() * 1.5,
    p = R() * 6.283,
    w = Math.sin(t * f + p);
  if (w > 0.4) {
    g.globalAlpha = (w - 0.4) * 1.4 * L;
    g.fillStyle = "#dfe6ff";
    g.fillRect(gx - gl / 2, gy, gl, e.px);
  }
}
g.restore();
g.globalAlpha = 1;
for (i = 0; i < 8; i++) {
  var mxp = -1700 + R() * 3400 + 50 * Math.sin(t * 0.008 * (1 + R()) + R() * 6),
    myp = -2 + R() * 3,
    mrx = 150 + R() * 260,
    mry = 2 + R() * 3;
  g.globalAlpha = 0.07 + R() * 0.06;
  g.fillStyle = "#5a6c9c";
  g.beginPath();
  g.ellipse(mxp, myp, mrx, mry, 0, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
