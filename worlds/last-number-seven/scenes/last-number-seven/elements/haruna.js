const s = e.state,
  d = s.dusk || 0,
  t = e.t,
  gn = s.gone || 0;
const stand = s.haruna !== "sitting";
const Y = stand ? -0.28 : 0;
e.at(0, -1.3 + Y);
if (gn >= 0.99) return;
g.globalAlpha = 1 - gn;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
const br = Math.sin(t * 1.1) * 0.006 + Math.sin(t * 0.43) * 0.004,
  w = s.wind ?? 0.4;
const navy = mx([44, 50, 76], [22, 24, 42], d),
  blouse = mx([240, 236, 228], [150, 150, 172], d),
  skin = mx([238, 198, 172], [132, 106, 112], d),
  hair = mx([42, 30, 34], [18, 16, 26], d),
  sock = mx([244, 240, 236], [140, 140, 158], d),
  shoe = "#1e1a1e",
  rib = mx([200, 62, 56], [120, 40, 50], d);
const cx = stand ? 0.4 : 0.5;
g.fillStyle = mx([164, 206, 196], [76, 98, 112], d);
g.beginPath();
g.roundRect(cx - 0.19, -0.62, 0.38, 0.58, 0.05);
g.fill();
g.fillStyle = "rgba(30,40,50,0.35)";
g.fillRect(cx - 0.19, -0.36, 0.38, 0.035);
g.fillStyle = "rgba(255,240,200,0.8)";
g.fillRect(cx + 0.04, -0.52, 0.09, 0.07);
g.fillStyle = "#222";
g.beginPath();
g.arc(cx - 0.13, -0.02, 0.025, 0, 7);
g.arc(cx + 0.13, -0.02, 0.025, 0, 7);
g.fill();
g.fillStyle = "rgba(255,180,110," + 0.5 * (1 - d) + ")";
g.fillRect(cx - 0.19, -0.6, 0.02, 0.54);
g.strokeStyle = "#333";
g.lineWidth = 0.02;
g.beginPath();
if (stand) {
  g.moveTo(cx - 0.05, -0.62);
  g.lineTo(cx - 0.05, -0.92);
  g.lineTo(cx + 0.05, -0.92);
  g.lineTo(cx + 0.05, -0.62);
} else {
  g.moveTo(cx - 0.06, -0.62);
  g.quadraticCurveTo(cx, -0.7, cx + 0.06, -0.62);
}
g.stroke();
g.fillStyle = shoe;
g.beginPath();
g.ellipse(-0.07, -0.025, 0.05, 0.025, 0, 0, 7);
g.ellipse(0.075, -0.025, 0.05, 0.025, 0, 0, 7);
g.fill();
if (stand) {
  g.fillStyle = sock;
  g.fillRect(-0.1, -0.36, 0.06, 0.33);
  g.fillRect(0.045, -0.36, 0.06, 0.33);
  g.fillStyle = skin;
  g.fillRect(-0.1, -0.68, 0.06, 0.33);
  g.fillRect(0.045, -0.68, 0.06, 0.33);
} else {
  g.fillStyle = sock;
  g.fillRect(-0.11, -0.32, 0.07, 0.3);
  g.fillRect(0.045, -0.32, 0.07, 0.3);
  g.fillStyle = skin;
  g.fillRect(-0.11, -0.46, 0.07, 0.15);
  g.fillRect(0.045, -0.46, 0.07, 0.15);
}
const fl = Math.sin(t * 1.7) * 0.012 * w + Math.sin(t * 2.9) * 0.006;
g.fillStyle = navy;
g.beginPath();
g.moveTo(-0.16, -0.64 + Y);
g.lineTo(0.16, -0.64 + Y);
g.lineTo(0.22 + fl, -0.44 + Y * 0.85);
g.lineTo(-0.22 + fl, -0.44 + Y * 0.85);
g.closePath();
g.fill();
g.strokeStyle = "rgba(10,10,30,0.4)";
g.lineWidth = 0.008;
for (let i = -3; i <= 3; i++) {
  g.beginPath();
  g.moveTo(i * 0.045, -0.63 + Y);
  g.lineTo(i * 0.065 + fl, -0.45 + Y * 0.85);
  g.stroke();
}
const sy = -1.0 + br + Y;
g.fillStyle = blouse;
g.beginPath();
g.moveTo(-0.15, -0.62 + Y);
g.quadraticCurveTo(-0.19, -0.84 + Y, -0.15, sy);
g.lineTo(0.15, sy);
g.quadraticCurveTo(0.19, -0.84 + Y, 0.15, -0.62 + Y);
g.closePath();
g.fill();
g.fillStyle = navy;
g.beginPath();
g.moveTo(-0.16, sy + 0.01);
g.lineTo(0.16, sy + 0.01);
g.lineTo(0.13, sy + 0.06);
g.lineTo(0, sy + 0.16);
g.lineTo(-0.13, sy + 0.06);
g.closePath();
g.fill();
g.fillStyle = rib;
g.beginPath();
g.moveTo(0, sy + 0.15);
g.lineTo(-0.05, sy + 0.12);
g.lineTo(-0.05, sy + 0.18);
g.closePath();
g.moveTo(0, sy + 0.15);
g.lineTo(0.05, sy + 0.12);
g.lineTo(0.05, sy + 0.18);
g.closePath();
g.moveTo(-0.01, sy + 0.15);
g.lineTo(-0.025 + fl, sy + 0.27);
g.lineTo(0.005 + fl, sy + 0.26);
g.lineTo(0.01, sy + 0.15);
g.fill();
g.strokeStyle = blouse;
g.lineWidth = 0.055;
g.lineCap = "round";
g.beginPath();
if (stand) {
  g.moveTo(-0.15, sy + 0.03);
  g.quadraticCurveTo(-0.2, sy + 0.25, -0.17, sy + 0.42);
  g.moveTo(0.15, sy + 0.03);
  g.quadraticCurveTo(0.24, sy + 0.2, cx - 0.06, -0.9);
} else {
  g.moveTo(-0.15, sy + 0.03);
  g.quadraticCurveTo(-0.17, sy + 0.3, -0.03, -0.5);
  g.moveTo(0.15, sy + 0.03);
  g.quadraticCurveTo(0.17, sy + 0.3, 0.03, -0.5);
}
g.stroke();
g.fillStyle = skin;
g.beginPath();
if (stand) {
  g.arc(-0.17, sy + 0.44, 0.025, 0, 7);
  g.arc(cx - 0.05, -0.9, 0.025, 0, 7);
} else {
  g.arc(0, -0.5, 0.035, 0, 7);
}
g.fill();
g.fillRect(-0.022, sy - 0.07, 0.044, 0.08);
const hy = sy - 0.15;
g.fillStyle = hair;
g.beginPath();
g.moveTo(-0.1, hy - 0.02);
g.quadraticCurveTo(-0.15, sy + 0.1, -0.12, sy + 0.2);
g.lineTo(0.12, sy + 0.2);
g.quadraticCurveTo(0.15, sy + 0.1, 0.1, hy - 0.02);
g.fill();
g.beginPath();
g.ellipse(0.005, hy, 0.1, 0.115, 0, 0, 7);
g.fill();
g.fillStyle = skin;
g.beginPath();
g.ellipse(0.012, hy + 0.035, 0.068, 0.07, 0, 0, Math.PI);
g.fill();
g.fillStyle = hair;
g.beginPath();
g.moveTo(-0.09, hy + 0.04);
g.quadraticCurveTo(-0.02, hy - 0.02, 0.01, hy + 0.06);
g.quadraticCurveTo(0.04, hy - 0.01, 0.09, hy + 0.04);
g.lineTo(0.1, hy - 0.03);
g.lineTo(-0.1, hy - 0.03);
g.fill();
g.strokeStyle = hair;
g.lineWidth = 0.012;
for (let i = 0; i < 6; i++) {
  const y0 = hy + 0.02 + i * 0.035,
    L = 0.08 + 0.1 * w * (0.7 + 0.3 * Math.sin(t * 1.3 + i * 0.9));
  g.beginPath();
  g.moveTo(0.09, y0);
  g.quadraticCurveTo(
    0.12 + L * 0.4,
    y0 + 0.02 + Math.sin(t * 2.1 + i) * 0.01,
    0.1 + L,
    y0 + 0.03 + Math.sin(t * 1.7 + i * 1.3) * 0.02,
  );
  g.stroke();
}
g.strokeStyle = "rgba(255,176,110," + 0.55 * (1 - d) + ")";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-0.15, -0.64 + Y);
g.quadraticCurveTo(-0.19, -0.84 + Y, -0.15, sy);
g.moveTo(-0.1, hy + 0.06);
g.quadraticCurveTo(-0.11, hy - 0.08, 0, hy - 0.115);
g.stroke();
g.globalAlpha = 1;
