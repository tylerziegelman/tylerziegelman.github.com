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
menu.addEventListener('click', createBlur);
document.addEventListener('click', revertBlur)

