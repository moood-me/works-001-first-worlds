var dim = 0,
  toldLow = false;
scene.every(8, function () {
  var s = scene.state,
    w = +s.wind_strength || 0,
    d = +s.door_open || 0,
    dr = w * d,
    ep = +s.envelope_position || 0;
  if (!s.envelope_held && dr > 0.75 && ep < 1 && Math.random() < dr * 0.5) {
    scene.set("envelope_position", Math.min(1, ep + 0.06 + Math.random() * 0.06), 1.8);
    scene.tell("A gust through the open door slides the envelope a little further over the floorboards.", "envelope");
  }
  var lg = +s.lamp_glow || 0;
  if (dr > 0.8 && lg > 0.3 && Math.random() < dr) {
    var nl = Math.max(0.28, lg - 0.08);
    dim += lg - nl;
    scene.set("lamp_glow", nl, 1.5);
    if (nl < 0.4 && !toldLow) {
      toldLow = true;
      scene.tell("The draught from the open door makes the lamp flame gutter low.", "lamp");
    }
  } else if (dr < 0.3 && dim > 0) {
    var up = Math.min(dim, 0.15);
    dim -= up;
    scene.set("lamp_glow", Math.min(1, lg + up), 2);
    if (dim <= 0.001) {
      dim = 0;
      toldLow = false;
      scene.tell("Out of the draught, the lamp flame steadies again.", "lamp");
    }
  }
});
