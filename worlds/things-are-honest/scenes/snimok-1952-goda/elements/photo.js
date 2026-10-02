const S = e.state || {},
  A = e.aspect,
  t = e.t,
  px = e.px || 0.001;
const cl = (v, a, b) => Math.max(a, Math.min(b, v)),
  num = (v, d) => (typeof v === "number" && isFinite(v) ? v : d);
const bend = cl(num(S.paper_bend, 0.4), 0, 1),
  glow = cl(num(S.lamp_glow, 0.8), 0, 1),
  hint = cl(num(S.handwritten_back_hint, 0.35), 0, 1),
  flip = cl(num(S.flip, 0), 0, 1);
const hold = String(S.fingers_holding || "both"),
  shape = String(S.cutout_shape || "man"),
  det = String(S.edge_details == null ? "sleeve,button,collar,shadow" : S.edge_details);
const has = (k) => det.indexOf(k) >= 0 || det.indexOf("all") >= 0;
const L = hold === "both" || hold === "left",
  R = hold === "both" || hold === "right",
  free = !L && !R;
const tr = free ? 0 : 0.35 + cl(num(S.tremble, 0.3), 0, 1) * 1.6;
const hs = (n) => {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const dk = (h, f) => {
  const n = parseInt(h.slice(1), 16);
  return `rgb(${((n >> 16) * f) | 0},${(((n >> 8) & 255) * f) | 0},${((n & 255) * f) | 0})`;
};
const W = 1.12,
  H = 0.78,
  B = 0.034,
  IW = W - 2 * B,
  IH = H - 2 * B,
  Z = Math.min(1, A / 1.55) * 0.93;
const rot =
  (free ? -0.06 : -0.03) +
  (Math.sin(t * 0.71) * 0.004 + Math.sin(t * 1.37 + 1) * 0.0025 + Math.sin(t * 5.3) * 0.0007) * tr;
const ox = (Math.sin(t * 0.53) * 0.003 + Math.sin(t * 1.91) * 0.0012) * tr,
  oy = (Math.sin(t * 0.61 + 2) * 0.003 + Math.sin(t * 2.33) * 0.001) * tr;
const fx = Math.abs(Math.cos(Math.PI * flip)),
  back = flip > 0.5;
const c = back ? 0 : 0.028 + bend * 0.1,
  K = W / 2 - c + H / 2,
  lf = 0.35 + 0.65 * glow;
// the people of 1952: head y, clothes, half-shoulders, kind
const P = [
  [-0.13, "#5a4430", 0.056, "m"],
  [-0.1, "#cdb894", 0.047, "w"],
  [-0.15, "#3e2e22", 0.058, "m"],
  [-0.11, "#8a7052", 0.047, "w"],
  [-0.105, "#e2d4b2", 0.048, "w"],
  null,
  [-0.13, "#4a3a2c", 0.056, "m"],
  [-0.055, "#9a8060", 0.04, "c"],
  [-0.12, "#6a5238", 0.048, "w"],
];
const CUT = {
  man: [-0.165, "#33281f", 0.058, "m"],
  soldier: [-0.16, "#4a4634", 0.058, "s"],
  woman: [-0.14, "#2e2a2c", 0.048, "w"],
  child: [-0.05, "#5a4a3a", 0.04, "c"],
}[shape] || [-0.165, "#33281f", 0.058, "m"];
P[5] = CUT;
const PX = (i) => -0.42 + i * 0.105,
  X5 = PX(5);
const SY = (p) => p[0] + (p[3] === "c" ? 0.06 : 0.075);
const HR = (k) => (k === "c" ? [0.024, 0.029] : k === "w" ? [0.03, 0.035] : [0.028, 0.035]);
const bodyPath = (x, p, sx, sy0) => {
  const w = p[2],
    sy = SY(p) + sy0;
  x += sx;
  g.moveTo(x - w * 0.95, 0.4);
  g.lineTo(x - w, sy + 0.05);
  g.quadraticCurveTo(x - w, sy, x - w * 0.45, sy - 0.012);
  g.lineTo(x - 0.012, sy - 0.03);
  g.lineTo(x + 0.012, sy - 0.03);
  g.lineTo(x + w * 0.45, sy - 0.012);
  g.quadraticCurveTo(x + w, sy, x + w, sy + 0.05);
  g.lineTo(x + w * 0.95, 0.4);
  g.closePath();
};
// the line the scissors took
const HP = (() => {
  const p = CUT,
    hy = p[0],
    w = p[2],
    sy = SY(p),
    k = p[3],
    hr = HR(k),
    a = [];
  a.push([-w * 0.95, H / 2 + 0.004], [-w * 0.97, 0.3]);
  if (has("button"))
    a.push([-w * 0.97, 0.262], [-w * 0.55, 0.236], [-0.015, 0.214], [-w * 0.6, 0.19], [-w * 0.99, 0.155]);
  a.push(
    [-w, sy + 0.05],
    [-w * 0.9, sy + 0.01],
    [-w * 0.45, sy - 0.013],
    [-0.013, sy - 0.031],
    [-0.014, hy + hr[1] * 0.75],
  );
  for (let i = 0; i <= 16; i++) {
    const th = 1.95 + (i / 16) * (2 * Math.PI + 1.19 - 1.95);
    let qx = Math.cos(th) * (hr[0] + 0.003),
      qy = hy + Math.sin(th) * (hr[1] + 0.004);
    if (k === "s" && qy < hy - hr[1] * 0.45) {
      qy = Math.max(qy - 0.012, hy - hr[1] - 0.02);
      qx *= 1.25;
    }
    a.push([qx, qy]);
  }
  a.push([0.014, hy + hr[1] * 0.75], [0.013, sy - 0.031]);
  if (has("collar")) a.push([0.019, sy - 0.006], [0.027, sy + 0.018], [w * 0.55, sy - 0.004]);
  else a.push([w * 0.45, sy - 0.013]);
  a.push([w * 0.9, sy + 0.01], [w, sy + 0.05], [w * 0.97, 0.3], [w * 0.95, H / 2 + 0.004]);
  const o = [];
  for (let i = 0; i < a.length; i++) {
    const q = a[i],
      n = a[(i + 1) % a.length],
      fixd = Math.abs(q[1]) > 0.37;
    o.push([q[0] + (fixd ? 0 : (hs(i) - 0.5) * 0.004), q[1] + (fixd ? 0 : (hs(i + 50) - 0.5) * 0.004)]);
    if (i < a.length - 1)
      o.push([(q[0] + n[0]) / 2 + (hs(i + 99) - 0.5) * 0.003, (q[1] + n[1]) / 2 + (hs(i + 150) - 0.5) * 0.003]);
  }
  return o;
})();
const hole = (m) => {
  g.moveTo((X5 + HP[0][0]) * m, HP[0][1]);
  for (let i = 1; i < HP.length; i++) g.lineTo((X5 + HP[i][0]) * m, HP[i][1]);
  g.closePath();
};
// the deckled studio edge
const outline = () => {
  const n = 56,
    m = 40,
    a = 0.0055;
  g.moveTo(-W / 2, -H / 2);
  for (let i = 1; i <= n; i++) {
    const x = -W / 2 + (i * W) / n;
    g.quadraticCurveTo(x - W / n / 2, -H / 2 - a, x, -H / 2);
  }
  for (let i = 1; i <= m; i++) {
    const y = -H / 2 + (i * H) / m;
    g.quadraticCurveTo(W / 2 + a, y - H / m / 2, W / 2, y);
  }
  for (let i = 1; i <= n; i++) {
    const x = W / 2 - (i * W) / n;
    g.quadraticCurveTo(x + W / n / 2, H / 2 + a, x, H / 2);
  }
  for (let i = 1; i <= m; i++) {
    const y = H / 2 - (i * H) / m;
    g.quadraticCurveTo(-W / 2 - a, y + H / m / 2, -W / 2, y);
  }
  g.closePath();
};
const half = () => {
  g.beginPath();
  g.moveTo(W / 2 - c - 1, -H / 2 - 1);
  g.lineTo(W / 2 - c + 1, -H / 2 + 1);
  g.lineTo(-3, 3);
  g.lineTo(-3, -3);
  g.closePath();
  g.clip();
};
const TXT = String(S.back_text == null ? "Дача, июнь 1952.\nВсе вместе." : S.back_text).split("\n");
const ink = (a) => {
  g.fillStyle = `rgba(46,38,104,${a})`;
  g.font = "italic 27px Georgia, serif";
  g.textAlign = "left";
  TXT.forEach((ln, i) => {
    g.save();
    g.translate(-W / 2 + 0.03, -H / 2 + 0.05 + i * 0.042);
    g.rotate(-0.03 + i * 0.01);
    g.scale(0.001, 0.001);
    g.fillText(ln, 0, 0);
    g.restore();
  });
};
const lit = () => {
  let gr = g.createRadialGradient(W * 0.6, -H * 0.95, 0.1, W * 0.6, -H * 0.95, 1.7);
  gr.addColorStop(0, "#fff3dc");
  gr.addColorStop(0.5, "#e0c098");
  gr.addColorStop(1, "#8a6040");
  g.globalCompositeOperation = "multiply";
  g.fillStyle = gr;
  g.fillRect(-W, -H, 2 * W, 2 * H);
  g.globalCompositeOperation = "source-over";
  gr = g.createLinearGradient(-W / 2, 0, W / 2, 0);
  gr.addColorStop(0, `rgba(40,22,10,${0.1 + bend * 0.35})`);
  gr.addColorStop(0.42, "rgba(40,22,10,0)");
  gr.addColorStop(0.58, "rgba(40,22,10,0)");
  gr.addColorStop(1, `rgba(40,22,10,${0.05 + bend * 0.25})`);
  g.fillStyle = gr;
  g.fillRect(-W, -H, 2 * W, 2 * H);
  const sh = 0.12 + Math.sin(t * 0.37) * 0.015 * tr + rot * 0.8;
  gr = g.createLinearGradient(sh - 0.2, -H / 2, sh + 0.08, H / 2);
  gr.addColorStop(0, "rgba(255,236,200,0)");
  gr.addColorStop(0.5, `rgba(255,236,200,${(0.05 + bend * 0.1) * glow})`);
  gr.addColorStop(1, "rgba(255,236,200,0)");
  g.globalCompositeOperation = "screen";
  g.fillStyle = gr;
  g.fillRect(-W, -H, 2 * W, 2 * H);
  g.globalCompositeOperation = "source-over";
  g.fillStyle = `rgba(12,8,10,${(1 - glow) * 0.72})`;
  g.fillRect(-W, -H, 2 * W, 2 * H);
};
const cutEdge = (m) => {
  g.save();
  g.beginPath();
  outline();
  g.clip();
  g.beginPath();
  hole(m);
  g.strokeStyle = `rgba(240,230,206,${0.3 + glow * 0.5})`;
  g.lineWidth = 0.0024;
  g.lineJoin = "round";
  g.stroke();
  g.restore();
};
const bz = (u, a, b, c2, d) => (1 - u) ** 3 * a + 3 * (1 - u) ** 2 * u * b + 3 * (1 - u) * u * u * c2 + u ** 3 * d;
const frontSide = () => {
  g.save();
  g.beginPath();
  outline();
  g.clip();
  g.beginPath();
  g.rect(-2, -2, 4, 4);
  hole(1);
  g.clip("evenodd");
  let gr = g.createLinearGradient(-W / 2, -H / 2, W / 2, H / 2);
  gr.addColorStop(0, "#e6dab9");
  gr.addColorStop(1, "#d2c19a");
  g.fillStyle = gr;
  g.fillRect(-W, -H, 2 * W, 2 * H);
  g.save();
  g.beginPath();
  g.rect(-IW / 2, -IH / 2, IW, IH);
  g.clip();
  // the dacha wall in June sun, from the left
  gr = g.createLinearGradient(-IW / 2, 0, IW / 2, 0);
  gr.addColorStop(0, "#cdb48c");
  gr.addColorStop(1, "#a08664");
  g.fillStyle = gr;
  g.fillRect(-IW / 2, -IH / 2, IW, IH);
  g.strokeStyle = "rgba(70,50,32,0.22)";
  g.lineWidth = 0.002;
  for (let y = -0.3; y < 0.37; y += 0.028) {
    g.beginPath();
    g.moveTo(-IW / 2, y);
    g.lineTo(IW / 2, y);
    g.stroke();
  }
  g.fillStyle = "#5a4634";
  g.fillRect(-IW / 2, -IH / 2, IW, 0.05);
  g.fillStyle = "rgba(40,28,18,0.35)";
  g.fillRect(-IW / 2, -IH / 2 + 0.05, IW, 0.02);
  g.fillStyle = "#4e3c2c";
  g.fillRect(-0.52, -0.27, 0.13, 0.17);
  g.fillStyle = "#b8a07c";
  g.fillRect(-0.459, -0.27, 0.008, 0.17);
  g.fillRect(-0.52, -0.2, 0.13, 0.008);
  g.strokeStyle = "#d8c8a4";
  g.lineWidth = 0.008;
  g.strokeRect(-0.52, -0.27, 0.13, 0.17);
  g.fillStyle = "#e0d4b8";
  g.fillRect(0.485, -IH / 2, 0.022, IH);
  g.fillStyle = "#3e3024";
  for (let i = 0; i < 9; i++)
    g.fillRect(0.485 + hs(i + 30) * 0.008, -0.33 + i * 0.075 + hs(i + 31) * 0.03, 0.01 + hs(i + 32) * 0.01, 0.004);
  // their shadows on the boards
  g.fillStyle = "rgba(52,36,22,0.3)";
  for (let i = 0; i < 9; i++) {
    if (i === 5 && !has("shadow")) continue;
    const p = P[i],
      x = PX(i),
      hr = HR(p[3]);
    g.beginPath();
    bodyPath(x, p, 0.032, -0.006);
    g.moveTo(x + 0.032 + hr[0], p[0] - 0.006);
    g.ellipse(x + 0.032, p[0] - 0.006, hr[0], hr[1], 0, 0, 7);
    g.fill();
  }
  // bodies
  for (let i = 0; i < 9; i++) {
    const p = P[i],
      x = PX(i),
      sy = SY(p);
    const bg = g.createLinearGradient(x - p[2], 0, x + p[2], 0);
    bg.addColorStop(0, p[1]);
    bg.addColorStop(1, dk(p[1], 0.72));
    g.fillStyle = bg;
    g.beginPath();
    bodyPath(x, p, 0, 0);
    g.fill();
    g.strokeStyle = "rgba(30,20,12,0.3)";
    g.lineWidth = 0.003;
    g.beginPath();
    g.moveTo(x - 0.012, sy - 0.028);
    g.lineTo(x - 0.003, sy + 0.09);
    g.moveTo(x + 0.012, sy - 0.028);
    g.lineTo(x + 0.004, sy + 0.09);
    g.stroke();
    if (p[3] === "m" || p[3] === "s" || i === 5) {
      g.fillStyle = "#e8dcc0";
      g.beginPath();
      g.moveTo(x - 0.013, sy - 0.031);
      g.lineTo(x - 0.001, sy + 0.022);
      g.lineTo(x - 0.032, sy + 0.006);
      g.closePath();
      g.moveTo(x + 0.013, sy - 0.031);
      g.lineTo(x + 0.001, sy + 0.022);
      g.lineTo(x + 0.032, sy + 0.006);
      g.closePath();
      g.fill();
    }
    if (p[3] === "m" || p[3] === "s" || i === 5) {
      const bx = i === 5 ? x - 0.013 : x - 0.004;
      for (const by of [0.12, 0.214, 0.3]) {
        g.fillStyle = "#cfc0a0";
        g.beginPath();
        g.arc(bx, by, 0.0065, 0, 7);
        g.fill();
        g.strokeStyle = "rgba(40,28,18,0.6)";
        g.lineWidth = 0.0015;
        g.stroke();
        g.fillStyle = "rgba(40,28,18,0.7)";
        g.fillRect(bx - 0.0028, by - 0.001, 0.0016, 0.0016);
        g.fillRect(bx + 0.0012, by - 0.001, 0.0016, 0.0016);
      }
    }
  }
  // his arms, around the two beside him
  if (has("sleeve")) {
    const p = CUT,
      sy = SY(p),
      w = p[2];
    for (const s of [-1, 1]) {
      const q = P[5 + s],
        xn = PX(5 + s),
        syn = SY(q),
        ch = p[3] === "c";
      const hx = ch ? xn - s * 0.02 : xn + s * 0.034,
        hy2 = ch ? Math.max(syn + 0.03, sy + 0.03) : syn + 0.004,
        sx0 = X5 + s * w * 0.6,
        sy0 = sy + 0.022;
      g.strokeStyle = p[1];
      g.lineWidth = 0.026;
      g.lineCap = "round";
      g.beginPath();
      g.moveTo(sx0, sy0);
      g.quadraticCurveTo((sx0 + hx) / 2, Math.min(sy0, hy2) - 0.012, hx - s * 0.012, hy2);
      g.stroke();
      g.strokeStyle = "rgba(255,240,210,0.13)";
      g.lineWidth = 0.004;
      g.beginPath();
      g.moveTo(sx0, sy0 - 0.01);
      g.quadraticCurveTo((sx0 + hx) / 2, Math.min(sy0, hy2) - 0.022, hx - s * 0.012, hy2 - 0.01);
      g.stroke();
      g.fillStyle = "#c8ae88";
      g.beginPath();
      g.ellipse(hx, hy2 + 0.004, 0.016, 0.011, s * 0.3, 0, 7);
      g.fill();
      g.strokeStyle = "rgba(60,40,25,0.4)";
      g.lineWidth = 0.0015;
      g.beginPath();
      for (let f = 0; f < 3; f++) {
        g.moveTo(hx - 0.008 + f * 0.007, hy2 + 0.002);
        g.lineTo(hx - 0.009 + f * 0.007, hy2 + 0.013);
      }
      g.stroke();
    }
  }
  // heads
  for (let i = 0; i < 9; i++) {
    const p = P[i],
      x = PX(i),
      hr = HR(p[3]),
      hy = p[0];
    g.fillStyle = "#b89a74";
    g.fillRect(x - 0.01, hy + hr[1] * 0.6, 0.02, SY(p) - 0.03 - hy - hr[1] * 0.6 + 0.006);
    const hg = g.createRadialGradient(x - 0.01, hy - 0.008, 0.002, x, hy, hr[1] * 1.1);
    hg.addColorStop(0, "#e2cca6");
    hg.addColorStop(1, "#8e7454");
    g.fillStyle = hg;
    g.beginPath();
    g.ellipse(x, hy, hr[0] * 0.9, hr[1], 0, 0, 7);
    g.fill();
    g.fillStyle = p[3] === "c" ? "#7a6248" : i % 3 === 0 ? "#8a8070" : "#3a2c20";
    g.beginPath();
    g.ellipse(x, hy - hr[1] * 0.25, hr[0] * 0.95, hr[1] * 0.8, 0, Math.PI * 1.05, Math.PI * 1.95);
    g.fill();
    if (p[3] === "w") {
      g.beginPath();
      g.arc(x - hr[0] * 0.85, hy - 0.004, 0.012, 0, 7);
      g.fill();
      g.beginPath();
      g.arc(x + hr[0] * 0.85, hy - 0.004, 0.012, 0, 7);
      g.fill();
    }
    if (p[3] === "s") {
      g.fillStyle = "#3a3628";
      g.fillRect(x - 0.033, hy - 0.056, 0.066, 0.028);
      g.beginPath();
      g.ellipse(x + 0.004, hy - 0.027, 0.032, 0.006, 0, 0, 7);
      g.fill();
      g.fillStyle = "#d8c8a4";
      g.beginPath();
      g.arc(x, hy - 0.04, 0.004, 0, 7);
      g.fill();
    }
    g.fillStyle = "rgba(70,48,30,0.3)";
    g.beginPath();
    g.ellipse(x - 0.009, hy - 0.002, 0.0045, 0.0028, 0, 0, 7);
    g.fill();
    g.beginPath();
    g.ellipse(x + 0.009, hy - 0.002, 0.0045, 0.0028, 0, 0, 7);
    g.fill();
    g.fillRect(x - 0.006, hy + 0.017, 0.012, 0.002);
  }
  // what the scissors left of him: a ragged rim of his dark
  {
    const hr = HR(CUT[3]);
    g.strokeStyle = CUT[1];
    g.lineWidth = 0.004;
    g.beginPath();
    bodyPath(X5, CUT, 0, 0);
    g.moveTo(X5 + hr[0] + 0.001, CUT[0]);
    g.ellipse(X5, CUT[0], hr[0] + 0.001, hr[1] + 0.002, 0, 0, 7);
    g.stroke();
  }
  // the print itself: soft fall-off, grain, silvering at the edges
  gr = g.createRadialGradient(0, 0, 0.2, 0, 0, 0.7);
  gr.addColorStop(0, "rgba(0,0,0,0)");
  gr.addColorStop(1, "rgba(50,30,15,0.45)");
  g.fillStyle = gr;
  g.fillRect(-IW / 2, -IH / 2, IW, IH);
  for (let i = 0; i < 500; i++) {
    g.fillStyle = hs(i * 3.1) < 0.5 ? "rgba(40,26,14,0.18)" : "rgba(250,235,205,0.14)";
    g.fillRect(-IW / 2 + hs(i * 7.7) * IW, -IH / 2 + hs(i * 5.3) * IH, 0.0018, 0.0018);
  }
  g.strokeStyle = "rgba(175,180,190,0.16)";
  g.lineWidth = 0.02;
  g.strokeRect(-IW / 2, -IH / 2, IW, IH);
  g.restore();
  // the ink of the back showing through, mirrored
  if (hint > 0) {
    g.save();
    g.globalCompositeOperation = "multiply";
    g.scale(-1, 1);
    ink(hint * 0.16);
    g.restore();
  }
  // a crease, cracked emulsion
  g.lineCap = "round";
  g.strokeStyle = "rgba(255,248,230,0.45)";
  g.lineWidth = 0.0025;
  g.beginPath();
  g.moveTo(-W / 2, 0.08);
  g.bezierCurveTo(-0.38, 0.12, -0.26, 0.24, -0.16, H / 2);
  g.stroke();
  g.strokeStyle = "rgba(60,40,20,0.25)";
  g.lineWidth = 0.002;
  g.beginPath();
  g.moveTo(-W / 2, 0.086);
  g.bezierCurveTo(-0.38, 0.126, -0.265, 0.246, -0.167, H / 2);
  g.stroke();
  g.fillStyle = "rgba(255,248,230,0.5)";
  for (let i = 0; i < 26; i++) {
    const u = hs(i + 300);
    g.fillRect(
      bz(u, -W / 2, -0.38, -0.26, -0.16) + (hs(i + 310) - 0.5) * 0.006,
      bz(u, 0.08, 0.12, 0.24, H / 2) + (hs(i + 320) - 0.5) * 0.006,
      0.0015 + hs(i + 330) * 0.002,
      0.0012,
    );
  }
  g.fillStyle = "rgba(255,246,225,0.3)";
  for (let i = 0; i < 70; i++)
    g.fillRect(-W / 2 + hs(i + 400) * W, -H / 2 + hs(i + 500) * H, 0.001 + hs(i + 600) * 0.003, 0.001);
  g.strokeStyle = "rgba(255,246,225,0.18)";
  g.lineWidth = 0.0012;
  for (let i = 0; i < 6; i++) {
    const x = -W / 2 + hs(i + 700) * W,
      y = -H / 2 + hs(i + 710) * H,
      a = hs(i + 720) * 3,
      l = 0.04 + hs(i + 730) * 0.12;
    g.beginPath();
    g.moveTo(x, y);
    g.quadraticCurveTo(
      x + Math.cos(a) * l * 0.5 + 0.01,
      y + Math.sin(a) * l * 0.5,
      x + Math.cos(a) * l,
      y + Math.sin(a) * l,
    );
    g.stroke();
  }
  for (let i = 0; i < 6; i++) {
    const x = -W / 2 + hs(i + 800) * W,
      y = -H / 2 + hs(i + 810) * H,
      r = 0.006 + hs(i + 820) * 0.014;
    const f = g.createRadialGradient(x, y, 0, x, y, r);
    f.addColorStop(0, "rgba(130,80,30,0.28)");
    f.addColorStop(1, "rgba(130,80,30,0)");
    g.fillStyle = f;
    g.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  gr = g.createRadialGradient(-W / 2, H / 2, 0, -W / 2, H / 2, 0.07);
  gr.addColorStop(0, "rgba(250,240,215,0.55)");
  gr.addColorStop(1, "rgba(250,240,215,0)");
  g.fillStyle = gr;
  g.fillRect(-W / 2, H / 2 - 0.07, 0.07, 0.07);
  lit();
  g.restore();
  cutEdge(1);
};
const backSide = () => {
  g.save();
  g.beginPath();
  outline();
  g.clip();
  g.beginPath();
  g.rect(-2, -2, 4, 4);
  hole(-1);
  g.clip("evenodd");
  const gr = g.createLinearGradient(-W / 2, -H / 2, W / 2, H / 2);
  gr.addColorStop(0, "#e8ddc4");
  gr.addColorStop(1, "#d4c4a2");
  g.fillStyle = gr;
  g.fillRect(-W, -H, 2 * W, 2 * H);
  g.fillStyle = "rgba(120,96,60,0.08)";
  for (let i = 0; i < 300; i++)
    g.fillRect(-W / 2 + hs(i + 900) * W, -H / 2 + hs(i + 1300) * H, 0.001 + 0.004 * hs(i + 1700), 0.001);
  for (const [x, y] of [
    [-0.42, -0.28],
    [0.42, -0.28],
    [-0.42, 0.28],
    [0.42, 0.28],
  ]) {
    g.fillStyle = "rgba(150,110,50,0.16)";
    g.fillRect(x - 0.04, y - 0.02, 0.08, 0.04);
  }
  ink(0.9);
  g.save();
  g.translate(0.3, 0.24);
  g.rotate(-0.12);
  g.strokeStyle = "rgba(110,70,120,0.28)";
  g.lineWidth = 0.003;
  g.beginPath();
  g.ellipse(0, 0, 0.09, 0.045, 0, 0, 7);
  g.stroke();
  g.beginPath();
  g.ellipse(0, 0, 0.078, 0.035, 0, 0, 7);
  g.stroke();
  g.fillStyle = "rgba(110,70,120,0.28)";
  g.scale(0.001, 0.001);
  g.font = "bold 22px Georgia, serif";
  g.textAlign = "center";
  g.fillText("ФОТО", 0, 8);
  g.restore();
  lit();
  g.restore();
  cutEdge(-1);
};
const flap = () => {
  if (c <= 0.001) return;
  const x0 = W / 2 - c,
    y0 = -H / 2;
  g.save();
  g.beginPath();
  outline();
  g.clip();
  const sg = g.createLinearGradient(x0 + c / 2, y0 + c / 2, x0 - 0.012, y0 + c + 0.016);
  sg.addColorStop(0, "rgba(20,10,4,0.45)");
  sg.addColorStop(1, "rgba(20,10,4,0)");
  g.fillStyle = sg;
  g.beginPath();
  g.moveTo(x0, y0);
  g.lineTo(W / 2, y0 + c);
  g.lineTo(x0 - 0.014, y0 + c + 0.018);
  g.closePath();
  g.fill();
  g.restore();
  g.save();
  g.beginPath();
  g.moveTo(x0, y0);
  g.lineTo(W / 2, y0 + c);
  g.lineTo(x0, y0 + c);
  g.closePath();
  g.clip();
  const gr = g.createLinearGradient(x0 + c / 2, y0 + c / 2, x0, y0 + c);
  gr.addColorStop(0, "#d2c3a0");
  gr.addColorStop(1, "#efe5cf");
  g.fillStyle = gr;
  g.fillRect(x0 - 0.01, y0 - 0.01, c + 0.02, c + 0.02);
  g.fillStyle = `rgba(12,8,10,${(1 - glow) * 0.65})`;
  g.fillRect(x0 - 0.01, y0 - 0.01, c + 0.02, c + 0.02);
  g.transform(0, 1, 1, 0, K, -K);
  g.scale(-1, 1);
  ink((0.15 + hint * 0.8) * lf);
  g.restore();
  g.strokeStyle = `rgba(255,245,225,${0.3 + 0.4 * glow})`;
  g.lineWidth = 0.0018;
  g.beginPath();
  g.moveTo(x0, y0);
  g.lineTo(W / 2, y0 + c);
  g.stroke();
};
const shadowPh = () => {
  g.save();
  half();
  g.shadowColor = `rgba(8,4,2,${0.45 + glow * 0.25})`;
  g.shadowBlur = ((free ? 0.012 : 0.05) / px) * Z;
  g.shadowOffsetX = ((free ? -0.006 : -0.03) / px) * Z;
  g.shadowOffsetY = ((free ? 0.008 : 0.045) / px) * Z;
  g.fillStyle = "#20140c";
  g.beginPath();
  outline();
  hole(back ? -1 : 1);
  g.fill("evenodd");
  g.restore();
};
// her hands: fingers behind the paper, thumbs on the front
const skin = (x0, y0, x1, y1) => {
  const s = g.createLinearGradient(x0, y0, x1, y1);
  s.addColorStop(0, dk("#e6bf9c", lf));
  s.addColorStop(1, dk("#8a5a40", lf));
  return s;
};
const handBack = (m, y0) => {
  g.save();
  g.scale(m, 1);
  const E = -W / 2;
  g.fillStyle = skin(E + 0.02, y0 - 0.08, E - 0.14, y0 + 0.25);
  g.beginPath();
  g.moveTo(E + 0.03, y0 - 0.055);
  g.bezierCurveTo(E - 0.02, y0 - 0.09, E - 0.075, y0 - 0.07, E - 0.1, y0);
  g.bezierCurveTo(E - 0.125, y0 + 0.07, E - 0.135, y0 + 0.17, E - 0.15, y0 + 0.3);
  g.lineTo(E - 0.02, y0 + 0.34);
  g.bezierCurveTo(E - 0.01, y0 + 0.2, E, y0 + 0.1, E + 0.03, y0 + 0.05);
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(90,50,32,0.45)";
  g.lineWidth = 0.003;
  for (let k = 0; k < 3; k++) {
    g.beginPath();
    g.moveTo(E - 0.07 + k * 0.006, y0 + k * 0.045);
    g.quadraticCurveTo(E - 0.04, y0 + 0.012 + k * 0.045, E - 0.01, y0 + 0.004 + k * 0.045);
    g.stroke();
  }
  g.strokeStyle = `rgba(255,225,190,${0.12 + 0.25 * glow})`;
  g.lineWidth = 0.004;
  g.beginPath();
  g.moveTo(E + 0.02, y0 - 0.06);
  g.bezierCurveTo(E - 0.02, y0 - 0.085, E - 0.07, y0 - 0.068, E - 0.095, y0 - 0.01);
  g.stroke();
  const sv = g.createLinearGradient(E - 0.25, 0, E + 0.05, 0);
  sv.addColorStop(0, dk("#221a20", lf));
  sv.addColorStop(1, dk("#4a3a42", lf));
  g.fillStyle = sv;
  g.beginPath();
  g.moveTo(E - 0.19, y0 + 0.24);
  g.quadraticCurveTo(E - 0.08, y0 + 0.2, E + 0.01, y0 + 0.27);
  g.lineTo(E + 0.07, 1.3);
  g.lineTo(E - 0.4, 1.3);
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(0,0,0,0.28)";
  g.lineWidth = 0.004;
  for (let k = 0; k <= 10; k++) {
    const u = k / 10,
      x = (1 - u) * (1 - u) * (E - 0.19) + 2 * u * (1 - u) * (E - 0.08) + u * u * (E + 0.01),
      y = y0 + (1 - u) * (1 - u) * 0.24 + 2 * u * (1 - u) * 0.2 + u * u * 0.27;
    g.beginPath();
    g.moveTo(x, y + 0.006);
    g.lineTo(x + 0.004, y + 0.06);
    g.stroke();
  }
  g.strokeStyle = `rgba(255,200,150,${0.15 * glow})`;
  g.lineWidth = 0.003;
  g.beginPath();
  g.moveTo(E - 0.19, y0 + 0.24);
  g.quadraticCurveTo(E - 0.08, y0 + 0.2, E + 0.01, y0 + 0.27);
  g.stroke();
  g.restore();
};
const thumb = (m, y0, ph) => {
  g.save();
  g.scale(m, 1);
  const E = -W / 2,
    sl = Math.sin(t * 0.4 + ph) * 0.002 * tr;
  const bx = E - 0.035,
    by = y0 + 0.035,
    tx = E + 0.068 + sl,
    ty = y0 - 0.012;
  const sg = g.createRadialGradient(tx - 0.03, ty + 0.03, 0, tx - 0.03, ty + 0.03, 0.06);
  sg.addColorStop(0, "rgba(30,14,6,0.35)");
  sg.addColorStop(1, "rgba(30,14,6,0)");
  g.fillStyle = sg;
  g.fillRect(tx - 0.1, ty - 0.04, 0.14, 0.14);
  g.lineCap = "round";
  g.strokeStyle = dk("#7a4c36", lf);
  g.lineWidth = 0.038;
  g.beginPath();
  g.moveTo(bx, by + 0.004);
  g.quadraticCurveTo((bx + tx) / 2, by - 0.002, tx, ty + 0.004);
  g.stroke();
  g.strokeStyle = skin(tx, ty - 0.02, bx, by + 0.03);
  g.lineWidth = 0.032;
  g.beginPath();
  g.moveTo(bx, by - 0.002);
  g.quadraticCurveTo((bx + tx) / 2, by - 0.008, tx, ty - 0.001);
  g.stroke();
  const an = Math.atan2(ty - by, tx - bx);
  g.save();
  g.translate(tx - Math.cos(an) * 0.006, ty - 0.003 - Math.sin(an) * 0.006);
  g.rotate(an);
  g.fillStyle = `rgba(236,206,186,${0.5 + 0.35 * glow})`;
  g.beginPath();
  g.ellipse(0, 0, 0.013, 0.0085, 0, 0, 7);
  g.fill();
  g.fillStyle = `rgba(255,245,235,${0.5 * glow})`;
  g.beginPath();
  g.ellipse(0.003, -0.003, 0.006, 0.002, 0, 0, 7);
  g.fill();
  g.restore();
  const kx = (bx + tx) / 2,
    ky = (by + ty) / 2 - 0.004;
  g.strokeStyle = "rgba(110,64,42,0.4)";
  g.lineWidth = 0.0025;
  g.beginPath();
  g.moveTo(kx - 0.004, ky - 0.012);
  g.quadraticCurveTo(kx + 0.003, ky, kx - 0.002, ky + 0.012);
  g.stroke();
  g.restore();
};
g.save();
g.translate(A * 0.5 + ox, 0.565 + oy);
g.scale(Z, Z);
g.rotate(rot);
if (L) handBack(1, 0.1);
if (R) handBack(-1, 0.2);
if (fx > 0.004) {
  g.save();
  g.scale(fx, 1);
  shadowPh();
  g.save();
  half();
  if (back) backSide();
  else frontSide();
  g.restore();
  if (!back) flap();
  g.restore();
} else {
  g.fillStyle = "#d8caa8";
  g.fillRect(-0.002, -H / 2, 0.004, H);
}
if (L) thumb(1, 0.1, 0);
if (R) thumb(-1, 0.2, 2);
g.restore();
