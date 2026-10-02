const A = e.aspect,
  H = 0.6;
function ridge(col, base, amp, m) {
  g.fillStyle = col;
  g.beginPath();
  g.moveTo(-0.1, H + 0.01);
  let y = 0;
  for (let i = 0; i <= 80; i++) {
    const x = -0.1 + (i * (A + 0.2)) / 80;
    y += (e.rnd() - 0.5) * amp;
    y = Math.max(-amp * 1.5, Math.min(amp * 1.5, y));
    let top = H - base + y;
    if (m) {
      const d = Math.abs(x - m[0]);
      if (d < m[1]) top = Math.min(top, H - m[2] + e.rnd() * 0.002);
      else if (d < m[1] + m[3]) {
        let s = (d - m[1]) / m[3];
        s = s * s * (3 - 2 * s);
        top = Math.min(top, H - m[2] + s * (m[2] - base));
      }
    }
    g.lineTo(x, top);
  }
  g.lineTo(A + 0.1, H + 0.01);
  g.closePath();
  g.fill();
}
ridge("#cdbca8", 0.016, 0.004, [A * 0.36, 0.06, 0.048, 0.07]);
ridge("#bda994", 0.007, 0.003, null);
let hz = g.createLinearGradient(0, H - 0.05, 0, H);
hz.addColorStop(0, "rgba(240,222,184,0)");
hz.addColorStop(1, "rgba(240,222,184,0.55)");
g.fillStyle = hz;
g.fillRect(-0.35, H - 0.05, A + 0.7, 0.05);
