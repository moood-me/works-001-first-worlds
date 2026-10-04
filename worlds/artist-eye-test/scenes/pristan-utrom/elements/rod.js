const B = e.state.bite ?? 0,
  t = e.t;
g.lineCap = "round";
const tw = B > 0.02 ? Math.sin(t * 7.3) * 0.02 * B + Math.sin(t * 11.1) * 0.01 * B : 0;
const bx = 1.05,
  by = -0.02 - tw * 0.5;
const rx = 0.42,
  ry = -0.31;
const dx = rx - bx,
  dy = ry - by,
  dl = Math.hypot(dx, dy);
const ux = dx / dl,
  uy = dy / dl,
  R = 2.7;
const tb = Math.sin(t * 0.8) * 0.012 + Math.sin(t * 1.9) * 0.005;
const tx = bx + ux * R + B * 0.15,
  ty = by + uy * R + 0.1 + B * 0.55 + tb + tw;
const cx = bx + ux * R * 0.6,
  cy = by + uy * R * 0.6 + 0.04 + B * 0.12;
g.strokeStyle = "#2e2622";
g.lineWidth = 0.034;
g.beginPath();
g.moveTo(bx, by);
g.lineTo(bx + ux * 0.6, by + uy * 0.6);
g.stroke();
g.strokeStyle = "#4a3a2e";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(bx + ux * 0.6, by + uy * 0.6);
g.quadraticCurveTo(cx, cy, tx, ty);
g.stroke();
g.strokeStyle = "rgba(236,222,204,0.35)";
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(bx + ux * 0.6, by + uy * 0.6 - 0.008);
g.quadraticCurveTo(cx, cy - 0.008, tx, ty);
g.stroke();
const kx = bx + ux * 0.22,
  ky = by + uy * 0.22;
g.fillStyle = "#1f1c1c";
g.beginPath();
g.arc(kx + 0.02, ky + 0.05, 0.045, 0, 7);
g.fill();
g.fillStyle = "rgba(220,214,206,0.4)";
g.beginPath();
g.arc(kx + 0.01, ky + 0.04, 0.015, 0, 7);
g.fill();
const fx = -1.95 + Math.sin(t * 0.09) * 0.05,
  fy = 0.55 - 0.03 + Math.sin(t * 1.3) * 0.007 + Math.sin(t * 0.71) * 0.005 + B * 0.07;
g.strokeStyle = "rgba(70,76,84,0.45)";
g.lineWidth = Math.max(e.px * 0.8, 0.006);
g.beginPath();
g.moveTo(tx, ty);
g.quadraticCurveTo(tx - 0.15, (ty + fy) * 0.5 + 0.12 * (1 - B), fx, fy);
g.stroke();
for (let k = 0; k < 3; k++) {
  const p = (t * 0.08 + k / 3 + B * 0.3) % 1;
  const rr = 0.05 + p * 0.6;
  g.strokeStyle = "rgba(70,80,92," + (1 - p) * 0.25 * (0.5 + B) + ")";
  g.lineWidth = 0.012;
  g.beginPath();
  g.ellipse(fx, 0.55, rr, rr * 0.12, 0, 0, 7);
  g.stroke();
}
g.globalAlpha = 1 - B * 0.85;
g.fillStyle = "#a5503a";
g.beginPath();
g.ellipse(fx, fy - 0.02, 0.026, 0.04, 0, 0, 7);
g.fill();
g.fillStyle = "#f0ebe0";
g.fillRect(fx - 0.006, fy - 0.1, 0.012, 0.05);
g.globalAlpha = 1;
