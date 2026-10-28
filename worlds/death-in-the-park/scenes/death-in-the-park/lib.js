// Where the two stand and how, now — for their painting, and for their heads: marked each frame
// (beforeFrame — drawn or not), the camera follows them.
function hero(e) {
  const S = e.state || {}, t = e.t, x = S.hero_x == null ? 1.5 : S.hero_x, a = S.hero_action || "stand", f = S.hero_face || -1;
  const walk = a === "walk_right" || a === "walk_left" || a === "approach" || a === "go_away",
    run = a === "run_right" || a === "run_left";
  const ph = t * (run ? 11 : walk ? 6 : 0);
  if (a === "fall") return { x, a, f, walk, run, ph, head: [x + f * 0.68, -0.3] };
  const lean = run ? 0.28 : a === "catch_breath" ? 0.32 : a === "kneel" ? 0.05 : 0.06;
  const br = Math.sin(t * (a === "catch_breath" ? 7 : 1.6)) * (a === "catch_breath" ? 0.02 : 0.006);
  const bob = run ? Math.abs(Math.sin(ph)) * 0.05 : walk ? Math.abs(Math.sin(ph)) * 0.02 : 0;
  const hip = (a === "sit" ? -0.47 : a === "kneel" ? -0.52 : -0.9) - bob;
  const sx = lean * f, sy = hip - 0.62 + br, hdx = sx + f * 0.04, hdy = sy - 0.13;
  return { x, a, f, walk, run, ph, hip, sx, sy, hdx, hdy, head: [x + hdx, hdy - 0.12] };
}
function death(e) {
  const S = e.state || {}, t = e.t, x = S.death_x == null ? -12 : S.death_x, a = S.death_action || "wait",
    hx = S.hero_x == null ? 1.5 : S.hero_x, f = hx >= x ? 1 : -1;
  const moving = a === "approach" || a === "chase" || a === "follow" || a === "leave";
  const sit = a === "sit" && Math.abs(x - 4.25) < 0.3;
  const lean = a === "chase" ? 0.22 : moving ? 0.08 : 0;
  const bob = Math.sin(t * 1.2) * 0.03;
  const top = sit ? -1.55 : -2.05 + bob, hx0 = lean * f * 0.7, hy0 = top - 0.02;
  return { x, f, moving, sit, lean, bob, top, hx0, hy0, head: [x + hx0, hy0 - 0.25] };
}
return {
  beforeFrame(e) {
    e.at("hero", ...hero(e).head);
    e.at("death", ...death(e).head);
  },
  hero,
  death,
};
