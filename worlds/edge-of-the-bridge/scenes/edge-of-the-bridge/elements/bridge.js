const n = e.state.night ?? 0.3,
  t = e.t;
const hx = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
const mx = (a, b, k) => {
  const p = hx(a),
    q = hx(b);
  return p.map((v, i) => Math.round(v + (q[i] - v) * k));
};
const cs = (c, al) => "rgba(" + c.join(",") + "," + (al == null ? 1 : al) + ")";
const st = mx("#3a3347", "#15141f", n),
  fog = mx("#8a778c", "#2a2b44", n);
const fade = (y0, y1) => {
  const gr = g.createLinearGradient(0, y0, 0, y1);
  gr.addColorStop(0, cs(st));
  gr.addColorStop(0.35, cs(st, 0.85));
  gr.addColorStop(1, cs(fog, 0));
  return gr;
};
g.fillStyle = fade(1.5, 26);
[-14, -38, -62].forEach((p) => {
  g.beginPath();
  g.moveTo(p - 1.6, 1.5);
  g.lineTo(p + 1.6, 1.5);
  g.lineTo(p + 2.2, 26);
  g.lineTo(p - 2.2, 26);
  g.closePath();
  g.fill();
});
g.save();
g.beginPath();
g.rect(-85, 1.5, 71, 5.2);
g.clip();
g.fillStyle = fade(1.5, 8);
g.beginPath();
g.rect(-85, 1.5, 71, 5);
[
  [-86, -62],
  [-62, -38],
  [-38, -14],
].forEach((s) => {
  const c = (s[0] + s[1]) / 2,
    w = (s[1] - s[0]) / 2 - 1.6;
  g.moveTo(c - w, 6.5);
  g.ellipse(c, 6.5, w, 4.6, 0, Math.PI, 2 * Math.PI);
  g.closePath();
});
g.fill("evenodd");
g.restore();
g.fillStyle = fade(1.5, 7);
g.beginPath();
g.moveTo(-14, 1.5);
g.lineTo(-14, 6);
g.quadraticCurveTo(-11.5, 3.2, -8, 2.5);
g.lineTo(-7.4, 3.1);
g.lineTo(-6.6, 2.2);
g.lineTo(-5.8, 1.6);
g.closePath();
g.fill();
g.fillStyle = cs(st);
g.beginPath();
g.moveTo(-85, -0.95);
g.lineTo(-3.4, -0.95);
g.lineTo(-3.1, -0.55);
g.lineTo(-2.7, -0.7);
g.lineTo(-2.45, 0);
g.lineTo(0, 0);
g.lineTo(0.18, 0.35);
g.lineTo(-0.15, 0.7);
g.lineTo(0.05, 1.0);
g.lineTo(-0.6, 1.25);
g.lineTo(-1.3, 1.15);
g.lineTo(-2.0, 1.6);
g.lineTo(-85, 1.6);
g.closePath();
g.fill();
g.fillStyle = cs(mx("#20202e", "#0b0b14", n), 0.55);
for (let x = -84; x < -4; x += 1.4) {
  g.fillRect(x, -0.72, 0.75, 0.4);
}
const rim = mx("#d8b8a8", "#8a8cb0", n);
g.strokeStyle = cs(rim, 0.5);
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(-85, -0.95);
g.lineTo(-3.4, -0.95);
g.stroke();
g.strokeStyle = cs(rim, 0.3);
g.beginPath();
g.moveTo(-2.45, 0);
g.lineTo(0, 0);
g.stroke();
g.strokeStyle = cs(mx("#2c3a34", "#121a18", n), 0.85);
g.lineWidth = 0.035;
for (let i = 0; i < 5; i++) {
  const x = -1.7 + i * 0.36,
    l = 0.3 + e.rnd() * 0.7;
  const sw = Math.sin(t * 0.7 + i * 1.3) * 0.06 + Math.sin(t * 0.29 + i) * 0.04;
  const y0 = 1.0 + e.rnd() * 0.3;
  g.beginPath();
  g.moveTo(x, y0);
  g.quadraticCurveTo(x + sw * 0.5, y0 + l * 0.5, x + sw, y0 + l);
  g.stroke();
}
const p = (t * 0.05) % 1;
if (p < 0.3) {
  const k = p / 0.3;
  g.fillStyle = cs(st, 1 - k);
  g.fillRect(-0.4, 1.3 + k * k * 20, 0.06, 0.06);
}
