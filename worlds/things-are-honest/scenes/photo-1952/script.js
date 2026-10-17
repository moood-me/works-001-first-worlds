const told = {};
scene.on("change", "flip", (v) => {
  if (v >= 0.98 && !told.back) {
    told.back = 1;
    scene.tell(
      tr('The photograph has been turned over: on the back it says “{text}”.', {
        text: String(scene.get("back_text") || tr('The dacha, June 1952.\nAll of us together.')).replace(/\n/g, " "),
      }),
    );
  }
  if (v < 0.5) told.back = 0;
});
scene.on("change", "paper_bend", (v) => {
  if (v > 0.75 && !told.bend) {
    told.bend = 1;
    scene.tell(tr('A corner of the photograph has curled: the first letters of the inscription show on the back.'));
  }
  if (v < 0.5) told.bend = 0;
});
scene.on("change", "lamp_glow", (v) => {
  if (v < 0.15 && !told.dark) {
    told.dark = 1;
    scene.tell(tr('The lamp has nearly gone out: the photograph can barely be made out.'));
  }
  if (v > 0.3) told.dark = 0;
});
scene.on("change", "fingers_holding", (v) => {
  if (v === "none") scene.tell(tr('The photograph has been put down on the table.'));
});
