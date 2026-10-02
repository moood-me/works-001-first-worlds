const s = e.state,
  t = e.t,
  pos = s.vera_position || "hatch";
const Zp = { hatch: 2, porthole: 6.4, door: 9.2, gone: 9.9 };
const T = Zp[pos] ?? 2,
  z = Math.max(1.8, Math.min(9.9, s.vera_z ?? T));
const al = pos === "gone" ? Math.max(0, Math.min(1, (9.85 - z) / 0.6)) : 1;
const vx = z <= 6.4 ? 0.5 - (z - 2) / 4.4 : -0.5 - ((z - 6.4) / 2.8) * 0.05;
const D = 1.9,
  k = D / z,
  ax = vx * k,
  ay = -1.7 * (1 - k);
const mv = Math.abs(z - T) > 0.03,
  pose = mv ? "walk" : pos;
const DT = { locked: 0, jammed: 0.03, ajar: 0.3, open: 1 }[s.airlock_door || "jammed"] ?? 0.03,
  crank = Math.abs((s.door_open ?? 0.03) - DT) > 0.004;
const br = Math.sin(t * 1.7) * 0.006 + Math.sin(t * 0.61) * 0.004,
  sw = Math.sin(t * 0.23) * 0.01;
e.at(ax + sw * k, ay - 1.66 * k);
if (al <= 0.01) return;
g.save();
g.globalAlpha = al;
const tl = s.vera_light !== false;
let hx = 0.3,
  hy = -1.22,
  hx2 = -0.2,
  hy2 = -0.84,
  lean = 0,
  hd = 0;
const step = mv ? Math.sin(t * 4.2) : 0;
if (pose === "porthole") {
  hx = 0.23;
  hy = -0.88;
  hx2 = -0.44;
  hy2 = -1.42 + Math.sin(t * 0.4) * 0.01;
  hd = -0.03;
}
if (pose === "door") {
  const c = crank ? [Math.cos(t * 2.2) * 0.06, Math.sin(t * 2.2) * 0.06] : [Math.sin(t * 7) * 0.004, 0];
  hx = -0.1 + c[0];
  hy = -1.2 + c[1];
  hx2 = -0.24 + c[0];
  hy2 = -1.15 + c[1];
  lean = crank ? -0.04 + 0.02 * Math.sin(t * 2.2) : -0.02;
  hd = -0.02;
}
if (tl && (pose === "hatch" || (mv && T > z))) {
  const bx = ax + (sw + hx + 0.04) * k,
    by = ay + (hy - 0.06) * k;
  const jx = Math.sin(t * 1.3) * 0.01,
    jy = Math.sin(t * 0.9) * 0.008;
  const ex = jx,
    ey = -1.6 + jy;
  const bm = g.createLinearGradient(bx, by, ex, ey);
  bm.addColorStop(0, "rgba(255,240,210,0.16)");
  bm.addColorStop(1, "rgba(255,240,210,0.02)");
  g.fillStyle = bm;
  g.beginPath();
  g.moveTo(bx, by);
  g.lineTo(ex - 0.05, ey - 0.04);
  g.lineTo(ex + 0.05, ey + 0.05);
  g.closePath();
  g.fill();
  const sp = g.createRadialGradient(ex, ey, 0, ex, ey, 0.07);
  sp.addColorStop(0, "rgba(255,240,210,0.25)");
  sp.addColorStop(1, "rgba(255,240,210,0)");
  g.fillStyle = sp;
  g.fillRect(ex - 0.07, ey - 0.07, 0.14, 0.14);
}
g.save();
g.translate(ax, ay);
g.scale(k, k);
g.translate(sw, 0);
g.rotate(lean);
const cl = "#12161d",
  sh = br;
const l1 = mv ? Math.max(0, step) * 0.07 : 0,
  l2 = mv ? Math.max(0, -step) * 0.07 : 0;
g.fillStyle = cl;
g.beginPath();
g.moveTo(-0.15, -0.85);
g.lineTo(-0.16, -l1);
g.lineTo(-0.04, -l1);
g.lineTo(-0.01, -0.85);
g.fill();
g.beginPath();
g.moveTo(0.01, -0.85);
g.lineTo(0.05, -l2);
g.lineTo(0.17, -l2);
g.lineTo(0.15, -0.85);
g.fill();
g.fillStyle = "#090b0f";
g.fillRect(-0.18, -0.06 - l1, 0.15, 0.06);
g.fillRect(0.04, -0.06 - l2, 0.15, 0.06);
g.fillStyle = cl;
g.beginPath();
g.moveTo(-0.17, -0.82);
g.quadraticCurveTo(-0.22, -1.2, -0.21, -1.38 + sh);
g.quadraticCurveTo(0, -1.46 + sh, 0.21, -1.38 + sh);
g.quadraticCurveTo(0.22, -1.2, 0.17, -0.82);
g.closePath();
g.fill();
g.strokeStyle = cl;
g.lineWidth = 0.075;
g.lineCap = "round";
const tr = Math.sin(t * 7.1) * 0.004 + Math.sin(t * 4.3) * 0.003;
g.beginPath();
g.moveTo(-0.19, -1.33 + sh);
g.quadraticCurveTo((-0.19 + hx2) / 2 - 0.06, (-1.33 + hy2) / 2, hx2, hy2);
g.stroke();
g.beginPath();
g.moveTo(0.19, -1.33 + sh);
g.quadraticCurveTo((0.19 + hx) / 2 + 0.05, (-1.33 + hy) / 2 + 0.03, hx + tr, hy + tr);
g.stroke();
g.fillStyle = cl;
g.fillRect(-0.04, -1.5 + sh, 0.08, 0.08);
g.beginPath();
g.ellipse(hd, -1.58 + sh, 0.095, 0.11, 0, 0, 6.2832);
g.fill();
g.fillStyle = "#0d0f14";
g.beginPath();
g.ellipse(hd, -1.6 + sh, 0.105, 0.1, 0, Math.PI, 0);
g.fill();
g.strokeStyle = "rgba(220,90,70,0.35)";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(hd - 0.09, -1.66 + sh);
g.quadraticCurveTo(hd - 0.11, -1.55 + sh, hd - 0.06, -1.48 + sh);
g.moveTo(-0.21, -1.36 + sh);
g.quadraticCurveTo(-0.22, -1.1, -0.17, -0.84);
g.stroke();
g.strokeStyle = "rgba(255,90,60,0.4)";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-0.2, -1.18);
g.lineTo(-0.14, -1.18);
g.stroke();
g.strokeStyle = "rgba(130,190,240,0.18)";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0.16, -0.8);
g.lineTo(0.16, -0.05);
g.stroke();
if (pose !== "door") {
  g.fillStyle = "#1d2027";
  g.save();
  g.translate(hx + tr, hy + tr);
  g.rotate(pose === "porthole" ? 2.8 : -0.55);
  g.fillRect(-0.02, -0.12, 0.04, 0.14);
  g.restore();
}
const bq = (t + 0.5 * Math.sin(t * 0.17)) / 4.1,
  bp = bq - Math.floor(bq);
if (bp < 0.5) {
  const kk = bp / 0.5,
    bx = hd + 0.02 + kk * 0.04,
    by = -1.6 - kk * 0.22,
    r = 0.04 + kk * 0.14;
  const c = g.createRadialGradient(bx, by, 0, bx, by, r);
  c.addColorStop(0, "rgba(215,225,235," + 0.12 * Math.sin(kk * Math.PI) + ")");
  c.addColorStop(1, "rgba(215,225,235,0)");
  g.fillStyle = c;
  g.fillRect(bx - r, by - r, 2 * r, 2 * r);
}
g.restore();
if (tl) {
  const lx = pose === "door" ? ax + 0.12 * k : ax + (sw + hx + 0.04) * k,
    ly = pose === "door" ? ay - 1.4 * k : ay + (hy - 0.06) * k;
  e.light(lx, ly, 0.3 * k + 0.05, "#fff0d0", 0.55);
}
g.restore();
