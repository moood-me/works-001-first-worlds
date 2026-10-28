const t = e.t,
  st = e.state;
const fl =
  1 + 0.05 * Math.sin(t * 7.3) + 0.035 * Math.sin(t * 12.7 + 1.3) + 0.06 * Math.sin(t * 1.9 + 0.4) * Math.sin(t * 0.53);
const L = Math.max(0, (st.lamp ?? 0.6) * (1 - 0.85 * (st.shutter || 0)) * fl);
g.save();
g.beginPath();
g.arc(0, 0, 2.52, 0, 7);
g.clip();
g.fillStyle = "#16120f";
g.fillRect(-2.6, -2.6, 5.2, 5.2);
// cast-iron chequer plate
g.strokeStyle = "rgba(90,78,64,0.13)";
g.lineWidth = 0.012;
g.beginPath();
for (let r = 0; r < 54; r++)
  for (let c = 0; c < 54; c++) {
    const x = -2.6 + c * 0.1 + 0.05,
      y = -2.6 + r * 0.1 + 0.05,
      o = (r + c) % 2 ? 1 : -1;
    g.moveTo(x - 0.022, y - 0.022 * o);
    g.lineTo(x + 0.022, y + 0.022 * o);
  }
g.stroke();
g.strokeStyle = "rgba(0,0,0,0.55)";
g.lineWidth = 0.02;
g.beginPath();
for (let k = 0; k < 8; k++) {
  const a = (k * Math.PI) / 4 + 0.2;
  g.moveTo(0.6 * Math.cos(a), 0.6 * Math.sin(a));
  g.lineTo(2.5 * Math.cos(a), 2.5 * Math.sin(a));
}
g.moveTo(1.55, 0);
g.arc(0, 0, 1.55, 0, 7);
g.moveTo(0.6, 0);
g.arc(0, 0, 0.6, 0, 7);
g.stroke();
g.fillStyle = "rgba(120,100,80,0.3)";
for (let k = 0; k < 48; k++) {
  const a = (k * Math.PI) / 24;
  g.beginPath();
  g.arc(1.55 * Math.cos(a), 1.55 * Math.sin(a), 0.012, 0, 7);
  g.fill();
}
// the path worn round the lens, a kerosene stain
g.strokeStyle = "rgba(150,125,95,0.08)";
g.lineWidth = 0.4;
g.beginPath();
g.arc(0, 0, 1.0, 0, 7);
g.stroke();
let gr = g.createRadialGradient(0.75, -0.35, 0, 0.75, -0.35, 0.32);
gr.addColorStop(0, "rgba(0,0,0,0.28)");
gr.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = gr;
g.fillRect(0.4, -0.7, 0.7, 0.7);
// the trapdoor to the stairs
g.save();
g.translate(-1.45, -0.55);
g.rotate(0.55);
g.fillStyle = "#120f0c";
g.fillRect(-0.35, -0.3, 0.7, 0.6);
g.strokeStyle = "rgba(0,0,0,0.7)";
g.lineWidth = 0.025;
g.strokeRect(-0.35, -0.3, 0.7, 0.6);
g.strokeStyle = "rgba(140,120,95,0.18)";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-0.33, -0.28);
g.lineTo(0.33, -0.28);
g.stroke();
g.strokeStyle = "rgba(130,110,85,0.4)";
g.lineWidth = 0.015;
g.beginPath();
g.arc(0.2, 0, 0.05, 0, 7);
g.stroke();
g.fillStyle = "#0a0806";
g.fillRect(-0.3, -0.33, 0.1, 0.06);
g.fillRect(0.2, -0.33, 0.1, 0.06);
g.restore();
// lamplight pooling round the pedestal; a cool wash from the panes
gr = g.createRadialGradient(0, 0, 0.35, 0, 0, 2.6);
gr.addColorStop(0, `rgba(255,180,100,${0.34 * L})`);
gr.addColorStop(0.45, `rgba(220,140,80,${0.13 * L})`);
gr.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = gr;
g.fillRect(-2.6, -2.6, 5.2, 5.2);
gr = g.createLinearGradient(0, -2.5, 0, 0.5);
gr.addColorStop(0, "rgba(120,140,185,0.07)");
gr.addColorStop(1, "rgba(120,140,185,0)");
g.fillStyle = gr;
g.fillRect(-2.6, -2.6, 5.2, 3.1);
g.restore();
