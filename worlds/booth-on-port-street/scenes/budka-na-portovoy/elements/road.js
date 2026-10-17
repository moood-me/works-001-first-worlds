const s = e.state,
  t = e.t,
  R = s.rain,
  D = 5.85;
g.fillStyle = "#0b0d11";
g.fillRect(-22, -D, 44, 2 * D);
for (let i = 0; i < 40; i++) {
  const x = -22 + e.rnd() * 44,
    y = -D + e.rnd() * 2 * D,
    r = 0.5 + e.rnd() * 2;
  let c = g.createRadialGradient(x, y, 0, x, y, r);
  c.addColorStop(0, "rgba(38,44,56,0.4)");
  c.addColorStop(1, "rgba(38,44,56,0)");
  g.fillStyle = c;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
g.fillStyle = "rgba(150,148,135,0.09)";
for (let x = -22; x < 22; x += 3.2) g.fillRect(x, -0.06, 1.7, 0.12);
let L = s.lamp === "off" ? 0 : 1;
if (s.lamp === "flickering") {
  const n = Math.sin(t * 17.3) * Math.sin(t * 3.1) + Math.sin(t * 0.71);
  L = n > 0.55 ? 0.12 : n > 0.4 ? 0.5 : 1;
}
let N = s.neon === "off" ? 0 : 1;
if (s.neon === "flickering") {
  const n = Math.sin(t * 9.7) * Math.sin(t * 2.3) + 0.6 * Math.sin(t * 0.43);
  N = n > 0.75 ? 0.05 : n > 0.6 ? 0.45 : 1;
}
function refl(x, col, a, wd) {
  if (a <= 0.01) return;
  for (let y = -D; y < D; y += 0.07) {
    const k =
      0.5 + 0.5 * Math.sin(y * 6.1 + t * 1.5 + x) * Math.sin(y * 2.3 - t * 0.83) + 0.25 * Math.sin(y * 13.7 + t * 2.9);
    const ww = wd * Math.max(0.15, 0.4 + 0.9 * k) * (1 + (y + D) * 0.06);
    g.fillStyle = "rgba(" + col + "," + Math.max(0, a * (0.25 + 0.75 * k) * (1 - (y + D) / (2 * D + 3))) + ")";
    g.fillRect(x - ww / 2, y, ww, 0.035);
  }
}
refl(-1.8, "230,165,90", 0.4 * L, 0.6);
refl(3.2, "190,225,205", 0.2, 0.45);
refl(-0.5, "200,65,75", 0.2 * N, 0.35);
if (s.window !== "dark") refl(-7.9, "220,168,104", 0.12, 0.3);
g.strokeStyle = "rgb(170,180,195)";
g.lineWidth = 0.012;
const n = Math.floor(90 * R);
for (let i = 0; i < n; i++) {
  const x = -22 + e.rnd() * 44,
    y = -D + e.rnd() * 2 * D,
    sp = 0.5 + e.rnd() * 0.4;
  const ph = (t * sp + e.rnd()) % 1;
  g.globalAlpha = (1 - ph) * 0.22;
  g.beginPath();
  g.arc(x, y, 0.03 + ph * 0.28, 0, 7);
  g.stroke();
}
g.globalAlpha = 1;
