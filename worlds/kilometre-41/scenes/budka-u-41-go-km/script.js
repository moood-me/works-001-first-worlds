function arm() {
  if (scene.get("ringing") && scene.get("receiver") === "hook") {
    scene.after(30, () => {
      if (scene.get("ringing") && scene.get("receiver") === "hook") {
        scene.set("ringing", false);
        scene.tell("Телефон в будке звонил и замолчал.", "booth");
      }
    });
  }
}
scene.on("load", arm);
scene.on("change", "ringing", (v) => {
  if (v) arm();
});
scene.on("change", "receiver", (v) => {
  if (v !== "hook" && scene.get("ringing")) {
    scene.set("ringing", false);
    scene.tell("Трубку сняли — звонок оборвался.", "booth");
  }
});
