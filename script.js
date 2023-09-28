// -------- Chama histórico do LocalStorage ---------

carregarHistoricoPixelsDoLocalStorage();

// ------------------- puxa os elementos do DOM -------------------
const trocaFundoPreto = document.getElementById("corPreta")
trocaFundoPreto.style.backgroundColor = 'black';

const trocaFundoVermelho = document.getElementById("corVermelha")
trocaFundoVermelho.style.backgroundColor = 'red';
  
const trocaFundoazul = document.getElementById("corAzul")
trocaFundoazul.style.backgroundColor = 'blue';

const trocaFundoVerde= document.getElementById("corVerde")
trocaFundoVerde.style.backgroundColor = 'green';

const chamaButton = document.getElementById("clear-board")

const pixelsDom = document.querySelectorAll('.pixel');

const botaoAleatorio = document.getElementById("button-random-color")


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

// Adiciona um evento de clique a cada cor na paleta de cores
const coresPaleta = document.querySelectorAll('.color');
for (let i = 0; i < coresPaleta.length; i++) {
  const cor = coresPaleta[i];
  cor.addEventListener('click', function() {
      selecionarCor(cor);
      selectedColor = window.getComputedStyle(cor).backgroundColor;
  });
}

let selectedColor = 'black'; // cor padrão

// Função para lidar com o pixel click event
function paintPixel(event) {
  const pixel = event.target;
  pixel.style.backgroundColor = selectedColor;

  // ---- Requisito 7 ------

  const indicePixel = Array.from(pixelsDom).indexOf(pixel); // Obtem o índice do pixel na lista de pixels
  localStorage.setItem(`pixelBoard`, selectedColor) // Salva no local storage

  // ---- Requisito 7 ------
}

const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => {
  pixel.addEventListener('click', paintPixel);
});

// ------ Fim do resquisito 4 ------

// ------ Início do requisito 5 ------ 

chamaButton.addEventListener('click', () => {
  pixelsDom.forEach(pixel => {
    pixel.style.backgroundColor = 'white';
  });
});

// ------ Fim do requisito 5 ------ 

// ------ Início do requisito 6 ------ 

function randomizarCoresNaPaleta() {
  const paleta = document.getElementById('color-palette');
  const cores = paleta.querySelectorAll('.color');

  const coresArray = Array.from(cores); // Converte cores em array
  coresArray.sort(() => Math.random() - 0.5);

  // Adiciona as cores randomizadas à paleta
  coresArray.forEach(cor => {
    paleta.appendChild(cor);
  });
}

botaoAleatorio.addEventListener('click', randomizarCoresNaPaleta);


// ------ Fim do requisito 6 ------ 



// ------ Início do requisito 7 ------ 


function carregarHistoricoPixelsDoLocalStorage() {
  const pixelsDom = document.querySelectorAll('.pixel');
  pixelsDom.forEach((pixel, indice) => {
    const corSalva = localStorage.getItem(`pixelBoard`);
    if (corSalva) {
      pixel.style.backgroundColor = corSalva;
    }
  });
}


pixelsDom.forEach(pixel => {
  pixel.addEventListener('click', (event) => {
    paintPixel(event);
    // Salvar no localStorage cada vez que um pixel é pintado
    const indicePixel = Array.from(pixelsDom).indexOf(event.target);
    localStorage.setItem(`pixelBoard`, selectedColor);
  });
});



// ------ Fim do requisito 7 ------ 


  




