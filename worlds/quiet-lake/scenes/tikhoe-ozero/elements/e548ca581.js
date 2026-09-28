var nearHalf = 1.1,
  farHalf = 0.08,
  nearY = 0.1,
  farY = -1.25;
function hA(t) {
  return nearHalf + (farHalf - nearHalf) * t;
}
function yA(t) {
  return nearY + (farY - nearY) * t;
}
g.beginPath();
g.moveTo(-hA(0), yA(0));
g.lineTo(hA(0), yA(0));
g.lineTo(hA(1), yA(1));
g.lineTo(-hA(1), yA(1));
g.closePath();
var grad = g.createLinearGradient(0, yA(0), 0, yA(1));
grad.addColorStop(0, e.color || "#3b2a22");
grad.addColorStop(1, "#20140e");
g.fillStyle = grad;
g.fill();
var n = 20;
g.strokeStyle = "rgba(10,6,4,0.55)";
g.lineWidth = 1.2 * e.px;
for (var i = 1; i < n; i++) {
  var t = 1 - Math.pow(1 - i / n, 1.7);
  var y = yA(t),
    hh = hA(t);
  g.beginPath();
  g.moveTo(-hh, y);
  g.lineTo(hh, y);
  g.stroke();
}
g.strokeStyle = "rgba(14,8,5,0.9)";
g.lineWidth = 2 * e.px;
g.beginPath();
g.moveTo(-hA(0), yA(0));
g.lineTo(-hA(1), yA(1));
g.stroke();
g.beginPath();
g.moveTo(hA(0), yA(0));
g.lineTo(hA(1), yA(1));
g.stroke();
for (var i = 0; i < 6; i++) {
  var t = i / 5;
  var y = yA(t),
    hh = hA(t);
  var ph = 0.3 * (1 - t) + 0.03;
  g.fillStyle = "#170f0a";
  g.fillRect(-hh - 0.025, y - ph, 0.045, ph);
  g.fillRect(hh - 0.02, y - ph, 0.045, ph);
}
g.globalAlpha = 0.22;
g.fillStyle = "#ffcf8a";
g.beginPath();
g.moveTo(-hA(0) * 0.12, yA(0));
g.lineTo(hA(0) * 0.12, yA(0));
g.lineTo(hA(1) * 0.5, yA(1));
g.lineTo(-hA(1) * 0.5, yA(1));
g.closePath();
g.fill();
g.globalAlpha = 1;
var t2 = 0.94;
var cx = 0,
  cy = yA(t2);
var hc = 0.25;
g.save();
g.translate(cx, cy);
g.fillStyle = "#171310";
g.beginPath();
g.moveTo(-0.16 * hc, 0.05 * hc);
g.bezierCurveTo(-0.2 * hc, -0.35 * hc, -0.14 * hc, -0.62 * hc, -0.05 * hc, -0.7 * hc);
g.bezierCurveTo(0.02 * hc, -0.78 * hc, 0.1 * hc, -0.78 * hc, 0.14 * hc, -0.7 * hc);
g.bezierCurveTo(0.2 * hc, -0.6 * hc, 0.2 * hc, -0.4 * hc, 0.17 * hc, -0.2 * hc);
g.lineTo(0.2 * hc, 0.05 * hc);
g.closePath();
g.fill();
g.beginPath();
g.arc(0.02 * hc, -0.86 * hc, 0.13 * hc, 0, Math.PI * 2);
g.fill();
var ph2 = e.phase * Math.PI * 2;
var swing = Math.sin(ph2) * 0.03 * hc;
g.strokeStyle = "#171310";
g.lineWidth = 0.06 * hc;
g.lineCap = "round";
g.beginPath();
g.moveTo(-0.02 * hc, 0.0);
g.lineTo(-0.03 * hc + swing, 0.55 * hc);
g.stroke();
g.beginPath();
g.moveTo(0.08 * hc, 0.0);
g.lineTo(0.1 * hc + swing * 0.8, 0.52 * hc);
g.stroke();
var flap = Math.sin(ph2 + 1.0) * 0.15 * hc;
g.fillStyle = "#b5271f";
g.beginPath();
g.moveTo(-0.02 * hc, -0.72 * hc);
g.quadraticCurveTo(-0.22 * hc - flap, -0.5 * hc, -0.3 * hc - flap, -0.15 * hc);
g.quadraticCurveTo(-0.15 * hc, -0.35 * hc, -0.04 * hc, -0.6 * hc);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(0.06 * hc, -0.73 * hc);
g.quadraticCurveTo(0.24 * hc + flap * 0.7, -0.55 * hc, 0.28 * hc + flap * 0.7, -0.25 * hc);
g.quadraticCurveTo(0.14 * hc, -0.4 * hc, 0.03 * hc, -0.62 * hc);
g.closePath();
g.fill();
g.restore();
