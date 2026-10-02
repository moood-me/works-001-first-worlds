const s = e.state,
  t = e.t;
const up = s.dog === "проснулся";
const br = Math.sin(t * 0.9) * 0.008 + Math.sin(t * 0.37) * 0.004;
const c = "#3e352d";
const wag = up ? Math.sin(t * 7) * 0.25 : Math.sin(t * 0.3) * 0.03;
g.fillStyle = "rgba(10,10,14,0.35)";
g.beginPath();
g.ellipse(0, 0, 0.4, 0.05, 0, 0, 7);
g.fill();
g.strokeStyle = c;
g.lineWidth = 0.06;
g.lineCap = "round";
g.beginPath();
if (up) {
  g.moveTo(0.3, -0.14);
  g.quadraticCurveTo(0.48, -0.2, 0.44 + wag * 0.3, -0.34);
} else {
  g.moveTo(0.3, -0.1);
  g.quadraticCurveTo(0.4, -0.01, 0.15, -0.02);
}
g.stroke();
g.fillStyle = c;
g.beginPath();
g.ellipse(0, -0.12, 0.33, 0.12 + br, 0, 0, 7);
g.fill();
g.fillStyle = "rgba(140,118,90,0.4)";
g.beginPath();
g.ellipse(0.04, -0.05, 0.2, 0.04, 0, 0, 7);
g.fill();
g.fillStyle = "rgba(255,190,115,0.12)";
g.beginPath();
g.ellipse(-0.08, -0.2, 0.2, 0.04, 0, 0, 7);
g.fill();
const hx = -0.33,
  hy = up ? -0.36 : -0.11;
g.fillStyle = c;
if (up) {
  g.beginPath();
  g.moveTo(-0.28, -0.18);
  g.lineTo(hx - 0.04, hy + 0.06);
  g.lineTo(hx + 0.1, hy + 0.02);
  g.lineTo(-0.12, -0.2);
  g.fill();
}
g.beginPath();
g.ellipse(hx, hy, 0.11, 0.085, up ? -0.15 : 0.25, 0, 7);
g.fill();
g.fillStyle = "#5a4c3e";
g.beginPath();
g.ellipse(hx - 0.11, hy + 0.025, 0.06, 0.038, 0, 0, 7);
g.fill();
g.fillStyle = c;
g.beginPath();
g.moveTo(hx - 0.01, hy - 0.06);
g.lineTo(hx + 0.04, hy - (up ? 0.17 : 0.1));
g.lineTo(hx + 0.09, hy - 0.04);
g.fill();
g.fillStyle = "#1a1614";
g.beginPath();
g.arc(hx - 0.165, hy + 0.015, 0.016, 0, 7);
g.fill();
e.at(hx, hy);
