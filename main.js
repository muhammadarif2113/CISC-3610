var canvas = document.querySelector('canvas'); 
var ctx = canvas.getContext('2d');
var hi = "file:///home/moe/Desktop/Multimedia/Drag&Drop/QTAH2ITG.jpg"
var obj = new Image(); 
obj.src = hi; 
var x = 0; 
var y =0; 
obj.onload = function(){
    ctx.drawImage(obj, x, y); 
}

var dragValue; 

function move (id){
    var element = document.getElementById("theDiv"); 
    element.style.position = "absolute"; 
    element.onmousedown = function(){
        dragValue = element; 
    }
    var element2 = document.getElementById("theDiv2"); 
    element2.style.position = "absolute"; 
    element2.onmousedown = function(){
        dragValue = element2; 
    }
    var element3 = document.getElementById("theDiv3"); 
    element3.style.position = "absolute"; 
    element3.onmousedown = function(){
        dragValue = element3; 
    }
    var element4 = document.getElementById("theDiv4"); 
    element4.style.position = "absolute"; 
    element4.onmousedown = function(){
        dragValue = element4; 
    }
    var element5 = document.getElementById("theDiv5"); 
    element5.style.position = "absolute"; 
    element5.onmousedown = function(){
        dragValue = element5; 
    }
    var element6 = document.getElementById("theDiv6"); 
    element6.style.position = "absolute"; 
    element6.onmousedown = function(){
        dragValue = element6; 
    }
    var element7 = document.getElementById("theDiv7"); 
    element7.style.position = "absolute"; 
    element7.onmousedown = function(){
        dragValue = element7; 
    }


}
document.onmouseup = function(e){
    dragValue = null; 
}

document.onmousemove = function(e){
    var x = e.pageX; 
    var y = e.pageY; 

    dragValue.style.left = x + "px"; 
    dragValue.style.top = y + "px"; 
}
