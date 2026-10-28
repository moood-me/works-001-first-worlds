const s = e.state,
  fr = s.frost_density ?? 0.9,
  R = e.rnd,
  L = s.pod3_light ?? 0.2;
let gr = g.createLinearGradient(-0.16, 0, 0.16, 0);
gr.addColorStop(0, "#1f2731");
gr.addColorStop(0.4, "#151b23");
gr.addColorStop(1, "#07090c");
g.fillStyle = gr;
g.fillRect(-0.16, -3.2, 0.32, 3.2);
g.fillStyle = "#0c1015";
g.fillRect(0.12, -3.2, 0.06, 3.2);
g.fillRect(-0.2, -3.2, 0.04, 3.2);
for (let y = -2.9; y < 0; y += 0.6) {
  g.fillStyle = "#232b35";
  g.fillRect(-0.21, y, 0.4, 0.04);
}
g.fillStyle = "rgba(120,180,230," + (0.08 + 0.18 * L) + ")";
g.fillRect(-0.2, -3.2, 0.015, 3.2);
for (let i = 0; i < 600; i++) {
  const x = -0.2 + Math.pow(R(), 1.8) * 0.38,
    y = -R() * 3.2,
    a = R(),
    k = R();
  if (k > fr) continue;
  g.fillStyle = "rgba(210,228,245," + (0.05 + 0.18 * a) + ")";
  g.fillRect(x, y, 0.004 + a * 0.009, 0.004 + a * 0.009);
}
