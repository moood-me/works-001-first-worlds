if (e.state.wick_present === false) return;
const P = e.state.wick_pose || "watching",
  t = e.t,
  br = 1 + 0.015 * Math.sin(t * 1.9 + 0.4 * Math.sin(t * 0.7));
const I = 0.3 + 0.7 * (e.state.lamp ?? 0.8),
  a = t * 0.55,
  ab = Math.PI - 0.12;
const gl =
  Math.max(Math.pow(Math.max(0, Math.cos(a - ab)), 30), Math.pow(Math.max(0, Math.cos(a - Math.PI - ab)), 30)) * I;
const ef = Math.pow(Math.max(0, Math.sin(t * 0.37) * Math.sin(t * 1.13 + 2)), 6);
const DK = "#07080c",
  RIM = "rgba(135,150,182,0.62)",
  E = (x, y, rx, ry, r) => {
    g.beginPath();
    g.ellipse(x, y, rx, ry, r || 0, 0, 7);
    g.fill();
  },
  tri = (p) => {
    g.beginPath();
    g.moveTo(p[0], p[1]);
    g.lineTo(p[2], p[3]);
    g.lineTo(p[4], p[5]);
    g.closePath();
    g.fill();
  };
let hx, hy, shape, tail;
if (P === "crouching") {
  const wig = 0.006 * Math.sin(t * 9) * Math.pow(Math.max(0, Math.sin(t * 0.45)), 12);
  hx = 0.19;
  hy = -0.105 + 0.003 * Math.sin(t * 0.8);
  shape = () => {
    E(-0.01, -0.075 * br, 0.17, 0.062 * br, 0.06);
    E(-0.12 + wig, -0.095, 0.075, 0.072);
    E(0.1, -0.08, 0.06, 0.06);
    g.fillRect(0.12, -0.03, 0.07, 0.03);
    E(hx, hy, 0.058, 0.05, 0.35);
    E(hx + 0.045, hy + 0.025, 0.028, 0.02, 0.4);
    tri([hx - 0.04, hy - 0.03, hx - 0.078, hy - 0.07, hx - 0.01, hy - 0.046]);
    tri([hx, hy - 0.048, hx - 0.02, hy - 0.095, hx + 0.035, hy - 0.035]);
  };
  tail = () => {
    g.beginPath();
    g.moveTo(-0.17, -0.07);
    g.quadraticCurveTo(-0.3, -0.06, -0.4, -0.045 + 0.025 * Math.sin(t * 3.1) * Math.sin(t * 0.9));
    g.stroke();
  };
} else if (P === "looking_back") {
  hx = 0.06;
  hy = -0.29 + 0.004 * Math.sin(t * 0.43);
  shape = () => {
    E(-0.05, -0.1 * br, 0.125, 0.1 * br);
    E(0.05, -0.15 * br, 0.07, 0.13 * br, 0.15);
    g.fillRect(0.03, -0.1, 0.03, 0.1);
    g.fillRect(0.075, -0.09, 0.028, 0.09);
    E(0.06, -0.235, 0.05, 0.05);
    E(hx, hy, 0.062, 0.056);
    tri([hx - 0.056, hy - 0.012, hx - 0.05, hy - 0.1 - ef * 0.01, hx - 0.012, hy - 0.05]);
    tri([hx + 0.012, hy - 0.05, hx + 0.05, hy - 0.1, hx + 0.056, hy - 0.012]);
  };
  tail = () => {
    g.beginPath();
    g.moveTo(-0.15, -0.03);
    g.quadraticCurveTo(-0.05, 0.025, 0.14, -0.008);
    g.stroke();
  };
} else {
  hx = 0.1;
  hy = -0.285 + 0.004 * Math.sin(t * 0.43) - 0.006 * (br - 1) * 30;
  const sw = 0.03 * Math.sin(t * 0.8) + 0.015 * Math.sin(t * 1.37),
    sw2 = 0.04 * Math.sin(t * 0.8 - 0.7) + 0.02 * Math.sin(t * 1.37 - 0.5);
  shape = () => {
    E(-0.05, -0.1 * br, 0.125, 0.1 * br);
    E(0.055, -0.15 * br, 0.065, 0.13 * br, 0.28);
    g.fillRect(0.045, -0.1, 0.03, 0.1);
    g.fillRect(0.085, -0.09, 0.028, 0.09);
    E(0.075, -0.235, 0.045, 0.05);
    E(hx, hy, 0.06, 0.053, 0.25);
    E(hx + 0.048, hy + 0.022, 0.03, 0.022, 0.3);
    tri([hx - 0.05, hy - 0.02, hx - 0.045, hy - 0.098, hx - 0.008, hy - 0.05]);
    tri([hx - 0.002, hy - 0.048, hx + 0.03 + ef * 0.015, hy - 0.1 + ef * 0.012, hx + 0.05, hy - 0.02]);
  };
  tail = () => {
    g.beginPath();
    g.moveTo(-0.15, -0.05);
    g.bezierCurveTo(-0.25, -0.03, -0.22 + sw, 0.1, -0.17 + sw2, 0.2);
    g.quadraticCurveTo(-0.15 + sw2, 0.24, -0.12 + sw2, 0.21);
    g.stroke();
  };
}
g.lineCap = "round";
g.lineWidth = 0.034;
g.fillStyle = RIM;
g.strokeStyle = RIM;
shape();
tail();
g.save();
g.translate(-0.008, 0.006);
g.fillStyle = DK;
g.strokeStyle = DK;
shape();
tail();
g.restore();
if (gl > 0.02) {
  g.save();
  g.translate(-0.004, 0);
  g.globalCompositeOperation = "lighter";
  g.globalAlpha = 0.18 * gl;
  g.fillStyle = "#ffd7a0";
  shape();
  g.restore();
}
if (P === "looking_back") {
  const bl = 1 - Math.pow(Math.max(0, Math.sin(t * 0.29)), 40);
  for (const dx of [-0.022, 0.022]) {
    g.fillStyle = "rgba(255,196,100,0.85)";
    E(hx + dx, hy + 0.003, 0.011, 0.007 * bl + 0.0005);
    if (bl > 0.3) e.light(hx + dx, hy + 0.003, 0.05, "#ffc070", 0.25 + 0.5 * gl);
  }
} else {
  const ex = P === "crouching" ? hx + 0.028 : hx + 0.03,
    ey = hy - 0.005;
  g.fillStyle = `rgba(255,200,110,${0.25 + 0.7 * gl})`;
  E(ex, ey, 0.009, 0.005, 0.3);
  if (gl > 0.1) e.light(ex, ey, 0.05, "#ffc070", 0.6 * gl);
}
e.at(hx, hy - 0.06);
