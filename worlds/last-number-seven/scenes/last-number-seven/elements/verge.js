const d = e.state.dusk || 0;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
let gr = g.createLinearGradient(0, -3.3, 0, 3.3);
gr.addColorStop(0, mx([96, 122, 70], [28, 38, 40], d));
gr.addColorStop(1, mx([50, 72, 48], [14, 20, 26], d));
g.fillStyle = gr;
g.fillRect(-30, -3.3, 60, 6.6);
for (let i = 0; i < 900; i++) {
  const x = -30 + e.rnd() * 60,
    y = -3.3 + e.rnd() * 6.6;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(140,170,96,0.4)" : "rgba(28,46,32,0.4)";
  g.fillRect(x, y, 0.04 + e.rnd() * 0.1, 0.02);
}
for (let i = 0; i < 70; i++) {
  const x = -12 + e.rnd() * 24,
    y = -3 + e.rnd() * 5.5,
    c = e.rnd();
  g.fillStyle =
    c < 0.5
      ? mx([240, 236, 220], [120, 120, 140], d)
      : c < 0.8
        ? mx([236, 196, 80], [110, 96, 70], d)
        : mx([180, 150, 210], [80, 70, 110], d);
  g.beginPath();
  g.arc(x, y, 0.025 + e.rnd() * 0.02, 0, 7);
  g.fill();
}
g.fillStyle = mx([120, 116, 110], [40, 40, 52], d);
g.fillRect(-30, -3.3, 60, 0.12);
