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
c.scale(0.0125, 0.0125);
const ph = t % 3.2,
  d = ph < 0.5 ? Math.sin((ph / 0.5) * PI) : 0,
  hx = d * 3.5,
  hy = d * 6;
c.strokeStyle = "#e08c8c";
c.lineWidth = 1.1;
c.beginPath();
c.moveTo(-2, -2);
c.lineTo(-2, 1);
c.moveTo(3, -2);
c.lineTo(3, 1);
c.stroke();
c.fillStyle = "#5c6573";
c.beginPath();
c.moveTo(-8, -10);
c.lineTo(-20, -6);
c.lineTo(-19, -12);
c.closePath();
c.fill();
const gg = c.createLinearGradient(0, -16, 0, -1);
gg.addColorStop(0, "#b9c2cf");
gg.addColorStop(1, "#7f8998");
c.fillStyle = gg;
E(c, 0, -8, 11.5, 7.5);
c.fill();
c.fillStyle = "#98a2b1";
E(c, -3, -9, 8, 4.8, -0.2);
c.fill();
c.strokeStyle = "#3e4552";
c.lineWidth = 1.2;
c.beginPath();
c.moveTo(-6, -7);
c.lineTo(-1, -8.5);
c.moveTo(-7, -5);
c.lineTo(-2, -6.2);
c.stroke();
const ng = c.createLinearGradient(3, -18, 9, -9);
ng.addColorStop(0, "#58ad82");
ng.addColorStop(1, "#8c5aac");
c.fillStyle = ng;
E(c, 6 + hx * 0.4, -13 + hy * 0.4, 4.6, 5.4);
c.fill();
c.fillStyle = "#a8b1be";
E(c, 8.5 + hx, -19 + hy, 4.9, 4.6);
c.fill();
c.fillStyle = "#e3d1b0";
c.beginPath();
c.moveTo(12.8 + hx, -19.6 + hy);
c.lineTo(16.5 + hx, -18.2 + hy);
c.lineTo(12.8 + hx, -17.6 + hy);
c.fill();
if (blink(t, 2.1)) {
  c.strokeStyle = "#333";
  c.lineWidth = 0.8;
  c.beginPath();
  c.moveTo(8.8 + hx, -20 + hy);
  c.lineTo(11.4 + hx, -20 + hy);
  c.stroke();
} else {
  c.fillStyle = "#f08a2b";
  E(c, 10 + hx, -20 + hy, 1.7, 1.7);
  c.fill();
  c.fillStyle = "#111";
  E(c, 10.2 + hx, -20 + hy, 0.8, 0.8);
  c.fill();
}
const fg = c.createLinearGradient(5, -31, 12, -23);
fg.addColorStop(0, "#ffffff");
fg.addColorStop(0.5, "#b9bec6");
fg.addColorStop(1, "#eef0f3");
c.fillStyle = fg;
c.beginPath();
c.moveTo(4.5 + hx, -22.5 + hy);
c.lineTo(12.5 + hx, -22.8 + hy);
c.lineTo(8.2 + hx, -32 + hy);
c.closePath();
c.fill();
