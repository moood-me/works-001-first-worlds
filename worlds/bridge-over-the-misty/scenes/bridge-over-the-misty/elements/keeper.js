const s = e.state,
  t = e.t,
  L = Math.max(0, Math.min(1, s.light));
const up = s.lantern_raised ? 1 : 0;
const br = Math.sin(t * 1.1) * 0.008 + Math.sin(t * 0.37) * 0.004;
const dark = "#1b1826";
const hem = Math.sin(t * 0.9) * 0.03 + Math.sin(t * 1.7 + 1) * 0.015;
g.fillStyle = dark;
g.beginPath();
g.moveTo(-0.16, -1.4 - br);
g.quadraticCurveTo(-0.3, -0.7, -0.36 + hem, 0);
g.lineTo(0.3 + hem * 0.6, 0);
g.quadraticCurveTo(0.26, -0.8, 0.16, -1.4 - br);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(-0.15, -1.44 - br);
g.quadraticCurveTo(-0.2, -1.72, -0.03, -1.76 - br);
g.quadraticCurveTo(0.14, -1.68, 0.13, -1.44 - br);
g.closePath();
g.fill();
const w = Math.sin(t * 1.3) * 0.05 + Math.sin(t * 2.1) * 0.03;
g.strokeStyle = "#7e4a40";
g.lineWidth = 0.05;
g.lineCap = "round";
g.beginPath();
g.moveTo(0.06, -1.38 - br);
g.quadraticCurveTo(0.22, -1.28 + w, 0.32, -1.12 + w * 1.5);
g.stroke();
const bx = -0.3 - 0.15 * up,
  by = -0.3 * up,
  tx = -0.36 - 0.5 * up,
  ty = -2.0 - 0.3 * up;
const hx = bx + (tx - bx) * 0.55,
  hy = by + (ty - by) * 0.55;
g.strokeStyle = dark;
g.lineWidth = 0.085;
g.beginPath();
g.moveTo(-0.1, -1.32 - br);
g.lineTo(hx, hy);
g.stroke();
g.strokeStyle = "#2a2532";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(bx, by);
g.lineTo(tx, ty);
g.quadraticCurveTo(tx - 0.12, ty - 0.12, tx - 0.18, ty + 0.02);
g.stroke();
const sw = Math.sin(t * 1.3) * 0.07 + Math.sin(t * 0.53) * 0.04;
const lx = tx - 0.18 + Math.sin(sw) * 0.2,
  ly = ty + 0.02 + 0.2;
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(tx - 0.18, ty + 0.02);
g.lineTo(lx, ly - 0.08);
g.stroke();
g.fillStyle = "#231f2a";
g.fillRect(lx - 0.06, ly - 0.09, 0.12, 0.18);
if (s.lantern) {
  const k = s.met ? 1.25 : 1;
  g.fillStyle = "#ffd08a";
  g.fillRect(lx - 0.04, ly - 0.06, 0.08, 0.12);
  e.light(lx, ly, (3.5 + 2.5 * (1 - L)) * k, "#ffb565", 0.8 * k);
  g.strokeStyle = "rgba(255,180,110,0.5)";
  g.lineWidth = 0.025;
  g.beginPath();
  g.moveTo(-0.3, -0.2);
  g.quadraticCurveTo(-0.27, -0.8, -0.15, -1.36);
  g.stroke();
}
if (s.met) {
  for (let i = 0; i < 22; i++) {
    const sp = 0.15 + e.rnd() * 0.25,
      off = e.rnd();
    const p = (t * sp * 0.25 + off) % 1;
    const x = -1.0 + Math.sin(t * 0.7 + i * 2.1) * 0.25 * p + (e.rnd() - 0.5) * 0.5;
    const y = -1.2 - p * 4.2;
    g.globalAlpha = Math.sin(p * Math.PI) * 0.85;
    g.fillStyle = i % 3 ? "#ffd59a" : "#cfe0ff";
    g.beginPath();
    g.arc(x, y, 0.025, 0, 7);
    g.fill();
  }
  g.globalAlpha = 1;
}
e.at(-0.02, -1.85);
