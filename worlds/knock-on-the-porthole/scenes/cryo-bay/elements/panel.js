const s = e.state,
  t = e.t,
  R = e.rnd,
  fr = s.frost_density ?? 0.9,
  op = Math.max(0, Math.min(1, s.pod3_open ?? 0)),
  L = s.pod3_light ?? 0.2,
  ps = Math.max(0, Math.min(3, Math.round(s.panel_step ?? 0)));
g.fillStyle = "#0a0d11";
g.fillRect(0.12, -0.4, 0.12, 0.06);
g.fillStyle = "#141920";
g.fillRect(-0.17, -0.52, 0.34, 0.52);
g.save();
g.beginPath();
g.rect(-0.17, -0.52, 0.34, 0.52);
g.rect(-0.145, -0.495, 0.29, 0.47);
g.clip("evenodd");
for (let i = -2; i < 22; i++) {
  g.fillStyle = i % 2 ? "rgba(190,150,50,0.3)" : "rgba(12,12,12,0.5)";
  g.beginPath();
  g.moveTo(i * 0.05 - 0.17, -0.52);
  g.lineTo(i * 0.05 - 0.12, -0.52);
  g.lineTo(i * 0.05 - 0.64, 0);
  g.lineTo(i * 0.05 - 0.69, 0);
  g.closePath();
  g.fill();
}
g.restore();
g.fillStyle = "#0b0f14";
g.fillRect(-0.145, -0.495, 0.29, 0.47);
g.save();
g.translate(0, -0.462);
g.scale(0.0021, 0.0021);
g.font = "bold 10px monospace";
g.textAlign = "center";
g.fillStyle = "rgba(220,180,90,0.55)";
g.fillText(tr('MANUAL RELEASE'), 0, 0);
g.restore();
const fl = 0.85 + 0.15 * Math.sin(t * 7.7) * Math.sin(t * 1.3);
g.fillStyle = "#130a05";
g.fillRect(-0.115, -0.44, 0.23, 0.055);
g.save();
g.translate(0, -0.403);
g.scale(0.0019, 0.0019);
g.font = "10px monospace";
g.textAlign = "center";
g.fillStyle = "rgba(255,170,80," + (0.35 + 0.45 * L) * fl + ")";
g.fillText(op > 0.02 ? tr('CRYO-3 · OPEN') : ps >= 3 ? tr('CRYO-3 · READY') : tr('CRYO-3 · LOCKED'), 0, 0);
g.restore();
for (let i = 0; i < 3; i++) {
  const x = -0.07 + i * 0.07,
    y = -0.32,
    on = i < ps;
  g.fillStyle = "#262e38";
  g.beginPath();
  g.arc(x, y, 0.017, 0, 7);
  g.fill();
  g.strokeStyle = "#8a9098";
  g.lineWidth = 0.008;
  g.lineCap = "round";
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x, on ? y + 0.035 : y - 0.035);
  g.stroke();
  g.fillStyle = on ? "rgba(110,240,150," + (0.3 + 0.5 * L) + ")" : "rgba(230,70,50," + (0.15 + 0.3 * L) + ")";
  g.fillRect(x - 0.008, y - 0.07, 0.016, 0.012);
}
const lv = Math.min(1, op * 4);
g.fillStyle = "#050608";
g.fillRect(-0.013, -0.23, 0.026, 0.17);
const ky = -0.21 + lv * 0.13;
g.strokeStyle = "#3a414a";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0, -0.23);
g.lineTo(0, ky);
g.stroke();
g.fillStyle = "#6e2620";
g.fillRect(-0.055, ky - 0.016, 0.11, 0.032);
g.fillStyle = "rgba(255,150,120,0.25)";
g.fillRect(-0.055, ky - 0.016, 0.11, 0.006);
g.save();
g.translate(0, -0.035);
g.scale(0.0018, 0.0018);
g.font = "10px monospace";
g.textAlign = "center";
g.fillStyle = "rgba(220,180,90,0.4)";
g.fillText(tr('PULL DOWN'), 0, 0);
g.restore();
const fa = fr * (1 - 0.18 * ps);
g.fillStyle = "rgba(212,230,246," + 0.16 * fa + ")";
g.fillRect(-0.17, -0.52, 0.34, 0.52);
for (let i = 0; i < 350; i++) {
  const x = -0.17 + R() * 0.34,
    y = -R() * 0.52,
    a = R(),
    k = R(),
    edge = Math.min(x + 0.17, 0.17 - x, -y, y + 0.52);
  if (k > fa * (edge < 0.04 ? 1.3 : 0.6)) continue;
  g.fillStyle = "rgba(225,238,250," + (0.08 + 0.25 * a) + ")";
  const z = 0.002 + a * 0.005;
  g.fillRect(x, y, z, z);
}
g.strokeStyle = "rgba(225,238,250," + 0.25 * fa + ")";
g.lineWidth = 0.002;
for (let i = 0; i < 10; i++) {
  const x = -0.16 + R() * 0.32,
    l = 0.02 + R() * 0.05,
    d = (R() - 0.5) * 0.01;
  g.beginPath();
  g.moveTo(x, -0.51);
  g.lineTo(x + d, -0.51 + l);
  g.stroke();
}
e.light(0, -0.41, 0.3, "#ffb060", (0.08 + 0.15 * L) * fl);
