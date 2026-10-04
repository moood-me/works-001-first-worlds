const L = e.state.lantern ?? 0;
if (L > 0.01) {
  let hl = g.createRadialGradient(0, -1.69, 0, 0, -1.69, 1.1);
  hl.addColorStop(0, "rgba(255,175,95," + 0.3 * L + ")");
  hl.addColorStop(1, "rgba(255,140,60,0)");
  g.fillStyle = hl;
  g.fillRect(-1.2, -2.8, 2.4, 2.3);
}
g.fillStyle = "#2e2a2a";
g.fillRect(-0.05, -1.5, 0.1, 1.5);
g.fillRect(-0.18, -1.52, 0.36, 0.06);
g.fillStyle = "rgba(236,222,204,0.3)";
g.fillRect(-0.05, -1.5, 0.025, 1.5);
let gl = g.createLinearGradient(0, -1.88, 0, -1.52);
gl.addColorStop(0, "rgba(255,214,150," + L + ")");
gl.addColorStop(1, "rgba(255,140,55," + L + ")");
g.fillStyle = "#646a70";
g.fillRect(-0.12, -1.86, 0.24, 0.34);
g.fillStyle = "rgba(235,230,222,0.35)";
g.fillRect(-0.1, -1.84, 0.05, 0.3);
if (L > 0.01) {
  g.fillStyle = gl;
  g.fillRect(-0.12, -1.86, 0.24, 0.34);
}
g.strokeStyle = "#2e2a2a";
g.lineWidth = 0.03;
g.strokeRect(-0.12, -1.86, 0.24, 0.34);
g.fillStyle = "#2e2a2a";
g.beginPath();
g.moveTo(-0.17, -1.86);
g.lineTo(0, -2.0);
g.lineTo(0.17, -1.86);
g.closePath();
g.fill();
g.fillRect(-0.015, -2.08, 0.03, 0.09);
if (L > 0.01) e.light(0, -1.69, 4.6, "#ffa04a", 0.8 * L);
