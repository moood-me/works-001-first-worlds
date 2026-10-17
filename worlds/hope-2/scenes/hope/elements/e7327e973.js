const t = e.t;
const C = ["#7d5a35", "#8a6a3f", "#6f5236", "#957045", "#80603a", "#735638", "#8f6843"];
for (let i = 0; i < 7; i++) {
  const P = 11.3 + i * 2.37 + (i % 3) * 1.9,
    off = i * 4.13,
    k = Math.floor((t + off) / P),
    age = t + off - k * P;
  const hh = (n) => {
    const v = Math.sin(n * 91.7 + i * 13.3) * 43758.5453;
    return v - Math.floor(v);
  };
  const x0 = (hh(k) - 0.3) * 9,
    y = -4.8 + age * 0.43;
  if (y > 0.05) continue;
  const x = x0 - age * 0.28 + Math.sin(age * 1.1 + i) * 0.35 + Math.sin(age * 2.3 + i * 2) * 0.08;
  const sz = 0.035 + (i % 4) * 0.009,
    b = 0.6 + ((i * 0.137) % 0.4);
  g.save();
  g.translate(x, y);
  g.rotate(Math.sin(age * 1.7 + i) * 1.1 + age * 0.4 * (i % 2 ? 1 : -1));
  g.scale(1, 0.35 + 0.65 * Math.abs(Math.cos(age * 1.3 + i)));
  g.globalAlpha = Math.min(1, age * 0.8) * 0.9;
  g.fillStyle = C[i];
  g.beginPath();
  g.moveTo(-sz, 0);
  g.bezierCurveTo(-sz * 0.4, -sz * b, sz * 0.5, -sz * b * 0.9, sz, 0);
  g.bezierCurveTo(sz * 0.5, sz * b * 0.7, -sz * 0.4, sz * b * 0.8, -sz, 0);
  g.fill();
  g.strokeStyle = C[i];
  g.lineWidth = sz * 0.1;
  g.beginPath();
  g.moveTo(-sz, 0);
  g.lineTo(-sz * 1.35, sz * 0.1);
  g.stroke();
  g.restore();
}
g.globalAlpha = 1;
