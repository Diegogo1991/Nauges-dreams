export function imprimirTexto(texto) {
   let atras = document.getElementById('atras');
   atras.style.display = "none";
   let divTablero = document.createElement('div');
   divTablero.className = 'tablero';

   let body = document.getElementById('fondo');
   body.appendChild(divTablero);

   new Typed('.tablero', {
      strings: [texto],
      typeSpeed: 10,
      showCursor: true,
      cursorChar: '|',
      onComplete: () => {
         let back = document.createElement('div');
         back.id = 'back';
         back.innerHTML = "BACK";

         body.appendChild(back);
         back.addEventListener('click', () => {
            divTablero.remove();
            back.remove();
            atras.style.display = "block";
         })
      }
   });
}

