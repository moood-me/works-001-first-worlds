var t = e.t,
  st = e.state || {},
  dk = Math.min(1, Math.max(0, st.dusk || 0)),
  ins = Math.max(0, st.inside || 0),
  el = Math.max(0, Math.min(1, st.elsewhere || 0)),
  br = Math.max(0, Math.min(1, st.breath || 0)),
  sh = Math.max(0, Math.min(1, st.shadow || 0)),
  lock = st.lock || "open",
  A0 = -2.6,
  D = 7,
  sun = 1 - dk,
  i,
  j,
  k,
  S = 73;
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
function P(ax, z, h) {
  return [((A0 + ax) * D) / z - A0, ((1.7 - h) * D) / z - 1.7];
}
function poly(a) {
  g.beginPath();
  g.moveTo(a[0][0], a[0][1]);
  for (var m = 1; m < a.length; m++) g.lineTo(a[m][0], a[m][1]);
  g.closePath();
}
function ln(a, b) {
  g.beginPath();
  g.moveTo(a[0], a[1]);
  g.lineTo(b[0], b[1]);
  g.stroke();
}
var bp = 0.5 + 0.5 * Math.sin(t * 0.55),
  bs = Math.sin(t * 0.55 + 0.4),
  fl = 0.92 + 0.05 * Math.sin(t * 5.3) + 0.03 * Math.sin(t * 11.7 + 1),
  Li = ins * fl;
var th =
  Math.max(0, Math.min(1, st.door == null ? 0.06 : st.door)) * 1.85 +
  br * 0.07 * bp +
  0.01 * Math.sin(t * 0.31) * Math.sin(t * 0.13 + 1);
if (th < 0) th = 0;
var wg = 0.8 * Math.min(1, Math.sin(Math.min(th, 1.5708)) * 1.1),
  gc = [Math.round(255 - 95 * el), Math.round(196 - 10 * el), Math.round(130 + 125 * el)],
  gcs = "rgba(" + gc[0] + "," + gc[1] + "," + gc[2] + ",",
  glow = Math.min(1, Li * 0.8 + el * 0.9),
  em = br * (0.35 + 0.65 * bp);
var c = Math.cos(th),
  sn = Math.sin(th);
function lp(u, h) {
  return P(-0.05 + 0.8 * c * u, 7 - 0.8 * sn * u, h);
}
g.save();
g.scale(1 + 0.012 * br * bs, 1 + 0.022 * br * bs);
g.rotate(0.01 * br * Math.sin(t * 0.21));
g.fillStyle = L("#140d12", "#0b0a12");
poly([P(-1.3, 7, 0), P(1.3, 7, 0), P(1.3, 9.6, 0), P(1.3, 9.6, 0.1), P(1.3, 7, 0.1), P(-1.3, 7, 0.1)]);
g.fill();
var stn = [
  [-1.22, 7],
  [0, 7],
  [1.22, 7],
  [1.3, 8.3],
  [1.3, 9.5],
];
for (i = 0; i < 5; i++) {
  var sp = P(stn[i][0], stn[i][1], 0.04),
    sc = D / stn[i][1];
  g.fillStyle = L("#4e4044", "#24222e");
  g.beginPath();
  g.ellipse(sp[0], sp[1], 0.13 * sc, 0.07 * sc, 0, 0, 6.283);
  g.fill();
  g.fillStyle = "rgba(255,190,140," + (0.16 * sun).toFixed(3) + ")";
  g.beginPath();
  g.ellipse(sp[0] + 0.02 * sc, sp[1] - 0.04 * sc, 0.08 * sc, 0.022 * sc, 0, 0, 6.283);
  g.fill();
}
var SW = [P(1.3, 7, 0.1), P(1.3, 9.6, 0.1), P(1.3, 9.6, 2.15), P(1.3, 7, 2.15)];
poly(SW);
var sg = g.createLinearGradient(SW[0][0], 0, SW[1][0], 0);
sg.addColorStop(0, L("#6a4a44", "#2a2636"));
sg.addColorStop(1, L("#7e5648", "#2e2a3a"));
g.fillStyle = sg;
g.fill();
g.save();
poly(SW);
g.clip();
var tg = g.createLinearGradient(0, -2.2, 0, -0.3);
tg.addColorStop(0, "rgba(255,180,120," + (0.22 * sun).toFixed(3) + ")");
tg.addColorStop(1, "rgba(255,180,120,0)");
g.fillStyle = tg;
g.fillRect(1.2, -2.4, 0.7, 2.4);
var sdb = g.createLinearGradient(0, -0.9, 0, 0);
sdb.addColorStop(0, "rgba(14,9,12,0)");
sdb.addColorStop(1, "rgba(14,9,12,0.45)");
g.fillStyle = sdb;
g.fillRect(1.2, -0.9, 0.7, 0.9);
g.strokeStyle = "rgba(20,12,16,0.5)";
g.lineWidth = e.px * 1.2;
for (var z = 7.16; z < 9.6; z += 0.163) ln(P(1.3, z, 0.1), P(1.3, z, 2.15));
g.restore();
g.strokeStyle = "rgba(255,196,140," + (0.05 + 0.35 * sun).toFixed(3) + ")";
g.lineWidth = e.px * 1.4;
ln(P(1.3, 7, 0.12), P(1.3, 7, 2.15));
g.fillStyle = L("#1c1318", "#100e16");
poly([P(1.3, 7, 2.15), P(1.3, 9.6, 2.15), P(1.48, 9.75, 2.06), P(1.48, 6.85, 2.06)]);
g.fill();
var RS = [P(0, 6.85, 2.98), P(0, 9.75, 2.98), P(1.48, 9.75, 2.06), P(1.48, 6.85, 2.06)];
poly(RS);
var rgr = g.createLinearGradient(RS[0][0], RS[0][1], RS[3][0], RS[3][1]);
rgr.addColorStop(0, L("#7a5854", "#34304a"));
rgr.addColorStop(1, L("#5a4248", "#26243a"));
g.fillStyle = rgr;
g.fill();
g.save();
poly(RS);
g.clip();
g.strokeStyle = "rgba(24,14,20,0.45)";
g.lineWidth = e.px;
for (var z2 = 7.0; z2 < 9.75; z2 += 0.2) ln(P(0, z2, 2.98), P(1.48, z2, 2.06));
for (i = 0; i < 9; i++) {
  var mz = 7 + R() * 2.6,
    mo = 0.3 + R() * 1.0,
    mp = P(mo, mz, 2.98 - mo * 0.62),
    ms = D / mz;
  g.fillStyle = "rgba(78,80,62,0.35)";
  g.beginPath();
  g.ellipse(mp[0], mp[1], 0.12 * ms, 0.035 * ms, -0.35, 0, 6.283);
  g.fill();
}
g.restore();
g.strokeStyle = "rgba(255,204,156," + (0.08 + 0.52 * sun).toFixed(3) + ")";
g.lineWidth = e.px * 1.6;
ln(RS[0], RS[1]);
g.strokeStyle = "rgba(255,190,140," + (0.04 + 0.26 * sun).toFixed(3) + ")";
ln(RS[2], RS[3]);
var F = [
  [-1.3, -0.1],
  [1.3, -0.1],
  [1.3, -2.15],
  [0, -2.95],
  [-1.3, -2.15],
];
poly(F);
var fgr = g.createLinearGradient(0, -2.95, 0, -0.1);
fgr.addColorStop(0, L("#4c3a44", "#24222f"));
fgr.addColorStop(1, L("#33262e", "#1a1822"));
g.fillStyle = fgr;
g.fill();
g.save();
poly(F);
g.clip();
var seams = [];
for (i = 0; i < 16; i++) {
  var x0 = -1.3 + i * 0.1625,
    tn = R(),
    gp = R() < 0.3;
  g.globalAlpha = 0.1 + 0.12 * tn;
  g.fillStyle = tn < 0.5 ? "#140d12" : "#8a6a62";
  g.fillRect(x0, -3, 0.1625, 3);
  g.globalAlpha = 0.12;
  g.strokeStyle = "#120a0e";
  g.lineWidth = e.px;
  for (j = 0; j < 3; j++) {
    var gx = x0 + 0.03 + R() * 0.1;
    g.beginPath();
    g.moveTo(gx, -3);
    g.bezierCurveTo(gx + 0.01, -2, gx - 0.012, -1, gx + 0.004, 0);
    g.stroke();
  }
  g.globalAlpha = 0.7;
  g.strokeStyle = "#0d080b";
  g.lineWidth = gp ? 0.016 : 0.009;
  ln([x0, -3], [x0, 0]);
  if (gp && i > 0) seams.push(x0);
}
g.globalAlpha = 1;
var db = g.createLinearGradient(0, -0.7, 0, -0.1);
db.addColorStop(0, "rgba(12,8,12,0)");
db.addColorStop(1, "rgba(12,8,12,0.5)");
g.fillStyle = db;
g.fillRect(-1.4, -0.75, 2.8, 0.65);
for (i = 0; i < 14; i++) {
  var lx = -1.25 + R() * 2.5,
    ly = -0.15 - R() * 1.9,
    lr = 0.015 + R() * 0.04,
    lc = R() < 0.5;
  g.globalAlpha = 0.16;
  g.fillStyle = lc ? "#8a8a74" : "#0c070a";
  g.beginPath();
  g.ellipse(lx, ly, lr, lr * 0.7, 0, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
g.fillStyle = "#0a070a";
g.fillRect(-1.13, -1.7, 0.46, 0.5);
if (glow > 0.01) {
  g.globalCompositeOperation = "lighter";
  g.fillStyle = gcs + (glow * 0.3).toFixed(3) + ")";
  g.fillRect(-1.13, -1.7, 0.46, 0.5);
  g.globalCompositeOperation = "source-over";
}
g.fillStyle = L("#4a3a40", "#24222e");
g.save();
g.translate(-0.9, -1.45);
g.rotate(0.42);
g.fillRect(-0.33, -0.05, 0.66, 0.1);
g.rotate(-0.84);
g.fillRect(-0.33, -0.045, 0.66, 0.09);
g.restore();
g.fillRect(-1.16, -1.5, 0.52, 0.09);
g.strokeStyle = L("#2a1e24", "#16141e");
g.lineWidth = 0.04;
g.strokeRect(-1.15, -1.72, 0.5, 0.54);
g.fillStyle = "#060406";
g.beginPath();
g.ellipse(0.02, -2.48, 0.04, 0.05, 0, 0, 6.283);
g.fill();
var ey = Math.max(0, (br - 0.3) / 0.7) * (0.55 + 0.45 * Math.sin(t * 0.37)),
  kh = Math.max(ey, glow * 0.5);
if (kh > 0.01) {
  var ex = 0.02 + 0.012 * Math.sin(t * 0.23) * ey,
    eg = g.createRadialGradient(ex, -2.48, 0, ex, -2.48, 0.035);
  eg.addColorStop(0, (ey > glow * 0.5 ? "rgba(255,224,180," : gcs) + (kh * 0.9).toFixed(3) + ")");
  eg.addColorStop(1, "rgba(255,200,150,0)");
  g.globalCompositeOperation = "lighter";
  g.fillStyle = eg;
  g.fillRect(ex - 0.035, -2.515, 0.07, 0.07);
  g.globalCompositeOperation = "source-over";
}
if (glow > 0.01 || em > 0.02) {
  g.globalCompositeOperation = "lighter";
  for (k = 0; k < seams.length; k++) {
    var sx = seams[k];
    if (sx > -0.15 && sx < 0.85) continue;
    if (glow > 0.01) {
      g.strokeStyle = gcs + (glow * 0.5).toFixed(3) + ")";
      g.lineWidth = 0.008;
      ln([sx, -2.7], [sx, -0.15]);
      g.strokeStyle = gcs + (glow * 0.12).toFixed(3) + ")";
      g.lineWidth = 0.05;
      ln([sx, -2.6], [sx, -0.2]);
    }
    if (em > 0.02) {
      g.strokeStyle = "rgba(255,110,70," + (em * 0.35).toFixed(3) + ")";
      g.lineWidth = 0.012;
      ln([sx, -2.7], [sx, -0.15]);
      g.strokeStyle = "rgba(255,100,60," + (em * 0.1).toFixed(3) + ")";
      g.lineWidth = 0.06;
      ln([sx, -2.6], [sx, -0.2]);
    }
  }
  g.globalCompositeOperation = "source-over";
}
g.restore();
var dx0 = -0.05,
  dy0 = -1.97;
g.save();
g.beginPath();
g.rect(dx0, dy0, 0.8, 1.85);
g.clip();
g.fillStyle = "#070508";
g.fillRect(dx0, dy0, 0.8, 1.85);
if (el > 0.005) {
  var vg = g.createLinearGradient(0, dy0, 0, -0.12);
  vg.addColorStop(0, "#0a0f2a");
  vg.addColorStop(0.35, "#22305e");
  vg.addColorStop(0.65, "#121a3a");
  vg.addColorStop(1, "#080b1c");
  g.globalAlpha = Math.min(1, el * 2.5);
  g.fillStyle = vg;
  g.fillRect(dx0, dy0, 0.8, 1.85);
  g.globalAlpha = 1;
}
for (i = 0; i < 46; i++) {
  var sx2 = dx0 + R() * 0.8,
    sy2 = dy0 + R() * 1.85,
    thr = R(),
    sz = 0.004 + R() * 0.007,
    tw = 0.6 + 0.4 * Math.sin(t * (0.5 + R()) + i),
    sa = Math.max(0, Math.min(1, (el - thr * 0.85) * 5)) * tw;
  if (sa > 0.01) {
    g.globalAlpha = sa;
    g.fillStyle = "#e8eeff";
    g.beginPath();
    g.arc(sx2, sy2, sz, 0, 6.283);
    g.fill();
  }
}
g.globalAlpha = 1;
var FL = [P(-1.3, 7, 0.12), P(1.3, 7, 0.12), P(1.3, 9.5, 0.12), P(-1.3, 9.5, 0.12)];
poly(FL);
g.globalAlpha = 1 - el * 0.35;
g.fillStyle = "#120c10";
g.fill();
g.strokeStyle = "rgba(0,0,0,0.5)";
g.lineWidth = e.px;
for (var fz = 7.25; fz < 9.5; fz += 0.25) ln(P(-1.3, fz, 0.12), P(1.3, fz, 0.12));
g.globalAlpha = 1;
for (i = 0; i < 16; i++) {
  var ax = -1.3 + i * 0.1625,
    dd = Math.abs(ax + 0.08 + 0.45) / 1.3,
    vis = Math.max(0, Math.min(1, 1 - (el * 1.9 - dd) * 2.2));
  if (vis <= 0) continue;
  var q0 = P(ax, 9.5, 0.12),
    q1 = P(ax + 0.1625, 9.5, 2.1);
  g.globalAlpha = vis;
  g.fillStyle = i % 3 == 1 ? "#1a1216" : "#151013";
  g.fillRect(q0[0], q1[1] - (1 - vis) * 0.15, q1[0] - q0[0] - e.px, q0[1] - q1[1]);
}
g.globalAlpha = 1;
if (Li > 0.005) {
  g.globalCompositeOperation = "lighter";
  var lgr = g.createRadialGradient(-0.25, -0.62, 0, -0.25, -0.62, 1.3);
  lgr.addColorStop(0, "rgba(255,190,120," + Math.min(1, Li * 0.55).toFixed(3) + ")");
  lgr.addColorStop(0.4, "rgba(230,150,90," + Math.min(1, Li * 0.22).toFixed(3) + ")");
  lgr.addColorStop(1, "rgba(200,120,80,0)");
  g.fillStyle = lgr;
  g.fillRect(dx0, dy0, 0.8, 1.85);
  g.globalCompositeOperation = "source-over";
}
if (el > 0.005) {
  g.globalCompositeOperation = "lighter";
  var cgr = g.createRadialGradient(0.35, -1.2, 0, 0.35, -1.2, 1.0);
  cgr.addColorStop(0, "rgba(150,175,255," + (el * 0.3).toFixed(3) + ")");
  cgr.addColorStop(1, "rgba(120,150,255,0)");
  g.fillStyle = cgr;
  g.fillRect(dx0, dy0, 0.8, 1.85);
  g.globalCompositeOperation = "source-over";
}
g.strokeStyle = "#0a0709";
g.fillStyle = "#0a0709";
g.lineCap = "round";
var o0 = P(-0.15, 9.35, 0.12),
  o1 = P(-0.32, 9.45, 1.95);
g.lineWidth = 0.035;
ln(o0, o1);
g.beginPath();
g.ellipse(o0[0] + 0.01, o0[1] - 0.17, 0.045, 0.17, 0.08, 0, 6.283);
g.fill();
var rc = P(-0.6, 9.48, 1.38);
g.lineWidth = 0.025;
g.beginPath();
g.ellipse(rc[0], rc[1], 0.1, 0.12, 0, 0, 6.283);
g.stroke();
g.beginPath();
g.ellipse(rc[0] + 0.01, rc[1] + 0.01, 0.07, 0.09, 0, 0, 6.283);
g.stroke();
ln(P(-1.3, 9.5, 1.62), P(-0.75, 9.5, 1.62));
var jr = P(-0.85, 9.45, 1.62);
g.fillRect(jr[0] - 0.035, jr[1] - 0.11, 0.07, 0.11);
g.lineCap = "butt";
if (sh > 0.005) {
  var fb0 = P(0.1, 8.3, 0),
    fs = D / 8.3,
    br2 = 0.006 * Math.sin(t * 1.1);
  g.save();
  g.translate(fb0[0] + 0.008 * Math.sin(t * 0.3), fb0[1]);
  g.scale(fs, fs);
  g.globalAlpha = Math.min(1, sh * 1.2);
  g.fillStyle = "#050306";
  g.beginPath();
  g.moveTo(-0.24, 0);
  g.bezierCurveTo(-0.22, -0.5, -0.24, -1.0, -0.22, -1.38 + br2);
  g.quadraticCurveTo(-0.14, -1.47 + br2, -0.06, -1.48 + br2);
  g.lineTo(0.06, -1.48 + br2);
  g.quadraticCurveTo(0.16, -1.46 + br2, 0.21, -1.36 + br2);
  g.bezierCurveTo(0.23, -1.0, 0.22, -0.5, 0.25, 0);
  g.closePath();
  g.fill();
  g.beginPath();
  g.ellipse(0.03, -1.6 + br2, 0.1, 0.12, 0.15, 0, 6.283);
  g.fill();
  g.fillRect(-0.04, -1.52 + br2, 0.08, 0.06);
  var lit = Math.min(1, Li + el);
  if (lit > 0.01) {
    g.globalAlpha = sh * lit * 0.55;
    g.strokeStyle = gcs + "1)";
    g.lineWidth = 0.014;
    g.beginPath();
    g.moveTo(-0.23, -0.3);
    g.bezierCurveTo(-0.24, -0.9, -0.23, -1.2, -0.22, -1.36 + br2);
    g.stroke();
    g.beginPath();
    g.arc(0.03, -1.6 + br2, 0.11, 2.3, 4.3);
    g.stroke();
  } else {
    g.globalAlpha = sh * 0.16;
    g.strokeStyle = "#8a6a60";
    g.lineWidth = 0.01;
    g.beginPath();
    g.arc(0.03, -1.6 + br2, 0.11, 4.4, 5.6);
    g.stroke();
    g.beginPath();
    g.moveTo(0.21, -1.36 + br2);
    g.quadraticCurveTo(0.24, -1.1, 0.23, -0.8);
    g.stroke();
  }
  g.restore();
  g.globalAlpha = 1;
}
g.fillStyle = "rgba(0,0,0,0.4)";
g.fillRect(dx0, dy0, 0.05, 1.85);
g.fillRect(dx0, dy0, 0.8, 0.05);
g.restore();
g.fillStyle = L("#45363c", "#22202c");
g.fillRect(-0.12, -2.04, 0.07, 1.94);
g.fillRect(0.75, -2.04, 0.07, 1.94);
g.fillRect(-0.12, -2.06, 0.94, 0.08);
g.fillStyle = "rgba(255,190,140," + (0.1 * sun).toFixed(3) + ")";
g.fillRect(-0.12, -2.06, 0.94, 0.012);
g.fillStyle = L("#3a2c30", "#1c1a24");
g.fillRect(-0.12, -0.15, 0.94, 0.05);
var fe = -0.05 + 0.8 * c,
  fz2 = 7 - 0.8 * sn,
  hb = P(-0.05, 7, 0.12),
  ht = P(-0.05, 7, 1.97),
  fb = P(fe, fz2, 0.12),
  ft = P(fe, fz2, 1.97),
  outer = c - 0.38 * sn > 0;
poly([hb, ht, ft, fb]);
g.fillStyle = outer ? L("#3c2e36", "#201e2a") : L("#7a5648", "#2c2838");
g.fill();
g.strokeStyle = "rgba(12,7,10,0.6)";
g.lineWidth = e.px * 1.1;
for (j = 1; j < 5; j++) {
  ln(lp(j / 5, 0.14), lp(j / 5, 1.95));
}
if (!outer) {
  g.strokeStyle = L("#4a3430", "#1c1a24");
  g.lineWidth = 0.05;
  ln(lp(0.08, 0.45), lp(0.92, 0.45));
  ln(lp(0.08, 1.62), lp(0.92, 1.62));
  ln(lp(0.92, 0.45), lp(0.08, 1.62));
} else {
  var dmp = g.createLinearGradient(0, -0.6, 0, -0.12);
  dmp.addColorStop(0, "rgba(12,8,12,0)");
  dmp.addColorStop(1, "rgba(12,8,12,0.4)");
  g.fillStyle = dmp;
  poly([hb, lp(0, 0.6), lp(1, 0.6), fb]);
  g.fill();
}
g.strokeStyle = outer ? L("#5a4240", "#26242e") : L("#8a6450", "#302c3a");
g.lineWidth = 0.025;
ln(fb, ft);
g.strokeStyle = L("#4a2e26", "#201c24");
g.lineWidth = 0.035;
ln(lp(0.84, 1.1), lp(1.07, 1.1));
g.fillStyle = L("#3a2a26", "#1a1820");
g.fillRect(0.765, -1.125, 0.04, 0.05);
if (lock !== "gone") {
  g.save();
  var lkd = lock === "locked";
  if (lkd) g.translate(0.785, -1.07);
  else {
    g.translate(0.787, -1.09);
    g.rotate(0.25 + 0.04 * Math.sin(t * 0.6));
  }
  g.strokeStyle = L("#6a6464", "#34323e");
  g.lineWidth = 0.011;
  g.beginPath();
  g.arc(0, lkd ? -0.01 : 0, 0.022, Math.PI, lkd ? 0 : -0.7);
  g.stroke();
  g.fillStyle = L("#4e4644", "#26242e");
  g.fillRect(-0.028, lkd ? -0.01 : 0.02, 0.056, 0.065);
  g.fillStyle = "rgba(255,190,140," + (0.22 * sun).toFixed(3) + ")";
  g.fillRect(0.018, lkd ? -0.01 : 0.02, 0.008, 0.065);
  g.restore();
}
var bl0 = P(-1.48, 6.85, 2.06),
  bl1 = P(0, 6.85, 2.98),
  br0 = P(1.48, 6.85, 2.06);
g.fillStyle = L("#261b21", "#141220");
poly([bl0, bl1, br0, [br0[0], br0[1] + 0.13], [bl1[0], bl1[1] + 0.15], [bl0[0], bl0[1] + 0.13]]);
g.fill();
g.strokeStyle = "rgba(255,196,140," + (0.06 + 0.38 * sun).toFixed(3) + ")";
g.lineWidth = e.px * 1.4;
ln(bl1, br0);
var oa = P(-0.75, 6.75, 0),
  ob = [-0.55, -1.9];
g.strokeStyle = L("#2a1e24", "#16141e");
g.lineWidth = 0.045;
g.lineCap = "round";
ln(oa, ob);
g.save();
g.translate(oa[0] + 0.04, oa[1] - 0.25);
g.rotate(Math.atan2(ob[0] - oa[0], oa[1] - ob[1]));
g.fillStyle = L("#2e2228", "#18161f");
g.beginPath();
g.ellipse(0, 0, 0.075, 0.3, 0, 0, 6.283);
g.fill();
g.restore();
g.strokeStyle = "rgba(255,180,130," + (0.25 * sun).toFixed(3) + ")";
g.lineWidth = e.px;
ln([oa[0] + 0.03, oa[1] - 0.5], [ob[0] + 0.025, ob[1]]);
g.lineCap = "butt";
for (i = 0; i < 46; i++) {
  var side = i >= 30,
    gb,
    gs = 1;
  if (!side) {
    gb = [-1.45 + R() * 2.9, 0.02 + R() * 0.05];
  } else {
    var zz2 = 7 + R() * 2.6;
    gb = P(1.3 + R() * 0.12, zz2, 0);
    gs = D / zz2;
  }
  var gh = (0.08 + R() * 0.3) * gs,
    gl = (R() - 0.4) * 0.25,
    ph = R() * 6.283,
    sw = Math.sin(t * 0.6 + ph) * 0.03 + Math.sin(t * 1.37 + ph) * 0.01;
  g.strokeStyle = L("#2a2024", "#16141e");
  g.lineWidth = 0.012 * gs;
  g.beginPath();
  g.moveTo(gb[0], gb[1]);
  g.quadraticCurveTo(gb[0] + gl * gh * 0.3, gb[1] - gh * 0.6, gb[0] + (gl + sw) * gh, gb[1] - gh);
  g.stroke();
}
g.restore();
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
var op = Math.min(1, 0.12 + wg * 2.5);
if (Li > 0.01) e.light(0.35, -1.0, 0.8 + 0.5 * wg, "#ffc47a", Li * 0.4 * op);
if (el > 0.01) e.light(0.35, -1.1, 1.0 + 0.6 * wg, "#a8beff", el * 0.45 * op);
if (br > 0.05) e.light(0.0, -1.2, 1.4, "#ff8a5a", br * 0.12 * bp);
e.at(0.35, -1.75);
