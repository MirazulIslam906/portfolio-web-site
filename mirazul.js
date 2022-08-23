const can = document.querySelector('canvas');
can.width = window.innerWidth;
console.log(can.width)
can.height = window.innerHeight;
const c = can.getContext('2d');

var arrey = [];











// const c = can.getContext('2d');
// c.arc(100,100,30,0,360);
// c.stroke()
function Circle(x,y,dx,dy,radius,r,g,b) {
    this.r =  r;
    this.g =  g;
    this.b =  b;
    this.x =  x;
    this.y =  y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.drow =  function(){
        c.beginPath();
        c.arc(x,y,radius,0,Math.PI * 2);
        // =================================================================
        c.lineWidth = radius;
        c.fillStyle = 'rgb('+r+','+g+','+b+')';
        c.fill();
        
    };

    this.update = function(){
        this.drow();
        x+=dx;
        y+=dy;
        if (x + radius > can.width || x - radius < 0) {
        dx = -dx;
        c.strokeStyle = 'rgb('+r+','+g+','+b+')';
               };
        if (y + radius > can.height || y - radius < 0) {
        dy = -dy;
        c.strokeStyle = 'rgb('+r+','+g+','+b+')';
        };
    };
  
};

// var arrey = [];

for (let i = 0; i < 1000; i++) {
   
var x = can.width * Math.random();
var y = can.height * Math.random();
var dx =Math.random() * 3;
var dy = Math.random() * 3;
// ==================radius=================
var radius = Math.random()* 2.5;
var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
arrey.push(new Circle(x,y,dx,dy,radius,r,g,b));
};
console.log(arrey);
function anim() {
    requestAnimationFrame(anim);
    setTimeout(c.clearRect(0,0,can.width,can.height),5000)
// 
// c.clearRect(0,0,can.width,can.height);
c.fillStyle = 'black';
// arrey[0].update();
// arrey[1].update();
for (let i = 0; i < 500; i++) {
    arrey[i].update();
    
}
}

anim();


const friction = 1.05
 class Particle{
   constructor(x,y,velocity){
     this.x = x;
     this.y = y;
     this.radius = Math.random() * 5;
     this.color = Math.random() * 360;
     this.velocity = velocity;
   };
   draw(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI *2,false);
    c.fillStyle = 'hsl('+this.color+',50%,50%)';
    c.fill();
    c.closePath()
   };
  //  ==================================================================
      //  this.x += this.velocity.x
    //  this.velocity.x *= friction
    //  this.velocity.y *= friction
    //  this.velocity.y += gravity
   update(){
     this.draw();
     this.x += this.velocity.x
     this.y += this.velocity.y
          this.velocity.x *= friction
     this.velocity.y *= friction
    //  this.velocity.y += gravity
   }
 }

 let particles = []



  function nam() {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        const particleCount = 400;
        // const rgb = Math.random() * 360; 
        const angleInceement= (Math.PI * 2) / particleCount;
        for (let i = 0; i < 500; i++) {
          particles.push(new Particle(
            x,y,{
              x:Math.sin(angleInceement * i) * Math.random()*10,
              y:Math.cos(angleInceement * i) * Math.random() *10
            }
            // ==================================================
            // Math.cos(angleInceement * i) * Math.random() * 20
          ))
          // console.log(particles)
        }
       
        console.log(particles)    
  if (particles.length>500) {
    particles.length = 0
  }
    //   });
    
  }

  // if (particles.length>500) {
  //   particles.length = 0
  // }

  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle =  'rgba(0,0,0,0.001)'
    c.fillRect(0,0,can.width,can.height);
    particles.forEach((e) => {
      e.update();
    })
  };

  animate();

//   setInterval(nam,10000)


  setInterval(nam,3000)



 