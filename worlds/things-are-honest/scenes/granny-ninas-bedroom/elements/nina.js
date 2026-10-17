const S = e.state,
  L = ((v) =>
    v === false || v === "false" ? 0 : v == null || v === true || v === "true" ? 1 : Math.max(0, Math.min(1, +v || 0)))(
    S.lamp_on,
  ),
  hold = S.photo_holder;
const r = Math.max(0, Math.min(1, +S.nina_reaching || 0)),
  pd = Math.max(0, Math.min(1, isFinite(+S.photo_distance_to_nina) ? +S.photo_distance_to_nina : 0.6));
const br = Math.sin(e.t * 0.9) * 0.008 + Math.sin(e.t * 0.37) * 0.003,
  lf = -0.035 * r;
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
        g.fillStyle = L > 0.05 ? `rgba(255,${(200 + 30 * L) | 0},${(130 + 40 * L) | 0},${0.35 + 0.6 * L})` : "#1e140c";
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
const wv = g.createLinearGradient(-1.2, 0, -1.05, 0);
wv.addColorStop(0, "#4a2a16");
wv.addColorStop(1, "#6e4226");
g.fillStyle = wv;
g.fillRect(-1.2, -0.98, 0.12, 0.98);
g.fillStyle = "#6e4226";
g.beginPath();
g.arc(-1.14, -0.98, 0.06, 0, 7);
g.fill();
g.fillStyle = "#3a2418";
g.fillRect(-1.1, -0.34, 2.25, 0.3);
g.fillRect(1.05, -0.62, 0.1, 0.62);
g.fillRect(-1.08, -0.05, 0.06, 0.05);
g.fillRect(1.0, -0.05, 0.06, 0.05);
g.fillStyle = "#d9ccb2";
g.fillRect(-1.08, -0.52, 2.15, 0.2);
g.fillStyle = "#efe6d2";
g.beginPath();
g.ellipse(-0.8, -0.56, 0.24, 0.1, 0, 0, 7);
g.fill();
g.fillStyle = "#d8b898";
g.beginPath();
g.ellipse(-0.74 + 0.015 * r, -0.63 + lf, 0.085, 0.075, 0.2 - 0.15 * r, 0, 7);
g.fill();
g.fillStyle = "#b8b4ae";
g.beginPath();
g.ellipse(-0.8, -0.67 + lf, 0.09, 0.055, 0.1, Math.PI, 0);
g.fill();
g.beginPath();
g.arc(-0.9, -0.64 + lf, 0.045, 0, 7);
g.fill();
g.strokeStyle = "#3a2418";
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(-0.72 + 0.015 * r, -0.6 + lf);
g.quadraticCurveTo(-0.7 + 0.015 * r, -0.59 + lf - 0.01 * r, -0.68 + 0.015 * r, -0.6 + lf);
g.stroke();
g.save();
g.beginPath();
g.moveTo(-0.66, -0.52);
g.quadraticCurveTo(-0.3, -0.72 - br, 0.3, -0.64 - br * 0.6);
g.quadraticCurveTo(0.9, -0.6, 1.05, -0.5);
g.lineTo(1.05, -0.3);
g.lineTo(-0.7, -0.3);
g.closePath();
g.fillStyle = "#6a3a2a";
g.fill();
g.clip();
g.strokeStyle = "rgba(210,170,110,0.4)";
g.lineWidth = 0.02;
for (let x = -0.7; x < 1.1; x += 0.12) {
  g.beginPath();
  g.moveTo(x, -0.8);
  g.lineTo(x, -0.3);
  g.stroke();
}
for (let y = -0.78; y < -0.3; y += 0.12) {
  g.beginPath();
  g.moveTo(-0.7, y);
  g.lineTo(1.1, y);
  g.stroke();
}
g.fillStyle = "rgba(0,0,0,0.25)";
g.fillRect(-0.7, -0.8, 1.8, 0.5);
g.restore();
g.strokeStyle = "rgba(159,180,224,0.3)";
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(-0.66, -0.52);
g.quadraticCurveTo(-0.3, -0.72 - br, 0.3, -0.64 - br * 0.6);
g.stroke();
// her hand: resting, reaching toward the photo, or holding it
let hx = -0.25,
  hy = -0.62 - br,
  ph = null;
if (hold === "nina") {
  ph = [-0.22 - 0.25 * r, -0.72 - 0.1 * r - br];
  hx = ph[0] + 0.085;
  hy = ph[1] + 0.04;
} else if (r > 0.01) {
  let tx = -0.2,
    ty = -0.85;
  if (hold === "granddaughter") {
    const qx = -0.75 + 0.6 * pd - 0.08,
      qy = -(0.88 + 0.14 * pd) + 0.01;
    tx = 0.724 + qx * 1.28;
    ty = (1.7 + qy) * 1.28 - 1.7;
  }
  const sx = -0.55,
    sy = -0.62;
  let dx = tx - sx,
    dy = ty - sy;
  const d = Math.hypot(dx, dy);
  if (d > 0.62) {
    dx *= 0.62 / d;
    dy *= 0.62 / d;
  }
  hx += (sx + dx - hx) * r;
  hy += (sy + dy - hy) * r;
  hx += Math.sin(e.t * 2.1) * 0.004 * r;
  hy += Math.sin(e.t * 1.7 + 1) * 0.004 * r;
}
if (r > 0.01 || ph) {
  g.strokeStyle = "#cfc2a8";
  g.lineCap = "round";
  g.lineWidth = 0.045;
  g.beginPath();
  g.moveTo(-0.5, -0.6);
  g.quadraticCurveTo((-0.5 + hx) / 2, Math.min(-0.6, hy) - 0.05 * r, hx, hy);
  g.stroke();
}
if (ph) {
  g.fillStyle = "#d8b898";
  g.beginPath();
  g.ellipse(ph[0] - 0.085, ph[1] + 0.04, 0.035, 0.02, 0.4, 0, 7);
  g.fill();
  drawPhoto(ph[0], ph[1], 0.2, -0.22 + 0.15 * r, !!S.cutout_visible, L);
  if (S.cutout_visible && L > 0.05) e.light(ph[0] + 0.02, ph[1] - 0.01, 0.07, "#ffd89a", 0.3 * L);
}
g.fillStyle = "#d8b898";
g.beginPath();
g.ellipse(hx, hy, 0.05, 0.022, 0.3 - 0.5 * r, 0, 7);
g.fill();
e.at(-0.76, -0.74 + lf);
