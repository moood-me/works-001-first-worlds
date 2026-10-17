const s = e.state,
  gl = s.glow;
g.fillStyle = "#0f1519";
g.fillRect(-45, -22, 90, 44);
for (let i = 0; i < 320; i++) {
  const x = -45 + e.rnd() * 90,
    y = -22 + e.rnd() * 44,
    r = 0.3 + e.rnd() * 1.6;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(22,31,33,0.35)" : "rgba(9,12,15,0.35)";
  g.beginPath();
  g.ellipse(x, y, r, r * (0.5 + e.rnd() * 0.5), e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
const wx = 2.5,
  wy = 9;
let c = g.createRadialGradient(wx, wy, 0, wx, wy, 2 + 5 * gl);
c.addColorStop(0, "rgba(110,185,255," + 0.32 * gl + ")");
c.addColorStop(1, "rgba(110,185,255,0)");
g.fillStyle = c;
g.fillRect(wx - 8, wy - 8, 16, 16);
const path = (u) => -1.2 + 2.4 * u + 0.3 * Math.sin(3 * u);
for (let i = 0; i < 26; i++) {
  const u = i / 25,
    cx = path(u) + (e.rnd() - 0.5) * 0.25,
    cy = 20 - 10 * u + (e.rnd() - 0.5) * 0.15,
    r = 0.22 + e.rnd() * 0.12;
  g.beginPath();
  const n = 7;
  for (let k = 0; k < n; k++) {
    const a = (k / n) * Math.PI * 2,
      rr = r * (0.75 + 0.35 * e.rnd());
    const px = cx + Math.cos(a) * rr * 1.25,
      py = cy + Math.sin(a) * rr * 0.85;
    k ? g.lineTo(px, py) : g.moveTo(px, py);
  }
  g.closePath();
  g.fillStyle = "#161c20";
  g.fill();
  g.fillStyle = "rgba(120,140,170,0.04)";
  g.fill();
}
if (s.seeker_here && s.lantern) {
  const p = Math.max(0, Math.min(1, s.seeker_step)),
    d = 7 + 5.3 * p,
    u = (d - 2) / 10,
    a = path(u) + 0.35,
    y = 22 - d;
  let w = g.createRadialGradient(a, y, 0, a, y, 2.6);
  w.addColorStop(0, "rgba(255,170,90,0.26)");
  w.addColorStop(1, "rgba(255,170,90,0)");
  g.fillStyle = w;
  g.fillRect(a - 3, y - 3, 6, 6);
}
