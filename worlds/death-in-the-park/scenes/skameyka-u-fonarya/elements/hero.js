var S = e.state || {},
  t = e.t,
  h = e.lib.hero(e);
var x = h.x,
  mv = h.mv,
  f = h.f,
  sit = h.sit;
var L = S.lamp == null ? 0.75 : S.lamp;
var lx = x + 1.1,
  ld = Math.abs(lx),
  lit = Math.max(0, 1 - ld / 4.2) * L,
  ls = lx >= 0 ? -1 : 1;
var SK = "#d6c1ac",
  HR = "#25201f",
  CT = "#3a3d45",
  SC = "#8a2a24";
function P(path, col) {
  g.beginPath();
  path();
  g.fillStyle = col;
  g.fill();
  var gr = g.createLinearGradient(ls * 0.26, 0, -ls * 0.26, 0);
  gr.addColorStop(0, "rgba(255,186,120," + 0.3 * lit + ")");
  gr.addColorStop(0.45, "rgba(255,186,120,0)");
  gr.addColorStop(0.8, "rgba(120,140,200,0)");
  gr.addColorStop(1, "rgba(120,140,200,0.1)");
  g.fillStyle = gr;
  g.fill();
}
function head(hx, hy) {
  g.fillStyle = HR;
  g.beginPath();
  g.ellipse(hx - f * 0.045, hy + 0.07, 0.085, 0.13, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = SK;
  g.beginPath();
  g.ellipse(hx, hy, 0.09, 0.115, 0, 0, Math.PI * 2);
  g.fill();
  if (lit > 0.02) {
    g.fillStyle = "rgba(255,180,110," + 0.28 * lit + ")";
    g.beginPath();
    g.ellipse(hx + ls * 0.03, hy, 0.055, 0.1, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = HR;
  g.beginPath();
  g.ellipse(hx - f * 0.02, hy - 0.045, 0.1, 0.075, 0, Math.PI, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.ellipse(hx - f * 0.06, hy - 0.01, 0.05, 0.1, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "rgba(40,28,28,0.65)";
  g.fillRect(hx + f * 0.045 - 0.007, hy - 0.012, 0.014, 0.012);
}
function breath(mx, my) {
  var b = (t % 4.6) / 4.6;
  if (b < 0.55) {
    var u = b / 0.55,
      a = Math.sin(u * Math.PI) * 0.22,
      bx = mx + f * (0.05 + u * 0.32),
      by = my - u * 0.12,
      r = 0.03 + u * 0.16;
    var gr = g.createRadialGradient(bx, by, 0, bx, by, r);
    gr.addColorStop(0, "rgba(215,222,238," + a + ")");
    gr.addColorStop(1, "rgba(215,222,238,0)");
    g.fillStyle = gr;
    g.beginPath();
    g.arc(bx, by, r, 0, Math.PI * 2);
    g.fill();
  }
}
g.save();
g.translate(x, 0);
g.lineCap = "round";
g.lineJoin = "round";
var sl = Math.min(2.4, 0.35 + ld * 0.55) * (lx >= 0 ? 1 : -1);
g.fillStyle = "rgba(6,6,12," + (0.08 + 0.4 * lit) + ")";
g.beginPath();
g.moveTo(-0.16, 0);
g.lineTo(0.16, 0);
g.lineTo(sl + 0.2, 0.2);
g.lineTo(sl - 0.16, 0.24);
g.closePath();
g.fill();
g.fillStyle = "rgba(6,6,12,0.35)";
g.beginPath();
g.ellipse(0, 0, 0.24, 0.04, 0, 0, Math.PI * 2);
g.fill();
var hdx = h.hdx,
  hdy = h.hdy;
if (!sit) {
  var ph = h.ph,
    sw = mv ? 0.22 : 0,
    hip = h.hip;
  g.strokeStyle = "#24252b";
  g.lineWidth = 0.1;
  for (var k = 0; k < 2; k++) {
    var s = Math.sin(ph + k * Math.PI) * sw;
    g.beginPath();
    g.moveTo(0, hip);
    g.lineTo(f * s * 0.55, hip * 0.5);
    g.lineTo(f * s, -0.03);
    g.stroke();
    g.fillStyle = "#17171c";
    g.beginPath();
    g.ellipse(f * s + f * 0.04, -0.025, 0.075, 0.03, 0, 0, Math.PI * 2);
    g.fill();
  }
  var sx = h.sx,
    sy = h.sy;
  P(function () {
    g.moveTo(sx - 0.18, sy + 0.04);
    g.lineTo(sx + 0.19, sy + 0.04);
    g.lineTo(0.24 + Math.sin(t * 1.1) * 0.01, hip + 0.42);
    g.lineTo(-0.23 + Math.sin(t * 0.9 + 1) * 0.01, hip + 0.42);
    g.closePath();
  }, CT);
  g.strokeStyle = "#33363e";
  g.lineWidth = 0.085;
  if (mv) {
    for (var k = 0; k < 2; k++) {
      var s = Math.sin(ph + k * Math.PI + Math.PI) * 0.18;
      g.beginPath();
      g.moveTo(sx, sy + 0.1);
      g.lineTo(sx + f * s, sy + 0.5);
      g.stroke();
    }
  } else {
    g.beginPath();
    g.moveTo(sx - 0.13, sy + 0.1);
    g.lineTo(-0.15, hip + 0.14);
    g.moveTo(sx + 0.13, sy + 0.1);
    g.lineTo(0.15, hip + 0.14);
    g.stroke();
  }
  g.fillStyle = SC;
  g.beginPath();
  g.moveTo(sx - 0.13, sy);
  g.lineTo(sx + 0.13, sy);
  g.lineTo(sx + 0.1, sy + 0.1);
  g.lineTo(sx - 0.1, sy + 0.1);
  g.fill();
  var tw = Math.sin(t * 1.3) * 0.015 + Math.sin(t * 0.71) * 0.01;
  g.beginPath();
  g.moveTo(sx - f * 0.07, sy + 0.08);
  g.lineTo(sx, sy + 0.08);
  g.lineTo(sx - f * 0.02 + tw, sy + 0.36);
  g.lineTo(sx - f * 0.08 + tw, sy + 0.35);
  g.fill();
} else {
  var hip = h.hip,
    sy = h.sy,
    sx = h.sx,
    s1 = Math.sin(t * 0.9) * 0.02,
    s2 = Math.sin(t * 1.13 + 1.7) * 0.02;
  g.strokeStyle = "#24252b";
  g.lineWidth = 0.1;
  g.beginPath();
  g.moveTo(-0.08, -0.46);
  g.lineTo(-0.09 + s1, -0.03);
  g.moveTo(0.08, -0.46);
  g.lineTo(0.09 + s2, -0.03);
  g.stroke();
  g.fillStyle = "#17171c";
  g.beginPath();
  g.ellipse(-0.09 + s1, -0.025, 0.05, 0.032, 0, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.ellipse(0.09 + s2, -0.025, 0.05, 0.032, 0, 0, Math.PI * 2);
  g.fill();
  P(function () {
    g.moveTo(sx - 0.18, sy + 0.04);
    g.lineTo(sx + 0.18, sy + 0.04);
    g.lineTo(0.2, hip);
    g.lineTo(0.23, -0.44);
    g.lineTo(-0.23, -0.44);
    g.lineTo(-0.2, hip);
    g.closePath();
  }, CT);
  g.strokeStyle = "rgba(10,10,16,0.4)";
  g.lineWidth = 0.018;
  g.beginPath();
  g.moveTo(-0.2, hip + 0.02);
  g.lineTo(0.2, hip + 0.02);
  g.stroke();
  g.strokeStyle = "#33363e";
  g.lineWidth = 0.085;
  g.beginPath();
  g.moveTo(sx - 0.15, sy + 0.1);
  g.quadraticCurveTo(-0.23, hip - 0.2, -0.05, hip - 0.03);
  g.moveTo(sx + 0.15, sy + 0.1);
  g.quadraticCurveTo(0.23, hip - 0.2, 0.05, hip - 0.03);
  g.stroke();
  g.fillStyle = SK;
  g.beginPath();
  g.ellipse(0, hip - 0.035, 0.065, 0.035, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = SC;
  g.beginPath();
  g.moveTo(sx - 0.13, sy);
  g.lineTo(sx + 0.13, sy);
  g.lineTo(sx + 0.1, sy + 0.1);
  g.lineTo(sx - 0.1, sy + 0.1);
  g.fill();
  var tw = Math.sin(t * 1.3) * 0.012;
  g.fillRect(sx + f * 0.03 + tw, sy + 0.08, 0.06, 0.26);
}
head(hdx, hdy);
breath(hdx + f * 0.09, hdy + 0.04);
g.restore();
