//Importación función y textos

//import { imprimirTexto } from "../jsFuncTexto.js";

//import { textos } from "./textosDreams.js";

//CARTA 1
/*document.getElementById('1').addEventListener('click', () => {
   imprimirTexto();
}); COMENTARIO TEMPORAL*/

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
   insertarWord();
 
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

//PARA IMPORTAR TEXTO DESDE WORD
// Obtener el archivo de Word mediante fetch()
function insertarWord() { 
   var fileUrl = '../Scripts/Aventador/docana.docx';

   fetch(fileUrl)
      .then(function (response) {
         if (!response.ok) {
            throw new Error('Error al cargar el archivo.');
         }
         return response.arrayBuffer();
      })
      .then(function (arrayBuffer) {
         // Convertir el documento de Word en HTML
         var options = {
            arrayBuffer: arrayBuffer
         };

         mammoth.extractRawText(options)
            /*.then(function (result) {
               var htmlContent = result.value;

               // Mostrar el contenido en el elemento div
               var wordContentDiv = document.getElementById('text-content');
               wordContentDiv.innerHTML = htmlContent;
            })
            .done();*/
            .then(function (result) {
               var rawText = result.value;

               // Procesar el texto para aplicar estilos HTML
               var processedText = procesarTexto(rawText);

               // Mostrar el contenido en el elemento div
               var wordContentDiv = document.getElementById('text-content');
               wordContentDiv.innerHTML = processedText;
            })
            .catch(function (error) {
               console.error('Error al convertir el documento de Word:', error);
            });
      })
      .catch(function (error) {
         console.error(error);
      });
}

function procesarTexto(rawText) {
   // Reemplazar saltos de línea con etiquetas <br>
   var processedText = rawText.replace(/\n/g, '<br>');

   // Puedes agregar más reglas aquí según tus necesidades

   return processedText;
}
 
//PARA IMPORTAR TEXTO DESDE ARCHIVO .TXT
function insertarText() {
   var fileUrl = '../Scripts/Aventador/docana.txt';
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
}


