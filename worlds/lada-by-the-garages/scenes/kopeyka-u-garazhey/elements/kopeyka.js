const s = e.state,
  t = e.t,
  d = s.dusk || 0,
  en = s.engine;
const shake =
  en === "чихает"
    ? Math.sin(t * 40) * 0.02 * (0.5 + 0.5 * Math.sin(t * 7))
    : en === "завелась"
      ? Math.sin(t * 55) * 0.012
      : 0;
g.fillStyle = "rgba(10,8,12,0.55)";
g.beginPath();
g.ellipse(0, 0.02, 2.4, 0.12, 0, 0, 7);
g.fill();
if (en !== "молчит") {
  for (let k = 0; k < 7; k++) {
    const ph = (t * 0.6 + k / 7) % 1;
    g.fillStyle = "rgba(150,160,180," + 0.3 * (1 - ph) + ")";
    g.beginPath();
    g.arc(-2.2 - ph * 1.2 + Math.sin(ph * 6 + k) * 0.1, -0.38 - ph * 0.7, 0.08 + ph * 0.35, 0, 7);
    g.fill();
  }
  if (en === "чихает") {
    const b = Math.max(0, Math.sin(t * 5.3)) ** 10;
    e.light(-2.15, -0.38, 0.6, "#ff9a40", 0.8 * b);
  }
}
g.save();
g.translate(0, shake);
const body = "#8c3b31";
g.fillStyle = body;
g.beginPath();
g.moveTo(-2.05, -0.35);
g.lineTo(-2.08, -0.85);
g.lineTo(-1.95, -0.93);
g.lineTo(-1.15, -0.95);
g.lineTo(-0.85, -1.4);
g.lineTo(0.55, -1.4);
g.lineTo(0.95, -0.97);
g.lineTo(2.0, -0.9);
g.lineTo(2.08, -0.82);
g.lineTo(2.06, -0.35);
g.closePath();
g.fill();
let hl = g.createLinearGradient(0, -1.4, 0, -0.35);
hl.addColorStop(0, "rgba(255,190,140," + 0.3 * (1 - d) + ")");
hl.addColorStop(0.4, "rgba(0,0,0,0)");
hl.addColorStop(1, "rgba(0,0,0,0.35)");
g.fillStyle = hl;
g.fill();
g.fillStyle = "rgba(60,70,90,0.9)";
g.beginPath();
g.moveTo(-1.02, -0.98);
g.lineTo(-0.8, -1.33);
g.lineTo(-0.2, -1.33);
g.lineTo(-0.2, -0.98);
g.fill();
g.beginPath();
g.moveTo(-0.1, -0.98);
g.lineTo(-0.1, -1.33);
g.lineTo(0.5, -1.33);
g.lineTo(0.82, -0.98);
g.fill();
g.fillStyle = "rgba(240,170,130," + (0.25 * (1 - d) + 0.05) + ")";
g.fillRect(-0.95, -1.3, 1.6, 0.08);
g.fillStyle = "rgba(220,210,200,0.45)";
g.fillRect(-2.0, -0.72, 4.0, 0.025);
g.fillStyle = "#b8b4ae";
g.fillRect(-2.17, -0.5, 0.2, 0.08);
g.fillRect(1.98, -0.5, 0.22, 0.08);
g.fillStyle = "#d8d0c0";
g.fillRect(-0.55, -0.86, 0.14, 0.03);
g.fillRect(0.45, -0.86, 0.14, 0.03);
g.fillStyle = "rgba(90,50,30,0.75)";
for (let i = 0; i < 10; i++) {
  g.beginPath();
  g.ellipse(-1.9 + e.rnd() * 3.8, -0.42 - e.rnd() * 0.15, 0.04 + e.rnd() * 0.08, 0.03, 0, 0, 7);
  g.fill();
}
g.fillStyle = "#1a1418";
for (const wx of [-1.35, 1.25]) {
  g.beginPath();
  g.arc(wx, -0.3, 0.37, Math.PI, 0);
  g.fill();
}
for (const wx of [-1.35, 1.25]) {
  g.fillStyle = "#141216";
  g.beginPath();
  g.arc(wx, -0.3, 0.3, 0, 7);
  g.fill();
  g.fillStyle = "#77737a";
  g.beginPath();
  g.arc(wx, -0.3, 0.13, 0, 7);
  g.fill();
}
g.fillStyle = "#c04030";
g.fillRect(-2.08, -0.8, 0.05, 0.14);
g.fillStyle = "#e8e0c8";
g.fillRect(2.03, -0.78, 0.05, 0.12);
if (en === "завелась") {
  e.light(2.1, -0.72, 1.8, "#ffe8b0", 0.85);
  e.light(-2.1, -0.73, 0.6, "#ff4030", 0.6);
}
g.fillStyle = "#1c1618";
g.fillRect(1.0, -0.95, 1.02, 0.1);
g.save();
g.translate(0.98, -0.97);
g.rotate(-1.15);
g.fillStyle = body;
g.fillRect(0, -0.06, 1.1, 0.06);
g.fillStyle = "rgba(0,0,0,0.3)";
g.fillRect(0, -0.01, 1.1, 0.01);
g.restore();
g.strokeStyle = "#222";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(1.9, -0.92);
g.lineTo(1.35, -1.8);
g.stroke();
g.restore();
