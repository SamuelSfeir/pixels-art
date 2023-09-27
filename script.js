document.addEventListener('DOMContentLoaded', function() {
  const colors = document.querySelectorAll('#color-palette');
  const canvasSquares = document.querySelectorAll('.pixel');

  let selectedColor = null;

  // Adiciona o evento de clique para cada quadrado de cor
  for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function() {
      selectedColor = colors[i].style.backgroundColor;
    });
  }

  // Adiciona o evento de clique para cada quadrado no canvas
  for (let i = 0; i < canvasSquares.length; i++) {
    canvasSquares[i].addEventListener('click', function() {
      if (selectedColor) {
        canvasSquares[i].style.backgroundColor = selectedColor;
      } else {
        alert('Selecione uma cor antes de pintar o quadrado.');
      }
    });
  }
});
