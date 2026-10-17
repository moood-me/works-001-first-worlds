const S = e.state,
  L = ((v) =>
    v === false || v === "false" ? 0 : v == null || v === true || v === "true" ? 1 : Math.max(0, Math.min(1, +v || 0)))(
    S.lamp_on,
  ),
  o = S.box_open ? 1 : 0,
  ls = Math.max(0, Math.min(1, +S.letters_shifted || 0));
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
const env = (x, y, ang, a, stranger) => {
  g.save();
  g.globalAlpha = a;
  g.translate(x, y);
  g.rotate(ang);
  g.fillStyle = "rgba(0,0,0,0.25)";
  g.fillRect(-0.05, -0.03, 0.105, 0.068);
  g.fillStyle = stranger ? "#efe2c4" : "#d9c9a4";
  g.fillRect(-0.055, -0.035, 0.11, 0.07);
  g.strokeStyle = "rgba(90,70,40,0.5)";
  g.lineWidth = 0.002;
  g.beginPath();
  g.moveTo(-0.055, -0.035);
  g.lineTo(0, 0.002);
  g.lineTo(0.055, -0.035);
  g.stroke();
  g.fillStyle = "#8a2a1a";
  g.fillRect(0.03, -0.03, 0.018, 0.022);
  g.strokeStyle = stranger ? "rgba(30,30,40,0.7)" : "rgba(58,47,120,0.6)";
  g.lineWidth = 0.0025;
  g.beginPath();
  g.moveTo(-0.03, 0.012);
  g.lineTo(0.025, 0.01);
  g.moveTo(-0.025, 0.022);
  g.lineTo(0.02, 0.022);
  g.stroke();
  g.fillStyle = `rgba(255,214,150,${0.15 * L})`;
  g.fillRect(-0.055, -0.035, 0.11, 0.008);
  g.restore();
};
if (S.photo_holder === "dresser") drawPhoto(-0.25, -0.075, 0.2, -0.12, !!S.cutout_visible, L);
if (o) {
  g.fillStyle = "#7a5a30";
  g.fillRect(-0.13, -0.25, 0.26, 0.15);
  g.fillStyle = "#4a1414";
  g.fillRect(-0.115, -0.238, 0.23, 0.13);
  g.fillStyle = `rgba(255,207,138,${0.05 + 0.15 * L})`;
  g.fillRect(-0.115, -0.238, 0.23, 0.01);
  g.fillStyle = "#1e120a";
  g.fillRect(-0.12, -0.105, 0.24, 0.03);
  for (let k = 0; k < 4; k++) {
    g.fillStyle = k % 2 ? "#d6c6a0" : "#e8dcc0";
    g.fillRect(-0.105 + k * 0.05, -0.112 + (k % 2) * 0.006, 0.046, 0.03);
  }
  env(0.0 + 0.06 * ls, -0.12 - 0.05 * ls, -0.05 + 0.4 * ls, 1, true);
}
const t = g.createLinearGradient(0, -0.1, 0, 0);
t.addColorStop(0, "#9a7a44");
t.addColorStop(1, "#5a4020");
g.fillStyle = t;
g.fillRect(-0.12, -0.075, 0.24, 0.075);
if (o) {
  g.fillStyle = "#b08a4a";
  g.fillRect(-0.13, -0.085, 0.26, 0.012);
} else {
  g.fillStyle = "#b08a4a";
  g.fillRect(-0.13, -0.1, 0.26, 0.03);
  g.fillStyle = `rgba(255,255,255,${0.1 + 0.25 * L})`;
  g.fillRect(-0.13, -0.1, 0.1, 0.008);
}
g.fillStyle = "#e6c27a";
g.fillRect(-0.13, -0.072, 0.26, 0.005);
g.strokeStyle = "#e6c27a";
g.lineWidth = 0.004;
g.beginPath();
g.ellipse(0, -0.04, 0.045, 0.02, 0, 0, 7);
g.stroke();
if (ls > 0.02) {
  const a = Math.min(1, ls * 3);
  env(0.12 + 0.16 * ls, -0.04, 0.55 * ls, a, false);
  env(0.1 + 0.1 * ls, 0.012 + 0.012 * ls, -0.25 * ls, a, false);
}
e.at(0, -0.2);
