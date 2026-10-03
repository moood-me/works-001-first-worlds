var t = e.t,
  D = 13.5,
  a0 = 5.5,
  S = 71;
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
var dr = Math.max(0, Math.min(1, st.shedDoor || 0)),
  li = Math.max(0, Math.min(1, st.shedLight || 0)),
  rs = Math.max(0, Math.min(1, st.shedRise || 0));
var rv = Math.max(0, Math.min(1, (rs - 0.12) / 0.88));
rv = rv * rv * (3 - 2 * rv);
var Lf = 2.3 * rv + 0.05 * rv * Math.sin(t * 0.9) + 0.03 * rv * Math.sin(t * 0.37 + 1),
  sx = 0.1 * rv * Math.sin(t * 0.45) + 0.04 * rv * Math.sin(t * 1.1 + 2);
function W(x, z, h) {
  var d = D + z;
  return [((a0 + x) * D) / d - a0, ((1.7 - h) * D) / d - 1.7];
}
function B(x, z, h) {
  return W(x + sx, z, h + Lf);
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
var hw = 1.5,
  hd = 1.7,
  wh = 2.2,
  rh = 3.1,
  RL = 2 * hd + 0.5;
function rH(z) {
  return rh - 0.08 * Math.sin((Math.PI * (z + hd + 0.25)) / RL);
}
function eH(z) {
  return wh - 0.15 - 0.04 * Math.sin((Math.PI * (z + hd + 0.25)) / RL);
}
var cWF = C("#2c2026", "#161016", "#5c5458"),
  cWL = C("#33252b", "#19121a", "#686064"),
  cR0 = C("#3a2a2e", "#1c141c", "#6e686e"),
  cR1 = C("#5a423e", "#2a1e24", "#8a8486"),
  cDoor = C("#241a20", "#120c12", "#504850"),
  cDk = C("#140e12", "#0a070a", "#3a3638");
function rim(a) {
  return "rgba(255,195,140," + (a * sw).toFixed(3) + ")";
}
var L = 2.2 + 2.5 * s,
  dxs = -0.13 * L,
  sa = 0.42 * (1 - 0.5 * s) * (1 - 0.7 * m) * (1 - 0.45 * rv),
  n0 = W(sx, 0, 0),
  n1 = W(sx + dxs, -hd - L, 0),
  sg = g.createLinearGradient(n0[0], n0[1], n1[0], n1[1]);
sg.addColorStop(0, C("#24161e", "#140c14", "#4e4856", sa));
sg.addColorStop(1, C("#24161e", "#140c14", "#4e4856", 0));
g.fillStyle = sg;
poly([W(-hw + sx, hd, 0), W(hw + sx, hd, 0), W(hw + sx + dxs, -hd - L, 0), W(-hw + sx + dxs, -hd - L, 0)]);
g.fill();
if (rv < 0.6) {
  g.globalAlpha = 0.5 * (1 - rv / 0.6);
  g.fillStyle = cDk;
  poly([W(-hw - 0.1, -hd - 0.12, 0), W(hw + 0.1, -hd - 0.12, 0), W(hw + 0.1, hd, 0), W(-hw - 0.1, hd, 0)]);
  g.fill();
  g.globalAlpha = 1;
}
if (li > 0 && dr > 0.02 && rv < 0.98) {
  g.save();
  g.globalCompositeOperation = "lighter";
  var spl = li * Math.min(1, dr * 1.5) * (1 - rv),
    d0 = W(0, -hd, 0),
    d1 = W(0.1, -hd - 2.6, 0),
    lg = g.createLinearGradient(d0[0], d0[1], d1[0], d1[1]);
  lg.addColorStop(0, "rgba(255,184,104," + (0.4 * spl).toFixed(3) + ")");
  lg.addColorStop(1, "rgba(255,184,104,0)");
  g.fillStyle = lg;
  poly([W(-0.4, -hd, 0), W(0.4, -hd, 0), W(1.0, -hd - 2.6, 0), W(-0.9, -hd - 2.6, 0)]);
  g.fill();
  g.restore();
}
if (rs > 0.01 && rv < 1) {
  S = 33;
  var cal = Math.min(1, rs * 8) * (1 - rv) * 0.8;
  g.fillStyle = cDk;
  for (var j = 0; j < 16; j++) {
    var fxj = (j % 2 ? 1 : -1) * 0.75,
      an = R() * 6.283,
      rd = 0.3 + 0.9 * rv + R() * 0.4,
      pc = W(fxj + Math.cos(an) * rd, -0.3 + Math.sin(an) * rd * 0.6, 0),
      cr = 0.05 + R() * 0.08;
    g.globalAlpha = cal;
    g.beginPath();
    g.ellipse(pc[0], pc[1], cr, cr * 0.45, 0, 0, 6.283);
    g.fill();
  }
  g.globalAlpha = 1;
  S = 71;
}
if (rv > 0.001) {
  var cLg = C("#3a2a2a", "#1c1418", "#5e5458"),
    gw = Math.min(1, rv * 3);
  g.lineCap = "round";
  g.lineJoin = "round";
  for (var k = 0; k < 2; k++) {
    var sg2 = k ? 1 : -1,
      ph = t * 0.6 + k * 2.1,
      hx = sg2 * 0.65 + sx,
      hy = Lf + 0.02,
      fx = sg2 * (0.75 + 0.15 * rv),
      fz = -0.35,
      kx = sg2 * (0.95 + 0.25 * rv) + sx * 0.5 + 0.03 * Math.sin(ph),
      kz = 0.5 * rv,
      ky = Lf * 0.5 + 0.05 * Math.sin(ph * 1.3);
    var H = W(hx, 0.1, hy),
      K = W(kx, kz, ky),
      F = W(fx, fz, 0.06);
    g.strokeStyle = cLg;
    g.lineWidth = 0.34 * gw;
    line(H, K);
    g.lineWidth = 0.13 * gw;
    line(K, F);
    g.fillStyle = cLg;
    g.beginPath();
    g.arc(K[0], K[1], 0.1 * gw, 0, 6.283);
    g.fill();
    g.lineWidth = 0.06 * gw;
    var toes = [
      [-0.32, -0.3],
      [0, -0.48],
      [0.32, -0.3],
      [0.02, 0.25],
    ];
    for (var q = 0; q < 4; q++) {
      line(F, W(fx + toes[q][0] * rv, fz + toes[q][1] * rv, 0));
    }
    g.strokeStyle = "rgba(255,190,135," + (0.3 * sw).toFixed(3) + ")";
    g.lineWidth = e.px * 1.2;
    line([H[0] + 0.15 * gw, H[1]], [K[0] + 0.07 * gw, K[1]]);
    line([K[0] + 0.05 * gw, K[1]], [F[0] + 0.05 * gw, F[1]]);
    g.strokeStyle = C("#6a4c44", "#34262a", "#827a7e");
    g.lineWidth = e.px;
    g.globalAlpha = 0.5;
    for (var j2 = 1; j2 < 6; j2++) {
      var u = j2 / 6,
        px = K[0] + (F[0] - K[0]) * u,
        py = K[1] + (F[1] - K[1]) * u;
      line([px - 0.06 * gw, py], [px + 0.06 * gw, py + 0.01]);
    }
    g.globalAlpha = 1;
  }
  g.lineCap = "butt";
  g.lineJoin = "miter";
}
if (Lf > 0.05) {
  poly([B(-hw, -hd, 0), B(hw, -hd, 0), B(hw, hd, 0), B(-hw, hd, 0)]);
  g.fillStyle = cDk;
  g.fill();
}
var lw = [B(-hw, -hd, 0), B(-hw, hd, 0), B(-hw, hd, wh), B(-hw, -hd, wh)];
poly(lw);
g.fillStyle = cWL;
g.fill();
g.save();
poly(lw);
g.clip();
for (var z = -hd; z < hd; z += 0.19) {
  var tn = R();
  g.globalAlpha = 0.1 + 0.12 * tn;
  g.fillStyle = tn < 0.5 ? cDk : cR1;
  poly([B(-hw, z, -0.1), B(-hw, z + 0.19, -0.1), B(-hw, z + 0.19, wh + 0.1), B(-hw, z, wh + 0.1)]);
  g.fill();
  g.globalAlpha = 0.6;
  g.strokeStyle = cDk;
  g.lineWidth = e.px;
  line(B(-hw, z, 0), B(-hw, z, wh));
}
var eb0 = B(-hw, 0, wh),
  eb1 = B(-hw, 0, wh - 0.5),
  ebg = g.createLinearGradient(eb0[0], eb0[1], eb1[0], eb1[1]);
ebg.addColorStop(0, "rgba(10,6,10,0.55)");
ebg.addColorStop(1, "rgba(10,6,10,0)");
g.globalAlpha = 1;
g.fillStyle = ebg;
poly([B(-hw, -hd, wh - 0.5), B(-hw, hd, wh - 0.5), B(-hw, hd, wh), B(-hw, -hd, wh)]);
g.fill();
g.restore();
var wn = [B(-hw, 0.2, 1.1), B(-hw, 0.8, 1.1), B(-hw, 0.8, 1.6), B(-hw, 0.2, 1.6)];
poly(wn);
g.fillStyle = C("#5a4250", "#2a2032", "#9aa2b8");
g.fill();
if (li > 0) {
  g.save();
  g.globalCompositeOperation = "lighter";
  g.globalAlpha = 0.85 * li;
  g.fillStyle = "#ffb866";
  poly(wn);
  g.fill();
  g.restore();
  var wc = B(-hw, 0.5, 1.35);
  e.light(wc[0], wc[1], 0.9, "#ffb866", 0.45 * li);
}
g.strokeStyle = cDk;
g.lineWidth = 0.05;
poly(wn);
g.stroke();
line(B(-hw, 0.5, 1.1), B(-hw, 0.5, 1.6));
line(B(-hw, 0.2, 1.35), B(-hw, 0.8, 1.35));
var fw = [B(-hw, -hd, 0), B(hw, -hd, 0), B(hw, -hd, wh), B(0, -hd, rH(-hd)), B(-hw, -hd, wh)];
poly(fw);
g.fillStyle = cWF;
g.fill();
g.save();
poly(fw);
g.clip();
for (var x = -hw; x < hw; x += 0.2) {
  var tn2 = R();
  g.globalAlpha = 0.08 + 0.14 * tn2;
  g.fillStyle = tn2 < 0.5 ? cDk : cR1;
  poly([B(x, -hd, -0.1), B(x + 0.2, -hd, -0.1), B(x + 0.2, -hd, rh + 0.2), B(x, -hd, rh + 0.2)]);
  g.fill();
  g.globalAlpha = 0.7;
  g.strokeStyle = cDk;
  g.lineWidth = e.px;
  line(B(x, -hd, 0), B(x, -hd, rh));
}
g.globalAlpha = 1;
g.restore();
var dO = [B(-0.4, -hd, 0), B(0.4, -hd, 0), B(0.4, -hd, 1.85), B(-0.4, -hd, 1.85)];
if (dr > 0.003) {
  poly(dO);
  g.fillStyle = "#0a070a";
  g.fill();
  if (li > 0) {
    g.save();
    poly(dO);
    g.clip();
    g.globalCompositeOperation = "lighter";
    var dc = B(0.1, -hd, 1.3),
      dg = g.createRadialGradient(dc[0], dc[1], 0, dc[0], dc[1], 1.6);
    dg.addColorStop(0, "rgba(255,196,120," + (0.9 * li).toFixed(3) + ")");
    dg.addColorStop(0.6, "rgba(255,160,90," + (0.4 * li).toFixed(3) + ")");
    dg.addColorStop(1, "rgba(200,110,70," + (0.15 * li).toFixed(3) + ")");
    g.fillStyle = dg;
    g.fillRect(dc[0] - 2, dc[1] - 2, 4, 4);
    g.restore();
    var lp = B(0.15, -hd + 0.6, 1.5);
    e.light(lp[0], lp[1], 0.5 + 1.2 * dr, "#ffb866", li * (0.25 + 0.5 * dr));
  }
}
var da = dr * 1.75,
  ex = -0.4 + 0.8 * Math.cos(da),
  ez = -hd - 0.8 * Math.sin(da),
  dl = [B(-0.4, -hd, 0), B(ex, ez, 0), B(ex, ez, 1.85), B(-0.4, -hd, 1.85)];
poly(dl);
g.fillStyle = cDoor;
g.fill();
g.strokeStyle = cDk;
g.lineWidth = e.px;
g.globalAlpha = 0.7;
for (var u2 = 0.2; u2 < 0.8; u2 += 0.2) {
  line(
    B(-0.4 + u2 * Math.cos(da), -hd - u2 * Math.sin(da), 0.03),
    B(-0.4 + u2 * Math.cos(da), -hd - u2 * Math.sin(da), 1.82),
  );
}
g.lineWidth = 0.05;
g.globalAlpha = 0.8;
line(
  B(-0.4 + 0.05 * Math.cos(da), -hd - 0.05 * Math.sin(da), 0.3),
  B(-0.4 + 0.75 * Math.cos(da), -hd - 0.75 * Math.sin(da), 1.5),
);
g.globalAlpha = 1;
var lh = B(-0.4 + 0.68 * Math.cos(da), -hd - 0.68 * Math.sin(da), 1.0);
g.fillStyle = C("#6a5040", "#3a2a28", "#8a8580");
g.fillRect(lh[0] - 0.03, lh[1] - 0.03, 0.06, 0.06);
if (li > 0 && dr < 0.05) {
  g.strokeStyle = "rgba(255,190,110," + (0.7 * li * (1 - dr * 20)).toFixed(3) + ")";
  g.lineWidth = e.px * 1.3;
  poly(dO);
  g.stroke();
  var lq = B(0, -hd, 1);
  e.light(lq[0], lq[1], 0.5, "#ffb866", 0.15 * li);
}
var so = [];
for (var j3 = 0; j3 <= 12; j3++) {
  var zz = -hd - 0.25 + (RL * j3) / 12;
  so.push(B(-hw, zz, wh));
}
for (var j4 = 12; j4 >= 0; j4--) {
  var zz2 = -hd - 0.25 + (RL * j4) / 12;
  so.push(B(-hw - 0.25, zz2, eH(zz2)));
}
poly(so);
g.fillStyle = cDk;
g.fill();
var rp = [];
for (var j5 = 0; j5 <= 12; j5++) {
  var z5 = -hd - 0.25 + (RL * j5) / 12;
  rp.push(B(0, z5, rH(z5)));
}
for (var j6 = 12; j6 >= 0; j6--) {
  var z6 = -hd - 0.25 + (RL * j6) / 12;
  rp.push(B(-hw - 0.25, z6, eH(z6)));
}
poly(rp);
var re = B(-hw - 0.25, 0, wh - 0.15),
  rr = B(0, 0, rh),
  rgr = g.createLinearGradient(re[0], re[1], rr[0], rr[1]);
rgr.addColorStop(0, cR0);
rgr.addColorStop(1, cR1);
g.fillStyle = rgr;
g.fill();
g.strokeStyle = cDk;
g.lineWidth = e.px;
g.globalAlpha = 0.35;
for (var j7 = 0; j7 <= 12; j7++) {
  var z7 = -hd - 0.25 + (RL * j7) / 12;
  line(B(0, z7, rH(z7)), B(-hw - 0.25, z7, eH(z7)));
}
g.globalAlpha = 1;
g.strokeStyle = rim(0.6);
g.lineWidth = e.px * 1.4;
g.beginPath();
for (var j8 = 0; j8 <= 12; j8++) {
  var z8 = -hd - 0.25 + (RL * j8) / 12,
    p8 = B(0, z8, rH(z8) + 0.01);
  if (j8 == 0) g.moveTo(p8[0], p8[1]);
  else g.lineTo(p8[0], p8[1]);
}
g.stroke();
var rf = -hd - 0.25;
g.strokeStyle = cDk;
g.lineWidth = 0.1;
line(B(0, rf, rH(rf)), B(-hw - 0.25, rf, eH(rf)));
line(B(0, rf, rH(rf)), B(hw + 0.25, rf, eH(rf)));
g.strokeStyle = rim(0.4);
g.lineWidth = e.px * 1.2;
line(B(0, rf, rH(rf) + 0.06), B(hw + 0.25, rf, eH(rf) + 0.06));
g.strokeStyle = rim(0.28);
line(B(hw, -hd, 0.05), B(hw, -hd, wh));
