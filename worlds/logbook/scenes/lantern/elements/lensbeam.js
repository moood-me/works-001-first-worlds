const D = 2.595,
  A = -0.25,
  EY = 1.7,
  t = e.t,
  st = e.state;
const fl =
  1 +
  0.05 * Math.sin(t * 7.3) +
  0.035 * Math.sin(t * 12.7 + 1.3) +
  0.06 * Math.sin(t * 1.9 + 0.4) * Math.sin(t * 0.53);
const L = Math.max(0, (st.lamp ?? 0.6) * fl * (1 - (st.shutter || 0)));
if (L < 0.02) return;
const rain = st.rain ?? 0.4,
  rot = t * 0.28;
g.globalCompositeOperation = "lighter";
for (let i = 0; i < 4; i++) {
  const th = rot + (i * Math.PI) / 2,
    sn = Math.sin(th),
    c = Math.cos(th);
  const smax = c > 0 ? Math.min(30, (D - 1.3) / c) : 30;
  const pt = (s, side) => {
    const d = D - s * c,
      w = 0.16 + 0.05 * s;
    return [((A + s * sn) * D) / d - A, -EY + ((EY - 1.85 + side * w) * D) / d];
  };
  let s0 = 0.5;
  for (let j = 0; j < 26 && s0 < smax; j++) {
    const s1 = Math.min(smax, s0 + 0.25 + s0 * 0.18),
      a = L * (0.07 * Math.exp(-s0 / 3) + 0.03 * rain * Math.exp(-s0 / 14)) * (0.5 + 0.5 * Math.abs(sn));
    const p0 = pt(s0, -1),
      p1 = pt(s1, -1),
      p2 = pt(s1, 1),
      p3 = pt(s0, 1);
    g.fillStyle = `rgba(255,222,165,${a})`;
    g.beginPath();
    g.moveTo(p0[0], p0[1]);
    g.lineTo(p1[0], p1[1]);
    g.lineTo(p2[0], p2[1]);
    g.lineTo(p3[0], p3[1]);
    g.closePath();
    g.fill();
    s0 = s1;
  }
}
