// save this file as sketch.js
// Sketch One  --- FOTO

var s = function(p) { // p could be any variable name

  let p11 = p.random(200);
  let p2 = p.random(200);
  let p3 = p.random(200);
  let p4 = p.random(200);
  let p51 = p.random(200);
  let p6 = p.random(200);
  let easing = 0.05;

  p.setup = function() {
      p.createCanvas(window.innerWidth, window.innerHeight);
  };

  p.draw = function() {

      p.stroke(0,0,255);
      p.strokeWeight(7);

      let targetP11 = p.int(p.mouseX*p.mouseY*0.003);
      let targetP2 = p.int(p.mouseX*0.7-p.mouseY/200);
      let targetP3 = p.int(p.mouseX*0.15+p.mouseY/2);
      let targetP4 = p.int(p.mouseX*0.5-p.mouseX*p.mouseY/2000);
      let targetP51 = p.int(p.mouseX*0.66-0.3*p.mouseY);
      let targetP6 = p.int(p.mouseX*2-1.3*p.mouseY);


    //console.log(p1);
      p.clear();
      let dx11 = targetP11 - p11;
      p11 += p.int(dx11 * easing);

      let dx2 = targetP2 - p2;
      p2 += p.int(dx2 * easing);

      let dx3 = targetP3 - p3;
      p3 += p.int(dx3 * easing);

      let dx4 = targetP4 - p4;
      p4 += p.int(dx4 * easing);

      let dx51 = targetP51 - p51;
      p51 += p.int(dx51 * easing);

      let dx6 = targetP6 - p6;
      p6 += p.int(dx6 * easing);

      p.line(p.width/5, -20, p11, p.int(p.height/6));
      p.line(p11, p.int(p.height/6), p2, p.int(p.height/4.3));
      p.line(p2, p.int(p.height/4.3), p3, p.int(p.height/3));
      p.line(p3, p.int(p.height/3), p4, p.int(p.height/2.3));
      p.line(p4, p.int(p.height/2.3), p51, p.int(p.height/1.3));
      p.line(p51, p.int(p.height/1.3), p6, p.int(p.height/1.1));
      p.line(p6, p.int(p.height/1.1), p.int(p.width/5), p.height+20);

  };
}
var myp5 = new p5(s, 'c1');
