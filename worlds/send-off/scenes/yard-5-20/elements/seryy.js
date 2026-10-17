const s = e.state,
  t = e.t;
const u = s.up || 0,
  gn = s.gone || 0;
const dx = gn * 5.5;
const a = gn > 0.75 ? Math.max(0, 1 - (gn - 0.75) / 0.25) : 1;
const L = (p, q) => p + (q - p) * u;
const br = Math.sin(t * 1.1) * 0.01 + Math.sin(t * 0.43) * 0.006;
const wk = gn > 0.001 && gn < 0.999 ? Math.sin(gn * 25) : 0;
const hx = L(0.02, 0) + dx + Math.sin(t * 0.23) * 0.01,
  hy = L(-0.95, -1.6) + br;
e.at(hx, hy - 0.05);
if (a <= 0.01) return;
g.globalAlpha = a;
const jet = "#16171d",
  str = "rgba(225,225,230,0.38)";
function bag(x, y) {
  g.fillStyle = "#1f2638";
  g.beginPath();
  g.moveTo(x - 0.28, y);
  g.lineTo(x - 0.28, y - 0.24);
  g.quadraticCurveTo(x, y - 0.32, x + 0.28, y - 0.24);
  g.lineTo(x + 0.28, y);
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(225,225,230,0.6)";
  g.lineWidth = 0.014;
  for (let k = 0; k < 3; k++) {
    g.beginPath();
    g.moveTo(x - 0.12 + k * 0.045, y - 0.03);
    g.lineTo(x - 0.02 + k * 0.045, y - 0.23);
    g.stroke();
  }
  g.strokeStyle = "#1f2638";
  g.lineWidth = 0.025;
  g.beginPath();
  g.moveTo(x - 0.1, y - 0.27);
  g.quadraticCurveTo(x, y - 0.42, x + 0.1, y - 0.27);
  g.stroke();
}
const P = {
  fl: [L(-0.2, -0.12) + dx - wk * 0.06, -0.03],
  fr: [L(0.2, 0.12) + dx + wk * 0.06, -0.03],
  kl: [L(-0.3, -0.11) + dx - wk * 0.04, L(-0.52, -0.48)],
  kr: [L(0.3, 0.11) + dx + wk * 0.04, L(-0.52, -0.48)],
  hl: [L(-0.14, -0.13) + dx, L(-0.3, -0.9)],
  hr: [L(0.14, 0.13) + dx, L(-0.3, -0.9)],
  sl: [L(-0.25, -0.23) + dx, L(-0.8, -1.42) + br],
  sr: [L(0.25, 0.23) + dx, L(-0.8, -1.42) + br],
  el: [L(-0.3, -0.28) + dx, L(-0.56, -1.12)],
  er: [L(0.3, 0.28) + dx, L(-0.56, -1.12)],
  al: [L(-0.09, -0.28) + dx - wk * 0.04, L(-0.36, -0.8)],
  ar: [L(0.11, 0.28) + dx + wk * 0.04, L(-0.36, -0.8)],
};
g.fillStyle = "rgba(10,10,14,0.35)";
g.beginPath();
g.ellipse(dx, 0, 0.38, 0.05, 0, 0, 7);
g.fill();
if (gn <= 0.001) bag(0.72, 0);
g.lineCap = "round";
g.lineJoin = "round";
function limb(a, b, c, w, side) {
  g.strokeStyle = jet;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(a[0], a[1]);
  g.lineTo(b[0], b[1]);
  g.lineTo(c[0], c[1]);
  g.stroke();
  g.strokeStyle = str;
  g.lineWidth = 0.012;
  const o = w * 0.42;
  g.beginPath();
  g.moveTo(a[0] + side * o, a[1]);
  g.lineTo(b[0] + side * o, b[1]);
  g.lineTo(c[0] + side * o * 0.7, c[1]);
  g.stroke();
}
g.fillStyle = jet;
g.beginPath();
g.moveTo(P.hl[0] - 0.05, P.hl[1] + 0.05);
g.lineTo(P.sl[0], P.sl[1]);
g.quadraticCurveTo(hx, P.sl[1] - 0.08, P.sr[0], P.sr[1]);
g.lineTo(P.hr[0] + 0.05, P.hr[1] + 0.05);
g.closePath();
g.fill();
g.strokeStyle = "rgba(225,225,230,0.22)";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo((P.hl[0] + P.hr[0]) / 2, P.hl[1]);
g.lineTo(hx, P.sl[1] - 0.03);
g.stroke();
limb(P.hl, P.kl, P.fl, 0.17, -1);
limb(P.hr, P.kr, P.fr, 0.17, 1);
g.fillStyle = "#cfccc3";
for (const f of [P.fl, P.fr]) {
  g.beginPath();
  g.ellipse(f[0], -0.04, 0.11, 0.05, 0, 0, 7);
  g.fill();
}
limb(P.sl, P.el, P.al, 0.13, -1);
limb(P.sr, P.er, P.ar, 0.13, 1);
g.fillStyle = "#8c7060";
for (const h of [P.al, P.ar]) {
  g.beginPath();
  g.arc(h[0], h[1], 0.045, 0, 7);
  g.fill();
}
if (gn > 0.001) bag(P.al[0], P.al[1] + 0.32);
g.fillStyle = jet;
g.fillRect(hx - 0.05, hy + 0.08, 0.1, 0.06);
g.fillStyle = "#8c7060";
g.beginPath();
g.ellipse(hx, hy, 0.115, 0.135, 0, 0, 7);
g.fill();
g.fillStyle = "rgba(200,180,170,0.3)";
g.beginPath();
g.ellipse(hx - 0.03, hy - 0.07, 0.065, 0.045, 0, 0, 7);
g.fill();
g.fillStyle = "rgba(30,24,22,0.32)";
g.beginPath();
g.ellipse(hx + 0.045, hy + 0.02, 0.065, 0.1, 0, 0, 7);
g.fill();
g.fillStyle = "#7a604f";
g.beginPath();
g.ellipse(hx - 0.115, hy + 0.01, 0.025, 0.04, 0, 0, 7);
g.fill();
g.beginPath();
g.ellipse(hx + 0.115, hy + 0.01, 0.025, 0.04, 0, 0, 7);
g.fill();
if (u < 0.5 && gn <= 0.001) {
  const p = Math.max(0, Math.sin(t * 0.4 + 1)) ** 6;
  const cx = P.ar[0] + 0.06,
    cy = P.ar[1] + 0.01;
  g.strokeStyle = "rgba(220,215,200,0.8)";
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(P.ar[0], P.ar[1]);
  g.lineTo(cx, cy);
  g.stroke();
  g.fillStyle = "rgba(255,130,60," + (0.5 + 0.5 * p) + ")";
  g.beginPath();
  g.arc(cx, cy, 0.013, 0, 7);
  g.fill();
  e.light(cx, cy, 0.3, "#ff7a3a", 0.25 + 0.5 * p);
  for (let k = 0; k < 6; k++) {
    const q = (t * 0.1 + k / 6) % 1;
    g.fillStyle = "rgba(170,170,178," + 0.1 * (1 - q) + ")";
    g.beginPath();
    g.arc(cx + Math.sin(q * 5 + k + t * 0.2) * 0.07 * q + q * 0.1, cy - q * 1.0, 0.025 + q * 0.12, 0, 7);
    g.fill();
  }
}
g.globalAlpha = 1;
