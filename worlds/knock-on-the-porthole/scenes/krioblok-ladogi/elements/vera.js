const s = e.state,
  t = e.t,
  VL = s.vera_light !== false,
  L = s.pod3_light ?? 0.2,
  pos = s.vera_position || "beside";
const P = { doorway: [-1.45, 4.8], beside: [1.25, 2.9], panel: [1.12, 2.65], glass: [0.5, 2.45] };
const tg = P[pos] || P.beside;
const ax = s.vera_ax ?? tg[0],
  D = Math.max(1.6, s.vera_d ?? tg[1]),
  k = 2.2 / D;
const mv = Math.min(1, (Math.abs(ax - tg[0]) + Math.abs(D - tg[1])) * 3),
  set = 1 - mv;
const wk = mv > 0.05 ? Math.sin(t * 5.5) : 0;
const ox = ax * k,
  oy = -1.7 * (1 - k) - Math.abs(wk) * 0.015 * k;
const toL = (X, Y, Dt) => {
  const q = 2.2 / Dt;
  return [(X * q - ox) / k, (-1.7 + (1.7 - Y) * q - oy) / k];
};
const lean = (pos === "glass" ? -0.13 : pos === "panel" ? -0.06 : 0) * set;
const br = Math.sin(t * 1.6) * 0.006 + Math.sin(t * 0.57) * 0.004;
const cl = "#121720",
  dk = "#0a0d12";
const rot = (x, y) => {
  const c = Math.cos(lean),
    sn = Math.sin(lean),
    dy = y + 0.85;
  return [x * c - dy * sn, x * sn + dy * c - 0.85];
};
const head = rot(-0.01, -1.58 + br);
e.at(ox + head[0] * k, oy + (head[1] - 0.16) * k);
let T;
if (pos === "panel") T = toL(0.82, 1.2, 2.9);
else if (pos === "glass") T = toL(0.12, 1.35, 2.62);
else T = toL(0.02, 1.4, 2.62);
g.save();
g.translate(ox, oy);
g.scale(k, k);
if (VL) {
  const H = rot(-0.06, -1.2),
    dx = T[0] - H[0],
    dy = T[1] - H[1],
    ln = Math.hypot(dx, dy) || 1,
    nx = -dy / ln,
    ny = dx / ln,
    w = 0.08 + ln * 0.12,
    j = Math.sin(t * 1.3) * 0.01 + Math.sin(t * 0.7) * 0.008;
  const bm = g.createLinearGradient(H[0], H[1], T[0], T[1]);
  bm.addColorStop(0, "rgba(255,240,210,0.22)");
  bm.addColorStop(1, "rgba(255,240,210,0.03)");
  g.fillStyle = bm;
  g.beginPath();
  g.moveTo(H[0] + nx * 0.02, H[1] + ny * 0.02);
  g.lineTo(T[0] + nx * w + j, T[1] + ny * w);
  g.lineTo(T[0] - nx * w + j, T[1] - ny * w);
  g.lineTo(H[0] - nx * 0.02, H[1] - ny * 0.02);
  g.closePath();
  g.fill();
  const sp = g.createRadialGradient(T[0] + j, T[1], 0, T[0] + j, T[1], w * 1.4);
  sp.addColorStop(0, "rgba(255,238,205,0.14)");
  sp.addColorStop(1, "rgba(255,238,205,0)");
  g.fillStyle = sp;
  g.fillRect(T[0] - w * 1.5, T[1] - w * 1.5, w * 3, w * 3);
}
const l1 = wk * 0.07;
g.fillStyle = cl;
g.beginPath();
g.moveTo(-0.15, -0.86);
g.lineTo(-0.15 + l1, 0);
g.lineTo(-0.04 + l1, 0);
g.lineTo(-0.01, -0.86);
g.fill();
g.beginPath();
g.moveTo(0.01, -0.86);
g.lineTo(0.05 - l1, 0);
g.lineTo(0.16 - l1, 0);
g.lineTo(0.15, -0.86);
g.fill();
g.fillStyle = dk;
g.fillRect(-0.21 + l1, -0.06, 0.18, 0.06);
g.fillRect(0.02 - l1, -0.06, 0.17, 0.06);
g.save();
g.translate(0, -0.85);
g.rotate(lean);
g.translate(0, 0.85);
g.fillStyle = cl;
g.beginPath();
g.moveTo(-0.17, -0.83);
g.quadraticCurveTo(-0.22, -1.2, -0.2, -1.38 + br);
g.quadraticCurveTo(0, -1.46 + br, 0.21, -1.38 + br);
g.quadraticCurveTo(0.23, -1.2, 0.17, -0.83);
g.closePath();
g.fill();
g.strokeStyle = cl;
g.lineCap = "round";
g.lineWidth = 0.072;
g.beginPath();
g.moveTo(0.19, -1.33 + br);
g.quadraticCurveTo(0.25, -1.1, 0.12, -1.02);
g.stroke();
g.fillRect(-0.04, -1.5 + br, 0.08, 0.09);
g.save();
g.translate(-0.01, -1.58 + br);
g.rotate(-0.08 + Math.sin(t * 0.21) * 0.03);
g.beginPath();
g.ellipse(0, 0, 0.093, 0.11, 0, 0, 7);
g.fill();
g.fillStyle = "#0a0c10";
g.beginPath();
g.ellipse(0.012, -0.015, 0.1, 0.1, 0, Math.PI * 0.85, Math.PI * 2.15);
g.fill();
g.beginPath();
g.arc(0.095, 0.01, 0.034, 0, 7);
g.fill();
g.strokeStyle = "rgba(130,190,240," + (0.15 + 0.3 * L) + ")";
g.lineWidth = 0.012;
g.beginPath();
g.arc(0, 0, 0.1, 2.3, 3.9);
g.stroke();
g.restore();
g.strokeStyle = "rgba(130,190,240," + (0.1 + 0.25 * L) + ")";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-0.2, -1.36 + br);
g.quadraticCurveTo(-0.22, -1.1, -0.17, -0.85);
g.stroke();
g.strokeStyle = "rgba(200,70,55,0.5)";
g.lineWidth = 0.022;
g.beginPath();
g.moveTo(0.12, -1.25);
g.lineTo(0.18, -1.25);
g.stroke();
g.restore();
const S1 = rot(-0.18, -1.33 + br);
let H1,
  E1,
  reach = false;
if (pos === "panel" && set > 0.5) {
  H1 = toL(0.82, 1.03, 2.9);
  reach = true;
} else if (pos === "glass" && set > 0.5) {
  H1 = toL(0.15, 1.55, 2.62);
  reach = true;
} else H1 = [S1[0] - 0.04 + Math.sin(t * 0.4) * 0.01 - wk * 0.05, -0.88];
{
  const ddx = H1[0] - S1[0],
    ddy = H1[1] - S1[1],
    dl = Math.hypot(ddx, ddy) || 1;
  if (dl > 0.62) H1 = [S1[0] + (ddx * 0.62) / dl, S1[1] + (ddy * 0.62) / dl];
}
const mx = (S1[0] + H1[0]) / 2,
  my = (S1[1] + H1[1]) / 2;
E1 = reach ? [mx + 0.03, my + 0.08] : [mx - 0.04, my];
g.strokeStyle = cl;
g.lineWidth = 0.072;
g.lineCap = "round";
g.beginPath();
g.moveTo(S1[0], S1[1]);
g.quadraticCurveTo(E1[0], E1[1], H1[0], H1[1]);
g.stroke();
g.fillStyle = "#161b24";
g.beginPath();
g.ellipse(H1[0], H1[1], 0.04, 0.05, 0, 0, 7);
g.fill();
if (pos === "glass" && set > 0.5) {
  g.strokeStyle = "#161b24";
  g.lineWidth = 0.018;
  for (let f = 0; f < 4; f++) {
    g.beginPath();
    g.moveTo(H1[0] - 0.03 + f * 0.02, H1[1] - 0.03);
    g.lineTo(H1[0] - 0.045 + f * 0.028, H1[1] - 0.1);
    g.stroke();
  }
}
g.strokeStyle = "rgba(130,190,240," + (0.1 + 0.2 * L) + ")";
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(S1[0] - 0.03, S1[1]);
g.quadraticCurveTo(E1[0] - 0.035, E1[1], H1[0] - 0.03, H1[1]);
g.stroke();
const bp = (t * 0.23) % 1,
  pa = Math.sin(bp * Math.PI) * 0.12;
if (pa > 0.01) {
  const bx = head[0] - 0.13 - bp * 0.16,
    by = head[1] + 0.04 - bp * 0.05,
    r = 0.04 + bp * 0.08;
  const vg = g.createRadialGradient(bx, by, 0, bx, by, r);
  vg.addColorStop(0, "rgba(220,235,250," + pa + ")");
  vg.addColorStop(1, "rgba(220,235,250,0)");
  g.fillStyle = vg;
  g.fillRect(bx - r, by - r, 2 * r, 2 * r);
}
g.restore();
if (VL) e.light(ox + T[0] * k, oy + T[1] * k, 0.45, "#fff0d0", 0.22);
