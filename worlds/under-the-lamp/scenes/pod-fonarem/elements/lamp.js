const st = e.state,
  t = e.t;
const fl = (() => {
  const L = st.lamp;
  if (L === "off") return 0;
  if (L !== "flicker") return 1;
  const f = Math.sin(t * 1.7) + Math.sin(t * 2.9 + 1) + Math.sin(t * 0.63);
  return f > 1.4 ? 0.1 : 0.82 + 0.18 * Math.sin(t * 41);
})();
if (fl > 0) {
  const cg = g.createLinearGradient(0, -4.4, 0, 0);
  cg.addColorStop(0, "rgba(240,180,110," + 0.2 * fl + ")");
  cg.addColorStop(1, "rgba(240,180,110,0)");
  g.fillStyle = cg;
  g.beginPath();
  g.moveTo(-0.72, -4.45);
  g.lineTo(-0.48, -4.45);
  g.lineTo(1.3, 0.1);
  g.lineTo(-2.5, 0.1);
  g.closePath();
  g.fill();
  g.lineCap = "round";
  g.lineWidth = 0.008;
  const n = Math.round(70 * st.rain);
  for (let i = 0; i < n; i++) {
    const fr = e.rnd();
    const sp = 0.9 + e.rnd() * 0.4;
    const u = (fr + t * sp) % 1;
    const yy = -4.4 + u * 4.4;
    const half = 0.12 + u * 1.8;
    const xx = -0.6 + (e.rnd() * 2 - 1) * half;
    g.strokeStyle = "rgba(255,220,170," + 0.4 * fl * (1 - u * 0.6) + ")";
    g.beginPath();
    g.moveTo(xx, yy);
    g.lineTo(xx - 0.02, yy + 0.16);
    g.stroke();
  }
}
g.fillStyle = "#0f1418";
g.beginPath();
g.moveTo(-0.09, 0);
g.lineTo(-0.06, -0.45);
g.lineTo(-0.04, -4.3);
g.lineTo(0.04, -4.3);
g.lineTo(0.06, -0.45);
g.lineTo(0.09, 0);
g.fill();
g.fillRect(-0.11, -0.5, 0.22, 0.08);
g.strokeStyle = "#0f1418";
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(0, -4.25);
g.quadraticCurveTo(-0.05, -4.8, -0.6, -4.66);
g.stroke();
g.beginPath();
g.moveTo(-0.8, -4.5);
g.lineTo(-0.4, -4.5);
g.lineTo(-0.5, -4.66);
g.lineTo(-0.7, -4.66);
g.closePath();
g.fill();
g.fillStyle = fl > 0 ? "rgba(255,222,165," + 0.95 * fl + ")" : "#262c30";
g.beginPath();
g.ellipse(-0.6, -4.5, 0.14, 0.07, 0, 0, Math.PI);
g.fill();
if (fl > 0) e.light(-0.6, -4.45, 3.6, "#e8a85a", 0.85 * fl);
