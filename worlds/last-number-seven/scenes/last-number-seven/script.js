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
    scene.tell(tr('Over the bench a fluorescent lamp blinks and comes on.'), "shelter");
  }
  if (mins(t) >= DUE && scene.get("bus") === "far") scene.set("bus", "arriving");
};
const depart = () =>
  scene.after(30, () => {
    if (scene.get("bus") === "waiting") scene.set("bus", "leaving");
  });
scene.on("change", "bus", (v) => {
  if (v === "arriving") {
    scene.set("busX", 0);
    scene.set("busX", 1, 14);
    scene.after(14, () => {
      if (scene.get("bus") === "arriving") scene.set("bus", "waiting");
    });
  } else if (v === "waiting") {
    scene.set("busX", 1);
    scene.tell(tr('The seven has pulled up at the shelter and opened its doors. The driver looks at the bench and waits.'), "bus");
    depart();
  } else if (v === "leaving") {
    scene.set("busX", 2, 14);
    scene.after(14, () => {
      if (scene.get("bus") === "leaving") scene.set("bus", "gone");
    });
  } else if (v === "gone") {
    scene.set("busX", 2);
    const gone = scene.get("haruna") === "on the bus";
    if (gone) scene.set("haruna", "gone");
    scene.tell(
      gone
        ? tr('The seven has gone off toward town. The bench is empty; only the furin rings.')
        : tr('The seven has gone off toward town without her. Haruna is still on the bench.'),
      "bus",
    );
  } else if (v === "far") scene.set("busX", 0);
});
scene.on("change", "haruna", (v) => scene.set("gone", v === "on the bus" || v === "gone" ? 1 : 0, 2));
scene.on("change", "sota", (v) => scene.set("sotaX", v === "at the stop" ? 1 : 0, 14));
scene.on("change", "time", (t) => follow(t, 8));
const b = scene.get("bus");
if (b === "arriving") scene.set("bus", "waiting");
else if (b === "waiting") {
  scene.set("busX", 1);
  depart();
} else if (b === "leaving") scene.set("bus", "gone");
scene.set("gone", ["on the bus", "gone"].includes(scene.get("haruna")) ? 1 : 0);
scene.set("sotaX", scene.get("sota") === "at the stop" ? 1 : 0);
follow(scene.get("time"));
scene.every(10, () => {
  const m = mins(scene.get("time"));
  if (m < END) scene.set("time", fmt(m + 1));
});
