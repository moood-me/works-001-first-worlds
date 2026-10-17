const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t,
  S = e.state || {};
const D = 3.5,
  HD = 6.5;
const sh = (X) => {
  const u = Math.min(1, Math.max(0, (X - 1.0) / 1.9));
  const k = u * u * (3 - 2 * u);
  return 5.0 + 0.12 * Math.sin(X * 1.7) + 0.07 * Math.sin(X * 4.3 + 1) + k * 3.6;
};
const Y = (X) => Math.max(-HD, -(sh(X) - D));
const edge = (o) => {
  g.moveTo(-13, Y(-13) + o);
  for (let X = -12.8; X <= 13.01; X += 0.2) g.lineTo(X, Y(X) + o);
};
g.beginPath();
edge(0);
g.lineTo(13, HD);
g.lineTo(-13, HD);
g.closePath();
const gr = g.createLinearGradient(0, -HD, 0, HD);
gr.addColorStop(0, "#141c2b");
gr.addColorStop(0.5, "#101826");
gr.addColorStop(1, "#0a101b");
g.fillStyle = gr;
g.fill();
g.beginPath();
edge(0);
for (let X = 13; X >= -13.01; X -= 0.2) g.lineTo(X, Y(X) + 0.3 + 0.08 * Math.sin(X * 2.1));
g.closePath();
g.fillStyle = "#0c1220";
g.fill();
g.strokeStyle = "rgba(150,172,215,0.22)";
g.lineWidth = 0.025;
g.beginPath();
edge(0.02);
g.stroke();
g.strokeStyle = "rgba(150,172,215,0.07)";
g.lineWidth = 0.06;
g.beginPath();
edge(0.13);
g.stroke();
g.save();
g.translate(-1.7, 0.3);
g.scale(1, 0.5);
g.fillStyle = "#0a1120";
g.beginPath();
g.arc(0, 0, 0.35, 0, 6.283);
g.fill();
g.strokeStyle = "rgba(150,172,215,0.18)";
g.lineWidth = 0.02;
g.beginPath();
g.arc(0, 0, 0.34, 3.6, 5.6);
g.stroke();
g.restore();
g.lineCap = "round";
for (let i = 0; i < 1500; i++) {
  const X = -13 + 26 * h(i + 1);
  const y0 = HD - 2 * HD * h(i + 2);
  if (y0 < Y(X) + 0.35) continue;
  const a = h(i + 3) * 6.283;
  const l = 0.06 + 0.12 * h(i + 4);
  g.strokeStyle = h(i + 5) < 0.5 ? "#1b2638" : "#0d1420";
  g.lineWidth = 0.012 + 0.012 * h(i + 6);
  g.beginPath();
  g.moveTo(X, y0);
  g.lineTo(X + Math.cos(a) * l, y0 + Math.sin(a) * l * 0.5);
  g.stroke();
}
const spot = S.playerSpot || "shore";
const P1 = [0.3, -0.4];
const paths = [[[-1.4, HD - 0.3], P1]];
if (spot === "bridge") paths.push([P1, [2.4, -3.9]]);
if (spot === "boat") paths.push([P1, [-0.1, -1.35]]);
g.fillStyle = "rgba(6,10,18,0.55)";
for (const pq of paths) {
  const A = pq[0],
    B = pq[1];
  const dx = B[0] - A[0],
    dy = B[1] - A[1],
    L = Math.hypot(dx, dy),
    n = Math.max(1, Math.floor(L / 0.33));
  const ux = dx / L,
    uy = dy / L,
    ang = Math.atan2(uy, ux);
  for (let k = 0; k <= n; k++) {
    const f = k / n;
    const sd = (k % 2 ? 1 : -1) * 0.09;
    g.save();
    g.translate(A[0] + dx * f - uy * sd, A[1] + dy * f + ux * sd);
    g.rotate(ang);
    g.beginPath();
    g.ellipse(0, 0, 0.13, 0.05, 0, 0, 6.283);
    g.fill();
    g.restore();
  }
}
for (let i = 0; i < 260; i++) {
  const X = -13 + 26 * h(i + 3001);
  const y0 = HD - 2 * HD * Math.pow(h(i + 3002), 0.7);
  if (y0 < Y(X) + 0.3) continue;
  const tw = Math.max(0, Math.sin(t * (0.4 + 0.9 * h(i + 3003)) + i * 2.9));
  const a = tw * tw * tw * (0.25 + 0.5 * h(i + 3004));
  if (a < 0.03) continue;
  g.globalAlpha = a;
  g.fillStyle = h(i + 3005) < 0.8 ? "#dfe8fa" : "#bcd0f5";
  g.beginPath();
  g.arc(X, y0, 0.012 + 0.01 * h(i + 3006), 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
if (S.flashlight && (S.aim || "grass") === "grass") {
  const fx = 0.4 + 0.25 * Math.sin(t * 0.37) + 0.1 * Math.sin(t * 0.91 + 1),
    fy = -0.2 + 0.2 * Math.sin(t * 0.29 + 2);
  g.globalCompositeOperation = "lighter";
  const r = 0.9;
  const fg = g.createRadialGradient(fx, fy, 0, fx, fy, r);
  fg.addColorStop(0, "rgba(255,205,130,0.30)");
  fg.addColorStop(0.5, "rgba(230,170,100,0.11)");
  fg.addColorStop(1, "rgba(200,140,80,0)");
  g.fillStyle = fg;
  g.fillRect(fx - r, fy - r, 2 * r, 2 * r);
  g.fillStyle = "#ffe0a8";
  for (let i = 0; i < 14; i++) {
    const q = h(i + 4001),
      ang = 6.283 * h(i + 4002),
      rr = 0.6 * Math.sqrt(q);
    const on = Math.max(0, Math.sin(t * (0.8 + h(i + 4003)) + i * 2.1));
    g.globalAlpha = on * on * 0.6 * (1 - rr / 0.6);
    g.beginPath();
    g.arc(fx + Math.cos(ang) * rr, fy + Math.sin(ang) * rr, 0.012, 0, 6.283);
    g.fill();
  }
  g.globalAlpha = 1;
  g.globalCompositeOperation = "source-over";
}
