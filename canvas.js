var canvas = document.querySelector('canvas'); 
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; //this will allow canvas to fill the screen

var c = canvas.getContext('2d'); //so we are able to draw 
c.font = '20px brush script mt'; 
c.fillText("A Lovely House", canvas.width/2, 100); 

var sqA = 200; //rectangles to mimic water 
var sqDX = 5; 

function animate(){ //animate function for water 
    requestAnimationFrame(animate); 
    c.fillStyle = 'blue'; //water will be blue  
    c.beginPath(); 
    c.fillRect(0, 1000, sqA, 100);
    c.fillRect(0, 1100, sqA, 100);
    c.fillRect(0, 1200, sqA, 100); 
    c.fillRect(0, 1300, sqA, 100); 
    c.fillRect(0, 1400, sqA, 100); 
    c.fillRect(0, 1500, sqA, 100); 

    if (sqA > innerWidth){
        sqDX = -sqDX; 
    }
    sqA+=sqDX; 
    c.closePath(); 

    c.beginPath(); 
    c.moveTo(0, 1000); //this creats a line that represents the ground 
    c.lineTo(canvas.width, 1000); 
    c.lineWidth = 20;
    c.strokeStyle = '#a97e39'; 
    c.stroke(); 
    c.closePath(); 
}
animate(); 

function cloud(x, y, size){
    c.fillStyle = 'seashell'; 
    c.beginPath(); //creating the shape of the cloud 
    c.arc(x, y, 60 * size, Math.PI * 0.5, Math.PI * 1.5); 
    c.arc(x + (70 * size), y - (62 * size), 70 * size, Math.PI * 1, Math.PI * 1.75);
    c.arc(x + (152 * size), y - (43 * size), 50 * size, Math.PI * 1.37, Math.PI * 1.81);  
    c.arc(x + (200 * size), y, 60 * size, Math.PI * 1.5, Math.PI * 0.5);
    c.fill();  
}

for (var i =0; i < 5; i++){ //everytime the page is refreshed, several clouds will be shown at random places in the background
    var x = Math.random() * 1000; 
    var y = Math.random() * 1000;
    c.beginPath(); 
    cloud(x, y, 0.7); 
}

// arc/sun 
c.fillStyle = "#F0DB4F"; //yellow color 
c.beginPath(); 
c.arc(85, 85, 80, 0, Math.PI * 2, false); 
c.closePath(); 
c.fill(); 
c.strokeStyle = "#F0DB4F"; 
c.stroke(); 


c.fillStyle = "burlywood"; 
c.beginPath(); //base of the house 
c.fillRect(180, 600, 500, 400); 
c.stroke (); 
c.closePath(); 


c.fillStyle = 'lightsalmon'; //roof of house 
c.beginPath(); 
c.moveTo(160, 600); 
c.lineTo(420, 300); 
c.lineTo(700, 600); 
c.closePath(); 
c.fill(); 
c.strokeStyle = "indianred"
c.stroke(); 

c.fillStyle = 'peru'; //door of the house 
c.beginPath(); 
c.fillRect(380, 830, 100, 180); 
c.strokeStyle = "brown"; 
c.lineWidth = 7; 
c.stroke(); 
c.closePath(); 


c.strokeStyle= 'saddlebrown'; //border of door 
c.beginPath(); 
c.moveTo(380, 1000); 
c.lineTo(380, 830); 
c.lineTo(480, 830); 
c.lineTo(480, 1000);
c.stroke(); 
c.closePath(); 

c.strokeStyle = "black"; //doorknob 
c.beginPath(); 
c.arc(458, 930, 1, 0, Math.PI * 2, false); 
c.fill(); 
c.stroke(); 
c.closePath(); 

c.fillStyle = 'powderblue'; 
c.beginPath(); 
c.fillRect(250, 700, 100, 100); //window 1
c.fillRect(510, 700, 100, 100); //window 2
c.closePath(); 

c.strokeStyle = "black"; //border of window 1  
c.beginPath(); 
c.moveTo(250, 700); 
c.lineTo(250, 800); 
c.lineTo(350, 800); 
c.lineTo(350, 700); 
c.lineTo(250, 700); 
c.lineWidth = 2; 
c.stroke(); 
c.closePath(); 

c.strokeStyle = "black"; //border of window 2  
c.beginPath(); 
c.moveTo(510, 700); 
c.lineTo(510, 800); 
c.lineTo(610, 800); 
c.lineTo(610, 700); 
c.lineTo(510, 700); 
c.lineWidth = 2; 
c.stroke(); 
c.closePath(); 



