const told = {};
scene.on("change", "flip", (v) => {
  if (v >= 0.98 && !told.back) {
    told.back = 1;
    scene.tell(
      "Фотографию перевернули: на обороте надпись — «" +
        String(scene.get("back_text") || "").replace(/\n/g, " ") +
        "».",
    );
  }
  if (v < 0.5) told.back = 0;
});
scene.on("change", "paper_bend", (v) => {
  if (v > 0.75 && !told.bend) {
    told.bend = 1;
    scene.tell("Уголок снимка отогнулся — на обороте видны первые буквы надписи.");
  }
  if (v < 0.5) told.bend = 0;
});
scene.on("change", "lamp_glow", (v) => {
  if (v < 0.15 && !told.dark) {
    told.dark = 1;
    scene.tell("Лампа почти погасла — снимок едва различим.");
  }
  if (v > 0.3) told.dark = 0;
});
scene.on("change", "fingers_holding", (v) => {
  if (v === "none") scene.tell("Фотографию положили на стол.");
});
