const L = e.state.lantern ?? 1,
  B = e.state.bite ?? 0,
  t = e.t;
const br = Math.sin(t * 1.05) * 0.009 + Math.sin(t * 0.37) * 0.004;
const dk = "#0d0c10",
  dk2 = "#09080b";
g.lineCap = "round";
g.lineJoin = "round";
// bucket
g.fillStyle = "#121014";
g.beginPath();
g.moveTo(0.3, -0.26);
g.lineTo(0.54, -0.26);
g.lineTo(0.51, 0);
g.lineTo(0.33, 0);
g.closePath();
g.fill();
g.strokeStyle = "rgba(150,195,255," + 0.35 * L + ")";
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(0.54, -0.26);
g.lineTo(0.51, 0);
g.stroke();
g.strokeStyle = "#121014";
g.lineWidth = 0.012;
g.beginPath();
g.arc(0.42, -0.26, 0.11, Math.PI, 0);
g.stroke();
// legs dangling over the edge, out of step
const legs = [
  [0.06 + Math.sin(t * 0.47 + 1.7) * 0.13 + Math.sin(t * 0.21) * 0.04, dk2, 0.03],
  [0.14 + Math.sin(t * 0.61) * 0.14 + Math.sin(t * 0.29 + 2) * 0.04, dk, 0],
];
const leg = (a, c, o) => {
  const kx = -0.4 + o,
    ky = -0.03;
  g.strokeStyle = c;
  g.lineWidth = 0.13;
  g.beginPath();
  g.moveTo(-0.04, -0.06);
  g.lineTo(kx, ky);
  g.stroke();
  const sx = kx - Math.sin(a) * 0.42,
    sy = ky + Math.cos(a) * 0.42;
  g.lineWidth = 0.1;
  g.beginPath();
  g.moveTo(kx, ky);
  g.lineTo(sx, sy);
  g.stroke();
  g.fillStyle = c;
  g.beginPath();
  g.ellipse(sx - 0.06, sy + 0.03, 0.11, 0.055, -a * 0.5, 0, 7);
  g.fill();
};
leg(...legs[0]);
// torso, hunched
g.fillStyle = dk;
g.beginPath();
g.moveTo(0.15, 0.03);
g.quadraticCurveTo(0.22, -0.3, 0.05, -0.55 + br);
g.quadraticCurveTo(-0.07, -0.63 + br, -0.17, -0.52 + br);
g.quadraticCurveTo(-0.27, -0.3, -0.2, 0.0);
g.closePath();
g.fill();
// head with knit cap
const hx = -0.16 + Math.sin(t * 0.13) * 0.01,
  hy = -0.69 + br;
g.beginPath();
g.arc(hx, hy, 0.095, 0, 7);
g.fill();
g.beginPath();
g.ellipse(hx + 0.01, hy - 0.04, 0.11, 0.1, 0, Math.PI, 0);
g.fill();
g.fillRect(hx - 0.1, hy - 0.055, 0.22, 0.04);
g.beginPath();
g.arc(hx + 0.03, hy - 0.15, 0.03, 0, 7);
g.fill();
leg(...legs[1]);
// rod
const bx = -0.06,
  by = -0.1;
const dx = -0.83,
  dy = -0.56,
  R = 2.7;
const tb = Math.sin(t * 0.8) * 0.02 + Math.sin(t * 1.9) * 0.008;
const tx = bx + dx * R + B * 0.25,
  ty = by + dy * R + 0.12 + B * 0.7 + tb;
const cx = bx + dx * R * 0.55,
  cy = by + dy * R * 0.55 + 0.02 + B * 0.12;
g.strokeStyle = "#17141a";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(bx, by);
g.lineTo(bx + dx * 0.5, by + dy * 0.5);
g.stroke();
g.lineWidth = 0.018;
g.beginPath();
g.moveTo(bx + dx * 0.5, by + dy * 0.5);
g.quadraticCurveTo(cx, cy, tx, ty);
g.stroke();
// line and float
const fx = -2.85 + Math.sin(t * 0.09) * 0.05,
  fy = 0.55 - 0.035 + Math.sin(t * 1.3) * 0.008 + Math.sin(t * 0.71) * 0.006 + B * 0.07;
g.strokeStyle = "rgba(200,212,228,0.32)";
g.lineWidth = Math.max(e.px * 0.8, 0.006);
g.beginPath();
g.moveTo(tx, ty);
g.quadraticCurveTo(tx - 0.1, (ty + fy) * 0.5 + 0.15 * (1 - B), fx, fy);
g.stroke();
for (let k = 0; k < 3; k++) {
  const p = (t * 0.09 + k / 3 + B * 0.3) % 1;
  const rr = 0.05 + p * 0.55;
  g.strokeStyle = "rgba(190,205,222," + (1 - p) * 0.22 * (0.5 + B) + ")";
  g.lineWidth = 0.012;
  g.beginPath();
  g.ellipse(fx, 0.55, rr, rr * 0.12, 0, 0, 7);
  g.stroke();
}
g.globalAlpha = 1 - B * 0.85;
g.fillStyle = "#9a4a36";
g.beginPath();
g.ellipse(fx, fy - 0.02, 0.025, 0.04, 0, 0, 7);
g.fill();
g.fillStyle = "#e8e2d4";
g.fillRect(fx - 0.006, fy - 0.1, 0.012, 0.05);
g.globalAlpha = 1;
// arms holding the rod
const hnx = -0.34,
  hny = -0.31 + br * 0.5;
g.strokeStyle = dk;
g.lineWidth = 0.085;
g.beginPath();
g.moveTo(-0.02, -0.48 + br);
g.quadraticCurveTo(-0.08, -0.26, hnx, hny);
g.stroke();
g.fillStyle = "#1a1619";
g.beginPath();
g.arc(hnx, hny, 0.04, 0, 7);
g.fill();
g.beginPath();
g.arc(-0.14, -0.2, 0.038, 0, 7);
g.fill();
// cold blue rim from the lantern behind-right, cool moon rim on the left
g.strokeStyle = "rgba(150,195,255," + 0.5 * L + ")";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(0.15, 0.0);
g.quadraticCurveTo(0.21, -0.3, 0.05, -0.55 + br);
g.stroke();
g.beginPath();
g.arc(hx, hy - 0.03, 0.11, -1.2, 0.4);
g.stroke();
g.strokeStyle = "rgba(170,190,215,0.18)";
g.lineWidth = 0.018;
g.beginPath();
g.arc(hx, hy, 0.1, 2.4, 3.6);
g.stroke();
e.at(hx, hy - 0.12);
