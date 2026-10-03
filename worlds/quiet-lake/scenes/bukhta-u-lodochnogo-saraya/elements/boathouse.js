var t = e.t,
  st = e.state || {},
  L = st.light_level == null ? 0.7 : st.light_level,
  lamp = !!st.boathouse_lamp,
  S = 61;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
function cl(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}
function sm(a, b, v) {
  v = cl((v - a) / (b - a));
  return v * v * (3 - 2 * v);
}
var SH = cl(st.shed_ship || 0),
  LB = cl(st.shed_lab || 0),
  hv = sm(0.88, 1, SH),
  lift = 1.1 * sm(0.72, 1, SH) + hv * (Math.sin(t * 0.8) * 0.05 + Math.sin(t * 1.9 + 1) * 0.02),
  nz = sm(0.62, 0.8, SH),
  q,
  k,
  b;
var i, y;
g.fillStyle = "#090c16";
var SP = [-2.45, -1.6, 1.6, 2.45];
for (i = 0; i < SP.length; i++) g.fillRect(SP[i] - 0.09, -0.95, 0.18, 0.95);
g.fillRect(3.1, -1.0, 0.13, 1.0);
g.fillRect(3.8, -1.02, 0.11, 1.02);
if (nz > 0) {
  g.save();
  g.globalCompositeOperation = "lighter";
  g.scale(1, 0.18);
  var wg0 = g.createRadialGradient(0.6, 0, 0, 0.6, 0, 3.4);
  wg0.addColorStop(0, "rgba(160,230,255," + (0.55 * nz).toFixed(3) + ")");
  wg0.addColorStop(0.4, "rgba(90,170,230," + (0.22 * nz).toFixed(3) + ")");
  wg0.addColorStop(1, "rgba(60,120,200,0)");
  g.fillStyle = wg0;
  g.beginPath();
  g.arc(0.6, 0, 3.4, 0, 6.283);
  g.fill();
  g.restore();
  for (q = 0; q < 3; q++) {
    var rp = (t * 0.18 + q / 3) % 1,
      rr = 0.6 + rp * 3;
    g.strokeStyle = "rgba(170,230,255," + ((1 - rp) * 0.35 * hv).toFixed(3) + ")";
    g.lineWidth = e.px * 1.3;
    g.beginPath();
    g.ellipse(0.6, 0.05, rr, rr * 0.12, 0, 0, 6.283);
    g.stroke();
  }
  e.light(0.6, -0.1, 3.5, "#9fe6ff", 0.45 * nz);
}
g.save();
g.translate(0, -lift);
g.fillStyle = "#05070e";
g.fillRect(-1.45, -2.9, 2.9, 2.9 - 0.9 * sm(0.4, 0.62, SH));
if (lamp) {
  var ig = g.createRadialGradient(0, -1.6, 0, 0, -1.6, 1.6);
  ig.addColorStop(0, "rgba(230,160,90,0.35)");
  ig.addColorStop(1, "rgba(230,160,90,0)");
  g.fillStyle = ig;
  g.fillRect(-1.45, -2.9, 2.9, 2.9);
}
for (i = 0; i < 10; i++) {
  var gx = (R() - 0.5) * 2.6,
    f = 0.6 + R(),
    p = R() * 6.283,
    w = Math.sin(t * f + p);
  if (w > 0.5) {
    g.globalAlpha = (w - 0.5) * 0.8 * (lamp ? 1 : L * 0.5) * (1 - sm(0.4, 0.62, SH));
    g.fillStyle = lamp ? "#e8b078" : "#8a9cc8";
    g.fillRect(gx - 0.1, -0.06 - R() * 0.05, 0.2, 0.015);
  } else R();
}
g.globalAlpha = 1;
g.beginPath();
g.moveTo(2.5, -0.9);
g.lineTo(3.95, -1.0);
g.lineTo(3.95, -3.32);
g.lineTo(2.5, -3.6);
g.closePath();
var sg = g.createLinearGradient(2.5, 0, 3.95, 0);
sg.addColorStop(0, "#28324f");
sg.addColorStop(1, "#1d2640");
g.fillStyle = sg;
g.fill();
g.strokeStyle = "rgba(8,10,18,0.55)";
g.lineWidth = e.px;
for (y = 0; y < 9; y++) {
  var k = y / 9;
  g.beginPath();
  g.moveTo(2.5, -0.9 - k * 2.7);
  g.lineTo(3.95, -1.0 - k * 2.32);
  g.stroke();
}
g.beginPath();
g.moveTo(-2.5, -0.9);
g.lineTo(2.5, -0.9);
g.lineTo(2.5, -3.6);
g.lineTo(0, -5.3);
g.lineTo(-2.5, -3.6);
g.closePath();
g.moveTo(-1.45, -0.9);
g.lineTo(-1.45, -2.9);
g.lineTo(1.45, -2.9);
g.lineTo(1.45, -0.9);
g.closePath();
var fg = g.createLinearGradient(0, -5.3, 0, -0.9);
fg.addColorStop(0, "#1a2134");
fg.addColorStop(1, "#121725");
g.fillStyle = fg;
g.fill("evenodd");
g.strokeStyle = "rgba(6,8,14,0.6)";
g.lineWidth = e.px;
for (var px = -2.35; px < 2.5; px += 0.27) {
  var top = -3.6 - (2.5 - Math.abs(px)) * 0.68;
  g.beginPath();
  g.moveTo(px, -0.9);
  g.lineTo(px, Math.max(top, -5.25));
  g.stroke();
}
g.fillStyle = "#0e1220";
g.fillRect(-1.55, -3.02, 3.1, 0.14);
g.fillRect(-1.55, -3.02, 0.12, 2.12);
g.fillRect(1.43, -3.02, 0.12, 2.12);
function TOP(x) {
  return Math.max(-3.6 - (2.5 - Math.abs(x)) * 0.68, -5.3);
}
function fac() {
  g.beginPath();
  g.moveTo(-2.5, -0.9);
  g.lineTo(2.5, -0.9);
  g.lineTo(2.5, -3.6);
  g.lineTo(0, -5.3);
  g.lineTo(-2.5, -3.6);
  g.closePath();
  g.moveTo(-1.45, -0.9);
  g.lineTo(-1.45, -2.9);
  g.lineTo(1.45, -2.9);
  g.lineTo(1.45, -0.9);
  g.closePath();
}
function sd() {
  g.beginPath();
  g.moveTo(2.5, -0.9);
  g.lineTo(3.95, -1.0);
  g.lineTo(3.95, -3.32);
  g.lineTo(2.5, -3.6);
  g.closePath();
}
function yS(k, x) {
  var u = (x - 2.5) / 1.45;
  return (-0.9 - k * 2.7) * (1 - u) + (-1.0 - k * 2.32) * u;
}
var NS = 20,
  SW = 0.27,
  X0 = -2.62,
  xl,
  xc,
  k0,
  k1,
  xR,
  pb;
if (LB > 0.001) {
  var Lc = sm(0.3, 0.85, LB),
    fr = [];
  g.save();
  fac();
  g.clip("evenodd");
  g.beginPath();
  for (i = 0; i < NS; i++) {
    xl = X0 + i * SW;
    xc = xl + SW / 2;
    var y0 = Math.abs(xc) < 1.3 ? -2.9 : -0.9,
      tp = TOP(xc) - 0.2,
      pj = cl((LB * 1.8 - Math.min(1, Math.abs(xc) / 2.5) * 0.5 - ((i * 7) % 5) * 0.04) / 0.55);
    if (pj <= 0) continue;
    var yt = y0 + pj * (tp - y0);
    g.rect(xl, yt, SW + 0.004, y0 - yt);
    fr.push([xl, yt, pj, y0]);
  }
  g.clip();
  var ig2 = g.createLinearGradient(0, -5.3, 0, -0.9);
  ig2.addColorStop(0, "#0b1c26");
  ig2.addColorStop(1, "#061219");
  g.fillStyle = ig2;
  g.fillRect(-2.6, -5.4, 5.2, 4.6);
  var ca = g.createRadialGradient(0, -3.3, 0, 0, -3.3, 3);
  ca.addColorStop(0, "rgba(110,210,240," + (0.3 * Lc).toFixed(3) + ")");
  ca.addColorStop(1, "rgba(110,210,240,0)");
  g.fillStyle = ca;
  g.fillRect(-2.6, -5.4, 5.2, 4.6);
  g.fillStyle = "#16343e";
  for (k = 0; k < 3; k++) g.fillRect(-2.5, -1.45 - k * 0.62, 1.05, 0.035);
  var FC = ["#7fe8d8", "#8fd0ff", "#b0f0a0", "#6fd8ff", "#c8e8ff", "#80f0c8", "#9fc8ff", "#7fe8d8", "#b8ffd8"];
  for (k = 0; k < 9; k++) {
    var fx = -2.3 + (k % 3) * 0.33,
      fy = -1.45 - Math.floor(k / 3) * 0.62,
      on = sm(0.3 + k * 0.045, 0.36 + k * 0.045, LB);
    g.strokeStyle = "rgba(150,205,220,0.4)";
    g.lineWidth = e.px;
    g.beginPath();
    g.arc(fx, fy - 0.09, 0.09, 0, 6.283);
    g.moveTo(fx - 0.03, fy - 0.175);
    g.lineTo(fx - 0.03, fy - 0.32);
    g.moveTo(fx + 0.03, fy - 0.175);
    g.lineTo(fx + 0.03, fy - 0.32);
    g.stroke();
    if (on > 0) {
      var pu = 0.75 + 0.25 * Math.sin(t * (1.3 + k * 0.17) + k);
      g.globalAlpha = on * pu;
      g.fillStyle = FC[k];
      g.beginPath();
      g.arc(fx, fy - 0.09, 0.078, -0.2, 3.34);
      g.closePath();
      g.fill();
      for (q = 0; q < 3; q++) {
        var bp = (t * 0.35 + q / 3 + k * 0.13) % 1;
        g.globalAlpha = on * (1 - bp) * 0.8;
        g.beginPath();
        g.arc(fx + Math.sin(t * 2 + q * 2 + k) * 0.02, fy - 0.1 - bp * 0.24, 0.012, 0, 6.283);
        g.fill();
      }
      g.globalAlpha = 1;
      if (k % 2 == 0) e.light(fx, fy - 0.1 - lift, 0.5, FC[k], 0.3 * on);
    }
  }
  for (k = 0; k < 2; k++) {
    var mx0 = 1.6,
      my0 = -2.55 + k * 0.7,
      mw = 0.75,
      mh = 0.42,
      mo = sm(0.42 + k * 0.1, 0.5 + k * 0.1, LB);
    g.fillStyle = "#0b1418";
    g.fillRect(mx0 - 0.04, my0 - 0.04, mw + 0.08, mh + 0.08);
    if (mo > 0) {
      var fk = mo < 1 && Math.sin(t * 41 + k) > 0.2 ? 0.4 : 1;
      g.globalAlpha = mo * fk;
      g.fillStyle = "#0f3f4a";
      g.fillRect(mx0, my0, mw, mh);
      g.strokeStyle = "#9ff4ff";
      g.lineWidth = 0.014;
      g.beginPath();
      for (q = 0; q <= 32; q++) {
        var u = q / 32,
          yy =
            my0 +
            mh * 0.55 +
            Math.sin(u * 14 + t * (1.6 + k)) * mh * 0.25 * Math.sin(u * 3.1416) +
            (k ? Math.sin(u * 43 + t * 4) * 0.015 : 0);
        if (q == 0) g.moveTo(mx0 + u * mw, yy);
        else g.lineTo(mx0 + u * mw, yy);
      }
      g.stroke();
      g.fillStyle = "rgba(170,240,255,0.55)";
      for (q = 0; q < 3; q++)
        g.fillRect(mx0 + 0.05, my0 + 0.05 + q * 0.04, 0.08 + ((q * 3 + Math.floor(t * 0.8)) % 5) * 0.04, 0.014);
      g.globalAlpha = 1;
      e.light(mx0 + mw / 2, my0 + mh / 2 - lift, 0.9, "#80e8ff", 0.3 * mo);
    }
  }
  var tb = sm(0.36, 0.44, LB);
  if (tb > 0) {
    var fl2 = tb < 1 && Math.sin(t * 37) + Math.sin(t * 23) > 0.4 ? 0.25 : 1;
    g.fillStyle = "rgba(215,250,255," + (0.9 * tb * fl2).toFixed(3) + ")";
    g.fillRect(-1.2, -3.28, 2.4, 0.045);
    e.light(0, -3.26 - lift, 2.4, "#a8f0ff", 0.35 * tb * fl2);
  }
  var cs = sm(0.6, 0.78, LB);
  g.strokeStyle = "#4a7a88";
  g.lineWidth = 0.014;
  for (q = 0; q < 7; q++) {
    g.beginPath();
    g.ellipse(0, -4.48 - q * 0.06, 0.08, 0.018, 0, 0, 3.1416);
    g.stroke();
  }
  g.fillStyle = "#2a4a54";
  g.beginPath();
  g.arc(0, -4.97, 0.07, 0, 6.283);
  g.fill();
  if (cs > 0) {
    g.fillStyle = "rgba(195,250,255," + (0.85 * cs).toFixed(3) + ")";
    g.beginPath();
    g.arc(0, -4.97, 0.055, 0, 6.283);
    g.fill();
    e.light(0, -4.97 - lift, 0.8, "#bff6ff", 0.4 * cs);
    if (cs > 0.6) {
      var sp = Math.floor(t * 9);
      g.strokeStyle = "rgba(205,250,255,0.75)";
      g.lineWidth = e.px * 1.5;
      for (q = 0; q < 2; q++) {
        var a5 = (((sp * 37 + q * 53) % 100) / 100) * 6.283;
        g.beginPath();
        g.moveTo(0, -4.97);
        for (var z = 1; z <= 4; z++)
          g.lineTo(
            Math.cos(a5) * z * 0.09 + Math.sin(sp * 3.1 + z * (q + 1)) * 0.03,
            -4.97 + Math.sin(a5) * z * 0.06 + Math.cos(sp * 2.3 + z) * 0.03,
          );
        g.stroke();
      }
    }
  }
  g.globalCompositeOperation = "lighter";
  g.strokeStyle = "rgba(170,220,235,0.06)";
  g.lineWidth = 0.2;
  for (q = 0; q < 5; q++) {
    var d2 = -3 + q * 1.3;
    g.beginPath();
    g.moveTo(d2, -0.9);
    g.lineTo(d2 + 1.3, -5.3);
    g.stroke();
  }
  g.globalCompositeOperation = "source-over";
  for (i = 0; i < fr.length; i++) {
    var F = fr[i];
    g.fillStyle = "rgba(110,160,175,0.5)";
    g.fillRect(F[0] - 0.011, F[1], 0.022, F[3] - F[1]);
    if (F[2] < 1) {
      g.fillStyle = "rgba(180,248,255," + (0.9 * (1 - F[2]) + 0.1).toFixed(3) + ")";
      g.fillRect(F[0], F[1] - 0.012, SW, 0.024);
    }
  }
  g.restore();
  g.save();
  sd();
  g.clip();
  g.beginPath();
  var any = 0;
  for (b = 0; b < 9; b++) {
    pb = cl((LB * 1.7 - 0.35 - b * 0.05) / 0.45);
    if (pb <= 0) continue;
    any = 1;
    k0 = b / 9;
    k1 = (b + 1) / 9;
    xR = 2.5 + pb * 1.45;
    g.moveTo(2.5, yS(k0, 2.5));
    g.lineTo(xR, yS(k0, xR));
    g.lineTo(xR, yS(k1, xR));
    g.lineTo(2.5, yS(k1, 2.5));
    g.closePath();
  }
  if (any) {
    g.clip();
    g.fillStyle = "#08171f";
    g.fillRect(2.4, -3.7, 1.7, 2.9);
    var sg2 = g.createRadialGradient(3.3, -2.0, 0, 3.3, -2.0, 1.0);
    sg2.addColorStop(0, "rgba(120,230,240," + (0.45 * Lc).toFixed(3) + ")");
    sg2.addColorStop(1, "rgba(120,230,240,0)");
    g.fillStyle = sg2;
    g.fillRect(2.4, -3.7, 1.7, 2.9);
    g.fillStyle = "#0f2a33";
    g.fillRect(3.15, -2.9, 0.3, 1.75);
    g.fillStyle = "rgba(150,240,255," + (0.5 * Lc).toFixed(3) + ")";
    g.fillRect(3.18, -2.3 + 0.1 * Math.sin(t * 0.6), 0.24, 0.5);
    g.strokeStyle = "rgba(110,160,175,0.5)";
    g.lineWidth = 0.02;
    for (b = 0; b < 9; b++) {
      g.beginPath();
      g.moveTo(2.5, yS(b / 9, 2.5));
      g.lineTo(3.95, yS(b / 9, 3.95));
      g.stroke();
    }
  }
  g.restore();
}
if (SH > 0.001) {
  g.save();
  fac();
  g.clip("evenodd");
  var mg = g.createLinearGradient(0, -5.3, 0, -0.9);
  mg.addColorStop(0, "#4a5774");
  mg.addColorStop(0.5, "#2e3852");
  mg.addColorStop(1, "#1d2439");
  g.fillStyle = mg;
  g.fillRect(-2.6, -5.4, 5.2, 4.6);
  g.strokeStyle = "rgba(8,12,22,0.75)";
  g.lineWidth = e.px * 1.2;
  for (y = -1.35; y > -5.3; y -= 0.45) {
    g.beginPath();
    g.moveTo(-2.6, y);
    g.lineTo(2.6, y);
    g.stroke();
  }
  g.fillStyle = "rgba(175,195,235,0.35)";
  for (y = -1.35; y > -5.3; y -= 0.45) for (var rx = -2.42; rx < 2.5; rx += 0.26) g.fillRect(rx, y - 0.045, 0.02, 0.02);
  var pg0 = g.createLinearGradient(0, -5.3, 0, -0.9);
  pg0.addColorStop(0, "#1a2134");
  pg0.addColorStop(1, "#121725");
  for (i = 0; i < NS; i++) {
    xl = X0 + i * SW;
    xc = xl + SW / 2;
    var sgn = xc < 0 ? -1 : 1,
      qj = cl((SH * 2.6 - Math.min(1, Math.abs(xc) / 2.5) * 0.8 - ((i * 5) % 7) * 0.03) / 0.55),
      pw = SW * (1 - 0.72 * qj),
      x0 = (sgn < 0 ? xl : xl + SW - pw) + sgn * qj * 0.05;
    g.fillStyle = pg0;
    g.fillRect(x0, -5.4, pw, 4.55);
    if (qj > 0) {
      g.globalAlpha = qj;
      g.fillStyle = "#36425f";
      g.fillRect(x0, -5.4, pw, 4.55);
      g.globalAlpha = 1;
      g.fillStyle = "rgba(190,208,248," + (qj * 0.5 * L).toFixed(3) + ")";
      g.fillRect(x0 + pw - 0.012, -5.4, 0.012, 4.55);
    }
    g.fillStyle = "rgba(6,8,14,0.6)";
    g.fillRect(x0, -5.4, e.px, 4.55);
  }
  g.restore();
  g.save();
  sd();
  g.clip();
  for (b = 0; b < 9; b++) {
    pb = cl((SH * 2.4 - 0.35 - b * 0.06) / 0.5);
    if (pb <= 0) continue;
    k0 = b / 9;
    k1 = (b + 1) / 9;
    xR = 2.5 + pb * 1.45;
    g.beginPath();
    g.moveTo(2.5, yS(k0, 2.5));
    g.lineTo(xR, yS(k0, xR));
    g.lineTo(xR, yS(k1, xR));
    g.lineTo(2.5, yS(k1, 2.5));
    g.closePath();
    g.fillStyle = b % 2 ? "#2c3651" : "#323d5a";
    g.fill();
    g.strokeStyle = "rgba(190,208,248," + (0.45 * L).toFixed(3) + ")";
    g.lineWidth = e.px * 1.3;
    g.beginPath();
    g.moveTo(xR, yS(k0, xR));
    g.lineTo(xR, yS(k1, xR));
    g.stroke();
  }
  g.restore();
}
if (LB > 0.001 || SH > 0.001) {
  g.fillStyle = "#0e1220";
  g.fillRect(-1.55, -3.02, 3.1, 0.14);
  g.fillRect(-1.55, -3.02, 0.12, 2.12);
  g.fillRect(1.43, -3.02, 0.12, 2.12);
}
g.beginPath();
g.moveTo(-2.85, -3.42);
g.lineTo(0, -5.5);
g.lineTo(1.25, -5.05);
g.lineTo(4.25, -3.15);
g.lineTo(2.85, -3.42);
g.lineTo(0, -5.32);
g.lineTo(-2.7, -3.42);
g.closePath();
g.fillStyle = "#0b0e18";
g.fill();
g.beginPath();
g.moveTo(0, -5.5);
g.lineTo(1.25, -5.05);
g.lineTo(4.25, -3.15);
g.lineTo(2.85, -3.42);
g.closePath();
var rg = g.createLinearGradient(0, -5.5, 3, -3.2);
rg.addColorStop(0, "#3a4668");
rg.addColorStop(1, "#283352");
g.fillStyle = rg;
g.fill();
if (SH > 0.5) {
  g.globalAlpha = sm(0.5, 0.7, SH) * 0.6;
  g.fillStyle = "#5a688e";
  g.fill();
  g.globalAlpha = 1;
}
g.strokeStyle = "rgba(10,12,22,0.5)";
for (i = 1; i < 7; i++) {
  var k2 = i / 7;
  g.beginPath();
  g.moveTo(0 + 2.85 * k2, -5.5 + 2.08 * k2);
  g.lineTo(1.25 + 3.0 * k2, -5.05 + 1.9 * k2);
  g.stroke();
}
g.strokeStyle = "rgba(200,212,245," + (0.55 * L).toFixed(3) + ")";
g.lineWidth = e.px * 1.4;
g.beginPath();
g.moveTo(0, -5.5);
g.lineTo(1.25, -5.05);
g.lineTo(4.25, -3.15);
g.stroke();
g.strokeStyle = "rgba(170,190,235," + (0.3 * L).toFixed(3) + ")";
g.lineWidth = e.px;
g.beginPath();
g.moveTo(2.52, -0.92);
g.lineTo(2.52, -3.55);
g.stroke();
g.fillStyle = "rgba(60,80,60," + (0.25 * (1 - sm(0.3, 0.6, SH))).toFixed(3) + ")";
for (i = 0; i < 6; i++) {
  g.beginPath();
  g.ellipse(1.0 + R() * 3, -4.6 + R() * 1.4, 0.2 + R() * 0.3, 0.05, 0.55, 0, 6.283);
  g.fill();
}
var wx = 0,
  wy = -4.05;
g.fillStyle = "#0c0f1a";
g.fillRect(wx - 0.32, wy - 0.27, 0.64, 0.54);
if (lamp) {
  var fl = 0.85 + 0.1 * Math.sin(t * 7.3) + 0.05 * Math.sin(t * 13.1);
  var lg = g.createRadialGradient(wx, wy, 0, wx, wy, 0.35);
  lg.addColorStop(0, "rgba(255,210,140," + fl.toFixed(3) + ")");
  lg.addColorStop(1, "rgba(220,140,70," + (0.6 * fl).toFixed(3) + ")");
  g.fillStyle = lg;
  g.fillRect(wx - 0.25, wy - 0.2, 0.5, 0.4);
  e.light(wx, wy - lift, 1.6, "#ffb060", 0.55);
  e.light(0, -1.5 - lift, 1.8, "#e89a58", 0.25);
} else {
  g.fillStyle = "rgba(120,140,190," + (0.15 * L).toFixed(3) + ")";
  g.fillRect(wx - 0.25, wy - 0.2, 0.5, 0.4);
}
var wl = sm(0.5, 0.62, LB);
if (wl > 0) {
  var cg2 = g.createRadialGradient(wx, wy, 0, wx, wy, 0.35);
  cg2.addColorStop(0, "rgba(210,250,255," + (0.95 * wl).toFixed(3) + ")");
  cg2.addColorStop(1, "rgba(90,200,240," + (0.7 * wl).toFixed(3) + ")");
  g.fillStyle = cg2;
  g.fillRect(wx - 0.25, wy - 0.2, 0.5, 0.4);
  e.light(wx, wy - lift, 1.4, "#9fefff", 0.4 * wl);
}
g.fillStyle = "#0c0f1a";
g.fillRect(wx - 0.02, wy - 0.2, 0.04, 0.4);
g.fillRect(wx - 0.25, wy - 0.02, 0.5, 0.04);
if (SH > 0.001) {
  var ps = sm(0.3, 0.45, SH);
  if (ps > 0) {
    g.globalAlpha = ps;
    g.fillStyle = "#34405e";
    g.fillRect(wx - 0.34, wy - 0.3, 0.68, 0.6);
    g.globalAlpha = 1;
  }
  var PO = [
    [0, -4.05, 0.27],
    [-1.98, -2.15, 0.16],
    [1.98, -2.15, 0.16],
    [-1.98, -1.5, 0.13],
    [1.98, -1.5, 0.13],
  ];
  for (k = 0; k < PO.length; k++) {
    var pr = sm(0.3 + k * 0.05, 0.4 + k * 0.05, SH),
      pl = sm(0.42 + k * 0.05, 0.48 + k * 0.05, SH),
      P2 = PO[k];
    if (pr <= 0) continue;
    var r0 = P2[2] * pr;
    g.fillStyle = "#141a2a";
    g.beginPath();
    g.arc(P2[0], P2[1], r0, 0, 6.283);
    g.fill();
    if (pl > 0) {
      var pg = g.createRadialGradient(P2[0] - r0 * 0.3, P2[1] - r0 * 0.3, 0, P2[0], P2[1], r0);
      pg.addColorStop(0, "rgba(235,252,255," + pl.toFixed(3) + ")");
      pg.addColorStop(1, "rgba(110,200,240," + (0.8 * pl).toFixed(3) + ")");
      g.fillStyle = pg;
      g.beginPath();
      g.arc(P2[0], P2[1], r0 * 0.78, 0, 6.283);
      g.fill();
      e.light(P2[0], P2[1] - lift, r0 * 5, "#9fe6ff", 0.3 * pl);
    }
    g.strokeStyle = "#5b6a8c";
    g.lineWidth = 0.035 * pr;
    g.beginPath();
    g.arc(P2[0], P2[1], r0 * 0.88, 0, 6.283);
    g.stroke();
    g.strokeStyle = "rgba(205,220,250," + (0.5 * L).toFixed(3) + ")";
    g.lineWidth = e.px * 1.2;
    g.beginPath();
    g.arc(P2[0], P2[1], r0, -1.3, 0.2);
    g.stroke();
  }
  var hw = 1.45 * sm(0.38, 0.62, SH);
  if (hw > 0) {
    var hg = g.createLinearGradient(0, -2.9, 0, -0.9);
    hg.addColorStop(0, "#3e4a68");
    hg.addColorStop(1, "#222a40");
    g.fillStyle = hg;
    g.fillRect(-1.45, -2.9, hw, 2.0);
    g.fillRect(1.45 - hw, -2.9, hw, 2.0);
    g.fillStyle = "rgba(8,12,22,0.8)";
    g.fillRect(-1.45 + hw - 0.02, -2.9, 0.02, 2.0);
    g.fillRect(1.45 - hw, -2.9, 0.02, 2.0);
    g.fillStyle = "rgba(190,150,90,0.35)";
    for (q = 0; q < 6; q++) {
      var hx0 = -1.45 + hw - 0.2 - q * 0.24;
      if (hx0 > -1.45) g.fillRect(hx0, -1.08, 0.12, 0.08);
      var hx1 = 1.45 - hw + 0.08 + q * 0.24;
      if (hx1 < 1.33) g.fillRect(hx1, -1.08, 0.12, 0.08);
    }
    if (hw > 1.44) {
      g.fillStyle = "rgba(170,240,255," + (0.5 + 0.2 * Math.sin(t * 1.3)).toFixed(3) + ")";
      g.fillRect(-0.012, -2.85, 0.024, 1.9);
    }
  }
  var hb = sm(0.5, 0.72, SH);
  if (hb > 0) {
    var hy0 = -0.9 + 0.36 * hb;
    g.fillStyle = "#161c2d";
    g.beginPath();
    g.moveTo(-2.58, -0.9);
    g.lineTo(2.5, -0.9);
    g.lineTo(3.97, -1.0);
    g.lineTo(3.75, -1.0 + 0.28 * hb);
    g.lineTo(2.3, hy0);
    g.lineTo(-2.2, hy0);
    g.closePath();
    g.fill();
    g.strokeStyle = "rgba(180,200,240," + (0.3 * L * hb).toFixed(3) + ")";
    g.lineWidth = e.px;
    g.beginPath();
    g.moveTo(-2.2, hy0);
    g.lineTo(2.3, hy0);
    g.stroke();
    var TX = [-1.5, 0.4, 2.3];
    for (q = 0; q < 3; q++) {
      var tx = TX[q];
      if (nz > 0) {
        var fl3 = 0.85 + 0.15 * Math.sin(t * 9 + q * 2) * Math.sin(t * 5.3 + q);
        var bg = g.createLinearGradient(0, hy0, 0, lift + 0.05);
        bg.addColorStop(0, "rgba(190,240,255," + (0.45 * nz * fl3).toFixed(3) + ")");
        bg.addColorStop(1, "rgba(120,200,255,0)");
        g.fillStyle = bg;
        g.beginPath();
        g.moveTo(tx - 0.2, hy0);
        g.lineTo(tx + 0.2, hy0);
        g.lineTo(tx + 0.55, lift + 0.05);
        g.lineTo(tx - 0.55, lift + 0.05);
        g.closePath();
        g.fill();
      }
      g.fillStyle = "#0b0f1a";
      g.beginPath();
      g.ellipse(tx, hy0, 0.26 * hb, 0.07 * hb, 0, 0, 6.283);
      g.fill();
      if (nz > 0) {
        g.fillStyle = "rgba(225,250,255," + (0.9 * nz).toFixed(3) + ")";
        g.beginPath();
        g.ellipse(tx, hy0 + 0.01, 0.19 * hb, 0.045 * hb, 0, 0, 6.283);
        g.fill();
        e.light(tx, hy0 - lift, 1.1, "#bdf2ff", 0.35 * nz);
      }
    }
  }
  var RL = [];
  for (q = 0; q < 6; q++) {
    var u2 = q / 5;
    RL.push([-2.7 + 2.7 * u2, -3.42 - 1.9 * u2]);
  }
  for (q = 1; q <= 10; q++) {
    var u3 = q / 10;
    RL.push(
      u3 < 0.3
        ? [(1.25 * u3) / 0.3, -5.5 + (0.45 * u3) / 0.3]
        : [1.25 + (3.0 * (u3 - 0.3)) / 0.7, -5.05 + (1.9 * (u3 - 0.3)) / 0.7],
    );
  }
  for (k = 0; k < RL.length; k++) {
    var ro = sm(0.42 + k * 0.018, 0.45 + k * 0.018, SH);
    if (ro <= 0) continue;
    var brr = 0.5 + 0.5 * Math.max(0, Math.sin(t * 1.6 - k * 0.55)),
      col = k == 0 ? "#ff8a78" : k == RL.length - 1 ? "#8cffb0" : "#ffe9c4";
    g.globalAlpha = ro * (0.5 + 0.5 * brr);
    g.fillStyle = col;
    g.beginPath();
    g.arc(RL[k][0], RL[k][1], 0.045, 0, 6.283);
    g.fill();
    g.globalAlpha = 1;
    if (k % 3 == 0 || k == RL.length - 1) e.light(RL[k][0], RL[k][1] - lift, 0.45, col, 0.2 * ro * brr);
  }
  var an = sm(0.45, 0.8, SH);
  if (an > 0) {
    var s1 = cl(an * 3) * 0.8,
      s2 = cl(an * 3 - 1) * 0.75,
      s3 = cl(an * 3 - 2) * 0.7,
      atop = -5.5 - s1 - s2 - s3;
    g.fillStyle = "#262f47";
    g.beginPath();
    g.arc(0.05, -5.45, 0.17 * cl(an * 6), 3.1416, 0);
    g.fill();
    g.fillStyle = "#3a4664";
    g.fillRect(-0.045, -5.5 - s1, 0.09, s1);
    if (s2 > 0) g.fillRect(-0.03, -6.3 - s2, 0.06, s2);
    if (s3 > 0) g.fillRect(-0.018, -7.05 - s3, 0.036, s3);
    g.fillStyle = "rgba(200,215,250," + (0.5 * L).toFixed(3) + ")";
    g.fillRect(0.03, -5.5 - s1, 0.015, s1);
    if (s2 > 0) g.fillRect(0.018, -6.3 - s2, 0.012, s2);
    var dsh = sm(0.7, 0.86, SH);
    if (dsh > 0) {
      g.save();
      g.translate(0.03, -6.1);
      g.rotate(-0.4 + 0.12 * Math.sin(t * 0.27) + 0.05 * Math.sin(t * 0.71));
      g.fillStyle = "#455274";
      g.beginPath();
      g.ellipse(0.14, 0, 0.05 + 0.03 * dsh, 0.24 * dsh, 0, -1.5708, 1.5708);
      g.fill();
      g.strokeStyle = "#5c6a90";
      g.lineWidth = 0.015;
      g.beginPath();
      g.moveTo(0, 0);
      g.lineTo(0.14 + 0.18 * dsh, 0);
      g.stroke();
      g.restore();
    }
    if (s3 > 0.6) {
      var bl = t % 2.4 < 0.2 ? 1 : 0.15;
      g.fillStyle = "rgba(255,130,115," + (0.95 * bl).toFixed(3) + ")";
      g.beginPath();
      g.arc(0, atop, 0.05, 0, 6.283);
      g.fill();
      e.light(0, atop - lift, 0.7, "#ff8070", 0.35 * bl);
    }
  }
}
if (LB > 0.001) {
  var Lc2 = sm(0.3, 0.85, LB);
  g.strokeStyle = "rgba(150,235,255," + (0.6 * Lc2).toFixed(3) + ")";
  g.lineWidth = e.px * 1.6;
  g.beginPath();
  g.moveTo(-2.7, -3.42);
  g.lineTo(0, -5.5);
  g.lineTo(1.25, -5.05);
  g.lineTo(4.25, -3.15);
  g.stroke();
  var cn = sm(0.5, 0.65, LB);
  if (cn > 0) {
    g.fillStyle = "rgba(120,230,255," + (0.7 * cn).toFixed(3) + ")";
    g.fillRect(-0.75, -1.62, 0.45, 0.28);
    g.fillRect(0.15, -1.7, 0.55, 0.34);
    g.fillStyle = "#061016";
    g.fillRect(-0.85, -1.3, 1.7, 0.4);
    e.light(0, -1.5 - lift, 1.8, "#70dcff", 0.3 * cn);
  }
  e.light(-2.0, -2.2 - lift, 2.4, "#7fe0ff", 0.28 * Lc2);
  e.light(2.0, -2.2 - lift, 2.4, "#7fe0ff", 0.28 * Lc2);
  g.save();
  g.globalCompositeOperation = "lighter";
  g.scale(1, 0.2);
  var wc = g.createRadialGradient(0.6, lift * 5, 0, 0.6, lift * 5, 3.5);
  wc.addColorStop(0, "rgba(110,220,240," + (0.3 * Lc2).toFixed(3) + ")");
  wc.addColorStop(1, "rgba(110,220,240,0)");
  g.fillStyle = wc;
  g.beginPath();
  g.arc(0.6, lift * 5, 3.5, 0, 6.283);
  g.fill();
  g.restore();
  var cb = sm(0.45, 0.85, LB);
  if (cb > 0) {
    var P = [
        [3.95, -2.4],
        [4.7, -2.2],
        [3.6, -0.5],
        [4.4, 0.05],
      ],
      bz = function (u) {
        var a = 1 - u;
        return [
          a * a * a * P[0][0] + 3 * a * a * u * P[1][0] + 3 * a * u * u * P[2][0] + u * u * u * P[3][0],
          a * a * a * P[0][1] + 3 * a * a * u * P[1][1] + 3 * a * u * u * P[2][1] + u * u * u * P[3][1],
        ];
      };
    g.lineCap = "round";
    g.strokeStyle = "#080b14";
    g.lineWidth = 0.06;
    g.beginPath();
    for (q = 0; q <= 28; q++) {
      var c0 = bz((q / 28) * cb);
      if (q == 0) g.moveTo(c0[0], c0[1]);
      else g.lineTo(c0[0], c0[1]);
    }
    g.stroke();
    g.strokeStyle = "rgba(140,230,255,0.3)";
    g.lineWidth = e.px;
    g.stroke();
    g.fillStyle = "rgba(170,245,255,0.85)";
    for (q = 0; q < 3; q++) {
      var c1 = bz(((t * 0.22 + q / 3) % 1) * cb);
      g.beginPath();
      g.arc(c1[0], c1[1], 0.028, 0, 6.283);
      g.fill();
    }
    var ce = bz(cb);
    g.beginPath();
    g.arc(ce[0], ce[1], 0.04, 0, 6.283);
    g.fill();
    e.light(ce[0], ce[1] - lift, 0.5, "#9ff0ff", 0.3);
    if (cb > 0.97) {
      for (q = 0; q < 3; q++) {
        var rp2 = (t * 0.3 + q / 3) % 1,
          rr2 = 0.08 + rp2 * 0.6;
        g.strokeStyle = "rgba(150,235,255," + ((1 - rp2) * 0.4).toFixed(3) + ")";
        g.lineWidth = e.px * 1.2;
        g.beginPath();
        g.ellipse(4.4, 0.05, rr2, rr2 * 0.15, 0, 0, 6.283);
        g.stroke();
      }
    }
  }
}
g.restore();
