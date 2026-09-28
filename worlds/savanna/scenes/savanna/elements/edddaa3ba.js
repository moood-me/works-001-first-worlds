const A = e.aspect,
  H = 0.6;
let gr = g.createLinearGradient(0, H, 0, 1.25);
gr.addColorStop(0, "#dcc393");
gr.addColorStop(0.06, "#c9a871");
gr.addColorStop(0.35, "#ab8650");
gr.addColorStop(1, "#80613a");
g.fillStyle = gr;
g.fillRect(-0.1, H, A + 0.2, 0.66);
for (let i = 0; i < 220; i++) {
  const k = e.rnd(),
    y = H + Math.pow(k, 2) * 0.65,
    d = y - H;
  const w = (0.03 + e.rnd() * 0.15) * (0.2 + d * 5),
    x = e.rnd() * A;
  g.globalAlpha = 0.05 + e.rnd() * 0.07;
  g.fillStyle = e.rnd() < 0.55 ? "#6a5330" : "#ead39c";
  g.fillRect(x - w / 2, y, w, 0.001 + d * 0.015);
}
g.globalAlpha = 1;
let r = g.createRadialGradient(A * 0.22, H, 0, A * 0.22, H, A * 0.6);
r.addColorStop(0, "rgba(255,224,170,0.4)");
r.addColorStop(1, "rgba(255,224,170,0)");
g.fillStyle = r;
g.fillRect(-0.1, H, A + 0.2, 0.66);
let hz = g.createLinearGradient(0, H - 0.03, 0, H + 0.03);
hz.addColorStop(0, "rgba(240,222,184,0)");
hz.addColorStop(0.5, "rgba(240,222,184,0.5)");
hz.addColorStop(1, "rgba(240,222,184,0)");
g.fillStyle = hz;
g.fillRect(-0.1, H - 0.03, A + 0.2, 0.06);
