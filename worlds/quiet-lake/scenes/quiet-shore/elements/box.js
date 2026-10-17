var t = e.t,
  D = 8.4,
  a0 = -0.6,
  S = 91;
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
var op = Math.max(0, Math.min(1, st.boxOpen || 0)),
  gl = Math.max(0, Math.min(1, st.boxGlow || 0));
function W(x, z, h) {
  var d = D + z;
  return [((a0 + x) * D) / d - a0, ((1.7 - h) * D) / d - 1.7];
}
function poly(a) {
  g.beginPath();
  g.moveTo(a[0][0], a[0][1]);
  for (var i = 1; i < a.length; i++) g.lineTo(a[i][0], a[i][1]);
  g.closePath();
}
function line(p, q) {
  g.beginPath();
  g.moveTo(p[0], p[1]);
  g.lineTo(q[0], q[1]);
  g.stroke();
}
var hw = 0.25,
  hd = 0.18,
  hh = 0.32,
  lt = 0.05,
  hb = hh - lt;
var L = 1.3 + 1.7 * s,
  dx = -0.13 * L,
  sa = 0.5 * (1 - 0.5 * s) * (1 - 0.7 * m);
var n0 = W(0, 0, 0),
  n1 = W(dx, -hd - L, 0),
  sg = g.createLinearGradient(n0[0], n0[1], n1[0], n1[1]);
sg.addColorStop(0, C("#24161e", "#140c14", "#4e4856", sa));
sg.addColorStop(1, C("#24161e", "#140c14", "#4e4856", 0));
g.fillStyle = sg;
poly([W(-hw, hd, 0), W(hw, hd, 0), W(hw + dx, -hd - L, 0), W(-hw + dx, -hd - L, 0)]);
g.fill();
g.globalAlpha = 0.55;
g.fillStyle = C("#1e1218", "#100a10", "#4a4450");
poly([
  W(-hw - 0.03, -hd - 0.05, 0),
  W(hw + 0.04, -hd - 0.05, 0),
  W(hw + 0.04, hd + 0.03, 0),
  W(-hw - 0.03, hd + 0.03, 0),
]);
g.fill();
g.globalAlpha = 1;
if (gl > 0) {
  g.save();
  g.globalCompositeOperation = "lighter";
  var c0 = W(0, -0.1, 0),
    rr = 0.6 + 0.9 * op;
  g.translate(c0[0], c0[1]);
  g.scale(1, 1.7 / D);
  var gg = g.createRadialGradient(0, 0, 0, 0, 0, rr);
  gg.addColorStop(0, "rgba(255,220,160," + (0.35 * gl * (0.35 + 0.65 * op)).toFixed(3) + ")");
  gg.addColorStop(1, "rgba(255,220,160,0)");
  g.fillStyle = gg;
  g.beginPath();
  g.arc(0, 0, rr, 0, 6.283);
  g.fill();
  g.restore();
}
var cBody = C("#1e151b", "#110b11", "#38323c"),
  cSide = C("#261a20", "#150e14", "#433c46"),
  cTop = C("#4a3434", "#21181f", "#6c6470"),
  cTopB = C("#6e4c40", "#2c2026", "#7c7480");
poly([W(hw, -hd, 0), W(hw, hd, 0), W(hw, hd, hb), W(hw, -hd, hb)]);
g.fillStyle = cSide;
g.fill();
if (sw > 0.01) {
  g.globalAlpha = 0.18 * sw;
  g.fillStyle = "#ffb070";
  g.fill();
  g.globalAlpha = 1;
}
poly([W(-hw, -hd, 0), W(hw, -hd, 0), W(hw, -hd, hb), W(-hw, -hd, hb)]);
g.fillStyle = cBody;
g.fill();
g.strokeStyle = C("#3a2a30", "#1e161c", "#55505a");
g.lineWidth = e.px;
g.globalAlpha = 0.55;
poly([W(-hw + 0.03, -hd, 0.03), W(hw - 0.03, -hd, 0.03), W(hw - 0.03, -hd, hb - 0.03), W(-hw + 0.03, -hd, hb - 0.03)]);
g.stroke();
g.globalAlpha = 1;
var a = op * 1.95,
  ca = Math.cos(a),
  sn = Math.sin(a),
  Hz = hd,
  Hh = hb,
  Fz = hd - 2 * hd * ca,
  Fh = hb + 2 * hd * sn,
  Hz2 = Hz + lt * sn,
  Hh2 = Hh + lt * ca,
  Fz2 = Fz + lt * sn,
  Fh2 = Fh + lt * ca;
if (op > 0.003) {
  poly([W(-hw, -hd, hb), W(hw, -hd, hb), W(hw, hd, hb), W(-hw, hd, hb)]);
  g.fillStyle = cTop;
  g.fill();
  var o = [
    W(-hw + 0.025, -hd + 0.025, hb),
    W(hw - 0.025, -hd + 0.025, hb),
    W(hw - 0.025, hd - 0.025, hb),
    W(-hw + 0.025, hd - 0.025, hb),
  ];
  poly(o);
  g.fillStyle = "#0a0609";
  g.fill();
  if (gl > 0) {
    g.save();
    poly(o);
    g.clip();
    g.globalCompositeOperation = "lighter";
    var ic = W(0, 0.03, hb);
    var ig = g.createRadialGradient(ic[0], ic[1], 0, ic[0], ic[1], 0.28);
    ig.addColorStop(0, "rgba(255,238,195," + (0.95 * gl).toFixed(3) + ")");
    ig.addColorStop(0.5, "rgba(255,205,135," + (0.45 * gl).toFixed(3) + ")");
    ig.addColorStop(1, "rgba(255,170,100,0)");
    g.fillStyle = ig;
    g.fillRect(ic[0] - 0.4, ic[1] - 0.4, 0.8, 0.8);
    g.restore();
  }
}
poly([W(hw, Hz, Hh), W(hw, Fz, Fh), W(hw, Fz2, Fh2), W(hw, Hz2, Hh2)]);
g.fillStyle = cSide;
g.fill();
if (a < 0.166) {
  var tf = W(0, Fz2, Fh2),
    tb = W(0, Hz2, Hh2),
    tg = g.createLinearGradient(tf[0], tf[1], tb[0], tb[1]);
  tg.addColorStop(0, cTop);
  tg.addColorStop(1, cTopB);
  poly([W(-hw, Hz2, Hh2), W(hw, Hz2, Hh2), W(hw, Fz2, Fh2), W(-hw, Fz2, Fh2)]);
  g.fillStyle = tg;
  g.fill();
  g.lineWidth = e.px * 1.2;
  g.strokeStyle = "rgba(255,200,145," + (0.6 * sw).toFixed(3) + ")";
  line(W(-hw, Hz2, Hh2), W(hw, Hz2, Hh2));
  g.strokeStyle = "rgba(255,200,145," + (0.3 * sw).toFixed(3) + ")";
  line(W(hw, Fz2, Fh2), W(hw, Hz2, Hh2));
} else {
  poly([W(-hw, Hz, Hh), W(hw, Hz, Hh), W(hw, Fz, Fh), W(-hw, Fz, Fh)]);
  g.fillStyle = C("#2a1d24", "#170f15", "#4a424c");
  g.fill();
  if (gl > 0) {
    g.save();
    g.globalCompositeOperation = "lighter";
    g.globalAlpha = 0.5 * gl * Math.min(1, op * 2);
    g.fillStyle = "#ffcf90";
    g.fill();
    g.restore();
  }
  g.lineWidth = e.px * 1.2;
  g.strokeStyle = "rgba(255,200,145," + (0.45 * sw).toFixed(3) + ")";
  line(W(-hw, Fz2, Fh2), W(hw, Fz2, Fh2));
}
poly([W(-hw, Fz, Fh), W(hw, Fz, Fh), W(hw, Fz2, Fh2), W(-hw, Fz2, Fh2)]);
g.fillStyle = cBody;
g.fill();
if (op < 0.05) {
  var cp = W(0, -hd, hb + 0.01);
  g.fillStyle = C("#6a5040", "#3a2a28", "#8a8580");
  g.fillRect(cp[0] - 0.017, cp[1] - 0.035, 0.034, 0.05);
  g.fillStyle = "rgba(255,210,160," + (0.4 * sw).toFixed(3) + ")";
  g.fillRect(cp[0] - 0.017, cp[1] - 0.035, 0.034, e.px);
}
if (gl > 0 && op < 0.3) {
  var k1 = 0.85 * gl * (1 - op / 0.3);
  g.strokeStyle = "rgba(255,226,170," + k1.toFixed(3) + ")";
  g.lineWidth = e.px * 1.4;
  line(W(-hw, -hd, hb), W(hw, -hd, hb));
  line(W(hw, -hd, hb), W(hw, hd, hb));
}
if (gl > 0) {
  var lc = W(0, 0, hb + 0.06 + 0.12 * op),
    br = 1 + 0.08 * Math.sin(t * 0.7) + 0.05 * Math.sin(t * 1.9 + 1);
  e.light(lc[0], lc[1], (0.25 + 0.6 * op) * br, "#ffe2a8", gl * (0.25 + 0.55 * op));
}
if (gl > 0 && op > 0.3) {
  g.save();
  g.globalCompositeOperation = "lighter";
  for (var j = 0; j < 9; j++) {
    var r0 = R(),
      xm = (R() - 0.5) * 0.32,
      zm = (R() - 0.5) * 0.2,
      sp = 0.05 + R() * 0.05,
      ph = (t * sp + r0) % 1,
      pm = W(xm + 0.05 * Math.sin(t * 0.4 + j * 2), zm, hb + ph * 1.2),
      am = ((gl * (op - 0.3)) / 0.7) * Math.sin(Math.PI * ph) * 0.85,
      rm = e.px * 2.2;
    var mg = g.createRadialGradient(pm[0], pm[1], 0, pm[0], pm[1], rm * 2);
    mg.addColorStop(0, "rgba(255,236,190," + am.toFixed(3) + ")");
    mg.addColorStop(1, "rgba(255,220,160,0)");
    g.fillStyle = mg;
    g.fillRect(pm[0] - rm * 2, pm[1] - rm * 2, rm * 4, rm * 4);
  }
  g.restore();
}
