const POS = { doorway: [-1.45, 4.8], beside: [1.25, 2.9], panel: [1.12, 2.65], glass: [0.5, 2.45] };
const go = (p, sec) => {
  const q = POS[p] || POS.beside;
  scene.set("vera_ax", q[0], sec);
  scene.set("vera_d", q[1], sec);
};
const sync = () => {
  const p = scene.get("vera_position"),
    q = POS[p] || POS.beside,
    a = scene.get("vera_ax"),
    d = scene.get("vera_d");
  if (typeof a !== "number" || typeof d !== "number") {
    scene.set("vera_ax", q[0]);
    scene.set("vera_d", q[1]);
  } else if (Math.abs(a - q[0]) > 0.01 || Math.abs(d - q[1]) > 0.01) go(p, 2.5);
};
sync();
scene.on("load", sync);
scene.on("change", "vera_position", (v) => {
  const a = POS[v] || POS.beside,
    ax = scene.get("vera_ax"),
    d = scene.get("vera_d");
  const dist = Math.hypot(a[0] - (typeof ax === "number" ? ax : a[0]), a[1] - (typeof d === "number" ? d : a[1]));
  go(v, Math.max(1.2, dist * 1.5));
});
scene.every(47, () => {
  if (scene.get("stir_auto") === false) return;
  if ((scene.get("pod3_open") || 0) > 0.5) return;
  const n = (scene.get("stirs") || 0) + 1;
  scene.set("stirs", n);
  scene.set("stir", 1, 1.2);
  scene.after(1.8, () => scene.set("stir", 0, 4));
  scene.set("condensation", Math.min(1, (scene.get("condensation") || 0) + 0.03), 3);
  if (n === 1 || n % 4 === 0) scene.tell("За инеем капсулы №3 тёмный силуэт будто дрогнул — и снова замер.", "pod3");
});
scene.every(20, () => {
  const L = scene.get("pod3_light") || 0,
    op = scene.get("pod3_open") || 0,
    f = scene.get("frost_density") || 0,
    c = scene.get("condensation") || 0;
  if (L > 0.55 || op > 0.3) {
    if (f > 0) {
      const nf = Math.max(0, f - 0.05);
      scene.set("frost_density", nf, 15);
      if (f > 0.3 && nf <= 0.3)
        scene.tell("Иней на стекле капсулы №3 почти сошёл; стекло мокрое, сквозь него проступает силуэт.", "pod3");
    }
    if (c < 1) scene.set("condensation", Math.min(1, c + 0.05), 15);
  } else if (scene.get("vera_position") === "glass" && c < 1) {
    const nc = Math.min(1, c + 0.04);
    scene.set("condensation", nc, 10);
    if (c < 0.7 && nc >= 0.7) scene.tell("Стекло капсулы №3 запотело от дыхания Веры.", "pod3");
  }
});
scene.on("change", "pod3_open", (v, o) => {
  o = o || 0;
  if (o <= 0.02 && v > 0.02) scene.tell("Замок капсулы №3 щёлкнул; из щели потянуло ледяным паром.", "pod3");
  if (o < 0.98 && v >= 0.98) scene.tell("Дверца капсулы №3 откинута настежь, пар стелется по полу.", "pod3");
});
scene.on("change", "panel_step", (v, o) => {
  if (v >= 3 && (o || 0) < 3) scene.tell("Все три предохранителя ручной панели сняты — рычаг свободен.", "panel");
});
scene.every(30, () => {
  const o = scene.get("oxygen");
  if (typeof o === "number" && o > 0) {
    scene.set("oxygen", o - 1);
    if (o - 1 === 10) scene.tell("Кислорода на борту осталось десять процентов.", "lida");
  }
});
