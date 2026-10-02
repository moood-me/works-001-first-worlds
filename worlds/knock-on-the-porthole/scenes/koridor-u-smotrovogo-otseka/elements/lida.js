const s = e.state,
  t = e.t,
  st = s.airlock_door || "jammed";
e.at(0, -1.68);
const L = s.corridor_light || "emergency",
  dim = L === "off" ? 0.6 : 1;
g.fillStyle = "#0f1216";
g.fillRect(-0.3, -1.64, 0.6, 0.62);
g.strokeStyle = "#07080a";
g.lineWidth = 0.02;
g.strokeRect(-0.3, -1.64, 0.6, 0.62);
const sc = g.createLinearGradient(0, -1.58, 0, -1.1);
sc.addColorStop(0, "#1d1108");
sc.addColorStop(1, "#0e0805");
g.fillStyle = sc;
g.fillRect(-0.26, -1.58, 0.52, 0.5);
const pu = (0.6 + 0.25 * Math.sin(t * 0.8) + 0.15 * Math.sin(t * 2.3)) * dim;
const ex = -0.18,
  ey = -1.43;
let c = g.createRadialGradient(ex, ey, 0, ex, ey, 0.065);
c.addColorStop(0, "rgba(255,190,110," + 0.9 * pu + ")");
c.addColorStop(0.35, "rgba(255,120,40," + 0.5 * pu + ")");
c.addColorStop(1, "rgba(120,40,10,0)");
g.fillStyle = c;
g.beginPath();
g.arc(ex, ey, 0.065, 0, 6.2832);
g.fill();
g.strokeStyle = "rgba(255,150,70,0.7)";
g.lineWidth = 0.005;
g.beginPath();
g.arc(ex, ey, 0.052, t * 0.5, t * 0.5 + 4.6);
g.stroke();
g.fillStyle = "#120804";
g.beginPath();
g.arc(ex, ey, 0.013, 0, 6.2832);
g.fill();
const ST = { locked: "ЗАБЛОКИРОВАН", jammed: "ЗАКЛИНЕН", ajar: "ПРИОТКРЫТ", open: "ОТКРЫТ" }[st] || "?";
const tc = Math.round(-8 - 30 * (s.frost_trail ?? 0.45));
g.save();
g.translate(-0.1, -1.5);
g.scale(0.0024, 0.0024);
g.font = "11px monospace";
g.fillStyle = "rgba(255,175,90,0.9)";
g.fillText("ЛИДА · КОРИДОР 2-4", 0, 0);
g.fillText("O2 " + (s.oxygen ?? 19) + "%   T " + tc + "°C", 0, 15);
g.fillStyle = st === "open" ? "rgba(255,175,90,0.9)" : "rgba(255,90,60," + (Math.sin(t * 3) > 0 ? 1 : 0.5) + ")";
g.fillText("ШЛЮЗ 2: " + ST, 0, 30);
g.fillStyle = "rgba(255,205,140,0.95)";
g.fillText("ЭКИПАЖ НА БОРТУ: 3/3", 0, 45);
const rd = s.distant_suit_radio || "static";
if (rd !== "silent") {
  g.fillStyle = "rgba(255,150,80,0.8)";
  g.fillText(rd === "voice" ? "КАН. 2: ГОЛОС" : "КАН. 2: ШУМ", 0, 60);
}
g.restore();
g.strokeStyle = "rgba(255,160,80,0.55)";
g.lineWidth = 0.004;
g.beginPath();
for (let i = 0; i <= 50; i++) {
  const x = -0.24 + (i * 0.48) / 50,
    a = 0.006 * Math.sin(i * 1.7 + t * 9) * Math.sin(i * 0.31 + t * 2.1);
  g.lineTo(x, -1.12 + a);
}
g.stroke();
e.light(0, -1.35, 1.0, "#ff9a4a", 0.38 * pu);
