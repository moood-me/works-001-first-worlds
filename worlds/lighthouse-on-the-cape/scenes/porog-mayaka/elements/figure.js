var S = e.state,
  t = e.t,
  w = S.wind_strength == null ? 0.6 : S.wind_strength,
  pr = Math.max(0, Math.min(1, S.figure_present == null ? 1 : S.figure_present)),
  wv = Math.max(0, Math.min(1, S.figure_waving == null ? 1 : S.figure_waving));
if (pr <= 0.001) return;
var walk = pr < 0.995,
  ox = -(1 - pr) * 10;
if (walk) wv = 0;
var gu = w * (0.7 + 0.3 * Math.sin(t * 0.9) * Math.sin(t * 0.37 + 1));
var br = Math.sin(t * 1.3) * 0.01;
var st = walk ? Math.sin(t * 5) : 0;
var by = walk ? -Math.abs(Math.sin(t * 5)) * 0.03 : 0;
var dk = "#13131d";
g.save();
g.translate(ox, by);
g.strokeStyle = dk;
g.fillStyle = dk;
g.lineCap = "round";
g.lineJoin = "round";
g.lineWidth = 0.12;
g.beginPath();
g.moveTo(-0.08, -0.5);
g.lineTo(-0.1 - st * 0.13, 0);
g.moveTo(0.08, -0.5);
g.lineTo(0.1 + st * 0.13, 0);
g.stroke();
var fl = gu * 0.12 + Math.sin(t * 2.3) * 0.025 * gu + Math.sin(t * 3.7 + 1) * 0.018 * gu;
g.beginPath();
g.moveTo(-0.2, -1.42 + br);
g.quadraticCurveTo(-0.25, -0.9, -0.27 + fl * 0.3, -0.42);
g.quadraticCurveTo(0, -0.37, 0.29 + fl, -0.44 - fl * 0.4);
g.quadraticCurveTo(0.25, -0.9, 0.2, -1.42 + br);
g.quadraticCurveTo(0, -1.5 + br, -0.2, -1.42 + br);
g.closePath();
g.fill();
g.beginPath();
g.arc(0.012, -1.6 + br, 0.105, 0, 6.283);
g.fill();
var a1 = 0.12 + (walk ? Math.sin(t * 5) * 0.2 : 0),
  a2 = 0.15 + wv * (2.4 + 0.34 * Math.sin(t * 3.1) + 0.1 * Math.sin(t * 5.3 + 0.7));
var sx1 = -0.18,
  sx2 = 0.18,
  sy = -1.38 + br;
var ex1 = sx1 - Math.sin(a1) * 0.3,
  ey1 = sy + Math.cos(a1) * 0.3;
var b2 = a2 - wv * 0.35 * Math.sin(t * 3.1 + 0.6);
var ex2 = sx2 + Math.sin(a2) * 0.3,
  ey2 = sy + Math.cos(a2) * 0.3,
  hx2 = ex2 + Math.sin(b2) * 0.28,
  hy2 = ey2 + Math.cos(b2) * 0.28;
var hx1 = ex1 - Math.sin(a1 * 0.6) * 0.27,
  hy1 = ey1 + Math.cos(a1 * 0.6) * 0.27;
g.lineWidth = 0.1;
g.beginPath();
g.moveTo(sx1, sy);
g.lineTo(ex1, ey1);
g.lineTo(hx1, hy1);
g.moveTo(sx2, sy);
g.lineTo(ex2, ey2);
g.lineTo(hx2, hy2);
g.stroke();
g.beginPath();
g.arc(hx2, hy2, 0.055, 0, 6.283);
g.fill();
g.strokeStyle = "#7e4a44";
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(-0.11, -1.47 + br);
g.lineTo(0.11, -1.47 + br);
g.stroke();
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(0.09, -1.46 + br);
g.quadraticCurveTo(0.28, -1.44 + Math.sin(t * 4) * 0.04, 0.42 + gu * 0.2, -1.4 + Math.sin(t * 5.3 + 1) * 0.07 * gu);
g.stroke();
g.strokeStyle = "rgba(185,160,175,0.3)";
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(-0.2, -1.4 + br);
g.quadraticCurveTo(-0.25, -0.9, -0.27 + fl * 0.3, -0.44);
g.stroke();
g.restore();
e.at(ox + 0.012, by - 1.75 + br);
