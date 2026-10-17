const D = 2.4,
  EYE = 1.7,
  R = 0.5,
  HB = 0.92,
  HT = 2.38,
  HF = 1.65,
  NP = 6,
  half = Math.PI / NP;
const lamp = e.state.lamp ?? 0.7,
  sh = e.state.shutter || 0;
const fl =
  lamp * (0.88 + 0.06 * Math.sin(e.t * 7.3) + 0.04 * Math.sin(e.t * 12.9 + 1.3) + 0.03 * Math.sin(e.t * 3.1 + 0.4));
const lit = fl * (1 - 0.85 * sh);
const Q = (x, z, h) => {
  const k = D / (D - z);
  return [x * k, -(EYE + (h - EYE) * k)];
};
const ring = (h, r, n = 40) => {
  g.beginPath();
  for (let i = 0; i <= n; i++) {
    const t = (i / n) * Math.PI * 2,
      p = Q(r * Math.sin(t), r * Math.cos(t), h);
    i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]);
  }
};
const poly = (pts) => {
  g.beginPath();
  pts.forEach(([x, h, z], i) => {
    const p = Q(x, z, h);
    i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]);
  });
  g.closePath();
};
const bc = `rgb(${(110 + 70 * lit) | 0},${(80 + 50 * lit) | 0},${(40 + 20 * lit) | 0})`;
// cast-iron pedestal with the clockwork in it
ring(0.04, 0.42);
g.fillStyle = "#100c09";
g.fill();
poly([
  [-0.24, 0, 0.2],
  [0.24, 0, 0.2],
  [0.17, 0.9, 0.15],
  [-0.17, 0.9, 0.15],
]);
let gr = g.createLinearGradient(-0.25, 0, 0.25, 0);
gr.addColorStop(0, "#0e0b08");
gr.addColorStop(0.55, "#2b2016");
gr.addColorStop(1, "#130e0a");
g.fillStyle = gr;
g.fill();
poly([
  [-0.3, 0.28, 0.34],
  [0.3, 0.28, 0.34],
  [0.3, 0.76, 0.34],
  [-0.3, 0.76, 0.34],
]);
g.fillStyle = "#1a130d";
g.fill();
g.strokeStyle = `rgba(200,150,80,${0.25 + 0.3 * lit})`;
g.lineWidth = 0.012;
g.stroke();
const gear = (cx, ch, r, teeth, ang) => {
  const c = Q(cx, 0.35, ch),
    k = D / (D - 0.35);
  g.save();
  g.translate(c[0], c[1]);
  g.rotate(ang);
  g.beginPath();
  for (let i = 0; i < teeth * 2; i++) {
    const a = (i / (teeth * 2)) * Math.PI * 2,
      rr = (i % 2 ? r : r * 0.86) * k;
    g.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
  }
  g.closePath();
  g.fillStyle = bc;
  g.fill();
  g.fillStyle = "#1a130d";
  for (let s = 0; s < 4; s++) {
    g.beginPath();
    g.arc(Math.cos(s * 1.57 + 0.78) * r * 0.45 * k, Math.sin(s * 1.57 + 0.78) * r * 0.45 * k, r * 0.2 * k, 0, 7);
    g.fill();
  }
  g.beginPath();
  g.arc(0, 0, r * 0.1 * k, 0, 7);
  g.fillStyle = "#d9b070";
  g.fill();
  g.restore();
};
gear(0.06, 0.5, 0.16, 24, e.t * 0.55);
gear(-0.17, 0.64, 0.07, 10, -e.t * 1.32 + 0.2);
gear(0.2, 0.36, 0.06, 9, -e.t * 1.47);
const tk = Math.sin(e.t * Math.PI * 2) > 0 ? 0.25 : -0.25,
  pv = Q(-0.1, 0.35, 0.73);
g.save();
g.translate(pv[0], pv[1]);
g.rotate(tk);
g.strokeStyle = bc;
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0, 0);
g.lineTo(0, 0.12);
g.stroke();
g.restore();
let c0 = Q(0.24, 0.35, 0.3),
  c1 = Q(0.24, 0.35, 0);
g.strokeStyle = "rgba(150,120,80,0.6)";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(c0[0], c0[1]);
g.lineTo(c1[0], c1[1]);
g.stroke();
// the turning table
ring(0.9, R * 1.12);
g.fillStyle = "#20170f";
g.fill();
g.strokeStyle = bc;
g.lineWidth = 0.015;
g.stroke();
// the lamp inside
const drawLamp = () => {
  g.fillStyle = "#2a1d10";
  g.fillRect(-0.08, -(HF - 0.07), 0.16, 0.24);
  g.fillStyle = `rgba(255,190,110,${0.25 * lit})`;
  g.fillRect(0.02, -(HF - 0.07), 0.03, 0.24);
  g.fillStyle = "rgba(255,240,210,0.07)";
  g.fillRect(-0.045, -(HF + 0.26), 0.09, 0.33);
  const w = 1 + 0.06 * Math.sin(e.t * 9.1) + 0.04 * Math.sin(e.t * 5.3 + 2);
  const fg = g.createRadialGradient(0, -(HF + 0.02), 0, 0, -(HF + 0.02), 0.22 * w);
  fg.addColorStop(0, `rgba(255,252,236,${Math.min(1, 1.1 * fl)})`);
  fg.addColorStop(0.25, `rgba(255,214,130,${0.85 * fl})`);
  fg.addColorStop(1, "rgba(255,170,80,0)");
  g.fillStyle = fg;
  g.save();
  g.translate(0, -(HF + 0.02));
  g.scale(0.6, 1);
  g.beginPath();
  g.arc(0, 0, 0.22 * w, 0, 7);
  g.restore();
  g.fill();
  if (sh > 0.01) {
    g.fillStyle = "rgba(18,13,9,0.95)";
    g.fillRect(-0.16, -(HF + 0.3), 0.32, 0.55 * sh);
  }
  e.light(0, -HF, 1.6, "#ffc878", 0.9 * lit);
};
const corner = (t, h) => Q(R * Math.sin(t), R * Math.cos(t), h);
const seg = (t0, t1, h) => {
  const p = corner(t0, h),
    q = corner(t1, h);
  g.beginPath();
  g.moveTo(p[0], p[1]);
  g.lineTo(q[0], q[1]);
  g.stroke();
};
const drawPanel = (th, bull) => {
  const c = Math.cos(th),
    A = th - half,
    B = th + half;
  g.globalAlpha = c > 0 ? 1 : 0.4;
  const p = [corner(A, HB), corner(B, HB), corner(B, HT), corner(A, HT)];
  g.beginPath();
  p.forEach((q, j) => (j ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1])));
  g.closePath();
  const gl = g.createLinearGradient(0, -HT, 0, -HB);
  gl.addColorStop(0, "rgba(110,84,56,0.16)");
  gl.addColorStop(0.5, `rgba(255,190,110,${0.08 + 0.24 * lit})`);
  gl.addColorStop(1, "rgba(110,84,56,0.16)");
  g.fillStyle = gl;
  g.fill();
  g.lineWidth = 0.006;
  for (let h = HB + 0.03; h < HT - 0.01; h += 0.035) {
    if (h > 1.32 && h < 1.98) continue;
    const gli = 0.5 + 0.5 * Math.sin(h * 37 + th * 2.3 + e.t * 0.2);
    g.strokeStyle = `rgba(255,228,175,${0.06 + 0.32 * lit * gli * gli})`;
    seg(A, B, h);
  }
  const rc = R * Math.cos(half),
    cx = rc * Math.sin(th),
    cz = rc * Math.cos(th),
    tx = Math.cos(th),
    tz = -Math.sin(th);
  const P = (u, h) => Q(cx + u * tx, cz + u * tz, h);
  if (bull) {
    g.lineWidth = 0.007;
    for (let r = 0.04; r < 0.24; r += 0.033) {
      g.strokeStyle = `rgba(255,228,175,${0.1 + 0.3 * lit * (1 - r * 2)})`;
      g.beginPath();
      for (let k = 0; k <= 28; k++) {
        const f = (k / 28) * Math.PI * 2,
          q = P(Math.cos(f) * r, HF + Math.sin(f) * r);
        k ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1]);
      }
      g.stroke();
    }
    if (c > 0) {
      const fla = Math.pow(c, 8) * lit;
      if (fla > 0.02) {
        const q = P(0, HF),
          k = D / (D - cz),
          rr = (0.08 + 0.3 * fla) * k;
        const fg = g.createRadialGradient(q[0], q[1], 0, q[0], q[1], rr);
        fg.addColorStop(0, `rgba(255,250,232,${Math.min(1, fla)})`);
        fg.addColorStop(0.35, `rgba(255,220,150,${0.5 * fla})`);
        fg.addColorStop(1, "rgba(255,200,120,0)");
        g.fillStyle = fg;
        g.fillRect(q[0] - rr, q[1] - rr, rr * 2, rr * 2);
        if (fla > 0.08) e.light(q[0], q[1], 1.2 + 3 * fla, "#fff0cc", 0.8 * fla);
      }
    }
  } else {
    g.lineWidth = 0.005;
    for (let u = -0.22; u <= 0.22; u += 0.04) {
      const q0 = P(u, 1.33),
        q1 = P(u, 1.97);
      g.strokeStyle = `rgba(255,228,175,${0.05 + 0.18 * lit * (0.5 + 0.5 * Math.sin(u * 30 + th * 4))})`;
      g.beginPath();
      g.moveTo(q0[0], q0[1]);
      g.lineTo(q1[0], q1[1]);
      g.stroke();
    }
  }
  g.strokeStyle = bc;
  g.lineWidth = 0.02;
  for (const t of [A, B]) {
    const q0 = corner(t, HB),
      q1 = corner(t, HT);
    g.beginPath();
    g.moveTo(q0[0], q0[1]);
    g.lineTo(q1[0], q1[1]);
    g.stroke();
  }
  for (const h of [HB, 1.32, 1.98, HT]) seg(A, B, h);
  g.globalAlpha = 1;
};
const a = e.t * 0.55,
  TH = (i) => a + i * 2 * half,
  order = [];
for (let i = 0; i < NP; i++) order.push(i);
order.sort((p, q) => Math.cos(TH(p)) - Math.cos(TH(q)));
let lampDone = false;
for (const i of order) {
  if (!lampDone && Math.cos(TH(i)) > 0) {
    drawLamp();
    lampDone = true;
  }
  drawPanel(TH(i), i % 3 === 0);
}
if (!lampDone) drawLamp();
// crown and chimney
ring(HT + 0.05, R * 1.02);
g.fillStyle = "#1c140d";
g.fill();
ring(HT + 0.12, R * 0.7);
g.fillStyle = "#140e09";
g.fill();
ring(HT, R * 1.04);
g.strokeStyle = bc;
g.lineWidth = 0.025;
g.stroke();
g.strokeStyle = "#120d09";
g.lineWidth = 0.08;
g.beginPath();
g.moveTo(0, -(HT + 0.12));
g.lineTo(0, -3.8);
g.stroke();
g.strokeStyle = `rgba(255,170,90,${0.15 * lit})`;
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(0.03, -(HT + 0.12));
g.lineTo(0.03, -3.8);
g.stroke();
