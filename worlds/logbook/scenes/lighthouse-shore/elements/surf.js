const T = e.state.tide ?? 0.35,
  W = e.state.weather || "clear",
  t = e.t,
  sp = (u) => (Math.sqrt(u * u + 0.2) + u) / 2;
const amp = W === "storm" ? 1.9 : W === "rain" ? 1.25 : W === "fog" ? 0.8 : 1;
const Dw = (x) => 7.6 - 0.12 * (x - 1) + 2.52 * sp(1 - x) - 3.2 * (T - 0.35),
  Yw = (x) => 20 - Dw(x);
const ph = (x, o) => (((t / 7.3 + x * 0.012 + 0.15 * Math.sin(x * 0.31) + o) % 1) + 1) % 1;
const run = (p) => (p < 0.3 ? Math.sin(((p / 0.3) * Math.PI) / 2) : Math.pow(1 - (p - 0.3) / 0.7, 1.6));
const S = (x) => amp * (0.35 + 0.75 * run(ph(x, 0))) * (0.85 + 0.15 * Math.sin(x * 0.9 + 1.3));
const x0 = -11.5,
  x1 = 50;
const sheet = g.createLinearGradient(-8, 0, 12, 0);
sheet.addColorStop(0, "rgba(40,52,78,0.45)");
sheet.addColorStop(1, "rgba(95,115,155,0.38)");
g.beginPath();
g.moveTo(x0, Yw(x0));
for (let x = x0; x <= x1; x += 0.3) g.lineTo(x, Yw(x) + S(x));
for (let x = x1; x >= x0; x -= 0.3) g.lineTo(x, Yw(x) - 0.05);
g.closePath();
g.fillStyle = sheet;
g.fill();
for (let x = x0; x <= x1; x += 0.14) {
  const p = ph(x, 0),
    fresh = p < 0.3 ? 1 : Math.max(0, 1 - (p - 0.3) / 0.45),
    y = Yw(x) + S(x),
    n = Math.sin(x * 7.3) * 0.5 + 0.5;
  const a = (0.1 + 0.32 * fresh) * (0.6 + 0.4 * n);
  g.fillStyle = `rgba(215,225,240,${a})`;
  g.beginPath();
  g.ellipse(x, y - 0.04, 0.11, 0.035, 0, 0, 7);
  g.fill();
  if (fresh > 0.05) {
    const yb = y - 0.2 - 0.35 * n * fresh;
    g.fillStyle = `rgba(200,212,232,${0.16 * fresh})`;
    g.beginPath();
    g.ellipse(x + 0.05, yb, 0.08, 0.03, 0, 0, 7);
    g.fill();
  }
}
for (let x = x0 + 0.5; x <= x1; x += 0.25) {
  const p = ph(x, 0.62),
    c = 0.3 + 3.6 * (1 - p),
    s = Math.sin(p * Math.PI),
    a = 0.2 * s * s * Math.min(1.4, amp);
  if (a < 0.015) continue;
  g.fillStyle = `rgba(205,215,235,${a})`;
  g.beginPath();
  g.ellipse(x, Yw(x) - c, 0.16, 0.05 + 0.04 * s, 0, 0, 7);
  g.fill();
}
