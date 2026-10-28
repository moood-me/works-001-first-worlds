const W = 0.9,
  D = 1.25;
g.fillStyle = "#0c0b0d";
g.fillRect(-W, -D, 2 * W, 2 * D);
for (let y = -D; y < D; y += 0.21) {
  const v = e.rnd();
  const c = (30 + v * 16) | 0;
  g.fillStyle = "rgb(" + c + "," + (c - 2) + "," + (c + 2) + ")";
  g.fillRect(-W + (e.rnd() - 0.4) * 0.05, y, 2 * W - e.rnd() * 0.06, 0.18);
}
let s = g.createLinearGradient(-W, 0, W, 0);
s.addColorStop(0, "rgba(150,165,185,0.16)");
s.addColorStop(0.5, "rgba(150,165,185,0.04)");
s.addColorStop(1, "rgba(0,0,0,0.2)");
g.fillStyle = s;
g.fillRect(-W, -D, 2 * W, 2 * D);
