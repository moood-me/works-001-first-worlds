const p = 8,
  E = 1.7;
const P = (X, D) => [(X * p) / D, E * (p / D - 1)];
const cx = (D) => -5 + (5 * D) / 110;
g.beginPath();
let first = true;
for (let D = 1.2; D <= 100; D *= 1.08) {
  const q = P(cx(D) - 3, D);
  if (first) {
    g.moveTo(q[0], q[1]);
    first = false;
  } else {
    g.lineTo(q[0], q[1]);
  }
}
for (let D = 100; D >= 1.2; D /= 1.08) {
  const q = P(cx(D) + 3, D);
  g.lineTo(q[0], q[1]);
}
g.closePath();
const pg = g.createLinearGradient(0, -1.7, 0, 10);
pg.addColorStop(0, "#94978d");
pg.addColorStop(0.15, "#6e7068");
pg.addColorStop(1, "#4c4e48");
g.fillStyle = pg;
g.fill();
for (let i = 0; i < 18; i++) {
  const D = 1.5 + Math.pow(e.rnd(), 1.5) * 50;
  const q = P(cx(D) + (e.rnd() - 0.5) * 5, D);
  const s = ((0.4 + e.rnd() * 0.9) * p) / D;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(88,100,66,0.22)" : "rgba(40,42,38,0.18)";
  g.beginPath();
  g.ellipse(q[0], q[1], s, s * 0.25, 0, 0, 6.2832);
  g.fill();
}
for (let i = 0; i < 34; i++) {
  const D = 1.6 + Math.pow(e.rnd(), 1.8) * 24;
  let X = cx(D) + (e.rnd() - 0.5) * 5.2;
  let Dd = D;
  g.strokeStyle = "rgba(40,42,36,0.6)";
  g.lineWidth = Math.max((0.02 * p) / D, e.px);
  g.beginPath();
  let q = P(X, Dd);
  g.moveTo(q[0], q[1]);
  const n = 3 + Math.floor(e.rnd() * 5);
  let ang = e.rnd() * 6.28;
  for (let k = 0; k < n; k++) {
    ang += (e.rnd() - 0.5) * 1.8;
    const L = 0.12 + e.rnd() * 0.35;
    X += Math.cos(ang) * L;
    Dd = Math.max(1.2, Dd + Math.sin(ang) * L);
    q = P(X, Dd);
    g.lineTo(q[0], q[1]);
  }
  g.stroke();
  if (e.rnd() < 0.6) {
    g.strokeStyle = "#5d6a45";
    g.lineWidth = Math.max((0.015 * p) / Dd, e.px);
    g.beginPath();
    for (let b = 0; b < 6; b++) {
      const bx = q[0] + ((e.rnd() - 0.5) * 0.25 * p) / Dd;
      const bh = ((0.1 + e.rnd() * 0.3) * p) / Dd;
      g.moveTo(bx, q[1]);
      g.lineTo(bx + (e.rnd() - 0.5) * bh * 0.5, q[1] - bh);
    }
    g.stroke();
  }
}
const lc = ["#8a5a32", "#a07a3a", "#6e4a2c", "#9a6a36"];
for (let i = 0; i < 90; i++) {
  const D = 1.4 + Math.pow(e.rnd(), 1.5) * 40;
  const X = cx(D) + (e.rnd() - 0.5) * 9;
  const q = P(X, D);
  const s = ((0.07 + e.rnd() * 0.05) * p) / D;
  g.fillStyle = lc[Math.floor(e.rnd() * 4)];
  g.globalAlpha = 0.55 + e.rnd() * 0.35;
  g.beginPath();
  g.ellipse(q[0], q[1], s, s * 0.4, (e.rnd() - 0.5) * 0.6, 0, 6.2832);
  g.fill();
}
g.globalAlpha = 1;
g.strokeStyle = "#59603f";
for (let i = 0; i < 220; i++) {
  const D = 1.3 + Math.pow(e.rnd(), 1.7) * 70;
  const side = e.rnd() < 0.5 ? -1 : 1;
  const X = cx(D) + side * (3 + (e.rnd() - 0.3) * 0.8);
  const q = P(X, D);
  const bh = ((0.15 + e.rnd() * 0.45) * p) / D;
  g.lineWidth = Math.max((0.02 * p) / D, e.px);
  g.globalAlpha = 0.7;
  g.beginPath();
  g.moveTo(q[0], q[1]);
  g.quadraticCurveTo(q[0], q[1] - bh * 0.6, q[0] + (e.rnd() - 0.5) * bh * 0.6, q[1] - bh);
  g.stroke();
}
g.globalAlpha = 1;
