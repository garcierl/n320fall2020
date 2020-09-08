
let cx = 25;

class Circle {
  constructor(cx, cy, radius, color) {
    this.x = cx;
    this.y = cy;
    this.radius = radius;
    this.color = color;
    this.speed = 1 + Math.random() * 2;
  }
  update() {
    this.y = this.y + this.speed;
    fill(this.color);
    circle(this.x, this.y, this.radius);
    if (this.y > 500) {
      this.y = 0;
      myRectangle.color[2] += 10
    }
  }
}

class Rectangle {
  constructor(rx,ry,height,length, rcolor) {
    this.x = rx;
    this.y = ry;
    this.height = height;
    this.length = length;
    this.color = rcolor;
  }
  update() {
    fill(this.color);
    rect(this.x, this.y, this.height, this.length);
  }
}

var myCircles = [];
myCircles[0] = new Circle(100, 10, 50, [15,200,100]);
myCircles[1] = new Circle(200, 5, 25, [150,200,100]);
myCircles[2] = new Circle(300, 15, 75, [160,50,100]);
myCircles[3] = new Circle(400, 25, 100, [0,0,255]);

var myRectangle = new Rectangle(2,450,700, 100, [150,150,150]);


function setup () {
  createCanvas(700,500);
}

function draw() {
  background (150, 100, 130);
 
  myCircles[0].update();
  myCircles[1].update();
  myCircles[2].update();
  myCircles[3].update();
  myRectangle.update();
}



