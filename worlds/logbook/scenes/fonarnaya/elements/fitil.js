const st = e.state, t = e.t; if (st.fitil_present === false) return;
const fl = 1 + 0.05 * Math.sin(t * 7.3) + 0.035 * Math.sin(t * 12.7 + 1.3) + 0.06 * Math.sin(t * 1.9 + 0.4) * Math.sin(t * 0.53);
const L = Math.max(0, (st.lamp ?? 0.6) * (1 - 0.85 * (st.shutter || 0)) * fl);
const C = '#121011', sw = Math.sin(t * 0.7) * 0.03 + Math.sin(t * 0.23 + 1) * 0.02;
// the tail hangs over the edge of the sill, swinging slowly
g.strokeStyle = C; g.lineWidth = 0.035; g.lineCap = 'round';
g.beginPath(); g.moveTo(0.06, -0.02); g.quadraticCurveTo(0.13, 0.05, 0.1 + sw, 0.19); g.quadraticCurveTo(0.09 + sw * 1.4, 0.26, 0.12 + sw * 1.7, 0.3); g.stroke();
// back to us, looking out at the sea; breathing
const b = 1 + 0.012 * Math.sin(t * 1.6);
g.save(); g.scale(1, b);
g.fillStyle = C; g.beginPath(); g.moveTo(-0.11, 0); g.bezierCurveTo(-0.15, -0.1, -0.1, -0.2, -0.05, -0.22); g.lineTo(0.05, -0.22); g.bezierCurveTo(0.1, -0.2, 0.15, -0.1, 0.11, 0); g.closePath(); g.fill();
g.strokeStyle = `rgba(255,180,110,${0.5 * L})`; g.lineWidth = 0.012; g.beginPath(); g.moveTo(0.05, -0.215); g.bezierCurveTo(0.1, -0.2, 0.145, -0.1, 0.108, -0.01); g.stroke();
g.restore();
const hb = Math.sin(t * 0.5) * 0.004 + Math.sin(t * 0.13) * 0.006, hy = -0.26 * b + hb, tw = Math.sin(t * 1.7) * Math.sin(t * 0.23) > 0.85 ? 0.015 : 0;
g.fillStyle = C; g.beginPath(); g.ellipse(-0.01, hy, 0.065, 0.058, 0, 0, 7); g.fill();
g.beginPath(); g.moveTo(-0.068, hy - 0.01); g.lineTo(-0.062 - tw, hy - 0.095); g.lineTo(-0.027, hy - 0.048); g.closePath(); g.fill();
g.beginPath(); g.moveTo(0.012, hy - 0.048); g.lineTo(0.045, hy - 0.092); g.lineTo(0.052, hy - 0.012); g.closePath(); g.fill();
g.strokeStyle = `rgba(255,180,110,${0.5 * L})`; g.lineWidth = 0.01; g.beginPath(); g.arc(-0.01, hy, 0.062, -0.9, 0.7); g.stroke();
g.strokeStyle = 'rgba(170,190,230,0.22)'; g.beginPath(); g.arc(-0.01, hy, 0.063, -2.7, -1.7); g.stroke();
e.at(-0.01, hy - 0.08);
