const t = e.t;
g.lineCap = "round";
const cab = (x0, x1, sag, w, ph, c) => {
  const s = Math.sin(t * 0.4 + ph) * 0.03 + Math.sin(t * 0.17 + ph * 2) * 0.02;
  g.strokeStyle = c;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x0, -2.5);
  g.quadraticCurveTo((x0 + x1) / 2 + s, -2.5 + sag, x1, -2.5);
  g.stroke();
};
cab(-0.85, -0.05, 0.6, 0.04, 0.7, "#07080b");
cab(-0.3, 0.75, 0.85, 0.05, 1.9, "#0a0b0e");
cab(0.15, 0.85, 0.35, 0.025, 2.8, "#1a0b0c");
g.fillStyle = "rgba(150,120,40,0.3)";
g.fillRect(-0.47, -2.24, 0.05, 0.07);
g.fillStyle = "rgba(215,232,248,0.2)";
for (let i = 0; i < 25; i++) {
  const u = e.rnd();
  g.fillRect(-0.3 + u * 1.05, -2.5 + 2 * u * (1 - u) * 0.85 + 0.02, 0.012, 0.008);
}
