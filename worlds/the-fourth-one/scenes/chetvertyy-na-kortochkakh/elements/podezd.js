const t = e.t;
g.fillStyle = "#17171c";
g.fillRect(-8, -30, 13, 30.3);
g.strokeStyle = "rgba(8,8,10,0.6)";
g.lineWidth = 0.06;
for (let y = -30; y < 0; y += 2.8) {
  g.beginPath();
  g.moveTo(-8, y);
  g.lineTo(5, y);
  g.stroke();
}
for (let x = -8; x < 5; x += 3.2) {
  g.beginPath();
  g.moveTo(x, -30);
  g.lineTo(x, -2.8);
  g.stroke();
}
for (let f = 1; f < 10; f++) {
  const y = -2.8 * f - 1.9;
  for (const x of [-7.2, -4.0, 2.2]) {
    const r = e.rnd();
    g.fillStyle = r < 0.06 ? "rgba(190,130,75,0.4)" : "#0b0b0f";
    g.fillRect(x, y, 1.5, 1.4);
  }
  const r = e.rnd();
  const on = r < 0.4;
  const fl = on ? 0.8 + 0.2 * Math.sin(t * 23 + f) * Math.sin(t * 1.3 + f) : 0;
  g.fillStyle = on ? "rgba(150,165,145," + 0.3 * fl + ")" : "#0b0b0f";
  g.fillRect(-1.0, y - 0.6, 0.9, 1.0);
}
for (const x of [-7.2, -4.0, 2.2]) {
  g.fillStyle = "#0b0b0f";
  g.fillRect(x, -2.2, 1.5, 1.4);
  g.strokeStyle = "#202026";
  g.lineWidth = 0.04;
  for (let k = 1; k < 5; k++) {
    g.beginPath();
    g.moveTo(x + k * 0.3, -2.2);
    g.lineTo(x + k * 0.3, -0.8);
    g.stroke();
  }
}
g.fillStyle = "#1d1a17";
g.fillRect(-1.2, -2.1, 1.1, 2.1);
g.fillStyle = "#141316";
g.fillRect(-1.5, -0.18, 1.7, 0.18);
g.fillStyle = "#202024";
g.fillRect(-1.9, -2.55, 2.6, 0.16);
const f2 = 0.75 + 0.25 * Math.sin(t * 31) * Math.sin(t * 0.9) + 0.1 * Math.sin(t * 0.37);
g.fillStyle = "rgba(230,220,190," + 0.8 * f2 + ")";
g.beginPath();
g.arc(-0.6, -2.3, 0.05, 0, 7);
g.fill();
e.light(-0.6, -2.3, 2.4, "#d8d0b0", 0.4 * f2);
g.fillStyle = "#2a2a2e";
g.fillRect(0.05, -1.45, 0.14, 0.24);
const bl = Math.sin(t * 2.2) > 0.6 ? 1 : 0.15;
g.fillStyle = "rgba(255,60,50," + bl + ")";
g.fillRect(0.1, -1.42, 0.03, 0.03);
e.light(0.115, -1.41, 0.3, "#ff3030", 0.4 * bl);
g.fillStyle = "#16161a";
g.fillRect(1.0, -0.48, 2.0, 0.08);
g.fillRect(1.0, -0.85, 2.0, 0.06);
g.fillRect(1.1, -0.85, 0.06, 0.85);
g.fillRect(2.84, -0.85, 0.06, 0.85);
g.font = "0.28px sans-serif";
g.fillStyle = "rgba(200,195,185,0.2)";
g.fillText("Ленка дура", -4.4, -0.6);
