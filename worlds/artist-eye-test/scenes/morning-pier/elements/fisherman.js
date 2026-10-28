const t = e.t,
  B = e.state.bite ?? 0,
  L = e.state.lantern ?? 0;
g.lineCap = "round";
g.lineJoin = "round";
const br = Math.sin(t * 1.1) * 0.006 + Math.sin(t * 0.43) * 0.004;
const lean = B * 0.06;
const leg = (kx, ky, a, col) => {
  const ax = kx - Math.sin(a) * 0.4,
    ay = ky + Math.cos(a) * 0.4;
  g.strokeStyle = col;
  g.lineWidth = 0.12;
  g.beginPath();
  g.moveTo(0.12, -0.1);
  g.lineTo(kx, ky);
  g.lineTo(ax, ay);
  g.stroke();
  g.lineWidth = 0.09;
  g.beginPath();
  g.moveTo(ax + 0.02, ay + 0.02);
  g.lineTo(ax - 0.11, ay + 0.03);
  g.stroke();
};
leg(-0.24, -0.12, 0.12 + Math.sin(t * 0.9 + 2.2) * 0.14 + Math.sin(t * 0.53 + 1) * 0.05, "#1d1f22");
leg(-0.27, -0.08, 0.08 + Math.sin(t * 0.9) * 0.16 + Math.sin(t * 0.37) * 0.05, "#26282b");
const sx = -0.02 - lean,
  sy = -0.66 + br;
g.fillStyle = "#2b2d30";
g.beginPath();
g.moveTo(0.28, -0.03);
g.bezierCurveTo(0.35, -0.3, 0.27, -0.6, sx + 0.13, sy - 0.04);
g.quadraticCurveTo(sx - 0.03, sy - 0.07, sx - 0.11, sy + 0.06);
g.lineTo(-0.13, -0.2);
g.quadraticCurveTo(-0.1, -0.02, 0.06, 0.0);
g.closePath();
g.fill();
const hx = sx - 0.05,
  hy = sy - 0.14 + Math.sin(t * 0.3) * 0.005;
g.fillStyle = "#29292a";
g.beginPath();
g.arc(hx, hy, 0.095, 0, 7);
g.fill();
g.fillStyle = "#212224";
g.beginPath();
g.ellipse(hx + 0.01, hy - 0.055, 0.1, 0.055, 0, Math.PI, 0);
g.fill();
g.strokeStyle = "#212224";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(hx - 0.06, hy - 0.05);
g.lineTo(hx - 0.17, hy - 0.025);
g.stroke();
const sw = Math.sin(t * 0.7) * 0.015 + Math.sin(t * 1.3) * 0.008;
g.fillStyle = "#6b4536";
g.beginPath();
g.ellipse(sx + 0.04, sy - 0.01, 0.09, 0.035, -0.15, 0, 7);
g.fill();
g.beginPath();
g.moveTo(sx + 0.1, sy - 0.01);
g.quadraticCurveTo(sx + 0.2 + sw, sy + 0.08, sx + 0.17 + sw, sy + 0.2);
g.lineTo(sx + 0.13, sy + 0.19);
g.quadraticCurveTo(sx + 0.13, sy + 0.08, sx + 0.05, sy + 0.01);
g.fill();
const ex = -0.01,
  ey = -0.38,
  ax = -0.22,
  ay = -0.36 - B * 0.12;
g.strokeStyle = "#26282b";
g.lineWidth = 0.085;
g.beginPath();
g.moveTo(sx + 0.06, sy + 0.05);
g.quadraticCurveTo(ex + 0.03, ey, ex, ey);
g.lineTo(ax + 0.03, ay);
g.stroke();
g.strokeStyle = "rgba(236,222,204,0.22)";
g.lineWidth = 0.018;
g.beginPath();
g.moveTo(sx - 0.11, sy + 0.06);
g.lineTo(-0.13, -0.2);
g.stroke();
g.beginPath();
g.arc(hx, hy, 0.09, Math.PI * 0.75, Math.PI * 1.25);
g.stroke();
if (L > 0.01) {
  g.strokeStyle = "rgba(255,168,90," + 0.45 * L + ")";
  g.lineWidth = 0.025;
  g.beginPath();
  g.moveTo(0.29, -0.06);
  g.bezierCurveTo(0.34, -0.3, 0.26, -0.58, sx + 0.13, sy - 0.04);
  g.stroke();
  g.beginPath();
  g.arc(hx + 0.01, hy - 0.05, 0.095, -1.4, -0.2);
  g.stroke();
}
e.at(hx, hy - 0.12);
