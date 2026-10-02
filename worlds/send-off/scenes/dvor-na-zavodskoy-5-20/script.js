function serega(v, over) {
  const up = v === "на корточках" ? 0 : 1,
    gone = v === "уехал" ? 1 : 0;
  if (over) {
    scene.set("up", up, over * 0.3);
    scene.set("gone", gone, over);
  } else {
    scene.set("up", up);
    scene.set("gone", gone);
  }
}
function uazGo() {
  scene.set("uazX", 0);
  scene.set("uazX", 1, 10);
  scene.after(10.2, () => {
    scene.set("uaz", "стоит");
    scene.set("dog", "проснулся");
    scene.tell("Из-за гаражей выкатилась военкоматская «буханка» и встала у подъезда. Шарик поднял голову.", "buhanka");
  });
}
function uazLeave() {
  scene.set("uazX", 1);
  scene.set("uazX", 2, 9);
  scene.after(9.2, () => scene.tell("«Буханка» скрылась за гаражами.", "buhanka"));
}
scene.on("load", (s) => {
  serega(s.serega, 0);
  if (s.uaz === "едет") {
    scene.set("uaz", "стоит");
    scene.set("uazX", 1);
  }
  if (s.uaz === "уехал") scene.set("uazX", 2);
});
scene.every(20, () => {
  const t = Math.round(scene.get("time"));
  if (t < 440) scene.set("time", t + 1, 20);
});
scene.on("change", "time", (v) => {
  if (v >= 360 && scene.get("uaz") === "нет") scene.set("uaz", "едет");
});
scene.on("change", "uaz", (v) => {
  if (v === "едет") uazGo();
  if (v === "уехал") uazLeave();
});
scene.on("change", "serega", (v) => {
  serega(v, 5);
  if (v === "уехал" && scene.get("uaz") === "стоит") scene.after(7, () => scene.set("uaz", "уехал"));
});
