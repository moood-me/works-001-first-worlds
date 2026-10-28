const d = e.state.dusk || 0;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
g.fillStyle = mx([168, 140, 168], [66, 56, 96], d);
g.beginPath();
g.moveTo(-2600, 4);
for (let x = -2600; x <= 2600; x += 20) {
  g.lineTo(x, -70 - 45 * Math.sin(x * 0.0021 + 1) - 26 * Math.sin(x * 0.0057 + 2) - 10 * Math.sin(x * 0.017));
}
g.lineTo(2600, 4);
g.fill();
g.fillStyle = mx([116, 108, 134], [40, 38, 68], d);
g.beginPath();
g.moveTo(-2600, 4);
for (let x = -2600; x <= 2600; x += 20) {
  g.lineTo(x, -26 - 22 * Math.sin(x * 0.0033 + 4) - 12 * Math.sin(x * 0.0091) - 5 * Math.sin(x * 0.031));
}
g.lineTo(2600, 4);
g.fill();
