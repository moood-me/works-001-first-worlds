const s = e.state,
  t = e.t;
let L = s.lamp === "погас" ? 0 : 1;
if (s.lamp === "мигает") {
  const n = Math.sin(t * 17.3) * Math.sin(t * 3.1) + Math.sin(t * 0.71);
  L = n > 0.55 ? 0.12 : n > 0.4 ? 0.5 : 1;
}
if (L > 0) {
  let c = g.createLinearGradient(0, -4.8, 0, 0);
  c.addColorStop(0, "rgba(230,165,90," + 0.17 * L + ")");
  c.addColorStop(1, "rgba(230,165,90,0.02)");
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(0.55, -4.82);
  g.lineTo(0.85, -4.82);
  g.lineTo(3.1, 0);
  g.lineTo(-1.7, 0);
  g.closePath();
  g.fill();
  g.save();
  g.translate(0.7, 0);
  g.scale(1, 0.15);
  let p = g.createRadialGradient(0, 0, 0, 0, 0, 3);
  p.addColorStop(0, "rgba(230,165,90," + 0.32 * L + ")");
  p.addColorStop(1, "rgba(230,165,90,0)");
  g.fillStyle = p;
  g.beginPath();
  g.arc(0, 0, 3, 0, 7);
  g.fill();
  g.restore();
  e.light(0.7, -4.78, 6, "#e6a35a", 0.85 * L);
}
g.fillStyle = "#121317";
g.fillRect(-0.07, -4.9, 0.14, 4.9);
g.fillRect(-0.12, -0.6, 0.24, 0.6);
g.strokeStyle = "#121317";
g.lineWidth = 0.09;
g.beginPath();
g.moveTo(0, -4.85);
g.quadraticCurveTo(0, -5.25, 0.5, -5.15);
g.stroke();
g.beginPath();
g.moveTo(0.4, -5.14);
g.lineTo(1.0, -5.14);
g.lineTo(0.86, -4.86);
g.lineTo(0.54, -4.86);
g.closePath();
g.fill();
g.fillStyle = "rgba(255,214,150," + (0.15 + 0.85 * L) + ")";
g.beginPath();
g.ellipse(0.7, -4.85, 0.13, 0.04, 0, 0, 7);
g.fill();
g.fillStyle = "rgba(230,165,90," + 0.18 * L + ")";
g.fillRect(0.03, -4.8, 0.035, 4.2);
