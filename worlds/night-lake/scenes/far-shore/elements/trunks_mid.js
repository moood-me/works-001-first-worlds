const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
g.fillStyle = "#0a101d";
g.beginPath();
g.moveTo(-100, 2);
for (let x = -100; x <= 100; x += 4) g.lineTo(x, 0.2 + 0.3 * Math.sin(x * 0.13) + 0.2 * h(x + 3000));
g.lineTo(100, 2);
g.closePath();
g.fill();
let x = -100,
  i = 0;
while (x < 100) {
  const w = 0.35 + 0.4 * h(i + 1);
  const ln = (h(i + 2) - 0.5) * 0.025;
  if (Math.abs(x) > 1.9) {
    const top = -48;
    g.fillStyle = h(i + 3) < 0.5 ? "#0a1120" : "#0c1424";
    g.beginPath();
    g.moveTo(x - w * 0.75, 0.4);
    g.quadraticCurveTo(x - w / 2, -0.6, x - w / 2, -1.2);
    g.lineTo(x - w * 0.35 + ln * 48, top);
    g.lineTo(x + w * 0.35 + ln * 48, top);
    g.lineTo(x + w / 2, -1.2);
    g.quadraticCurveTo(x + w / 2, -0.6, x + w * 0.75, 0.4);
    g.closePath();
    g.fill();
    g.strokeStyle = "rgba(130,150,195,0.13)";
    g.lineWidth = w * 0.12;
    g.beginPath();
    g.moveTo(x + w * 0.44, -1.2);
    g.lineTo(x + w * 0.3 + ln * 48, top);
    g.stroke();
    if (h(i + 4) < 0.3) {
      const by = -4 - 10 * h(i + 5),
        d = h(i + 6) < 0.5 ? -1 : 1;
      g.strokeStyle = "#0b1222";
      g.lineWidth = 0.08;
      g.beginPath();
      g.moveTo(x - ln * by, by);
      g.lineTo(x - ln * by + d * (1 + 1.5 * h(i + 7)), by - 0.6 - h(i + 8));
      g.stroke();
    }
  }
  x += 2 + 3.5 * h(i + 9);
  i++;
}
