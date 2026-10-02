const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const L = e.state.lantern ?? 0.55;
g.fillStyle = "#090f1b";
g.beginPath();
g.moveTo(-60, 0.8);
for (let x = -60; x <= 60; x += 1.5) g.lineTo(x, 0.15 * Math.sin(x * 0.7) + 0.1 * h(x * 3 + 77) - 0.05);
g.lineTo(60, 0.8);
g.closePath();
g.fill();
g.strokeStyle = "#0a101c";
g.lineWidth = 0.025;
g.beginPath();
for (let i = 0; i < 160; i++) {
  const x = -60 + 120 * h(i + 50);
  const hh = 0.15 + 0.35 * h(i + 51);
  const lx = (h(i + 52) - 0.5) * 0.25;
  g.moveTo(x, 0.05);
  g.quadraticCurveTo(x, -hh * 0.5, x + lx, -hh);
}
g.stroke();
const T = [
  [-28, 1.2],
  [-21, 1.0],
  [-15.5, 0.75],
  [-10.8, 1.15],
  [-6.4, 0.65],
  [-3.4, 0.9],
  [3.1, 0.8],
  [6.9, 1.25],
  [11.5, 0.7],
  [16, 1.05],
  [24, 0.9],
  [31, 1.1],
];
const top = -42;
for (let i = 0; i < T.length; i++) {
  const x = T[i][0],
    w = T[i][1];
  const ln = (h(i + 200) - 0.5) * 0.03;
  const X = (y) => x - ln * y;
  g.fillStyle = "#070c17";
  g.beginPath();
  g.moveTo(x - w * 1.25, 0.2);
  g.bezierCurveTo(x - w * 0.6, 0.1, x - w * 0.5, -0.5, X(-1.5) - w / 2, -1.5);
  g.lineTo(X(top) - w * 0.4, top);
  g.lineTo(X(top) + w * 0.4, top);
  g.lineTo(X(-1.5) + w / 2, -1.5);
  g.bezierCurveTo(x + w * 0.5, -0.5, x + w * 0.6, 0.1, x + w * 1.3, 0.2);
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(20,28,45,0.7)";
  g.lineWidth = 0.03;
  for (let b = 0; b < 5; b++) {
    const bx = (h(i * 9 + b) - 0.5) * w * 0.7;
    const y0 = -0.5 - 3 * h(i * 9 + b + 30),
      y1 = y0 - 4 - 10 * h(i * 9 + b + 60);
    g.beginPath();
    g.moveTo(X(y0) + bx, y0);
    g.lineTo(X(y1) + bx * 0.95, y1);
    g.stroke();
  }
  const rg = g.createLinearGradient(0, -25, 0, 0);
  rg.addColorStop(0, "rgba(150,170,215,0.26)");
  rg.addColorStop(1, "rgba(150,170,215,0.07)");
  g.strokeStyle = rg;
  g.lineWidth = w * 0.07;
  g.beginPath();
  g.moveTo(X(-1.5) + w * 0.46, -1.5);
  g.lineTo(X(top) + w * 0.36, top);
  g.stroke();
  if (h(i + 300) < 0.5) {
    const by = -5 - 9 * h(i + 301),
      d = h(i + 302) < 0.5 ? -1 : 1;
    g.strokeStyle = "#070c17";
    g.lineCap = "round";
    g.lineWidth = 0.12;
    g.beginPath();
    g.moveTo(X(by), by);
    g.quadraticCurveTo(X(by) + d * 1.2, by - 0.4, X(by) + d * (2 + 1.5 * h(i + 303)), by - 1.5 - h(i + 304));
    g.stroke();
    g.lineWidth = 0.05;
    g.beginPath();
    g.moveTo(X(by) + d * 1.3, by - 0.55);
    g.lineTo(X(by) + d * 1.8, by + 0.2);
    g.stroke();
  }
  if (L > 0.01 && Math.abs(x) < 4) {
    const s = x < 0 ? 1 : -1;
    const lg = g.createLinearGradient(0, -4, 0, 0);
    lg.addColorStop(0, "rgba(255,180,110,0)");
    lg.addColorStop(1, "rgba(255,180,110," + 0.12 * L + ")");
    g.strokeStyle = lg;
    g.lineWidth = w * 0.06;
    g.beginPath();
    g.moveTo(X(-0.6) + s * w * 0.52, -0.6);
    g.lineTo(X(-4) + s * w * 0.45, -4);
    g.stroke();
  }
}
