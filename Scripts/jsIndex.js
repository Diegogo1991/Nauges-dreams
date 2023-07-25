/*window.alert('Puedes perder algo si no abres los ojos antes de que sea tarde');*/
//prompt("Puedes perder algo si no abres los ojos antes de que sea tarde. Ingrese una fecha ?/?/23");
//alert('Primer chat completo subido');

//FUNCION MUSICA ALEATORIA
import { funcGene } from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
   console.log("funcionando"),
      setTimeout(funcGene.musicAleatorie, 1000);
});
setTimeout(funcGene.musicAleatorie, 1000);

const typed = new Typed('.typed', {
   strings: ['NAUGES <br> DREAMS'],
   typeSpeed: 75,
   cursorChar: '',
   loop: false
});

const HayNove = new Typed('.aviso', {
   strings: ['He vuelto'],
   typeSpeed: 102,
   cursorChar: '',
   loop: true
});

const easy = new Typed('.link1', {
   strings: ['Easy'],
   typeSpeed: 90,
   cursorChar: '',
   loop: false
});

const jard = new Typed('.link2', {
   strings: ['Hard'],
   typeSpeed: 90,
   cursorChar: '',
   loop: false
});

/*const novedadesContent = new Typed('.HayNovedas', {
    stringsElement: '#novedades',
    typeSpeed: 75,
    cursorChar: '',
    loop: false
});*/

/*function quitarNoved() {
    document.getElementById('novedades').style.display = 'none';
}*/

var pistas;
function mostrarNovedades() {
   console.log("funciona");
   /*let aviso = document.getElementById('novedades');
   aviso.style.display = 'flex';
   setTimeout(() => { aviso.style.display = 'none'; }, 5000);*/
   var contend = document.getElementById('ocultarnovedades');
   var novedades = document.createElement('div');
   novedades.classList.add('hayNovedad');
   novedades.setAttribute('id', 'novedades');
   contend.appendChild(novedades);
   avisoNov.removeEventListener('click', mostrarNovedades);

   setTimeout(() => {
      pistas = new Typed('.hayNovedad', {
         strings: [' · Tengo unas "pequeñas" confesiones al final. <br> <a href="https://youtu.be/JmBM9OglVlI" target="_blank"> · Esto es un link</a> · Hay respuestas en las preguntas <br> · No te distraigas con las imagenes, están precisamente para eso. <br> · Dreams > Hay cucarachas en la tulpa'],
         typeSpeed: 30,
         cursorChar: '',
         loop: false,
         onComplete: () => {
            setTimeout(() => {
               var contend = document.getElementById('ocultarnovedades');
               var novedades = document.getElementById('novedades');
               contend.removeChild(novedades);
               avisoNov.addEventListener('click', mostrarNovedades);
            }, 4000)
         }
      })
   }, 1000)

   
}

/*function ocultarNovedades() {
    document.getElementById('novedades').style.display = 'none';
}*/

var avisoNov = document.getElementById('aviso');
avisoNov.addEventListener('click', mostrarNovedades);

/*let ocultNov = document.getElementById('novedades');
ocultNov.addEventListener('click', ocultarNovedades);*/

/*let ocultNoved = document.getElementById('ocultarnovedades');
ocultNoved.addEventListener('click', ocultarNovedades)*/