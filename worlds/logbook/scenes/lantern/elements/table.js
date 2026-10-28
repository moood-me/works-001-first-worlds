const st = e.state,
  t = e.t;
const fl =
  1 + 0.05 * Math.sin(t * 7.3) + 0.035 * Math.sin(t * 12.7 + 1.3) + 0.06 * Math.sin(t * 1.9 + 0.4) * Math.sin(t * 0.53);
const L = Math.max(0, (st.lamp ?? 0.6) * (1 - 0.85 * (st.shutter || 0)) * fl);
g.fillStyle = "#2b1f16";
g.fillRect(-0.36, -0.28, 0.72, 0.56);
for (let i = 0; i < 40; i++) {
  const y = -0.28 + e.rnd() * 0.56;
  g.strokeStyle = `rgba(${e.rnd() < 0.5 ? "90,64,40" : "10,6,4"},${0.15 + e.rnd() * 0.2})`;
  g.lineWidth = 0.002 + e.rnd() * 0.004;
  g.beginPath();
  g.moveTo(-0.36, y);
  g.bezierCurveTo(-0.1, y + (e.rnd() - 0.5) * 0.02, 0.1, y + (e.rnd() - 0.5) * 0.02, 0.36, y + (e.rnd() - 0.5) * 0.01);
  g.stroke();
}
g.strokeStyle = "rgba(15,9,5,0.4)";
g.lineWidth = 0.006;
g.beginPath();
g.arc(0.26, -0.18, 0.04, 0, 7);
g.stroke();
let gr = g.createLinearGradient(-0.36, -0.28, 0.36, 0.28);
gr.addColorStop(0, `rgba(255,170,90,${0.3 * L})`);
gr.addColorStop(1, "rgba(255,170,90,0)");
g.fillStyle = gr;
g.fillRect(-0.36, -0.28, 0.72, 0.56);
// the logbook, open at tonight's page
g.save();
g.translate(-0.03, 0.02);
g.rotate(-0.08);
g.fillStyle = "rgba(0,0,0,0.35)";
g.fillRect(-0.2, -0.13, 0.43, 0.29);
g.fillStyle = "#3a2418";
g.fillRect(-0.212, -0.148, 0.424, 0.296);
const pc = `rgb(${Math.round(110 + 110 * L)},${Math.round(92 + 90 * L)},${Math.round(64 + 64 * L)})`;
g.fillStyle = pc;
g.fillRect(-0.2, -0.14, 0.198, 0.28);
g.fillRect(0.002, -0.14, 0.198, 0.28);
gr = g.createLinearGradient(-0.04, 0, 0.04, 0);
gr.addColorStop(0, "rgba(60,40,20,0)");
gr.addColorStop(0.5, "rgba(60,40,20,0.45)");
gr.addColorStop(1, "rgba(60,40,20,0)");
g.fillStyle = gr;
g.fillRect(-0.04, -0.14, 0.08, 0.28);
g.strokeStyle = "rgba(70,90,140,0.22)";
g.lineWidth = 0.0015;
g.beginPath();
for (let y = -0.12; y < 0.135; y += 0.018) {
  g.moveTo(-0.19, y);
  g.lineTo(-0.01, y);
  g.moveTo(0.01, y);
  g.lineTo(0.19, y);
}
g.stroke();
g.strokeStyle = "rgba(34,40,70,0.6)";
g.lineWidth = 0.0022;
for (let row = 0; row < 14; row++)
  for (const x0 of [-0.185, 0.015]) {
    if (x0 > 0 && row > 7) continue;
    const y = -0.124 + row * 0.018,
      len = 0.06 + e.rnd() * 0.11;
    g.beginPath();
    g.moveTo(x0, y);
    for (let x = 0; x < len; x += 0.006)
      g.lineTo(x0 + x, y - 0.003 - Math.abs(Math.sin(x * 900 + row)) * 0.006 * e.rnd());
    g.stroke();
  }
g.strokeStyle = "rgba(128,40,34,0.9)";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0.004, -0.14);
g.quadraticCurveTo(0.012, 0.05, 0.03, 0.2);
g.stroke();
const writing = st.keeper_present !== false && st.keeper_pose === "write";
if (!writing) {
  g.save();
  g.translate(0.12, 0.07);
  g.rotate(0.6);
  g.fillStyle = "#6a5a2a";
  g.fillRect(-0.07, -0.004, 0.14, 0.008);
  g.fillStyle = "#2a2018";
  g.fillRect(0.07, -0.002, 0.012, 0.004);
  g.restore();
}
g.restore();
// his spectacles, folded
g.strokeStyle = "rgba(150,130,100,0.6)";
g.lineWidth = 0.003;
g.beginPath();
g.arc(0.27, 0.13, 0.02, 0, 7);
g.moveTo(0.33, 0.135);
g.arc(0.31, 0.135, 0.02, 0, 7);
g.moveTo(0.29, 0.13);
g.lineTo(0.29, 0.135);
g.stroke();
// his sleeves and hand on the page when he writes
if (writing) {
  const wr = Math.sin(t * 2.3) * 0.02 + Math.sin(t * 0.7) * 0.015;
  g.strokeStyle = "#15110e";
  g.lineCap = "round";
  g.lineWidth = 0.09;
  g.beginPath();
  g.moveTo(-0.15, -0.3);
  g.lineTo(-0.13, -0.1);
  g.stroke();
  g.beginPath();
  g.moveTo(0.25, -0.3);
  g.lineTo(0.1 + wr, -0.02);
  g.stroke();
  g.fillStyle = "#2a1f18";
  g.beginPath();
  g.ellipse(0.1 + wr, 0.0, 0.035, 0.045, 0, 0, 7);
  g.fill();
  g.strokeStyle = "#6a5a2a";
  g.lineWidth = 0.007;
  g.beginPath();
  g.moveTo(0.1 + wr, 0.02);
  g.lineTo(0.07 + wr, 0.09);
  g.stroke();
}
