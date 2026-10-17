function serega(v, over) {
  const up = v === "squatting" ? 0 : 1,
    gone = v === "gone" ? 1 : 0;
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
    scene.set("uaz", "waiting");
    scene.set("dog", "awake");
    scene.tell(tr('The draft office\'s UAZ van rolls out from behind the garages and stops by the entrance. Sharik lifts his head.'), "van");
  });
}
function uazLeave() {
  scene.set("uazX", 1);
  scene.set("uazX", 2, 9);
  scene.after(9.2, () => scene.tell(tr('The van has disappeared behind the garages.'), "van"));
}
scene.on("load", (s) => {
  serega(s.serega, 0);
  if (s.uaz === "coming") {
    scene.set("uaz", "waiting");
    scene.set("uazX", 1);
  }
  if (s.uaz === "gone") scene.set("uazX", 2);
});
scene.every(20, () => {
  const t = Math.round(scene.get("time"));
  if (t < 440) scene.set("time", t + 1, 20);
});
scene.on("change", "time", (v) => {
  if (v >= 360 && scene.get("uaz") === "none") scene.set("uaz", "coming");
});
scene.on("change", "uaz", (v) => {
  if (v === "coming") uazGo();
  if (v === "gone") uazLeave();
});
scene.on("change", "serega", (v) => {
  serega(v, 5);
  if (v === "gone" && scene.get("uaz") === "waiting") scene.after(7, () => scene.set("uaz", "gone"));
});
