const s = e.state,
  t = e.t,
  d = s.dusk || 0,
  play = s.tape === "играет";
const beat = play ? Math.max(0, Math.sin((t * Math.PI * 92) / 60)) ** 3 : 0;
const nod = beat * 0.025,
  br = Math.sin(t * 1.2) * 0.006 + Math.sin(t * 0.43) * 0.004;
const C = "#22253a";
g.lineCap = "round";
g.lineJoin = "round";
g.strokeStyle = C;
g.lineWidth = 0.15;
g.beginPath();
g.moveTo(-0.12, -0.95);
g.lineTo(-0.3, -0.8);
g.lineTo(-0.26, -0.55);
g.moveTo(0.12, -0.95);
g.lineTo(0.3, -0.8);
g.lineTo(0.26, -0.55);
g.stroke();
g.strokeStyle = "rgba(235,235,235,0.75)";
g.lineWidth = 0.012;
g.beginPath();
for (const o of [0, 0.018, 0.036]) {
  g.moveTo(-0.38 + o, -0.8);
  g.lineTo(-0.34 + o, -0.56);
  g.moveTo(0.38 - o, -0.8);
  g.lineTo(0.34 - o, -0.56);
}
g.stroke();
g.fillStyle = "#ddd8cf";
g.beginPath();
g.ellipse(-0.27, -0.52, 0.08, 0.04, 0, 0, 7);
g.ellipse(0.27, -0.52, 0.08, 0.04, 0, 0, 7);
g.fill();
g.fillStyle = C;
g.beginPath();
g.moveTo(-0.2, -0.92);
g.quadraticCurveTo(-0.27, -1.15, -0.26, -1.36 + br + nod);
g.quadraticCurveTo(0, -1.44 + br + nod, 0.26, -1.36 + br + nod);
g.quadraticCurveTo(0.27, -1.15, 0.2, -0.92);
g.closePath();
g.fill();
g.strokeStyle = "rgba(200,200,200,0.4)";
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(0, -1.4 + br + nod);
g.lineTo(0, -0.95);
g.stroke();
const scratch = !play;
g.strokeStyle = C;
g.lineWidth = 0.11;
g.beginPath();
g.moveTo(-0.23, -1.32 + br + nod);
g.lineTo(-0.31, -0.88);
g.lineTo(-0.06, -0.8);
g.moveTo(0.23, -1.32 + br + nod);
if (scratch) {
  g.lineTo(0.36, -1.52);
  g.lineTo(0.1, -1.6 + Math.sin(t * 9) * 0.015);
} else {
  g.lineTo(0.31, -0.88);
  g.lineTo(0.06, -0.8);
}
g.stroke();
g.strokeStyle = "rgba(235,235,235,0.75)";
g.lineWidth = 0.01;
g.beginPath();
for (const o of [0, 0.018, 0.036]) {
  g.moveTo(-0.29 - o, -1.32 + br + nod);
  g.lineTo(-0.37 - o, -0.9);
  if (!scratch) {
    g.moveTo(0.29 + o, -1.32 + br + nod);
    g.lineTo(0.37 + o, -0.9);
  }
}
g.stroke();
g.fillStyle = "#b08c7a";
g.beginPath();
g.arc(-0.05, -0.79, 0.04, 0, 7);
g.fill();
if (!scratch) {
  g.beginPath();
  g.arc(0.05, -0.79, 0.04, 0, 7);
  g.fill();
  g.fillStyle = "#d6c48a";
  g.fillRect(-0.03, -0.9, 0.07, 0.1);
} else {
  g.beginPath();
  g.arc(0.1, -1.6, 0.04, 0, 7);
  g.fill();
}
const hy = -1.5 + br + nod;
g.fillStyle = "#b08c7a";
g.beginPath();
g.arc(0, hy, 0.11, 0, 7);
g.fill();
g.beginPath();
g.arc(-0.11, hy + 0.01, 0.025, 0, 7);
g.arc(0.11, hy + 0.01, 0.025, 0, 7);
g.fill();
g.fillStyle = "rgba(60,50,50,0.45)";
g.beginPath();
g.arc(0, hy, 0.112, Math.PI * 1.05, Math.PI * 1.95);
g.fill();
g.strokeStyle = "rgba(255,170,110," + 0.35 * (1 - d) + ")";
g.lineWidth = 0.02;
g.beginPath();
g.arc(0, hy, 0.11, Math.PI * 0.7, Math.PI * 1.3);
g.moveTo(-0.26, -1.34);
g.quadraticCurveTo(-0.27, -1.15, -0.2, -0.93);
g.stroke();
e.at(0, -1.62);
