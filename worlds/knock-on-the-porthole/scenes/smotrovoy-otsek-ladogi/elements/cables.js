const t = e.t;
g.lineCap = "round";
const cab = (x0, x1, sag, w, ph) => {
  const s = Math.sin(t * 0.4 + ph) * 0.03 + Math.sin(t * 0.17 + ph * 2) * 0.02;
  g.strokeStyle = "#07080b";
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x0, -3.6);
  g.quadraticCurveTo((x0 + x1) / 2 + s, -3.6 + sag, x1, -3.6);
  g.stroke();
};
cab(-2.6, -1.2, 1.3, 0.05, 0);
cab(-2.4, -1.6, 0.9, 0.03, 1.3);
cab(1.1, 2.7, 1.1, 0.045, 2.1);
const hang = (x, len, ph) => {
  const s = Math.sin(t * 0.5 + ph) * 0.04 + Math.sin(t * 0.21 + ph) * 0.03;
  g.strokeStyle = "#07080b";
  g.lineWidth = 0.035;
  g.beginPath();
  g.moveTo(x, -3.6);
  g.quadraticCurveTo(x + s * 0.5, -3.6 + len * 0.5, x + s, -3.6 + len);
  g.stroke();
  return [x + s, -3.6 + len];
};
const [ax, ay] = hang(-1.75, 1.55, 0.4);
hang(1.9, 1.2, 1.7);
const sp = Math.pow(Math.max(0, Math.sin(t * 0.7) * Math.sin(t * 3.9)), 8);
if (sp > 0.05) {
  g.fillStyle = "rgba(180,220,255," + sp + ")";
  g.beginPath();
  g.arc(ax, ay, 0.012, 0, 7);
  g.fill();
  e.light(ax, ay, 0.35, "#bfe0ff", sp * 0.8);
}
