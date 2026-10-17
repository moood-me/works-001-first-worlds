const t = e.t;
g.fillStyle = "#22243a";
g.beginPath();
g.moveTo(-3, 0);
g.lineTo(-1.8, -110);
g.lineTo(1.8, -110);
g.lineTo(3, 0);
g.fill();
g.fillStyle = "rgba(120,60,64,0.35)";
g.fillRect(-2, -108, 4, 10);
g.fillRect(-2.2, -88, 4.4, 8);
for (let k = 0; k < 16; k++) {
  const ph = (t * 0.015 + k / 16) % 1;
  const x = ph * 60 + Math.sin(ph * 6 + k) * 2;
  const y = -112 - ph * 18;
  const r = 2 + ph * 12;
  g.fillStyle = "rgba(95,92,110," + 0.16 * (1 - ph) + ")";
  g.beginPath();
  g.arc(x, y, r, 0, 7);
  g.fill();
}
const b = Math.max(0, Math.sin(t * 1.1)) ** 6;
e.light(0, -111, 9, "#c83a3a", 0.2 + 0.6 * b);
