const s = e.state,
  t = e.t;
const on = s.tape === "playing",
  ch = s.tape === "chewed";
e.at(0, -0.28);
if (on) e.light(0, -0.045, 0.12, "#ff5a3c", 0.6);
g.scale(1.3, 1.3);
g.strokeStyle = "#3a3a40";
g.lineWidth = 0.014;
g.beginPath();
g.moveTo(-0.12, -0.17);
g.lineTo(-0.1, -0.21);
g.lineTo(0.1, -0.21);
g.lineTo(0.12, -0.17);
g.stroke();
g.fillStyle = "#2a2a30";
g.fillRect(-0.22, -0.17, 0.44, 0.17);
g.fillStyle = "rgba(180,180,190,0.25)";
g.fillRect(-0.22, -0.17, 0.44, 0.01);
for (const sx of [-0.15, 0.15]) {
  const p = on ? 1 + 0.05 * Math.sin(t * 12.3 + sx * 9) * Math.sin(t * 1.7) : 1;
  g.fillStyle = "#141417";
  g.beginPath();
  g.arc(sx, -0.085, 0.055 * p, 0, 7);
  g.fill();
  g.strokeStyle = "rgba(140,140,150,0.45)";
  g.lineWidth = 0.004;
  g.beginPath();
  g.arc(sx, -0.085, 0.032, 0, 7);
  g.stroke();
}
g.fillStyle = "#4a4038";
g.fillRect(-0.075, -0.14, 0.15, 0.08);
for (const rx of [-0.04, 0.04]) {
  g.save();
  g.translate(rx, -0.1);
  g.rotate(on ? t * 3 : 0);
  g.strokeStyle = "#e8e0d0";
  g.lineWidth = 0.006;
  g.beginPath();
  for (let k = 0; k < 3; k++) {
    const a = k * 2.09;
    g.moveTo(0, 0);
    g.lineTo(Math.cos(a) * 0.017, Math.sin(a) * 0.017);
  }
  g.stroke();
  g.restore();
}
g.fillStyle = on ? "rgba(255,80,60,0.95)" : "rgba(90,30,25,0.8)";
g.beginPath();
g.arc(0, -0.035, 0.007, 0, 7);
g.fill();
if (ch) {
  g.strokeStyle = "rgba(80,52,34,0.9)";
  g.lineWidth = 0.005;
  g.beginPath();
  g.moveTo(0, -0.07);
  for (let k = 0; k < 14; k++) {
    g.quadraticCurveTo(0.02 + Math.sin(k * 1.7) * 0.08, -0.04 + k * 0.02, Math.sin(k * 2.3 + t * 0.5) * 0.06, k * 0.03);
  }
  g.stroke();
}
