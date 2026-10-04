const L = e.state.lantern ?? 1;
if (L > 0.01) {
  let hl = g.createRadialGradient(0, -1.69, 0, 0, -1.69, 1.1);
  hl.addColorStop(0, "rgba(170,210,255," + 0.35 * L + ")");
  hl.addColorStop(0.4, "rgba(110,165,240," + 0.12 * L + ")");
  hl.addColorStop(1, "rgba(110,165,240,0)");
  g.fillStyle = hl;
  g.fillRect(-1.2, -2.8, 2.4, 2.3);
}
g.fillStyle = "#141113";
g.fillRect(-0.05, -1.5, 0.1, 1.5);
g.fillRect(-0.18, -1.52, 0.36, 0.06);
let gl = g.createLinearGradient(0, -1.88, 0, -1.52);
gl.addColorStop(0, "rgba(232,244,255," + (0.25 + 0.75 * L) + ")");
gl.addColorStop(1, "rgba(120,175,245," + (0.2 + 0.75 * L) + ")");
g.fillStyle = L > 0.02 ? gl : "#2a2a2e";
g.fillRect(-0.12, -1.86, 0.24, 0.34);
g.strokeStyle = "#141113";
g.lineWidth = 0.03;
g.strokeRect(-0.12, -1.86, 0.24, 0.34);
g.fillStyle = "#141113";
g.beginPath();
g.moveTo(-0.17, -1.86);
g.lineTo(0, -2.0);
g.lineTo(0.17, -1.86);
g.closePath();
g.fill();
g.fillRect(-0.015, -2.08, 0.03, 0.09);
if (L > 0.01) e.light(0, -1.69, 4.6, "#9cc6ff", 1.05 * L);
