const S = e.state,
  str = (v) => String(v == null ? "" : v),
  W = str(S.weather),
  windy = /wind|storm/.test(W),
  rain = /rain|storm/.test(W),
  bp = S.beam_pass !== false && !/^no|off|false/i.test(str(S.beam_pass)),
  sweep = bp ? Math.pow(Math.abs(Math.cos(e.t * 0.3)), 10) : 0,
  t = e.t;
const N = str(S.note_state),
  ns = /read/.test(N) ? 2 : /unroll|open/.test(N) ? 1 : 0,
  wf = windy ? 1 : 0.35,
  rim = (a) => "rgba(175,190,222," + a + ")";
g.translate(
  Math.sin(t * 6.7) * 0.0006 + Math.sin(t * 11.3) * 0.0004,
  Math.sin(t * 1.1) * 0.003 + Math.sin(t * 0.43) * 0.002,
);
const roll = (x0, x1, cy, r) => {
  let gr = g.createLinearGradient(0, cy - r, 0, cy + r);
  gr.addColorStop(0, "#8a8372");
  gr.addColorStop(0.35, "#5c5646");
  gr.addColorStop(1, "#1e1b16");
  g.fillStyle = gr;
  g.beginPath();
  g.moveTo(x0, cy - r);
  g.lineTo(x1, cy - r);
  g.ellipse(x1, cy, r * 0.35, r, 0, -Math.PI / 2, Math.PI / 2);
  g.lineTo(x0, cy + r);
  g.ellipse(x0, cy, r * 0.35, r, 0, Math.PI / 2, Math.PI * 1.5);
  g.closePath();
  g.fill();
  for (let i = 0; i < 10; i++) {
    const x = x0 + e.rnd() * (x1 - x0),
      w = 0.006 + e.rnd() * 0.02;
    g.fillStyle = "rgba(20,18,14," + (0.15 + e.rnd() * 0.2) + ")";
    g.beginPath();
    g.ellipse(x, cy + (e.rnd() - 0.5) * r, w, r * 0.5, 0, 0, 7);
    g.fill();
  }
  g.strokeStyle = rim(0.35 + 0.4 * sweep);
  g.lineWidth = 0.0012;
  g.beginPath();
  g.moveTo(x0, cy - r * 0.92);
  g.lineTo(x1, cy - r * 0.92);
  g.stroke();
  g.fillStyle = "#4a4436";
  g.beginPath();
  g.ellipse(x1, cy, r * 0.35, r, 0, 0, 7);
  g.fill();
  g.strokeStyle = "rgba(30,26,20,0.8)";
  g.lineWidth = 0.0008;
  g.beginPath();
  for (let a = 0; a < 14; a += 0.25) {
    const rr = r * (1 - a / 15);
    g.lineTo(x1 + Math.cos(a) * rr * 0.35, cy + Math.sin(a) * rr);
  }
  g.stroke();
  if (sweep > 0.02) {
    g.globalCompositeOperation = "lighter";
    g.fillStyle = "rgba(255,232,190," + 0.18 * sweep + ")";
    g.fillRect(x0, cy - r, x1 - x0, r * 2);
    g.globalCompositeOperation = "source-over";
  }
};
const thread = (x, cy, r) => {
  g.strokeStyle = "#7a2520";
  g.lineWidth = 0.0022;
  g.beginPath();
  g.moveTo(x - 0.004, cy - r);
  g.quadraticCurveTo(x - 0.002, cy, x - 0.004, cy + r);
  g.moveTo(x + 0.006, cy - r);
  g.quadraticCurveTo(x + 0.008, cy, x + 0.006, cy + r);
  g.stroke();
  g.strokeStyle = "rgba(200,110,95,0.35)";
  g.lineWidth = 0.0008;
  g.beginPath();
  g.moveTo(x - 0.004, cy - r);
  g.lineTo(x - 0.003, cy - r * 0.3);
  g.moveTo(x + 0.006, cy - r);
  g.lineTo(x + 0.007, cy - r * 0.3);
  g.stroke();
};
const seal = (x, y, R, cracked) => {
  let gr = g.createRadialGradient(x + R * 0.3, y - R * 0.4, 0, x, y, R);
  gr.addColorStop(0, "#8e2e26");
  gr.addColorStop(0.6, "#5a1813");
  gr.addColorStop(1, "#3a0e0b");
  g.fillStyle = gr;
  g.beginPath();
  for (let a = 0; a < 6.3; a += 0.4) {
    const rr = R * (0.92 + 0.1 * Math.sin(a * 5 + 1));
    g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
  }
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(30,6,5,0.7)";
  g.lineWidth = 0.0008;
  g.beginPath();
  g.arc(x, y, R * 0.6, 0, 7);
  g.stroke();
  g.strokeStyle = "rgba(255,190,170," + (0.3 + 0.4 * sweep) + ")";
  g.beginPath();
  g.arc(x, y, R * 0.85, -1.6, -0.4);
  g.stroke();
  if (cracked) {
    g.strokeStyle = "rgba(15,3,2,0.9)";
    g.lineWidth = 0.0012;
    g.beginPath();
    g.moveTo(x - R * 0.9, y - R * 0.2);
    g.lineTo(x - R * 0.1, y + R * 0.1);
    g.lineTo(x + R * 0.3, y - R * 0.3);
    g.lineTo(x + R * 0.9, y + R * 0.3);
    g.stroke();
  }
};
const ends = (x, y, L) => {
  const sw = Math.sin(t * 1.7) * 0.006 * wf + Math.sin(t * 3.1) * 0.003 * wf;
  g.strokeStyle = "#6e211c";
  g.lineWidth = 0.0018;
  g.lineCap = "round";
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x - 0.004 + sw * 0.5, y + L * 0.5, x - 0.008 + sw, y + L);
  g.moveTo(x + 0.002, y);
  g.quadraticCurveTo(x + 0.006 + sw * 0.4, y + L * 0.45, x + 0.009 + sw * 0.8, y + L * 0.85);
  g.stroke();
};
const write = (x0, x1, y0, y1, alpha, blur) => {
  g.lineCap = "round";
  for (let j = 0; j < 12; j++) {
    const base = y0 + 0.02 + j * 0.0125;
    if (base > y1 - 0.012) break;
    const leg = j < 4 ? 1 : Math.max(0.12, 1 - (j - 3) * 0.28);
    let x = x0 + 0.012 + (j === 0 ? 0.014 : 0);
    const xe = x1 - 0.012 - e.rnd() * 0.025;
    while (x < xe) {
      const wl = 0.007 + e.rnd() * 0.02,
        ph = e.rnd() * 6,
        ph2 = e.rnd() * 6;
      g.strokeStyle = "rgba(24,22,34," + alpha * leg + ")";
      g.lineWidth = 0.0011 + (1 - leg) * 0.0012 * blur;
      g.beginPath();
      for (let u = 0; u <= wl; u += 0.0004) {
        const yy = base - 0.0018 - 0.0019 * Math.sin(u * 2400 + ph) * (0.7 + 0.3 * Math.sin(u * 600 + ph2));
        if (u === 0) g.moveTo(x, yy);
        else g.lineTo(x + u + (0.0008 * (base - yy)) / 0.004, yy);
      }
      g.stroke();
      x += wl + 0.004 + e.rnd() * 0.003;
    }
    if (rain && j >= 2) {
      const xx = x0 + 0.02 + e.rnd() * (x1 - x0 - 0.04);
      g.strokeStyle = "rgba(30,28,44," + 0.25 * alpha + ")";
      g.lineWidth = 0.0014;
      g.beginPath();
      g.moveTo(xx, base);
      g.lineTo(xx + 0.001, base + 0.012 + e.rnd() * 0.02);
      g.stroke();
    }
  }
};
const sheet = (x0, x1, y0, y1, cr, txt) => {
  const fl = Math.sin(t * 2.1) * 0.0025 * wf + Math.sin(t * 3.7) * 0.001 * wf;
  const path = () => {
    g.beginPath();
    g.moveTo(x0, y0);
    g.lineTo(x1, y0);
    for (let i = 1; i <= 6; i++) g.lineTo(x1 + (fl * i) / 6 + Math.sin(i * 2.7) * 0.0012, y0 + ((y1 - y0) * i) / 6);
    for (let i = 6; i >= 0; i--) g.lineTo(x0 + (fl * i) / 6 + Math.sin(i * 1.9) * 0.0012, y0 + ((y1 - y0) * i) / 6);
    g.closePath();
  };
  path();
  let gr = g.createLinearGradient(0, y0, 0, y1);
  gr.addColorStop(0, "#8f8979");
  gr.addColorStop(1, "#686252");
  g.fillStyle = gr;
  g.fill();
  g.save();
  path();
  g.clip();
  gr = g.createLinearGradient(x0, 0, x1, 0);
  gr.addColorStop(0, "rgba(10,12,20,0.25)");
  gr.addColorStop(1, "rgba(190,200,225,0.12)");
  g.fillStyle = gr;
  g.fillRect(x0 - 0.01, y0, x1 - x0 + 0.02, y1 - y0 + 0.01);
  for (let i = 0; i < 9; i++) {
    const x = x0 + e.rnd() * (x1 - x0),
      y = y0 + e.rnd() * (y1 - y0),
      r = 0.01 + e.rnd() * 0.03;
    const b = g.createRadialGradient(x, y, 0, x, y, r);
    b.addColorStop(0, "rgba(38,34,26," + (0.12 + e.rnd() * 0.15) + ")");
    b.addColorStop(1, "rgba(38,34,26,0)");
    g.fillStyle = b;
    g.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  write(x0, x1, y0, y1, txt, ns === 2 ? 1 : 3);
  g.fillStyle = "rgba(20,18,14,0.35)";
  g.fillRect(x0 - 0.01, y0, x1 - x0 + 0.02, 0.006);
  if (sweep > 0.02) {
    g.globalCompositeOperation = "lighter";
    g.fillStyle = "rgba(255,232,190," + 0.22 * sweep + ")";
    g.fillRect(x0 - 0.01, y0, x1 - x0 + 0.02, y1 - y0 + 0.01);
    g.globalCompositeOperation = "source-over";
  }
  g.restore();
  g.strokeStyle = rim(0.25);
  g.lineWidth = 0.0012;
  g.beginPath();
  g.moveTo(x1, y0);
  for (let i = 1; i <= 6; i++) g.lineTo(x1 + (fl * i) / 6 + Math.sin(i * 2.7) * 0.0012, y0 + ((y1 - y0) * i) / 6);
  g.stroke();
  roll(x0 + fl, x1 + fl, y1, cr);
};
const hand = (gx, gy, s, r) => {
  g.fillStyle = "#0b0e14";
  g.beginPath();
  g.moveTo(s * 0.25, 0.4);
  g.quadraticCurveTo(s * 0.17, 0.2, gx + s * 0.02, gy + 0.05);
  g.lineTo(gx + s * 0.08, gy + 0.03);
  g.quadraticCurveTo(s * 0.3, 0.16, s * 0.42, 0.4);
  g.closePath();
  g.fill();
  g.lineWidth = 0.002;
  g.strokeStyle = rim(s < 0 ? 0.14 : 0.05);
  g.beginPath();
  g.moveTo(s * 0.25, 0.4);
  g.quadraticCurveTo(s * 0.17, 0.2, gx + s * 0.02, gy + 0.05);
  g.stroke();
  g.strokeStyle = rim(s > 0 ? 0.14 : 0.05);
  g.beginPath();
  g.moveTo(gx + s * 0.08, gy + 0.03);
  g.quadraticCurveTo(s * 0.3, 0.16, s * 0.42, 0.4);
  g.stroke();
  g.save();
  g.translate(gx + s * 0.05, gy + 0.042);
  g.rotate(-s * 0.6);
  g.fillStyle = "#161a23";
  g.beginPath();
  g.ellipse(0, 0, 0.032, 0.014, 0, 0, 7);
  g.fill();
  g.strokeStyle = "rgba(60,66,82,0.5)";
  g.lineWidth = 0.0012;
  for (let k = -3; k <= 3; k++) {
    g.beginPath();
    g.moveTo(k * 0.008, -0.012);
    g.lineTo(k * 0.008, 0.012);
    g.stroke();
  }
  g.restore();
  g.save();
  g.translate(gx + s * 0.028, gy + 0.01);
  g.rotate(s * 0.5);
  let gr = g.createRadialGradient(0.01, -0.012, 0.002, 0, 0, 0.04);
  gr.addColorStop(0, "#5d5e6d");
  gr.addColorStop(0.5, "#33333e");
  gr.addColorStop(1, "#18181f");
  g.fillStyle = gr;
  g.beginPath();
  g.ellipse(0, 0, 0.034, 0.028, 0, 0, 7);
  g.fill();
  g.restore();
  for (let k = 0; k < 3; k++) {
    const fx = gx - s * (0.002 + k * 0.011),
      fy = gy + r + 0.006 + k * 0.001;
    g.fillStyle = "#262630";
    g.beginPath();
    g.ellipse(fx, fy, 0.0062, 0.0085, 0, 0, 7);
    g.fill();
    g.strokeStyle = rim(0.25);
    g.lineWidth = 0.0012;
    g.beginPath();
    g.arc(fx, fy, 0.006, -2.2, -0.6);
    g.stroke();
  }
  g.lineCap = "round";
  g.strokeStyle = "#3c3d49";
  g.lineWidth = 0.014;
  g.beginPath();
  g.moveTo(gx + s * 0.022, gy - 0.004);
  g.quadraticCurveTo(gx + s * 0.005, gy - r - 0.004, gx - s * 0.02, gy - r + 0.002);
  g.stroke();
  g.strokeStyle = rim(0.35 + 0.4 * sweep);
  g.lineWidth = 0.0018;
  g.beginPath();
  g.moveTo(gx + s * 0.022, gy - 0.011);
  g.quadraticCurveTo(gx + s * 0.005, gy - r - 0.011, gx - s * 0.02, gy - r - 0.005);
  g.stroke();
  g.fillStyle = "rgba(140,140,156,0.55)";
  g.beginPath();
  g.ellipse(gx - s * 0.021, gy - r + 0.001, 0.004, 0.003, 0, 0, 7);
  g.fill();
  for (let k = 0; k < 5; k++) {
    g.fillStyle = rim(0.3 + 0.5 * sweep);
    g.beginPath();
    g.arc(gx + s * (0.01 + e.rnd() * 0.04), gy - 0.005 + e.rnd() * 0.025, 0.0012, 0, 7);
    g.fill();
  }
};
const drips = (pts) => {
  pts.forEach(([x, y], k) => {
    const T = 1.9 + k * 0.83,
      ph = ((t + k * 0.61) / T) % 1;
    if (ph < 0.6) {
      const s = 0.0012 + (0.0018 * ph) / 0.6;
      g.fillStyle = "rgba(200,215,240,0.5)";
      g.beginPath();
      g.ellipse(x, y + s, s * 0.8, s, 0, 0, 7);
      g.fill();
    } else {
      const d = (ph - 0.6) / 0.4,
        yy = y + 0.003 + 0.3 * d * d;
      g.fillStyle = "rgba(200,215,240," + 0.55 * (1 - d) + ")";
      g.beginPath();
      g.ellipse(x, yy, 0.0012, 0.0035, 0, 0, 7);
      g.fill();
    }
  });
};
e.light(0, -0.03, 0.14, "#cfdcff", 0.12);
if (ns === 0) {
  const cy = -0.05,
    R = 0.016;
  roll(-0.085, 0.085, cy, R);
  thread(0.004, cy, R);
  ends(0.007, cy + 0.012, 0.035);
  seal(0.007, cy + 0.004, 0.011, false);
  hand(-0.078, cy, -1, R);
  hand(0.078, cy, 1, R);
  drips([
    [-0.05, cy + R],
    [0.03, cy + R],
    [0.07, cy + R + 0.01],
  ]);
} else if (ns === 1) {
  const cy = -0.075,
    R = 0.013,
    y1 = cy + 0.055 + 0.004 * Math.sin(t * 0.7);
  sheet(-0.08, 0.08, cy, y1, 0.007, 0.22);
  roll(-0.085, 0.085, cy, R);
  const sw = Math.sin(t * 1.5) * 0.008 * wf;
  g.strokeStyle = "#7a2520";
  g.lineWidth = 0.002;
  g.beginPath();
  g.moveTo(-0.055, cy + R * 0.5);
  g.quadraticCurveTo(-0.06 + sw * 0.5, cy + 0.05, -0.068 + sw, cy + 0.085);
  g.stroke();
  seal(-0.068 + sw, cy + 0.088, 0.009, true);
  hand(-0.082, cy, -1, R);
  hand(0.082, cy, 1, R);
  drips([
    [-0.04, y1 + 0.007],
    [0.05, y1 + 0.007],
    [0, y1 + 0.007],
  ]);
} else {
  const cy = -0.105,
    R = 0.011,
    y1 = 0.06;
  sheet(-0.085, 0.085, cy, y1, 0.008, 0.85);
  roll(-0.09, 0.088, cy, R);
  const sw = Math.sin(t * 1.5) * 0.008 * wf;
  g.strokeStyle = "#7a2520";
  g.lineWidth = 0.002;
  g.beginPath();
  g.moveTo(-0.09, cy + 0.01);
  g.quadraticCurveTo(-0.1 + sw * 0.5, cy + 0.07, -0.108 + sw, cy + 0.12);
  g.stroke();
  seal(-0.108 + sw, cy + 0.123, 0.009, true);
  hand(-0.082, cy, -1, R);
  hand(0.08, y1, 1, 0.008);
  drips([
    [-0.03, y1 + 0.008],
    [0.04, y1 + 0.008],
  ]);
  if (sweep > 0.05) e.light(0, -0.03, 0.2, "#fff0cc", 0.3 * sweep);
}
e.at(0, -0.13);
