var s = e.state.girl || "sits",
  t = e.t;
if (s == "gone") return;
var br = Math.sin(t * 1.1) * 0.008 + Math.sin(t * 0.43) * 0.004,
  C = "#1d1a22",
  S = "#6b2f3a";
g.fillStyle = C;
g.strokeStyle = C;
g.lineCap = "round";
if (s == "sits") {
  g.beginPath();
  g.ellipse(0, -0.03, 0.3, 0.06, 0, 0, 6.283);
  g.fill();
  g.beginPath();
  g.moveTo(-0.25, 0);
  g.quadraticCurveTo(-0.28, -0.35, -0.18, -0.6 + br);
  g.quadraticCurveTo(0, -0.68 + br, 0.18, -0.6 + br);
  g.quadraticCurveTo(0.28, -0.35, 0.25, 0);
  g.closePath();
  g.fill();
  g.lineWidth = 0.07;
  g.beginPath();
  g.moveTo(-0.18, -0.55 + br);
  g.quadraticCurveTo(-0.3, -0.3, -0.34, -0.02);
  g.moveTo(0.18, -0.55 + br);
  g.quadraticCurveTo(0.3, -0.3, 0.34, -0.02);
  g.stroke();
  var hx = 0.035 + Math.sin(t * 0.21) * 0.015 + Math.sin(t * 0.53) * 0.006,
    hy = -0.79 + br;
} else {
  var sw = Math.sin(t * 0.5) * 0.01;
  g.lineWidth = 0.1;
  g.beginPath();
  g.moveTo(-0.07, -0.8);
  g.lineTo(-0.09, 0);
  g.moveTo(0.07, -0.8);
  g.lineTo(0.09, 0);
  g.stroke();
  g.beginPath();
  g.moveTo(-0.24, -0.72);
  g.lineTo(0.24, -0.72);
  g.quadraticCurveTo(0.22, -1.1, 0.17 + sw, -1.4 + br);
  g.quadraticCurveTo(0, -1.46 + br, -0.17 + sw, -1.4 + br);
  g.quadraticCurveTo(-0.22, -1.1, -0.24, -0.72);
  g.closePath();
  g.fill();
  g.lineWidth = 0.07;
  g.beginPath();
  g.moveTo(-0.17, -1.35 + br);
  g.quadraticCurveTo(-0.24, -1.15, -0.17, -0.98);
  g.moveTo(0.17, -1.35 + br);
  g.quadraticCurveTo(0.24, -1.15, 0.17, -0.98);
  g.stroke();
  var hx = sw + 0.02 + Math.sin(t * 0.19) * 0.012,
    hy = -1.57 + br;
}
g.beginPath();
g.ellipse(hx, hy, 0.1, 0.115, 0.15, 0, 6.283);
g.fill();
g.beginPath();
g.arc(hx - 0.01, hy - 0.1, 0.05, 0, 6.283);
g.fill();
g.beginPath();
g.moveTo(hx - 0.1, hy);
g.quadraticCurveTo(hx - 0.13, hy + 0.14, hx - 0.08, hy + 0.19);
g.lineTo(hx + 0.08, hy + 0.19);
g.quadraticCurveTo(hx + 0.13, hy + 0.12, hx + 0.1, hy);
g.closePath();
g.fill();
g.strokeStyle = "rgba(150,156,200,0.35)";
g.lineWidth = 0.01;
g.beginPath();
g.arc(hx, hy, 0.1, -1.1, 0.5);
g.stroke();
g.fillStyle = S;
g.beginPath();
g.ellipse(hx - 0.01, hy + 0.17, 0.14, 0.045, 0, 0, 6.283);
g.fill();
var f1 = Math.sin(t * 1.7) * 0.02 + Math.sin(t * 0.6) * 0.015,
  f2 = Math.sin(t * 1.3 + 1) * 0.03;
g.beginPath();
g.moveTo(-0.07, hy + 0.18);
g.quadraticCurveTo(-0.1 + f1, hy + 0.32, -0.09 + f2, hy + 0.45);
g.lineTo(-0.02 + f2, hy + 0.43);
g.quadraticCurveTo(-0.03 + f1, hy + 0.3, 0.02, hy + 0.2);
g.closePath();
g.fill();
e.at(hx, hy - 0.05);
