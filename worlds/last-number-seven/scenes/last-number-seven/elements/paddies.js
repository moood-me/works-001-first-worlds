const d = e.state.dusk || 0;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
let gr = g.createLinearGradient(0, -95, 0, 95);
gr.addColorStop(0, mx([250, 196, 156], [196, 104, 104], d));
gr.addColorStop(0.3, mx([206, 166, 180], [96, 66, 106], d));
gr.addColorStop(1, mx([104, 124, 168], [24, 26, 58], d));
g.fillStyle = gr;
g.fillRect(-350, -95, 700, 190);
g.strokeStyle = mx([70, 104, 62], [22, 34, 36], d);
g.globalAlpha = 0.3;
g.lineWidth = 0.12;
for (let y = -95; y < 95; y += y > 0 ? 0.7 : 1.6) {
  g.beginPath();
  g.moveTo(-350, y);
  g.lineTo(350, y);
  g.stroke();
}
g.globalAlpha = 1;
g.fillStyle = mx([66, 84, 56], [22, 26, 32], d);
for (let y = -95; y < 95; y += 17) g.fillRect(-350, y, 700, 1.1);
for (let x = -350; x < 350; x += 24) g.fillRect(x, -95, 1.1, 190);
