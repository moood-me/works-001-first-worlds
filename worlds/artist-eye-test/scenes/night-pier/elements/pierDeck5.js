const W = 0.9,
  D = 2.25,
  GY = -6.45;
g.fillStyle = "#0c0b0d";
g.fillRect(-W, -D, 2 * W, 2 * D);
for (let y = -D; y < D; y += 0.21) {
  const v = e.rnd();
  const c = (30 + v * 16) | 0;
  g.fillStyle = "rgb(" + c + "," + (c - 2) + "," + (c + 2) + ")";
  const miss = e.rnd() < 0.03;
  if (miss) continue;
  g.fillRect(-W + (e.rnd() - 0.4) * 0.05, y, 2 * W - e.rnd() * 0.06, 0.18);
}
let s = g.createLinearGradient(-W, 0, W, 0);
s.addColorStop(0, "rgba(150,165,185,0.16)");
s.addColorStop(0.5, "rgba(150,165,185,0.04)");
s.addColorStop(1, "rgba(0,0,0,0.2)");
g.fillStyle = s;
g.fillRect(-W, -D, 2 * W, 2 * D);
const L = e.state.lantern ?? 1;
let w = g.createRadialGradient(0.7, GY, 0, 0.7, GY, 6);
w.addColorStop(0, "rgba(255,165,85," + 0.6 * L + ")");
w.addColorStop(0.5, "rgba(235,125,55," + 0.18 * L + ")");
w.addColorStop(1, "rgba(235,125,55,0)");
g.fillStyle = w;
g.fillRect(-W, -D, 2 * W, 2 * D);
