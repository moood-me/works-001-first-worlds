var S = e.state,
  t = e.t;
if (S.envelope_held) return;
var p = Math.max(0, Math.min(1, S.envelope_position == null ? 0.25 : S.envelope_position)),
  o = Math.max(0, Math.min(1, S.envelope_opened || 0));
var w = (S.wind_strength == null ? 0.6 : S.wind_strength) * (S.door_open == null ? 1 : S.door_open),
  gl = Math.max(0, Math.min(1, S.lamp_glow == null ? 0.75 : S.lamp_glow));
var D = 1.2,
  Z0 = 3.04 - 0.62 * p,
  X0 = 0.3 + 0.08 * p,
  r = 0.42 - 0.3 * p + Math.sin(t * 0.7) * 0.006 * w;
var cr = Math.cos(r),
  sr = Math.sin(r);
var gu = Math.max(0, Math.sin(t * 1.3 + 0.4) * Math.sin(t * 0.53 + 1.1)),
  lift = w * gu * 0.012;
function P(u, v, h) {
  var X = X0 + u * cr - v * sr,
    Z = Z0 + u * sr + v * cr,
    k = D / Z;
  return [X * k, -1.7 + (1.7 - h) * k];
}
function poly(a) {
  g.beginPath();
  g.moveTo(a[0][0], a[0][1]);
  for (var i = 1; i < a.length; i++) g.lineTo(a[i][0], a[i][1]);
  g.closePath();
}
var hw = 0.115,
  hd = 0.062,
  k0 = D / Z0;
poly([
  P(-hw + 0.008, -hd - 0.01, 0),
  P(hw + 0.012, -hd - 0.01, 0),
  P(hw + 0.012, hd - 0.004, 0),
  P(-hw + 0.008, hd - 0.004, 0),
]);
g.fillStyle = "rgba(10,8,18," + (0.35 + lift * 10).toFixed(3) + ")";
g.fill();
var c1 = P(-hw, -hd, 0.002),
  c2 = P(hw, -hd, 0.002),
  c3 = P(hw, hd, 0.002 + lift),
  c4 = P(-hw, hd, 0.002 + lift * 0.4);
poly([c1, c2, c3, c4]);
var bg = g.createLinearGradient(0, c3[1], 0, c1[1]);
bg.addColorStop(0, "#e2e6f2");
bg.addColorStop(1, "#a8aabf");
g.fillStyle = bg;
g.fill();
var wg = g.createLinearGradient(c1[0], 0, c2[0], 0);
wg.addColorStop(0, "rgba(230,160,110,0)");
wg.addColorStop(1, "rgba(230,160,110," + (0.24 * gl).toFixed(3) + ")");
g.fillStyle = wg;
g.fill();
g.strokeStyle = "rgba(90,90,115,0.5)";
g.lineWidth = e.px * 0.8;
g.stroke();
var m0 = P(0, 0.004, 0.002);
g.strokeStyle = "rgba(110,110,140,0.5)";
g.beginPath();
g.moveTo(c1[0], c1[1]);
g.lineTo(m0[0], m0[1]);
g.lineTo(c2[0], c2[1]);
g.stroke();
if (o > 0) {
  poly([P(-hw, hd, 0.002 + lift * 0.4), P(hw, hd, 0.002 + lift), P(0, hd - 0.07, 0.002)]);
  g.fillStyle = "rgba(66,62,88," + Math.min(0.75, o * 2.5).toFixed(3) + ")";
  g.fill();
}
var th = o * Math.PI,
  vt = hd - 0.07 * Math.cos(th),
  ht = 0.002 + 0.07 * Math.sin(th) + lift;
poly([P(-hw, hd, 0.002 + lift * 0.4), P(hw, hd, 0.002 + lift), P(0, vt, ht)]);
g.fillStyle = th < Math.PI / 2 ? "#d4d7e5" : "#b3b4c7";
g.fill();
g.strokeStyle = "rgba(115,115,145,0.6)";
g.lineWidth = e.px * 0.8;
g.stroke();
var rx = 0.012 * k0;
if (th < Math.PI / 2) {
  var sp = P(0, hd - 0.058 * Math.cos(th), 0.002 + 0.058 * Math.sin(th) + lift);
  g.fillStyle = "#7e4a44";
  g.beginPath();
  g.ellipse(sp[0], sp[1], rx, rx * 0.55, 0, 0, 6.283);
  g.fill();
  g.fillStyle = "rgba(210,150,130,0.35)";
  g.beginPath();
  g.ellipse(sp[0] - rx * 0.3, sp[1] - rx * 0.15, rx * 0.35, rx * 0.15, 0, 0, 6.283);
  g.fill();
} else {
  var sa1 = P(0, hd - 0.064, 0.003),
    sa2 = P(0, hd + 0.058, 0.003);
  g.fillStyle = "#7e4a44";
  g.beginPath();
  g.ellipse(sa1[0], sa1[1], rx * 0.6, rx * 0.3, 0, 0, 6.283);
  g.fill();
  g.beginPath();
  g.ellipse(sa2[0], sa2[1], rx * 0.55, rx * 0.28, 0, 0, 6.283);
  g.fill();
}
var s = Math.max(0, (o - 0.5) / 0.5),
  vm = 0.05 + 0.11 * s;
if (vm > hd + 0.003) {
  poly([P(-0.1, hd, 0.004), P(0.1, hd, 0.004), P(0.1, vm, 0.004), P(-0.1, vm, 0.004)]);
  g.fillStyle = "#d2c9ba";
  g.fill();
  g.strokeStyle = "rgba(120,105,100,0.5)";
  g.lineWidth = e.px * 0.7;
  g.stroke();
  if (vm > hd + 0.04) {
    var l1 = P(-0.08, hd + 0.035, 0.004),
      l2 = P(0.06, hd + 0.035, 0.004);
    g.beginPath();
    g.moveTo(l1[0], l1[1]);
    g.lineTo(l2[0], l2[1]);
    g.stroke();
  }
}
if (lift > 0.002) {
  g.strokeStyle = "rgba(240,244,255,0.6)";
  g.lineWidth = e.px;
  g.beginPath();
  g.moveTo(c4[0], c4[1]);
  g.lineTo(c3[0], c3[1]);
  g.stroke();
}
var ce = P(0, 0, 0);
e.light(ce[0], ce[1], 0.18, "#c9d4ff", 0.12 + 0.12 * gu * w);
