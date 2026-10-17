const d = e.state.dusk || 0;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
g.fillStyle = mx([58, 72, 62], [20, 24, 36], d);
for (let x = -900; x < 900; ) {
  const r = 5 + e.rnd() * 10;
  g.beginPath();
  g.arc(x, -r * 0.7 + 2, r, 0, 7);
  g.fill();
  x += r * 1.1;
}
g.fillRect(-900, -4, 1800, 5);
const H = [];
for (let i = 0; i < 16; i++) H.push([-760 + e.rnd() * 1520, 0.4 + e.rnd() * 0.6, e.rnd()]);
for (const [x, s, r] of H) {
  const w = 9 * s + 5,
    hh = 5 * s + 3;
  g.fillStyle = mx([92, 84, 90], [30, 30, 44], d);
  g.fillRect(x - w / 2, -hh, w, hh);
  g.fillStyle = mx([54, 52, 66], [18, 18, 30], d);
  g.beginPath();
  g.moveTo(x - w / 2 - 1.5, -hh);
  g.lineTo(x, -hh - 4 * s - 2);
  g.lineTo(x + w / 2 + 1.5, -hh);
  g.fill();
  if (d > 0.25 + r * 0.4) {
    g.fillStyle = "rgba(255,206,140,0.85)";
    g.fillRect(x - 1.2, -hh * 0.65, 2.4, 1.8);
    e.light(x, -hh * 0.55, 4, "#ffc27a", 0.5);
  }
}
g.fillStyle = mx([120, 46, 40], [52, 24, 30], d);
const tx = -150;
g.fillRect(tx - 4, -11, 0.9, 11);
g.fillRect(tx + 3.1, -11, 0.9, 11);
g.fillRect(tx - 5.5, -12, 11, 1);
g.fillRect(tx - 4.5, -9.5, 9, 0.6);
