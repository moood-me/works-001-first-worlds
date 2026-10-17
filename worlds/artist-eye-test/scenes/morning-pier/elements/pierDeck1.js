const W = 0.9,
  D = 1.25;
g.fillStyle = "#26221f";
g.fillRect(-W, -D, 2 * W, 2 * D);
for (let y = -D; y < D; y += 0.21) {
  const c = (74 + e.rnd() * 26) | 0;
  g.fillStyle = "rgb(" + c + "," + (c - 5) + "," + (c - 9) + ")";
  g.fillRect(-W + (e.rnd() - 0.4) * 0.05, y, 2 * W - e.rnd() * 0.06, 0.18);
}
let s = g.createLinearGradient(-W, 0, W, 0);
s.addColorStop(0, "rgba(238,224,206,0.22)");
s.addColorStop(0.5, "rgba(220,214,208,0.05)");
s.addColorStop(1, "rgba(20,22,28,0.18)");
g.fillStyle = s;
g.fillRect(-W, -D, 2 * W, 2 * D);
