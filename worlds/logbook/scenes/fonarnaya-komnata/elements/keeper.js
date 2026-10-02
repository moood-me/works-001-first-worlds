if (!e.state.keeper_present) return;
const pose = e.state.keeper_pose || 'window';
const b = Math.sin(e.t * 1.1) * 0.006 + Math.sin(e.t * 0.37 + 1) * 0.004;
const lit = (e.state.lamp ?? 0.7) * (1 - 0.7 * (e.state.shutter || 0));
const C = '#15100c', rim = `rgba(255,180,100,${0.12 + 0.3 * lit})`;
if (pose !== 'lens') {
  g.fillStyle = C;
  g.beginPath(); g.moveTo(-0.2, 0); g.lineTo(-0.17, -0.88); g.lineTo(0.17, -0.88); g.lineTo(0.2, 0); g.lineTo(0.035, 0); g.lineTo(0.015, -0.62); g.lineTo(-0.015, -0.62); g.lineTo(-0.035, 0); g.closePath(); g.fill();
  g.beginPath(); g.moveTo(-0.2, -0.82); g.quadraticCurveTo(-0.28, -1.1, -0.25, -1.36 + b); g.quadraticCurveTo(-0.2, -1.47 + b, -0.06, -1.49 + b); g.lineTo(0.06, -1.49 + b); g.quadraticCurveTo(0.21, -1.47 + b, 0.25, -1.36 + b); g.quadraticCurveTo(0.28, -1.1, 0.2, -0.82); g.closePath(); g.fill();
  for (const s of [-1, 1]) { g.beginPath(); g.ellipse(s * 0.255, -1.08, 0.05, 0.14, -s * 0.25, 0, 7); g.fill(); }
  g.beginPath(); g.ellipse(0, -1.6 + b, 0.095, 0.115, 0, 0, 7); g.fill();
  g.beginPath(); g.ellipse(0, -1.685 + b, 0.115, 0.045, 0, 0, 7); g.fill();
  g.strokeStyle = `rgba(160,150,140,${0.2 + 0.25 * lit})`; g.lineWidth = 0.01; g.beginPath(); g.moveTo(-0.08, -1.63 + b); g.quadraticCurveTo(0, -1.6 + b, 0.08, -1.63 + b); g.stroke();
  g.fillStyle = `rgba(150,105,75,${0.25 + 0.35 * lit})`; g.beginPath(); g.ellipse(0.03, -0.96, 0.06, 0.035, 0.1, 0, 7); g.fill();
  g.strokeStyle = rim; g.lineWidth = 0.024; g.beginPath(); g.moveTo(0.06, -1.49 + b); g.quadraticCurveTo(0.21, -1.47 + b, 0.25, -1.36 + b); g.quadraticCurveTo(0.31, -1.1, 0.24, -0.95); g.stroke();
  g.beginPath(); g.arc(0, -1.6 + b, 0.095, -1.0, 0.7); g.stroke();
  g.beginPath(); g.moveTo(0.17, -0.85); g.lineTo(0.2, 0); g.stroke();
  e.at(0, -1.64 + b);
} else {
  const ox = 0.3; g.save(); g.translate(ox, 0);
  g.fillStyle = C;
  g.beginPath(); g.moveTo(-0.14, 0); g.lineTo(-0.1, -0.86); g.lineTo(0.12, -0.86); g.lineTo(0.2, 0); g.lineTo(0.09, 0); g.lineTo(0.02, -0.55); g.lineTo(-0.03, 0); g.closePath(); g.fill();
  g.beginPath(); g.moveTo(-0.13, -0.84); g.quadraticCurveTo(-0.18, -1.15, -0.1, -1.44 + b); g.quadraticCurveTo(0.02, -1.5 + b, 0.12, -1.42 + b); g.quadraticCurveTo(0.17, -1.1, 0.13, -0.84); g.closePath(); g.fill();
  g.beginPath(); g.ellipse(0.06, -1.59 + b, 0.095, 0.115, 0.15, 0, 7); g.fill();
  g.beginPath(); g.ellipse(0.05, -1.67 + b, 0.11, 0.045, 0, 0, 7); g.fill(); g.fillRect(0.08, -1.665 + b, 0.11, 0.018);
  g.fillStyle = `rgba(170,150,130,${0.25 + 0.35 * lit})`; g.beginPath(); g.moveTo(0.08, -1.56 + b); g.quadraticCurveTo(0.17, -1.53 + b, 0.13, -1.47 + b); g.quadraticCurveTo(0.09, -1.48 + b, 0.07, -1.52 + b); g.fill();
  const rx = 0.5 + 0.05 * Math.sin(e.t * 1.9), ry = -1.5 + 0.05 * Math.cos(e.t * 1.9) + 0.03 * Math.sin(e.t * 0.5);
  g.strokeStyle = C; g.lineCap = 'round'; g.lineWidth = 0.085; g.beginPath(); g.moveTo(0.06, -1.38 + b); g.quadraticCurveTo(0.3, -1.3, rx, ry); g.stroke();
  g.lineWidth = 0.08; g.beginPath(); g.moveTo(-0.06, -1.38 + b); g.quadraticCurveTo(-0.1, -1.1, -0.04, -0.92); g.stroke();
  g.fillStyle = `rgba(215,200,175,${0.55 + 0.3 * lit})`; g.beginPath(); g.ellipse(rx + 0.03, ry, 0.05, 0.04, 0.4, 0, 7); g.fill();
  g.strokeStyle = rim; g.lineWidth = 0.022; g.beginPath(); g.moveTo(0.12, -1.42 + b); g.quadraticCurveTo(0.17, -1.1, 0.13, -0.84); g.stroke();
  g.beginPath(); g.arc(0.06, -1.59 + b, 0.095, -0.8, 0.9); g.stroke();
  g.restore();
  e.at(ox + 0.06, -1.62 + b);
}
