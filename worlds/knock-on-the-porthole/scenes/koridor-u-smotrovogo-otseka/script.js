const VZ = { hatch: 2, porthole: 6.4, door: 9.2, gone: 9.9 };
const DO = { locked: 0, jammed: 0.03, ajar: 0.3, open: 1 };
const doorMsg = {
  open: "Створки шлюза №2 разошлись до конца. Из камеры тянет холодом, по полу стелется пар.",
  ajar: "Створки шлюза №2 разошлись на ладонь и встали.",
  locked: "Шлюз №2 сомкнулся и заблокировался.",
};
const veraMsg = {
  door: "Вера дошла до шлюза и взялась за рукоять ручного привода.",
  porthole: "Вера остановилась у иллюминатора; за стеклом — красный диск карлика.",
  hatch: "Вера вернулась к люку смотрового отсека.",
  gone: "Вера скрылась в шлюзе.",
};
const moveVera = (p) => {
  const z = VZ[p] ?? 2,
    cur = scene.get("vera_z") ?? 2;
  if (Math.abs(z - cur) < 0.01) return;
  const dt = Math.max(0.5, Math.abs(z - cur) / 0.6);
  scene.set("vera_z", z, dt);
  scene.after(dt + 0.1, () => {
    if (scene.get("vera_position") === p && veraMsg[p]) scene.tell(veraMsg[p], "vera");
  });
};
const moveDoor = (st) => {
  const d = DO[st] ?? 0.03,
    cur = scene.get("door_open") ?? 0;
  if (Math.abs(d - cur) < 0.002) return;
  const dt = Math.max(1.5, Math.abs(d - cur) * 14);
  scene.set("door_open", d, dt);
  scene.after(dt + 0.1, () => {
    if (scene.get("airlock_door") === st && doorMsg[st]) scene.tell(doorMsg[st], "airlock");
  });
};
scene.on("change", "vera_position", (v) => moveVera(v));
scene.on("change", "airlock_door", (v) => moveDoor(v));
moveVera(scene.get("vera_position") || "hatch");
moveDoor(scene.get("airlock_door") || "jammed");
scene.every(25, () => {
  const st = scene.get("airlock_door"),
    f = scene.get("frost_trail") ?? 0;
  if (st === "locked" || f >= 1) return;
  const n = Math.min(1, f + (st === "open" ? 0.08 : st === "ajar" ? 0.05 : 0.025));
  scene.set("frost_trail", n, 20);
  if (f < 0.95 && n >= 0.95)
    scene.after(20, () => scene.tell("Цепочка инеевых следов от шлюза дошла до люка смотрового отсека.", "frost"));
});
scene.every(30, () => {
  const o = scene.get("oxygen") ?? 19;
  if (o > 0) {
    scene.set("oxygen", o - 1);
    if (o - 1 === 10) scene.tell("Кислорода в коридоре осталось десять процентов.", "lida");
  }
});
scene.after(40, () => {
  if (scene.get("distant_suit_radio") === "static" && !scene.get("radio_heard")) {
    scene.set("radio_heard", true);
    scene.tell("Динамик у шлюза ожил: шипение на канале скафандра №2, будто кто-то держит тангенту.", "intercom");
  }
});
