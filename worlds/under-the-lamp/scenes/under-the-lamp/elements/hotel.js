const st = e.state,
  t = e.t;
g.fillStyle = "#141a1e";
g.fillRect(-11, -15, 12.5, 15.2);
g.strokeStyle = "rgba(60,70,78,0.12)";
g.lineWidth = 0.02;
for (let y = -15; y < 0; y += 0.3) {
  g.beginPath();
  g.moveTo(-11, y);
  g.lineTo(1.5, y);
  g.stroke();
}
g.fillStyle = "#1c2429";
g.fillRect(-11, -15.3, 12.8, 0.35);
g.fillRect(-11, -4.6, 12.6, 0.2);
const rows = [-7.6, -11, -14.3];
const cols = [-9.4, -6.9, -4.4, -1.9];
rows.forEach((wy, ri) =>
  cols.forEach((wx, ci) => {
    const watcher = ri === 0 && ci === 3;
    if (watcher && st.watcher) {
      const wg = g.createLinearGradient(0, wy, 0, wy + 1.9);
      wg.addColorStop(0, "#6b5034");
      wg.addColorStop(1, "#3a2b1f");
      g.fillStyle = wg;
      g.fillRect(wx, wy, 1.1, 1.9);
      const sw = Math.sin(t * 0.6) * 0.03;
      g.fillStyle = "#120e0b";
      g.beginPath();
      g.arc(wx + 0.62 + sw, wy + 0.95, 0.17, 0, 7);
      g.fill();
      g.beginPath();
      g.moveTo(wx + 0.25, wy + 1.9);
      g.quadraticCurveTo(wx + 0.6 + sw, wy + 1.05, wx + 0.98, wy + 1.9);
      g.fill();
      g.fillStyle = "rgba(90,70,50,0.8)";
      g.fillRect(wx, wy, 0.22 + Math.sin(t * 0.4) * 0.03, 1.9);
      e.light(wx + 0.55, wy + 0.8, 1.4, "#d9a060", 0.35);
    } else {
      const lit = ri === 1 && ci === 1;
      g.fillStyle = lit ? "#2c3a3f" : "#0c1114";
      g.fillRect(wx, wy, 1.1, 1.9);
      g.fillStyle = "rgba(70,85,95,0.15)";
      g.fillRect(wx, wy, 1.1, 0.5);
    }
    g.fillStyle = "#1e272d";
    g.fillRect(wx - 0.1, wy + 1.9, 1.3, 0.12);
  }),
);
g.fillStyle = "#0a0e10";
g.fillRect(-2.4, -2.6, 1.5, 2.6);
const dg = g.createLinearGradient(0, -2.4, 0, -0.6);
dg.addColorStop(0, "rgba(160,120,70,0.5)");
dg.addColorStop(1, "rgba(90,60,35,0.3)");
g.fillStyle = dg;
g.fillRect(-2.25, -2.4, 1.2, 1.7);
g.fillStyle = "#0d1215";
g.beginPath();
g.moveTo(-2.9, -2.85);
g.lineTo(-0.4, -2.85);
g.lineTo(-0.6, -3.05);
g.lineTo(-2.7, -3.05);
g.fill();
e.light(-1.65, -1.5, 1.2, "#c8925a", 0.25);
g.fillStyle = "#1c2429";
g.fillRect(-2.7, -0.12, 2.1, 0.12);
const cx = -1.65,
  cy = -3.75;
g.fillStyle = "#0d1215";
g.beginPath();
g.arc(cx, cy, 0.38, 0, 7);
g.fill();
g.fillStyle = "rgba(190,182,160,0.85)";
g.beginPath();
g.arc(cx, cy, 0.32, 0, 7);
g.fill();
g.strokeStyle = "#1a1d1f";
g.lineWidth = 0.02;
for (let i = 0; i < 12; i++) {
  const a = (i / 12) * Math.PI * 2;
  g.beginPath();
  g.moveTo(cx + Math.sin(a) * 0.26, cy - Math.cos(a) * 0.26);
  g.lineTo(cx + Math.sin(a) * 0.3, cy - Math.cos(a) * 0.3);
  g.stroke();
}
const tm = st.time;
const ma = ((tm % 60) / 60) * Math.PI * 2,
  ha = (((tm / 60) % 12) / 12) * Math.PI * 2;
g.lineCap = "round";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(cx, cy);
g.lineTo(cx + Math.sin(ha) * 0.16, cy - Math.cos(ha) * 0.16);
g.stroke();
g.lineWidth = 0.022;
g.beginPath();
g.moveTo(cx, cy);
g.lineTo(cx + Math.sin(ma) * 0.25, cy - Math.cos(ma) * 0.25);
g.stroke();
e.light(cx, cy, 0.6, "#d8d0b8", 0.15);
g.fillStyle = "#0e1316";
g.fillRect(1.5, -6.5, 0.2, 0.08);
g.fillRect(1.5, -3.3, 0.2, 0.08);
g.fillRect(1.65, -6.9, 0.72, 4.1);
const N = st.neon;
const L = [...tr("HOTEL")];
g.save();
g.scale(0.01, 0.01);
g.font = "bold 60px Georgia, serif";
g.textAlign = "center";
g.textBaseline = "middle";
L.forEach((ch, i) => {
  let on = N === "on" ? 1 : 0;
  if (N === "broken") {
    on = i === 2 ? 0 : i === 4 ? (Math.sin(t * 3.3) + Math.sin(t * 7.1) > 0.6 ? 0 : 1) : 1;
  }
  const hum = 0.92 + 0.08 * Math.sin(t * 50 + i);
  const x = 201,
    y = (-6.45 + i * 0.8) * 100;
  if (on) {
    g.shadowColor = "rgba(220,80,86,0.9)";
    g.shadowBlur = 18;
    g.fillStyle = "rgba(236,110,112," + hum + ")";
  } else {
    g.shadowBlur = 0;
    g.fillStyle = "#2e2022";
  }
  g.fillText(ch, x, y);
});
g.restore();
const nl = N === "on" ? 0.55 : N === "broken" ? 0.35 : 0;
if (nl > 0) e.light(2.0, -4.8, 3.2, "#c4464c", nl * (0.95 + 0.05 * Math.sin(t * 50)));
