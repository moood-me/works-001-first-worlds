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
cab(-0.75, 0.05, 0.7, 0.045, 0, "#07080b");
cab(-0.6, 0.25, 0.48, 0.028, 1.3, "#1a0b0c");
cab(0.35, 0.95, 0.38, 0.035, 2.1, "#08090c");
const H0 = -0.42,
  hs = H0 + Math.sin(t * 0.5 + 0.4) * 0.04 + Math.sin(t * 0.21) * 0.03;
g.strokeStyle = "#07080b";
g.lineWidth = 0.032;
g.beginPath();
g.moveTo(-0.5, -2.5);
g.quadraticCurveTo(-0.46 + (hs - H0) * 0.5, -2.05, hs, -1.75);
g.stroke();
g.strokeStyle = "rgba(160,120,90,0.5)";
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(hs, -1.75);
g.lineTo(hs - 0.01, -1.7);
g.moveTo(hs, -1.75);
g.lineTo(hs + 0.015, -1.71);
g.stroke();
const sp = Math.pow(Math.max(0, Math.sin(t * 0.7) * Math.sin(t * 3.9)), 8);
if (sp > 0.05) {
  g.fillStyle = "rgba(180,220,255," + sp + ")";
  g.beginPath();
  g.arc(hs, -1.7, 0.012, 0, 6.2832);
  g.fill();
  e.light(hs, -1.7, 0.4, "#bfe0ff", sp * 0.8);
}
g.fillStyle = "rgba(215,232,248,0.25)";
for (let i = 0; i < 30; i++) {
  const u = e.rnd();
  g.fillRect(-0.75 + u * 0.8, -2.5 + 2 * u * (1 - u) * 0.7 + 0.02, 0.01, 0.008);
}
