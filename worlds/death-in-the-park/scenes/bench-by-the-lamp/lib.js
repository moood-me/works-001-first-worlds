// The park's own time, slowed by `stillness` (1 — it stands still): its seconds go by as fast as
// 1 − stillness lets them, added up frame by frame (beforeFrame — drawn or not), the same for the
// lamp's moth, the leaves and the mist. A gap of half a second or more (the page hidden) adds nothing.
let w = null, last = null;
// Where the two stand and how, now — for their painting, and for their heads: marked each frame
// (beforeFrame), the camera follows them.
function hero(e) {
  const S = e.state || {}, t = e.t, x = S.hero_x == null ? -2.6 : S.hero_x, dx = S.death_x == null ? 1.36 : S.death_x;
  const mv = !!S.hero_moving, sit = (S.hero_pose || "stand") === "sit" && !mv;
  let f = dx >= x ? 1 : -1;
  if (mv && S.hero_to != null) f = S.hero_to >= x ? 1 : -1;
  else if ((S.hero_look || "death") === "away") f = -f;
  const br = Math.sin(t * 1.6) * 0.006 + Math.sin(t * 0.37) * 0.003;
  const ph = t * 6.2, hip = sit ? -0.58 : -0.9 - (mv ? Math.abs(Math.sin(ph)) * 0.02 : 0);
  const sx = sit ? f * 0.015 : f * (mv ? 0.07 : 0.035), sy = sit ? -1.17 + br : hip - 0.62 + br;
  const hdx = sx + f * (sit ? 0.02 : 0.03), hdy = sy - 0.14;
  return { x, f, mv, sit, ph, hip, sx, sy, hdx, hdy, head: [x + hdx, hdy - 0.15] };
}
function death(e) {
  const S = e.state || {}, x = S.death_x == null ? 1.36 : S.death_x, hx = S.hero_x == null ? -2.6 : S.hero_x;
  const mv = !!S.death_moving, sit = (S.death_pose || "sit") === "sit" && !mv;
  let f = hx >= x ? 1 : -1;
  if (mv && S.death_to != null) f = S.death_to >= x ? 1 : -1;
  const sh = sit ? -1.33 : -1.6, hdX = sit ? 0 : f * 0.01, hdY = sh - 0.2;
  return { x, f, mv, sit, sh, hdX, hdY, head: [x + hdX, hdY - 0.16] };
}
return {
  beforeFrame(e) {
    const { t, state } = e, still = state.stillness || 0;
    if (w == null) w = t * (1 - still);
    else if (t - last > 0 && t - last < 0.5) w += (t - last) * (1 - still);
    last = t;
    e.at("hero", ...hero(e).head);
    e.at("death", ...death(e).head);
  },
  hero,
  death,
  // the park's time now — for painting that moves by it (it reads e.t: repainted every frame)
  slow: e => { const t = e.t; return w ?? t * (1 - (e.state.stillness || 0)); },
};
