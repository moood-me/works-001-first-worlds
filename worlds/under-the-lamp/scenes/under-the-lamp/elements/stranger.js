const st = e.state,
  t = e.t;
const s = Math.max(0, Math.min(1, st.stranger));
if (s < 0.01) return;
const fl = (() => {
  const L = st.lamp;
  if (L === "off") return 0;
  if (L !== "flicker") return 1;
  const f = Math.sin(t * 1.7) + Math.sin(t * 2.9 + 1) + Math.sin(t * 0.63);
  return f > 1.4 ? 0.1 : 0.82 + 0.18 * Math.sin(t * 41);
})();
const d0 = 8.2,
  D = 36 - 27.6 * s,
  a = -1.6 + 2.5 * s,
  k = d0 / D;
const X = a * k,
  Y = -1.7 + 1.7 * k;
const ph = ((27.6 * s) / 0.8) * Math.PI;
const lift1 = Math.max(0, Math.sin(ph)) * 0.07,
  lift2 = Math.max(0, -Math.sin(ph)) * 0.07;
const bob = Math.abs(Math.cos(ph)) * 0.02 + Math.sin(t * 1.1) * 0.004;
const fog = Math.max(0, Math.min(1, (D - 10) / 24));
const dl = Math.hypot(a - 0.9, D - 8.5);
const I = fl * Math.max(0, 1 - dl / 5);
const col = (f) => {
  const c1 = [11, 15, 19],
    c2 = [34, 44, 52];
  return "rgb(" + c1.map((v, i) => Math.round(v + (c2[i] - v) * f * 0.6)).join(",") + ")";
};
const body = () => {
  g.beginPath();
  g.moveTo(-0.15, -0.55);
  g.lineTo(-0.14, -lift1);
  g.lineTo(-0.05, -lift1);
  g.lineTo(-0.03, -0.55);
  g.closePath();
  g.moveTo(0.03, -0.55);
  g.lineTo(0.05, -lift2);
  g.lineTo(0.14, -lift2);
  g.lineTo(0.15, -0.55);
  g.closePath();
  g.moveTo(-0.27, -1.42 + bob);
  g.quadraticCurveTo(-0.3, -1.0, -0.31, -0.48);
  g.lineTo(0.31, -0.48);
  g.quadraticCurveTo(0.3, -1.0, 0.27, -1.42 + bob);
  g.quadraticCurveTo(0.12, -1.5 + bob, 0.1, -1.58 + bob);
  g.lineTo(-0.1, -1.58 + bob);
  g.quadraticCurveTo(-0.12, -1.5 + bob, -0.27, -1.42 + bob);
  g.moveTo(0.1, -1.6 + bob);
  g.arc(0, -1.6 + bob, 0.1, 0, 7);
  g.moveTo(0.23, -1.67 + bob);
  g.ellipse(0, -1.67 + bob, 0.23, 0.045, 0, 0, 7);
  g.moveTo(-0.12, -1.68 + bob);
  g.lineTo(-0.1, -1.85 + bob);
  g.quadraticCurveTo(0, -1.8 + bob, 0.1, -1.85 + bob);
  g.lineTo(0.12, -1.68 + bob);
  g.closePath();
};
g.save();
g.translate(X, Y);
g.scale(k, k);
g.save();
g.scale(1, -1);
g.globalAlpha = 0.16 * (1 - fog * 0.7);
g.fillStyle = col(fog);
body();
g.fill();
g.restore();
g.globalAlpha = 1 - fog * 0.25;
g.fillStyle = col(fog);
body();
g.fill();
if (I > 0.01) {
  g.save();
  body();
  g.clip();
  const rg = g.createRadialGradient(0.9 - a, -4.4, 0, 0.9 - a, -4.4, 4.4);
  rg.addColorStop(0, "rgba(240,180,110," + 0.42 * I + ")");
  rg.addColorStop(0.75, "rgba(240,180,110," + 0.08 * I + ")");
  rg.addColorStop(1, "rgba(240,180,110,0)");
  g.fillStyle = rg;
  g.fillRect(-0.5, -2, 1, 2.2);
  g.restore();
}
if (st.envelope === "his") {
  g.fillStyle = "rgba(190,180,158," + (1 - fog * 0.5) + ")";
  g.save();
  g.translate(0.31, -0.86 + bob);
  g.rotate(0.15);
  g.fillRect(-0.04, -0.06, 0.16, 0.11);
  g.restore();
}
g.restore();
e.at(X, Y - 1.85 * k);
