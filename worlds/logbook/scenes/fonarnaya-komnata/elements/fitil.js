if (!e.state.fitil_present) return;
const C = '#100c09', lit = (e.state.lamp ?? 0.7) * (1 - 0.7 * (e.state.shutter || 0));
const br = Math.sin(e.t * 1.6) * 0.004;
const look = Math.max(0, Math.sin(e.t * 0.13 + 1) * 1.6 - 0.9);
g.fillStyle = C;
g.beginPath(); g.moveTo(-0.12, 0); g.bezierCurveTo(-0.15, -0.1, -0.1, -0.2 + br, -0.05, -0.22 + br); g.lineTo(0.05, -0.22 + br); g.bezierCurveTo(0.1, -0.2 + br, 0.15, -0.1, 0.12, 0); g.closePath(); g.fill();
const hx = 0.01 + look * 0.025;
g.beginPath(); g.ellipse(hx, -0.26 + br, 0.065, 0.055, 0, 0, 7); g.fill();
g.beginPath(); g.moveTo(hx - 0.06, -0.27 + br); g.lineTo(hx - 0.045, -0.335 + br); g.lineTo(hx - 0.015, -0.3 + br); g.fill();
g.beginPath(); g.moveTo(hx + 0.015, -0.3 + br); g.lineTo(hx + 0.05, -0.335 + br); g.lineTo(hx + 0.062, -0.27 + br); g.fill();
const tw = Math.sin(e.t * 0.8) * 0.03 + Math.sin(e.t * 2.3 + 1) * 0.012;
g.strokeStyle = C; g.lineWidth = 0.028; g.lineCap = 'round'; g.beginPath(); g.moveTo(0.08, -0.02); g.quadraticCurveTo(0.14, 0.02, 0.13, 0.12); g.quadraticCurveTo(0.12 + tw, 0.2, 0.15 + tw * 1.5, 0.24); g.stroke();
g.strokeStyle = `rgba(255,175,95,${0.15 + 0.35 * lit})`; g.lineWidth = 0.01; g.beginPath(); g.moveTo(0.05, -0.22 + br); g.bezierCurveTo(0.1, -0.2 + br, 0.15, -0.1, 0.12, 0); g.stroke();
g.beginPath(); g.arc(hx, -0.26 + br, 0.064, -0.9, 0.5); g.stroke();
if (look > 0.25) { g.fillStyle = `rgba(255,205,110,${Math.min(0.85, (look - 0.25) * 2) * (0.4 + 0.6 * lit)})`; g.beginPath(); g.ellipse(hx + 0.035, -0.265 + br, 0.009, 0.006, 0, 0, 7); g.fill(); }
e.at(hx, -0.3 + br);
