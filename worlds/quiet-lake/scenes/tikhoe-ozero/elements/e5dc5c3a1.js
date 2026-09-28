var t = e.t,
  D = 10,
  h = 0.38,
  w = 0.7,
  Rx = -4.1,
  Rz = 1.3,
  ux = 0.288,
  uz = 0.958,
  nx = 0.958,
  nz = -0.288,
  Lg = 9.08;
function W(s, o, H) {
  var X = Rx + ux * s + nx * o,
    z = Rz + uz * s + nz * o;
  return [(X * D) / z, ((1.7 - H) * D) / z - 1.7, z];
}
function hs(a) {
  var v = Math.sin(a) * 43758.5453;
  return v - Math.floor(v);
}
function poly(a) {
  g.beginPath();
  g.moveTo(a[0][0], a[0][1]);
  for (var i = 1; i < a.length; i++) g.lineTo(a[i][0], a[i][1]);
  g.closePath();
}
var sa, k;
for (sa = 0; sa < Lg; sa += 0.35) {
  var sb = Math.min(Lg, sa + 0.36),
    a1 = W(sa, w, 0),
    a2 = W(sb, w, 0),
    a3 = W(sb, w, -h),
    a4 = W(sa, w, -h),
    jx = (Math.sin(t * 0.7 + sa * 2.3) * 0.03 * D) / a1[2];
  g.globalAlpha = 0.3 + 0.1 * Math.sin(t * 0.5 + sa * 1.7);
  g.fillStyle = "#1a1222";
  g.beginPath();
  g.moveTo(a1[0] + jx, a1[1]);
  g.lineTo(a2[0] + jx, a2[1]);
  g.lineTo(a3[0] + jx, a3[1]);
  g.lineTo(a4[0] + jx, a4[1]);
  g.closePath();
  g.fill();
}
g.globalAlpha = 1;
poly([W(0, w, h - 0.1), W(Lg, w, h - 0.1), W(Lg, w, 0), W(0, w, 0)]);
g.fillStyle = "rgba(40,24,34,0.4)";
g.fill();
for (k = 0; k < 8; k++) {
  var ps = 0.3 + k * 1.21 + (hs(k * 7.1) - 0.5) * 0.2,
    tp = W(ps, w - 0.06, h - 0.1),
    bt = W(ps, w - 0.06, -0.02),
    rb = W(ps, w - 0.06, -(h - 0.12)),
    pw = (0.065 * D) / tp[2];
  g.fillStyle = "#170f16";
  g.fillRect(tp[0] - pw, tp[1], pw * 2, bt[1] - tp[1]);
  for (var m = 0; m < 4; m++) {
    var yA = bt[1] + ((rb[1] - bt[1]) * m) / 4,
      yB = bt[1] + ((rb[1] - bt[1]) * (m + 0.6)) / 4,
      jx2 = Math.sin(t * 0.8 + ps * 3 + m * 1.9) * pw * 0.8;
    g.globalAlpha = 0.35 * (1 - m * 0.15);
    g.fillRect(tp[0] - pw + jx2, yA, pw * 2, yB - yA);
  }
  g.globalAlpha = 1;
}
poly([W(0, w, h), W(Lg, w, h), W(Lg, w, h - 0.1), W(0, w, h - 0.1)]);
g.fillStyle = "#2a1c22";
g.fill();
var c = [W(0, -w, h), W(0, w, h), W(Lg, w, h), W(Lg, -w, h)],
  e0 = W(Lg, 0, h),
  r0 = W(0.6, 0, h),
  mid = W(Lg * 0.5, 0, h);
poly(c);
var dg = g.createLinearGradient(e0[0], e0[1], r0[0], r0[1]);
dg.addColorStop(0, "#6b4b3f");
dg.addColorStop(0.2, "#4a3431");
dg.addColorStop(1, "#241a1f");
g.fillStyle = dg;
g.fill();
var ns = 58;
for (k = 0; k < ns; k++) {
  var s0 = (k * Lg) / ns,
    s1 = ((k + 1) * Lg) / ns,
    q0 = W(s0, -w, h),
    q1 = W(s0, w, h),
    q2 = W(s1, w, h),
    q3 = W(s1, -w, h),
    tone = hs(k * 3.7 + 1.3),
    sp = Math.abs(q0[1] - q3[1]);
  g.globalAlpha = 0.06 + tone * 0.12;
  g.fillStyle = tone < 0.45 ? "#120b10" : "#8a6450";
  poly([q0, q1, q2, q3]);
  g.fill();
  var al = Math.min(1, sp / (5 * e.px));
  if (al > 0.05) {
    g.globalAlpha = 0.6 * al;
    g.strokeStyle = "#110a0e";
    g.lineWidth = e.px * 1.1;
    g.beginPath();
    g.moveTo(q0[0], q0[1]);
    g.lineTo(q1[0], q1[1]);
    g.stroke();
  }
  if (sp > 22 * e.px) {
    g.globalAlpha = 0.08;
    g.strokeStyle = "#0e080b";
    g.lineWidth = e.px;
    for (var j = 1; j < 4; j++) {
      var sj = s0 + (s1 - s0) * (j / 4 + (hs(k * 9.1 + j) - 0.5) * 0.1),
        u0 = W(sj, -w, h),
        u1 = W(sj, w, h);
      g.beginPath();
      g.moveTo(u0[0], u0[1]);
      g.lineTo(u1[0], u1[1]);
      g.stroke();
    }
  }
}
g.globalAlpha = 1;
poly(c);
var sg = g.createLinearGradient(e0[0], e0[1], mid[0], mid[1]);
sg.addColorStop(0, "rgba(255,185,125,0.30)");
sg.addColorStop(1, "rgba(255,185,125,0)");
g.fillStyle = sg;
g.fill();
g.save();
poly(c);
g.clip();
var ds = -0.9964,
  dO = 0.0906,
  sA = 8.78,
  Ls = (sA - 0.2) / 0.9964,
  p1 = W(sA, 0.34, h),
  p2 = W(sA, 0.56, h),
  p3 = W(sA + ds * Ls, 0.56 + dO * Ls, h),
  p4 = W(sA + ds * Ls, 0.34 + dO * Ls, h);
var shg = g.createLinearGradient(p1[0], p1[1], p4[0], p4[1]);
shg.addColorStop(0, "rgba(16,9,15,0.45)");
shg.addColorStop(0.08, "rgba(16,9,15,0.3)");
shg.addColorStop(1, "rgba(16,9,15,0.08)");
g.fillStyle = shg;
poly([p1, p2, p3, p4]);
g.fill();
g.restore();
var h0 = W(Lg * 0.3, w, h),
  h1 = W(Lg, w, h),
  hg = g.createLinearGradient(h0[0], h0[1], h1[0], h1[1]);
hg.addColorStop(0, "rgba(255,190,130,0)");
hg.addColorStop(1, "rgba(255,196,140,0.75)");
g.strokeStyle = hg;
g.lineWidth = e.px * 1.3;
g.beginPath();
g.moveTo(h0[0], h0[1]);
g.lineTo(h1[0], h1[1]);
g.stroke();
var f0 = W(Lg, -w, h);
g.strokeStyle = "rgba(255,200,145,0.6)";
g.beginPath();
g.moveTo(f0[0], f0[1]);
g.lineTo(h1[0], h1[1]);
g.stroke();
var l0 = W(0, -w, h);
g.strokeStyle = "#140c11";
g.lineWidth = e.px * 1.5;
g.beginPath();
g.moveTo(l0[0], l0[1]);
g.lineTo(f0[0], f0[1]);
g.stroke();
