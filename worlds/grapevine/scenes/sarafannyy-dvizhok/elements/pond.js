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

c.scale(0.045, 0.045);
const b = Math.sin(t * 1.2) * 1.2;
[-9, 9].forEach((dx) => {
  c.fillStyle = "rgba(20,40,60,.25)";
  E(c, dx, b + 2.2, 6, 1.6);
  c.fill();
  c.fillStyle = "#eef6f8";
  E(c, dx, b, 5, 3.6);
  c.fill();
  if (blink(t, 1.9)) {
    c.fillStyle = "#5f9aa8";
    E(c, dx, b, 5.2, 3.8);
    c.fill();
    c.strokeStyle = "#244b5a";
    c.lineWidth = 0.8;
    c.beginPath();
    c.moveTo(dx - 4, b);
    c.lineTo(dx + 4, b);
    c.stroke();
  } else {
    c.fillStyle = "#1b3140";
    E(c, dx + 0.8, b + 0.4, 1.8, 2.1);
    c.fill();
    c.fillStyle = "#fff";
    E(c, dx + 1.3, b - 0.4, 0.6, 0.6);
    c.fill();
  }
});
