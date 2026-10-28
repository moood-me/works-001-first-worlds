var T = [0, 0.3];
g.lineCap = "round";
g.strokeStyle = "rgba(150,120,88,0.14)";
g.lineWidth = 1.3;
g.beginPath();
g.moveTo(-1.5, 1.5);
g.quadraticCurveTo(-6, -4, -11, -15);
g.stroke();
g.strokeStyle = "rgba(165,134,98,0.12)";
g.lineWidth = 0.5;
g.beginPath();
g.moveTo(-1.5, 1.6);
g.quadraticCurveTo(-6.2, -4, -11.2, -15);
g.stroke();
g.fillStyle = "rgba(86,76,66,0.82)";
g.beginPath();
g.moveTo(-3.7, -2.4);
g.lineTo(-1, -2.9);
g.lineTo(3.4, -2.7);
g.lineTo(3.9, 0.6);
g.lineTo(3.6, 3.2);
g.lineTo(1.3, 3.6);
g.lineTo(0.7, 3.1);
g.lineTo(-2.2, 3.5);
g.lineTo(-3.9, 2.9);
g.lineTo(-3.5, 0.4);
g.closePath();
g.fill();
g.fillStyle = "rgba(86,76,66,0.7)";
[
  [4.3, 1.5, 0.4],
  [-4.4, 1.9, 0.3],
  [2.2, 4.1, 0.35],
  [-1.2, 4.0, 0.25],
].forEach(function (c) {
  g.beginPath();
  g.moveTo(c[0] - c[2], c[1]);
  g.lineTo(c[0], c[1] - c[2] * 0.8);
  g.lineTo(c[0] + c[2], c[1] + c[2] * 0.2);
  g.lineTo(c[0] + c[2] * 0.2, c[1] + c[2] * 0.7);
  g.closePath();
  g.fill();
});
g.strokeStyle = "rgba(28,20,16,0.6)";
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-3.6, 1.2);
g.lineTo(-2.4, 1.6);
g.lineTo(-1.9, 2.6);
g.lineTo(-2.1, 3.4);
g.moveTo(2.4, 2.4);
g.lineTo(2.9, 3.0);
g.lineTo(3.5, 3.1);
g.moveTo(1.8, -2.75);
g.lineTo(2.3, -2.0);
g.lineTo(3.3, -1.7);
g.stroke();
g.strokeStyle = "rgba(120,104,66,0.6)";
g.lineWidth = 0.03;
for (var i = 0; i < 26; i++) {
  var x = -3.6 + e.rnd() * 7.2,
    y = 2.2 + e.rnd() * 1.2;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + (e.rnd() - 0.5) * 0.2, y - 0.12 - e.rnd() * 0.12);
  g.stroke();
}
g.save();
g.translate(0, 5.3);
g.rotate(-0.245);
function fd(x) {
  return Math.max(0, Math.min(1, (33 - Math.abs(x)) / 9));
}
var bg = g.createLinearGradient(-34, 0, 34, 0);
bg.addColorStop(0, "rgba(80,70,60,0)");
bg.addColorStop(0.22, "rgba(80,70,60,0.55)");
bg.addColorStop(0.78, "rgba(80,70,60,0.55)");
bg.addColorStop(1, "rgba(80,70,60,0)");
g.fillStyle = bg;
g.fillRect(-34, -1.8, 68, 3.6);
for (var i = 0; i < 500; i++) {
  var x = (e.rnd() - 0.5) * 66,
    y = (e.rnd() - 0.5) * 3.4;
  var a = fd(x) * 0.6;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(130,116,98," + a.toFixed(3) + ")" : "rgba(40,32,26," + a.toFixed(3) + ")";
  g.fillRect(x, y, 0.06 + e.rnd() * 0.05, 0.05 + e.rnd() * 0.04);
}
var sc = ["#3a2d24", "#46362a", "#2f261f", "#4a3a2c"];
for (var x = -33; x < 33; x += 0.6 + e.rnd() * 0.08) {
  var miss = e.rnd() < 0.12,
    j = (e.rnd() - 0.5) * 0.12,
    c = sc[Math.floor(e.rnd() * 4)],
    split = e.rnd() < 0.2;
  if (miss) continue;
  g.globalAlpha = fd(x);
  g.save();
  g.translate(x, 0);
  g.rotate(j);
  g.fillStyle = c;
  g.fillRect(-0.12, -1.35, 0.24, 2.7);
  if (split) {
    g.fillStyle = "rgba(20,14,10,0.7)";
    g.fillRect(-0.015, -1.3, 0.03, 1.6);
  }
  g.fillStyle = "rgba(255,190,120,0.1)";
  g.fillRect(0.07, -1.35, 0.05, 2.7);
  g.fillStyle = "rgba(30,20,16,0.9)";
  g.fillRect(-0.09, -0.84, 0.18, 0.14);
  g.fillRect(-0.09, 0.7, 0.18, 0.14);
  g.restore();
}
g.globalAlpha = 1;
for (var k = 0; k < 2; k++) {
  var ry = k ? 0.76 : -0.76;
  for (var x = -33; x < 33; x += 1) {
    if (k == 0 && x > -10 && x < -7) continue;
    var a = fd(x + 0.5);
    g.strokeStyle = "rgba(38,26,20," + (0.95 * a).toFixed(3) + ")";
    g.lineWidth = 0.08;
    g.beginPath();
    g.moveTo(x, ry);
    g.lineTo(x + 1.02, ry);
    g.stroke();
    g.strokeStyle = "rgba(255,196,130," + (0.5 * a).toFixed(3) + ")";
    g.lineWidth = 0.025;
    g.beginPath();
    g.moveTo(x, ry - 0.02);
    g.lineTo(x + 1.02, ry - 0.02);
    g.stroke();
  }
}
g.strokeStyle = "rgba(38,26,20,0.9)";
g.lineWidth = 0.08;
g.beginPath();
g.moveTo(-7, -0.76);
g.quadraticCurveTo(-7.6, -1.3, -8.3, -2.2);
g.stroke();
g.strokeStyle = "rgba(255,196,130,0.35)";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-7, -0.78);
g.quadraticCurveTo(-7.6, -1.32, -8.3, -2.22);
g.stroke();
for (var i = 0; i < 160; i++) {
  var x = (e.rnd() - 0.5) * 60,
    y = (e.rnd() - 0.5) * 3.2,
    a = fd(x) * 0.55;
  g.strokeStyle = "rgba(120,104,66," + a.toFixed(3) + ")";
  g.lineWidth = 0.025;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + (e.rnd() - 0.3) * 0.3, y - 0.15 - e.rnd() * 0.2);
  g.stroke();
}
g.restore();
var dx = -0.47,
  dy = 0.88,
  px = 0.88,
  py = 0.47,
  L = 24;
for (var k = 0; k < 4; k++) {
  var w = 2.0 + k * 0.22,
    w2 = w - 0.5;
  var sg = g.createLinearGradient(T[0], T[1], T[0] + dx * L, T[1] + dy * L);
  sg.addColorStop(0, "rgba(26,17,20,0.2)");
  sg.addColorStop(1, "rgba(26,17,20,0.06)");
  g.fillStyle = sg;
  g.beginPath();
  g.moveTo(T[0] + px * w, T[1] + py * w);
  g.lineTo(T[0] - px * w, T[1] - py * w);
  g.lineTo(T[0] + dx * L - px * w2, T[1] + dy * L - py * w2);
  g.lineTo(T[0] + dx * L + px * w2, T[1] + dy * L + py * w2);
  g.closePath();
  g.fill();
}
var wg = g.createRadialGradient(16, -8, 0, 16, -8, 20);
wg.addColorStop(0, "rgba(255,170,100,0.12)");
wg.addColorStop(1, "rgba(255,170,100,0)");
g.fillStyle = wg;
g.fillRect(-35, -15.3, 70, 30.6);
