const trocaFundoPreto = document.getElementById("corPreta")
trocaFundoPreto.style.backgroundColor = 'black';

const trocaFundoVermelho = document.getElementById("corVermelha")
trocaFundoVermelho.style.backgroundColor = 'red';
  
const trocaFundoazul = document.getElementById("corAzul")
trocaFundoazul.style.backgroundColor = 'blue';

const trocaFundoVerde= document.getElementById("corVerde")
trocaFundoVerde.style.backgroundColor = 'green';

// ------------------- puxei e alterei os background (paleta e pixel) pelo js -------------------


// Função para selecionar uma cor na paleta
function selecionarCor(elemento) {
  // Remove a classe 'selected' de todas as cores
  const cores = document.querySelectorAll('.color');
  for (let i = 0; i < cores.length; i++) {
      cores[i].classList.remove('selected');
  }

  // Adiciona a classe 'selected' à cor clicada
  elemento.classList.add('selected');
}

// Adiciona um evento de clique a cada cor na paleta
const coresPaleta = document.querySelectorAll('.color');
for (let i = 0; i < coresPaleta.length; i++) {
  const cor = coresPaleta[i];
  cor.addEventListener('click', function() {
      selecionarCor(cor);
      selectedColor = window.getComputedStyle(cor).backgroundColor;
  });
}

// funcao:
// passar pelos pixels
// for
//   if selected passar o background do selecionado pro pixel clicado (style.backgroundcolor)
//     event.target


//   olhar o metodo getComputedStyle


let selectedColor = 'black'; // Default color

// Function to handle pixel click event
function paintPixel(event) {
  const pixel = event.target;
  pixel.style.backgroundColor = selectedColor;
}

const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => {
  pixel.addEventListener('click', paintPixel);
});



