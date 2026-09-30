const a0 = e.t * 0.55;
g.globalCompositeOperation = "lighter";
let flash = 0;
for (const a of [a0, a0 + Math.PI]) {
  const s = Math.sin(a),
    c = Math.cos(a);
  flash = Math.max(flash, Math.pow(Math.max(0, -c), 12));
  // across the screen its length shows as sin; pointing away it shortens and thins
  const L = 380 * Math.abs(s) * (0.35 + 0.65 * Math.max(0, c) + 0.3),
    dir = Math.sign(s) || 1,
    dy = 6 * (1 - Math.abs(s)) + 8;
  const w0 = 1.2,
    w1 = 9 + 22 * (1 - Math.abs(s));
  const inten = (0.35 + 0.65 * Math.abs(s)) * (c > 0 ? 0.8 : 1);
  const gr = g.createLinearGradient(0, 0, dir * L, dy);
  gr.addColorStop(0, `rgba(255,236,190,${0.4 * inten})`);
  gr.addColorStop(0.3, `rgba(255,225,170,${0.14 * inten})`);
  gr.addColorStop(1, "rgba(255,220,170,0)");
  g.fillStyle = gr;
  for (const k of [2, 1]) {
    g.globalAlpha = k === 2 ? 0.45 : 0.8;
    g.beginPath();
    g.moveTo(0, -w0 * k);
    g.lineTo(dir * L, dy - w1 * k);
    g.lineTo(dir * L, dy + w1 * k);
    g.lineTo(0, w0 * k);
    g.closePath();
    g.fill();
  }
  g.globalAlpha = 1;
}
const R = 3 + flash * 70;
const f = g.createRadialGradient(0, 0, 0, 0, 0, R);
f.addColorStop(0, `rgba(255,248,225,${0.45 + flash * 0.5})`);
f.addColorStop(0.15, `rgba(255,215,150,${0.2 + flash * 0.3})`);
f.addColorStop(1, "rgba(255,190,120,0)");
g.fillStyle = f;
g.fillRect(-R, -R, R * 2, R * 2);
if (flash > 0.05) {
  const h = g.createLinearGradient(-R * 1.4, 0, R * 1.4, 0);
  h.addColorStop(0, "rgba(255,235,200,0)");
  h.addColorStop(0.5, `rgba(255,235,200,${flash * 0.45})`);
  h.addColorStop(1, "rgba(255,235,200,0)");
  g.fillStyle = h;
  g.fillRect(-R * 1.4, -0.35, R * 2.8, 0.7);
}
