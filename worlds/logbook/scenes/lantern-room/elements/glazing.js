const D = 5.2,
  EYE = 1.7,
  Dc = 2.4,
  Rr = 2.8,
  PS = 2.0,
  N = 80,
  STEP = Math.PI / 10;
const lamp = e.state.lamp ?? 0.7,
  sh = e.state.shutter || 0,
  d = e.state.dawn || 0,
  rain = e.state.rain ?? 0.4;
const fl =
  lamp *
  (1 - 0.75 * sh) *
  (0.9 + 0.05 * Math.sin(e.t * 7.3) + 0.04 * Math.sin(e.t * 12.9 + 1.3) + 0.03 * Math.sin(e.t * 2.7));
const I = (0.2 + 0.8 * lamp) * (1 - sh) * (1 - 0.6 * d);
const W = (ps, h, r = Rr) => {
  const z = Dc + r * Math.cos(ps),
    k = D / Math.max(0.3, z);
  return [r * Math.sin(ps) * k, -(EYE + (h - EYE) * k), k];
};
const run = (h, r = Rr, a0 = -PS, a1 = PS, first = true) => {
  for (let i = 0; i <= N; i++) {
    const p = W(a0 + ((a1 - a0) * i) / N, h, r);
    i || !first ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]);
  }
};
const a = e.t * 0.55,
  PB = [a - Math.PI, a].map((v) => Math.atan2(Math.sin(v), Math.cos(v)));
const near = (ps) =>
  PB.reduce((m, b) => {
    let dd = Math.abs(ps - b);
    dd = Math.min(dd, 2 * Math.PI - dd);
    return Math.max(m, Math.exp((-dd * dd) / 0.04));
  }, 0);
const bars = [];
for (let j = -10; j <= 9; j++) {
  const ps = (j + 0.5) * STEP;
  if (Math.abs(ps) <= PS + 0.05) bars.push(ps);
}
// the gallery railing outside, black against the sea
g.strokeStyle = "#0c0d11";
g.lineWidth = 0.05;
g.beginPath();
run(1.15, 3.6, -1.5, 1.5);
g.stroke();
g.lineWidth = 0.025;
g.beginPath();
for (let ps = -1.5; ps <= 1.5; ps += 0.1) {
  const p = W(ps, 1.15, 3.6),
    q = W(ps, 0.3, 3.6);
  g.moveTo(p[0], p[1]);
  g.lineTo(q[0], q[1]);
}
g.stroke();
// the copper roof from inside, warm from the lamp below
let p = W(-PS, 3.3),
  q = W(PS, 3.3);
g.beginPath();
g.moveTo(-13, p[1]);
run(3.3, Rr, -PS, PS, false);
g.lineTo(13, q[1]);
g.lineTo(13, -14);
g.lineTo(-13, -14);
g.closePath();
let gr = g.createRadialGradient(0, -5.4, 0.3, 0, -5.4, 8);
gr.addColorStop(0, `rgb(${(40 + 70 * fl) | 0},${(28 + 42 * fl) | 0},${(18 + 20 * fl) | 0})`);
gr.addColorStop(1, "#0b0806");
g.fillStyle = gr;
g.fill();
const apex = W(0, 4.6, 0);
bars.forEach((ps, j) => {
  if (j % 2) return;
  const b = W(ps, 3.3);
  g.strokeStyle = "#0f0b08";
  g.lineWidth = 0.09;
  g.beginPath();
  g.moveTo(b[0], b[1]);
  g.lineTo(apex[0], apex[1]);
  g.stroke();
  g.strokeStyle = `rgba(255,170,90,${0.08 * fl})`;
  g.lineWidth = 0.03;
  g.stroke();
});
g.fillStyle = "#0a0705";
g.beginPath();
g.ellipse(apex[0], apex[1], 0.55, 0.16, 0, 0, 7);
g.fill();
// the iron parapet below the glass
p = W(-PS, 1.1);
q = W(PS, 1.1);
g.beginPath();
g.moveTo(-13, p[1]);
run(1.1, Rr, -PS, PS, false);
g.lineTo(13, q[1]);
g.lineTo(13, 9);
g.lineTo(-13, 9);
g.closePath();
g.fillStyle = "#100c09";
g.fill();
gr = g.createRadialGradient(0, -0.6, 0.2, 0, -0.6, 7);
gr.addColorStop(0, `rgba(120,78,42,${0.75 * fl})`);
gr.addColorStop(1, "rgba(60,38,20,0)");
g.fillStyle = gr;
g.fill();
for (const ps of bars) {
  const a1 = W(ps, 1.08),
    b1 = W(ps, 0);
  g.strokeStyle = "rgba(0,0,0,0.5)";
  g.lineWidth = 0.02 * a1[2];
  g.beginPath();
  g.moveTo(a1[0], a1[1]);
  g.lineTo(b1[0], b1[1]);
  g.stroke();
  for (let s = -0.12; s <= 0.121; s += 0.06)
    for (const h of [0.95, 0.15]) {
      const r1 = W(ps + s, h);
      g.fillStyle = `rgba(255,190,120,${0.1 * fl})`;
      g.beginPath();
      g.arc(r1[0], r1[1], 0.012 * r1[2], 0, 7);
      g.fill();
    }
}
// the sill
g.beginPath();
run(1.1, Rr - 0.22);
run(1.1, Rr, PS, -PS, false);
g.closePath();
g.fillStyle = "#1d150e";
g.fill();
g.fillStyle = `rgba(255,180,100,${0.16 * fl})`;
g.fill();
g.strokeStyle = `rgba(255,190,120,${0.15 + 0.2 * fl})`;
g.lineWidth = 0.02;
g.beginPath();
run(1.1, Rr - 0.22);
g.stroke();
// the glass: a faint film, salt along the bottom
g.beginPath();
run(3.3);
run(1.1, Rr, PS, -PS, false);
g.closePath();
g.fillStyle = "rgba(40,52,74,0.08)";
g.fill();
g.beginPath();
run(1.42);
run(1.1, Rr, PS, -PS, false);
g.closePath();
g.fillStyle = "rgba(170,180,190,0.05)";
g.fill();
g.globalCompositeOperation = "lighter";
for (const s of [-0.9, 0.9]) {
  const c = W(s, 1.65),
    r = 0.5 * c[2],
    hg = g.createRadialGradient(c[0], c[1], 0, c[0], c[1], r);
  hg.addColorStop(0, `rgba(255,190,110,${0.07 * fl})`);
  hg.addColorStop(1, "rgba(255,190,110,0)");
  g.fillStyle = hg;
  g.fillRect(c[0] - r, c[1] - r, 2 * r, 2 * r);
}
for (const b of PB) {
  if (Math.abs(b) > PS) continue;
  const c = W(b, 1.65),
    r = 0.55 * c[2];
  const gg = g.createRadialGradient(c[0], c[1], 0, c[0], c[1], r);
  gg.addColorStop(0, `rgba(255,236,190,${0.3 * I})`);
  gg.addColorStop(0.4, `rgba(255,220,160,${0.1 * I})`);
  gg.addColorStop(1, "rgba(255,220,160,0)");
  g.fillStyle = gg;
  g.fillRect(c[0] - r, c[1] - r, 2 * r, 2 * r);
}
g.globalCompositeOperation = "source-over";
// rain on the glass, glinting when the beam passes
for (let i = 0; i < 320; i++) {
  const ps = (e.rnd() * 2 - 1) * PS,
    h = 1.13 + e.rnd() * 2.14,
    s = 0.003 + e.rnd() * 0.008,
    on = e.rnd() < rain;
  if (!on) continue;
  const c = W(ps, h),
    gl = near(ps);
  g.fillStyle = `rgba(205,215,235,${0.1 + 0.55 * gl * I})`;
  g.beginPath();
  g.ellipse(c[0], c[1], s * c[2], s * 1.3 * c[2], 0, 0, 7);
  g.fill();
}
g.lineCap = "round";
for (let j = 0; j < 14; j++) {
  const ps = (e.rnd() * 2 - 1) * PS * 0.95,
    sp = 0.05 + e.rnd() * 0.12,
    off = e.rnd() * 20,
    on = e.rnd() < rain * 1.4;
  if (!on) continue;
  const hh = 3.28 - ((e.t * sp + off) % 2.6);
  if (hh < 1.13) continue;
  const gl = near(ps);
  g.strokeStyle = `rgba(205,215,235,${0.1 + 0.4 * gl * I})`;
  g.beginPath();
  let c;
  for (let u = 0; u <= 8; u++) {
    const h = Math.min(3.28, hh + u * 0.05);
    c = W(ps + 0.006 * Math.sin(h * 11 + j), h);
    g.lineWidth = 0.006 * c[2];
    u ? g.lineTo(c[0], c[1]) : g.moveTo(c[0], c[1]);
  }
  g.stroke();
  c = W(ps + 0.006 * Math.sin(hh * 11 + j), hh);
  g.fillStyle = `rgba(215,225,240,${0.2 + 0.5 * gl * I})`;
  g.beginPath();
  g.arc(c[0], c[1], 0.008 * c[2], 0, 7);
  g.fill();
}
// narrow panes: the astragals, lit on their inner faces
for (const ps of bars) {
  const t = W(ps, 3.3),
    b = W(ps, 1.1),
    w = 0.07 * t[2];
  g.fillStyle = "#120d0a";
  g.fillRect(t[0] - w / 2, t[1], w, b[1] - t[1]);
  g.fillStyle = `rgba(255,175,100,${0.06 + 0.14 * fl})`;
  g.fillRect(t[0] - w * 0.1, t[1], w * 0.2, b[1] - t[1]);
  const gl = near(ps) * I;
  if (gl > 0.02) {
    g.fillStyle = `rgba(255,236,200,${0.35 * gl})`;
    g.fillRect(t[0] - w / 2, t[1], w * 0.25, b[1] - t[1]);
  }
}
const band = (h, wd, col) => {
  g.strokeStyle = col;
  for (let i = 0; i < N; i++) {
    const a0 = -PS + (2 * PS * i) / N,
      a1 = a0 + (2 * PS) / N,
      p0 = W(a0, h),
      p1 = W(a1, h);
    g.lineWidth = wd * p0[2];
    g.beginPath();
    g.moveTo(p0[0], p0[1]);
    g.lineTo(p1[0], p1[1]);
    g.stroke();
  }
};
band(2.2, 0.045, "#120d0a");
band(3.3, 0.16, "#0f0b08");
band(1.11, 0.05, "#17110c");
band(2.2, 0.012, `rgba(255,175,100,${0.1 * fl})`);
