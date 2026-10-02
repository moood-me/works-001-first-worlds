const D = 7.0,
  E = 1.7,
  R = 4.79;
const P = (X, h, d) => [(X * D) / d, -(E + ((h - E) * D) / d)];
const poster = (d0, d1, h0, h1, draw) => {
  const M = (u, v) => P(R, h1 - v, d1 - u);
  const W = d1 - d0,
    Hh = h1 - h0;
  const pl = (pts) => {
    g.beginPath();
    pts.forEach((p, i) => {
      const q = M(p[0], p[1]);
      i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1]);
    });
    g.closePath();
  };
  const sh = P(R, h1 - 0.02, d1 + 0.02),
    s2 = [
      [0.02, 0.02],
      [W + 0.02, 0.02],
      [W + 0.02, Hh + 0.02],
      [0.02, Hh + 0.02],
    ];
  pl(s2);
  g.fillStyle = "rgba(60,45,30,0.14)";
  g.fill();
  pl([
    [0, 0],
    [W, 0],
    [W, Hh],
    [0, Hh],
  ]);
  g.fillStyle = "#ede6d2";
  g.fill();
  pl([
    [0.03, 0.03],
    [W - 0.03, 0.03],
    [W - 0.03, Hh - 0.03],
    [0.03, Hh - 0.03],
  ]);
  g.strokeStyle = "#8a9aa4";
  g.lineWidth = e.px * 1.5;
  g.stroke();
  const T = (t, u, v, s) => {
    const o = M(u, v),
      a = M(u + 0.01, v),
      b = M(u, v + 0.01);
    g.save();
    g.transform(a[0] - o[0], a[1] - o[1], b[0] - o[0], b[1] - o[1], o[0], o[1]);
    g.font = s + "px Georgia, serif";
    g.textAlign = "center";
    g.fillStyle = "#3e4a52";
    g.fillText(t, 0, 0);
    g.restore();
  };
  draw(pl, T, M, W, Hh);
};
poster(4.4, 5.6, 1.6, 2.6, (pl, T) => {
  T("ТЕОРЕМА ПИФАГОРА", 0.6, 0.12, 6);
  pl([
    [0.5, 0.62],
    [0.76, 0.62],
    [0.76, 0.88],
    [0.5, 0.88],
  ]);
  g.fillStyle = "#c9a98a";
  g.fill();
  g.strokeStyle = "#4b4136";
  g.lineWidth = e.px;
  g.stroke();
  pl([
    [0.5, 0.42],
    [0.3, 0.42],
    [0.3, 0.62],
    [0.5, 0.62],
  ]);
  g.fillStyle = "#a9bca6";
  g.fill();
  g.stroke();
  pl([
    [0.5, 0.42],
    [0.76, 0.62],
    [0.96, 0.36],
    [0.7, 0.16],
  ]);
  g.fillStyle = "#9fb2c4";
  g.fill();
  g.stroke();
  pl([
    [0.5, 0.42],
    [0.5, 0.62],
    [0.76, 0.62],
  ]);
  g.fillStyle = "#ece5d1";
  g.fill();
  g.lineWidth = e.px * 2;
  g.stroke();
  T("a", 0.46, 0.54, 5);
  T("b", 0.63, 0.68, 5);
  T("c", 0.66, 0.5, 5);
  T("c² = a² + b²", 0.24, 0.84, 6);
});
poster(5.95, 7.35, 1.55, 2.55, (pl, T, M, W, Hh) => {
  T("ТАБЛИЦА КВАДРАТОВ", 0.7, 0.12, 6);
  const u0 = 0.1,
    v0 = 0.2,
    cw = 1.2 / 11,
    chh = 0.72 / 10;
  g.strokeStyle = "rgba(62,74,82,0.55)";
  g.lineWidth = e.px;
  for (let i = 0; i <= 11; i++) {
    const a = M(u0 + i * cw, v0),
      b = M(u0 + i * cw, v0 + 0.72);
    g.beginPath();
    g.moveTo(a[0], a[1]);
    g.lineTo(b[0], b[1]);
    g.stroke();
  }
  for (let j = 0; j <= 10; j++) {
    const a = M(u0, v0 + j * chh),
      b = M(u0 + 1.2, v0 + j * chh);
    g.beginPath();
    g.moveTo(a[0], a[1]);
    g.lineTo(b[0], b[1]);
    g.stroke();
  }
  pl([
    [u0, v0],
    [u0 + 1.2, v0],
    [u0 + 1.2, v0 + chh],
    [u0, v0 + chh],
  ]);
  g.fillStyle = "rgba(159,178,196,0.35)";
  g.fill();
  pl([
    [u0, v0],
    [u0 + cw, v0],
    [u0 + cw, v0 + 0.72],
    [u0, v0 + 0.72],
  ]);
  g.fill();
  for (let j = 0; j < 10; j++) T(String(j), u0 + (j + 1.5) * cw, v0 + chh * 0.7, 3.6);
  for (let i = 1; i < 10; i++) {
    T(String(i), u0 + cw * 0.5, v0 + (i + 0.7) * chh, 3.6);
    for (let j = 0; j < 10; j++) T(String((10 * i + j) * (10 * i + j)), u0 + (j + 1.5) * cw, v0 + (i + 0.7) * chh, 2.6);
  }
});
