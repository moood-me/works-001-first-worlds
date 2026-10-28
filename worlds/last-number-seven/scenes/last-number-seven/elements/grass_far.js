const d = e.state.dusk || 0;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
g.fillStyle = mx([82, 112, 66], [24, 34, 36], d);
g.fillRect(-150, -2, 300, 4);
g.fillStyle = mx([110, 138, 76], [32, 42, 42], d);
for (let i = 0; i < 500; i++) {
  const x = -150 + e.rnd() * 300,
    y = -2 + e.rnd() * 4;
  g.fillRect(x, y, 0.3 + e.rnd() * 0.6, 0.08);
}
