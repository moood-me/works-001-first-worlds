const L = e.state.lamp || 0;
g.fillStyle = "#1b1f24";
g.fillRect(-4, -4.6, 8, 4.6);
g.strokeStyle = "rgba(0,0,0,0.3)";
g.lineWidth = 0.04;
for (let y = -4.4; y < 0; y += 0.35) {
  g.beginPath();
  g.moveTo(-4, y);
  g.lineTo(4, y);
  g.stroke();
}
g.fillStyle = "#12151a";
g.beginPath();
g.moveTo(-4.6, -4.5);
g.lineTo(0, -7.6);
g.lineTo(4.6, -4.5);
g.closePath();
g.fill();
g.fillStyle = "#14171b";
g.fillRect(1.8, -7.6, 0.6, 1.9);
g.fillStyle = "#78818c";
g.beginPath();
g.moveTo(-4.75, -4.42);
g.lineTo(0, -7.78);
g.lineTo(4.75, -4.42);
g.lineTo(4.45, -4.66);
g.quadraticCurveTo(2, -6.1, 0, -7.45);
g.quadraticCurveTo(-2, -6.1, -4.45, -4.66);
g.closePath();
g.fill();
g.fillRect(1.75, -7.7, 0.7, 0.12);
const wx = 1.4,
  wy = -3.4,
  ww = 1.6,
  wh = 1.5;
if (L > 0) {
  let gr = g.createLinearGradient(0, wy, 0, wy + wh);
  gr.addColorStop(0, "#ffc478");
  gr.addColorStop(1, "#c47838");
  g.globalAlpha = L;
  g.fillStyle = gr;
  g.fillRect(wx, wy, ww, wh);
  g.globalAlpha = 1;
}
g.fillStyle = "rgba(10,12,15," + (1 - L) + ")";
g.fillRect(wx, wy, ww, wh);
g.strokeStyle = "#0d0f12";
g.lineWidth = 0.09;
g.strokeRect(wx, wy, ww, wh);
g.beginPath();
g.moveTo(wx + ww / 2, wy);
g.lineTo(wx + ww / 2, wy + wh);
g.moveTo(wx, wy + wh * 0.45);
g.lineTo(wx + ww, wy + wh * 0.45);
g.stroke();
g.fillStyle = "#78818c";
g.fillRect(wx - 0.12, wy + wh, ww + 0.24, 0.09);
if (L > 0) e.light(wx + ww / 2, wy + wh / 2, 5, "#ffb870", 0.85 * L);
const dx = -2.6,
  dw = 1.0,
  dh = 2.1;
if (e.state.door) {
  g.fillStyle = L > 0 ? "#d9944f" : "#050607";
  g.fillRect(dx, -dh, dw, dh);
  if (L > 0) e.light(dx + dw / 2, -1, 3.5, "#ffb060", 0.6 * L);
  g.fillStyle = "#0e1013";
  g.beginPath();
  g.moveTo(dx, -dh);
  g.lineTo(dx - 0.35, -dh - 0.1);
  g.lineTo(dx - 0.35, 0.05);
  g.lineTo(dx, 0);
  g.closePath();
  g.fill();
} else {
  g.fillStyle = "#101317";
  g.fillRect(dx, -dh, dw, dh);
  g.fillStyle = "#2a2f35";
  g.beginPath();
  g.arc(dx + 0.82, -1, 0.05, 0, 7);
  g.fill();
}
if (L > 0) {
  for (let i = 0; i < 8; i++) {
    const k = (e.t * 0.12 + i * 0.55) % 4.4;
    const y = -7.7 - k;
    const x = 2.1 + Math.sin(e.t * 0.3 + i * 1.3) * 0.15 + k * 0.4;
    g.fillStyle = "rgba(70,76,84," + 0.16 * (1 - k / 4.4) + ")";
    g.beginPath();
    g.ellipse(x, y, 0.25 + k * 0.15, 0.2 + k * 0.1, 0, 0, 7);
    g.fill();
  }
}
g.fillStyle = "#626b77";
g.beginPath();
g.moveTo(-4.6, 0.3);
g.quadraticCurveTo(-2, -0.45, 0, -0.2);
g.quadraticCurveTo(2.5, -0.05, 4.6, -0.4);
g.lineTo(4.7, 0.3);
g.closePath();
g.fill();
