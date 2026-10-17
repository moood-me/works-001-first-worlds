const s = e.state,
  t = e.t;
const ring = s.phone === "ringing";
const off = s.phone === "off the hook";
const inside = (s.walk || 0) > 0.85 && (s.gone || 0) < 0.5;
const on = ring && Math.sin(t * 2.6) > 0;
const jit = on ? Math.sin(t * 70) * 0.008 : 0;
const fl = 0.93 + 0.04 * Math.sin(t * 29) * Math.sin(t * 2.3) + (on ? 0.12 : 0);
e.light(0, -2.1, 3.5, "#bfe0cf", 0.5 * fl);
let gr = g.createLinearGradient(0, -2.3, 0, 0);
gr.addColorStop(0, "rgba(178,212,194," + 0.8 * fl + ")");
gr.addColorStop(1, "rgba(80,104,96,0.8)");
g.fillStyle = gr;
g.fillRect(-0.55, -2.3, 1.1, 2.25);
g.save();
g.translate(0, 0.02);
g.scale(1, 0.16);
let pg = g.createRadialGradient(0, 0, 0, 0, 0, 1.6);
pg.addColorStop(0, "rgba(180,215,200,0.25)");
pg.addColorStop(1, "rgba(180,215,200,0)");
g.fillStyle = pg;
g.beginPath();
g.arc(0, 0, 1.6, 0, 7);
g.fill();
g.restore();
g.fillStyle = "#22272a";
g.fillRect(0.24, -1.62, 0.22, 0.34);
if (!off) {
  g.fillStyle = "#121416";
  g.fillRect(0.21 + jit, -1.66, 0.06, 0.32);
} else if (!inside) {
  const an = Math.sin(t * 1.1) * 0.22 + Math.sin(t * 0.47) * 0.08;
  const rx = 0.36 + Math.sin(an) * 0.62,
    ry = -1.32 + Math.cos(an) * 0.62;
  g.strokeStyle = "#121416";
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(0.36, -1.32);
  g.quadraticCurveTo(0.36 + Math.sin(an) * 0.2, -0.95, rx, ry);
  g.stroke();
  g.save();
  g.translate(rx, ry);
  g.rotate(-an);
  g.fillStyle = "#121416";
  g.fillRect(-0.03, 0, 0.06, 0.3);
  g.restore();
}
if (on) {
  g.strokeStyle = "rgba(30,40,38,0.6)";
  g.lineWidth = 0.014;
  for (let k = 1; k < 3; k++) {
    g.beginPath();
    g.arc(0.35, -1.45, 0.1 * k + 0.02 * Math.sin(t * 22), -0.9, 0.9);
    g.stroke();
  }
}
