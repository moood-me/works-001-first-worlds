const D = 4.0,
  E = 1.7,
  L = -3.2,
  S0 = 0.85,
  S1 = 2.85;
const WIN = [
  [1.3, 2.9],
  [3.5, 5.1],
  [5.7, 7.1],
];
const P = (X, h, d) => [(X * D) / d, -(E + ((h - E) * D) / d)];
g.globalCompositeOperation = "lighter";
for (let k = 0; k < 220; k++) {
  let X = -3.1 + e.rnd() * 3.9,
    h = 0.3 + e.rnd() * 2.7,
    d = 1.6 + e.rnd() * 5.8;
  const ph = e.rnd() * 6.283,
    sp = 0.6 + e.rnd() * 0.8,
    sz = 0.002 + e.rnd() * 0.003;
  X += 0.06 * Math.sin(e.t * 0.11 * sp + ph) + 0.03 * Math.sin(e.t * 0.27 + ph * 2);
  h +=
    0.05 * Math.sin(e.t * 0.083 * sp + ph * 1.3) + 0.02 * Math.sin(e.t * 0.19 + ph) - 0.01 * Math.sin(e.t * 0.05 + ph);
  d += 0.05 * Math.sin(e.t * 0.07 + ph * 0.7);
  const t = X - L,
    hw = h + 0.75 * t,
    dw = d + 0.25 * t;
  const lit = hw > S0 && hw < S1 && WIN.some(([a, b]) => dw > a + 0.07 && dw < b - 0.07);
  if (!lit) continue;
  const al = 0.2 + 0.6 * Math.pow(Math.abs(Math.sin(e.t * 0.45 * sp + ph)), 3);
  const p = P(X, h, d),
    r = Math.max((sz * D) / d, e.px * 0.7);
  g.fillStyle = "rgba(255,240,210," + al * 0.18 + ")";
  g.beginPath();
  g.arc(p[0], p[1], r * 3.5, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "rgba(255,246,226," + al + ")";
  g.beginPath();
  g.arc(p[0], p[1], r, 0, Math.PI * 2);
  g.fill();
}
