const st = e.state,
  t = e.t;
if (st.keeper_present === false) return;
const fl =
  1 +
  0.05 * Math.sin(t * 7.3) +
  0.035 * Math.sin(t * 12.7 + 1.3) +
  0.06 * Math.sin(t * 1.9 + 0.4) * Math.sin(t * 0.53);
const L = Math.max(0, (st.lamp ?? 0.6) * (1 - 0.85 * (st.shutter || 0)) * fl);
const pose = st.keeper_pose || "stand";
// where he stands for each pose: [across, distance, facing 1 right / -1 left]
const POS = {
  stand: [0.55, 3.05, 1],
  window: [1.3, 3.9, 1],
  write: [1.0, 2.8, 1],
  shutter: [0.62, 2.45, -1],
  lamp: [0.6, 2.5, -1],
};
const Q = POS[pose] || POS.stand,
  d = Q[1],
  f = Q[2];
const s = 2.59 / d,
  X = Q[0] * s - 0.6,
  Y = -1.7 + 1.7 * s;
const br = Math.sin(t * 1.25) * 0.008 + Math.sin(t * 0.37 + 1) * 0.004;
const DK = "#15110e",
  ls = -f;
const part = (fn) => {
  g.beginPath();
  fn();
  g.fillStyle = DK;
  g.fill();
  g.save();
  g.clip();
  const gr = g.createLinearGradient(ls * 0.3, 0, ls * 0.02, 0);
  gr.addColorStop(0, `rgba(255,176,100,${Math.min(0.6, 0.5 * L)})`);
  gr.addColorStop(1, "rgba(255,176,100,0)");
  g.fillStyle = gr;
  g.fillRect(-1, -2.6, 2, 2.8);
  g.restore();
};
const limb = (pts, w) => {
  g.strokeStyle = DK;
  g.lineWidth = w;
  g.lineCap = "round";
  g.lineJoin = "round";
  g.beginPath();
  pts.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])));
  g.stroke();
};
let hx = 0,
  hy = -1.6;
g.save();
g.translate(X, Y);
g.scale(s * f, s);
if (pose === "write") {
  // seated behind the table, bent over the logbook; the table hides his lap
  const wr = Math.sin(t * 2.3) * 0.02 + Math.sin(t * 0.7) * 0.015;
  limb(
    [
      [-0.2, -1.12],
      [-0.27, -0.9],
      [-0.16, -0.62],
    ],
    0.1,
  );
  limb(
    [
      [0.2, -1.12],
      [0.26, -0.9],
      [0.14 + wr, -0.62],
    ],
    0.1,
  );
  part(() => {
    g.moveTo(-0.23, -0.55);
    g.quadraticCurveTo(-0.27, -0.95, -0.22, -1.17 + br);
    g.quadraticCurveTo(-0.1, -1.25 + br, 0, -1.25 + br);
    g.quadraticCurveTo(0.1, -1.25 + br, 0.22, -1.17 + br);
    g.quadraticCurveTo(0.27, -0.95, 0.23, -0.55);
    g.closePath();
  });
  const hyl = -1.28 + br;
  part(() => g.ellipse(0.01, hyl, 0.1, 0.105, 0, 0, 7));
  part(() => {
    g.moveTo(-0.11, hyl - 0.02);
    g.quadraticCurveTo(-0.09, hyl - 0.15, 0.01, hyl - 0.15);
    g.quadraticCurveTo(0.11, hyl - 0.15, 0.12, hyl - 0.02);
    g.closePath();
  });
  part(() => g.ellipse(0.01, hyl - 0.01, 0.13, 0.028, 0, 0, 7));
  hx = 0.01;
  hy = hyl;
} else {
  const hang = [
      [-0.06, -1.35],
      [-0.09, -1.05],
      [-0.05, -0.84],
    ],
    sw = Math.sin(t * 0.9) * 0.01;
  const C = {
    stand: {
      lean: 0.04 + Math.sin(t * 0.31) * 0.012,
      tilt: 0.3,
      back: [
        [-0.04, -1.36],
        [-0.15, -1.12],
        [-0.16, -0.92],
      ],
    },
    window: {
      lean: 0.08,
      tilt: 0.1,
      back: hang,
      front: [
        [0.04, -1.36],
        [0.2, -1.34],
        [0.3, -1.56],
      ],
      hand: [0.3, -1.58],
    },
    shutter: {
      lean: 0.03,
      tilt: -0.25,
      back: hang,
      front: [
        [0.04, -1.37],
        [0.2, -1.42],
        [0.34 + sw, -1.62],
      ],
      hand: [0.34 + sw, -1.64],
    },
    lamp: {
      lean: 0.32,
      tilt: 0.2,
      back: [
        [-0.06, -1.35],
        [-0.05, -1.08],
        [0.02, -0.92],
      ],
      front: [
        [0.04, -1.36],
        [0.22, -1.24],
        [0.4, -1.22],
      ],
      hand: [0.41, -1.22],
    },
  }[pose] || { lean: 0.04, tilt: 0.3, back: hang };
  // legs and boots
  part(() => {
    g.moveTo(-0.13, -0.88);
    g.lineTo(-0.12, -0.06);
    g.lineTo(-0.16, 0);
    g.lineTo(0.0, 0);
    g.lineTo(-0.02, -0.07);
    g.lineTo(0.0, -0.5);
    g.lineTo(0.04, -0.07);
    g.lineTo(0.03, 0);
    g.lineTo(0.21, 0);
    g.lineTo(0.13, -0.07);
    g.lineTo(0.12, -0.88);
    g.closePath();
  });
  g.save();
  g.translate(0, -0.85);
  g.rotate(C.lean);
  g.translate(0, 0.85);
  limb(C.back, 0.095);
  // pea coat, shoulders gone a little round with the years
  part(() => {
    g.moveTo(-0.17, -0.58);
    g.quadraticCurveTo(-0.23, -1.05, -0.2, -1.33 + br);
    g.quadraticCurveTo(-0.15, -1.47 + br, -0.02, -1.48 + br);
    g.quadraticCurveTo(0.13, -1.47 + br, 0.16, -1.36 + br);
    g.quadraticCurveTo(0.21, -1.0, 0.17, -0.58);
    g.closePath();
  });
  part(() => g.ellipse(0.02, -1.47 + br, 0.12, 0.05, 0, 0, 7));
  const hxl = 0.07 + C.tilt * 0.05,
    hyl = -1.6 + br + Math.abs(C.tilt) * 0.03;
  part(() => g.ellipse(hxl, hyl, 0.095, 0.112, 0.2, 0, 7));
  part(() => g.ellipse(hxl + 0.06, hyl + 0.07, 0.06, 0.05, 0.4, 0, 7));
  part(() => {
    g.moveTo(hxl - 0.105, hyl - 0.02);
    g.quadraticCurveTo(hxl - 0.09, hyl - 0.14, hxl + 0.02, hyl - 0.14);
    g.quadraticCurveTo(hxl + 0.1, hyl - 0.13, hxl + 0.11, hyl - 0.06);
    g.lineTo(hxl + 0.19, hyl - 0.045);
    g.lineTo(hxl + 0.1, hyl - 0.02);
    g.closePath();
  });
  if (C.front) limb(C.front, 0.1);
  if (C.hand) {
    g.fillStyle = DK;
    g.beginPath();
    g.arc(C.hand[0], C.hand[1], 0.045, 0, 7);
    g.fill();
  }
  g.restore();
  const ry = hyl + 0.85,
    cs = Math.cos(C.lean),
    sn = Math.sin(C.lean);
  hx = hxl * cs - ry * sn;
  hy = hxl * sn + ry * cs - 0.85;
}
g.restore();
e.at(X + s * f * hx, Y + s * (hy - 0.15));
