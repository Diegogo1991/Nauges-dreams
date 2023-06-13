//ANIMACION ESCRIBIR
var mostrarEnPregunta = document.querySelector('.pregunta a').textContent;
const pregunta = new Typed('.pregunAuto', {
   strings: [mostrarEnPregunta],
   typeSpeed: 75,
   cursorChar: '',
   loop: false
});
   
var paraBoton11 = document.querySelector('#boton1 h4').textContent;
const boton11 = new Typed('.boton11', {
   strings: [paraBoton11],
   typeSpeed: 75,
   cursorChar: '',
   loop: false
});

var paraBoton22 = document.querySelector('#boton2 h4').textContent;
const boton22 = new Typed('.boton22', {
   strings: [paraBoton22],
   typeSpeed: 75,
   cursorChar: '',
   loop: false
});

//CAMBIAR COLORES OPCIONES

var colores = ["rgba(221, 113, 11, 0.55)", "rgba(11, 221, 116, 0.55)", "rgba(11, 67, 221, 0.55)", "rgba(172, 11, 221, 0.55)", "rgba(221, 11, 92, 0.55)", "rgba(221, 11, 11, 0.55)", "rgba(11, 221, 116, 0.55)", "rgba(29, 221, 11, 0.55)", "rgba(221, 218, 11, 0.55)", "rgba(221, 123, 11, 0.55)", "rgba(221, 78, 11, 0.55)", "rgba(9, 204, 243, 0.55)"];

function cambiarColores(query) {
   let indice1 = Math.floor(Math.random() * colores.length);
   let indice2 = Math.floor(Math.random() * colores.length);
   
   let boton1 = document.querySelector(`#${query} #boton1`);
   let boton2 = document.querySelector(`#${query} #boton2`);

   boton1.style.backgroundColor = `${colores[indice1]}`;
   boton2.style.backgroundColor = `${colores[indice2]}`;

}

//CAMBIAR FONDOS ALEATORIOS
var maximo = 22;
function cambiarFondo() {
   var fondo = Math.floor(Math.random() * maximo);
   document.querySelector('body').style.background = `url('/src/LISTOS/${fondo}.jpg') center center / cover`;
}


//ADMIN DIVS
function ocultarHeros(hero) {
   document.getElementById(hero).style.display = 'none';
}

function mostrarHero() {
   cambiarColores('Hero');

   document.getElementById('Hero').style.display = 'flex';
   ocultarHeros('Hero2');
   ocultarHeros('Hero3');
   ocultarHeros('Hero4');
   ocultarHeros('Hero5');
   ocultarHeros('Hero6');
   ocultarHeros('Hero7');
   ocultarHeros('Hero8');

   cambiarFondo();
}
function mostrarHero2() {
   cambiarColores('Hero2');

   document.getElementById('Hero2').style.display = 'flex';
   ocultarHeros('Hero');
   ocultarHeros('Hero3');
   ocultarHeros('Hero5');

   cambiarFondo();
}
function mostrarHero3() {
   cambiarColores('Hero3');

   document.getElementById('Hero3').style.display = 'flex';
   ocultarHeros('Hero2');
   ocultarHeros('Hero');

   cambiarFondo();
}
function mostrarHero4() {
   cambiarColores('Hero4');

   document.getElementById('Hero4').style.display = 'flex';
   ocultarHeros('Hero3');

   cambiarFondo();
}
function mostrarHero5() {
   cambiarColores('Hero5');

   document.getElementById('Hero5').style.display = 'flex';
   ocultarHeros('Hero4');
   ocultarHeros('Hero6');

   cambiarFondo();
}
function mostrarHero6() {
   cambiarColores('Hero6');

   document.getElementById('Hero6').style.display = 'flex';
   ocultarHeros('Hero5');
   ocultarHeros('Hero4');
   ocultarHeros('Hero7');
   ocultarHeros('Hero8');

   cambiarFondo();
}
function mostrarHero7() {
   cambiarColores('Hero7');

   document.getElementById('Hero7').style.display = 'flex';
   ocultarHeros('Hero6');

   cambiarFondo();
}
function mostrarHero8() {
   cambiarColores('Hero8');

   document.getElementById('Hero8').style.display = 'flex';
   ocultarHeros('Hero7');

   cambiarFondo();
}
function mostrarHero9() {
   cambiarColores('Hero9');

   document.getElementById('Hero9').style.display = 'flex';
   ocultarHeros('Hero8');

   cambiarFondo();
}

//AVISO SUEÑOS
function avisoSueños() {
   document.getElementById('sueño').style.display = 'flex';
}

function ocultarAvisoSueños() {
   document.getElementById('sueño').style.display = 'none';
}
var ocultarsueño = document.getElementById('sueño');
sueño.onclick = ocultarAvisoSueños;




