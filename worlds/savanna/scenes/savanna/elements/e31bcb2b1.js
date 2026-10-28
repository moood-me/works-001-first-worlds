const K = 5.3,
  F = 1,
  N0 = -0.15,
  O = 0;
const S = K / 5.2,
  t = e.t + O;
g.fillStyle = "rgba(70,45,22,0.28)";
g.beginPath();
g.ellipse(2.4 * S, 0.05 * S, 3.4 * S, 0.2 * S, 0, 0, 6.2832);
g.fill();
g.scale(S * F, S);
const L = "#e6cf9e",
  P = "#8c5431",
  D = "#3a2517";
const pat = [];
for (let j = 0; j < 16; j++)
  for (let i = 0; i < 16; i++)
    pat.push([
      -1.7 + i * 0.3 + (j % 2) * 0.15 + (e.rnd() - 0.5) * 0.08,
      -5.4 + j * 0.3 + (e.rnd() - 0.5) * 0.08,
      0.115 + e.rnd() * 0.04,
      e.rnd() * 6,
    ]);
function pats() {
  g.fillStyle = P;
  for (const p of pat) {
    g.beginPath();
    for (let k = 0; k < 6; k++) {
      const a = k * 1.047 + p[3],
        r = p[2] * (0.82 + 0.28 * Math.sin(k * 2.3 + p[3] * 3)),
        x = p[0] + Math.cos(a) * r,
        y = p[1] + Math.sin(a) * r;
      if (k) g.lineTo(x, y);
      else g.moveTo(x, y);
    }
    g.closePath();
    g.fill();
  }
}
function shade(dk) {
  const s = g.createLinearGradient(-1.8 * F, 0, 2 * F, 0);
  s.addColorStop(0, "rgba(255,226,170,0.22)");
  s.addColorStop(0.5, "rgba(0,0,0,0)");
  s.addColorStop(1, "rgba(40,22,10,0.4)");
  g.fillStyle = s;
  g.fillRect(-4, -7, 8, 8);
  if (dk) {
    g.fillStyle = "rgba(40,25,12,0.35)";
    g.fillRect(-4, -7, 8, 8);
  }
}
function part(fn, dk, np) {
  g.save();
  g.beginPath();
  fn();
  g.fillStyle = L;
  g.fill();
  g.clip();
  if (!np) pats();
  shade(dk);
  g.restore();
}
function leg(x, b) {
  return () => {
    g.moveTo(x - 0.11, -2.2);
    g.quadraticCurveTo(x - 0.09, -1.1, x + b - 0.06, -0.06);
    g.lineTo(x + b + 0.07, -0.06);
    g.quadraticCurveTo(x + 0.08, -1.1, x + 0.12, -2.2);
    g.closePath();
  };
}
function hoof(x, b) {
  g.fillStyle = D;
  g.fillRect(x + b - 0.075, -0.1, 0.16, 0.1);
}
part(leg(-0.62, 0.03), 1);
hoof(-0.62, 0.03);
part(leg(0.92, 0.05), 1);
hoof(0.92, 0.05);
const bl = Math.sin(t * 0.9) * 0.02;
part(() => {
  g.moveTo(-1.05, -2.15);
  g.bezierCurveTo(-1.22, -2.5, -1.12, -2.85, -0.8, -2.9);
  g.bezierCurveTo(-0.2, -3.0, 0.4, -3.25, 0.85, -3.35);
  g.bezierCurveTo(1.25, -3.15, 1.28, -2.4, 0.98, -2.1);
  g.bezierCurveTo(0.4, -1.9 + bl, -0.4, -1.95 + bl, -1.05, -2.15);
  g.closePath();
});
part(leg(-0.88, -0.03));
hoof(-0.88, -0.03);
part(leg(0.72, 0.02));
hoof(0.72, 0.02);
const ta = Math.sin(t * 0.8) * 0.12 + Math.sin(t * 1.93 + 1) * 0.06;
g.save();
g.translate(-1.1, -2.72);
g.rotate(ta);
g.strokeStyle = "#a88a5e";
g.lineWidth = 0.06;
g.lineCap = "round";
g.beginPath();
g.moveTo(0, 0);
g.quadraticCurveTo(-0.12, 0.5, -0.05, 1.0);
g.stroke();
g.fillStyle = D;
g.beginPath();
g.ellipse(-0.05, 1.1, 0.07, 0.18, 0, 0, 6.2832);
g.fill();
g.restore();
const na = N0 + Math.sin(t * 0.31) * 0.04 + Math.sin(t * 0.17 + 2) * 0.03;
g.save();
g.translate(0.85, -3.0);
g.rotate(na);
g.translate(-0.85, 3.0);
part(() => {
  g.moveTo(0.45, -3.1);
  g.bezierCurveTo(0.85, -3.8, 1.15, -4.4, 1.42, -4.95);
  g.lineTo(1.72, -4.88);
  g.bezierCurveTo(1.55, -4.35, 1.35, -3.55, 1.22, -2.6);
  g.lineTo(0.7, -2.7);
  g.closePath();
});
g.strokeStyle = "#6b4026";
g.lineWidth = 0.07;
g.lineCap = "round";
g.beginPath();
g.moveTo(0.52, -3.2);
g.bezierCurveTo(0.88, -3.8, 1.16, -4.4, 1.42, -4.9);
g.stroke();
g.save();
g.translate(1.56, -4.92);
g.rotate(Math.sin(t * 0.5) * 0.06 + Math.sin(t * 0.21) * 0.05);
const ea = 0.35 * Math.pow(Math.max(0, Math.sin(t * 0.45)), 12);
g.fillStyle = L;
g.beginPath();
g.ellipse(-0.2, -0.02, 0.15, 0.05, -0.3 - ea, 0, 6.2832);
g.fill();
part(
  () => {
    g.ellipse(0.22, 0.1, 0.4, 0.15, 0.5, 0, 6.2832);
  },
  0,
  1,
);
g.fillStyle = "#6d5440";
g.beginPath();
g.ellipse(0.52, 0.26, 0.1, 0.08, 0.5, 0, 6.2832);
g.fill();
g.fillStyle = D;
g.beginPath();
g.arc(0.08, 0.02, 0.03, 0, 6.2832);
g.fill();
g.strokeStyle = "#5a3a22";
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(-0.05, -0.04);
g.lineTo(-0.13, -0.32);
g.moveTo(0.06, -0.02);
g.lineTo(0.01, -0.3);
g.stroke();
g.fillStyle = D;
g.beginPath();
g.arc(-0.13, -0.33, 0.045, 0, 6.2832);
g.moveTo(0.055, -0.31);
g.arc(0.01, -0.31, 0.045, 0, 6.2832);
g.fill();
g.restore();
g.restore();
