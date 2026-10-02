const S = e.state,
  L = ((v) =>
    v === false || v === "false"
      ? 0
      : v == null || v === true || v === "true"
        ? 1
        : Math.max(0, Math.min(1, +v || 0)))(S.lamp_on),
  hold = S.photo_holder;
const pd = Math.max(0, Math.min(1, isFinite(+S.photo_distance_to_nina) ? +S.photo_distance_to_nina : 0.6)),
  r = +S.nina_reaching || 0;
if (hold !== "granddaughter") {
  if (hold === "nina") {
    const nx = -0.22 - 0.25 * r,
      ny = -0.72 - 0.1 * r;
    e.at((nx - 0.724) / 1.28, (1.7 + ny - 0.08) / 1.28 - 1.7);
  } else if (hold === "wall") e.at(0.5, -1.75);
  else e.at(1.12, -1.3);
  return;
}
const drawPhoto = (cx, cy, w, ang, face, L) => {
  const h = w * 0.7,
    m = w * 0.07,
    iw = w - 2 * m;
  g.save();
  g.translate(cx, cy);
  g.rotate(ang);
  g.fillStyle = "rgba(0,0,0,0.25)";
  g.fillRect(-w / 2 + 0.006, -h / 2 + 0.008, w, h);
  g.fillStyle = "#e6d9bb";
  g.fillRect(-w / 2, -h / 2, w, h);
  if (face) {
    const s = g.createLinearGradient(0, -h / 2, 0, h / 2);
    s.addColorStop(0, "#b89a70");
    s.addColorStop(1, "#7a5a3c");
    g.fillStyle = s;
    g.fillRect(-w / 2 + m, -h / 2 + m, iw, h - 2 * m);
    const base = h / 2 - m;
    for (let i = 0; i < 9; i++) {
      const x = -w / 2 + m + (iw * (i + 0.5)) / 9,
        fh = (h - 2 * m) * (i % 2 ? 0.62 : 0.7),
        r = iw * 0.028,
        bw = iw * 0.04;
      g.beginPath();
      g.ellipse(x, base - fh + r, r, r * 1.2, 0, 0, 7);
      g.rect(x - bw, base - fh + r * 2.2, bw * 2, fh - r * 2.2);
      if (i === 5) {
        g.fillStyle =
          L > 0.05 ? `rgba(255,${(200 + 30 * L) | 0},${(130 + 40 * L) | 0},${0.35 + 0.6 * L})` : "#1e140c";
        g.fill();
        g.strokeStyle = "rgba(255,240,210,0.6)";
        g.lineWidth = w * 0.006;
        g.stroke();
      } else {
        g.fillStyle = i === 4 ? "#e6dcc4" : "#3a2a1c";
        g.fill();
      }
    }
    const v = g.createRadialGradient(0, 0, w * 0.1, 0, 0, w * 0.6);
    v.addColorStop(0, "rgba(0,0,0,0)");
    v.addColorStop(1, "rgba(40,20,5,0.45)");
    g.fillStyle = v;
    g.fillRect(-w / 2 + m, -h / 2 + m, iw, h - 2 * m);
  } else {
    g.strokeStyle = "rgba(58,47,120,0.55)";
    g.lineWidth = w * 0.012;
    for (let k = 0; k < 3; k++) {
      const yy = -h * 0.2 + k * h * 0.17;
      g.beginPath();
      g.moveTo(-w * 0.38, yy);
      for (let j = 1; j <= 8; j++)
        g.lineTo(-w * 0.38 + j * w * (k === 2 ? 0.04 : 0.09), yy + Math.sin(j * 2.3 + k) * h * 0.03);
      g.stroke();
    }
  }
  g.restore();
};
const Hx = -0.75 + 0.6 * pd,
  Hy = -(0.88 + 0.14 * pd);
const cx = Hx + Math.sin(e.t * 0.9) * 0.003 + Math.sin(e.t * 2.3) * 0.0012,
  cy = Hy - 0.045 + Math.sin(e.t * 1.27 + 2) * 0.003;
const ang = -0.05 + 0.04 * (1 - pd) + Math.sin(e.t * 0.61) * 0.012 + Math.sin(e.t * 1.43) * 0.005;
const face = !!S.cutout_visible;
g.fillStyle = "#b8987a";
g.beginPath();
g.ellipse(cx - 0.095, cy + 0.045, 0.03, 0.022, 0.4, 0, 7);
g.fill();
drawPhoto(cx, cy, 0.2, ang, face, L);
if (face && L > 0.05) e.light(cx + 0.02, cy - 0.01, 0.09, "#ffd89a", 0.35 * L);
g.fillStyle = "#c8a888";
g.beginPath();
g.ellipse(cx + 0.095, cy + 0.04, 0.032, 0.024, -0.3, 0, 7);
g.fill();
g.beginPath();
g.ellipse(cx + 0.082, cy + 0.02, 0.012, 0.02, -0.2, 0, 7);
g.fill();
e.at(cx, cy - 0.09);
