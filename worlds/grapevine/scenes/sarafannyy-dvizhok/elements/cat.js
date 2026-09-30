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
// his stump under him
c.fillStyle = "rgba(40,30,20,.2)";
E(c, 0, 0.45, 0.55, 0.1);
c.fill();
c.fillStyle = "#7a5132";
c.fillRect(-0.34, 0, 0.68, 0.45);
c.fillStyle = "#c9a36b";
E(c, 0, 0, 0.34, 0.1);
c.fill();
c.strokeStyle = "rgba(120,80,40,.6)";
c.lineWidth = 0.012;
for (const r of [0.08, 0.16, 0.25]) {
  E(c, 0, 0, r, r * 0.3);
  c.stroke();
}
c.scale(0.0115, 0.0115);
const sw = Math.sin(t * 1.7) * 6,
  br = Math.sin(t * 2) * 0.5;
c.lineCap = "round";
c.strokeStyle = "#c7671d";
c.lineWidth = 5.2;
c.beginPath();
c.moveTo(-8, -4);
c.bezierCurveTo(-24, -2, -26 + sw * 0.3, -18, -19 + sw, -31);
c.stroke();
c.strokeStyle = "#8d4412";
c.lineWidth = 5.4;
c.beginPath();
c.moveTo(-19.5 + sw * 0.95, -28);
c.lineTo(-19 + sw, -31);
c.stroke();
const gg = c.createRadialGradient(-4, -20, 2, 0, -12, 17);
gg.addColorStop(0, "#f7ba6a");
gg.addColorStop(1, "#cc6b20");
c.fillStyle = gg;
E(c, 0, -12, 13.5, 13 + br);
c.fill();
c.strokeStyle = "rgba(135,55,10,.5)";
c.lineWidth = 2;
for (let i = 0; i < 3; i++) {
  c.beginPath();
  c.arc(-2, -12, 9 + i * 0.2, PI * (1.05 + i * 0.17), PI * (1.2 + i * 0.17));
  c.stroke();
}
c.fillStyle = "#fde4c0";
E(c, 6, -10, 6.5, 8.5);
c.fill();
E(c, 2, -1, 4.2, 2.6);
c.fill();
E(c, 9.5, -1, 4.2, 2.6);
c.fill();
const hy = -29;
const hg = c.createRadialGradient(3, hy - 4, 1, 6, hy, 12);
hg.addColorStop(0, "#f8bd6e");
hg.addColorStop(1, "#d27425");
c.fillStyle = hg;
c.beginPath();
c.moveTo(-3, hy - 3);
c.lineTo(-1, hy - 15);
c.lineTo(6, hy - 7);
c.fill();
c.beginPath();
c.moveTo(7, hy - 8);
c.lineTo(14, hy - 15);
c.lineTo(16.5, hy - 2);
c.fill();
E(c, 6, hy, 10.5, 9.5);
c.fill();
c.fillStyle = "#f3a3a8";
c.beginPath();
c.moveTo(-0.5, hy - 5);
c.lineTo(0.5, hy - 11);
c.lineTo(4, hy - 7);
c.fill();
c.beginPath();
c.moveTo(9, hy - 7.5);
c.lineTo(13, hy - 11);
c.lineTo(14, hy - 4);
c.fill();
c.fillStyle = "#fde4c0";
E(c, 9.5, hy + 3.2, 5.2, 3.6);
c.fill();
if (blink(t, 1.3)) {
  c.strokeStyle = "#5a2c10";
  c.lineWidth = 1;
  c.beginPath();
  c.moveTo(1.5, hy - 1);
  c.lineTo(5, hy - 1);
  c.moveTo(9, hy - 1);
  c.lineTo(12.5, hy - 1);
  c.stroke();
} else {
  c.fillStyle = "#a5d75c";
  E(c, 3.3, hy - 1, 2.2, 2.7);
  c.fill();
  E(c, 10.6, hy - 1, 2.2, 2.7);
  c.fill();
  c.fillStyle = "#1c140e";
  E(c, 3.6, hy - 1, 0.75, 2.1);
  c.fill();
  E(c, 10.9, hy - 1, 0.75, 2.1);
  c.fill();
}
c.fillStyle = "#e87d8c";
c.beginPath();
c.moveTo(8.3, hy + 1.3);
c.lineTo(10.7, hy + 1.3);
c.lineTo(9.5, hy + 2.8);
c.fill();
c.strokeStyle = "rgba(255,255,255,.75)";
c.lineWidth = 0.5;
c.beginPath();
c.moveTo(13, hy + 3);
c.lineTo(20, hy + 1.5);
c.moveTo(13, hy + 4);
c.lineTo(20, hy + 5);
c.moveTo(6, hy + 3);
c.lineTo(0, hy + 2);
c.stroke();
