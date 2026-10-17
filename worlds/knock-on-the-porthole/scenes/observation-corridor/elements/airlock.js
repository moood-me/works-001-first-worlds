const s = e.state,
  t = e.t,
  L = s.corridor_light || "emergency",
  st = s.airlock_door || "jammed";
const W =
  L === "on"
    ? 1
    : L === "flicker"
      ? Math.sin(t * 31) * Math.sin(t * 4.7) + 0.6 * Math.sin(t * 0.9) > 0.3
        ? 0.85
        : 0.06
      : 0;
const d = Math.max(0, Math.min(1, s.door_open ?? 0.03));
const T = { locked: 0, jammed: 0.03, ajar: 0.3, open: 1 }[st] ?? 0.03,
  mov = Math.abs(d - T) > 0.004;
const txt = (s0, x, y, sz, a, c) => {
  g.save();
  g.translate(x, y);
  g.scale(0.01, 0.01);
  g.font = "bold " + sz + "px monospace";
  g.textAlign = "center";
  g.fillStyle = "rgba(" + (c || "190,170,120") + "," + a + ")";
  g.fillText(s0, 0, 0);
  g.restore();
};
const ox = -0.45,
  ow = 0.9,
  oy = -2.0,
  sh = d * 0.45;
let gr = g.createLinearGradient(0, -2.55, 0, 0);
gr.addColorStop(0, "#0a0c10");
gr.addColorStop(0.6, "#141920");
gr.addColorStop(1, "#0b0d11");
g.fillStyle = gr;
g.fillRect(-1.05, -2.55, 2.1, 2.6);
if (W > 0) {
  const w = g.createLinearGradient(0, -2.55, 0, -0.6);
  w.addColorStop(0, "rgba(205,222,255," + 0.2 * W + ")");
  w.addColorStop(1, "rgba(205,222,255,0)");
  g.fillStyle = w;
  g.fillRect(-1.05, -2.55, 2.1, 2);
}
const on = L !== "off" && !(st === "open" && L === "on"),
  rot = (t * 1.4) % 6.2832,
  Rb = on ? Math.pow(Math.max(0, Math.cos(rot)), 3) : 0;
if (on) {
  const rg = g.createRadialGradient(0, -2.4, 0, 0, -2.4, 1.7);
  rg.addColorStop(0, "rgba(255,50,35," + (0.08 + 0.22 * Rb) + ")");
  rg.addColorStop(1, "rgba(255,50,35,0)");
  g.fillStyle = rg;
  g.fillRect(-1.05, -2.55, 2.1, 2.6);
}
g.fillStyle = "#05070a";
for (const x of [-0.99, 0.99]) g.fillRect(x - 0.05, -2.55, 0.1, 2.6);
g.save();
g.beginPath();
g.rect(ox, oy, ow, 2);
g.clip();
g.fillStyle = "#05070a";
g.fillRect(ox, oy, ow, 2);
let ch = g.createLinearGradient(0, oy, 0, 0);
ch.addColorStop(0, "rgba(40,20,26,0.5)");
ch.addColorStop(1, "rgba(170,195,220,0.2)");
g.fillStyle = ch;
g.fillRect(ox, oy, ow, 2);
g.fillStyle = "#0b0e13";
g.fillRect(-0.28, -1.78, 0.56, 1.75);
const pr = g.createRadialGradient(0, -1.3, 0, 0, -1.3, 0.09);
pr.addColorStop(0, "#b2412f");
pr.addColorStop(1, "#3a0e12");
g.fillStyle = pr;
g.beginPath();
g.arc(0, -1.3, 0.075, 0, 6.2832);
g.fill();
for (let i = 0; i < 260; i++) {
  const x = ox + e.rnd() * ow,
    y = -e.rnd() * 2,
    a = e.rnd();
  g.fillStyle = "rgba(220,236,250," + (0.04 + 0.16 * a) + ")";
  g.fillRect(x, y, 0.01, 0.01);
}
const leaf = (x0, x1, dk) => {
  let lg = g.createLinearGradient(x0, 0, x1, 0);
  lg.addColorStop(0, dk ? "#151a21" : "#1d232c");
  lg.addColorStop(1, dk ? "#1b2129" : "#12161c");
  g.fillStyle = lg;
  g.fillRect(x0, oy, x1 - x0, 2);
  g.save();
  g.beginPath();
  g.rect(x0, -1.05, x1 - x0, 0.14);
  g.clip();
  g.fillStyle = "rgba(150,120,40,0.32)";
  g.fillRect(x0, -1.05, x1 - x0, 0.14);
  g.fillStyle = "rgba(10,10,12,0.7)";
  for (let k = -2; k < 6; k++) {
    const bx = x0 + k * 0.12;
    g.beginPath();
    g.moveTo(bx, -1.05);
    g.lineTo(bx + 0.06, -1.05);
    g.lineTo(bx + 0.2, -0.91);
    g.lineTo(bx + 0.14, -0.91);
    g.fill();
  }
  g.restore();
  g.strokeStyle = "rgba(0,0,0,0.6)";
  g.lineWidth = 0.02;
  g.strokeRect(x0 + 0.05, oy + 0.08, x1 - x0 - 0.1, 1.84);
};
leaf(ox - sh, -sh, false);
leaf(sh, ox + ow + sh, true);
if (st === "jammed") {
  g.strokeStyle = "rgba(0,0,0,0.75)";
  g.lineWidth = 0.014;
  g.beginPath();
  g.moveTo(-sh - 0.02, -1.75);
  g.quadraticCurveTo(-sh - 0.09, -1.5, -sh - 0.03, -1.25);
  g.moveTo(sh + 0.02, -1.7);
  g.lineTo(sh + 0.07, -1.45);
  g.stroke();
}
for (let i = 0; i < 400; i++) {
  const sd = e.rnd() < 0.5 ? -1 : 1,
    dx = Math.pow(e.rnd(), 2) * 0.3,
    y = oy + e.rnd() * 2,
    a = e.rnd();
  g.fillStyle = "rgba(220,236,250," + (0.05 + 0.2 * a) * (1.3 + y * 0.4) + ")";
  g.fillRect(sd * (sh + dx) - (sd < 0 ? 0.012 : 0), y, 0.012, 0.012);
}
g.restore();
if (d > 0.005) {
  if (d < 0.1) {
    g.fillStyle = "rgba(190,215,245,0.32)";
    g.fillRect(-sh, oy, Math.max(2 * sh, 0.006), 2);
  }
  e.light(0, -1.0, 0.5 + d * 1.6, "#bcd8ff", 0.12 + 0.3 * Math.min(1, d * 3));
}
if (d > 0.005 || st === "jammed") {
  const q = Math.min(1, 0.35 + d * 2);
  for (let i = 0; i < 9; i++) {
    const ph = (t * 0.05 + i / 9) % 1,
      y0 = -0.2 - ((i * 0.37) % 1) * 1.6,
      y = y0 + ph * 0.35,
      x = (i % 2 ? 1 : -1) * (sh + ph * 0.45) + Math.sin(t * 0.3 + i) * 0.05,
      r = 0.08 + ph * 0.35;
    const c = g.createRadialGradient(x, y, 0, x, y, r);
    c.addColorStop(0, "rgba(200,220,240," + 0.1 * (1 - ph) * q + ")");
    c.addColorStop(1, "rgba(200,220,240,0)");
    g.fillStyle = c;
    g.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
}
const mi = 0.05 + 0.18 * d + (st === "jammed" ? 0.04 : 0);
const mg = g.createLinearGradient(0, -0.35, 0, 0.05);
mg.addColorStop(0, "rgba(200,220,240,0)");
mg.addColorStop(1, "rgba(200,220,240," + mi + ")");
g.fillStyle = mg;
g.fillRect(-1.05, -0.35, 2.1, 0.4);
g.strokeStyle = "#05070a";
g.lineWidth = 0.12;
g.strokeRect(ox - 0.06, oy - 0.06, ow + 0.12, 2.06);
g.strokeStyle = "rgba(150,120,40,0.28)";
g.lineWidth = 0.05;
g.setLineDash([0.08, 0.08]);
g.beginPath();
g.moveTo(ox - 0.15, 0);
g.lineTo(ox - 0.15, oy - 0.15);
g.lineTo(ox + ow + 0.15, oy - 0.15);
g.lineTo(ox + ow + 0.15, 0);
g.stroke();
g.setLineDash([]);
txt(tr('AIRLOCK 2'), 0, -2.24, 16, 0.3);
g.fillStyle = "#16181d";
g.fillRect(-0.09, -2.54, 0.18, 0.12);
const lg2 = g.createRadialGradient(0, -2.47, 0, 0, -2.47, 0.08);
lg2.addColorStop(0, "rgba(255,110,90," + (on ? 0.35 + 0.65 * Rb : 0.08) + ")");
lg2.addColorStop(1, "rgba(120,20,20," + (on ? 0.4 + 0.4 * Rb : 0.05) + ")");
g.fillStyle = lg2;
g.beginPath();
g.ellipse(0, -2.47, 0.07, 0.045, 0, 0, 6.2832);
g.fill();
if (on) e.light(0, -2.47, 2.2, "#ff3a30", 0.15 + 0.6 * Rb);
const S = {
  locked: [tr('LOCKED'), "255,70,50", "#ff4632", 1],
  jammed: [tr('STUCK'), "255,70,50", "#ff4632", Math.sin(t * 4) > 0 ? 1 : 0.25],
  ajar: [tr('PARTLY OPEN'), "255,170,70", "#ffaa46", 1],
  open: [tr('OPEN'), "150,230,170", "#96e6aa", 1],
}[st] || ["—", "120,120,120", "#888888", 0.5];
g.fillStyle = "#050607";
g.fillRect(-0.97, -1.7, 0.44, 0.15);
txt(S[0], -0.75, -1.6, 5, 0.9 * S[3], S[1]);
e.light(-0.75, -1.62, 0.35, S[2], 0.25 * S[3]);
const cx = -0.75,
  cy = -1.04,
  ang = d * 30 + (mov ? t * 2.2 : 0);
g.fillStyle = "#0d1014";
g.fillRect(-0.94, -1.3, 0.38, 0.52);
g.strokeStyle = "#08090c";
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-0.56, -1.04);
g.lineTo(ox - 0.06, -1.04);
g.stroke();
g.strokeStyle = "#2c323a";
g.lineWidth = 0.028;
g.beginPath();
g.arc(cx, cy, 0.15, 0, 6.2832);
g.stroke();
g.lineWidth = 0.018;
for (let k = 0; k < 5; k++) {
  const a = ang + k * 1.2566;
  g.beginPath();
  g.moveTo(cx, cy);
  g.lineTo(cx + Math.cos(a) * 0.15, cy + Math.sin(a) * 0.15);
  g.stroke();
}
g.fillStyle = "#1c2026";
g.beginPath();
g.arc(cx, cy, 0.035, 0, 6.2832);
g.fill();
g.fillStyle = "#6a2420";
g.beginPath();
g.arc(cx + Math.cos(ang) * 0.15, cy + Math.sin(ang) * 0.15, 0.026, 0, 6.2832);
g.fill();
g.strokeStyle = "rgba(190,170,120,0.18)";
g.lineWidth = 0.008;
g.beginPath();
g.arc(cx, cy, 0.2, -2.4, -0.6);
g.stroke();
txt(tr('MANUAL DRIVE'), cx, -0.7, 5, 0.24);
for (let i = 0; i < 300; i++) {
  const x = -1.05 + e.rnd() * 2.1,
    y = -Math.pow(e.rnd(), 2) * 0.6,
    a = e.rnd();
  g.fillStyle = "rgba(215,232,248," + (0.06 + 0.2 * a) + ")";
  g.fillRect(x, y - 0.01, 0.012, 0.012);
}
