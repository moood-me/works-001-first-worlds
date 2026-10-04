g.save();
g.beginPath();
g.moveTo(-1.3, -1.3);
g.lineTo(-0.9, -1.3);
g.lineTo(-0.9, -0.55);
g.lineTo(-0.9 + 0.61 * 0.75, 0.2);
g.lineTo(-1.3, 0.2);
g.closePath();
g.clip();
const px = -0.93,
  w = 0.15;
g.fillStyle = "#2c2826";
g.fillRect(px - w / 2, -0.565, w, 0.615);
g.fillStyle = "rgba(236,222,204,0.26)";
g.fillRect(px - w / 2, -0.565, 0.032, 0.565);
g.fillStyle = "rgba(20,22,26,0.35)";
g.fillRect(px - w / 2, -0.12, w, 0.17);
g.restore();
