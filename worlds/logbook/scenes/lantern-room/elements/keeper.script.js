scene.on("click", () => {
  if (scene.get("keeper_present")) scene.tell(tr('The player speaks to Savely Andreich.'));
});
