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
  });
}
