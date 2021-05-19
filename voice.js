const talk = document.getElementById('talk');
const objects = document.getElementById('objects');
const ctx = objects.getContext('2d');
let temp = document.getElementById('record');


var box = new Image();
box.src = 'box.png';

var mask = new Image();
mask.src = 'mask.png';

var money = new Image();
money.src = 'money.png';

var pizza = new Image();
pizza.src = 'pizza.png';

var shoes = new Image();
shoes.src = 'shoes.png';

var unknown = new Image();
unknown.src = 'unknown.png';

var help = new Image();
help.src = 'help.jpg';


function getText(text, font, x, y){
  ctx.font = font;
  ctx.fillText(text, x, y);
}

function draw(){ 
  ctx.clearRect(0, 0, objects.width, objects.width);
  getText('Box','50px Times New Roman', 100, 100);
  getText('Money','50px Times New Roman',210, 100);
  getText('Mask','50px Times New Roman',380, 100);
  getText('Pizza','50px Times New Roman',520, 100);
  getText('Shoes','50px Times New Roman',650, 100);
}

function speak(text, callback) {
  var req = new SpeechSynthesisUtterance();
  req.text = text;
  req.lang = 'en-US';

  req.onend = function () {
      if (callback) {
          callback();
      }
  };
  req.onerror = function (e) {
      if (callback) {
          callback(e);
      }
  };

  speechSynthesis.speak(req);
}

function getObject(text){
  if(text.includes('box')){
    ctx.clearRect(0, 0, objects.width, objects.width);
    ctx.drawImage(box, 100, 100);
  } else if(text.includes('money')){
    ctx.clearRect(0, 0, objects.width, objects.width);
    ctx.drawImage(money, 55, 50);
  } else if(text.includes('mask')){
    ctx.clearRect(0, 0, objects.width, objects.width);
    ctx.drawImage(mask, 25, 75);
  } else if(text.includes('pizza')){
    ctx.clearRect(0, 0, objects.width, objects.width);
    ctx.drawImage(pizza, 50, 50);
  } else if(text.includes('shoes')){
    ctx.clearRect(0, 0, objects.width, objects.width);
    ctx.drawImage(shoes, 50, 40);
  } else if(text.includes('about')){
    ctx.clearRect(0, 0, objects.width, objects.width);
    speak('Moe Arif, 2021');
  } else if(text.includes('help')){
    ctx.clearRect(0, 0, objects.width, objects.width);
    ctx.drawImage(help, 50, 40);
    speak('Say a name of the object on the screen. Say about, to hear about the program.');
  } else {
    ctx.clearRect(0, 0, objects.width, objects.width);
    ctx.drawImage(unknown, 50, 40);
  }
}

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.interimResults = true;

draw();

talk.onclick = function(){

  if(talk.innerText === 'Speak') {
    draw();
    let phrase ='';
    console.clear();
    talk.innerText = 'Stop';
	
    recognition.lang = 'en';
    recognition.start();

    recognition.addEventListener('result', e=>{ 
      const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
    
      phrase = transcript.toLowerCase();
      temp.textContent = phrase;
      console.log(phrase);
    });
  }
  else if(talk.innerText === 'Stop') {
    talk.innerText = 'Speak';
    recognition.abort();
  }
};

recognition.addEventListener('end', e=>{
  talk.innerText = 'Speak'; 
  speak(temp.textContent);
  getObject(temp.textContent);
  recognition.abort();
});
