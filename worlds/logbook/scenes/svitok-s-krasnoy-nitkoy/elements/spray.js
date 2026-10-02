const S = e.state,
  str = (v) => String(v == null ? "" : v),
  W = str(S.weather),
  windy = /wind|ветер|ветр|storm|шторм/.test(W),
  surf = /strong|surf|сильн|прибой|storm|шторм/.test(str(S.tide)) || /storm|шторм/.test(W);
const T = surf ? 5.5 : 8,
  n = Math.floor(e.t / T),
  p = e.t / T - n,
  k = surf ? 1 : 0.25,
  u = (p - 0.1) / 0.6;
if (u < 0 || u > 1) return;
for (let i = 0; i < 130; i++) {
  const x0 = (e.rnd() - 0.5) * 5,
    vx = (e.rnd() - 0.5) * 0.5 + (windy ? 0.45 : 0),
    h = (0.2 + e.rnd() * 1.1) * k * (0.75 + 0.25 * Math.sin(n * 1.7 + i)),
    rr = 0.004 + e.rnd() * 0.012,
    d = e.rnd() * 0.2;
  const uu = u - d;
  if (uu < 0 || uu > 0.8) continue;
  const q = uu / 0.8,
    y = -h * Math.sin(Math.PI * Math.min(1, q * 1.1)),
    x = x0 + vx * q;
  g.fillStyle = "rgba(215,226,244," + 0.5 * (1 - q) + ")";
  g.beginPath();
  g.arc(x, y, rr, 0, 7);
  g.fill();
}
