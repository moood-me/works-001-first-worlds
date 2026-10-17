const st = e.state,
  t = e.t;
const fl = (() => {
  const L = st.lamp;
  if (L === "off") return 0;
  if (L !== "flicker") return 1;
  const f = Math.sin(t * 1.7) + Math.sin(t * 2.9 + 1) + Math.sin(t * 0.63);
  return f > 1.4 ? 0.1 : 0.82 + 0.18 * Math.sin(t * 41);
})();
g.fillStyle = "#0e1418";
g.fillRect(-13, -18, 26, 36);
g.fillStyle = "#151c21";
g.fillRect(-13, -18, 9.5, 36);
g.fillRect(1.5, -18, 11.5, 36);
g.strokeStyle = "rgba(40,52,60,0.45)";
g.lineWidth = 0.03;
for (let y = -18; y < 18; y += 1.2) {
  g.beginPath();
  g.moveTo(-13, y);
  g.lineTo(-3.5, y);
  g.moveTo(1.5, y);
  g.lineTo(13, y);
  g.stroke();
}
g.fillStyle = "#2a343b";
g.fillRect(-3.65, -18, 0.15, 36);
g.fillRect(1.5, -18, 0.15, 36);
for (let i = 0; i < 8; i++) {
  const px = -3 + e.rnd() * 4.2,
    py = -16 + e.rnd() * 30,
    rx = 0.3 + e.rnd() * 0.8,
    ry = 0.2 + e.rnd() * 0.5;
  g.fillStyle = "rgba(24,33,40,0.7)";
  g.beginPath();
  g.ellipse(px, py, rx, ry, e.rnd() * 3, 0, 7);
  g.fill();
}
g.strokeStyle = "#2e3a43";
g.lineWidth = 0.06;
for (const rx of [-2.4, -0.9]) {
  g.beginPath();
  g.moveTo(rx, -18);
  g.lineTo(rx, 18);
  g.stroke();
}
if (fl > 0) {
  const pg = g.createRadialGradient(0.9, 11.5, 0, 0.9, 11.5, 4.5);
  pg.addColorStop(0, "rgba(232,168,90," + 0.32 * fl + ")");
  pg.addColorStop(0.5, "rgba(232,168,90," + 0.1 * fl + ")");
  pg.addColorStop(1, "rgba(232,168,90,0)");
  g.fillStyle = pg;
  g.fillRect(-4, 6, 10, 12);
  for (let y = 11.5; y < 18; y += 0.1) {
    const j = e.rnd();
    const w = 0.04 + 0.22 * j * Math.abs(Math.sin(y * 1.7 + t * 0.8 + j * 6));
    g.fillStyle = "rgba(240,185,115," + 0.3 * fl * (1 - (y - 11.5) / 7) * (0.4 + 0.6 * j) + ")";
    g.fillRect(0.9 - w + (e.rnd() - 0.5) * 0.12, y, w * 2, 0.05);
  }
}
const nn = st.neon === "on" ? 1 : st.neon === "broken" ? 0.55 : 0;
if (nn > 0) {
  for (let y = 8; y < 18; y += 0.12) {
    const j = e.rnd();
    const w = 0.03 + 0.16 * j * Math.abs(Math.sin(y * 2.1 + t * 0.9 + j * 5));
    g.fillStyle = "rgba(205,72,78," + 0.22 * nn * (1 - (y - 8) / 10.5) * (0.4 + 0.6 * j) + ")";
    g.fillRect(-3 - w + (e.rnd() - 0.5) * 0.1, y, w * 2, 0.05);
  }
}
const n = Math.round(50 * st.rain);
g.lineWidth = 0.025;
for (let i = 0; i < n; i++) {
  const cx = -6 + e.rnd() * 12,
    cy = -10 + e.rnd() * 27;
  const ph = (t * 0.7 + e.rnd()) % 1;
  g.strokeStyle = "rgba(150,170,180," + 0.3 * (1 - ph) + ")";
  g.beginPath();
  g.arc(cx, cy, 0.04 + 0.3 * ph, 0, 7);
  g.stroke();
}
