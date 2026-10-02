const lit = (e.state.lamp ?? 0.7) * (1 - 0.7 * (e.state.shutter || 0));
g.fillStyle = "#1a110a";
g.fillRect(-0.45, -0.75, 0.9, 0.035);
g.fillStyle = "#120b06";
g.fillRect(-0.4, -0.715, 0.8, 0.08);
for (const x of [-0.4, 0.34]) {
  g.fillStyle = "#140c07";
  g.fillRect(x, -0.715, 0.055, 0.715);
}
g.fillStyle = `rgba(255,170,90,${0.12 + 0.25 * lit})`;
g.fillRect(0.385, -0.715, 0.01, 0.715);
g.fillRect(-0.45, -0.75, 0.9, 0.006);
