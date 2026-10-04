const p = e.state.ducks ?? 0;
if (p <= 0.001) return;
const t = e.t;
g.lineCap = "round";
g.lineJoin = "round";
const sm = (a, b, x) => {
  x = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return x * x * (3 - 2 * x);
};
const F = [
  [0, 0],
  [1.5, -0.6],
  [3.0, -1.1],
  [4.4, -1.6],
  [1.6, 0.55],
  [3.2, 1.0],
  [5.8, -2.0],
];
const S = [-4.4, -5.4, -8.3, -3.6, -11.0, -12.0, -13.1];
F.forEach((o, i) => {
  const d0 = i * 0.035,
    u = Math.min(1, Math.max(0, (p - d0) / 0.72));
  if (u < 1) {
    const sx = 46 + o[0] * 1.3,
      sy = -7.5 + o[1] * 0.55;
    const e1 = 1 - Math.pow(1 - u, 1.4);
    const x = sx + (S[i] - sx) * e1 + Math.sin(t * 0.31 + i * 2.1) * 0.25 * (1 - u);
    const y =
      sy * (1 - sm(0.35, 1, u)) +
      (Math.sin(t * 0.9 + i * 1.3) * 0.12 + Math.sin(t * 0.41 + i) * 0.08) * (1 - u) -
      0.08;
    const gl = sm(0.6, 0.85, u),
      fl = sm(0.9, 1, u);
    const f =
      Math.sin(t * 8.5 + i * 1.9) * (1 - gl) +
      gl * (0.6 + 0.12 * Math.sin(t * 2.7 + i)) * (1 - fl) +
      fl * Math.sin(t * 13 + i) * 0.9;
    g.save();
    g.translate(x, y);
    g.rotate(fl * 0.3);
    g.fillStyle = "#45464b";
    g.beginPath();
    g.moveTo(-0.12, -0.03);
    g.quadraticCurveTo(-0.04, -0.22 * f - 0.03, 0.1, -0.4 * f);
    g.lineTo(0.04, -0.02);
    g.closePath();
    g.fill();
    g.fillStyle = "#3a3b40";
    g.beginPath();
    g.ellipse(0, 0, 0.26, 0.07, -0.05, 0, 7);
    g.fill();
    g.beginPath();
    g.moveTo(0.22, -0.02);
    g.lineTo(0.36, 0.01);
    g.lineTo(0.22, 0.05);
    g.fill();
    g.strokeStyle = "#3a3b40";
    g.lineWidth = 0.06;
    g.beginPath();
    g.moveTo(-0.2, -0.01);
    g.lineTo(-0.4, -0.05);
    g.stroke();
    g.beginPath();
    g.arc(-0.42, -0.05, 0.055, 0, 7);
    g.fill();
    g.lineWidth = 0.03;
    g.beginPath();
    g.moveTo(-0.46, -0.04);
    g.lineTo(-0.53, -0.025);
    g.stroke();
    if (gl > 0.3) {
      g.globalAlpha = gl;
      g.strokeStyle = "#4a4038";
      g.lineWidth = 0.025;
      g.beginPath();
      g.moveTo(0.02, 0.05);
      g.lineTo(-0.1 - fl * 0.05, 0.15);
      g.stroke();
      g.globalAlpha = 1;
    }
    g.fillStyle = "#303136";
    g.beginPath();
    g.moveTo(-0.1, -0.02);
    g.quadraticCurveTo(-0.02, -0.3 * f, 0.16, -0.48 * f + 0.02);
    g.lineTo(0.05, -0.01);
    g.closePath();
    g.fill();
    g.restore();
    return;
  }
  const tl = (p - d0 - 0.72) * 32,
    w = Math.min(1, tl / 6);
  const x = S[i] - 0.5 * (1 - Math.exp(-tl * 1.2)) + Math.sin(t * 0.05 + i * 1.7) * 0.4 * w;
  const mv = Math.max(-1, Math.min(1, Math.cos(t * 0.05 + i * 1.7) * 2.5));
  let sc = 1 - w + -mv * w;
  sc = (sc >= 0 ? 1 : -1) * Math.max(0.35, Math.abs(sc));
  const bob = Math.sin(t * 0.9 + i * 1.1) * 0.008;
  const dip = tl > 4 ? Math.pow(Math.max(0, Math.sin(t * 0.11 + i * 3.1)), 10) : 0;
  const pr = (t * 0.12 + i * 0.37) % 1,
    rr = 0.25 + pr * 1.1;
  g.strokeStyle = "rgba(222,226,226," + 0.22 * (1 - pr) + ")";
  g.lineWidth = 0.015;
  g.beginPath();
  g.ellipse(x, 0.01, rr, rr * 0.1, 0, 0, 7);
  g.stroke();
  if (tl < 2.4) {
    const a = Math.max(0, 1 - tl / 2.4);
    g.strokeStyle = "rgba(236,234,228," + 0.6 * a + ")";
    g.lineWidth = 0.02;
    for (let k = 0; k < 6; k++) {
      const an = -Math.PI * (0.15 + k * 0.14),
        r0 = 0.1 + tl * 0.35;
      g.beginPath();
      g.moveTo(x + 0.2 + Math.cos(an) * r0, Math.sin(an) * r0 * 0.8);
      g.lineTo(x + 0.2 + Math.cos(an) * (r0 + 0.12), Math.sin(an) * (r0 + 0.12) * 0.8);
      g.stroke();
    }
    g.beginPath();
    g.ellipse(x + 0.3, 0.01, 0.3 + tl * 0.8, (0.3 + tl * 0.8) * 0.1, 0, 0, 7);
    g.stroke();
    g.globalAlpha = a * 0.5;
    g.beginPath();
    g.moveTo(x + 0.3, 0.005);
    g.lineTo(x + 1.2, 0.005);
    g.stroke();
    g.globalAlpha = 1;
  }
  g.save();
  g.translate(x, bob);
  g.scale(sc, 1);
  g.beginPath();
  g.rect(-1, -1, 2, 1);
  g.clip();
  g.rotate(-dip * 0.7);
  g.fillStyle = "#3d3b37";
  g.beginPath();
  g.moveTo(-0.2, 0.01);
  g.quadraticCurveTo(-0.25, -0.13, -0.06, -0.14);
  g.quadraticCurveTo(0.17, -0.15, 0.31, -0.12);
  g.lineTo(0.25, -0.05);
  g.quadraticCurveTo(0.2, 0.015, 0.04, 0.015);
  g.closePath();
  g.fill();
  g.fillStyle = "#2e2d2a";
  g.beginPath();
  g.ellipse(0.08, -0.09, 0.15, 0.04, -0.05, 0, 7);
  g.fill();
  g.strokeStyle = "#33393a";
  g.lineWidth = 0.065;
  g.beginPath();
  g.moveTo(-0.13, -0.1);
  g.quadraticCurveTo(-0.17, -0.17, -0.19, -0.23);
  g.stroke();
  g.fillStyle = "#33393a";
  g.beginPath();
  g.ellipse(-0.2, -0.25, 0.06, 0.05, 0, 0, 7);
  g.fill();
  g.fillStyle = "#6a5e3e";
  g.beginPath();
  g.moveTo(-0.25, -0.265);
  g.lineTo(-0.34, -0.24);
  g.lineTo(-0.25, -0.225);
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(236,222,204,0.32)";
  g.lineWidth = 0.015;
  g.beginPath();
  g.moveTo(-0.22, -0.05);
  g.quadraticCurveTo(-0.24, -0.13, -0.06, -0.14);
  g.stroke();
  g.beginPath();
  g.arc(-0.2, -0.25, 0.055, Math.PI * 0.8, Math.PI * 1.4);
  g.stroke();
  g.restore();
});
