  let isIOS = (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) && !window.MSStream;
  let precisionValue = isIOS ? 'highp' : 'mediump';


  var hydra = new Hydra({
    canvas: document.getElementById("myCanvas"),
    precision: precisionValue
    // precision: precisionValue,
  });

  console.log(precisionValue)

  // src(s0).mult(shape(4)).out(o1);
  //
  // osc(Math.PI * 2, 0.1, 2, 0.9, 10)
  //   .diff(o1, 0.4)
  //   .mult(shape(4, 0.2 * Math.PI * 0.5, 0.2))
  //   .modulateRotate(osc(2))
  //   .out(o2);
  //
  // noise(3)
  //   .modulateRotate(osc(() => mouse.x * 0.05 + 3))
  //   .out(o3);
  //
  // src(o0)
  //   .scale(() => mouse.y * 0.02 - 1.05, 2, 0.9)
  //   .diff(o3, 0.05)
  //   .add(o2, 0.6)
  //   .out();

  osc(Math.PI * 0.2, 0.1, 2, 0.9, 10)
  .mult(shape(4, 0.2 * Math.PI * 0.5, 0.6))
  // .invert(1)
  .modulateRotate(osc(20))
  .scale(() => (mouse.y + mouse.x) * 0.01 + 3, () => (mouse.y - mouse.x) * 0.0008 + 2, () => (mouse.y - mouse.x) * 0.0003 + 0.2)
  // .modulatePixelate(2)
  .out(o1);

  osc(0.1,0.02,0.9)
    // .modulateRepeat(noise(1))
    .mult((osc(Math.PI * 2, 0.1, 2, 0.9, 10)))
    .modulateScale(osc(() => mouse.x * 0.05 + 0.03))
    // .saturate(0.9).saturate(0.8)
    // .modulateRotate(osc(50,0.1,20))
    // .mult(noise(200))
    .mult(osc(20,0,2))
    // .saturate(0.7)
    .add(osc(1,() => mouse.x * 0.0005 + 0.003, () => mouse.y * 0.001 + 0.1))
    .mult(shape(4, 0.2 * Math.PI * 0.5, 1))
    .saturate(1.2)
    .modulateRotate(noise(2))
    .modulateHue(noise(100))
    .scale(() => (mouse.y + mouse.x) * 0.00001 + 0.7, 2, 0.9)
    // .scale(1, () => mouse.y * 0.1 + 1)
    // .thresh(0.2,0.8)
    // .hue(0.9)
    .luma(0.7,0.2)
    .mult(o1)
    .out()
