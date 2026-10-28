const s = e.state,
  t = e.t;
const w = s.walk || 0,
  gn = s.gone || 0;
const dx = w * 4.8 + gn * 3;
const a = 1 - gn;
e.at(dx + 0.02, -1.7);
if (a <= 0.01) return;
const inside = w > 0.85;
const off = s.phone === "off the hook";
g.globalAlpha = a;
g.translate(dx, 0);
const br = Math.sin(t * 1.3) * 0.008 + Math.sin(t * 0.53) * 0.005;
const st = Math.sin((dx / 0.75) * Math.PI);
const hem = Math.sin(t * 0.9) * 0.015 + Math.sin(t * 0.37) * 0.01;
g.fillStyle = "#0b0c10";
g.beginPath();
g.moveTo(-0.13, -0.8);
g.lineTo(-0.11 + st * 0.2, 0);
g.lineTo(-0.01 + st * 0.2, 0);
g.lineTo(0, -0.8);
g.fill();
g.beginPath();
g.moveTo(0, -0.8);
g.lineTo(0.01 - st * 0.2, 0);
g.lineTo(0.11 - st * 0.2, 0);
g.lineTo(0.13, -0.8);
g.fill();
g.beginPath();
g.moveTo(-0.2, -1.42 + br);
g.quadraticCurveTo(-0.27, -0.9, -0.31 + hem, -0.42);
g.lineTo(0.29 + hem, -0.45);
g.quadraticCurveTo(0.25, -0.95, 0.2, -1.42 + br);
g.quadraticCurveTo(0, -1.49 + br, -0.2, -1.42 + br);
g.fill();
g.beginPath();
g.ellipse(0.04, -1.55 + br, 0.08, 0.1, 0.15, 0, 7);
g.fill();
g.beginPath();
g.moveTo(-0.17, -1.4 + br);
g.lineTo(-0.11, -1.6 + br);
g.lineTo(0.01, -1.46 + br);
g.lineTo(0.14, -1.6 + br);
g.lineTo(0.2, -1.4 + br);
g.fill();
g.beginPath();
g.ellipse(0.03, -1.645 + br, 0.2, 0.032, -0.04, 0, 7);
g.fill();
g.beginPath();
g.moveTo(-0.08, -1.66 + br);
g.lineTo(-0.07, -1.78 + br);
g.quadraticCurveTo(0.03, -1.81 + br, 0.13, -1.78 + br);
g.lineTo(0.14, -1.66 + br);
g.fill();
if (inside && off) {
  g.beginPath();
  g.moveTo(0.15, -1.35 + br);
  g.quadraticCurveTo(0.3, -1.3, 0.2, -1.5 + br);
  g.lineTo(0.14, -1.52 + br);
  g.lineTo(0.1, -1.4 + br);
  g.fill();
  g.fillStyle = "#16191b";
  g.fillRect(0.11, -1.66 + br, 0.05, 0.24);
}
let L = s.lamp === "off" ? 0 : 1;
if (s.lamp === "flickering") {
  const n = Math.sin(t * 17.3) * Math.sin(t * 3.1) + Math.sin(t * 0.71);
  L = n > 0.55 ? 0.12 : n > 0.4 ? 0.5 : 1;
}
const rim = inside ? 0.25 : L * Math.max(0, 1 - Math.abs(dx + 0.3) / 3.5) * 0.35;
g.strokeStyle = inside ? "rgba(190,225,205," + rim + ")" : "rgba(230,165,90," + rim + ")";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-0.2, -1.4 + br);
g.quadraticCurveTo(-0.27, -0.9, -0.3 + hem, -0.44);
g.moveTo(-0.17, -1.645 + br);
g.lineTo(-0.07, -1.665 + br);
g.stroke();
if (s.cigarette && !inside) {
  const p = Math.max(0, Math.sin(t * 0.35 + 0.4)) ** 6;
  g.strokeStyle = "rgba(200,195,185,0.7)";
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(0.1, -1.51 + br);
  g.lineTo(0.17, -1.5 + br);
  g.stroke();
  g.fillStyle = "rgba(255,130,60," + (0.5 + 0.5 * p) + ")";
  g.beginPath();
  g.arc(0.175, -1.5 + br, 0.014, 0, 7);
  g.fill();
  e.light(dx + 0.175, -1.5, 0.35, "#ff7a3a", 0.25 + 0.5 * p);
  for (let k = 0; k < 6; k++) {
    const ph = (t * 0.11 + k / 6) % 1;
    const x = 0.18 + Math.sin(ph * 5 + k * 1.3 + t * 0.2) * 0.08 * ph + ph * 0.18;
    const y = -1.52 - ph * 0.95;
    g.fillStyle = "rgba(170,170,175," + 0.09 * (1 - ph) + ")";
    g.beginPath();
    g.arc(x, y, 0.03 + ph * 0.13, 0, 7);
    g.fill();
  }
}
