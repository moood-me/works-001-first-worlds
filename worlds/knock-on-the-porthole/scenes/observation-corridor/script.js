const VZ = { hatch: 2, porthole: 6.4, door: 9.2, gone: 9.9 };
const DO = { locked: 0, jammed: 0.03, ajar: 0.3, open: 1 };
const doorMsg = {
  open: tr('The doors of airlock 2 have opened all the way. Cold drifts out of the chamber, vapour creeps across the floor.'),
  ajar: tr('The doors of airlock 2 have parted a hand\'s width and stuck.'),
  locked: tr('Airlock 2 has closed and locked.'),
};
const veraMsg = {
  door: tr('Vera has reached the airlock and taken hold of the manual drive\'s handle.'),
  porthole: tr('Vera has stopped at a porthole; beyond the glass, the red disc of the dwarf.'),
  hatch: tr('Vera has gone back to the observation bay hatch.'),
  gone: tr('Vera has disappeared into the airlock.'),
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
    scene.after(20, () => scene.tell(tr('A trail of frost footprints from the airlock has reached the observation bay hatch.'), "frost"));
});
scene.every(30, () => {
  const o = scene.get("oxygen") ?? 19;
  if (o > 0) {
    scene.set("oxygen", o - 1);
    if (o - 1 === 10) scene.tell(tr('Ten percent of the oxygen is left in the corridor.'), "lida");
  }
});
scene.after(40, () => {
  if (scene.get("distant_suit_radio") === "static" && !scene.get("radio_heard")) {
    scene.set("radio_heard", true);
    scene.tell(tr('The speaker by the airlock has come alive: hiss on the channel of suit 2, as if someone is holding down the talk button.'), "intercom");
  }
});
