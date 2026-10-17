var s = e.state || {},
  t = e.t,
  p = s.patient || "tense";
var L = { tense: 0.32, calm: 0.06, crying: 0.42, talking: 0.2 }[p];
if (L == null) L = 0.3;
L += Math.sin(t * 0.19) * 0.012;
var br = Math.sin(t * 1.6) * 0.006 + Math.sin(t * 0.47) * 0.004,
  sob = 0;
if (p === "crying") {
  sob = Math.max(0, Math.sin(t * 4.7)) * Math.max(0, Math.sin(t * 0.6)) * 0.012;
}
var ca = Math.cos(L),
  sa = Math.sin(L);
function W(x, y) {
  return [x * ca - y * sa, -0.48 + x * sa + y * ca];
}
g.lineCap = "round";
g.lineJoin = "round";
var tap = p === "tense" ? Math.max(0, Math.sin(t * 6.2)) * 0.03 * (0.55 + 0.45 * Math.sin(t * 0.27)) : 0;
g.strokeStyle = "#202228";
g.lineWidth = 0.14;
g.beginPath();
g.moveTo(0.06, -0.5);
g.lineTo(0.5, -0.5);
g.lineTo(0.56, -0.07);
g.stroke();
g.fillStyle = "#141418";
g.beginPath();
g.ellipse(0.62, -0.035, 0.09, 0.035, 0, 0, 6.283);
g.fill();
g.strokeStyle = "#2a2d34";
g.beginPath();
g.moveTo(0.02, -0.47);
g.lineTo(0.46, -0.47 - tap * 0.3);
g.lineTo(0.5, -0.07 - tap);
g.stroke();
g.strokeStyle = "rgba(255,190,130,0.15)";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0.52, -0.42 - tap * 0.5);
g.lineTo(0.55, -0.1 - tap);
g.stroke();
g.fillStyle = "#17171c";
g.beginPath();
g.ellipse(0.56, -0.035 - tap, 0.09, 0.035, -tap * 3, 0, 6.283);
g.fill();
g.save();
g.translate(0, -0.48 + sob);
g.rotate(L);
g.scale(1 + br * 0.5, 1 + br);
var sg = g.createLinearGradient(-0.2, 0, 0.2, 0);
sg.addColorStop(0, "#272c35");
sg.addColorStop(0.7, "#3f4652");
sg.addColorStop(1, "#6a625c");
g.fillStyle = sg;
g.beginPath();
g.moveTo(-0.19, 0.03);
g.bezierCurveTo(-0.22, -0.2, -0.21, -0.42, -0.13, -0.5);
g.quadraticCurveTo(-0.02, -0.56, 0.1, -0.52);
g.bezierCurveTo(0.18, -0.44, 0.18, -0.2, 0.16, 0.03);
g.closePath();
g.fill();
g.strokeStyle = "rgba(0,0,0,0.3)";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-0.12, -0.48);
g.quadraticCurveTo(-0.02, -0.44, 0.07, -0.49);
g.stroke();
g.strokeStyle = "rgba(140,160,190,0.25)";
g.beginPath();
g.moveTo(-0.2, -0.1);
g.bezierCurveTo(-0.22, -0.25, -0.21, -0.42, -0.13, -0.5);
g.stroke();
g.restore();
var sh = W(-0.1, -0.46),
  el = [0.24, -0.6],
  hd = [0.46, -0.71];
if (p === "calm") {
  el = [0.14, -0.62];
  hd = [0.38, -0.69];
}
if (p === "crying") {
  var h0 = W(0.1, -0.66);
  hd = [h0[0] + 0.06, h0[1] + 0.06 + sob];
  el = [0.28, -0.62];
}
if (p === "talking") {
  hd = [0.5 + Math.sin(t * 1.1) * 0.03, -0.8 + Math.sin(t * 1.7) * 0.03];
  el = [0.28, -0.62];
}
g.strokeStyle = "#353b45";
g.lineWidth = 0.09;
g.beginPath();
g.moveTo(sh[0], sh[1]);
g.lineTo(el[0], el[1]);
g.lineTo(hd[0] - 0.03, hd[1] + 0.01);
g.stroke();
var rub = Math.sin(t * 2.1) * 0.008 + Math.sin(t * 0.7) * 0.004;
g.fillStyle = "#a38069";
g.beginPath();
g.ellipse(hd[0], hd[1], 0.04, 0.026, 0.3, 0, 6.283);
g.fill();
if (p === "tense" || p === "calm") {
  g.fillStyle = "#8f6e5a";
  g.beginPath();
  g.ellipse(hd[0] + 0.03 + rub, hd[1] - 0.012, 0.03, 0.02, 0, 0, 6.283);
  g.fill();
}
if (p === "crying") {
  g.fillStyle = "rgba(235,230,220,0.9)";
  g.beginPath();
  g.moveTo(hd[0] - 0.02, hd[1] - 0.03);
  g.lineTo(hd[0] + 0.05, hd[1] - 0.06);
  g.lineTo(hd[0] + 0.06, hd[1] + 0.01);
  g.lineTo(hd[0], hd[1] + 0.03);
  g.closePath();
  g.fill();
}
var nk = W(0.0, -0.52),
  hp = W(0.03, -0.65);
var ht = { tense: 0.15, calm: -0.05, crying: 0.45, talking: -0.1 }[p] || 0;
ht += Math.sin(t * 0.31) * 0.02 + Math.sin(t * 0.83) * 0.008;
g.fillStyle = "#6e5444";
g.beginPath();
g.ellipse(nk[0] + 0.01, nk[1] - 0.04 + sob, 0.045, 0.06, L, 0, 6.283);
g.fill();
g.save();
g.translate(hp[0], hp[1] + sob);
g.rotate(L * 0.5 + ht);
g.fillStyle = "#8a6a58";
g.beginPath();
g.ellipse(0.055, 0.015, 0.05, 0.085, 0, 0, 6.283);
g.fill();
g.fillStyle = "rgba(255,190,140,0.3)";
g.beginPath();
g.ellipse(0.085, 0.02, 0.02, 0.06, 0, 0, 6.283);
g.fill();
g.fillStyle = "#241b17";
g.beginPath();
g.ellipse(-0.01, -0.005, 0.095, 0.11, 0, 0, 6.283);
g.fill();
g.beginPath();
g.ellipse(-0.06, -0.1, 0.05, 0.045, -0.4, 0, 6.283);
g.fill();
g.strokeStyle = "rgba(150,165,190,0.3)";
g.lineWidth = 0.008;
g.beginPath();
g.arc(-0.01, -0.005, 0.097, 2.4, 4.4);
g.stroke();
g.strokeStyle = "#241b17";
g.lineWidth = 0.004;
g.beginPath();
g.moveTo(-0.08, 0.06);
g.quadraticCurveTo(-0.1, 0.1, -0.085, 0.13);
g.moveTo(0.03, 0.09);
g.quadraticCurveTo(0.04, 0.12, 0.03, 0.14);
g.stroke();
g.fillStyle = "#7a5c4b";
g.beginPath();
g.ellipse(0.065, 0.01, 0.016, 0.028, 0, 0, 6.283);
g.fill();
g.restore();
e.at(hp[0], hp[1] - 0.15);
