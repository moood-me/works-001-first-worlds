const mins = (t) => {
  const [h, m] = String(t).split(":").map(Number);
  return h * 60 + m;
};
const fmt = (m) => String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0");
const START = mins("18:20"),
  DUE = mins("18:47"),
  END = mins("19:10");
const duskAt = (t) => Math.max(0, Math.min(1, (mins(t) - START) / (END - START)));
const follow = (t, over) => {
  const v = duskAt(t);
  over ? scene.set("dusk", v, over) : scene.set("dusk", v);
  if (!scene.get("lamp") && v >= 0.45) {
    scene.set("lamp", true);
    scene.tell("Над скамейкой, помигав, зажглась лампа дневного света.", "shelter");
  }
  if (mins(t) >= DUE && scene.get("bus") === "далеко") scene.set("bus", "подъезжает");
};
const depart = () =>
  scene.after(30, () => {
    if (scene.get("bus") === "стоит") scene.set("bus", "отходит");
  });
scene.on("change", "bus", (v) => {
  if (v === "подъезжает") {
    scene.set("busX", 0);
    scene.set("busX", 1, 14);
    scene.after(14, () => {
      if (scene.get("bus") === "подъезжает") scene.set("bus", "стоит");
    });
  } else if (v === "стоит") {
    scene.set("busX", 1);
    scene.tell("Седьмой остановился у навеса и открыл двери. Водитель смотрит на скамейку и ждёт.", "bus");
    depart();
  } else if (v === "отходит") {
    scene.set("busX", 2, 14);
    scene.after(14, () => {
      if (scene.get("bus") === "отходит") scene.set("bus", "уехал");
    });
  } else if (v === "уехал") {
    scene.set("busX", 2);
    const gone = scene.get("haruna") === "в автобусе";
    if (gone) scene.set("haruna", "уехала");
    scene.tell(
      gone
        ? "Седьмой ушёл к городу. На скамейке пусто, только фурин звенит."
        : "Седьмой ушёл к городу без неё. Харуна осталась на скамейке.",
      "bus",
    );
  } else if (v === "далеко") scene.set("busX", 0);
});
scene.on("change", "haruna", (v) => scene.set("gone", v === "в автобусе" || v === "уехала" ? 1 : 0, 2));
scene.on("change", "sota", (v) => scene.set("sotaX", v === "у остановки" ? 1 : 0, 14));
scene.on("change", "time", (t) => follow(t, 8));
const b = scene.get("bus");
if (b === "подъезжает") scene.set("bus", "стоит");
else if (b === "стоит") {
  scene.set("busX", 1);
  depart();
} else if (b === "отходит") scene.set("bus", "уехал");
scene.set("gone", ["в автобусе", "уехала"].includes(scene.get("haruna")) ? 1 : 0);
scene.set("sotaX", scene.get("sota") === "у остановки" ? 1 : 0);
follow(scene.get("time"));
scene.every(10, () => {
  const m = mins(scene.get("time"));
  if (m < END) scene.set("time", fmt(m + 1));
});
