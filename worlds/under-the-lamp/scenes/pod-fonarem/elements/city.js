let x = -120;
while (x < 120) {
  const bw = 5 + e.rnd() * 13;
  const bh = 10 + e.rnd() * 28;
  g.fillStyle = "#11171c";
  g.fillRect(x, -bh, bw + 0.3, bh + 1);
  for (let wy = -bh + 2; wy < -1.5; wy += 2.4)
    for (let wx = x + 1; wx < x + bw - 1; wx += 1.9) {
      const r = e.rnd();
      if (r > 0.95) {
        g.fillStyle = r > 0.985 ? "rgba(200,150,90,0.55)" : "rgba(110,125,135,0.4)";
        g.fillRect(wx, wy, 0.9, 1.2);
      }
    }
  x += bw;
}
