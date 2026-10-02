const s = e.state,
  t = e.t;
let L = s.lamp === "погас" ? 0 : 1;
if (s.lamp === "мигает") {
  const n = Math.sin(t * 13.1) * Math.sin(t * 2.7) + Math.sin(t * 0.61);
  L = n > 0.6 ? 0.06 : n > 0.45 ? 0.45 : 1;
}
const cols = ["#1c231f", "#241d19", "#1c2027", "#20201d", "#251c18", "#1b2024"];
g.fillStyle = "#141418";
g.fillRect(-9, -2.6, 18, 2.6);
g.fillStyle = "#0d0d10";
g.fillRect(-9.3, -2.85, 18.6, 0.28);
for (let i = 0; i < 6; i++) {
  const x0 = -9 + i * 3;
  g.fillStyle = "#101014";
  g.fillRect(x0, -2.6, 0.25, 2.6);
  const dx = x0 + 0.45,
    dw = 2.3,
    dh = 2.15;
  g.fillStyle = cols[i];
  g.fillRect(dx, -dh, dw, dh);
  for (let k = 0; k < 6; k++) {
    const rx = dx + e.rnd() * dw;
    const rh = 0.3 + e.rnd() * 1.2;
    const gg = g.createLinearGradient(0, -dh, 0, -dh + rh);
    gg.addColorStop(0, "rgba(100,55,30,0.3)");
    gg.addColorStop(1, "rgba(100,55,30,0)");
    g.fillStyle = gg;
    g.fillRect(rx, -dh, 0.06 + e.rnd() * 0.12, rh);
  }
  g.fillStyle = "rgba(0,0,0,0.4)";
  g.fillRect(dx + dw / 2 - 0.015, -dh, 0.03, dh);
  if (i === 2 && s.garage === "приоткрыт") {
    g.fillStyle = "#030304";
    g.fillRect(dx + dw / 2, -dh, 0.42, dh);
    g.fillStyle = cols[i];
    g.beginPath();
    g.moveTo(dx + dw / 2 + 0.42, -dh - 0.05);
    g.lineTo(dx + dw / 2 + 0.9, -dh - 0.15);
    g.lineTo(dx + dw / 2 + 0.9, 0.08);
    g.lineTo(dx + dw / 2 + 0.42, 0);
    g.fill();
    const ey = 1 - L;
    if (ey > 0.3) {
      g.fillStyle = "rgba(215,220,180," + 0.8 * ey + ")";
      g.fillRect(dx + dw / 2 + 0.15, -1.32, 0.03, 0.02);
      g.fillRect(dx + dw / 2 + 0.24, -1.31, 0.03, 0.02);
      e.light(dx + dw / 2 + 0.2, -1.31, 0.25, "#d8dcb0", 0.3 * ey);
    }
  } else {
    g.fillStyle = "#0b0b0d";
    g.fillRect(dx + dw / 2 - 0.08, -1.05, 0.16, 0.08);
    g.fillRect(dx + dw / 2 - 0.04, -0.98, 0.08, 0.1);
  }
}
g.font = "bold 0.36px sans-serif";
g.fillStyle = "rgba(215,210,200,0.28)";
g.fillText("ЦОЙ ЖИВ", 3.6, -1.3);
g.font = "0.26px sans-serif";
g.fillStyle = "rgba(215,210,200,0.2)";
g.fillText("Спартак — чемпион", -8.3, -1.6);
if (L > 0) {
  const p = g.createRadialGradient(-7.2, -1, 0, -7.2, -1, 6);
  p.addColorStop(0, "rgba(235,150,70," + 0.2 * L + ")");
  p.addColorStop(1, "rgba(235,150,70,0)");
  g.fillStyle = p;
  g.fillRect(-9, -2.85, 18, 2.85);
}
