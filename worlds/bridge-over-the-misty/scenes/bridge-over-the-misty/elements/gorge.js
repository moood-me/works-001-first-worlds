const L = Math.max(0, Math.min(1, e.state.light)),
  t = e.t,
  M = 0.3 + 0.7 * e.state.mist;
const m = (a, b) => {
  const p = [1, 3, 5].map((i) => Math.round(parseInt(a.substr(i, 2), 16) * (1 - L) + parseInt(b.substr(i, 2), 16) * L));
  return p.join(",");
};
const gr = g.createLinearGradient(0, 0, 0, 130);
gr.addColorStop(0, "rgb(" + m("#1e1e34", "#433a58") + ")");
gr.addColorStop(0.45, "rgb(" + m("#26283f", "#62536e") + ")");
gr.addColorStop(1, "rgb(" + m("#34365a", "#8e7686") + ")");
g.fillStyle = gr;
g.fillRect(-260, -2, 520, 142);
const c = m("#4a4d70", "#c7aaa6");
for (let i = 0; i < 14; i++) {
  const by = 8 + e.rnd() * 110,
    bx = -150 + ((((e.rnd() * 300 + t * (0.6 + e.rnd()) * (i % 2 ? 1 : -1)) % 300) + 300) % 300),
    r = 40 + e.rnd() * 60;
  g.save();
  g.translate(bx, by);
  g.scale(1, 0.1);
  const rg = g.createRadialGradient(0, 0, 0, 0, 0, r);
  rg.addColorStop(0, "rgba(" + c + "," + 0.25 * M + ")");
  rg.addColorStop(1, "rgba(" + c + ",0)");
  g.fillStyle = rg;
  g.beginPath();
  g.arc(0, 0, r, 0, 7);
  g.fill();
  g.restore();
}
g.fillStyle = "rgb(" + m("#151526", "#2e2840") + ")";
g.beginPath();
g.moveTo(-260, -3);
g.lineTo(-70, -2);
for (let y = 0; y <= 140; y += 6) {
  g.lineTo(-70 + y * 0.35 + 6 * e.rnd(), y);
}
g.lineTo(-260, 140);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(260, -3);
g.lineTo(75, -2);
for (let y = 0; y <= 140; y += 6) {
  g.lineTo(75 - y * 0.3 - 6 * e.rnd(), y);
}
g.lineTo(260, 140);
g.closePath();
g.fill();
