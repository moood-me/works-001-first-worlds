const s = e.state,
  t = e.t;
const W = s.window;
g.fillStyle = "#0d0e12";
g.fillRect(-0.6, -1.4, 1.2, 1.4);
e.at(0, -0.9);
if (W !== "dark") {
  const f = 0.95 + 0.03 * Math.sin(t * 0.8);
  let lg = g.createLinearGradient(0, -1.4, 0, 0);
  lg.addColorStop(0, "rgba(236,184,112," + 0.88 * f + ")");
  lg.addColorStop(1, "rgba(200,130,70," + 0.78 * f + ")");
  g.fillStyle = lg;
  g.fillRect(-0.55, -1.35, 1.1, 1.3);
  e.light(0, -0.7, 2.4, "#ecb46e", 0.5 * f);
  if (W === "mum at the window") {
    const sw = Math.sin(t * 0.31) * 0.03 + Math.sin(t * 0.83) * 0.01;
    g.fillStyle = "rgba(52,32,26,0.88)";
    g.beginPath();
    g.ellipse(0.1 + sw, -0.9, 0.11, 0.13, 0, 0, 7);
    g.fill();
    g.beginPath();
    g.ellipse(0.1 + sw, -1.03, 0.08, 0.05, 0, 0, 7);
    g.fill();
    g.beginPath();
    g.moveTo(-0.22 + sw, -0.05);
    g.quadraticCurveTo(-0.2 + sw, -0.72, 0.1 + sw, -0.76);
    g.quadraticCurveTo(0.4 + sw, -0.72, 0.42 + sw, -0.05);
    g.fill();
    g.beginPath();
    g.ellipse(0.33 + sw * 0.3, -0.56, 0.04, 0.06, 0, 0, 7);
    g.fill();
    e.at(0.1 + sw, -0.9);
  }
  g.fillStyle = "rgba(255,240,215,0.2)";
  g.fillRect(-0.55, -1.35, 0.28, 1.3);
  g.fillRect(0.27, -1.35, 0.28, 1.3);
  g.fillStyle = "#2a2522";
  g.fillRect(-0.03, -1.35, 0.06, 1.3);
  g.fillRect(-0.55, -1.0, 1.1, 0.05);
}
g.fillStyle = "#1c1d22";
g.fillRect(-0.68, 0, 1.36, 0.08);
