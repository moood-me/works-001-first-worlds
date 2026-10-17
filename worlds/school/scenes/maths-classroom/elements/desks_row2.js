const D = 4.2,
  E = 1.7,
  L = -3.2,
  S0 = 0.85,
  S1 = 2.85;
const WIN = [
  [1.3, 2.9],
  [3.5, 5.1],
  [5.7, 7.1],
];
const P = (X, h, d) => [(X * D) / d, -(E + ((h - E) * D) / d)];
const poly = (a) => {
  g.beginPath();
  a.forEach((p, i) => {
    const q = P(p[0], p[1], p[2]);
    if (i) g.lineTo(q[0], q[1]);
    else g.moveTo(q[0], q[1]);
  });
  g.closePath();
};
const fp = (a, c) => {
  poly(a);
  g.fillStyle = c;
  g.fill();
};
const ln = (a, b) => {
  const p = P(a[0], a[1], a[2]),
    q = P(b[0], b[1], b[2]);
  g.beginPath();
  g.moveTo(p[0], p[1]);
  g.lineTo(q[0], q[1]);
  g.stroke();
};
const B = (x0, x1, h0, h1, d0, d1, ct, cf, cs) => {
  if (cs) {
    const sx = x1 < 0 ? x1 : x0 > 0 ? x0 : null;
    if (sx !== null)
      fp(
        [
          [sx, h0, d0],
          [sx, h0, d1],
          [sx, h1, d1],
          [sx, h1, d0],
        ],
        cs,
      );
  }
  if (ct && h1 < E)
    fp(
      [
        [x0, h1, d0],
        [x1, h1, d0],
        [x1, h1, d1],
        [x0, h1, d1],
      ],
      ct,
    );
  if (cf)
    fp(
      [
        [x0, h0, d0],
        [x1, h0, d0],
        [x1, h1, d0],
        [x0, h1, d0],
      ],
      cf,
    );
};
const SUN = (ph, fn) =>
  WIN.forEach(([a, b]) => {
    const m = (a + b) / 2;
    [
      [a + 0.07, m - 0.04, S0 + 0.07, 2.22],
      [m + 0.04, b - 0.07, S0 + 0.07, 2.22],
      [a + 0.07, m - 0.04, 2.29, S1 - 0.07],
      [m + 0.04, b - 0.07, 2.29, S1 - 0.07],
    ].forEach((p) => {
      fn(
        [
          [p[0], p[2]],
          [p[1], p[2]],
          [p[1], p[3]],
          [p[0], p[3]],
        ].map((c) => {
          const t = (c[1] - ph) / 0.75;
          return [L + t, ph, c[0] - 0.25 * t];
        }),
      );
    });
  });
const sunOn = (ph, cl) => {
  g.save();
  poly(cl);
  g.clip();
  g.globalCompositeOperation = "screen";
  g.filter = "blur(2px)";
  g.fillStyle = "rgba(255,214,155,0.4)";
  SUN(ph, (q) => {
    poly(q);
    g.fill();
  });
  g.restore();
};
const chair = (cx, cd, a) => {
  const c = Math.cos(a),
    s = Math.sin(a);
  const T = (x, h, z) => [cx + x * c - z * s, h, cd + x * s + z * c];
  const q = (pts, f) =>
    fp(
      pts.map((p) => T(p[0], p[1], p[2])),
      f,
    );
  const tube = (p0, p1) => {
    const A = P(...T(...p0)),
      Z = P(...T(...p1));
    g.strokeStyle = "#3d4842";
    g.lineWidth = (0.022 * D) / cd;
    g.beginPath();
    g.moveTo(A[0], A[1]);
    g.lineTo(Z[0], Z[1]);
    g.stroke();
  };
  q(
    [
      [-0.22, 0, -0.2],
      [0.22, 0, -0.2],
      [0.22, 0, 0.2],
      [-0.22, 0, 0.2],
    ],
    "rgba(35,20,10,0.18)",
  );
  [
    [-0.18, 0.17],
    [0.18, 0.17],
    [-0.18, -0.17],
    [0.18, -0.17],
  ].forEach((l) => tube([l[0], 0, l[1]], [l[0], 0.43, l[1]]));
  q(
    [
      [-0.2, 0.44, -0.19],
      [0.2, 0.44, -0.19],
      [0.2, 0.44, 0.19],
      [-0.2, 0.44, 0.19],
    ],
    "#b48f60",
  );
  q(
    [
      [-0.2, 0.42, -0.19],
      [0.2, 0.42, -0.19],
      [0.2, 0.44, -0.19],
      [-0.2, 0.44, -0.19],
    ],
    "#86664a",
  );
  tube([-0.18, 0.44, -0.2], [-0.18, 0.82, -0.2]);
  tube([0.18, 0.44, -0.2], [0.18, 0.82, -0.2]);
  q(
    [
      [-0.2, 0.58, -0.215],
      [0.2, 0.58, -0.215],
      [0.2, 0.8, -0.215],
      [-0.2, 0.8, -0.215],
    ],
    "#a8835a",
  );
  q(
    [
      [-0.2, 0.8, -0.215],
      [0.2, 0.8, -0.215],
      [0.2, 0.8, -0.2],
      [-0.2, 0.8, -0.2],
    ],
    "#c9a77a",
  );
};
const cols = [-1.7, 0.8, 3.2];
const d0 = D,
  d1 = D + 0.5;
cols.forEach((cx) => {
  const x0 = cx - 0.6,
    x1 = cx + 0.6;
  fp(
    [
      [x0, 0, d0],
      [x1, 0, d0],
      [x1, 0, d1],
      [x0, 0, d1],
    ],
    "rgba(35,20,10,0.2)",
  );
  B(x0 + 0.04, x1 - 0.04, 0.3, 0.7, d1 - 0.04, d1 - 0.02, null, "#6f7d72", null);
  [x0 + 0.05, x1 - 0.08].forEach((lx) => B(lx, lx + 0.03, 0, 0.725, d1 - 0.06, d1 - 0.03, null, "#3f4a44", "#343e39"));
  B(x0 + 0.04, x1 - 0.04, 0.58, 0.61, d0 + 0.1, d1 - 0.04, "#5a4a3a", "#4a3c2f", null);
  [x0 + 0.05, x1 - 0.08].forEach((lx) => B(lx, lx + 0.03, 0, 0.725, d0 + 0.03, d0 + 0.06, null, "#46524b", "#3a443e"));
  B(x0, x1, 0.725, 0.75, d0, d1, "#c6a677", "#94754f", "#a5845c");
  sunOn(0.75, [
    [x0, 0.75, d0],
    [x1, 0.75, d0],
    [x1, 0.75, d1],
    [x0, 0.75, d1],
  ]);
});
const nb = (x, dc) => {
  fp(
    [
      [x - 0.21, 0.752, dc - 0.14],
      [x, 0.752, dc - 0.15],
      [x, 0.752, dc + 0.13],
      [x - 0.21, 0.752, dc + 0.14],
    ],
    "#ebe5d8",
  );
  fp(
    [
      [x, 0.752, dc - 0.15],
      [x + 0.21, 0.752, dc - 0.14],
      [x + 0.21, 0.752, dc + 0.14],
      [x, 0.752, dc + 0.13],
    ],
    "#f2ede2",
  );
  g.strokeStyle = "rgba(110,130,165,0.3)";
  g.lineWidth = e.px * 0.7;
  for (let k = -0.12; k < 0.13; k += 0.03) ln([x - 0.2, 0.753, dc + k], [x + 0.2, 0.753, dc + k]);
  for (let k = -0.18; k < 0.2; k += 0.03) ln([x + k, 0.753, dc - 0.13], [x + k, 0.753, dc + 0.12]);
  g.strokeStyle = "rgba(60,70,110,0.55)";
  g.lineWidth = e.px * 1.2;
  ln([x + 0.05, 0.753, dc - 0.05], [x + 0.15, 0.753, dc - 0.06]);
  ln([x + 0.05, 0.753, dc - 0.02], [x + 0.13, 0.753, dc - 0.02]);
};
nb(-1.45, d0 + 0.25);
B(2.85, 3.07, 0.75, 0.79, d0 + 0.3, d0 + 0.36, "#6d6a58", "#5c5a4a", "#5c5a4a");
fp(
  [
    [3.15, 0.751, d0 + 0.12],
    [3.5, 0.751, d0 + 0.1],
    [3.5, 0.751, d0 + 0.135],
    [3.15, 0.751, d0 + 0.155],
  ],
  "#d8c48e",
);
cols.forEach((cx) =>
  [cx - 0.3, cx + 0.3].forEach((x) =>
    chair(x + (e.rnd() - 0.5) * 0.06, d0 - 0.2 - e.rnd() * 0.14, (e.rnd() - 0.5) * 0.26),
  ),
);
