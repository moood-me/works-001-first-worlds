const hhmm = (m) => {
  m = ((m % 1440) + 1440) % 1440;
  return String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0");
};
scene.every(30, () => {
  if (!scene.get("clock_motion")) return;
  const t = (+scene.get("clock_time") || 0) + 1;
  scene.set("clock_time", t);
  if (t % 60 === 0) scene.tell("Ходики пробили " + hhmm(t) + ".");
});
scene.on("change", "photo_distance_to_nina", (v, o) => {
  if (scene.get("photo_holder") === "granddaughter" && v <= 0.1 && o > 0.1)
    scene.tell("Фотография у самых рук бабушки Нины.");
});
scene.on("change", "nina_reaching", (v, o) => {
  if (v >= 0.9 && o < 0.9) {
    const near = scene.get("photo_holder") === "granddaughter" && +scene.get("photo_distance_to_nina") <= 0.3;
    scene.tell(
      near
        ? "Пальцы бабушки Нины коснулись фотографии — у самого вырезанного места."
        : "Бабушка Нина тянется к фотографии, но не достаёт.",
    );
  }
});
scene.after(80, () => {
  if (scene.get("box_open") && (+scene.get("letters_shifted") || 0) < 0.2) {
    scene.set("letters_shifted", 0.35, 4);
    scene.tell("В открытой шкатулке письма сами чуть сдвинулись: верхний конверт съехал набок.");
  }
});
