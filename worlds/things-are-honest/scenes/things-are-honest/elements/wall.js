g.beginPath();
g.rect(-7.5, -4.6, 15, 4.65);
g.rect(-3.3, -2.35, 1.5, 1.4); // the window
g.rect(2.3, -2.12, 1.0, 2.2); // the doorway
g.save();
g.clip("evenodd");
const gr = g.createLinearGradient(0, -4.6, 0, 0);
gr.addColorStop(0, "#120b06");
gr.addColorStop(0.35, "#2e1f14");
gr.addColorStop(1, "#3b2a1f");
g.fillStyle = gr;
g.fillRect(-7.5, -4.6, 15, 4.65);
// wallpaper: faded vertical stripes with small flowers
for (let x = -7.5; x < 7.5; x += 0.25) {
  g.fillStyle = "rgba(120,86,56,0.12)";
  g.fillRect(x, -4.6, 0.08, 4.6);
  for (let y = -4.4; y < -0.2; y += 0.32) {
    g.fillStyle = "rgba(160,120,80,0.14)";
    g.beginPath();
    g.arc(x + 0.165, y + ((x * 4) % 2) * 0.16, 0.025, 0, 7);
    g.fill();
  }
}
// the lamp's warmth on the wall, the cold of the window
let r = g.createRadialGradient(1.1, -1.3, 0, 1.1, -1.3, 3.2);
r.addColorStop(0, "rgba(255,190,110,0.32)");
r.addColorStop(1, "rgba(255,190,110,0)");
g.fillStyle = r;
g.fillRect(-3, -4.6, 8, 4.6);
r = g.createRadialGradient(-2.55, -1.6, 0, -2.55, -1.6, 2.2);
r.addColorStop(0, "rgba(159,180,224,0.08)");
r.addColorStop(1, "rgba(159,180,224,0)");
g.fillStyle = r;
g.fillRect(-5, -4, 5, 4);
// skirting board and the ceiling's shadow
g.fillStyle = "#4a3322";
g.fillRect(-7.5, -0.12, 15, 0.12);
const c = g.createLinearGradient(0, -4.6, 0, -2.9);
c.addColorStop(0, "rgba(0,0,0,0.7)");
c.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = c;
g.fillRect(-7.5, -4.6, 15, 1.7);
g.restore();
// the window frame, cross bar, sill and curtains
g.fillStyle = "#2a1a10";
g.fillRect(-2.58, -2.35, 0.06, 1.4);
g.fillRect(-3.3, -1.72, 1.5, 0.06);
g.strokeStyle = "#150d07";
g.lineWidth = 0.08;
g.strokeRect(-3.3, -2.35, 1.5, 1.4);
g.fillStyle = "#5a331c";
g.fillRect(-3.45, -0.97, 1.8, 0.07);
g.fillStyle = "rgba(159,180,224,0.05)";
g.fillRect(-3.3, -2.35, 1.5, 1.4);
const curtain = (x0, dir) => {
  const cg = g.createLinearGradient(x0, 0, x0 + dir * 0.45, 0);
  cg.addColorStop(0, "#6b2a22");
  cg.addColorStop(0.5, "#4a1c16");
  cg.addColorStop(1, "#2a0f0c");
  g.fillStyle = cg;
  g.beginPath();
  g.moveTo(x0, -2.55);
  g.quadraticCurveTo(x0 + dir * 0.3, -1.6, x0 + dir * 0.1, -0.75);
  g.lineTo(x0 + dir * 0.42, -0.75);
  g.quadraticCurveTo(x0 + dir * 0.28, -1.7, x0 + dir * 0.5, -2.55);
  g.fill();
};
curtain(-3.5, 1);
curtain(-1.6, -1);
g.fillStyle = "#5a331c";
g.fillRect(-3.6, -2.6, 2.1, 0.06);
// the doorway's frame
g.strokeStyle = "#1a0e06";
g.lineWidth = 0.1;
g.beginPath();
g.moveTo(2.3, 0);
g.lineTo(2.3, -2.12);
g.lineTo(3.3, -2.12);
g.lineTo(3.3, 0);
g.stroke();
