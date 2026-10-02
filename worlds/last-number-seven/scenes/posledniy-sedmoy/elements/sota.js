const s = e.state,
  d = s.dusk || 0,
  t = e.t,
  X = s.sotaX || 0;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
const dx = -X * 3.4,
  fx = -0.12 + dx;
e.at(fx, -1.8);
const shirt = mx([236, 238, 236], [146, 150, 170], d),
  pants = mx([40, 44, 58], [18, 20, 32], d),
  skin = mx([228, 186, 160], [124, 100, 108], d),
  hair = mx([30, 26, 30], [14, 14, 22], d),
  frame = mx([60, 104, 120], [28, 40, 58], d);
const bike = () => {
  g.strokeStyle = mx([40, 40, 44], [16, 16, 24], d);
  g.lineWidth = 0.035;
  for (const wx of [-0.52, 0.55]) {
    g.beginPath();
    g.arc(wx, -0.34, 0.33, 0, 7);
    g.stroke();
  }
  g.lineWidth = 0.008;
  g.strokeStyle = "rgba(120,120,130,0.5)";
  for (const wx of [-0.52, 0.55])
    for (let k = 0; k < 8; k++) {
      const a = (k * Math.PI) / 8;
      g.beginPath();
      g.moveTo(wx + Math.cos(a) * 0.32, -0.34 + Math.sin(a) * 0.32);
      g.lineTo(wx - Math.cos(a) * 0.32, -0.34 - Math.sin(a) * 0.32);
      g.stroke();
    }
  g.strokeStyle = frame;
  g.lineWidth = 0.04;
  g.beginPath();
  g.moveTo(0.55, -0.34);
  g.lineTo(0.02, -0.32);
  g.lineTo(0.15, -0.84);
  g.lineTo(0.55, -0.34);
  g.moveTo(0.02, -0.32);
  g.lineTo(-0.38, -0.86);
  g.lineTo(0.15, -0.84);
  g.moveTo(-0.38, -0.86);
  g.lineTo(-0.52, -0.34);
  g.moveTo(-0.38, -0.86);
  g.lineTo(-0.36, -1.0);
  g.lineTo(-0.24, -1.02);
  g.stroke();
  g.fillStyle = mx([30, 30, 34], [14, 14, 20], d);
  g.beginPath();
  g.ellipse(0.18, -0.9, 0.11, 0.03, 0, 0, 7);
  g.fill();
  g.strokeStyle = mx([60, 60, 64], [24, 24, 30], d);
  g.lineWidth = 0.025;
  g.beginPath();
  g.moveTo(0.2, -0.62);
  g.lineTo(0.7, -0.62);
  g.stroke();
  g.fillStyle = mx([54, 44, 40], [24, 20, 24], d);
  g.fillRect(0.3, -0.8, 0.38, 0.18);
  g.fillStyle = "rgba(255,180,110," + 0.4 * (1 - d) + ")";
  g.fillRect(0.3, -0.8, 0.02, 0.18);
};
const walking = X > 0.01 && X < 0.99;
const st = walking ? Math.sin((dx / 0.7) * Math.PI) : 0;
const br = Math.sin(t * 1.2) * 0.007 + Math.sin(t * 0.5) * 0.004;
const man = () => {
  g.save();
  g.translate(fx, 0);
  g.fillStyle = "#1a1a20";
  g.beginPath();
  g.ellipse(-0.06 + st * 0.16, -0.025, 0.07, 0.028, 0, 0, 7);
  g.ellipse(0.07 - st * 0.16, -0.025, 0.07, 0.028, 0, 0, 7);
  g.fill();
  g.fillStyle = pants;
  g.beginPath();
  g.moveTo(-0.13, -0.92);
  g.lineTo(-0.11 + st * 0.16, 0);
  g.lineTo(-0.01 + st * 0.16, 0);
  g.lineTo(0, -0.75);
  g.lineTo(0.01 - st * 0.16, 0);
  g.lineTo(0.12 - st * 0.16, 0);
  g.lineTo(0.13, -0.92);
  g.closePath();
  g.fill();
  const sy = -1.4 + br,
    fl = Math.sin(t * 1.9) * 0.01 * (s.wind ?? 0.4);
  g.fillStyle = shirt;
  g.beginPath();
  g.moveTo(-0.15 + fl, -0.86);
  g.quadraticCurveTo(-0.2, -1.15, -0.18, sy);
  g.lineTo(0.18, sy);
  g.quadraticCurveTo(0.2, -1.15, 0.15 + fl, -0.86);
  g.closePath();
  g.fill();
  g.strokeStyle = shirt;
  g.lineWidth = 0.06;
  g.lineCap = "round";
  g.beginPath();
  if (X < 0.01) {
    g.moveTo(-0.17, sy + 0.04);
    g.quadraticCurveTo(-0.3, sy + 0.25, -0.24, -1.02);
    g.moveTo(0.17, sy + 0.04);
    g.quadraticCurveTo(0.22, sy + 0.3, 0.13, -0.92);
  } else if (walking) {
    g.moveTo(-0.17, sy + 0.04);
    g.lineTo(-0.19 - st * 0.12, sy + 0.5);
    g.moveTo(0.17, sy + 0.04);
    g.lineTo(0.19 + st * 0.12, sy + 0.5);
  } else {
    g.moveTo(-0.17, sy + 0.04);
    g.quadraticCurveTo(-0.22, sy + 0.3, -0.13, -0.92);
    g.moveTo(0.17, sy + 0.04);
    g.quadraticCurveTo(0.22, sy + 0.3, 0.13, -0.92);
  }
  g.stroke();
  g.fillStyle = skin;
  g.fillRect(-0.025, sy - 0.07, 0.05, 0.08);
  const hx = X > 0.99 ? -0.02 : -0.025,
    hy = sy - 0.16;
  g.beginPath();
  g.ellipse(hx, hy + 0.01, 0.085, 0.1, 0, 0, 7);
  g.fill();
  g.fillStyle = hair;
  g.beginPath();
  g.moveTo(hx - 0.1, hy + 0.03);
  g.lineTo(hx - 0.12, hy - 0.04);
  g.lineTo(hx - 0.07, hy - 0.06);
  g.lineTo(hx - 0.09, hy - 0.12);
  g.lineTo(hx - 0.02, hy - 0.1);
  g.lineTo(hx + 0.01, hy - 0.15);
  g.lineTo(hx + 0.05, hy - 0.1);
  g.lineTo(hx + 0.12, hy - 0.1);
  g.lineTo(hx + 0.1, hy - 0.03);
  g.lineTo(hx + 0.1, hy + 0.04);
  g.quadraticCurveTo(hx + 0.02, hy - 0.03, hx - 0.04, hy + 0.02);
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(255,176,110," + 0.55 * (1 - d) + ")";
  g.lineWidth = 0.014;
  g.beginPath();
  g.moveTo(-0.15 + fl, -0.86);
  g.quadraticCurveTo(-0.2, -1.15, -0.18, sy);
  g.moveTo(hx - 0.1, hy + 0.03);
  g.lineTo(hx - 0.12, hy - 0.04);
  g.stroke();
  g.restore();
};
if (X < 0.01) {
  man();
  bike();
  g.strokeStyle = shirt;
  g.lineWidth = 0.06;
  g.beginPath();
  g.moveTo(-0.29, -1.12);
  g.lineTo(-0.26, -1.02);
  g.stroke();
  g.fillStyle = skin;
  g.beginPath();
  g.arc(-0.26, -1.01, 0.03, 0, 7);
  g.fill();
} else {
  bike();
  man();
}
