function place(v, over) {
  if (v === "ушёл") {
    over ? scene.set("gone", 1, over) : scene.set("gone", 1);
    return;
  }
  const w = v === "в будке" ? 1 : 0;
  if (over) {
    scene.set("gone", 0, over * 0.6);
    scene.set("walk", w, over);
  } else {
    scene.set("gone", 0);
    scene.set("walk", w);
  }
}
scene.on("load", (s) => place(s.man, 0));
scene.on("change", "man", (v) => place(v, 6));
scene.on("change", "car", (v) => {
  if (v === "едет") {
    scene.set("carX", 0);
    scene.set("carX", 1, 7);
    scene.after(7.2, () => {
      scene.set("car", "нет");
      scene.tell("Мимо проехала машина и не сбавила хода.", "car");
    });
  }
});
