const c = g,
  t = e.t,
  tk = false,
  RM = false,
  PI = Math.PI,
  TAU = PI * 2;
const E = (c, x, y, rx, ry, rot) => {
  c.beginPath();
  c.ellipse(x, y, Math.max(0.1, rx), Math.max(0.1, ry), rot || 0, 0, TAU);
};
const RR = (c, x, y, w, h, r) => {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
};
const blink = (t, s) => (t + s) % 4.6 < 0.14;
const mouth = (c, x, y, on, t, w) => {
  if (on) {
    c.fillStyle = "#5b2330";
    E(c, x, y, w || 1.8, 0.8 + Math.abs(Math.sin(t * 14)) * 1.5);
    c.fill();
  } else {
    c.strokeStyle = "#6b3a2a";
    c.lineWidth = 0.8;
    c.beginPath();
    c.arc(x, y - 1, 1.8, 0.2 * PI, 0.8 * PI);
    c.stroke();
  }
};
const eyes = (c, x1, x2, y, t, s, col) => {
  if (blink(t, s)) {
    c.strokeStyle = "#3a2a20";
    c.lineWidth = 0.9;
    c.beginPath();
    c.moveTo(x1 - 1.4, y);
    c.lineTo(x1 + 1.4, y);
    c.moveTo(x2 - 1.4, y);
    c.lineTo(x2 + 1.4, y);
    c.stroke();
    return;
  }
  c.fillStyle = col || "#2a1d18";
  E(c, x1, y, 1.2, 1.5);
  c.fill();
  E(c, x2, y, 1.2, 1.5);
  c.fill();
  c.fillStyle = "rgba(255,255,255,.9)";
  E(c, x1 + 0.4, y - 0.5, 0.4, 0.4);
  c.fill();
  E(c, x2 + 0.4, y - 0.5, 0.4, 0.4);
  c.fill();
};
const shadow = (w) => {
  c.fillStyle = "rgba(40,30,20,.22)";
  E(c, 4, 0, w, w * 0.28);
  c.fill();
};

// the bench behind her, then her (the demo's drawing, px → metres)
c.fillStyle = "rgba(40,30,20,.18)";
E(c, 0, 0, 1.9, 0.2);
c.fill();
c.fillStyle = "#7a5132";
for (const lx of [-1.5, -1.3, 1.2, 1.4]) c.fillRect(lx, -0.45, 0.08, 0.45);
c.fillStyle = "#9a6a3f";
RR(c, -1.7, -0.55, 3.4, 0.14, 0.05);
c.fill();
c.fillStyle = "#8a5c35";
RR(c, -1.65, -1.0, 3.3, 0.12, 0.05);
c.fill();
RR(c, -1.65, -0.8, 3.3, 0.12, 0.05);
c.fill();
c.fillStyle = "#7a5132";
c.fillRect(-1.5, -1.0, 0.08, 0.46);
c.fillRect(1.35, -1.0, 0.08, 0.46);
c.scale(0.024, 0.024);
const a = Math.sin(t * 7) * 0.35;
c.fillStyle = "#4f4040";
c.fillRect(-8, -17, 5, 14);
c.fillRect(3, -17, 5, 14);
c.fillStyle = "#2e2424";
E(c, -6, -2.5, 5, 2.5);
c.fill();
E(c, 6.5, -2.5, 5, 2.5);
c.fill();
c.strokeStyle = "#c8433a";
c.lineWidth = 0.7;
c.beginPath();
c.moveTo(1, -27);
c.quadraticCurveTo(14, -14, 21, -5);
c.stroke();
c.fillStyle = "#c8433a";
E(c, 21, -4.5, 4.6, 4.4);
c.fill();
c.strokeStyle = "rgba(120,20,20,.6)";
c.beginPath();
c.arc(21, -4.5, 2.6, 0.3, 2.8);
c.stroke();
const sg = c.createLinearGradient(0, -34, 0, -14);
sg.addColorStop(0, "#7c4274");
sg.addColorStop(1, "#5c2f57");
c.fillStyle = sg;
c.beginPath();
c.moveTo(-18, -14);
c.quadraticCurveTo(-18, -24, -12, -32);
c.lineTo(12, -32);
c.quadraticCurveTo(18, -24, 18, -14);
c.closePath();
c.fill();
c.fillStyle = "#b6799e";
c.beginPath();
c.moveTo(-12, -31);
c.quadraticCurveTo(-13, -44, -6, -46);
c.lineTo(6, -46);
c.quadraticCurveTo(13, -44, 12, -31);
c.closePath();
c.fill();
c.fillStyle = "#8f5a80";
c.beginPath();
c.moveTo(-3, -46);
c.lineTo(3, -46);
c.lineTo(0, -36);
c.fill();
c.fillStyle = "#e8698f";
RR(c, -7, -33, 14, 7, 2);
c.fill();
c.save();
c.strokeStyle = "#e2e2e2";
c.lineWidth = 1.1;
c.translate(-2, -29);
c.rotate(-0.9 + a);
c.beginPath();
c.moveTo(0, 0);
c.lineTo(0, -13);
c.stroke();
c.restore();
c.save();
c.strokeStyle = "#e2e2e2";
c.lineWidth = 1.1;
c.translate(2, -29);
c.rotate(0.9 - a);
c.beginPath();
c.moveTo(0, 0);
c.lineTo(0, -13);
c.stroke();
c.restore();
c.fillStyle = "#f0c19d";
E(c, -4 + a * 2, -30, 2.6, 2.3);
c.fill();
E(c, 4 - a * 2, -30, 2.6, 2.3);
c.fill();
const hy = -54;
c.fillStyle = "#f3c6a2";
E(c, 0, hy, 8, 8.6);
c.fill();
c.fillStyle = "rgba(235,120,120,.35)";
E(c, -4.5, hy + 2.5, 2, 1.4);
c.fill();
E(c, 4.5, hy + 2.5, 2, 1.4);
c.fill();
eyes(c, -3, 3, hy - 0.5, t, 0.7);
c.strokeStyle = "#8a7a6a";
c.lineWidth = 0.6;
c.beginPath();
c.arc(-3, hy - 0.5, 2.4, 0, TAU);
c.moveTo(5.4, hy - 0.5);
c.arc(3, hy - 0.5, 2.4, 0, TAU);
c.moveTo(-0.6, hy - 0.8);
c.lineTo(0.6, hy - 0.8);
c.stroke();
mouth(c, 0, hy + 4.5, tk, t);
const scarf = () => {
  c.beginPath();
  c.moveTo(-9.5, hy + 6);
  c.quadraticCurveTo(-13, hy - 13, 0, hy - 13);
  c.quadraticCurveTo(13, hy - 13, 9.5, hy + 6);
  c.lineTo(7, hy + 4);
  c.quadraticCurveTo(8, hy - 6, 0, hy - 6.5);
  c.quadraticCurveTo(-8, hy - 6, -7, hy + 4);
  c.closePath();
};
c.fillStyle = "#d2433a";
scarf();
c.fill();
c.save();
scarf();
c.clip();
c.fillStyle = "rgba(255,245,230,.85)";
for (let yy = -14; yy < 8; yy += 4)
  for (let xx = -12; xx < 12; xx += 4) {
    E(c, xx + ((yy / 4) % 2 ? 2 : 0), hy + yy, 0.7, 0.7);
    c.fill();
  }
c.restore();
c.fillStyle = "#b83630";
E(c, -2, hy + 9, 2.6, 1.8, 0.5);
c.fill();
E(c, 2, hy + 9, 2.6, 1.8, -0.5);
c.fill();
