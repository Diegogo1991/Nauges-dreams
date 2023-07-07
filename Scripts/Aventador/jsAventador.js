//Importación función y textos

//import { imprimirTexto } from "../jsFuncTexto.js";

//import { textos } from "./textosDreams.js";

//CARTA 1
document.getElementById('1').addEventListener('click', () => {
   imprimirTexto();
});

//CARTA 2
/*document.getElementById('2').addEventListener('click', () => {
   imprimirTexto(textos.carta2);
});
*/

//CARTA 3
/*document.getElementById('3').addEventListener('click', () => {
   imprimirTexto(textos.carta3);
});*/



//FUNCION PARA RETROCEDER
document.getElementById('atras').addEventListener('click', () => {
   window.location.replace('../coleccion.html');
})


function imprimirTexto() {
   let atras = document.getElementById('atras');
   atras.style.display = "none";
   
   let divTablero = document.createElement('div');

   divTablero.className = 'tablero';
   divTablero.id = 'text-content';

   let body = document.getElementById('fondo');
   body.appendChild(divTablero);

   //llamar funcion para poner texto
   var fileUrl = 'docanaa.txt';
   var xhr = new XMLHttpRequest();
   xhr.open('GET', fileUrl, true);
   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
         var contenido = xhr.responseText;
         var textContentDiv = document.getElementById('text-content');
         textContentDiv.innerText = contenido;
      }
   };
   xhr.send();
 
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