const S = e.state,
  W = String(S.weather || ""),
  windy = /wind|storm/.test(W),
  surf = /surf|storm/.test(String(S.tide || "")) || /storm/.test(W),
  T = surf ? 5.5 : 8,
  n = Math.floor(e.t / T),
  p = e.t / T - n,
  amp = 0.72 + 0.28 * Math.sin(n * 2.39 + 0.7),
  R = surf ? 5 : 3.6,
  s = p < 0.3 ? Math.sin(((p / 0.3) * Math.PI) / 2) : Math.pow(Math.cos((((p - 0.3) / 0.7) * Math.PI) / 2), 1.5),
  run = R * amp * s,
  bp = S.beam_pass !== false && !/^no|off|false/i.test(String(S.beam_pass)),
  ba = e.t * 0.3,
  sweep = bp ? Math.pow(Math.abs(Math.cos(ba)), 10) : 0;
const rock = (cx, w, h, lean) => {
  const N = 16,
    pts = [];
  for (let i = 0; i <= N; i++) {
    const a = (Math.PI * i) / N,
      r = 0.86 + e.rnd() * 0.24;
    pts.push([
      cx - ((Math.cos(a) * w) / 2) * r + lean * h * Math.sin(a),
      -Math.sin(a) * h * r * (0.8 + 0.2 * Math.sin(a)),
    ]);
  }
  g.beginPath();
  g.moveTo(cx - w / 2, 0.12);
  pts.forEach((q) => g.lineTo(q[0], q[1]));
  g.lineTo(cx + w / 2, 0.12);
  g.closePath();
  let gr = g.createLinearGradient(cx - w / 2, -h, cx + w / 2, 0);
  gr.addColorStop(0, "#06080c");
  gr.addColorStop(1, "#0c0f15");
  g.fillStyle = gr;
  g.fill();
  g.save();
  g.clip();
  gr = g.createRadialGradient(cx + w * 0.28, -h * 0.95, 0, cx + w * 0.28, -h * 0.95, Math.max(w, h) * 0.75);
  gr.addColorStop(0, "rgba(150,168,200,0.28)");
  gr.addColorStop(0.4, "rgba(90,105,135,0.09)");
  gr.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = gr;
  g.fillRect(cx - w, -h * 2, w * 2, h * 2.2);
  g.lineCap = "round";
  for (let k = 0; k < 7; k++) {
    const u = 0.3 + e.rnd() * 0.55,
      a = Math.PI * u,
      x = cx - Math.cos(a) * w * 0.4,
      y = -Math.sin(a) * h * 0.82,
      lw = h * (0.01 + e.rnd() * 0.014),
      dl = h * (0.08 + e.rnd() * 0.16);
    g.strokeStyle = "rgba(200,215,240," + (0.18 + 0.25 * u) + ")";
    g.lineWidth = lw;
    g.beginPath();
    g.moveTo(x, y);
    g.quadraticCurveTo(x + w * 0.03, y + dl * 0.5, x + w * 0.02, y + dl);
    g.stroke();
  }
  g.strokeStyle = "rgba(0,0,0,0.5)";
  g.lineWidth = h * 0.012;
  for (let k = 0; k < 3; k++) {
    const x = cx + (e.rnd() - 0.5) * w * 0.6,
      y0 = -h * (0.3 + e.rnd() * 0.45),
      dx = (e.rnd() - 0.5) * w * 0.2,
      y1 = -h * 0.12 * e.rnd();
    g.beginPath();
    g.moveTo(x, y0);
    g.lineTo(x + dx, y1);
    g.stroke();
  }
  gr = g.createLinearGradient(0, -h * 0.35, 0, 0.12);
  gr.addColorStop(0, "rgba(0,0,0,0)");
  gr.addColorStop(1, "rgba(2,4,8,0.65)");
  g.fillStyle = gr;
  g.fillRect(cx - w, -h * 0.35, w * 2, h * 0.35 + 0.12);
  if (sweep > 0.01) {
    g.fillStyle = "rgba(255,226,175," + 0.2 * sweep + ")";
    g.fillRect(cx - w, -h * 1.5, w * 2, h * 1.7);
  }
  g.restore();
  g.beginPath();
  pts.slice(6, 15).forEach((q, i) => (i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1])));
  g.strokeStyle = "rgba(175,190,220," + (0.26 + 0.3 * sweep) + ")";
  g.lineWidth = h * 0.018;
  g.stroke();
};
const foamAt = (cx, w, a) => {
  for (let i = 0; i < 18; i++) {
    const x = cx + (e.rnd() - 0.5) * w * 1.2,
      y = -e.rnd() * 0.08 * w,
      r = w * (0.07 + e.rnd() * 0.1),
      al = a * (0.4 + 0.5 * e.rnd());
    const f = g.createRadialGradient(x, y, 0, x, y, r);
    f.addColorStop(0, "rgba(215,226,242," + al + ")");
    f.addColorStop(1, "rgba(215,226,242,0)");
    g.save();
    g.translate(x, y);
    g.scale(1, 0.35);
    g.translate(-x, -y);
    g.fillStyle = f;
    g.fillRect(x - r, y - r, 2 * r, 2 * r);
    g.restore();
  }
};
const spray = (cx, w, top, ph) => {
  const u = ((((p - ph) % 1) + 1) % 1) / 0.5,
    k = (surf ? 1 : 0.45) * amp;
  for (let i = 0; i < 50; i++) {
    const x0 = cx + (e.rnd() - 0.5) * w,
      vx = (e.rnd() - 0.5) * w * 0.5,
      h = top * (0.3 + e.rnd() * 0.7) * k,
      rr = ((0.03 + e.rnd() * 0.08) * w) / 4;
    if (u >= 1) continue;
    const y = -h * Math.sin(Math.PI * Math.min(1, u * 1.15)),
      x = x0 + vx * u + (windy ? u * w * 0.3 : 0);
    g.fillStyle = "rgba(220,230,245," + 0.45 * (1 - u) * k + ")";
    g.beginPath();
    g.arc(x, y, rr, 0, 7);
    g.fill();
  }
};
const b = Math.pow(Math.max(0, Math.sin(2 * Math.PI * (p - 0.15))), 2);
rock(-15, 6, 3, 0);
rock(-10, 7, 3.6, 0.1);
rock(-4, 5, 2.6, -0.12);
rock(1, 3.4, 1.6, 0.15);
rock(4.5, 1.8, 0.8, 0);
foamAt(-10, 8, 0.25 + 0.5 * b);
foamAt(-4, 5, 0.25 + 0.5 * b);
foamAt(1.5, 4, 0.3 + 0.5 * b);
foamAt(4.5, 2, 0.3 + 0.4 * b);
spray(-4, 6, surf ? 4.5 : 2.2, 0.15);
