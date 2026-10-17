const s = e.state || {};
const L = s.lamp != null ? s.lamp : 1;
g.strokeStyle = "#161b1b";
g.lineWidth = 0.13;
g.beginPath();
g.moveTo(0, 0);
g.lineTo(0, -4.6);
g.quadraticCurveTo(0, -5.2, 0.7, -5.15);
g.stroke();
g.fillStyle = "#1c2121";
g.beginPath();
g.ellipse(0.85, -5.1, 0.32, 0.1, 0, 0, 7);
g.fill();
const fl =
  L *
  (0.93 +
    0.07 * Math.sin(e.t * 23) * Math.sin(e.t * 2.3) -
    1.5 * Math.max(0, Math.sin(e.t * 0.71) * Math.sin(e.t * 1.93) - 0.85));
if (fl > 0.02) {
  g.fillStyle = "rgba(255,195,120," + fl + ")";
  g.beginPath();
  g.ellipse(0.85, -5.0, 0.2, 0.05, 0, 0, 7);
  g.fill();
  let cg = g.createLinearGradient(0, -5, 0, 0);
  cg.addColorStop(0, "rgba(255,160,70," + 0.1 * fl + ")");
  cg.addColorStop(1, "rgba(255,160,70,0)");
  g.fillStyle = cg;
  g.beginPath();
  g.moveTo(0.65, -5);
  g.lineTo(1.05, -5);
  g.lineTo(3.2, 0);
  g.lineTo(-1.5, 0);
  g.closePath();
  g.fill();
  e.light(0.85, -4.95, 6, "#ffa04a", 0.8 * fl);
  for (let i = 0; i < 4; i++) {
    const a = e.t * (1.3 + i * 0.37) + i * 2;
    g.fillStyle = "rgba(255,220,170," + 0.7 * fl + ")";
    g.fillRect(
      0.85 + Math.cos(a) * 0.35 * (1 + 0.3 * Math.sin(e.t * 0.7 + i)),
      -4.85 + Math.sin(a * 1.3) * 0.18,
      0.03,
      0.03,
    );
  }
}
