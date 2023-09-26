const colorPalette = document.querySelector('#color-palette');
const pixels = document.querySelectorAll('.pixel');

function changeColor(event) {
    const selectedColor = event.target.style.backgroundColor;
    pixels.style.backgroundColor = selectedColor;
  }

colorPalette.addEventListener('click', changeColor);


// Paramos nessa parte de criar a função para pintar os quadrado