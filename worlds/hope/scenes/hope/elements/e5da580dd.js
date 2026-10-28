var t = e.t;
g.lineCap = "round";
g.lineJoin = "round";
var W = "#1b2029";
for (var i = 0; i < 10; i++) {
  var px = -0.1 - i * 1.55 + (e.rnd() - 0.5) * 0.2;
  var w = 0.12 + e.rnd() * 0.05;
  var ln = (e.rnd() - 0.5) * 0.06;
  g.fillStyle = W;
  g.beginPath();
  g.moveTo(px - w / 2, -0.92);
  g.lineTo(px + w / 2, -0.92);
  g.lineTo(px + w / 2 + ln, 0.04);
  g.lineTo(px - w / 2 + ln, 0.04);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(8,10,16,0.55)";
  g.fillRect(px - w / 2 + ln, -0.2, w, 0.24);
  g.fillStyle = "rgba(150,165,190,0.12)";
  g.fillRect(px + w / 2 - 0.02, -0.92, 0.02, 0.7);
  if (i > 0 && i % 2 == 0) {
    g.strokeStyle = W;
    g.lineWidth = 0.05;
    g.beginPath();
    g.moveTo(px, -0.88);
    g.lineTo(px + 1.5, -0.3);
    g.stroke();
  }
  var rp = (t * 0.11 + i * 0.37) % 1;
  var rr = w * 0.7 + rp * 0.7;
  g.strokeStyle = "rgba(175,185,200," + (0.2 * (1 - rp)).toFixed(3) + ")";
  g.lineWidth = 1.5 * e.px;
  g.beginPath();
  g.ellipse(px + ln, 0.03, rr, rr * 0.12, 0, 0, Math.PI * 2);
  g.stroke();
}
g.fillStyle = W;
g.fillRect(-15, -1.06, 15.05, 0.17);
g.fillStyle = "#232933";
g.fillRect(-15, -0.93, 15.05, 0.05);
var dg = g.createLinearGradient(-15, 0, 0, 0);
dg.addColorStop(0, "rgba(170,180,200,0)");
dg.addColorStop(1, "rgba(185,195,215,0.35)");
g.fillStyle = dg;
g.fillRect(-15, -1.065, 15.05, 0.018);
g.strokeStyle = "rgba(0,0,0,0.35)";
g.lineWidth = 1.2 * e.px;
for (var k = 0; k < 7; k++) {
  var sx = -0.6 - k * 2.1;
  g.beginPath();
  g.moveTo(sx, -1.05);
  g.lineTo(sx, -0.9);
  g.stroke();
}
g.fillStyle = W;
g.fillRect(-3.3, -1.32, 0.14, 0.3);
g.beginPath();
g.ellipse(-3.23, -1.32, 0.07, 0.02, 0, 0, Math.PI * 2);
g.fill();
var b = Math.sin(t * 1.25) * 0.006 + Math.sin(t * 0.47 + 1) * 0.003;
var F = "#151920";
function leg(a, c) {
  var kx = 0.1,
    ky = -1.1;
  var fx = kx + Math.sin(a) * 0.34,
    fy = ky + Math.cos(a) * 0.34;
  g.strokeStyle = c;
  g.lineWidth = 0.085;
  g.beginPath();
  g.moveTo(-0.1, -1.1);
  g.lineTo(kx, ky);
  g.lineTo(fx, fy);
  g.stroke();
  g.fillStyle = c;
  g.beginPath();
  g.ellipse(fx + 0.03, fy + 0.02, 0.065, 0.035, a * 0.6, 0, Math.PI * 2);
  g.fill();
}
leg(0.08 + 0.11 * Math.sin(t * 0.71 + 1.9) + 0.04 * Math.sin(t * 0.29 + 0.5), "#10131a");
leg(0.16 + 0.13 * Math.sin(t * 0.93) + 0.05 * Math.sin(t * 0.37 + 2.2), F);
g.fillStyle = F;
g.beginPath();
g.moveTo(-0.24, -1.05);
g.bezierCurveTo(-0.29, -1.2, -0.22, -1.43 + b, -0.09, -1.5 + b);
g.quadraticCurveTo(0.03, -1.54 + b, 0.08, -1.45 + b);
g.lineTo(0.11, -1.22);
g.quadraticCurveTo(0.1, -1.07, 0.0, -1.05);
g.closePath();
g.fill();
g.strokeStyle = F;
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(0.02, -1.44 + b);
g.quadraticCurveTo(0.13, -1.3 + b * 0.5, 0.12, -1.15);
g.stroke();
g.beginPath();
g.arc(0.12, -1.14, 0.035, 0, Math.PI * 2);
g.fill();
var hx = 0.07,
  hy = -1.61 + b;
g.beginPath();
g.arc(hx, hy, 0.095, 0, Math.PI * 2);
g.fill();
var ps = Math.sin(t * 0.8) * 0.012 + Math.sin(t * 1.9 + 1) * 0.006;
g.beginPath();
g.moveTo(-0.01, hy - 0.04);
g.quadraticCurveTo(-0.1 + ps, hy, -0.09 + ps * 1.5, hy + 0.12);
g.quadraticCurveTo(-0.05 + ps, hy + 0.03, 0.0, hy + 0.02);
g.closePath();
g.fill();
var S = "#74403f";
g.fillStyle = S;
g.beginPath();
g.ellipse(0.02, -1.5 + b, 0.095, 0.04, -0.15, 0, Math.PI * 2);
g.fill();
var top = [],
  bot = [];
for (var s = 0; s <= 1.0001; s += 0.1) {
  var wv = Math.sin(t * 1.6 - s * 4.2) * 0.025 * s + Math.sin(t * 0.83 + s * 2.5) * 0.012 * s;
  var x = -0.05 - s * 0.26,
    y = -1.49 + b + s * 0.07 + wv;
  var ww = 0.03 * (1 - 0.35 * s);
  top.push([x, y - ww]);
  bot.push([x, y + ww]);
}
g.beginPath();
g.moveTo(top[0][0], top[0][1]);
for (var q = 1; q < top.length; q++) g.lineTo(top[q][0], top[q][1]);
for (var q2 = bot.length - 1; q2 >= 0; q2--) g.lineTo(bot[q2][0], bot[q2][1]);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(0.05, -1.49 + b);
g.lineTo(0.09, -1.49 + b);
g.lineTo(0.085, -1.36 + b);
g.lineTo(0.06, -1.37 + b);
g.closePath();
g.fill();
g.strokeStyle = "rgba(205,215,230,0.4)";
g.lineWidth = 2 * e.px;
g.beginPath();
g.arc(hx, hy, 0.093, -1.5, 0.3);
g.stroke();
g.beginPath();
g.moveTo(0.03, -1.53 + b);
g.quadraticCurveTo(0.075, -1.5 + b, 0.09, -1.44 + b);
g.stroke();
