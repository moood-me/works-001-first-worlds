const s = e.state,
  t = e.t,
  m = s.distant_suit_radio || "static";
e.at(0, -1.7);
g.fillStyle = "#0b0d11";
g.fillRect(-0.12, -1.66, 0.24, 0.46);
g.strokeStyle = "rgba(0,0,0,0.7)";
g.lineWidth = 0.012;
g.strokeRect(-0.12, -1.66, 0.24, 0.46);
g.fillStyle = "#040506";
for (let i = 0; i < 6; i++) g.fillRect(-0.08, -1.42 + i * 0.03, 0.16, 0.012);
g.fillStyle = "#0a0705";
g.fillRect(-0.09, -1.62, 0.18, 0.12);
const burst = Math.sin(t * 0.37) * Math.sin(t * 0.13 + 1) > 0.25;
let amp = 0,
  col = "255,160,70",
  lc = "#ffa04a",
  on = 0;
if (m === "static") {
  amp = burst ? 0.035 : 0.012;
  on = burst ? 0.4 : 0.18;
}
if (m === "voice") {
  col = "170,235,190";
  lc = "#a8f0c0";
  const syl = Math.max(0, Math.sin(t * 5.3)) * Math.max(0, Math.sin(t * 0.9 + Math.sin(t * 0.31) * 2));
  amp = 0.008 + 0.04 * syl;
  on = 0.3 + 0.3 * syl;
}
g.strokeStyle = "rgba(" + col + "," + (m === "silent" ? 0.12 : 0.8) + ")";
g.lineWidth = 0.004;
g.beginPath();
for (let i = 0; i <= 40; i++) {
  const x = -0.085 + (i * 0.17) / 40;
  const n =
    m === "static"
      ? (Math.sin(i * 12.9898 + Math.floor(t * 14) * 78.233) * 43758.5) % 1
      : Math.sin(i * 1.3 + t * 11) * Math.sin(i * 0.4 - t * 3);
  g.lineTo(x, -1.56 + amp * n);
}
g.stroke();
g.save();
g.translate(0, -1.515);
g.scale(0.0022, 0.0022);
g.font = "9px monospace";
g.textAlign = "center";
g.fillStyle = "rgba(" + col + "," + (m === "silent" ? 0.15 : 0.7) + ")";
g.fillText("СКАФ. 02 · КАН. 2", 0, 0);
g.restore();
const led = m === "silent" ? 0.12 : m === "static" ? (Math.sin(t * 17) * Math.sin(t * 3.1) > 0 ? 0.9 : 0.3) : 0.9;
g.fillStyle = m === "silent" ? "rgba(120,40,30,0.5)" : "rgba(" + col + "," + led + ")";
g.beginPath();
g.arc(0.085, -1.24, 0.012, 0, 6.2832);
g.fill();
g.save();
g.translate(0, -1.69);
g.scale(0.0028, 0.0028);
g.font = "bold 9px monospace";
g.textAlign = "center";
g.fillStyle = "rgba(190,170,120,0.3)";
g.fillText("СВЯЗЬ", 0, 0);
g.restore();
if (on > 0) e.light(0, -1.5, 0.45, lc, on);
