const A = e.aspect,
  n = e.state.night ?? 0.3,
  H = 0.58,
  t = e.t;
const hx = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
const mx = (a, b, k) => {
  const p = hx(a),
    q = hx(b);
  return p.map((v, i) => Math.round(v + (q[i] - v) * k));
};
const cs = (c, al) => "rgba(" + c.join(",") + "," + (al == null ? 1 : al) + ")";
const gr = g.createLinearGradient(0, H - 0.01, 0, 1.25);
gr.addColorStop(0, cs(mx("#c8a598", "#4a4a68", n)));
gr.addColorStop(0.2, cs(mx("#8a778c", "#2a2b44", n)));
gr.addColorStop(1, cs(mx("#3a3449", "#0d0e1a", n)));
g.fillStyle = gr;
g.fillRect(-0.3, H - 0.004, A + 0.6, 1.3 - H);
const c = mx("#e0bfae", "#68698a", n);
for (let i = 0; i < 80; i++) {
  const r = e.rnd(),
    r2 = e.rnd(),
    r3 = e.rnd();
  const d = Math.pow(i / 80, 1.6);
  const y = H + 0.006 + d * 0.62;
  const w = 0.05 + d * 0.4;
  const sp = 0.0015 + d * 0.008;
  const x = ((r * (A + 1) + t * sp * (0.6 + r3 * 0.8)) % (A + 1)) - 0.5;
  g.save();
  g.translate(x, y);
  g.scale(1, 0.2 + 0.1 * r2);
  const rg = g.createRadialGradient(0, 0, 0, 0, 0, w);
  rg.addColorStop(0, cs(c, 0.22 + 0.12 * r2));
  rg.addColorStop(1, cs(c, 0));
  g.fillStyle = rg;
  g.beginPath();
  g.arc(0, 0, w, 0, 6.283);
  g.fill();
  g.restore();
}
const mxp = 0.24 * A,
  gl = 0.4 + 0.6 * n;
for (let j = 0; j < 34; j++) {
  const k = j / 34;
  const y = H + 0.008 + Math.pow(k, 1.5) * 0.33;
  const w = (0.008 + k * 0.06) * (0.5 + 0.5 * Math.sin(t * 0.6 + j * 1.7) * Math.sin(t * 0.23 + j));
  const xo = Math.sin(t * 0.3 + j * 2.3) * 0.01 * (1 + k * 3);
  g.fillStyle = "rgba(240,232,222," + 0.2 * gl * (1 - k) + ")";
  g.fillRect(mxp + xo - w, y, w * 2, 0.0025 + k * 0.004);
}
