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
c.fillStyle = "rgba(40,30,20,.22)";
E(c, 0, 0, 0.4, 0.12);
c.fill();
c.scale(0.031, 0.031);
c.fillStyle = "#2f3542";
c.beginPath();
c.moveTo(-8, 0);
c.lineTo(8, 0);
c.lineTo(4, -12);
c.lineTo(-4, -12);
c.closePath();
c.fill();
const gg = c.createLinearGradient(-3, 0, 3, 0);
gg.addColorStop(0, "#4e5669");
gg.addColorStop(1, "#262b36");
c.fillStyle = gg;
c.fillRect(-2.6, -96, 5.2, 86);
c.fillStyle = "#3a4150";
RR(c, -4.5, -62, 9, 4, 1.5);
c.fill();
RR(c, -4.5, -97, 9, 4, 1.5);
c.fill();
const gl = c.createLinearGradient(0, -120, 0, -98);
gl.addColorStop(0, "rgba(210,225,232,0.95)");
gl.addColorStop(1, "rgba(182,200,210,0.95)");
c.fillStyle = gl;
c.beginPath();
c.moveTo(-7, -98);
c.lineTo(7, -98);
c.lineTo(10, -119);
c.lineTo(-10, -119);
c.closePath();
c.fill();
c.strokeStyle = "#262b36";
c.lineWidth = 1.4;
c.stroke();
c.beginPath();
c.moveTo(0, -98);
c.lineTo(0, -119);
c.stroke();
c.fillStyle = "#2f3542";
c.beginPath();
c.moveTo(-13, -119);
c.lineTo(13, -119);
c.lineTo(5, -128);
c.lineTo(-5, -128);
c.closePath();
c.fill();
c.fillStyle = "#262b36";
RR(c, -14, -121, 28, 2.6, 1);
c.fill();
E(c, 0, -130, 2.3, 2.3);
c.fill();
const ey = -110;
if (blink(t, 3.3)) {
  c.strokeStyle = "#262b36";
  c.lineWidth = 0.9;
  c.beginPath();
  c.moveTo(-5.5, ey);
  c.lineTo(-2.5, ey);
  c.moveTo(2.5, ey);
  c.lineTo(5.5, ey);
  c.stroke();
} else {
  c.fillStyle = "#262b36";
  E(c, -4, ey, 1.2, 1.5);
  c.fill();
  E(c, 4, ey, 1.2, 1.5);
  c.fill();
}
c.strokeStyle = "#262b36";
c.lineWidth = 1.2;
c.beginPath();
c.moveTo(-5, -104);
c.quadraticCurveTo(-2, -106, 0, -104.5);
c.quadraticCurveTo(2, -106, 5, -104);
c.stroke();
