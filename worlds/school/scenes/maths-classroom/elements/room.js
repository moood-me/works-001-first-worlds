const D = 7.5,
  E = 1.7,
  L = -3.2,
  R = 4.8,
  H = 3.3,
  N = 0.9,
  S0 = 0.85,
  S1 = 2.85,
  T = 0.3;
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
const lg = (x0, y0, x1, y1, s) => {
  const r = g.createLinearGradient(x0, y0, x1, y1);
  s.forEach((c) => r.addColorStop(c[0], c[1]));
  return r;
};
poly([
  [L, H, N],
  [R, H, N],
  [R, H, D],
  [L, H, D],
]);
g.fillStyle = lg(0, -16, 0, -H, [
  [0, "#c4beb0"],
  [1, "#e2ddd0"],
]);
g.fill();
[-1.0, 2.6].forEach((x) =>
  [
    [1.8, 3.2],
    [3.7, 5.1],
    [5.6, 7.0],
  ].forEach((s) => {
    fp(
      [
        [x - 0.15, H - 0.07, s[0]],
        [x + 0.15, H - 0.07, s[0]],
        [x + 0.15, H - 0.07, s[1]],
        [x - 0.15, H - 0.07, s[1]],
      ],
      "#ebe8df",
    );
    g.strokeStyle = "rgba(110,102,90,0.4)";
    g.lineWidth = e.px;
    g.stroke();
    fp(
      [
        [x - 0.07, H - 0.072, s[0] + 0.06],
        [x + 0.07, H - 0.072, s[0] + 0.06],
        [x + 0.07, H - 0.072, s[1] - 0.06],
        [x - 0.07, H - 0.072, s[1] - 0.06],
      ],
      "#f6f4ee",
    );
  }),
);
g.fillStyle = "#e5ddc8";
g.fillRect(L, -H, R - L, H);
g.fillStyle = "#a5b7a4";
g.fillRect(L, -1.45, R - L, 1.45);
g.fillStyle = "rgba(80,100,84,0.55)";
g.fillRect(L, -1.475, R - L, 0.03);
g.fillStyle = "#5e4330";
g.fillRect(L, -0.09, R - L, 0.09);
let rg = g.createRadialGradient(L, -1.9, 0, L, -1.9, 6);
rg.addColorStop(0, "rgba(255,247,228,0.25)");
rg.addColorStop(1, "rgba(255,247,228,0)");
g.fillStyle = rg;
g.fillRect(L, -H, R - L, H);
g.fillStyle = lg(0, -H, 0, -H + 0.7, [
  [0, "rgba(70,60,45,0.12)"],
  [1, "rgba(70,60,45,0)"],
]);
g.fillRect(L, -H, R - L, 0.7);
fp(
  [
    [R, 0, N],
    [R, 0, D],
    [R, H, D],
    [R, H, N],
  ],
  "#ebe4d0",
);
fp(
  [
    [R, 0, N],
    [R, 0, D],
    [R, 1.45, D],
    [R, 1.45, N],
  ],
  "#abbea9",
);
fp(
  [
    [R, 1.435, N],
    [R, 1.435, D],
    [R, 1.465, D],
    [R, 1.465, N],
  ],
  "rgba(80,100,84,0.55)",
);
fp(
  [
    [R, 0, N],
    [R, 0, D],
    [R, 0.09, D],
    [R, 0.09, N],
  ],
  "#5e4330",
);
poly([
  [R, 0, N],
  [R, 0, D],
  [R, H, D],
  [R, H, N],
]);
g.fillStyle = lg(R, 0, (R * D) / 2.5, 0, [
  [0, "rgba(255,250,236,0.18)"],
  [1, "rgba(255,250,236,0)"],
]);
g.fill();
fp(
  [
    [L, 0, N],
    [L, 0, D],
    [L, H, D],
    [L, H, N],
  ],
  "#cbc1aa",
);
fp(
  [
    [L, 0, N],
    [L, 0, D],
    [L, 1.45, D],
    [L, 1.45, N],
  ],
  "#8ea08f",
);
fp(
  [
    [L, 1.435, N],
    [L, 1.435, D],
    [L, 1.465, D],
    [L, 1.465, N],
  ],
  "rgba(70,90,74,0.55)",
);
fp(
  [
    [L, 0, N],
    [L, 0, D],
    [L, 0.09, D],
    [L, 0.09, N],
  ],
  "#553c2b",
);
const fl = [
  [L, 0, N],
  [R, 0, N],
  [R, 0, D],
  [L, 0, D],
];
fp(fl, "#8b5c3d");
poly(fl);
g.fillStyle = lg(0, 0, 0, 12, [
  [0, "rgba(170,120,80,0.25)"],
  [1, "rgba(40,22,12,0.3)"],
]);
g.fill();
g.lineWidth = e.px;
for (let x = L; x < R - 0.01; x += 0.14) {
  if (e.rnd() < 0.4) {
    fp(
      [
        [x, 0, N],
        [x + 0.14, 0, N],
        [x + 0.14, 0, D],
        [x, 0, D],
      ],
      e.rnd() < 0.5 ? "rgba(255,215,170,0.05)" : "rgba(30,15,5,0.06)",
    );
  }
  g.strokeStyle = "rgba(45,26,14,0.35)";
  ln([x, 0, N], [x, 0, D]);
  g.strokeStyle = "rgba(45,26,14,0.28)";
  let d = N + e.rnd() * 2;
  while (d < D) {
    ln([x, 0, d], [x + 0.14, 0, d]);
    d += 1.6 + e.rnd() * 2.4;
  }
}
g.save();
g.filter = "blur(6px)";
WIN.forEach(([a, b]) =>
  fp(
    [
      [L, -S0, a],
      [L, -S0, b],
      [L, -S1, b],
      [L, -S1, a],
    ],
    "rgba(255,246,228,0.09)",
  ),
);
g.restore();
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
g.save();
g.globalCompositeOperation = "screen";
g.filter = "blur(3px)";
g.fillStyle = "rgba(255,212,150,0.32)";
SUN(0, (q) => {
  poly(q);
  g.fill();
});
g.restore();
WIN.forEach(([a, b]) => {
  const m = (a + b) / 2;
  g.save();
  poly([
    [L, S0, a],
    [L, S0, b],
    [L, S1, b],
    [L, S1, a],
  ]);
  g.clip();
  const ta = P(L - T, S1, a),
    tb = P(L - T, S1, b),
    ba = P(L - T, S0, a);
  const x0 = ta[0],
    x1 = tb[0],
    yt = ta[1],
    yb = ba[1],
    w = x1 - x0,
    h = yb - yt;
  g.fillStyle = lg(0, yt, 0, yb, [
    [0, "#cfdde4"],
    [0.55, "#eef0e6"],
    [1, "#f8f1dd"],
  ]);
  g.fillRect(x0, yt, w, h);
  g.fillStyle = "rgba(196,188,174,0.45)";
  g.fillRect(x0, yt + h * 0.5, w, h * 0.22);
  const cols = ["217,181,96", "201,158,78", "226,199,120", "180,160,96", "160,150,90"];
  for (let k = 0; k < 16; k++) {
    const cx = x0 + e.rnd() * w,
      cy = yt + h * (0.42 + e.rnd() * 0.5),
      r = h * (0.07 + e.rnd() * 0.12);
    const c = cols[Math.floor(e.rnd() * 5)];
    const q = g.createRadialGradient(cx, cy, 0, cx, cy, r);
    q.addColorStop(0, "rgba(" + c + ",0.75)");
    q.addColorStop(1, "rgba(" + c + ",0)");
    g.fillStyle = q;
    g.fillRect(cx - r, cy - r, 2 * r, 2 * r);
  }
  g.strokeStyle = "rgba(95,82,66,0.45)";
  g.lineWidth = h * 0.006;
  for (let k = 0; k < 4; k++) {
    const tx = x0 + e.rnd() * w;
    g.beginPath();
    g.moveTo(tx, yb);
    g.lineTo(tx + (e.rnd() - 0.5) * h * 0.05, yt + h * 0.55);
    g.stroke();
  }
  const gl = g.createRadialGradient(x0 + w * 0.5, yt + h * 0.2, 0, x0 + w * 0.5, yt + h * 0.2, h * 0.9);
  gl.addColorStop(0, "rgba(255,252,240,0.55)");
  gl.addColorStop(1, "rgba(255,252,240,0.05)");
  g.fillStyle = gl;
  g.fillRect(x0, yt, w, h);
  const X = L - T + 0.04;
  const bar = (d0, d1, h0, h1) =>
    fp(
      [
        [X, h0, d0],
        [X, h0, d1],
        [X, h1, d1],
        [X, h1, d0],
      ],
      "#f2eee5",
    );
  bar(a, a + 0.07, S0, S1);
  bar(b - 0.07, b, S0, S1);
  bar(a, b, S1 - 0.07, S1);
  bar(a, b, S0, S0 + 0.07);
  bar(m - 0.04, m + 0.04, S0, S1);
  bar(a, b, 2.22, 2.29);
  g.strokeStyle = "rgba(150,140,124,0.5)";
  g.lineWidth = e.px;
  ln([X, S0 + 0.07, m - 0.04], [X, 2.22, m - 0.04]);
  ln([X, S0 + 0.07, m + 0.04], [X, 2.22, m + 0.04]);
  fp(
    [
      [X, 1.5, m + 0.045],
      [X, 1.5, m + 0.06],
      [X, 1.62, m + 0.06],
      [X, 1.62, m + 0.045],
    ],
    "#9a948a",
  );
  fp(
    [
      [L, S0, b],
      [L - T, S0, b],
      [L - T, S1, b],
      [L, S1, b],
    ],
    "#efe9dd",
  );
  fp(
    [
      [L, S1, a],
      [L, S1, b],
      [L - T, S1, b],
      [L - T, S1, a],
    ],
    "#d6cfc1",
  );
  fp(
    [
      [L, S0, a],
      [L, S0, b],
      [L - T, S0, b],
      [L - T, S0, a],
    ],
    "#f1ece2",
  );
  g.restore();
  fp(
    [
      [L, S0, a - 0.08],
      [L + 0.12, S0, a - 0.08],
      [L + 0.12, S0, b + 0.08],
      [L, S0, b + 0.08],
    ],
    "#f1ece2",
  );
  fp(
    [
      [L + 0.12, S0 - 0.045, a - 0.08],
      [L + 0.12, S0 - 0.045, b + 0.08],
      [L + 0.12, S0, b + 0.08],
      [L + 0.12, S0, a - 0.08],
    ],
    "#cbc4b4",
  );
  fp(
    [
      [L, S0 - 0.045, a - 0.08],
      [L + 0.12, S0 - 0.045, a - 0.08],
      [L + 0.12, S0, a - 0.08],
      [L, S0, a - 0.08],
    ],
    "#ddd7ca",
  );
  const rX = L + 0.08;
  fp(
    [
      [rX, 0.16, a + 0.25],
      [rX, 0.16, b - 0.25],
      [rX, 0.66, b - 0.25],
      [rX, 0.66, a + 0.25],
    ],
    "#e4e0d5",
  );
  fp(
    [
      [L + 0.02, 0.66, a + 0.25],
      [rX, 0.66, a + 0.25],
      [rX, 0.66, b - 0.25],
      [L + 0.02, 0.66, b - 0.25],
    ],
    "#f0ece3",
  );
  g.strokeStyle = "rgba(130,122,108,0.55)";
  g.lineWidth = e.px;
  for (let d = a + 0.29; d < b - 0.27; d += 0.07) ln([rX, 0.17, d], [rX, 0.65, d]);
});
g.strokeStyle = "rgba(60,50,38,0.22)";
g.lineWidth = e.px * 1.5;
ln([L, 0, D], [L, H, D]);
ln([R, 0, D], [R, H, D]);
ln([L, H, N], [L, H, D]);
ln([R, H, N], [R, H, D]);
ln([L, H, D], [R, H, D]);
