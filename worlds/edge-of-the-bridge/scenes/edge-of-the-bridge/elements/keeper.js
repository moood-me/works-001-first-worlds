const s = e.state.keeper,
  n = e.state.night ?? 0.3,
  t = e.t,
  up = e.state.gaze === "far";
if (s === "gone") return;
const dark = n > 0.6 ? "#13121c" : "#1c1a28",
  cloak = n > 0.6 ? "#1a1826" : "#26223a",
  scarf = "#7a4636";
g.lineCap = "round";
if (s === "stand") {
  const br = Math.sin(t * 1.3) * 0.008 + Math.sin(t * 0.53) * 0.005;
  g.fillStyle = dark;
  g.beginPath();
  g.moveTo(-0.14, 0);
  g.lineTo(-0.06, -0.85);
  g.lineTo(0.06, -0.85);
  g.lineTo(0.13, 0);
  g.lineTo(0.04, 0);
  g.lineTo(0, -0.6);
  g.lineTo(-0.05, 0);
  g.closePath();
  g.fill();
  g.fillStyle = cloak;
  g.beginPath();
  g.moveTo(-0.22 + Math.sin(t * 0.9) * 0.02, -0.45);
  g.quadraticCurveTo(-0.25, -1.1, -0.12, -1.42);
  g.lineTo(0.14, -1.44);
  g.quadraticCurveTo(0.22, -1.0, 0.24 + Math.sin(t * 0.7 + 1) * 0.03, -0.42);
  g.closePath();
  g.fill();
  g.strokeStyle = cloak;
  g.lineWidth = 0.08;
  g.beginPath();
  g.moveTo(0.1, -1.36);
  g.quadraticCurveTo(0.34, -1.48, 0.3, -1.86);
  g.stroke();
  g.fillStyle = dark;
  g.beginPath();
  g.ellipse(0.03, -1.56 + br, 0.1, 0.12, 0, 0, 6.283);
  g.fill();
  g.fillStyle = scarf;
  g.globalAlpha = 0.8;
  g.beginPath();
  g.moveTo(-0.1, -1.44);
  g.lineTo(0.13, -1.44);
  g.lineTo(0.1, -1.37);
  g.lineTo(-0.22 - Math.sin(t * 1.1) * 0.05, -1.26);
  g.closePath();
  g.fill();
  g.globalAlpha = 1;
  e.at(0.03, -1.72);
  return;
}
const br = Math.sin(t * 1.25) * 0.01 + Math.sin(t * 0.47) * 0.006;
const l1 = Math.sin(t * 0.8) * 0.12 + Math.sin(t * 0.31) * 0.05,
  l2 = Math.sin(t * 0.8 + 2.1) * 0.1 + Math.sin(t * 0.37 + 1) * 0.05;
g.strokeStyle = dark;
g.lineWidth = 0.11;
[
  [0, l1],
  [0.04, l2],
].forEach((q) => {
  const kx = 0.32 + q[0],
    ky = -0.03;
  g.beginPath();
  g.moveTo(0.02, -0.08);
  g.lineTo(kx, ky);
  g.lineTo(kx + Math.sin(q[1]) * 0.42, ky + Math.cos(q[1]) * 0.42);
  g.stroke();
});
g.fillStyle = cloak;
g.beginPath();
g.moveTo(-0.22, 0.02);
g.quadraticCurveTo(-0.27, -0.45, -0.05, -0.66 + br);
g.quadraticCurveTo(0.12, -0.72 + br, 0.2, -0.55 + br);
g.quadraticCurveTo(0.25, -0.25, 0.12, 0.02);
g.closePath();
g.fill();
g.strokeStyle = cloak;
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(0.12, -0.5 + br);
g.quadraticCurveTo(0.3, -0.3, 0.31, -0.08);
g.stroke();
const hx0 = up ? 0.14 : 0.18,
  hy0 = up ? -0.8 : -0.7,
  ha = up ? -0.2 : 0.45;
g.fillStyle = dark;
g.beginPath();
g.ellipse(hx0, hy0 + br, 0.085, 0.1, ha, 0, 6.283);
g.fill();
g.fillStyle = cloak;
g.beginPath();
g.ellipse(hx0 - 0.04, hy0 - 0.02 + br, 0.1, 0.11, ha, Math.PI * 0.55, Math.PI * 1.9);
g.fill();
g.fillStyle = scarf;
g.globalAlpha = 0.8;
g.beginPath();
g.moveTo(0.0, -0.62 + br);
g.lineTo(0.18, -0.6 + br);
g.lineTo(0.12, -0.54 + br);
g.quadraticCurveTo(
  -0.1,
  -0.5,
  -0.3 - Math.sin(t * 0.9) * 0.05 - Math.sin(t * 2.3) * 0.02,
  -0.42 + Math.sin(t * 1.3) * 0.02,
);
g.closePath();
g.fill();
g.globalAlpha = 1;
g.strokeStyle = "rgba(205,195,220," + 0.3 * (1 - n * 0.5) + ")";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-0.24, -0.1);
g.quadraticCurveTo(-0.27, -0.45, -0.05, -0.66 + br);
g.stroke();
e.at(hx0, hy0 - 0.15 + br);
