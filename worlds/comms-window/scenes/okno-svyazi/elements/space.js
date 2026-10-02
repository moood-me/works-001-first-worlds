const A = e.aspect,
  t = e.t,
  s = e.state;
let gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#020309");
gr.addColorStop(0.6, "#060914");
gr.addColorStop(1, "#090b16");
g.fillStyle = gr;
g.fillRect(-0.35, -0.4, A + 0.7, 1.7);
g.save();
g.translate(A * 0.35, 0.25);
g.rotate(-0.4);
let mb = g.createLinearGradient(0, -0.22, 0, 0.22);
mb.addColorStop(0, "rgba(120,110,160,0)");
mb.addColorStop(0.5, "rgba(125,118,165,0.1)");
mb.addColorStop(1, "rgba(120,110,160,0)");
g.fillStyle = mb;
g.fillRect(-2.5, -0.22, 5, 0.44);
g.restore();
for (let i = 0; i < 520; i++) {
  const x = e.rnd() * (A + 0.7) - 0.35,
    y = -0.35 + e.rnd() * 1.6,
    c = e.rnd(),
    z = e.rnd(),
    tw = e.rnd() < 0.12 ? 0.6 + 0.4 * Math.sin(t * (0.7 + z * 1.3) + i) : 1;
  g.fillStyle =
    (c < 0.15 ? "rgba(255,215,185," : c < 0.35 ? "rgba(185,205,255," : "rgba(235,238,250,") +
    (0.2 + z * 0.6) * tw +
    ")";
  const sz = z > 0.95 ? 0.0024 : 0.0007 + z * 0.001;
  g.fillRect(x, y, sz, sz);
}
const px = A * 0.65,
  py = 0.75,
  R = 0.29;
const m = Math.max(0, Math.min(1, (s.minutes ?? 40) / 40));
const k = 1 - m;
const sx = A * 0.47,
  sy = 0.27,
  ex = px - R * 0.74,
  ey = py - R * 0.63;
const rx = sx + (ex - sx) * k,
  ry = sy + (ey - sy) * k;
const rec = s.message === "принимается";
const per = rec ? 0.9 : 2.4,
  ph = (t % per) / per,
  fl = Math.exp(-ph * 9);
g.fillStyle = "rgba(235,240,255,0.85)";
g.fillRect(rx - 0.0012, ry - 0.0012, 0.0024, 0.0024);
let rg = g.createRadialGradient(rx, ry, 0, rx, ry, 0.012 + 0.03 * fl);
rg.addColorStop(0, "rgba(255,140,110," + (0.25 + 0.7 * fl) + ")");
rg.addColorStop(1, "rgba(255,120,90,0)");
g.fillStyle = rg;
g.fillRect(rx - 0.05, ry - 0.05, 0.1, 0.1);
const ring = (front) => {
  g.save();
  g.translate(px, py);
  g.rotate(-0.2);
  g.scale(1, 0.19);
  for (let i = 0; i < 50; i++) {
    const rr = R * (1.3 + i * 0.017);
    let a = 0.04 + 0.2 * Math.abs(Math.sin(i * 1.7) * Math.sin(i * 0.41 + 1));
    if (i > 30 && i < 34) a *= 0.12;
    g.strokeStyle = "rgba(222,203,168," + a + ")";
    g.lineWidth = R * 0.019;
    g.beginPath();
    g.arc(0, 0, rr, front ? 0 : Math.PI, front ? Math.PI : Math.PI * 2);
    g.stroke();
  }
  g.restore();
};
ring(false);
g.save();
g.beginPath();
g.arc(px, py, R, 0, 7);
g.clip();
let pg = g.createRadialGradient(px - R * 0.45, py - R * 0.5, 0.01, px - R * 0.2, py - R * 0.2, R * 1.5);
pg.addColorStop(0, "#ecd8ad");
pg.addColorStop(0.45, "#b8996b");
pg.addColorStop(1, "#3b2d22");
g.fillStyle = pg;
g.fillRect(px - R, py - R, 2 * R, 2 * R);
g.translate(px, py);
g.rotate(-0.2);
for (let i = 0; i < 34; i++) {
  const y = -R + i * ((2 * R) / 34);
  const c = i % 3 === 0 ? "90,62,40" : "240,222,185";
  g.fillStyle = "rgba(" + c + "," + (0.05 + 0.1 * Math.abs(Math.sin(i * 2.3))) + ")";
  g.fillRect(-R, y, 2 * R, R * (0.03 + 0.04 * Math.abs(Math.sin(i * 1.1))));
}
g.fillStyle = "rgba(20,14,12,0.35)";
g.fillRect(-R, R * 0.1, 2 * R, R * 0.06);
g.rotate(0.2);
g.translate(-px, -py);
let sh = g.createRadialGradient(px - R * 0.4, py - R * 0.45, R * 0.8, px - R * 0.4, py - R * 0.45, R * 1.7);
sh.addColorStop(0, "rgba(3,4,9,0)");
sh.addColorStop(1, "rgba(3,4,9,0.95)");
g.fillStyle = sh;
g.fillRect(px - R, py - R, 2 * R, 2 * R);
g.restore();
g.strokeStyle = "rgba(240,222,185,0.22)";
g.lineWidth = 0.004;
g.beginPath();
g.arc(px, py, R, Math.PI * 0.95, Math.PI * 1.6);
g.stroke();
ring(true);
let hz = g.createRadialGradient(px, py, R, px, py, R * 1.6);
hz.addColorStop(0, "rgba(220,195,150,0.08)");
hz.addColorStop(1, "rgba(220,195,150,0)");
g.fillStyle = hz;
g.fillRect(px - R * 1.6, py - R * 1.6, R * 3.2, R * 3.2);
