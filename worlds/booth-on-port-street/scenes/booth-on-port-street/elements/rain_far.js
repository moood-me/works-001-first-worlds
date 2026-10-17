const s = e.state,
  t = e.t,
  R = s.rain;
if (R <= 0.01) return;
let L = s.lamp === "off" ? 0 : 1;
if (s.lamp === "flickering") {
  const n = Math.sin(t * 17.3) * Math.sin(t * 3.1) + Math.sin(t * 0.71);
  L = n > 0.55 ? 0.12 : n > 0.4 ? 0.5 : 1;
}
g.lineWidth = 0.016;
const n = Math.floor(420 * R);
for (let i = 0; i < n; i++) {
  const x0 = -14 + e.rnd() * 28;
  const sp = 7 + e.rnd() * 3;
  const o = e.rnd() * 7.2;
  const y = ((o + t * sp) % 7.2) - 7;
  const x = x0 + (y + 7) * 0.05;
  const d = Math.hypot(x, (y + 3) * 0.6);
  const lit = L * Math.max(0, 1 - d / 3.2);
  g.strokeStyle = lit > 0.02 ? "rgba(240,190,120," + (0.08 + 0.4 * lit) + ")" : "rgba(150,160,180,0.08)";
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + 0.016, y + 0.3);
  g.stroke();
}
