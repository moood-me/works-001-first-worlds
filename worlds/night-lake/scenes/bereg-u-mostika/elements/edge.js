const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t,
  S = e.state || {};
const tr = Math.min(1, (S.waterTremble ?? 0.25) + (S.gust || 0) * 0.5);
g.save();
g.beginPath();
g.rect(-9.5, -1, 10.6, 2);
g.clip();
const bg = g.createLinearGradient(0, -0.35, 0, 0.05);
bg.addColorStop(0, "rgba(4,8,18,0)");
bg.addColorStop(1, "rgba(4,8,18,0.55)");
g.fillStyle = bg;
g.fillRect(-9, -0.35, 18, 0.4);
g.lineCap = "round";
for (let i = 0; i < 70; i++) {
  const x0 = -9 + 18 * h(i + 1);
  const yb = -0.3 * Math.pow(h(i + 2), 1.5);
  const run = Math.sin(t * (0.35 + 0.3 * h(i + 3)) + i * 1.7);
  const y = yb + 0.015 * run * (1 + 3 * tr);
  const len = (0.15 + 0.5 * h(i + 4)) * (1 + yb * 1.5);
  g.globalAlpha = Math.max(
    0,
    (0.06 + 0.16 * h(i + 5)) * (0.5 + 0.5 * Math.sin(t * (0.5 + 0.6 * h(i + 6)) + i)) * (0.7 + 1.2 * tr),
  );
  g.strokeStyle = h(i + 7) < 0.6 ? "#8298c8" : "#050913";
  g.lineWidth = 0.008 + 0.01 * h(i + 8);
  g.beginPath();
  g.moveTo(x0, y);
  g.lineTo(x0 + len, y);
  g.stroke();
}
const lap = 0.02 * Math.sin(t * 0.6) + 0.012 * Math.sin(t * 1.37 + 1) + tr * 0.03 * Math.sin(t * 2.1);
g.globalAlpha = 0.25 + 0.2 * tr;
g.strokeStyle = "#8ea4d0";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(-9, -0.01 + lap);
for (let x = -8.75; x <= 9.01; x += 0.25) g.lineTo(x, -0.01 + lap + 0.006 * Math.sin(x * 3 + t * 0.8));
g.stroke();
g.globalAlpha = 1;
if (S.flashlight && S.aim === "water") {
  g.globalCompositeOperation = "lighter";
  const fx = -1.8 + 0.25 * Math.sin(t * 0.31) + 0.08 * Math.sin(t * 0.83),
    fy = -0.12;
  const r = 1.2;
  g.save();
  g.translate(fx, fy);
  g.scale(1, 0.12);
  const fg = g.createRadialGradient(0, 0, 0, 0, 0, r);
  fg.addColorStop(0, "rgba(255,205,130,0.4)");
  fg.addColorStop(0.5, "rgba(230,170,100,0.13)");
  fg.addColorStop(1, "rgba(200,140,80,0)");
  g.fillStyle = fg;
  g.fillRect(-r, -r, 2 * r, 2 * r);
  g.restore();
  g.fillStyle = "#ffd9a0";
  for (let i = 0; i < 8; i++) {
    const q = h(i + 500);
    const on = Math.max(0, Math.sin(t * (0.7 + q * 0.6) + i * 2.7));
    g.globalAlpha = on * on * 0.5;
    g.fillRect(
      fx + (q - 0.5) * 1.8 + Math.sin(t * 0.6 + i) * 0.05,
      fy + (h(i + 520) - 0.5) * 0.14,
      0.12 * (0.5 + q),
      0.008,
    );
  }
  g.globalAlpha = 1;
  g.globalCompositeOperation = "source-over";
}
g.restore();
