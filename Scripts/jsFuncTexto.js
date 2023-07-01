export function imprimirTexto(texto) {
   let divTablero = document.createElement('div');
   divTablero.className = 'tablero';

   let body = document.getElementById('fondo');
   body.appendChild(divTablero);

   new Typed('.tablero', {
      strings: [texto],
      typeSpeed: 10,
      cursorChar: ''
   });
}

