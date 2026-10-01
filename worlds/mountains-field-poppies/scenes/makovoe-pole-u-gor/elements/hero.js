var t = e.t;
function sw(i) {
  return (
    0.03 * Math.sin(t * 0.61 + i * 1.7) + 0.018 * Math.sin(t * 1.07 + i * 0.93) + 0.008 * Math.sin(t * 2.31 + i * 2.9)
  );
}
function petal(len, wid, ang, c1, c2) {
  g.save();
  g.rotate(ang);
  var gr = g.createLinearGradient(-wid, 0, wid, 0);
  gr.addColorStop(0, c1);
  gr.addColorStop(1, c2);
  g.fillStyle = gr;
  g.beginPath();
  g.moveTo(0, 0);
  g.bezierCurveTo(-wid * 0.9, -len * 0.15, -wid * 1.25, -len * 0.85, -wid * 0.2, -len * 1.02);
  g.quadraticCurveTo(0, -len * 0.94, wid * 0.25, -len);
  g.bezierCurveTo(wid * 1.2, -len * 0.85, wid * 0.9, -len * 0.15, 0, 0);
  g.fill();
  g.restore();
}
function poppy(x, y, r, a) {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  petal(r * 1.1, r * 0.85, -0.5, "#c2321f", "#7e1814");
  petal(r * 1.1, r * 0.85, 0.5, "#a8261b", "#6a1410");
  g.fillStyle = "#24160f";
  g.beginPath();
  g.ellipse(0, -r * 0.62, r * 0.34, r * 0.12, 0, 0, 6.2832);
  g.fill();
  g.fillStyle = "#1a120e";
  for (var k = 0; k < 12; k++) {
    var aa = (k / 12) * 6.2832;
    g.beginPath();
    g.arc(Math.cos(aa) * r * 0.27, -r * 0.66 + Math.sin(aa) * r * 0.08, r * 0.04, 0, 6.2832);
    g.fill();
  }
  g.fillStyle = "#7f8c5e";
  g.beginPath();
  g.ellipse(0, -r * 0.68, r * 0.15, r * 0.08, 0, 0, 6.2832);
  g.fill();
  petal(r * 0.98, r * 0.9, -0.95, "#ff7d4e", "#c8301f");
  petal(r * 0.98, r * 0.9, 0.95, "#e04a2c", "#931d16");
  petal(r * 0.55, r * 1.05, 0, "#f5643c", "#b22a1c");
  g.fillStyle = "rgba(25,8,8,0.35)";
  g.beginPath();
  g.ellipse(0, -r * 0.08, r * 0.28, r * 0.1, 0, 0, 6.2832);
  g.fill();
  g.fillStyle = "#5f7440";
  g.beginPath();
  g.ellipse(0, r * 0.02, r * 0.13, r * 0.09, 0, 0, 6.2832);
  g.fill();
  g.globalCompositeOperation = "lighter";
  g.globalAlpha = 0.2;
  g.fillStyle = "#ff9a6a";
  g.beginPath();
  g.ellipse(-r * 0.62, -r * 0.6, r * 0.3, r * 0.42, -0.3, 0, 6.2832);
  g.fill();
  g.globalAlpha = 1;
  g.globalCompositeOperation = "source-over";
  g.restore();
}
function stem(bx, by, hx, hy, w) {
  g.strokeStyle = "#5c7140";
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(bx, by);
  g.quadraticCurveTo(bx + (hx - bx) * 0.15, (by + hy) / 2, hx, hy);
  g.stroke();
  g.strokeStyle = "rgba(170,180,120,0.5)";
  g.lineWidth = w * 0.35;
  g.beginPath();
  g.moveTo(bx - w * 0.3, by);
  g.quadraticCurveTo(bx + (hx - bx) * 0.15 - w * 0.3, (by + hy) / 2, hx - w * 0.3, hy);
  g.stroke();
}
var gc = ["#4f6436", "#5f7540", "#738550", "#8a9660", "#a3a876", "#46592f"];
function blades(n, seed) {
  for (var i = 0; i < n; i++) {
    var x = (e.rnd() - 0.5) * 1.4,
      y = e.rnd() * 0.45,
      h = 0.3 + e.rnd() * 0.55,
      l = (e.rnd() - 0.5) * 0.25,
      w = 0.008 + e.rnd() * 0.008,
      c = gc[(e.rnd() * 6) | 0];
    var s = sw(i + seed) * h * 1.3;
    var tx = x + l * h + s,
      ty = y - h;
    g.fillStyle = c;
    g.beginPath();
    g.moveTo(x - w / 2, y);
    g.quadraticCurveTo(x + (tx - x) * 0.4 - w / 4, y - h * 0.5, tx, ty);
    g.quadraticCurveTo(x + (tx - x) * 0.4 + w / 4, y - h * 0.5, x + w / 2, y);
    g.closePath();
    g.fill();
  }
}
blades(70, 10);
var B = [
  [-0.05, 0.2, 0.72, 0.1],
  [0.27, 0.18, 0.55, -0.08],
];
for (var b = 0; b < B.length; b++) {
  var bx = B[b][0],
    by = B[b][1],
    h = B[b][2],
    s = sw(b + 20) * h;
  var tx = bx + B[b][3] * h + s,
    ty = by - h;
  stem(bx, by, tx, ty, 0.007);
  g.strokeStyle = "#5c7140";
  g.lineWidth = 0.006;
  g.beginPath();
  g.moveTo(tx, ty);
  g.quadraticCurveTo(tx + 0.04, ty - 0.04, tx + 0.05, ty + 0.02);
  g.stroke();
  g.save();
  g.translate(tx + 0.05, ty + 0.045);
  g.rotate(0.3 + s * 2);
  g.fillStyle = "#667845";
  g.beginPath();
  g.ellipse(0, 0, 0.016, 0.026, 0, 0, 6.2832);
  g.fill();
  g.strokeStyle = "rgba(220,220,190,0.35)";
  g.lineWidth = 0.0015;
  for (var k = 0; k < 10; k++) {
    var aa = k * 0.63;
    g.beginPath();
    g.moveTo(Math.cos(aa) * 0.016, Math.sin(aa) * 0.026);
    g.lineTo(Math.cos(aa) * 0.022, Math.sin(aa) * 0.032);
    g.stroke();
  }
  g.restore();
}
var F = [
  [-0.38, 0.3, 0.6, 0.045, -0.1],
  [0.36, 0.3, 0.84, 0.05, 0.12],
  [-0.18, 0.15, 0.78, 0.055, -0.05],
  [0.2, 0.1, 0.66, 0.05, 0.08],
  [0.02, 0.25, 0.92, 0.06, 0.04],
];
for (var i = 0; i < F.length; i++) {
  var f = F[i],
    s = sw(i);
  var hx = f[0] + f[4] * f[2] + s * f[2],
    hy = f[1] - f[2];
  stem(f[0], f[1], hx, hy, 0.008);
  poppy(hx, hy, f[3], f[4] * 0.6 + s * 0.9);
  if (i == 2 || i == 4) e.light(hx - f[3] * 0.5, hy - f[3] * 0.85, f[3] * 0.22, "#fff2e2", 0.3);
}
blades(22, 40);
