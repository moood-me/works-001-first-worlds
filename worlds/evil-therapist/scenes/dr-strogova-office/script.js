scene.every(15, function () {
  var m = scene.get("minutes") || 0;
  if (m < 50) {
    scene.set("minutes", m + 1);
    if (m + 1 === 50) scene.tell(tr('The clock on the wall says ten to three: the session\'s time is up.'), "wall");
  }
});
scene.every(4, function () {
  if (scene.get("writing")) {
    var n = scene.get("notes") || 0;
    if (n < 15) {
      scene.set("notes", n + 1);
      if (n + 1 === 15) scene.tell(tr('The page in the file is full: the doctor has written it from top to bottom.'), "desk");
    }
  }
});
