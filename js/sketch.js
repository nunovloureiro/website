// save this file as sketch.js
// Sketch One  --- FOTO

var s = function(p) { // p could be any variable name

  let p11x = p.random(200);
  let p2x = p.random(200);
  let p3x = p.random(200);
  let p4x = p.random(200);
  let p51x = p.random(200);
  let p6x = p.random(200);

  let p11y = 0;
  let p2y = 0;
  let p3y = 0;
  let p4y = 0;
  let p51y = 0;
  let p6y = 0;


  let easing = 0.05;

  p.setup = function() {
      p.createCanvas(window.innerWidth, window.innerHeight);
  };

  p.draw = function() {

      p.stroke(0,0,255);
      p.strokeWeight(7);

      let targetP11x = p.int(p.mouseX*p.mouseY*0.003);
      let targetP11y = p.int(p.height/6+p.mouseY*0.2);

      let targetP2x = p.int(p.mouseX*0.7-p.mouseY/200);
      let targetP2y = p.int(p.height/4.3+p.mouseY*0.12);

      let targetP3x = p.int(p.mouseX*0.15+p.mouseY/2);
      let targetP3y = p.int(p.height/3+p.mouseY*0.23);

      let targetP4x = p.int(p.mouseX*0.5-p.mouseX*p.mouseY/2000);
      let targetP4y = p.int(p.height/2.3+p.mouseY*0.17);

      let targetP51x = p.int(p.mouseX*0.66-0.3*p.mouseY);
      let targetP51y = p.int(p.height/1.3+p.mouseY*0.3);

      let targetP6x = p.int(p.mouseX*2-1.3*p.mouseY);
      let targetP6y = p.int(p.height/1.1+p.mouseY*0.22);



    //console.log(p1);
      p.clear();

      let dx11x = targetP11x - p11x;
      p11x += p.int(dx11x * easing);
      let dx11y = targetP11y - p11y;
      p11y += p.int(dx11y * easing);


      let dx2x = targetP2x - p2x;
      p2x += p.int(dx2x * easing);
      let dx2y = targetP2y - p2y;
      p2y += p.int(dx2y * easing);


      let dx3x = targetP3x - p3x;
      p3x += p.int(dx3x * easing);
      let dx3y = targetP3y - p3y;
      p3y += p.int(dx3y * easing);


      let dx4x = targetP4x - p4x;
      p4x += p.int(dx4x * easing);
      let dx4y = targetP4y - p4y;
      p4y += p.int(dx4y * easing);


      let dx51x = targetP51x - p51x;
      p51x += p.int(dx51x * easing);
      let dx51y = targetP51y - p51y;
      p51y += p.int(dx51y * easing);


      let dx6x = targetP6x - p6x;
      p6x += p.int(dx6x * easing);
      let dx6y = targetP6y - p6y;
      p6y += p.int(dx6y * easing);



      p.line(p.width/5, -20, p11x, p11y);
      p.line(p11x, p11y, p2x, p2y);
      p.line(p2x, p2y, p3x, p3y);
      p.line(p3x, p3y, p4x, p4y);
      p.line(p4x, p4y, p51x, p51y);
      p.line(p51x, p51y, p6x, p6y);
      p.line(p6x, p6y, p.int(p.width/5), p.height+20);

  };
}
var myp5 = new p5(s, 'c1');
