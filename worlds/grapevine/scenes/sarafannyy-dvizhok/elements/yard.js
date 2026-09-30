const gr = g.createLinearGradient(0, -28, 0, 28);
gr.addColorStop(0, "#a8cc72");
gr.addColorStop(1, "#7fb152");
g.fillStyle = gr;
g.fillRect(-36, -28, 72, 56);
for (let i = 0; i < 60; i++) {
  g.fillStyle = `rgba(${e.rnd() < 0.5 ? "70,120,40" : "190,220,120"},0.13)`;
  g.beginPath();
  g.ellipse((e.rnd() - 0.5) * 72, (e.rnd() - 0.5) * 56, 1.5 + e.rnd() * 4, 0.8 + e.rnd() * 2, e.rnd() * 3, 0, 7);
  g.fill();
}
// who talks to whom: worn trails (plane coordinates: x metres right, y = 32 − distance)
const P = { cat: [-9, 14], baba: [-5, 6], pig: [6, 2], lamp: [9, 13], post: [4.5, 19], boy: [-5, 19], pond: [0, 12] };
const edges = [
  ["cat", "baba"],
  ["baba", "pig"],
  ["pig", "lamp"],
  ["lamp", "post"],
  ["post", "boy"],
  ["boy", "cat"],
  ["pond", "cat"],
  ["pond", "pig"],
  ["pond", "boy"],
];
g.lineCap = "round";
for (const [a, b] of edges) {
  const [x0, y0] = P[a],
    [x1, y1] = P[b],
    mx = (x0 + x1) / 2,
    my = (y0 + y1) / 2,
    dx = mx - P.pond[0],
    dy = my - P.pond[1],
    d = Math.hypot(dx, dy) || 1;
  const push = a === "pond" || b === "pond" ? 0 : 2.5;
  g.beginPath();
  g.moveTo(x0, y0);
  g.quadraticCurveTo(mx + (dx / d) * push, my + (dy / d) * push, x1, y1);
  g.strokeStyle = "rgba(214,190,140,0.35)";
  g.lineWidth = 1.3;
  g.stroke();
  g.strokeStyle = "rgba(232,212,165,0.4)";
  g.lineWidth = 0.55;
  g.setLineDash([0.6, 0.8]);
  g.stroke();
  g.setLineDash([]);
}
// the pond's bank
g.fillStyle = "rgba(90,70,40,.5)";
g.beginPath();
g.ellipse(0, 12, 7.3, 4.8, 0, 0, 7);
g.fill();
g.fillStyle = "rgba(210,190,140,.7)";
g.beginPath();
g.ellipse(0, 12.1, 7.0, 4.5, 0, 0, 7);
g.fill();
// grass tufts, flowers, stones
for (let i = 0; i < 2200; i++) {
  const x = (e.rnd() - 0.5) * 72,
    y = (e.rnd() - 0.5) * 56;
  if ((x / 7.4) ** 2 + ((y - 12) / 4.9) ** 2 < 1) continue;
  g.strokeStyle = e.rnd() < 0.5 ? "rgba(60,110,40,0.5)" : "rgba(200,230,130,0.4)";
  g.lineWidth = 0.05;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x - 0.05 + e.rnd() * 0.1, y - 0.2 - e.rnd() * 0.2);
  g.stroke();
}
const fc = ["#fff8e8", "#ffd84a", "#f7a6c4", "#c8b8ff"];
for (let i = 0; i < 160; i++) {
  const x = (e.rnd() - 0.5) * 70,
    y = (e.rnd() - 0.5) * 54;
  if ((x / 7.8) ** 2 + ((y - 12) / 5.3) ** 2 < 1) continue;
  g.fillStyle = fc[i % 4];
  for (let q = 0; q < 5; q++) {
    g.beginPath();
    g.ellipse(x + Math.cos(q * 1.26) * 0.09, y + Math.sin(q * 1.26) * 0.09, 0.07, 0.07, 0, 0, 7);
    g.fill();
  }
  g.fillStyle = "#e8a120";
  g.beginPath();
  g.arc(x, y, 0.045, 0, 7);
  g.fill();
}
for (let i = 0; i < 26; i++) {
  const x = (e.rnd() - 0.5) * 60,
    y = (e.rnd() - 0.5) * 50;
  if ((x / 8.5) ** 2 + ((y - 12) / 6) ** 2 < 1) continue;
  g.fillStyle = "#b7ae9d";
  g.beginPath();
  g.ellipse(x, y, 0.2 + e.rnd() * 0.2, 0.15 + e.rnd() * 0.12, e.rnd() * 3, 0, 7);
  g.fill();
}
// the willow's shade, the houses' shade
g.fillStyle = "rgba(30,60,20,0.18)";
g.beginPath();
g.ellipse(2.5, 5.5, 6, 3.5, 0, 0, 7);
g.fill();
g.fillStyle = "rgba(40,30,20,0.16)";
g.fillRect(-15, -8, 11, 3);
g.fillRect(6, -10, 11, 3);
