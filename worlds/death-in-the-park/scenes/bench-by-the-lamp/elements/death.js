var S = e.state || {},
  t = e.t,
  d = e.lib.death(e);
var x = d.x,
  mv = d.mv,
  f = d.f,
  sit = d.sit;
var look = S.death_look || "ahead",
  off = S.offer || "none";
var L = S.lamp == null ? 0.75 : S.lamp;
var lx = x + 1.1,
  lit = Math.max(0, 1 - Math.abs(lx) / 4.2) * L,
  ls = lx >= 0 ? -1 : 1;
var CT = "#121118",
  PL = "#d3cec4";
function P(path) {
  g.beginPath();
  path();
  g.fillStyle = CT;
  g.fill();
  var gr = g.createLinearGradient(ls * 0.3, 0, -ls * 0.3, 0);
  gr.addColorStop(0, "rgba(255,186,120," + 0.26 * lit + ")");
  gr.addColorStop(0.4, "rgba(255,186,120,0)");
  gr.addColorStop(0.8, "rgba(120,140,200,0)");
  gr.addColorStop(1, "rgba(120,140,200,0.09)");
  g.fillStyle = gr;
  g.fill();
}
function hand(hx2, hy, a) {
  g.save();
  g.translate(hx2, hy);
  g.rotate(a);
  g.fillStyle = PL;
  g.beginPath();
  g.ellipse(0, 0, 0.045, 0.028, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = PL;
  g.lineWidth = 0.012;
  g.lineCap = "round";
  for (var i = 0; i < 4; i++) {
    g.beginPath();
    g.moveTo(0.03, -0.016 + i * 0.011);
    g.lineTo(0.1 - Math.abs(i - 1.5) * 0.012, -0.018 + i * 0.012);
    g.stroke();
  }
  if (lit > 0.02) {
    g.fillStyle = "rgba(255,190,130," + 0.25 * lit + ")";
    g.beginPath();
    g.ellipse(0, 0, 0.045, 0.028, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.restore();
}
function env(ex, ey) {
  g.save();
  g.translate(ex, ey);
  g.rotate(-0.08 * f);
  g.fillStyle = lit > 0.1 ? "#ded4c0" : "#c8c3b8";
  g.fillRect(-0.11, -0.07, 0.22, 0.14);
  g.strokeStyle = "rgba(90,80,70,0.5)";
  g.lineWidth = 0.006;
  g.beginPath();
  g.moveTo(-0.11, -0.07);
  g.lineTo(0, 0.01);
  g.lineTo(0.11, -0.07);
  g.stroke();
  g.fillStyle = "#5a1f24";
  g.beginPath();
  g.arc(0, 0.01, 0.014, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
function head(cx, cy) {
  var tn = look === "hero" ? f : look === "away" ? -f : 0,
    dn = look === "down" ? 1 : 0;
  g.save();
  g.translate(cx, cy);
  g.rotate(Math.sin(t * 0.13) * 0.025 + Math.sin(t * 0.051) * 0.015 + dn * 0.05 * f);
  g.fillStyle = "#aaa499";
  g.fillRect(-0.035, 0.08, 0.07, 0.09);
  g.fillStyle = PL;
  g.beginPath();
  g.ellipse(tn * 0.012, 0, 0.088, 0.118, 0, 0, Math.PI * 2);
  g.fill();
  var gr = g.createLinearGradient(ls * 0.09, 0, -ls * 0.09, 0);
  gr.addColorStop(0, "rgba(255,190,130," + 0.3 * lit + ")");
  gr.addColorStop(0.5, "rgba(0,0,0,0)");
  gr.addColorStop(1, "rgba(40,45,75,0.35)");
  g.fillStyle = gr;
  g.fill();
  g.fillStyle = "#1b1a21";
  g.beginPath();
  g.ellipse(-tn * 0.02, -0.055, 0.096, 0.072, 0, Math.PI, Math.PI * 2);
  g.fill();
  if (tn) {
    g.beginPath();
    g.ellipse(-tn * 0.062, -0.01, 0.045, 0.085, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "rgba(150,150,162,0.45)";
    g.fillRect(-tn * 0.075 - 0.008, -0.04, 0.016, 0.03);
  } else {
    g.beginPath();
    g.ellipse(-0.083, -0.02, 0.016, 0.06, 0, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.ellipse(0.083, -0.02, 0.016, 0.06, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "rgba(150,150,162,0.45)";
    g.fillRect(-0.09, -0.05, 0.012, 0.03);
    g.fillRect(0.078, -0.05, 0.012, 0.03);
  }
  var fx = tn * 0.035,
    ey = -0.005 + dn * 0.012,
    E = tn ? [fx - tn * 0.02, fx + tn * 0.025] : [-0.033, 0.033];
  g.fillStyle = "rgba(70,62,80,0.32)";
  for (var i = 0; i < 2; i++) {
    g.beginPath();
    g.ellipse(E[i], ey + 0.007, 0.022, 0.016, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.strokeStyle = "rgba(30,26,36,0.75)";
  g.lineWidth = 0.009;
  for (var i = 0; i < 2; i++) {
    g.beginPath();
    g.moveTo(E[i] - 0.013, ey);
    g.quadraticCurveTo(E[i], ey + (dn ? 0.007 : 0.003), E[i] + 0.013, ey + 0.002);
    g.stroke();
  }
  g.strokeStyle = "rgba(120,110,105,0.4)";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(fx + tn * 0.012, ey + 0.012);
  g.lineTo(fx + tn * 0.022, 0.042);
  g.stroke();
  g.strokeStyle = "rgba(95,75,80,0.45)";
  g.beginPath();
  g.moveTo(fx - 0.017, 0.07);
  g.lineTo(fx + 0.017, 0.07);
  g.stroke();
  g.restore();
}
function collar(sh) {
  g.fillStyle = "#0d0c12";
  g.beginPath();
  g.moveTo(-0.13, sh + 0.03);
  g.lineTo(-0.1, sh - 0.12);
  g.lineTo(-0.025, sh + 0.1);
  g.closePath();
  g.fill();
  g.beginPath();
  g.moveTo(0.13, sh + 0.03);
  g.lineTo(0.1, sh - 0.12);
  g.lineTo(0.025, sh + 0.1);
  g.closePath();
  g.fill();
}
g.save();
g.translate(x, 0);
g.lineCap = "round";
g.lineJoin = "round";
var hdX = d.hdX,
  hdY = d.hdY,
  sh = d.sh;
if (!sit) {
  var ph = t * 4.2,
    sw = mv ? 0.16 : 0;
  g.strokeStyle = "#0e0d13";
  g.lineWidth = 0.095;
  for (var k = 0; k < 2; k++) {
    var s = Math.sin(ph + k * Math.PI) * sw,
      lx0 = -0.07 + k * 0.14;
    g.beginPath();
    g.moveTo(lx0, -0.4);
    g.lineTo(lx0 + f * s, -0.03);
    g.stroke();
    g.fillStyle = "#0b0a0f";
    g.beginPath();
    g.ellipse(lx0 + f * s + f * 0.04, -0.025, 0.08, 0.03, 0, 0, Math.PI * 2);
    g.fill();
  }
  var hem = -0.27;
  P(function () {
    g.moveTo(-0.22, sh);
    g.quadraticCurveTo(-0.27, sh + 0.06, -0.25, sh + 0.3);
    g.lineTo(-0.21, -0.9);
    g.lineTo(-0.29, hem);
    for (var i = 1; i <= 8; i++) {
      var u = i / 8;
      g.lineTo(-0.29 + 0.58 * u, hem + Math.sin(t * 0.8 + u * 5) * 0.008 * (mv ? 3 : 1));
    }
    g.lineTo(0.21, -0.9);
    g.lineTo(0.25, sh + 0.3);
    g.quadraticCurveTo(0.27, sh + 0.06, 0.22, sh);
    g.closePath();
  });
  g.strokeStyle = "rgba(62,60,76,0.5)";
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(0.02, sh + 0.12);
  g.lineTo(0.03, hem);
  g.stroke();
  g.strokeStyle = "#18171f";
  g.lineWidth = 0.1;
  if (off === "none" || mv) {
    for (var j = -1; j <= 1; j += 2) {
      g.beginPath();
      g.moveTo(j * 0.22, sh + 0.08);
      g.quadraticCurveTo(j * 0.29, sh + 0.4, j * 0.26, -0.92);
      g.stroke();
      hand(j * 0.26, -0.86, Math.PI / 2);
    }
  } else {
    var o = -f;
    g.beginPath();
    g.moveTo(o * 0.22, sh + 0.08);
    g.quadraticCurveTo(o * 0.29, sh + 0.4, o * 0.26, -0.92);
    g.stroke();
    hand(o * 0.26, -0.86, Math.PI / 2);
    g.beginPath();
    g.moveTo(f * 0.22, sh + 0.08);
    g.lineTo(f * 0.34, sh + 0.42);
    g.lineTo(f * 0.56, sh + 0.47);
    g.stroke();
    if (off === "hand") hand(f * 0.6, sh + 0.47, f > 0 ? 0 : Math.PI);
    else {
      env(f * 0.72, sh + 0.42);
      hand(f * 0.6, sh + 0.47, f > 0 ? -0.3 : Math.PI + 0.3);
    }
  }
  collar(sh);
} else {
  g.strokeStyle = "#0e0d13";
  g.lineWidth = 0.1;
  g.beginPath();
  g.moveTo(-0.12, -0.34);
  g.lineTo(-0.14, -0.04);
  g.moveTo(0.12, -0.34);
  g.lineTo(0.15, -0.04);
  g.stroke();
  g.fillStyle = "#0b0a0f";
  g.beginPath();
  g.ellipse(-0.15, -0.025, 0.065, 0.032, 0, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.ellipse(0.16, -0.025, 0.065, 0.032, 0, 0, Math.PI * 2);
  g.fill();
  P(function () {
    g.moveTo(-0.22, sh);
    g.quadraticCurveTo(-0.27, sh + 0.06, -0.25, sh + 0.3);
    g.lineTo(-0.23, -0.66);
    g.lineTo(-0.28, -0.6);
    g.lineTo(-0.27, -0.3);
    for (var i = 1; i <= 8; i++) {
      var u = i / 8;
      g.lineTo(-0.27 + 0.54 * u, -0.3 + Math.sin(t * 0.8 + u * 5) * 0.007);
    }
    g.lineTo(0.28, -0.6);
    g.lineTo(0.23, -0.66);
    g.lineTo(0.25, sh + 0.3);
    g.quadraticCurveTo(0.27, sh + 0.06, 0.22, sh);
    g.closePath();
  });
  g.strokeStyle = "rgba(62,60,76,0.45)";
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(-0.24, -0.6);
  g.quadraticCurveTo(0, -0.57, 0.24, -0.6);
  g.moveTo(0.01, -0.59);
  g.lineTo(0, -0.31);
  g.moveTo(0.02, sh + 0.12);
  g.lineTo(0.02, -0.65);
  g.stroke();
  g.strokeStyle = "#18171f";
  g.lineWidth = 0.1;
  if (off === "none") {
    for (var j = -1; j <= 1; j += 2) {
      g.beginPath();
      g.moveTo(j * 0.22, sh + 0.08);
      g.quadraticCurveTo(j * 0.3, -0.85, j * 0.15, -0.66);
      g.stroke();
      hand(j * 0.15, -0.62, Math.PI / 2 + j * 0.25);
    }
  } else {
    var o = -f;
    g.beginPath();
    g.moveTo(o * 0.22, sh + 0.08);
    g.quadraticCurveTo(o * 0.3, -0.85, o * 0.15, -0.66);
    g.stroke();
    hand(o * 0.15, -0.62, Math.PI / 2 + o * 0.25);
    g.beginPath();
    g.moveTo(f * 0.22, sh + 0.08);
    g.lineTo(f * 0.34, -0.86);
    g.lineTo(f * 0.54, -0.84);
    g.stroke();
    if (off === "hand") hand(f * 0.58, -0.84, f > 0 ? 0 : Math.PI);
    else {
      env(f * 0.7, -0.88);
      hand(f * 0.58, -0.84, f > 0 ? -0.3 : Math.PI + 0.3);
    }
  }
  collar(sh);
}
head(hdX, hdY);
g.restore();
