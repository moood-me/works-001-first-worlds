const T = -11,
  sy = (t) => T * (1 - Math.pow(1 - t, 1.6)),
  hw = (y) => 3 - 1.9 * (y / T);
const L = e.state.lanterns ?? 12;
for (const side of [-1, 1]) {
  const pts = [];
  for (let k = 0; k < 6; k++) {
    const t = 0.03 + k * 0.165,
      y = sy(t),
      s = hw(y) / 3;
    pts.push([side * (hw(y) + 0.6 * s), y, s, t, k]);
  }
  g.strokeStyle = "rgba(14,9,16,0.95)";
  for (const [x, y, s] of pts) {
    g.lineWidth = 0.1 * s;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x, y - 2.6 * s);
    g.stroke();
  }
  g.lineWidth = 0.03;
  g.beginPath();
  for (let k = 0; k < 5; k++) {
    const [x0, y0, s0] = pts[k],
      [x1, y1, s1] = pts[k + 1];
    g.moveTo(x0, y0 - 2.5 * s0);
    g.quadraticCurveTo((x0 + x1) / 2, (y0 + y1) / 2 - (2.5 * (s0 + s1)) / 2 + 0.4, x1, y1 - 2.5 * s1);
  }
  g.stroke();
  for (const [x, y, s, t, k] of pts) {
    const n = (5 - k) * 2 + (side > 0 ? 1 : 0),
      lit = n >= 12 - L;
    const cx = x - side * 0.05 * s,
      cy = y - 1.95 * s + Math.sin(e.t * 0.8 + n * 1.7) * 0.03 * s,
      rx = 0.38 * s,
      ry = 0.52 * s;
    g.strokeStyle = "rgba(14,9,16,0.9)";
    g.lineWidth = 0.025;
    g.beginPath();
    g.moveTo(cx, y - 2.5 * s);
    g.lineTo(cx, cy - ry);
    g.stroke();
    if (lit) {
      const f = 0.85 + 0.15 * Math.sin(e.t * 7.3 + n) * Math.sin(e.t * 3.1 + n * 2);
      const lg = g.createRadialGradient(cx, cy, 0, cx, cy, ry);
      lg.addColorStop(0, "#ffe6b0");
      lg.addColorStop(0.55, "#f08a48");
      lg.addColorStop(1, "#a3321e");
      g.fillStyle = lg;
      g.globalAlpha = 0.8 + 0.2 * f;
      g.beginPath();
      g.ellipse(cx, cy, rx, ry, 0, 0, 7);
      g.fill();
      g.globalAlpha = 1;
      g.fillStyle = "rgba(150,20,20,0.55)";
      g.fillRect(cx - rx * 0.95, cy - ry * 0.1, rx * 1.9, ry * 0.22);
      g.strokeStyle = "rgba(120,30,20,0.35)";
      g.lineWidth = 0.015;
      for (let j = -2; j <= 2; j++) {
        g.beginPath();
        g.moveTo(cx - rx * 0.97, cy + j * ry * 0.3);
        g.lineTo(cx + rx * 0.97, cy + j * ry * 0.3);
        g.stroke();
      }
      e.light(cx, cy, 3 * s, "#ff9850", 0.55 * f);
    } else {
      g.fillStyle = "#2b1f27";
      g.beginPath();
      g.ellipse(cx, cy, rx, ry, 0, 0, 7);
      g.fill();
      g.strokeStyle = "rgba(70,50,60,0.6)";
      g.lineWidth = 0.015;
      for (let j = -2; j <= 2; j++) {
        g.beginPath();
        g.moveTo(cx - rx * 0.97, cy + j * ry * 0.3);
        g.lineTo(cx + rx * 0.97, cy + j * ry * 0.3);
        g.stroke();
      }
    }
    g.fillStyle = "#120a0e";
    g.fillRect(cx - rx * 0.6, cy - ry - 0.06 * s, rx * 1.2, 0.1 * s);
    g.fillRect(cx - rx * 0.6, cy + ry - 0.04 * s, rx * 1.2, 0.1 * s);
  }
}
