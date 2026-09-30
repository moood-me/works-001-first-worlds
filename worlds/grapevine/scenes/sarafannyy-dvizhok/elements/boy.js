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
c.fillStyle = "rgba(40,30,20,.2)";
E(c, 0, 0, 0.35, 0.09);
c.fill();
c.scale(0.021, 0.021);
const ph = t % 3.6,
  hop = ph < 0.45 ? Math.sin((ph / 0.45) * PI) * 5 : 0;
c.translate(0, -hop);
c.fillStyle = "#f0c09a";
c.fillRect(-5, -15, 3.4, 12);
c.fillRect(1.6, -15, 3.4, 12);
c.fillStyle = "#e0473b";
E(c, -3.5, -2.2, 4, 2.3);
c.fill();
E(c, 3.8, -2.2, 4, 2.3);
c.fill();
c.fillStyle = "#fff";
c.fillRect(-6, -3.2, 5, 1);
c.fillRect(1.5, -3.2, 5, 1);
c.fillStyle = "#6a4a2e";
RR(c, -8, -25, 16, 11, 3);
c.fill();
c.save();
RR(c, -8, -45, 16, 22, 5);
c.clip();
c.fillStyle = "#f6f2ea";
c.fillRect(-8, -45, 16, 22);
c.fillStyle = "#d8443b";
for (let y = -43; y < -23; y += 4.5) c.fillRect(-8, y, 16, 2);
c.restore();
c.fillStyle = "#f0c09a";
c.save();
c.translate(7, -41);
c.rotate(-0.7);
RR(c, -1.6, -12, 3.4, 12, 1.6);
c.fill();
c.restore();
c.save();
c.translate(-7, -41);
c.rotate(0.25);
RR(c, -1.6, 0, 3.4, 12, 1.6);
c.fill();
c.restore();
// the fishing rod over his shoulder
c.strokeStyle = "#c79a5b";
c.lineWidth = 1.4;
c.beginPath();
c.moveTo(9, -48);
c.lineTo(34, -78);
c.stroke();
c.strokeStyle = "rgba(255,255,255,.6)";
c.lineWidth = 0.4;
c.beginPath();
c.moveTo(34, -78);
c.quadraticCurveTo(38, -60, 36, -40 + Math.sin(t * 2) * 2);
c.stroke();
const hy = -54;
c.fillStyle = "#f3c7a2";
E(c, 0, hy, 8, 8.3);
c.fill();
c.fillStyle = "#b8763f";
[
  [-4, 2],
  [-2.5, 3],
  [3.5, 2.4],
  [5, 3.2],
].forEach((f) => {
  E(c, f[0], hy + f[1], 0.5, 0.5);
  c.fill();
});
eyes(c, -2.8, 3, hy - 0.5, t, 0.2);
c.strokeStyle = "#6b3a2a";
c.lineWidth = 0.9;
c.beginPath();
c.arc(0, hy + 2.6, 2.8, 0.15 * PI, 0.85 * PI);
c.stroke();
c.fillStyle = "#3f9a4a";
c.beginPath();
c.arc(0, hy - 2, 8.4, PI, TAU);
c.fill();
c.fillStyle = "#2f7a39";
E(c, -9, hy - 3, 5, 1.6, 0.15);
c.fill();
c.fillStyle = "#fff";
E(c, 0, hy - 10.2, 1.2, 1.2);
c.fill();
