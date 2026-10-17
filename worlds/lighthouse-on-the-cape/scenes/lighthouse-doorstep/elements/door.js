var S = e.state,
  t = e.t,
  dop = Math.max(0, Math.min(1, S.door_open == null ? 1 : S.door_open)),
  w = S.wind_strength == null ? 0.6 : S.wind_strength,
  gl = Math.max(0, Math.min(1, S.lamp_glow == null ? 0.75 : S.lamp_glow));
var D = 1.5,
  ang = dop * 1.6 + dop * (1 - dop) * 4 * w * 0.035 * Math.sin(t * 1.3) * Math.sin(t * 0.47 + 1);
var ca = Math.cos(ang),
  sa = Math.sin(ang);
function P(u, h) {
  var X = -0.65 + u * ca,
    Z = 3.2 - u * sa,
    k = D / Z;
  return [X * k, -1.7 + (1.7 - h) * k];
}
function top(u) {
  return 1.85 + Math.sqrt(Math.max(0, 0.4225 - (u - 0.65) * (u - 0.65)));
}
var O = [
  [0, 0.02],
  [0, 1.85],
];
for (var i = 1; i < 16; i++) {
  var th = (Math.PI * i) / 16;
  O.push([0.65 - 0.65 * Math.cos(th), 1.85 + 0.65 * Math.sin(th)]);
}
O.push([1.3, 1.85]);
O.push([1.3, 0.02]);
var Pp = O.map(function (q) {
  return P(q[0], q[1]);
});
var inner = sa * (-0.65 + 0.65 * ca) + ca * (3.2 - 0.65 * sa) > 0;
function outline() {
  g.beginPath();
  g.moveTo(Pp[0][0], Pp[0][1]);
  for (var i = 1; i < Pp.length; i++) g.lineTo(Pp[i][0], Pp[i][1]);
  g.closePath();
}
outline();
var a0 = P(0, 1),
  a1 = P(1.3, 1);
var fg = g.createLinearGradient(a0[0], 0, a1[0], 0);
if (inner) {
  fg.addColorStop(0, "#2a2330");
  fg.addColorStop(1, "#3d3240");
} else {
  fg.addColorStop(0, "#34364a");
  fg.addColorStop(1, "#2a2b3c");
}
g.fillStyle = fg;
g.fill();
g.save();
outline();
g.clip();
g.strokeStyle = "rgba(12,10,18,0.6)";
g.lineWidth = 0.006;
for (var j = 1; j < 7; j++) {
  var u = j * 0.1857,
    b0 = P(u, 0.02),
    b1 = P(u, top(u));
  g.beginPath();
  g.moveTo(b0[0], b0[1]);
  g.lineTo(b1[0], b1[1]);
  g.stroke();
}
g.strokeStyle = inner ? "rgba(90,70,70,0.18)" : "rgba(170,178,205,0.1)";
g.lineWidth = 0.003;
for (var j = 0; j < 14; j++) {
  var u = 0.05 + e.rnd() * 1.2,
    h0 = 0.1 + e.rnd() * 1.2,
    h1 = h0 + 0.3 + e.rnd() * 0.6,
    c0 = P(u, h0),
    c1 = P(u + (e.rnd() - 0.5) * 0.03, h1);
  g.beginPath();
  g.moveTo(c0[0], c0[1]);
  g.lineTo(c1[0], c1[1]);
  g.stroke();
}
var st = [0.35, 1.55];
for (var j = 0; j < 2; j++) {
  var h = st[j],
    q1 = P(0, h - 0.03),
    q2 = P(1.0, h - 0.025),
    q3 = P(1.0, h + 0.025),
    q4 = P(0, h + 0.03);
  g.fillStyle = "#19171f";
  g.beginPath();
  g.moveTo(q1[0], q1[1]);
  g.lineTo(q2[0], q2[1]);
  g.lineTo(q3[0], q3[1]);
  g.lineTo(q4[0], q4[1]);
  g.closePath();
  g.fill();
}
g.globalCompositeOperation = "lighter";
var wl = g.createLinearGradient(a0[0], 0, a1[0], 0);
var warmA = inner ? 0.04 : 0.2,
  warmB = inner ? 0.22 : 0.12;
wl.addColorStop(0, "rgba(220,135,85," + (warmA * gl).toFixed(3) + ")");
wl.addColorStop(1, "rgba(220,135,85," + (warmB * gl).toFixed(3) + ")");
g.fillStyle = wl;
g.fillRect(-2, -3, 3, 3);
g.globalCompositeOperation = "source-over";
g.restore();
var rp = P(1.15, 1.0),
  rk = D / (3.2 - 1.15 * sa);
g.strokeStyle = "#15131b";
g.lineWidth = 0.012 * rk;
g.beginPath();
g.ellipse(rp[0], rp[1] + 0.035 * rk, 0.03 * rk * Math.max(0.25, Math.abs(ca)), 0.035 * rk, 0, 0, 6.283);
g.stroke();
var e0 = P(1.3, 0.02),
  e1 = P(1.3, 1.85);
g.strokeStyle = "rgba(175,150,150,0.35)";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(e0[0], e0[1]);
g.lineTo(e1[0], e1[1]);
g.stroke();
if (dop < 0.15) {
  var gp0 = P(0, 0.012),
    gp1 = P(1.3, 0.012);
  g.strokeStyle = "rgba(160,175,225," + (((0.15 - dop) / 0.15) * 0.55).toFixed(3) + ")";
  g.lineWidth = 0.01;
  g.beginPath();
  g.moveTo(gp0[0], gp0[1]);
  g.lineTo(gp1[0], gp1[1]);
  g.stroke();
}
