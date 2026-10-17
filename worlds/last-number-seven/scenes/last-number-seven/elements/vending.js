const d = e.state.dusk || 0,
  t = e.t;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
const L = 0.97 + 0.03 * Math.sin(t * 37) * Math.sin(t * 0.9);
g.fillStyle = mx([216, 224, 230], [118, 128, 150], d * 0.7);
g.fillRect(-0.5, -1.85, 1.0, 1.85);
g.fillStyle = "rgba(30,30,60,0.22)";
g.fillRect(0.3, -1.85, 0.2, 1.85);
g.fillStyle = "rgba(255,180,110," + 0.55 * (1 - d) + ")";
g.fillRect(-0.5, -1.85, 0.025, 1.85);
g.fillStyle = "rgba(240,250,255," + (0.7 + 0.3 * d) * L + ")";
g.fillRect(-0.42, -1.74, 0.84, 0.76);
const C = ["#c0392b", "#2c6fbf", "#e8b923", "#3a9a5b", "#f4f0e6", "#8e44ad", "#e67e22", "#24384f"];
for (let r = 0; r < 3; r++)
  for (let c = 0; c < 7; c++) {
    g.fillStyle = C[(r * 3 + c) % 8];
    g.fillRect(-0.385 + c * 0.112, -1.7 + r * 0.25, 0.07, 0.15);
    g.fillStyle = (r + c) % 3 ? "rgba(60,200,90,0.9)" : "rgba(230,60,50,0.9)";
    g.fillRect(-0.365 + c * 0.112, -1.53 + r * 0.25, 0.03, 0.02);
  }
g.fillStyle = mx([60, 64, 76], [24, 26, 36], d);
g.fillRect(-0.38, -0.36, 0.6, 0.22);
g.fillRect(0.3, -0.9, 0.08, 0.14);
g.fillStyle = mx([180, 40, 40], [90, 30, 36], d);
g.fillRect(-0.5, -1.85, 1.0, 0.06);
e.light(0, -1.35, 2.4, "#e4f3ff", (0.22 + 0.6 * d) * L);
if (d > 0.55) {
  g.fillStyle = "rgba(250,240,220,0.8)";
  for (let i = 0; i < 3; i++) {
    const a = t * (1.1 + i * 0.37) + i * 2.1;
    g.beginPath();
    g.arc(Math.cos(a) * (0.3 + 0.1 * i), -1.95 + Math.sin(a * 1.3) * 0.15, 0.012, 0, 7);
    g.fill();
  }
}
