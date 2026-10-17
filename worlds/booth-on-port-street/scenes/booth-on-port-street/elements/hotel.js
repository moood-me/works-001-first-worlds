const s = e.state,
  t = e.t;
g.fillStyle = "#17161b";
g.fillRect(-15, -11.5, 22, 11.8);
let gr = g.createLinearGradient(0, -11.5, 0, 0);
gr.addColorStop(0, "rgba(4,5,8,0.6)");
gr.addColorStop(1, "rgba(40,34,36,0)");
g.fillStyle = gr;
g.fillRect(-15, -11.5, 22, 11.8);
g.fillStyle = "#0e0e12";
g.fillRect(-15.2, -11.9, 22.4, 0.5);
g.fillRect(-15, -4.4, 22, 0.3);
g.fillRect(6.6, -11.5, 0.4, 11.8);
for (let fl = 0; fl < 2; fl++) {
  const wy = [-10.4, -7.1][fl];
  for (let c = 0; c < 5; c++) {
    const wx = -13.4 + c * 3.6;
    g.fillStyle = "#0a0b0f";
    g.fillRect(wx, wy, 1.4, 2.2);
    if (fl === 0 && c === 3) continue;
    g.fillStyle = "rgba(80,90,110,0.07)";
    g.fillRect(wx + 0.12, wy + 0.12, 0.5, 1.95);
  }
}
const W = s.window;
const wx = -2.6,
  wy = -10.4;
if (W !== "dark") {
  const f = 0.92 + 0.04 * Math.sin(t * 0.7) + 0.03 * Math.sin(t * 1.9);
  let lg = g.createLinearGradient(wx, wy, wx + 1.4, wy + 2.2);
  lg.addColorStop(0, "rgba(222,170,104," + 0.75 * f + ")");
  lg.addColorStop(1, "rgba(170,110,60," + 0.6 * f + ")");
  g.fillStyle = lg;
  g.fillRect(wx, wy, 1.4, 2.2);
  g.fillStyle = "rgba(120,70,40,0.35)";
  g.fillRect(wx, wy, 0.25, 2.2);
  g.fillRect(wx + 1.15, wy, 0.25, 2.2);
  e.light(wx + 0.7, wy + 1.1, 2.2, "#dca868", 0.45 * f);
  if (W === "silhouette") {
    const sw = Math.sin(t * 0.37) * 0.06 + Math.sin(t * 0.91) * 0.02;
    g.fillStyle = "rgba(40,24,18,0.8)";
    g.beginPath();
    g.ellipse(wx + 0.72 + sw, wy + 0.75, 0.14, 0.17, 0, 0, 7);
    g.fill();
    g.beginPath();
    g.moveTo(wx + 0.35 + sw, wy + 2.2);
    g.quadraticCurveTo(wx + 0.4 + sw, wy + 1.0, wx + 0.72 + sw, wy + 0.95);
    g.quadraticCurveTo(wx + 1.04 + sw, wy + 1.0, wx + 1.09 + sw, wy + 2.2);
    g.fill();
  }
}
g.fillStyle = "#0d0d11";
g.fillRect(wx - 0.1, wy + 2.2, 1.6, 0.12);
g.fillStyle = "#101015";
g.fillRect(-4.3, -3.3, 2.2, 3.3);
g.fillStyle = "rgba(190,140,80,0.14)";
g.fillRect(-4.1, -3.1, 0.85, 3.1);
g.fillRect(-3.15, -3.1, 0.85, 3.1);
g.fillStyle = "#0b0b0f";
g.beginPath();
g.moveTo(-4.8, -3.7);
g.lineTo(-1.6, -3.7);
g.lineTo(-1.9, -3.2);
g.lineTo(-4.5, -3.2);
g.fill();
for (const x of [-13.5, -9.5, 0.5]) {
  g.fillStyle = "#0b0c10";
  g.fillRect(x, -3.3, 2.6, 2.6);
  g.fillStyle = "rgba(90,100,120,0.05)";
  g.fillRect(x + 0.2, -3.1, 1, 2.2);
}
let N = s.neon === "off" ? 0 : 1;
if (s.neon === "flickering") {
  const n = Math.sin(t * 9.7) * Math.sin(t * 2.3) + 0.6 * Math.sin(t * 0.43);
  N = n > 0.75 ? 0.05 : n > 0.6 ? 0.45 : 1;
}
g.fillStyle = "#0c0c10";
g.fillRect(4.8, -10.3, 1.4, 6.2);
g.fillRect(4.4, -10, 0.4, 0.14);
g.fillRect(4.4, -4.5, 0.4, 0.14);
g.font = "bold 1.0px serif";
g.textAlign = "center";
g.textBaseline = "middle";
const L = [...tr('HOTEL')];
for (let i = 0; i < L.length; i++) {
  const dead = i === 2;
  const a = dead ? 0.1 : 0.12 + 0.8 * N;
  g.fillStyle = "rgba(205,70,80," + a + ")";
  g.fillText(L[i], 5.5, -9.6 + i * 1.2);
}
if (N > 0) e.light(5.5, -7.2, 3.8, "#c2414b", 0.55 * N);
