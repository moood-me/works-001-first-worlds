const B = [
  [-210, -160, 28],
  [-148, -88, 48],
  [-70, -32, 28],
  [-12, 48, 48],
  [70, 110, 28],
];
for (const b of B) {
  const l = b[0],
    r = b[1],
    h = b[2],
    w = r - l;
  g.fillStyle = e.color;
  g.fillRect(l, -h, w, h);
  g.fillStyle = "rgba(40,46,46,0.22)";
  g.fillRect(r - w * 0.2, -h, w * 0.2, h);
  g.fillStyle = "rgba(255,255,250,0.07)";
  g.fillRect(l, -h, w * 0.15, h);
  g.fillStyle = "#4b5253";
  const fl = Math.floor(h / 2.8);
  for (let f = 1; f < fl; f++) {
    const y = -h + f * 2.8 + 0.8;
    for (let x = l + 1.4; x < r - 1.6; x += 2.5) {
      if (e.rnd() < 0.9) {
        g.globalAlpha = 0.4 + e.rnd() * 0.45;
        g.fillRect(x, y, 1.3, 1.25);
      }
    }
  }
  g.globalAlpha = 1;
  g.fillStyle = "#737a78";
  g.fillRect(l - 0.4, -h - 0.9, w + 0.8, 0.9);
}
g.save();
g.translate(18, -48.9);
g.strokeStyle = "#5a605f";
g.lineCap = "round";
g.lineWidth = 0.35;
g.beginPath();
g.moveTo(-7, 0);
g.lineTo(-7, -11);
g.lineTo(7, -11);
g.lineTo(7, 0);
g.moveTo(-7, -5.5);
g.lineTo(7, -5.5);
g.stroke();
g.lineWidth = 0.8;
g.beginPath();
g.arc(0, -5.5, 3.8, Math.PI * 0.7, Math.PI * 2.05);
g.stroke();
g.beginPath();
g.moveTo(-3, -2);
g.lineTo(2.6, -8.6);
g.moveTo(1.3, -9.6);
g.lineTo(3.9, -7.5);
g.stroke();
g.restore();
