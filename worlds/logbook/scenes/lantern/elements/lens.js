const D = 2.6,
  A = -0.25,
  EY = 1.7,
  t = e.t,
  st = e.state;
const fl =
  1 + 0.05 * Math.sin(t * 7.3) + 0.035 * Math.sin(t * 12.7 + 1.3) + 0.06 * Math.sin(t * 1.9 + 0.4) * Math.sin(t * 0.53);
const L0 = Math.max(0, (st.lamp ?? 0.6) * fl),
  sh = Math.min(1, Math.max(0, st.shutter || 0)),
  L = L0 * (1 - 0.85 * sh);
const rot = t * 0.28,
  PI = Math.PI;
const P = (r, th, h) => {
  const d = D - r * Math.cos(th);
  return [((A + r * Math.sin(th)) * D) / d - A, -EY + ((EY - h) * D) / d];
};
const Rh = (h) => 0.4 + 0.06 * Math.sin(PI * Math.min(1, Math.max(0, (h - 1.25) / 1.35)));
const arc = (r, h, a0, a1, mv) => {
  for (let i = 0; i <= 24; i++) {
    const p = P(r, a0 + ((a1 - a0) * i) / 24, h);
    i === 0 && mv ? g.moveTo(p[0], p[1]) : g.lineTo(p[0], p[1]);
  }
};
const cyl = (r0, r1, h0, h1, fill) => {
  g.beginPath();
  if (h0 < EY) arc(r0, h0, -PI / 2, PI / 2, true);
  else arc(r0, h0, -PI / 2, -1.5 * PI, true);
  if (h1 < EY) arc(r1, h1, PI / 2, 1.5 * PI, false);
  else arc(r1, h1, PI / 2, -PI / 2, false);
  g.closePath();
  g.fillStyle = fill;
  g.fill();
};
const side = (r, a, b) => {
  const gr = g.createLinearGradient(-r, 0, r, 0);
  gr.addColorStop(0, a);
  gr.addColorStop(0.42, b);
  gr.addColorStop(1, a);
  return gr;
};
const iron = (k) => `rgb(${Math.round(22 + 60 * L * k)},${Math.round(18 + 40 * L * k)},${Math.round(14 + 22 * L * k)})`;
const brass = (k) =>
  `rgb(${Math.round(50 + 130 * L * k)},${Math.round(36 + 86 * L * k)},${Math.round(20 + 38 * L * k)})`;
// the cast-iron pedestal and the clockwork drum
cyl(0.42, 0.38, 0, 0.12, side(0.42, "#0e0b09", iron(0.6)));
cyl(0.2, 0.16, 0.12, 0.95, side(0.2, "#0c0a08", iron(0.8)));
g.strokeStyle = "rgba(0,0,0,0.35)";
g.lineWidth = 0.01;
g.beginPath();
for (let j = -3; j <= 3; j++) {
  const a = P(0.18, j * 0.4, 0.15),
    b = P(0.16, j * 0.4, 0.93);
  g.moveTo(a[0], a[1]);
  g.lineTo(b[0], b[1]);
}
g.stroke();
cyl(0.26, 0.36, 0.95, 1.03, side(0.36, "#100d0b", iron(1)));
cyl(0.4, 0.4, 1.03, 1.2, side(0.4, "#2a1e12", brass(1)));
const gw = P(0.4, 0.35, 1.11);
g.fillStyle = "#0c0805";
g.fillRect(gw[0] - 0.05, gw[1] - 0.045, 0.1, 0.09);
g.strokeStyle = brass(1.2);
g.lineWidth = 0.006;
g.beginPath();
for (let k = 0; k < 8; k++) {
  const a = rot * 6 + (k * PI) / 4;
  g.moveTo(gw[0], gw[1]);
  g.lineTo(gw[0] + Math.cos(a) * 0.035, gw[1] + Math.sin(a) * 0.035);
}
g.stroke();
// the lens: amber glass, the flame inside, the bull's-eyes turning
const lensPath = () => {
  g.beginPath();
  for (let i = 0; i <= 20; i++) {
    const h = 1.22 + (1.4 * i) / 20,
      p = P(Rh(h), -PI / 2, h);
    i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]);
  }
  arc(Rh(2.62), 2.62, -PI / 2, PI / 2, false);
  for (let i = 20; i >= 0; i--) {
    const h = 1.22 + (1.4 * i) / 20,
      p = P(Rh(h), PI / 2, h);
    g.lineTo(p[0], p[1]);
  }
  arc(Rh(1.22), 1.22, PI / 2, -PI / 2, false);
  g.closePath();
};
lensPath();
g.fillStyle = "#21170f";
g.fill();
const fy = -1.85;
let gr = g.createRadialGradient(0, fy, 0.02, 0, fy, 0.75);
gr.addColorStop(0, `rgba(255,240,200,${Math.min(1, 0.95 * L0)})`);
gr.addColorStop(0.18, `rgba(255,196,110,${0.7 * L0})`);
gr.addColorStop(0.6, `rgba(170,100,45,${0.45 * L0})`);
gr.addColorStop(1, "rgba(60,38,20,0.2)");
g.fillStyle = gr;
g.fill();
g.save();
lensPath();
g.clip();
g.fillStyle = "#2a1d10";
g.fillRect(-0.04, -1.8, 0.08, 0.14);
g.strokeStyle = "rgba(255,230,180,0.22)";
g.lineWidth = 0.006;
g.strokeRect(-0.025, -2.1, 0.05, 0.3);
const fh = 0.07 * (1 + 0.08 * Math.sin(t * 9.1) + 0.05 * Math.sin(t * 15.3)),
  fx = 0.004 * Math.sin(t * 5.3);
g.fillStyle = `rgba(255,248,225,${Math.min(1, L0 * 1.2)})`;
g.beginPath();
g.moveTo(fx, fy - fh);
g.quadraticCurveTo(0.03, fy - 0.01, 0, fy + 0.02);
g.quadraticCurveTo(-0.03, fy - 0.01, fx, fy - fh);
g.fill();
const panels = [0, 1, 2, 3].map((i) => rot + (i * PI) / 2).sort((a, b) => Math.cos(a) - Math.cos(b));
for (const th of panels) {
  const c = Math.cos(th),
    b = Math.pow(Math.max(0, c), 4),
    fr = c > 0 ? 1 : 0.25,
    p = P(Rh(1.85), th, 1.85),
    sx = Math.max(0.03, Math.abs(c));
  g.lineWidth = 0.008;
  for (let k = 1; k <= 6; k++) {
    const r = 0.052 * k;
    g.strokeStyle = `rgba(255,${Math.round(200 + 40 * b)},${Math.round(140 + 70 * b)},${(0.1 + 0.45 * b) * fr * (0.3 + L0)})`;
    g.beginPath();
    g.ellipse(p[0], p[1], r * sx, r * 1.02, 0, 0, 7);
    g.stroke();
  }
  if (b > 0.05) {
    gr = g.createRadialGradient(p[0], p[1], 0, p[0], p[1], 0.3);
    gr.addColorStop(0, `rgba(255,246,220,${0.7 * b * b * L0})`);
    gr.addColorStop(1, "rgba(255,230,180,0)");
    g.fillStyle = gr;
    g.fillRect(p[0] - 0.3, p[1] - 0.3, 0.6, 0.6);
  }
}
const ribs = [];
for (let h = 2.29; h < 2.6; h += 0.045) ribs.push(h);
for (let h = 1.25; h < 1.44; h += 0.045) ribs.push(h);
for (const h of ribs) {
  const r = Rh(h);
  g.strokeStyle = "rgba(25,15,8,0.45)";
  g.lineWidth = 0.008;
  g.beginPath();
  arc(r, h - 0.02, -PI / 2, PI / 2, true);
  g.stroke();
  g.lineWidth = 0.011;
  for (let j = 0; j < 20; j++) {
    const a0 = -PI / 2 + (PI * j) / 20,
      a1 = a0 + PI / 20,
      am = (a0 + a1) / 2,
      gl = Math.pow(0.5 + 0.5 * Math.cos(4 * (am - rot)), 3) * Math.sqrt(Math.max(0, Math.cos(am)));
    const p0 = P(r, a0, h),
      p1 = P(r, a1, h);
    g.strokeStyle = `rgba(255,214,150,${0.06 + 0.45 * L0 * gl})`;
    g.beginPath();
    g.moveTo(p0[0], p0[1]);
    g.lineTo(p1[0], p1[1]);
    g.stroke();
  }
}
g.lineWidth = 0.022;
g.strokeStyle = "#24190f";
for (let i = 0; i < 4; i++) {
  const th = rot + PI / 4 + (i * PI) / 2;
  if (Math.cos(th) < 0) continue;
  g.beginPath();
  for (let j = 0; j <= 14; j++) {
    const h = 1.22 + (1.4 * j) / 14,
      p = P(Rh(h), th, h);
    j ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]);
  }
  g.stroke();
}
g.strokeStyle = brass(0.8);
g.lineWidth = 0.025;
for (const h of [1.45, 2.25]) {
  g.beginPath();
  arc(Rh(h), h, -PI / 2, PI / 2, true);
  g.stroke();
}
g.restore();
// brass rings, the cap, the vent pipe up into the dome
cyl(0.43, 0.43, 1.18, 1.25, side(0.43, "#2a1e12", brass(1)));
cyl(0.43, 0.32, 2.58, 2.72, side(0.43, "#22180e", brass(0.7)));
cyl(0.32, 0.08, 2.72, 2.86, side(0.32, "#1a120b", brass(0.5)));
gr = g.createLinearGradient(-0.06, 0, 0.06, 0);
gr.addColorStop(0, `rgba(${Math.round(40 + 90 * L)},${Math.round(30 + 55 * L)},20,1)`);
gr.addColorStop(1, "#0d0a08");
g.fillStyle = gr;
g.fillRect(-0.06, -4.9, 0.12, 2.06);
// the linen curtain — the shutter — drawn down over the glass
const rail = 2.76,
  cr = 0.56;
if (sh > 0.01) {
  const hb = rail - sh * 1.62;
  g.beginPath();
  for (let i = 0; i <= 30; i++) {
    const th = -PI / 2 + (PI * i) / 30,
      w = Math.sin(th * 15 + t * 0.6),
      p = P(cr + 0.014 * w, th, hb + 0.01 * w);
    i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]);
  }
  arc(cr, rail, PI / 2, -PI / 2, false);
  g.closePath();
  g.fillStyle = `rgba(${Math.round(64 + 120 * L0)},${Math.round(52 + 80 * L0)},${Math.round(40 + 38 * L0)},0.95)`;
  g.fill();
  g.save();
  g.clip();
  g.lineWidth = 0.025;
  for (let j = 0; j < 30; j++) {
    const th = -PI / 2 + (PI * (j + 0.5)) / 30,
      a = P(cr, th, hb),
      b = P(cr, th, rail);
    g.strokeStyle = j % 2 ? "rgba(20,12,6,0.2)" : "rgba(255,220,170,0.06)";
    g.beginPath();
    g.moveTo(a[0], a[1]);
    g.lineTo(b[0], b[1]);
    g.stroke();
  }
  gr = g.createRadialGradient(0, fy, 0, 0, fy, 0.75);
  gr.addColorStop(0, `rgba(255,190,110,${0.35 * L0})`);
  gr.addColorStop(1, "rgba(255,190,110,0)");
  g.fillStyle = gr;
  g.fillRect(-0.8, fy - 0.8, 1.6, 1.6);
  gr = g.createLinearGradient(-0.6, 0, 0.6, 0);
  gr.addColorStop(0, "rgba(10,6,3,0.55)");
  gr.addColorStop(0.5, "rgba(10,6,3,0)");
  gr.addColorStop(1, "rgba(10,6,3,0.55)");
  g.fillStyle = gr;
  g.fillRect(-0.8, -3, 1.6, 2.2);
  g.restore();
}
cyl(
  cr + 0.03,
  cr + 0.03,
  2.66,
  2.78,
  side(0.6, "#1c150f", `rgb(${Math.round(60 + 90 * L)},${Math.round(48 + 60 * L)},${Math.round(36 + 30 * L)})`),
);
const k0 = P(cr + 0.03, 1.25, 2.68),
  k1 = P(cr + 0.03, 1.25, 1.55),
  ks = Math.sin(t * 0.9) * 0.01;
g.strokeStyle = "#2a2018";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(k0[0], k0[1]);
g.lineTo(k1[0] + ks, k1[1]);
g.stroke();
g.fillStyle = "#3a2a1a";
g.fillRect(k1[0] + ks - 0.012, k1[1], 0.024, 0.07);
// the flash, when a bull's-eye swings round to face you
let fA = 0,
  fth = 0;
for (let i = 0; i < 4; i++) {
  const th = rot + (i * PI) / 2,
    v = Math.pow(Math.max(0, Math.cos(th)), 60);
  if (v > fA) {
    fA = v;
    fth = th;
  }
}
fA *= L * (1 - sh);
if (fA > 0.01) {
  g.globalCompositeOperation = "lighter";
  const p = P(Rh(1.85), fth, 1.85),
    R = 0.3 + 2.4 * fA;
  gr = g.createRadialGradient(p[0], p[1], 0, p[0], p[1], R);
  gr.addColorStop(0, `rgba(255,250,232,${0.85 * fA})`);
  gr.addColorStop(0.15, `rgba(255,220,160,${0.4 * fA})`);
  gr.addColorStop(1, "rgba(255,200,130,0)");
  g.fillStyle = gr;
  g.fillRect(p[0] - R, p[1] - R, 2 * R, 2 * R);
  gr = g.createLinearGradient(p[0] - 1.5 * R, 0, p[0] + 1.5 * R, 0);
  gr.addColorStop(0, "rgba(255,235,200,0)");
  gr.addColorStop(0.5, `rgba(255,235,200,${0.5 * fA})`);
  gr.addColorStop(1, "rgba(255,235,200,0)");
  g.fillStyle = gr;
  g.fillRect(p[0] - 1.5 * R, p[1] - 0.025, 3 * R, 0.05);
  g.globalCompositeOperation = "source-over";
}
e.light(0, fy, 1.6 + 2.5 * fA, "#ffcf8a", 0.2 + 0.6 * L);
