/*window.alert('Puedes perder algo si no abres los ojos antes de que sea tarde');*/
//prompt("Puedes perder algo si no abres los ojos antes de que sea tarde. Ingrese una fecha ?/?/23");
alert('2');

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
   strings: ['¡Hay novedades!'],
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
         strings: ['-Tengo unas "pequeñas" confesiones al final. <br> <br> PISTA: Cuando las letras están encerradas es porque quieren decir algo y eso quiere decir algo. <br> Es muy importante. <br> PISTA 2: Hay un adelanto y más letras encerradas, escúchalas.'],
         typeSpeed: 30,
         cursorChar: '',
         loop: false
      })
   }, 1000)

   setTimeout(() => {
      var contend = document.getElementById('ocultarnovedades');
      var novedades = document.getElementById('novedades');
      contend.removeChild(novedades);
      avisoNov.addEventListener('click', mostrarNovedades);
   }, 14000)
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