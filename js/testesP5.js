
________________________


function setup() {
  createCanvas(400, 400);
  let p1 = int(random(-20,20) + width/5);
  let p2 = int(random(-50,50) + width/5);
  let p3 = int(random(-40,40) + width/5);
  let p4 = int(random(-70,70) + width/5);
  let p5 = int(random(-80,80) + width/5);

  background(255);
  stroke(0,0,255);
  strokeWeight(4);

  line(width/5, 0, p1, int(height/6));
  line(p1, int(height/6), p2, int(height/4.3));
  line(p2, int(height/4.3), p3, int(height/3));
  line(p3, int(height/3), p4, int(height/2.3));
  line(p4, int(height/2.3), p5, int(height/1.3));
  line(p5, int(height/1.3), int(width/5), height);
}



______________________-


let p11 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let p51 = 0;
let easing = 0.7;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  frameRate();
  stroke(0,0,255);
  strokeWeight(4);

  for (let i = 0; i < 100; i++) {
    if (i == 0){
      targetP11 = int(random(-40,40) + width/5);
      targetP2 = int(random(-40,40) + width/5);
      targetP3 = int(random(-40,40) + width/5);
      targetP4 = int(random(-40,40) + width/5);
      targetP51 = int(random(-40,40) + width/5);


      //console.log(p1);
    } else {
        clear();
        let dx11 = targetP11 - p11;
        p11 += int(dx11 * easing);
        console.log(p11);

        let dx2 = targetP2 - p2;
        p2 += int(dx2 * easing);

        let dx3 = targetP3 - p3;
        p3 += int(dx3 * easing);

        let dx4 = targetP4 - p4;
        p4 += int(dx4 * easing);

        let dx51 = targetP51 - p51;
        p51 += int(dx51 * easing);

        line(width/5, 0, p11, int(height/6));
        line(p11, int(height/6), p2, int(height/4.3));
        line(p2, int(height/4.3), p3, int(height/3));
        line(p3, int(height/3), p4, int(height/2.3));
        line(p4, int(height/2.3), p51, int(height/1.3));
        line(p51, int(height/1.3), int(width/5), height);
    }
  }
}
