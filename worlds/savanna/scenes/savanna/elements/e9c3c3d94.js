const A = e.aspect;
const C = [
  [0.08, 0.47, 0.13],
  [0.3, 0.51, 0.09],
  [0.62, 0.45, 0.17],
  [0.86, 0.5, 0.11],
];
for (const c of C) {
  const x = ((c[0] + e.t * 0.0008) % 1.2) * (A + 0.4) - 0.2,
    y = c[1],
    w = c[2];
  g.save();
  g.beginPath();
  g.rect(x - w, y - w, w * 2, w + 0.004);
  g.clip();
  for (let j = 0; j < 9; j++) {
    const px = x + (e.rnd() - 0.5) * w * 1.3,
      py = y - e.rnd() * w * 0.25,
      pr = w * (0.18 + e.rnd() * 0.22);
    const r = g.createRadialGradient(px - pr * 0.3, py - pr * 0.3, 0, px, py, pr);
    r.addColorStop(0, "rgba(255,244,222,0.6)");
    r.addColorStop(0.6, "rgba(236,214,186,0.38)");
    r.addColorStop(1, "rgba(220,200,180,0)");
    g.fillStyle = r;
    g.beginPath();
    g.arc(px, py, pr, 0, 6.2832);
    g.fill();
  }
  g.restore();
}
g.lineCap = "round";
for (let i = 0; i < 5; i++) {
  const y = 0.08 + i * 0.035 + e.rnd() * 0.02,
    x = A * (0.45 + e.rnd() * 0.3) + e.t * 0.0015,
    L = 0.3 + e.rnd() * 0.15;
  for (let k = 0; k < 3; k++) {
    g.strokeStyle = "rgba(255,240,215," + (0.04 + k * 0.025) + ")";
    g.lineWidth = 0.02 - k * 0.006;
    g.beginPath();
    g.moveTo(x, y);
    g.quadraticCurveTo(x + L * 0.5, y - 0.02, x + L, y + 0.01);
    g.stroke();
  }
}
