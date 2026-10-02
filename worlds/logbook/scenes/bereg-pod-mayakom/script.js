const mins = (t) => {
  const [h, m] = String(t || "00:00")
    .split(":")
    .map(Number);
  return (h < 12 ? h + 24 : h) * 60 + m;
};
const fmt = (m) => {
  m %= 1440;
  return String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0");
};
scene.every(20, () => {
  const m = mins(scene.get("time"));
  if (m < mins("06:00")) scene.set("time", fmt(m + 10));
});
scene.every(20, () => {
  const T = Number(scene.get("tide") ?? 0.35);
  if (T < 1) scene.set("tide", Math.min(1, Math.round((T + 0.01) * 1000) / 1000), 18);
});
const follow = () => {
  const T = Number(scene.get("tide") ?? 0),
    S = scene.get("bottle_state");
  if (S === "wedged" && T >= 0.7) {
    scene.set("bottle_state", "loose");
    scene.tell(
      "The tide has reached the green bottle: it rocks loose among the stones, each wave lifting it a little.",
      "bottle",
    );
  } else if (S === "loose" && T >= 0.85) {
    scene.set("bottle_state", "drifting");
    scene.tell("A wave lifts the bottle off the stones; it floats out, turning, toward the moon path.", "bottle");
  }
};
const drift = () => {
  const d = Number(scene.get("drift") || 0);
  if (d < 1) scene.set("drift", 1, Math.max(5, 120 * (1 - d)));
};
scene.on("change", "tide", follow);
scene.on("change", "bottle_state", (v) => {
  if (v === "drifting") drift();
  else if (v === "wedged" || v === "loose") scene.set("drift", 0);
  else if (v === "taken" || v === "gone") scene.set("drift", Number(scene.get("drift") || 0));
  if (v === "broken" && !scene.get("broken_at")) scene.set("broken_at", scene.get("time"));
  if (v === "loose" && scene.get("fitil_present") !== false && scene.get("fitil_pose") === "watching")
    scene.set("fitil_pose", "crouching");
  follow();
});
scene.on("change", "drift", (v) => {
  if (v >= 0.999 && scene.get("bottle_state") === "drifting") {
    scene.set("bottle_state", "gone");
    scene.tell("The bottle has drifted out past the surf and is lost in the dark water.", "bottle");
  }
});
if (scene.get("bottle_state") === "drifting") drift();
follow();
const P = Math.PI / 0.55,
  t0 = (Math.PI - 0.25) / 0.55;
const pass = () => {
  const n = Number(scene.get("beam_pass") || 0) + 1;
  scene.set("beam_pass", n);
  const S = scene.get("bottle_state");
  if (n === 1 && (S === "wedged" || S === "loose" || S === "drifting"))
    scene.tell(
      "The lighthouse beam sweeps the shore; for an instant the bottle flashes green among the stones.",
      "bottle",
    );
};
scene.after((((t0 - scene.time) % P) + P) % P, () => {
  pass();
  scene.every(P, pass);
});
