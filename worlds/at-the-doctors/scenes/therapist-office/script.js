scene.every(30, function () {
  var m = scene.get("minutes") || 0;
  if (m < 50) {
    scene.set("minutes", m + 1);
    if (m + 1 === 45) scene.tell(tr('Ten to six: five minutes left of the session.'), "clock");
    if (m + 1 === 50) scene.tell(tr('Five to six: the session\'s time is up.'), "clock");
  }
});
scene.every(41, function () {
  if (scene.get("therapist") === "listening") {
    scene.set("therapist", "writing");
    scene.after(7, function () {
      if (scene.get("therapist") === "writing") scene.set("therapist", "listening");
    });
  }
});
