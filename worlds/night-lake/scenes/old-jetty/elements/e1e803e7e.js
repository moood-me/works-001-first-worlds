const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t;
const S = (sg, al) => {
  for (let i = 0; i < 8; i++) {
    const q = i + 40;
    const bx = -1.1 + 2.0 * h(q);
    const H = 0.7 + 0.8 * h(q + 1);
    const lean = (h(q + 2) - 0.6) * 0.45;
    const sw = 0.045 * Math.sin(t * (0.3 + 0.2 * h(q + 3)) + i * 2.3) + 0.02 * Math.sin(t * (0.8 + 0.3 * h(q + 4)) + i);
    const tx = bx + lean * H + sw * H,
      ty = -H;
    const cx = bx + lean * H * 0.3,
      cy = -H * 0.5;
    g.globalAlpha = al;
    g.strokeStyle = "#0a101c";
    g.lineCap = "round";
    g.lineWidth = 0.014 + 0.01 * h(q + 5);
    g.beginPath();
    g.moveTo(bx, 0.02 * sg);
    g.quadraticCurveTo(cx, cy * sg, tx, ty * sg);
    g.stroke();
    if (h(q + 6) < 0.4) {
      const s = 0.85,
        qx = (1 - s) * (1 - s) * bx + 2 * (1 - s) * s * cx + s * s * tx,
        qy = 2 * (1 - s) * s * cy + s * s * ty;
      const an = Math.atan2((ty - cy) * sg, tx - cx);
      g.fillStyle = "#0a0d17";
      g.beginPath();
      g.ellipse(qx, qy * sg, 0.09, 0.026, an, 0, 6.283);
      g.fill();
    }
  }
};
g.save();
g.translate(Math.sin(t * 0.6) * 0.02, 0);
S(-1, 0.22);
g.restore();
S(1, 1);
g.globalAlpha = 1;
