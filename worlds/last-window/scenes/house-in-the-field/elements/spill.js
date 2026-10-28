const L = e.state.lamp || 0;
if (L <= 0) return;
let rg = g.createRadialGradient(2.2, -5, 0, 2.2, -5, 9);
rg.addColorStop(0, "rgba(255,180,100," + 0.3 * L + ")");
rg.addColorStop(1, "rgba(255,180,100,0)");
g.fillStyle = rg;
g.fillRect(-15, -7, 30, 14);
if (e.state.door) {
  let gr = g.createLinearGradient(0, -5, 0, 6);
  gr.addColorStop(0, "rgba(255,175,90," + 0.45 * L + ")");
  gr.addColorStop(1, "rgba(255,175,90,0)");
  g.fillStyle = gr;
  g.beginPath();
  g.moveTo(-2.6, -5);
  g.lineTo(-1.6, -5);
  g.lineTo(0.6, 7);
  g.lineTo(-4.8, 7);
  g.closePath();
  g.fill();
}
