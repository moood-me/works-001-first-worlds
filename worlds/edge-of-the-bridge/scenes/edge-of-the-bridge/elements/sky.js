const A = e.aspect,
  n = e.state.night ?? 0.3,
  H = 0.58;
const hx = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
const mx = (a, b, k) => {
  const p = hx(a),
    q = hx(b);
  return p.map((v, i) => Math.round(v + (q[i] - v) * k));
};
const cs = (c, al) => "rgba(" + c.join(",") + "," + (al == null ? 1 : al) + ")";
const gr = g.createLinearGradient(0, -0.35, 0, H + 0.02);
gr.addColorStop(0, cs(mx("#1d2038", "#05070f", n)));
gr.addColorStop(0.45, cs(mx("#46415f", "#0f1328", n)));
gr.addColorStop(0.82, cs(mx("#94798a", "#252942", n)));
gr.addColorStop(1, cs(mx("#d4a890", "#3b3b57", n)));
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, A + 0.6, H + 0.4);
