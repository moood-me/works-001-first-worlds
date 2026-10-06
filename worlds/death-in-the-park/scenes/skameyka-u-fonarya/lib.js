// The park's own time, slowed by `stillness` (1 — it stands still): its seconds go by as fast as
// 1 − stillness lets them, added up frame by frame (beforeFrame — drawn or not), the same for the
// lamp's moth, the leaves and the mist. A gap of half a second or more (the page hidden) adds nothing.
let w = null, last = null;
return {
  beforeFrame({ t, state }) {
    const still = state.stillness || 0;
    if (w == null) w = t * (1 - still);
    else if (t - last > 0 && t - last < 0.5) w += (t - last) * (1 - still);
    last = t;
  },
  // the park's time now — for painting that moves by it (it reads e.t: repainted every frame)
  slow: e => { const t = e.t; return w ?? t * (1 - (e.state.stillness || 0)); },
};
