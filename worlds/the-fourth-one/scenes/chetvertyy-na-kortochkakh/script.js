scene.on("load", (s) => {
  scene.set("malGone", s.maloy === "убежал" ? 1 : 0);
});
scene.on("change", "maloy", (v) => scene.set("malGone", v === "убежал" ? 1 : 0, 4));
scene.every(20, () => {
  const s = scene.state;
  if (s.lamp === "горит" || s.fourth >= 1) return;
  const n = Math.min(1, Math.round(s.fourth * 10 + 1) / 10);
  scene.set("fourth", n, 5);
  scene.after(5.5, () => {
    if (n >= 1) scene.tell("Четвёртый подсел вплотную, в самый свет, и молча протянул руку: закурить.", "fourth");
    else if (n >= 0.6 && scene.get("garage") === "закрыт") {
      scene.set("garage", "приоткрыт");
      scene.tell("Ворота третьего гаража со скрипом приоткрылись. Изнутри никто не вышел.", "garage");
    } else scene.tell("Пока фонарь моргал, четвёртый оказался на шаг ближе.", "fourth");
  });
});
scene.every(30, () => {
  const s = scene.state;
  if (s.shnyr !== "лузгает" || s.seeds <= 0) return;
  const v = Math.max(0, Math.round((s.seeds - 0.1) * 10) / 10);
  scene.set("seeds", v);
  if (v <= 0) scene.tell("Семки у Шныря кончились.", "shnyr");
});
