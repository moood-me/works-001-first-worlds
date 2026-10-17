const S = e.state,
  L = ((v) =>
    v === false || v === "false" ? 0 : v == null || v === true || v === "true" ? 1 : Math.max(0, Math.min(1, +v || 0)))(
    S.lamp_on,
  ),
  hold = S.photo_holder === "granddaughter";
const pd = Math.max(0, Math.min(1, isFinite(+S.photo_distance_to_nina) ? +S.photo_distance_to_nina : 0.6));
const br = Math.sin(e.t * 0.8) * 0.006 + Math.sin(e.t * 0.37 + 1) * 0.003;
const lean = hold ? (1 - pd) * 0.14 : 0.03;
const sx = -0.04 - lean,
  sy = -0.98 + lean * 0.35 + br;
g.lineCap = "round";
g.lineJoin = "round";
g.fillStyle = "rgba(10,6,3,0.35)";
g.beginPath();
g.ellipse(-0.12, 0, 0.45, 0.05, 0, 0, 7);
g.fill();
// stool
g.fillStyle = "#2a170b";
g.fillRect(-0.18, -0.44, 0.035, 0.44);
g.fillRect(0.15, -0.44, 0.035, 0.44);
g.fillStyle = "#4a2a16";
g.fillRect(-0.21, -0.48, 0.43, 0.05);
g.fillStyle = `rgba(255,207,138,${0.08 + 0.2 * L})`;
g.fillRect(0.1, -0.48, 0.12, 0.01);
// legs
g.strokeStyle = "#1e1b1a";
g.lineWidth = 0.13;
g.beginPath();
g.moveTo(0.02, -0.53);
g.lineTo(-0.38, -0.53);
g.lineTo(-0.41, -0.07);
g.stroke();
g.fillStyle = "#14100c";
g.beginPath();
g.ellipse(-0.46, -0.03, 0.11, 0.035, 0, 0, 7);
g.fill();
const H = hold ? [-0.75 + 0.6 * pd, -(0.88 + 0.14 * pd)] : [-0.34, -0.6];
const arm = (x0, y0, x1, y1, c, w) => {
  const dx = x1 - x0,
    dy = y1 - y0,
    d = Math.max(0.001, Math.hypot(dx, dy)),
    l = 0.31;
  const h = Math.sqrt(Math.max(0, l * l - (d * d) / 4));
  let nx = -dy / d,
    ny = dx / d;
  if (ny < 0) {
    nx = -nx;
    ny = -ny;
  }
  const ex = (x0 + x1) / 2 + nx * h,
    ey = (y0 + y1) / 2 + ny * h;
  g.strokeStyle = c;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x0, y0);
  g.lineTo(ex, ey);
  g.lineTo(x1, y1);
  g.stroke();
};
arm(sx - 0.1, sy + 0.07, H[0] - (hold ? 0.09 : 0.02), H[1] + 0.01, "#262520", 0.075);
// torso: a dark cardigan, her back half to us
const cg = g.createLinearGradient(-0.2, 0, 0.22, 0);
cg.addColorStop(0, "#3a3a33");
cg.addColorStop(1, "#25241f");
g.fillStyle = cg;
g.beginPath();
g.moveTo(0.2, -0.47);
g.quadraticCurveTo(0.24, -0.8, sx + 0.15, sy + 0.03);
g.quadraticCurveTo(sx + 0.02, sy - 0.05, sx - 0.13, sy + 0.05);
g.quadraticCurveTo(sx - 0.17, -0.7, -0.16, -0.47);
g.closePath();
g.fill();
g.strokeStyle = "rgba(0,0,0,0.18)";
g.lineWidth = 0.008;
for (let k = 0; k < 4; k++) {
  g.beginPath();
  g.moveTo(-0.08 + k * 0.07, -0.5);
  g.quadraticCurveTo(-0.06 + k * 0.06 - lean * 0.5, -0.75, sx - 0.06 + k * 0.06, sy + 0.08);
  g.stroke();
}
g.strokeStyle = `rgba(255,200,130,${0.1 + 0.28 * L})`;
g.lineWidth = 0.014;
g.beginPath();
g.moveTo(0.2, -0.5);
g.quadraticCurveTo(0.24, -0.8, sx + 0.15, sy + 0.03);
g.stroke();
// neck and head, turned toward Nina
const hx = sx - 0.02 - lean * 0.3,
  hy = sy - 0.16;
g.fillStyle = "#b8987a";
g.fillRect(hx - 0.03, hy + 0.05, 0.06, 0.08);
g.fillStyle = "#d8b898";
g.beginPath();
g.ellipse(hx - 0.025, hy + 0.005, 0.08, 0.098, 0, 0, 7);
g.fill();
g.fillStyle = "#2a1a12";
g.beginPath();
g.ellipse(hx + 0.012, hy - 0.012, 0.086, 0.104, 0.15, 0, 7);
g.fill();
g.beginPath();
g.moveTo(hx + 0.06, hy - 0.02);
g.quadraticCurveTo(hx + 0.12, hy + 0.12, sx + 0.12, sy + 0.2 + br);
g.lineTo(sx + 0.03, sy + 0.17 + br);
g.quadraticCurveTo(hx + 0.04, hy + 0.1, hx + 0.0, hy + 0.04);
g.closePath();
g.fill();
g.fillStyle = "#8a6a34";
g.beginPath();
g.ellipse(hx + 0.07, hy + 0.06, 0.02, 0.012, 0.6, 0, 7);
g.fill();
g.strokeStyle = `rgba(255,200,130,${0.12 + 0.3 * L})`;
g.lineWidth = 0.01;
g.beginPath();
g.arc(hx + 0.012, hy - 0.012, 0.09, -1.2, 0.5);
g.stroke();
e.at(hx, hy - 0.12);
arm(sx + 0.03, sy + 0.08, H[0] + (hold ? 0.09 : 0.03), H[1] + 0.02, "#302f29", 0.08);
if (!hold) {
  g.fillStyle = "#c8a888";
  g.beginPath();
  g.ellipse(H[0] + 0.03, H[1] + 0.02, 0.045, 0.025, 0, 0, 7);
  g.fill();
}
