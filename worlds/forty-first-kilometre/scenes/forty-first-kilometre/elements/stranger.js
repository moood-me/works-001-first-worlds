const s = e.state || {};
const mix = (a, b, f) => {
  f = Math.max(0, Math.min(1, f));
  let r = "#";
  for (const i of [1, 3, 5]) {
    r += Math.round(parseInt(a.slice(i, i + 2), 16) * (1 - f) + parseInt(b.slice(i, i + 2), 16) * f)
      .toString(16)
      .padStart(2, "0");
  }
  return r;
};
const near = Math.max(0, Math.min(1, s.near || 0));
const d = 60 * Math.pow(5 / 60, near);
const k = 10 / d;
const fx = 1.0 * k - 1.0,
  fy = 1.7 * k - 1.7;
const pose = s.pose || "standing";
const fog = s.fog != null ? s.fog : 0.6;
const L = s.lamp != null ? s.lamp : 1;
const t = e.t;
const vis = Math.exp(-d / (10 + 40 * (1 - fog)));
const flowers = (hx, hy, warm) => {
  if (s.flowers === false) return;
  g.strokeStyle = "#28322a";
  g.lineWidth = 0.012;
  for (let i = 0; i < 5; i++) {
    const a = (i - 2) * 0.05 + Math.sin(t * 0.7 + i) * 0.004;
    g.beginPath();
    g.moveTo(hx, hy);
    g.lineTo(hx + a * 2.4, hy + 0.28);
    g.stroke();
  }
  g.fillStyle = mix("#6e2826", "#9a4430", warm * 0.4);
  for (let i = 0; i < 5; i++) {
    const a = (i - 2) * 0.05 + Math.sin(t * 0.7 + i) * 0.004;
    g.beginPath();
    g.ellipse(hx + a * 2.5, hy + 0.3 + (i % 2) * 0.025, 0.036, 0.03, 0, 0, 7);
    g.fill();
  }
};
g.save();
g.translate(fx, fy);
g.scale(k, k);
if (pose === "gone") {
  g.globalAlpha = 0.35 + 0.65 * vis;
  if (s.flowers !== false) {
    g.strokeStyle = "#28322a";
    g.lineWidth = 0.012;
    for (let i = 0; i < 5; i++) {
      g.beginPath();
      g.moveTo(-0.2, -0.01);
      g.lineTo(0.1 + i * 0.04, -0.03);
      g.stroke();
    }
    g.fillStyle = "#6e2826";
    for (let i = 0; i < 5; i++) {
      g.beginPath();
      g.ellipse(0.12 + i * 0.04, -0.04 + (i % 2) * 0.02, 0.04, 0.028, 0, 0, 7);
      g.fill();
    }
  }
  g.restore();
  e.at(fx, fy - 0.3 * k);
  return;
}
g.globalAlpha = 0.22 + 0.7 * vis;
const walk = pose === "walking";
const ph = t * 1.5;
const sw = walk ? Math.sin(ph) * 0.1 : 0;
const lift = walk ? Math.abs(Math.sin(ph)) * 0.02 : 0;
const br = Math.sin(t * 0.83) * 0.006 + Math.sin(t * 0.31 + 1) * 0.004;
const tilt = pose === "close" ? 0.38 : 0.2 + Math.sin(t * 0.13) * 0.03;
const warm = L * Math.max(0, Math.min(1, (18 - d) / 12));
if (warm > 0.02) {
  let sg = g.createLinearGradient(0, 0, 2.6, 0);
  sg.addColorStop(0, "rgba(4,7,7," + 0.55 * warm + ")");
  sg.addColorStop(1, "rgba(4,7,7,0)");
  g.fillStyle = sg;
  g.beginPath();
  g.moveTo(-0.16, 0);
  g.lineTo(0.16, 0);
  g.lineTo(2.6, -0.14);
  g.lineTo(2.45, 0.05);
  g.closePath();
  g.fill();
}
g.translate(0, -lift);
let coat = mix("#6c716a", "#a8784e", warm * 0.5);
coat = mix(coat, "#2b302f", (1 - L) * Math.max(0, (18 - d) / 14) * 0.7);
const coatD = mix(coat, "#1b201f", 0.55);
const skin = mix("#8f9289", "#c09068", warm * 0.45);
g.strokeStyle = coatD;
g.lineWidth = 0.055;
g.lineCap = "round";
g.beginPath();
g.moveTo(-0.07, -0.35);
g.lineTo(-0.07 + sw, 0);
g.moveTo(0.07, -0.35);
g.lineTo(0.07 - sw, 0);
g.stroke();
const hem = Math.sin(t * 0.7) * 0.015 + Math.sin(t * 1.3 + 2) * 0.008;
let cg = g.createLinearGradient(0, -1.5, 0, -0.3);
cg.addColorStop(0, coat);
cg.addColorStop(1, coatD);
g.fillStyle = cg;
g.beginPath();
g.moveTo(-0.05, -1.53 + br);
g.quadraticCurveTo(-0.2, -1.52 + br, -0.21, -1.36 + br);
g.quadraticCurveTo(-0.24, -0.8, -0.29 + hem, -0.3);
g.quadraticCurveTo(0, -0.27 + hem, 0.27 + hem, -0.31);
g.quadraticCurveTo(0.23, -0.8, 0.2, -1.36 + br);
g.quadraticCurveTo(0.19, -1.52 + br, 0.05, -1.53 + br);
g.closePath();
g.fill();
g.strokeStyle = coatD;
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(0.02, -1.45);
g.lineTo(0.03, -0.33);
g.stroke();
g.save();
g.translate(0, -1.55 + br);
g.rotate(tilt);
g.fillStyle = skin;
g.fillRect(-0.03, -0.06, 0.06, 0.08);
g.beginPath();
g.ellipse(0, -0.15, 0.085, 0.115, 0, 0, 7);
g.fill();
g.fillStyle = "#161a19";
g.beginPath();
g.moveTo(-0.1, -0.16);
g.quadraticCurveTo(-0.1, -0.29, 0, -0.28);
g.quadraticCurveTo(0.1, -0.29, 0.1, -0.16);
g.quadraticCurveTo(0.12, 0.02, 0.09 + Math.sin(t * 0.5) * 0.01, 0.16);
g.lineTo(0.05, 0.12);
g.quadraticCurveTo(0.06, -0.1, 0.02, -0.2);
g.quadraticCurveTo(-0.06, -0.12, -0.06, 0.12);
g.lineTo(-0.11 + Math.sin(t * 0.45 + 1) * 0.01, 0.14);
g.quadraticCurveTo(-0.12, 0, -0.1, -0.16);
g.fill();
g.restore();
g.strokeStyle = mix(coat, coatD, 0.3);
g.lineWidth = 0.058;
const swing = walk ? -sw * 0.6 : Math.sin(t * 0.5) * 0.012;
const wv = Math.sin(t * 0.9) * 0.05;
g.beginPath();
g.moveTo(-0.17, -1.44 + br);
if (pose === "waving") {
  g.quadraticCurveTo(-0.38, -1.6, -0.4 + wv, -2.0);
} else {
  g.quadraticCurveTo(-0.26, -1.0, -0.25 + swing, -0.42);
}
g.stroke();
let hx, hy;
g.beginPath();
g.moveTo(0.17, -1.44 + br);
if (pose === "close") {
  hx = 0.04;
  hy = -1.0;
  g.quadraticCurveTo(0.3, -1.1, hx, hy);
} else {
  hx = 0.26 - swing;
  hy = -0.42;
  g.quadraticCurveTo(0.27, -1.0, hx, hy);
}
g.stroke();
g.fillStyle = skin;
g.beginPath();
g.ellipse(hx, hy + 0.02, 0.026, 0.045, 0, 0, 7);
g.fill();
if (pose === "waving") {
  g.beginPath();
  g.ellipse(-0.4 + wv, -2.03, 0.026, 0.045, wv, 0, 7);
  g.fill();
} else {
  g.beginPath();
  g.ellipse(-0.25 + swing, -0.4, 0.026, 0.045, 0, 0, 7);
  g.fill();
}
flowers(hx, hy + 0.03, warm);
g.restore();
e.at(fx, fy - 1.95 * k);
