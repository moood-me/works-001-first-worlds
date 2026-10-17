const str = (v) => String(v == null ? "" : v);
const ns = () => {
  const n = str(scene.get("note_state"));
  return /read/.test(n) ? 2 : /unroll|open/.test(n) ? 1 : 0;
};
const bs = () => {
  const b = str(scene.get("bottle_state"));
  return /broke/.test(b) ? 2 : /slip/.test(b) ? 1 : 0;
};
const surf = () =>
  /strong|surf|storm/.test(str(scene.get("tide"))) || /storm/.test(str(scene.get("weather")));
const rain = () => /rain|storm/.test(str(scene.get("weather")));
const beamOn = () => {
  const b = scene.get("beam_pass");
  return b !== false && !/^no|off|false/i.test(str(b));
};
const catHere = () => {
  const c = scene.get("fitil_present");
  return c !== false && !/^no|false/i.test(str(c));
};
// strong tide: waves wash over the stone and take the bottle
let wash = 0;
scene.every(5, () => {
  if (!surf()) {
    wash = 0;
    return;
  }
  wash += 5;
  if (bs() === 0 && wash >= 30) {
    wash = 0;
    scene.set("bottle_state", "slipped");
    scene.tell(tr('A wave broke over the stone; the bottle slipped off and got stuck in a crack between the rocks.'));
  } else if (bs() === 1 && wash >= 25) {
    wash = 0;
    scene.set("bottle_state", "broken");
    scene.tell(
      tr('The next wave tore the bottle out of the crack; the glass burst against the stone. Shards glitter on the wet granite.'),
    );
  }
});
// rain on the open paper
let wet = 0;
scene.every(6, () => {
  if (rain() && ns() > 0) {
    wet += 6;
    if (wet >= 24 && !scene.get("ink_told")) {
      scene.set("ink_told", true);
      scene.tell(tr('Rain is falling on the unrolled paper; the lower lines are starting to run.'));
    }
  } else wet = 0;
});
// the beam on the open page
scene.every(10.5, () => {
  if (ns() === 2 && beamOn() && !scene.get("beam_read_told")) {
    scene.set("beam_read_told", true);
    scene.tell(tr('For a moment the lighthouse beam lay on the sheet: the first lines showed clearly, the ink glistened.'));
  }
});
scene.on("click", (id) => {
  const n = ns();
  if (id === "scroll") {
    if (n === 0) {
      scene.set("note_state", "unrolling");
      scene.tell(tr('The player prised the wax up with a fingernail: the seal cracked, the thread loosened, the scroll began to unroll.'));
    } else if (n === 1) {
      scene.set("note_state", "reading");
      scene.tell(tr('The player has unrolled the sheet all the way. The paper is wet, but the first lines can be read.'));
    } else scene.tell(tr('The player tilts the sheet to the moonlight, peering at the lines.'));
  } else if (id === "bottle") {
    const b = bs();
    scene.tell(
      b === 0
        ? tr('The player touches the bottle on the stone: is something still rolling about inside? No, only water.')
        : b === 1
          ? tr('The player reaches for the bottle in the crack: fingers slide on the wet glass.')
          : tr('The player looks at the shards: green glass, the neck with its sealing wax.'),
    );
  } else if (id === "fitil" && catHere())
    scene.tell(tr('Wick isn\'t looking at the bottle; he\'s looking at the scroll. The tip of his tail twitches.'));
});
