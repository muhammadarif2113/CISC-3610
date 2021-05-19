const objects = document.getElementById('objects');
const ctx = objects.getContext('2d');
const talk = document.getElementById('talk');

var box = new Image();
var mask = new Image();
var money = new Image();
var pizza = new Image();
var shoes = new Image();
var unknown = new Image();
var help = new Image();

box.src = 'box.png';
mask.src = 'mask.png';
money.src = 'money.png';
pizza.src = 'pizza.png';
shoes.src = 'shoes.png';
unknown.src = 'unknown.png';
help.src = 'help.jpg';

function drawtext(text, font, color, x, y){
  ctx.font = font;
  ctx.fillStyle= color;
  ctx.fillText(text, x, y);
}

function drawDefault(){ 
  ctx.clearRect(0, 0, objects.width, objects.width);
  drawtext('Box','30px Century Gothic','black',100, 100);
  drawtext('Money','30px Century Gothic','black',100, 130);
  drawtext('Mask','30px Century Gothic','black',100, 160);
  drawtext('Pizza','30px Century Gothic','black',100, 190);
  drawtext('Shoes','30px Century Gothic','black',100, 220);
}

function speak(text, callback) {
  var u = new SpeechSynthesisUtterance();
  u.text = text;
  u.lang = 'en-US';

  u.onend = function () {
      if (callback) {
          callback();
      }
  };

  u.onerror = function (e) {
      if (callback) {
          callback(e);
      }
  };

  speechSynthesis.speak(u);
}

function findFruit(text){
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

let p = document.getElementById('page_transcript');

drawDefault();

talk.onclick = function(){

  if(talk.innerText === 'Speak') {
    drawDefault();
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
      p.textContent = phrase;
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
  speak(p.textContent);
  findFruit(p.textContent);
  recognition.abort();
});