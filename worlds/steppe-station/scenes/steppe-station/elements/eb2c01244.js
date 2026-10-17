var t = e.t;
var fl = 0.55 + 0.18 * Math.sin(t * 6.1) + 0.12 * Math.sin(t * 9.7 + 1) + 0.08 * Math.sin(t * 15.3 + 2);
g.fillStyle = "rgba(26,18,14,0.3)";
g.beginPath();
g.moveTo(-4.6, 0);
g.lineTo(4.6, 0);
g.lineTo(-2.5, 1.15);
g.lineTo(-12.5, 1.15);
g.closePath();
g.fill();
g.fillStyle = "#261c14";
g.beginPath();
g.moveTo(2.2, -4.4);
g.lineTo(2.2, -5.5);
g.lineTo(2.35, -5.62);
g.lineTo(2.5, -5.45);
g.lineTo(2.62, -5.58);
g.lineTo(2.75, -5.4);
g.lineTo(2.75, -4.4);
g.closePath();
g.fill();
var wg = g.createLinearGradient(-4.5, 0, 4.5, 0);
wg.addColorStop(0, "#231911");
wg.addColorStop(0.8, "#2c2117");
wg.addColorStop(1, "#46321f");
g.fillStyle = wg;
g.fillRect(-4.5, -3.3, 9, 3.3);
g.fillStyle = "rgba(98,74,54,0.22)";
for (var i = 0; i < 5; i++) {
  var px = -4.1 + e.rnd() * 7.6,
    py = -3 + e.rnd() * 2.2,
    pw = 0.4 + e.rnd() * 1.1,
    ph = 0.3 + e.rnd() * 0.6;
  g.beginPath();
  g.moveTo(px, py);
  g.quadraticCurveTo(px + pw * 0.5, py - ph * 0.6, px + pw, py);
  g.quadraticCurveTo(px + pw * 0.7, py + ph, px + pw * 0.1, py + ph * 0.7);
  g.closePath();
  g.fill();
}
g.fillStyle = "#1b130d";
g.fillRect(-4.55, -0.4, 9.1, 0.4);
g.save();
g.beginPath();
g.rect(-4.5, -3.3, 9, 3.3);
g.clip();
var fg = g.createRadialGradient(-0.3, 0, 0, -0.3, 0, 4.4);
fg.addColorStop(0, "rgba(255,132,62," + (0.4 * fl).toFixed(3) + ")");
fg.addColorStop(0.5, "rgba(230,100,50," + (0.15 * fl).toFixed(3) + ")");
fg.addColorStop(1, "rgba(200,80,40,0)");
g.fillStyle = fg;
g.fillRect(-4.5, -3.3, 9, 3.3);
g.restore();
function win(x) {
  g.fillStyle = "#34261b";
  g.fillRect(x - 0.55, -2.55, 1.1, 1.45);
  g.fillStyle = "#150f0b";
  g.fillRect(x - 0.45, -2.45, 0.9, 1.25);
}
win(-3.0);
win(0.9);
win(3.0);
g.strokeStyle = "#4a3828";
g.lineWidth = 0.14;
g.beginPath();
g.moveTo(-3.55, -2.3);
g.lineTo(-2.45, -1.4);
g.moveTo(-3.5, -1.45);
g.lineTo(-2.5, -2.35);
g.stroke();
var wl = g.createRadialGradient(0.8, -1.7, 0, 0.8, -1.7, 0.8);
wl.addColorStop(0, "rgba(150,88,46," + (0.5 + 0.3 * fl).toFixed(3) + ")");
wl.addColorStop(1, "rgba(90,58,34,0.4)");
g.fillStyle = wl;
g.fillRect(0.45, -2.45, 0.9, 1.25);
g.strokeStyle = "#1f1610";
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(0.9, -2.45);
g.lineTo(0.9, -1.2);
g.moveTo(0.45, -1.85);
g.lineTo(1.35, -1.85);
g.stroke();
e.light(0.9, -1.8, 1.1, "#8a5a32", 0.3);
g.fillStyle = "rgba(235,158,100,0.38)";
g.beginPath();
g.moveTo(2.55, -2.45);
g.lineTo(3.3, -2.45);
g.lineTo(2.9, -1.95);
g.lineTo(2.55, -2.1);
g.closePath();
g.fill();
g.fillStyle = "rgba(210,128,84,0.22)";
g.beginPath();
g.moveTo(3.45, -1.2);
g.lineTo(3.45, -1.7);
g.lineTo(3.1, -1.2);
g.closePath();
g.fill();
g.fillStyle = "#120d09";
g.fillRect(-1.75, -2.25, 0.95, 2.25);
var da = 0.05 * Math.sin(t * 0.47) + 0.03 * Math.sin(t * 1.23 + 0.6);
g.fillStyle = "#3a2a1d";
g.beginPath();
g.moveTo(-1.75, 0);
g.lineTo(-1.75, -2.25);
g.lineTo(-1.22 + da, -2.2);
g.lineTo(-1.22 + da, -0.04);
g.closePath();
g.fill();
g.save();
g.translate(-0.9, -2.95);
g.rotate(0.06);
g.fillStyle = "#4d3b2a";
g.fillRect(-1.3, -0.2, 2.6, 0.4);
g.fillStyle = "rgba(205,175,135,0.22)";
for (var i = 0; i < 9; i++) {
  if (i == 3 || i == 6) continue;
  g.fillRect(-1.1 + i * 0.25, -0.12, 0.1, 0.24);
}
g.restore();
g.fillStyle = "#1d1510";
g.beginPath();
g.moveTo(-4.95, -3.25);
g.lineTo(-4.2, -5.0);
g.quadraticCurveTo(0, -4.82, 4.2, -5.0);
g.lineTo(4.95, -3.25);
g.closePath();
g.moveTo(-3.6, -4.85);
g.lineTo(-2.6, -3.9);
g.lineTo(-1.5, -4.1);
g.lineTo(-1.1, -4.86);
g.closePath();
g.fill("evenodd");
g.strokeStyle = "rgba(0,0,0,0.18)";
g.lineWidth = 0.03;
for (var y = -3.5; y > -4.9; y -= 0.28) {
  var k = (y + 3.25) / -1.75;
  var xl = -4.95 + 0.75 * k,
    xr = 4.95 - 0.75 * k;
  g.beginPath();
  if (y < -3.85) {
    g.moveTo(xl, y);
    g.lineTo(-3.7, y);
    g.moveTo(-1.0, y);
    g.lineTo(xr, y);
  } else {
    g.moveTo(xl, y);
    g.lineTo(xr, y);
  }
  g.stroke();
}
g.strokeStyle = "#1d1510";
g.lineWidth = 0.09;
[
  [-3.25, -4.9, -3.45, -3.3],
  [-2.75, -4.9, -2.9, -3.3],
  [-2.25, -4.92, -2.4, -3.3],
  [-1.75, -4.92, -1.85, -3.3],
].forEach(function (r) {
  g.beginPath();
  g.moveTo(r[0], r[1]);
  g.lineTo(r[2], r[3]);
  g.stroke();
});
g.beginPath();
g.moveTo(-1.3, -4.92);
g.lineTo(-1.45, -4.3);
g.lineTo(-1.8, -4.05);
g.stroke();
g.strokeStyle = "rgba(255,178,108,0.55)";
g.lineWidth = e.px * 1.8;
g.beginPath();
g.moveTo(-1.1, -4.95);
g.quadraticCurveTo(1.6, -4.85, 4.2, -5.0);
g.lineTo(4.95, -3.25);
g.moveTo(2.75, -4.45);
g.lineTo(2.75, -5.4);
g.stroke();
g.strokeStyle = "rgba(255,178,108,0.3)";
g.beginPath();
g.moveTo(4.5, -3.25);
g.lineTo(4.5, -0.4);
g.stroke();
