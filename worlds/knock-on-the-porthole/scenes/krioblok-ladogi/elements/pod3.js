const s = e.state,
  t = e.t,
  R = e.rnd,
  fr = s.frost_density ?? 0.9,
  L = s.pod3_light ?? 0.2,
  op = Math.max(0, Math.min(1, s.pod3_open ?? 0)),
  hm = s.hand_mark ?? 0,
  cd = s.condensation ?? 0.15,
  st = s.stir ?? 0,
  VL = s.vera_light !== false;
const shell = () => {
  g.beginPath();
  g.moveTo(-0.55, -0.2);
  g.lineTo(-0.58, -1.85);
  g.bezierCurveTo(-0.58, -2.3, -0.3, -2.4, 0, -2.4);
  g.bezierCurveTo(0.3, -2.4, 0.58, -2.3, 0.58, -1.85);
  g.lineTo(0.55, -0.2);
  g.closePath();
};
const win = () => {
  g.beginPath();
  g.moveTo(-0.4, -0.62);
  g.lineTo(-0.42, -1.7);
  g.bezierCurveTo(-0.42, -2.0, -0.2, -2.06, 0, -2.06);
  g.bezierCurveTo(0.2, -2.06, 0.42, -2.0, 0.42, -1.7);
  g.lineTo(0.4, -0.62);
  g.quadraticCurveTo(0, -0.57, -0.4, -0.62);
  g.closePath();
};
g.fillStyle = "#0b0e13";
g.beginPath();
g.moveTo(-0.68, 0);
g.lineTo(-0.62, -0.24);
g.lineTo(0.62, -0.24);
g.lineTo(0.68, 0);
g.closePath();
g.fill();
g.fillStyle = "rgba(130,160,190,0.14)";
g.fillRect(-0.62, -0.245, 1.24, 0.012);
let gr = g.createLinearGradient(-0.6, 0, 0.6, 0);
gr.addColorStop(0, "#141a22");
gr.addColorStop(0.28, "#2a3440");
gr.addColorStop(0.6, "#1c232c");
gr.addColorStop(1, "#0a0d12");
g.fillStyle = gr;
shell();
g.fill();
g.save();
shell();
g.clip();
let cg = g.createRadialGradient(0, -1.3, 0.2, 0, -1.3, 1.1);
cg.addColorStop(0, "rgba(110,170,220," + (0.04 + 0.12 * L) + ")");
cg.addColorStop(1, "rgba(110,170,220,0)");
g.fillStyle = cg;
g.fillRect(-0.7, -2.5, 1.4, 2.4);
if (VL) {
  const hl = g.createRadialGradient(0.35, -1.25, 0, 0.35, -1.25, 0.9);
  hl.addColorStop(0, "rgba(255,232,200,0.09)");
  hl.addColorStop(1, "rgba(255,232,200,0)");
  g.fillStyle = hl;
  g.fillRect(-0.7, -2.5, 1.4, 2.4);
}
g.strokeStyle = "rgba(0,0,0,0.55)";
g.lineWidth = 0.008;
for (const y of [-0.42, -2.18]) {
  g.beginPath();
  g.moveTo(-0.62, y);
  g.lineTo(0.62, y);
  g.stroke();
}
g.fillStyle = "rgba(160,180,200,0.22)";
for (let i = 0; i < 15; i++) {
  const x = -0.45 + (i * 0.9) / 14;
  g.beginPath();
  g.arc(x, -2.28, 0.007, 0, 7);
  g.fill();
  g.beginPath();
  g.arc(x, -0.32, 0.007, 0, 7);
  g.fill();
}
for (let i = 0; i < 1000; i++) {
  const sd = R() < 0.5 ? -1 : 1,
    u = R(),
    x = sd * (0.6 - Math.pow(u, 2.2) * 0.5),
    y = -0.22 - R() * 2.2,
    a = R(),
    k = R();
  if (k > fr * 1.05) continue;
  g.fillStyle = "rgba(215,232,248," + (0.05 + 0.18 * a) + ")";
  const z = 0.004 + a * 0.008;
  g.fillRect(x, y, z, z);
}
for (let i = 0; i < 450; i++) {
  const x = (R() - 0.5) * 1.2,
    tp = R() < 0.6,
    v = R(),
    y = tp ? -2.4 + v * v * 0.35 : -0.24 - v * v * 0.3,
    a = R(),
    k = R();
  if (k > fr) continue;
  g.fillStyle = "rgba(225,238,250," + (0.06 + 0.2 * a) + ")";
  g.beginPath();
  g.arc(x, y, 0.003 + a * 0.007, 0, 7);
  g.fill();
}
g.restore();
g.save();
g.translate(0, -0.47);
g.scale(0.0035, 0.0035);
g.font = "bold 24px monospace";
g.textAlign = "center";
g.fillStyle = "rgba(170,195,220," + (0.3 + 0.25 * L) + ")";
g.fillText("КРИО-3", 0, 0);
g.restore();
const sealB = op > 0.02 ? 1 : Math.sin(t * 1.7) > 0.55 ? 1 : 0.2;
for (let i = 0; i < 6; i++) {
  const y = -0.9 - i * 0.15;
  let a, c;
  if (i === 0) {
    a = (0.15 + 0.6 * L) * sealB;
    c = op > 0.02 ? "120,255,170" : "255,170,80";
  } else {
    const on = i <= Math.round(L * 5) ? 1 : 0;
    a = 0.05 + on * (0.25 + 0.6 * L) * (0.9 + 0.1 * Math.sin(t * 2.1 + i));
    c = "120,210,255";
  }
  g.fillStyle = "rgba(" + c + "," + a + ")";
  g.fillRect(0.47, y, 0.04, 0.055);
}
g.fillStyle = "rgba(215,232,248," + 0.28 * fr + ")";
g.fillRect(0.46, -1.72, 0.06, 0.9);
e.light(0.49, -0.87, 0.18, op > 0.02 ? "#80ffaa" : "#ffaa55", 0.35 * L * sealB + 0.05);
const sx = Math.sin(t * 0.07) * 0.004 + st * 0.035 * Math.sin(t * 1.1 + 0.5),
  sy = -st * 0.02 + Math.sin(t * 0.13) * 0.003,
  tilt = 0.05 + st * 0.22 * Math.sin(t * 0.8);
g.save();
win();
g.clip();
let ig = g.createLinearGradient(0, -2.06, 0, -0.6);
ig.addColorStop(
  0,
  "rgb(" + Math.round(12 + 45 * L) + "," + Math.round(26 + 90 * L) + "," + Math.round(40 + 110 * L) + ")",
);
ig.addColorStop(1, "#05090f");
g.fillStyle = ig;
g.fillRect(-0.45, -2.1, 0.9, 1.55);
const hg = g.createRadialGradient(0, -1.88, 0, 0, -1.88, 0.38);
hg.addColorStop(0, "rgba(160,215,255," + 0.3 * L + ")");
hg.addColorStop(1, "rgba(160,215,255,0)");
g.fillStyle = hg;
g.fillRect(-0.45, -2.1, 0.9, 0.7);
g.fillStyle = "rgba(3,8,14,0.88)";
g.beginPath();
g.moveTo(-0.31, -0.58);
g.quadraticCurveTo(-0.33, -1.24, -0.22 + sx * 0.5, -1.4 + sy * 0.5);
g.quadraticCurveTo(0, -1.47 + sy, 0.22 + sx * 0.5, -1.4 + sy * 0.5);
g.quadraticCurveTo(0.33, -1.24, 0.31, -0.58);
g.closePath();
g.fill();
g.save();
g.translate(sx, -1.6 + sy);
g.rotate(tilt);
g.beginPath();
g.ellipse(0, 0, 0.095, 0.12, 0, 0, 7);
g.fill();
g.fillRect(-0.045, 0.08, 0.09, 0.1);
g.restore();
g.strokeStyle = "rgba(150,205,245," + (0.08 + 0.25 * L) + ")";
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(-0.08, -1.9);
g.quadraticCurveTo(-0.2, -1.95, -0.3, -1.6);
g.moveTo(0.08, -1.9);
g.quadraticCurveTo(0.22, -1.9, 0.3, -1.5);
g.stroke();
g.restore();
g.fillStyle = "#232b35";
g.fillRect(-0.49, -0.9, 0.06, 0.1);
g.fillRect(-0.49, -1.85, 0.06, 0.1);
const c = Math.cos(op * 1.38);
g.save();
g.translate(-0.43, 0);
g.scale(c, 1);
g.translate(0.43, 0);
win();
g.fillStyle = "rgba(120,170,210,0.06)";
g.fill();
g.save();
win();
g.clip();
const F = fr * (1 - 0.35 * cd);
let fg = g.createLinearGradient(0, -2.06, 0, -0.6);
fg.addColorStop(0, "rgba(205,225,242," + 0.22 * F + ")");
fg.addColorStop(0.6, "rgba(212,230,246," + 0.48 * F + ")");
fg.addColorStop(1, "rgba(225,238,250," + 0.75 * F + ")");
g.fillStyle = fg;
g.fillRect(-0.45, -2.1, 0.9, 1.55);
const eg = g.createRadialGradient(0, -1.35, 0.15, 0, -1.35, 0.62);
eg.addColorStop(0, "rgba(220,235,250,0)");
eg.addColorStop(1, "rgba(220,235,250," + 0.5 * F + ")");
g.fillStyle = eg;
g.fillRect(-0.45, -2.1, 0.9, 1.55);
g.lineCap = "round";
for (let i = 0; i < 36; i++) {
  const u = R(),
    sd = R(),
    v = R(),
    ln = R(),
    w = R();
  let x, y, a;
  if (sd < 0.35) {
    x = -0.41;
    y = -0.65 - u * 1.15;
    a = -0.35 + v * 0.7;
  } else if (sd < 0.7) {
    x = 0.41;
    y = -0.65 - u * 1.15;
    a = Math.PI - 0.35 + v * 0.7;
  } else {
    x = (u - 0.5) * 0.8;
    y = -0.6;
    a = -Math.PI / 2 + (v - 0.5) * 1.3;
  }
  const len = (0.1 + ln * 0.3) * (0.25 + 0.9 * F);
  g.strokeStyle = "rgba(234,244,252," + F * (0.2 + 0.12 * w) + ")";
  g.lineWidth = 0.005;
  g.beginPath();
  for (let j = 1; j <= 7; j++) {
    const f = j / 7,
      f0 = (j - 1) / 7,
      px = x + Math.cos(a) * len * f0,
      py = y + Math.sin(a) * len * f0,
      cx = x + Math.cos(a) * len * f,
      cy = y + Math.sin(a) * len * f,
      b = len * 0.34 * (1 - f) + 0.008;
    g.moveTo(px, py);
    g.lineTo(cx, cy);
    g.moveTo(cx, cy);
    g.lineTo(cx + Math.cos(a + 1.05) * b, cy + Math.sin(a + 1.05) * b);
    g.moveTo(cx, cy);
    g.lineTo(cx + Math.cos(a - 1.05) * b, cy + Math.sin(a - 1.05) * b);
  }
  g.stroke();
}
for (let i = 0; i < 1000; i++) {
  const x = (R() - 0.5) * 0.84,
    y = -0.6 - Math.pow(R(), 1.5) * 1.46,
    a = R(),
    k = R(),
    ph = R() * 6.3;
  if (k > F * 1.1) continue;
  let al = 0.04 + 0.14 * a;
  if (VL && a > 0.93) al += 0.5 * Math.pow(Math.max(0, Math.sin(t * 0.8 + ph)), 6);
  g.fillStyle = "rgba(235,245,255," + al + ")";
  const z = 0.003 + a * 0.006;
  g.fillRect(x, y, z, z);
}
g.fillStyle = "rgba(3,8,14," + (0.06 + 0.14 * (1 - F)) + ")";
g.save();
g.translate(sx, -1.6 + sy);
g.rotate(tilt);
g.beginPath();
g.ellipse(0, 0, 0.09, 0.115, 0, 0, 7);
g.fill();
g.restore();
const bc = st * 0.6;
if (bc > 0.01) {
  const bx = sx,
    by = -1.58;
  const b = g.createRadialGradient(bx, by, 0, bx, by, 0.22);
  b.addColorStop(0, "rgba(40,75,105," + bc * 0.7 + ")");
  b.addColorStop(1, "rgba(40,75,105,0)");
  g.fillStyle = b;
  g.fillRect(bx - 0.22, by - 0.22, 0.44, 0.44);
  g.fillStyle = "rgba(3,8,14," + bc * 0.8 + ")";
  g.save();
  g.translate(sx, -1.6 + sy);
  g.rotate(tilt);
  g.beginPath();
  g.ellipse(0, 0, 0.09, 0.115, 0, 0, 7);
  g.fill();
  g.restore();
}
if (hm > 0.01) {
  g.save();
  g.translate(0.07, -1.27);
  g.rotate(0.12);
  const col = "rgba(14,30,46," + 0.85 * hm + ")";
  g.fillStyle = col;
  g.strokeStyle = col;
  g.beginPath();
  g.ellipse(0, 0, 0.05, 0.062, 0, 0, 7);
  g.fill();
  g.lineCap = "round";
  g.lineWidth = 0.022;
  for (const f of [
    [-0.04, -0.05, -0.058, -0.15],
    [-0.013, -0.06, -0.018, -0.182],
    [0.015, -0.06, 0.021, -0.176],
    [0.04, -0.045, 0.056, -0.14],
    [0.045, 0.012, 0.1, -0.04],
  ]) {
    g.beginPath();
    g.moveTo(f[0], f[1]);
    g.lineTo(f[2], f[3]);
    g.stroke();
  }
  g.strokeStyle = "rgba(230,242,252," + 0.25 * hm * F + ")";
  g.lineWidth = 0.006;
  g.beginPath();
  g.ellipse(0, 0, 0.062, 0.074, 0, 0, 7);
  g.stroke();
  g.strokeStyle = col;
  for (let d = 0; d < 4; d++) {
    const ln = (0.03 + 0.14 * cd) * (0.5 + 0.5 * Math.sin(d * 2.3 + 1)) * hm + 0.01 * Math.sin(t * 0.2 + d);
    g.beginPath();
    g.moveTo(-0.03 + d * 0.02, 0.05);
    g.lineTo(-0.03 + d * 0.02, 0.06 + Math.max(0, ln));
    g.stroke();
  }
  g.restore();
}
const nd = Math.floor(cd * 170);
for (let i = 0; i < 170; i++) {
  const x = (R() - 0.5) * 0.8,
    y = -0.65 - R() * 1.38,
    r = 0.004 + R() * 0.01;
  if (i >= nd) continue;
  g.fillStyle = "rgba(20,40,60,0.32)";
  g.beginPath();
  g.arc(x, y, r, 0, 7);
  g.fill();
  g.fillStyle = "rgba(230,245,255,0.5)";
  g.beginPath();
  g.arc(x - r * 0.3, y - r * 0.35, r * 0.35, 0, 7);
  g.fill();
}
const ns = Math.floor(cd * 10);
for (let i = 0; i < 10; i++) {
  const x = (R() - 0.5) * 0.75,
    sp = 0.008 + R() * 0.016,
    ph = R();
  if (i >= ns) continue;
  const p = (t * sp + ph) % 1,
    y0 = -1.95 + ph * 0.4,
    y1 = Math.min(-0.63, y0 + p * 1.3),
    xx = x + Math.sin(y1 * 9 + i) * 0.006;
  g.strokeStyle = "rgba(15,32,50,0.42)";
  g.lineWidth = 0.007;
  g.beginPath();
  g.moveTo(x, y0);
  g.lineTo(xx, y1);
  g.stroke();
  g.fillStyle = "rgba(230,245,255,0.55)";
  g.beginPath();
  g.arc(xx, y1, 0.007, 0, 7);
  g.fill();
}
const lf = g.createLinearGradient(0, -0.95, 0, -0.6);
lf.addColorStop(0, "rgba(200,220,235,0)");
lf.addColorStop(1, "rgba(200,220,235," + 0.22 * cd + ")");
g.fillStyle = lf;
g.fillRect(-0.45, -0.95, 0.9, 0.35);
g.fillStyle = "rgba(220,235,250,0.05)";
g.beginPath();
g.moveTo(-0.3, -2.05);
g.lineTo(-0.18, -2.05);
g.lineTo(-0.38, -1.2);
g.lineTo(-0.42, -1.4);
g.closePath();
g.fill();
g.restore();
g.strokeStyle = "#2b3541";
g.lineWidth = 0.05;
win();
g.stroke();
g.strokeStyle = "rgba(160,195,225," + (0.15 + 0.15 * L) + ")";
g.lineWidth = 0.008;
win();
g.stroke();
g.restore();
if (op > 0.005 && op < 0.5) {
  g.strokeStyle = "rgba(170,220,255," + 0.6 * (1 - op * 2) + ")";
  g.lineWidth = 0.006;
  g.beginPath();
  g.moveTo(0.4, -0.62);
  g.lineTo(0.42, -1.7);
  g.stroke();
}
e.light(0, -1.35, 1.3, "#7fc4ff", 0.06 + 0.4 * L + 0.2 * op * L);
const mist = 0.3 + 0.7 * op + 0.2 * cd;
for (let i = 0; i < 9; i++) {
  const ph = (t * 0.035 + i / 9) % 1,
    x = (i % 2 ? 1 : -1) * (0.1 + ph * 0.9) + Math.sin(t * 0.2 + i) * 0.06,
    r = 0.15 + ph * 0.4;
  g.save();
  g.translate(x, -0.05);
  g.scale(1, 0.35);
  const c2 = g.createRadialGradient(0, 0, 0, 0, 0, r);
  c2.addColorStop(0, "rgba(190,220,245," + 0.12 * mist * (1 - ph) + ")");
  c2.addColorStop(1, "rgba(190,220,245,0)");
  g.fillStyle = c2;
  g.fillRect(-r, -r, 2 * r, 2 * r);
  g.restore();
}
if (op > 0.02) {
  for (let i = 0; i < 10; i++) {
    const ph = (t * 0.07 + i / 10) % 1,
      x = -0.25 + ((i * 0.37) % 1) * 0.5 + Math.sin(t * 0.3 + i) * 0.05 + ph * 0.1 * (i % 2 ? 1 : -1),
      y = -1.7 + ph * 1.6,
      r = 0.1 + ph * 0.28;
    const c3 = g.createRadialGradient(x, y, 0, x, y, r);
    c3.addColorStop(0, "rgba(200,228,250," + 0.16 * op * Math.sin(ph * Math.PI) + ")");
    c3.addColorStop(1, "rgba(200,228,250,0)");
    g.fillStyle = c3;
    g.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
}
