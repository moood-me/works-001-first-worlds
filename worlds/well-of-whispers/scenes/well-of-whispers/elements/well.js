const s = e.state,
  gl = s.glow,
  op = s.lid_open,
  t = e.t,
  R = 0.9,
  H = 0.85,
  ry = 0.2;
g.fillStyle = "#17140f";
const post = (x, l) => {
  g.beginPath();
  g.moveTo(x - 0.08, 0);
  g.lineTo(x - 0.06 + l, -2.35);
  g.lineTo(x + 0.06 + l, -2.35);
  g.lineTo(x + 0.08, 0);
  g.closePath();
  g.fill();
};
post(-1.0, 0.04);
post(1.0, -0.03);
g.save();
g.translate(0, -2.3);
g.rotate(-0.03);
g.fillRect(-1.25, -0.07, 2.5, 0.12);
g.restore();
const sw = 0.035 * Math.sin(t * 0.7) + 0.015 * Math.sin(t * 1.31 + 1);
const by = op ? -0.95 : -1.35;
g.strokeStyle = "#2c261d";
g.lineWidth = 0.022;
g.beginPath();
g.moveTo(0.15, -2.27);
g.quadraticCurveTo(0.15 + sw * 0.5, -1.8, 0.15 + sw, by);
g.stroke();
if (!op) {
  g.save();
  g.translate(0.15 + sw, by);
  g.rotate(sw * 0.6);
  g.fillStyle = "#1f1a13";
  g.beginPath();
  g.moveTo(-0.12, 0);
  g.lineTo(0.12, 0);
  g.lineTo(0.1, 0.22);
  g.lineTo(-0.1, 0.22);
  g.closePath();
  g.fill();
  g.strokeStyle = "#2c261d";
  g.beginPath();
  g.arc(0, 0, 0.12, Math.PI, 0);
  g.stroke();
  g.restore();
}
if (op) {
  g.fillStyle = "#04070c";
  g.beginPath();
  g.ellipse(0, -H, R * 0.86, ry * 0.8, 0, 0, Math.PI * 2);
  g.fill();
  let c = g.createRadialGradient(0, -H, 0, 0, -H, R);
  c.addColorStop(0, "rgba(170,225,255," + 0.9 * gl + ")");
  c.addColorStop(1, "rgba(90,160,240,0)");
  g.fillStyle = c;
  g.beginPath();
  g.ellipse(0, -H, R * 0.86, ry * 0.8, 0, 0, Math.PI * 2);
  g.fill();
  g.save();
  g.globalCompositeOperation = "lighter";
  let col = g.createLinearGradient(0, -H, 0, -H - 3.2);
  col.addColorStop(0, "rgba(120,195,255," + 0.35 * gl + ")");
  col.addColorStop(1, "rgba(120,195,255,0)");
  g.fillStyle = col;
  g.beginPath();
  const wv = 0.06 * Math.sin(t * 0.5);
  g.moveTo(-R * 0.8, -H);
  g.bezierCurveTo(-R * 0.9 + wv, -H - 1.2, -R * 1.1 - wv, -H - 2.2, -R * 1.3, -H - 3.2);
  g.lineTo(R * 1.3, -H - 3.2);
  g.bezierCurveTo(R * 1.1 + wv, -H - 2.2, R * 0.9 - wv, -H - 1.2, R * 0.8, -H);
  g.closePath();
  g.fill();
  for (let i = 0; i < 46; i++) {
    const sp = 0.06 + e.rnd() * 0.08,
      u = (t * sp + e.rnd()) % 1,
      x0 = (e.rnd() - 0.5) * R * 1.4;
    const x = x0 + 0.15 * Math.sin(t * 0.7 + i) + x0 * u * 0.6,
      y = -H - u * 3.4;
    g.globalAlpha = gl * (1 - u) * (0.5 + 0.5 * Math.sin(t * 2 + i));
    g.fillStyle = "#bfe6ff";
    g.fillRect(x - 0.012, y - 0.012, 0.024, 0.024);
  }
  g.globalAlpha = 1;
  g.restore();
  e.light(0, -H - 0.15, 2 + 5 * gl, "#7cc8ff", 0.95 * gl);
} else {
  g.save();
  g.beginPath();
  g.ellipse(0, -H, R * 0.95, ry * 0.95, 0, 0, Math.PI * 2);
  g.clip();
  g.fillStyle = "#2a2219";
  g.fillRect(-R, -H - ry, 2 * R, 2 * ry);
  g.strokeStyle = "#120f0b";
  g.lineWidth = 0.02;
  for (let i = -3; i <= 3; i++) {
    g.beginPath();
    g.moveTo(i * 0.26, -H - ry);
    g.lineTo(i * 0.26 + 0.03, -H + ry);
    g.stroke();
  }
  g.globalCompositeOperation = "lighter";
  for (let i = -3; i <= 3; i++) {
    const a = gl * (0.55 + 0.45 * Math.sin(t * 1.3 + i * 2.1));
    g.strokeStyle = "rgba(130,205,255," + a + ")";
    g.lineWidth = 0.012;
    g.beginPath();
    g.moveTo(i * 0.26 + 0.005, -H - ry);
    g.lineTo(i * 0.26 + 0.035, -H + ry);
    g.stroke();
  }
  g.restore();
  g.strokeStyle = "#3b3226";
  g.lineWidth = 0.025;
  g.beginPath();
  g.moveTo(-R * 0.9, -H + 0.02);
  g.quadraticCurveTo(0, -H + 0.16, R * 0.9, -H + 0.02);
  g.stroke();
  for (let i = 0; i < 14; i++) {
    const u = i / 13,
      x = -R * 0.9 + u * R * 1.8,
      y = -H + 0.02 + 0.28 * u * (1 - u) * 0.5 * 2 * 0.5;
    g.strokeStyle = "#4a4033";
    g.lineWidth = 0.012;
    g.beginPath();
    g.ellipse(x, y + 0.07 * Math.sin(u * Math.PI), 0.035, 0.022, 0, 0, Math.PI * 2);
    g.stroke();
  }
  let c2 = g.createLinearGradient(0, -H, 0, -H - 1.2);
  c2.addColorStop(0, "rgba(120,195,255," + 0.18 * gl + ")");
  c2.addColorStop(1, "rgba(120,195,255,0)");
  g.save();
  g.globalCompositeOperation = "lighter";
  g.fillStyle = c2;
  g.fillRect(-R, -H - 1.2, 2 * R, 1.2);
  g.restore();
  e.light(0, -H, 1 + 2 * gl, "#7cc8ff", 0.5 * gl);
}
const wall = () => {
  g.beginPath();
  g.moveTo(-R, -H);
  g.lineTo(-R, 0);
  g.ellipse(0, 0, R, ry, 0, Math.PI, 0, true);
  g.lineTo(R, -H);
  g.ellipse(0, -H, R, ry, 0, 0, Math.PI, false);
  g.closePath();
};
wall();
let st = g.createLinearGradient(-R, 0, R, 0);
st.addColorStop(0, "#2a323b");
st.addColorStop(0.35, "#262d35");
st.addColorStop(1, "#14181d");
g.fillStyle = st;
g.fill();
g.save();
wall();
g.clip();
let tg = g.createLinearGradient(0, -H, 0, -H + 0.5);
tg.addColorStop(0, "rgba(110,190,255," + 0.3 * gl + ")");
tg.addColorStop(1, "rgba(110,190,255,0)");
g.fillStyle = tg;
g.fillRect(-R, -H - ry, 2 * R, 0.8);
g.strokeStyle = "rgba(8,10,14,0.85)";
g.lineWidth = 0.018;
for (let j = 1; j < 4; j++) {
  const yb = -H + (j * H) / 4;
  g.beginPath();
  for (let k = 0; k <= 24; k++) {
    const x = -R + (2 * R * k) / 24,
      y = yb + ry * Math.sqrt(Math.max(0, 1 - (x / R) * (x / R)));
    k ? g.lineTo(x, y) : g.moveTo(x, y);
  }
  g.stroke();
}
for (let j = 0; j < 4; j++) {
  let x = -R + e.rnd() * 0.3;
  while (x < R) {
    const y0 = -H + (j * H) / 4,
      y1 = y0 + H / 4,
      cu = ry * Math.sqrt(Math.max(0, 1 - (x / R) * (x / R)));
    g.beginPath();
    g.moveTo(x, y0 + cu);
    g.lineTo(x, y1 + cu);
    g.stroke();
    x += 0.28 + e.rnd() * 0.22;
  }
}
g.fillStyle = "rgba(30,48,34,0.55)";
for (let i = 0; i < 18; i++) {
  const x = -R + e.rnd() * 2 * R,
    cu = ry * Math.sqrt(Math.max(0, 1 - (x / R) * (x / R)));
  g.beginPath();
  g.ellipse(x, -0.05 + cu - e.rnd() * 0.12, 0.08 + e.rnd() * 0.12, 0.05, 0, 0, Math.PI * 2);
  g.fill();
}
g.globalCompositeOperation = "lighter";
g.lineCap = "round";
const rs = s.runes;
for (let i = 0; i < 7; i++) {
  const x = -0.66 + i * 0.22,
    yb = -H * 0.55 + ry * Math.sqrt(Math.max(0, 1 - (x / R) * (x / R)));
  const a = rs * (0.55 + 0.3 * Math.sin(t * 0.9 + i * 1.3) + 0.15 * Math.sin(t * 2.3 + i));
  if (a < 0.02) continue;
  g.strokeStyle = "rgba(140,215,255," + Math.min(1, a) + ")";
  g.lineWidth = 0.016;
  g.shadowColor = "#7cc8ff";
  g.shadowBlur = 10 * rs;
  const sh = Math.max(0.3, 1 - Math.abs(x) / R);
  g.beginPath();
  g.moveTo(x, yb - 0.07);
  g.lineTo(x, yb + 0.07);
  const m = Math.floor(e.rnd() * 4);
  if (m === 0) {
    g.moveTo(x, yb - 0.07);
    g.lineTo(x + 0.05 * sh, yb - 0.02);
  } else if (m === 1) {
    g.moveTo(x - 0.04 * sh, yb);
    g.lineTo(x + 0.04 * sh, yb - 0.04);
  } else if (m === 2) {
    g.moveTo(x, yb);
    g.lineTo(x + 0.05 * sh, yb + 0.05);
    g.moveTo(x, yb);
    g.lineTo(x - 0.05 * sh, yb + 0.05);
  } else {
    g.moveTo(x - 0.04 * sh, yb - 0.05);
    g.lineTo(x + 0.04 * sh, yb + 0.05);
  }
  g.stroke();
}
g.shadowBlur = 0;
g.restore();
g.lineWidth = 0.07;
g.strokeStyle = "#323a43";
g.beginPath();
g.ellipse(0, -H, R, ry, 0, 0, Math.PI * 2);
g.stroke();
g.strokeStyle = "rgba(160,180,210,0.18)";
g.lineWidth = 0.03;
g.beginPath();
g.ellipse(0, -H, R, ry, 0, Math.PI * 0.75, Math.PI * 1.4);
g.stroke();
