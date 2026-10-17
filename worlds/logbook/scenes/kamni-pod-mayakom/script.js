const str = (v) => String(v == null ? "" : v);
const isSurf = () =>
  /surf|storm/.test(str(scene.get("tide"))) || /storm/.test(str(scene.get("weather")));
const beamOn = () => {
  const b = scene.get("beam_pass");
  return b !== false && !/^no|off|false/i.test(str(b));
};
const catHere = () => {
  const c = scene.get("fitil_present");
  return c !== false && !/^no|false/i.test(str(c));
};
const where = () => {
  const b = str(scene.get("bottle_state"));
  return /broke/.test(b)
    ? "broken"
    : /hand/.test(b)
      ? "hands"
      : /clos/.test(b)
        ? "closer"
        : "stuck";
};
// a broken bottle lies where it was last: among the rocks, or at the player's feet
scene.on("change", "bottle_state", (v, old) => {
  if (/broke/.test(str(v))) scene.set("broken_at", /clos|hand/.test(str(old)) ? "near" : "rocks");
});
// strong surf works the bottle loose from the stones
let pull = 0;
scene.every(5, () => {
  if (isSurf() && where() === "stuck") {
    pull += 5;
    if (pull >= 45) {
      pull = 0;
      scene.set("bottle_state", "closer");
      scene.tell(tr('The heavy surf knocked the bottle out of the rocks; a wave rolled it almost to your feet.'));
    }
  } else pull = 0;
});
// the first time the beam finds the glass
scene.every(10.5, () => {
  if (scene.get("glint_told") || !beamOn()) return;
  const w = where();
  if (w === "stuck" || w === "closer") {
    scene.set("glint_told", true);
    scene.tell(tr('The lighthouse beam swept the shore; right at the water, between the rocks, green glass flashed.'));
  }
});
scene.on("click", (id) => {
  const w = where();
  if (id === "bottle" && w === "stuck")
    scene.tell(tr('The player reaches for the bottle between the rocks: icy water, foam up to the ankles.'));
  else if (id === "bottle_near" && w === "closer") {
    scene.set("bottle_state", "in_hands");
    scene.tell(tr('The player has picked the bottle out of the foam. Inside, a rolled-up note tied with red thread; the neck is sealed with wax.'));
  } else if ((id === "bottle" || id === "bottle_near") && w === "broken")
    scene.tell(tr('The player bends over the shards: the note is soaked, but still holding together.'));
  else if (id === "bottle_hands" && w === "hands")
    scene.tell(tr('The player turns the bottle over in their hands, peering at the note through the wet glass.'));
  else if (id === "fitil" && catHere()) scene.tell(tr('Wick doesn\'t take his eyes off the bottle; his ears are flattened against the wind.'));
});
