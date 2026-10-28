var t = e.t,
  S = e.state || {};
var H = Math.max(0, Math.min(1, S.hatch_amount || 0));
var st = S.loose_chain_stirring;
if (st == null) st = 0.3;
var R = "rgba(255,180,105,0.6)";
var pg = g.createLinearGradient(-2.75, 0, 2.75, 0);
pg.addColorStop(0, "#2e2721");
pg.addColorStop(0.7, "#3c332b");
pg.addColorStop(1, "#6b5442");
g.fillStyle = pg;
g.beginPath();
g.moveTo(-2.78, 0.05);
g.lineTo(-2.68, -0.62);
g.lineTo(-1.0, -0.64);
g.lineTo(-0.82, -0.5);
g.lineTo(-0.6, -0.63);
g.lineTo(2.64, -0.63);
g.lineTo(2.75, 0.05);
g.closePath();
g.fill();
g.strokeStyle = "rgba(14,10,8,0.55)";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-1.9, -0.62);
g.lineTo(-1.75, -0.3);
g.lineTo(-1.82, 0);
g.moveTo(1.6, -0.63);
g.lineTo(1.7, -0.35);
g.lineTo(1.55, -0.1);
g.moveTo(1.7, -0.35);
g.lineTo(1.95, -0.25);
g.stroke();
g.fillStyle = "rgba(120,104,86,0.18)";
g.fillRect(-2.6, -0.62, 5.2, 0.05);
g.save();
var sg = g.createLinearGradient(-2.3, 0, 2.3, 0);
sg.addColorStop(0, "#261c15");
sg.addColorStop(0.62, "#31241b");
sg.addColorStop(0.9, "#4a3223");
sg.addColorStop(1, "#7c4d2d");
g.fillStyle = sg;
g.beginPath();
g.moveTo(-2.3, -0.6);
g.lineTo(-1.9, -6.42);
g.lineTo(1.9, -6.42);
g.lineTo(2.3, -0.6);
g.closePath();
g.fill();
g.clip();
g.strokeStyle = "rgba(14,10,8,0.22)";
g.lineWidth = 0.02;
var row = 0;
for (var y = -0.85; y > -6.42; y -= 0.24) {
  g.beginPath();
  g.moveTo(-2.4, y);
  g.lineTo(2.4, y);
  var off = (row % 2) * 0.25;
  for (var x = -2.3 + off; x < 2.3; x += 0.5) {
    g.moveTo(x, y);
    g.lineTo(x, y + 0.24);
  }
  g.stroke();
  row++;
}
g.fillStyle = "rgba(90,70,54,0.12)";
[
  [-1.7, -5.6, 1.4, 0.8],
  [0.9, -4.1, 1.0, 1.3],
  [-1.6, -1.6, 0.8, 0.7],
].forEach(function (p) {
  g.beginPath();
  g.moveTo(p[0], p[1]);
  g.quadraticCurveTo(p[0] + p[2] * 0.6, p[1] - p[3] * 0.5, p[0] + p[2], p[1] + p[3] * 0.1);
  g.quadraticCurveTo(p[0] + p[2] * 0.8, p[1] + p[3] * 0.6, p[0] + p[2] * 0.3, p[1] + p[3] * 0.5);
  g.quadraticCurveTo(p[0] - p[2] * 0.1, p[1] + p[3] * 0.3, p[0], p[1]);
  g.fill();
});
g.fillStyle = "rgba(122,60,36,0.22)";
g.beginPath();
g.ellipse(1.3, -3.3, 0.45, 0.28, 0.2, 0, 6.283);
g.fill();
for (var i = 0; i < 14; i++) {
  var x = -1.9 + e.rnd() * 3.8,
    l = 0.8 + e.rnd() * 2.8,
    w = 0.04 + e.rnd() * 0.16;
  var lg = g.createLinearGradient(0, -6.42, 0, -6.42 + l);
  lg.addColorStop(0, "rgba(12,8,6,0.35)");
  lg.addColorStop(1, "rgba(12,8,6,0)");
  g.fillStyle = lg;
  g.fillRect(x, -6.42, w, l);
}
g.strokeStyle = "rgba(214,198,170,0.2)";
g.lineWidth = 0.025;
for (var k = 0; k < 2; k++) {
  var bx = 1.15 + k * 0.42;
  g.beginPath();
  for (var j = 0; j < 4; j++) {
    g.moveTo(bx + j * 0.07, -1.95);
    g.lineTo(bx + j * 0.07 + 0.01, -1.65);
  }
  g.moveTo(bx - 0.04, -1.7);
  g.lineTo(bx + 0.26, -1.9);
  g.stroke();
}
g.beginPath();
g.moveTo(2.0, -1.95);
g.lineTo(2.01, -1.65);
g.moveTo(2.07, -1.95);
g.lineTo(2.08, -1.67);
g.stroke();
g.fillStyle = "rgba(196,176,146,0.16)";
g.font = "bold 0.6px serif";
g.fillText("№ 3", -1.65, -4.5);
g.restore();
g.strokeStyle = R;
g.lineWidth = e.px * 1.8;
g.beginPath();
g.moveTo(2.3, -0.6);
g.lineTo(1.9, -6.42);
g.moveTo(1.2, -0.63);
g.lineTo(2.64, -0.63);
g.lineTo(2.75, 0.05);
g.stroke();
var hx = 0.05,
  hw = 0.8,
  yt = -2.12,
  yb = -0.63;
g.fillStyle = "#1a120d";
g.fillRect(hx - 0.09, yt - 0.09, hw + 0.18, yb - yt + 0.09);
var vg = g.createLinearGradient(0, yt, 0, yb);
vg.addColorStop(0, "#050303");
vg.addColorStop(1, "#0c0806");
g.fillStyle = vg;
g.fillRect(hx, yt, hw, yb - yt);
if (H > 0.02) {
  g.strokeStyle = "rgba(70,58,50," + (0.3 * H).toFixed(3) + ")";
  g.lineWidth = 0.07;
  g.beginPath();
  g.moveTo(hx + 0.55, yt);
  g.lineTo(hx + 0.55, yb - 0.12);
  g.lineTo(hx + 0.28, yb - 0.12);
  g.stroke();
  var wa = H * (0.12 + 0.08 * Math.sin(t * 0.7) + 0.04 * Math.sin(t * 1.9 + 1));
  g.strokeStyle = "rgba(200,170,130," + wa.toFixed(3) + ")";
  g.lineWidth = 0.015;
  g.beginPath();
  g.moveTo(hx + 0.12, yb - 0.05);
  g.lineTo(hx + 0.5, yb - 0.05);
  g.stroke();
}
g.strokeStyle = R;
g.lineWidth = e.px * 1.5;
g.beginPath();
g.moveTo(hx + hw + 0.09, yt - 0.09);
g.lineTo(hx + hw + 0.09, yb);
g.stroke();
var th = H * 1.8,
  c = Math.cos(th),
  sn = Math.sin(th);
var ex = hx + hw * c,
  eT = yt - 0.08 * sn,
  eB = yb + 0.05 * sn;
var outer = c > -0.05;
var dg = g.createLinearGradient(hx, 0, hx + hw, 0);
if (outer) {
  dg.addColorStop(0, "#3a2117");
  dg.addColorStop(0.6, "#4a2a1b");
  dg.addColorStop(1, "#5e3420");
} else {
  dg.addColorStop(0, "#1e140f");
  dg.addColorStop(1, "#2a1c14");
}
g.fillStyle = dg;
g.beginPath();
g.moveTo(hx, yt);
g.lineTo(ex, eT);
g.lineTo(ex, eB);
g.lineTo(hx, yb);
g.closePath();
g.fill();
function D(u, v) {
  var a = yt + u * (eT - yt),
    b = yb + u * (eB - yb);
  return [hx + u * (ex - hx), a + v * (b - a)];
}
if (outer && Math.abs(c) > 0.12) {
  g.fillStyle = "rgba(20,12,8,0.7)";
  for (var i = 0; i < 6; i++) {
    var p1 = D(0.1, 0.1 + i * 0.16),
      p2 = D(0.9, 0.1 + i * 0.16);
    g.beginPath();
    g.arc(p1[0], p1[1], 0.018, 0, 6.283);
    g.arc(p2[0], p2[1], 0.018, 0, 6.283);
    g.fill();
  }
  var bl = [
    [0.3, 0.25, 1],
    [0.7, 0.4, 0],
    [0.45, 0.7, 1],
    [0.2, 0.85, 0],
    [0.8, 0.8, 1],
  ];
  bl.forEach(function (b) {
    var p = D(b[0], b[1]);
    g.fillStyle = b[2] ? "rgba(120,58,30,0.35)" : "rgba(25,14,10,0.35)";
    g.beginPath();
    g.ellipse(p[0], p[1], 0.08 * Math.abs(c) + 0.01, 0.06, 0, 0, 6.283);
    g.fill();
  });
  var a1 = D(0.1, 0.12),
    b1 = D(0.9, 0.88),
    a2 = D(0.9, 0.12),
    b2 = D(0.1, 0.88);
  g.strokeStyle = "rgba(30,18,12,0.6)";
  g.lineWidth = 0.035;
  g.beginPath();
  g.moveTo(a1[0], a1[1]);
  g.lineTo(b1[0], b1[1]);
  g.moveTo(a2[0], a2[1]);
  g.lineTo(b2[0], b2[1]);
  g.stroke();
  var hp = D(0.92, 0.5);
  g.strokeStyle = "#24150e";
  g.lineWidth = 0.03;
  g.beginPath();
  g.arc(hp[0], hp[1] + 0.05, 0.04, 0, Math.PI * 1.5);
  g.stroke();
}
if (H < 0.02) {
  g.strokeStyle = "rgba(4,2,2,0.8)";
  g.lineWidth = 0.025;
  g.beginPath();
  g.moveTo(hx + hw - 0.01, yt + 0.15);
  g.lineTo(hx + hw - 0.02, yb);
  g.stroke();
}
if (outer) {
  g.strokeStyle = "rgba(255,180,105," + (0.25 + 0.3 * Math.abs(c)).toFixed(3) + ")";
  g.lineWidth = e.px * 1.4;
  g.beginPath();
  g.moveTo(ex, eT);
  g.lineTo(ex, eB);
  g.stroke();
}
var gt = g.createLinearGradient(-2.6, 0, 2.6, 0);
gt.addColorStop(0, "#261b14");
gt.addColorStop(0.7, "#32251b");
gt.addColorStop(1, "#6a4429");
g.fillStyle = gt;
g.beginPath();
g.moveTo(-2.55, -6.55);
g.lineTo(-2.62, -9.8);
g.lineTo(2.62, -9.8);
g.lineTo(2.55, -6.55);
g.closePath();
g.fill();
g.strokeStyle = "rgba(15,10,8,0.35)";
g.lineWidth = 0.035;
for (var x = -2.3; x < 2.5; x += 0.32) {
  g.beginPath();
  g.moveTo(x, -6.6);
  g.lineTo(x, -9.75);
  g.stroke();
}
for (var i = 0; i < 8; i++) {
  var x = -2.3 + e.rnd() * 4.6,
    l = 0.6 + e.rnd() * 2.2;
  var lg2 = g.createLinearGradient(0, -9.8, 0, -9.8 + l);
  lg2.addColorStop(0, "rgba(12,8,6,0.4)");
  lg2.addColorStop(1, "rgba(12,8,6,0)");
  g.fillStyle = lg2;
  g.fillRect(x, -9.8, 0.08 + e.rnd() * 0.12, l);
}
g.fillStyle = "#0f0a08";
g.fillRect(1.1, -9.75, 0.16, 2.2);
g.fillRect(-0.35, -8.6, 0.12, 1.3);
g.strokeStyle = "#1a120d";
g.lineWidth = 0.09;
g.beginPath();
g.moveTo(-2.6, -6.95);
g.lineTo(2.6, -6.95);
g.moveTo(-2.62, -9.4);
g.lineTo(2.62, -9.4);
g.moveTo(-2.6, -8.1);
g.lineTo(1.6, -8.1);
g.stroke();
var sw = 0.08 * Math.sin(t * 0.8) + 0.04 * Math.sin(t * 1.9 + 1);
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(1.6, -8.1);
g.quadraticCurveTo(2.3 + sw * 0.5, -7.9, 2.4 + sw, -7.2);
g.quadraticCurveTo(2.45 + sw * 1.3, -6.9, 2.3 + sw * 1.5, -6.5);
g.stroke();
g.strokeStyle = R;
g.lineWidth = e.px * 1.8;
g.beginPath();
g.moveTo(2.55, -6.55);
g.lineTo(2.62, -9.8);
g.stroke();
g.fillStyle = "#211812";
g.fillRect(-2.6, -6.62, 5.2, 0.2);
g.strokeStyle = "#1d140f";
g.lineWidth = 0.04;
g.beginPath();
for (var x = -2.5; x < 2.6; x += 0.55) {
  if (x > 1.1 && x < 1.3) continue;
  g.moveTo(x, -6.62);
  g.lineTo(x, -7.35);
}
g.moveTo(1.15, -6.62);
g.lineTo(1.45, -7.25);
g.moveTo(-2.55, -7.35);
g.lineTo(0.65, -7.35);
g.moveTo(1.6, -7.35);
g.lineTo(2.55, -7.35);
g.moveTo(-2.55, -6.98);
g.lineTo(2.55, -6.98);
g.stroke();
g.strokeStyle = R;
g.lineWidth = e.px * 1.5;
g.beginPath();
g.moveTo(0.4, -6.62);
g.lineTo(2.6, -6.62);
g.moveTo(1.6, -7.36);
g.lineTo(2.55, -7.36);
g.stroke();
g.fillStyle = "#251b15";
g.beginPath();
g.moveTo(-2.95, -9.75);
g.quadraticCurveTo(-1.3, -10.4, 0, -11.45);
g.quadraticCurveTo(1.35, -10.4, 2.95, -9.75);
g.closePath();
g.fill();
g.fillStyle = "#100b08";
g.beginPath();
g.moveTo(-1.5, -10.1);
g.lineTo(-0.9, -10.45);
g.lineTo(-0.8, -10.05);
g.closePath();
g.fill();
g.strokeStyle = "#1c140f";
g.lineWidth = 0.06;
g.beginPath();
g.moveTo(0, -11.4);
g.lineTo(0.12, -12.3);
g.stroke();
var va = 0.3 + 0.06 * Math.sin(t * 0.4) + 0.03 * Math.sin(t * 1.3 + 2);
g.save();
g.translate(0.12, -12.1);
g.scale(Math.cos(va), 1);
g.fillStyle = "#1c140f";
g.beginPath();
g.moveTo(0, -0.15);
g.lineTo(0.63, 0);
g.lineTo(0, 0.15);
g.closePath();
g.fill();
g.restore();
g.strokeStyle = R;
g.lineWidth = e.px * 1.8;
g.beginPath();
g.moveTo(2.95, -9.75);
g.quadraticCurveTo(1.35, -10.4, 0, -11.45);
g.stroke();
var L1 = -1.27,
  L2 = -0.79,
  lb = -2.4,
  ltop = -9.95;
g.lineCap = "butt";
g.strokeStyle = "#4a2a1c";
g.lineWidth = 0.065;
g.beginPath();
g.moveTo(L1, lb);
g.lineTo(L1, ltop);
g.moveTo(L2, lb);
g.lineTo(L2, ltop);
g.stroke();
g.beginPath();
g.moveTo(L2, lb);
g.quadraticCurveTo(L2 + 0.02, lb + 0.3, L2 + 0.22, lb + 0.42);
g.stroke();
g.lineWidth = 0.04;
g.beginPath();
var miss = { 5: 1, 12: 1, 13: 1, 20: 1 };
for (var i = 0; i < 25; i++) {
  var y = lb - 0.05 - i * 0.3;
  if (miss[i]) continue;
  g.moveTo(L1, y);
  if (i == 8) g.quadraticCurveTo((L1 + L2) / 2, y + 0.12, L2, y);
  else g.lineTo(L2, y);
}
g.stroke();
g.fillStyle = "#24150e";
for (var y = -3.2; y > -9.6; y -= 1.6) {
  g.fillRect(L1 - 0.06, y, 0.6, 0.07);
}
g.strokeStyle = "rgba(255,170,100,0.38)";
g.lineWidth = e.px * 1.2;
g.beginPath();
g.moveTo(L1 + 0.03, lb);
g.lineTo(L1 + 0.03, ltop);
g.moveTo(L2 + 0.03, lb);
g.lineTo(L2 + 0.03, ltop);
g.stroke();
var amp = 0.035 + 0.5 * st;
var gu = 0.6 + 0.4 * Math.sin(t * 0.23) * Math.sin(t * 0.37 + 1);
var a0 =
  amp * gu * (0.62 * Math.sin(t * 1.7) + 0.3 * Math.sin(t * 2.95 + 1.3) + 0.18 * Math.sin(t * 0.61 + 2.1)) + 0.04 * st;
var cx = -1.03,
  cy = -2.42,
  n = 13,
  ll = 0.095;
var pts = [[cx, cy]];
for (var k = 1; k <= n; k++) {
  var a = a0 * (1 + (0.4 * k) / n) + amp * 0.22 * Math.sin(t * 3.4 - k * 0.4);
  cx += Math.sin(a) * ll;
  cy += Math.cos(a) * ll;
  pts.push([cx, cy]);
}
g.lineCap = "round";
g.strokeStyle = "#2e1a10";
g.lineWidth = 0.02;
g.beginPath();
g.arc(-1.03, -2.45, 0.04, Math.PI * 0.2, Math.PI * 1.1);
g.stroke();
for (var k = 0; k < n; k++) {
  var p = pts[k],
    q = pts[k + 1];
  var mx = (p[0] + q[0]) / 2,
    my = (p[1] + q[1]) / 2,
    an = Math.atan2(q[0] - p[0], q[1] - p[1]);
  if (k % 2 == 0) {
    g.save();
    g.translate(mx, my);
    g.rotate(-an);
    g.strokeStyle = "#3a2216";
    g.lineWidth = 0.032;
    g.beginPath();
    g.ellipse(0, 0, 0.04, 0.07, 0, 0, 6.283);
    g.stroke();
    g.strokeStyle = "rgba(255,170,100,0.6)";
    g.lineWidth = e.px * 1.3;
    g.beginPath();
    g.ellipse(0, 0, 0.04, 0.07, 0, -1.2, 0.6);
    g.stroke();
    g.restore();
  } else {
    g.strokeStyle = "#2e1a10";
    g.lineWidth = 0.036;
    g.beginPath();
    g.moveTo(p[0] - (q[0] - p[0]) * 0.15, p[1] - (q[1] - p[1]) * 0.15);
    g.lineTo(q[0] + (q[0] - p[0]) * 0.15, q[1] + (q[1] - p[1]) * 0.15);
    g.stroke();
  }
}
