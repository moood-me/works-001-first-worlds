const st = e.state,
  t = e.t;
const fl = (() => {
  const L = st.lamp;
  if (L === "off") return 0;
  if (L !== "flicker") return 1;
  const f = Math.sin(t * 1.7) + Math.sin(t * 2.9 + 1) + Math.sin(t * 0.63);
  return f > 1.4 ? 0.1 : 0.82 + 0.18 * Math.sin(t * 41);
})();
if (st.she === "gone") {
  g.fillStyle = "#3a3530";
  g.fillRect(-0.05, -0.012, 0.07, 0.012);
  e.light(0.02, -0.006, 0.06, "#ff7a3a", 0.25 + 0.15 * Math.sin(t * 0.9));
  return;
}
const turned = st.she === "turned";
const dir = turned ? -1 : 1;
const br = Math.sin(t * 1.3) * 0.6 + Math.sin(t * 0.77) * 0.4;
const drag = turned ? 0 : Math.max(0, Math.min(1, (Math.sin(t * 0.55) + Math.sin(t * 0.23) * 0.5 - 0.7) * 3));
const hx = turned ? 0.13 : 0.17 - 0.05 * drag,
  hy = turned ? -0.95 : -1.3 - 0.2 * drag;
const nod = turned ? 0 : 0.015 + Math.sin(t * 0.4) * 0.008;
const sil = () => {
  g.beginPath();
  g.moveTo(-0.075, -0.62);
  g.lineTo(-0.07, -0.05);
  g.lineTo(-0.02, 0);
  g.lineTo(-0.035, -0.06);
  g.lineTo(-0.03, -0.62);
  g.closePath();
  g.moveTo(0.02, -0.62);
  g.lineTo(0.035, -0.06);
  g.lineTo(0.085, 0);
  g.lineTo(0.065, -0.05);
  g.lineTo(0.07, -0.62);
  g.closePath();
  g.moveTo(-0.15, -1.4);
  g.quadraticCurveTo(-0.13, -1.22, -0.11, -1.06);
  g.quadraticCurveTo(-0.17, -0.8, -0.2, -0.58);
  g.quadraticCurveTo(0, -0.54, 0.17, -0.6);
  g.quadraticCurveTo(0.14, -0.82, 0.1, -1.06);
  g.quadraticCurveTo(0.13, -1.25, 0.12, -1.4);
  g.quadraticCurveTo(0, -1.47, -0.15, -1.4);
  g.closePath();
  g.moveTo(0.035, -1.44);
  g.lineTo(0.035, -1.5);
  g.lineTo(-0.02, -1.5);
  g.lineTo(-0.03, -1.44);
  g.closePath();
  g.moveTo(0.11, -1.57 + nod);
  g.arc(0.02, -1.57 + nod, 0.09, 0, 7);
  g.moveTo(-0.0, -1.52 + nod);
  g.arc(-0.05, -1.52 + nod, 0.07, 0, 7);
  g.moveTo(0.21, -1.64 + nod);
  g.ellipse(0.02, -1.645 + nod, 0.2, 0.032, -0.12 + nod, 0, 7);
  g.moveTo(0.1, -1.66 + nod);
  g.ellipse(0.0, -1.68 + nod, 0.1, 0.055, 0, 0, 7);
};
g.save();
g.scale(dir, 1 + 0.004 * br);
g.fillStyle = "#0d1216";
sil();
g.fill();
g.strokeStyle = "#0d1216";
g.lineCap = "round";
g.lineJoin = "round";
g.lineWidth = 0.06;
g.beginPath();
g.moveTo(0.05, -1.38);
g.lineTo(turned ? 0.08 : 0.1, turned ? -1.1 : -1.12);
g.lineTo(hx, hy);
g.stroke();
g.beginPath();
if (turned) {
  g.moveTo(-0.07, -1.38);
  g.lineTo(-0.09, -1.06);
  g.lineTo(-0.06, -0.84);
} else {
  g.moveTo(-0.08, -1.36);
  g.lineTo(0.0, -1.12);
  g.lineTo(0.12, -1.13);
}
g.stroke();
g.fillStyle = "#5e262b";
g.beginPath();
g.moveTo(-0.05, -1.44);
g.quadraticCurveTo(0.03, -1.4, 0.07, -1.45);
g.lineTo(0.06, -1.39);
g.quadraticCurveTo(0.0, -1.36, -0.06, -1.4);
g.fill();
if (st.envelope === "in_hand") {
  g.fillStyle = "#b8b09c";
  g.save();
  if (turned) {
    g.translate(-0.06, -0.84);
    g.rotate(0.2);
    g.fillRect(-0.02, -0.02, 0.17, 0.11);
  } else {
    g.translate(-0.02, -1.2);
    g.rotate(-0.4);
    g.fillRect(-0.08, -0.06, 0.17, 0.11);
  }
  g.restore();
}
if (fl > 0) {
  g.save();
  sil();
  g.clip();
  const lx = -1.15 * dir;
  const rg = g.createRadialGradient(lx, -4.4, 0, lx, -4.4, 4.4);
  rg.addColorStop(0, "rgba(240,180,110," + 0.42 * fl + ")");
  rg.addColorStop(0.75, "rgba(240,180,110," + 0.08 * fl + ")");
  rg.addColorStop(1, "rgba(240,180,110,0)");
  g.fillStyle = rg;
  g.fillRect(-0.3, -1.9, 0.6, 1.95);
  g.restore();
}
g.restore();
const ex = dir * (hx + 0.04),
  ey = hy - 0.02;
g.fillStyle = "#d8d2c4";
g.fillRect(Math.min(ex, dir * hx), ey - 0.004, 0.04, 0.008);
e.light(ex, ey, 0.12 + 0.08 * drag, "#ff8a40", 0.45 + 0.45 * drag + 0.05 * Math.sin(t * 9));
for (let i = 0; i < 7; i++) {
  const age = (t * 0.12 + i / 7) % 1;
  const sx = ex + Math.sin(age * 5 + t * 0.4 + i) * 0.07 * age + age * 0.12;
  const sy = ey - age * 0.9;
  const r = 0.03 + age * 0.16;
  const sg = g.createRadialGradient(sx, sy, 0, sx, sy, r);
  sg.addColorStop(0, "rgba(160,168,172," + 0.2 * (1 - age) + ")");
  sg.addColorStop(1, "rgba(160,168,172,0)");
  g.fillStyle = sg;
  g.beginPath();
  g.arc(sx, sy, r, 0, 7);
  g.fill();
}
e.at(0.02 * dir, -1.75);
