var blur = document.getElementById('blur');
var menu = document.getElementById('menu');

const createBlur = e => { 
    e.stopPropagation(); // Stop the document click event from running
    blur.style.filter = "blur(15px) opacity(0.1)";
    menu.style.filter = "blur(15px) opacity(0.1)"
}

const revertBlur = () => {
    blur.style.filter = "blur(0px)";
    menu.style.filter = "blur(0px)";
}

function move(e){
    var image = document.getElementById('move'),
        w = window.innerWidth,
        h = window.innerHeight,
        mouseX = e.clientX,
        mouseY = e.clientY,
        imageX = (mouseX/w)*50,
        imageY = (mouseY/h)*80;
     
     image.style["background-position"] = imageX + "% " + imageY + "%";
   }


window.addEventListener('mousemove', move);
menu.addEventListener('click', createBlur);
document.addEventListener('click', revertBlur)

