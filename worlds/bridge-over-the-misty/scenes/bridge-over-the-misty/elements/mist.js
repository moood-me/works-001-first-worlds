const s = e.state,
  t = e.t,
  L = Math.max(0, Math.min(1, s.light)),
  M = 0.25 + 0.75 * s.mist;
const m = (a, b) => {
  const p = [1, 3, 5].map((i) => Math.round(parseInt(a.substr(i, 2), 16) * (1 - L) + parseInt(b.substr(i, 2), 16) * L));
  return p.join(",");
};
const c = m("#4a4d70", "#cfb4ae");
for (let i = 0; i < 34; i++) {
  const sp = (0.15 + e.rnd() * 0.35) * (i % 2 ? 1 : -1);
  const bx = -70 + ((((e.rnd() * 140 + t * sp) % 140) + 140) % 140);
  const by = 1 + Math.pow(e.rnd(), 0.7) * 38;
  const r = 7 + e.rnd() * 12;
  const al = (0.1 + 0.14 * (by / 40)) * M;
  g.save();
  g.translate(bx, by);
  g.scale(1, 0.22);
  const rg = g.createRadialGradient(0, 0, 0, 0, 0, r);
  rg.addColorStop(0, "rgba(" + c + "," + al + ")");
  rg.addColorStop(1, "rgba(" + c + ",0)");
  g.fillStyle = rg;
  g.beginPath();
  g.arc(0, 0, r, 0, 7);
  g.fill();
  g.restore();
}
const lg = g.createLinearGradient(0, 2, 0, 45);
lg.addColorStop(0, "rgba(" + c + ",0)");
lg.addColorStop(1, "rgba(" + c + "," + 0.55 * M + ")");
g.fillStyle = lg;
g.fillRect(-60, 2, 120, 43);
if (s.mist > 0.5) {
  const k = (s.mist - 0.5) * 2;
  for (let i = 0; i < 6; i++) {
    const bx = -40 + ((((e.rnd() * 80 + t * 0.3 * (i % 2 ? 1 : -1)) % 80) + 80) % 80),
      by = -0.3 + e.rnd() * 0.8,
      r = 4 + e.rnd() * 5;
    g.save();
    g.translate(bx, by);
    g.scale(1, 0.12);
    const rg = g.createRadialGradient(0, 0, 0, 0, 0, r);
    rg.addColorStop(0, "rgba(" + c + "," + 0.22 * k + ")");
    rg.addColorStop(1, "rgba(" + c + ",0)");
    g.fillStyle = rg;
    g.beginPath();
    g.arc(0, 0, r, 0, 7);
    g.fill();
    g.restore();
  }
}
