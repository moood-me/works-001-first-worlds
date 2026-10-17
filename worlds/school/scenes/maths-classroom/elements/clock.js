const cx = -2.4,
  cy = -2.75,
  r = 0.16;
const C = (x, y, rr, c) => {
  g.fillStyle = c;
  g.beginPath();
  g.arc(x, y, rr, 0, Math.PI * 2);
  g.fill();
};
C(cx + 0.012, cy + 0.016, r + 0.016, "rgba(60,45,30,0.18)");
C(cx, cy, r + 0.016, "#4a4038");
C(cx, cy, r, "#f2eee3");
g.strokeStyle = "#3b342e";
g.lineCap = "round";
for (let i = 0; i < 60; i++) {
  const a = (i / 60) * Math.PI * 2,
    l = i % 5 ? 0.012 : 0.03;
  g.lineWidth = i % 5 ? 0.003 : 0.008;
  g.beginPath();
  g.moveTo(cx + Math.cos(a) * (r - 0.012), cy + Math.sin(a) * (r - 0.012));
  g.lineTo(cx + Math.cos(a) * (r - 0.012 - l), cy + Math.sin(a) * (r - 0.012 - l));
  g.stroke();
}
const s0 = 14 * 3600 + 35 * 60 + Math.floor(e.t);
const hand = (f, len, w, c) => {
  const a = f * Math.PI * 2 - Math.PI / 2;
  g.strokeStyle = c;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(cx - Math.cos(a) * len * 0.18, cy - Math.sin(a) * len * 0.18);
  g.lineTo(cx + Math.cos(a) * len, cy + Math.sin(a) * len);
  g.stroke();
};
hand((s0 / 43200) % 1, 0.08, 0.012, "#2f2924");
hand((s0 / 3600) % 1, 0.12, 0.008, "#2f2924");
hand((s0 % 60) / 60, 0.13, 0.003, "#9c4a3a");
C(cx, cy, 0.008, "#2f2924");
const gl = g.createRadialGradient(cx - 0.06, cy - 0.07, 0, cx - 0.06, cy - 0.07, 0.14);
gl.addColorStop(0, "rgba(255,255,250,0.35)");
gl.addColorStop(1, "rgba(255,255,250,0)");
C(cx, cy, r, gl);
