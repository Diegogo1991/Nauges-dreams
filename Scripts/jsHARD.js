//FUNCION MUSICA ALEATORIA
function musicAleatorie() {
   var indice = Math.floor(Math.random() * 18);
   var audio = document.getElementById('audio');
   audio.src = `./src/MUSICALISTA/${indice}.mp3`;
}
document.addEventListener("DOMContentLoaded", function () {
   setTimeout(musicAleatorie, 1);
});

//FUNCION FONDO ALEATORIA
function fondoAleatorie() {
   var indice = Math.floor(Math.random() * 5);
   var video = document.getElementById('video');
   video.src = `./src/VIDEOSLISTOS/FONDOS/${indice}.mp4`;
}
//setTimeout(fondoAleatorie, 1);
document.addEventListener("DOMContentLoaded", function () {
   setTimeout(fondoAleatorie, 1);
});

const enunciado = new Typed('.iniHard', {
   strings: ['Casi siempre tenemos más de dos opciones, solo falta crearlas, creer en ellas o tenerlas, eso dependiendo de quién hayas sido'],
   typeSpeed: 30,
   cursorChar: ''
});

var contraseña = new Typed('.contraseña', {
   strings: ['Contraseña directa:'],
   typeSpeed: 150,
   cursorChar: ''
});

var contraseña = document.getElementById('contraseña');

//Para mostrar sobre la contraseña
var validador = document.getElementById('enviarCtr');
validador.addEventListener('click', mostrarRazon);


var info;
function mostrarRazon() {
   var content = document.getElementById('contentInfo');
   content.style.display = "flex";
   var formacion = document.createElement('div');
   formacion.classList.add('informacion');
   formacion.setAttribute('id', 'informacion');
   content.appendChild(formacion);

   info = new Typed('.informacion', {
      strings: ['Esto es a prueba de tontos. No voy a confesar todo lo que he hecho a cualquier persona distraída como tú. Soy un ludópata, al igual que tú, y me gusta ganar. ¿No sabes qué significa "ser" ludópata? Entonces eres ingenua. <br> Teniendo en cuenta que soy un ludópata, ¿ahora entiendes por qué las recompensas en aquel momento? ¿No? <br> Entonces tenemos un problema: el mío es personal, el tuyo es que mi problema es personal. Ahora esto te importa porque no sabes de qué manera estás involucrado, porque no sabes de todas las cosas que di, cuales podrían ser regalos o "evidencias".', 'De hecho esa pañoleta puede ser la contraseña, una palabra de su frase o el autor, la palabra de aquel parche, cualquier palabra del texto detras del dibujo, incluso tu nombre podria ser una opcion, pero en las preguntas es más complicado y todo es culpa de alguien que me dijo que entraba en conflicto cuando solo eran dos opciones'],
      typeSpeed: 30,
      cursorChar: ''
   });

   setTimeout(() => {
      let eliminar = document.getElementById('informacion');
      document.getElementById('contentInfo').removeChild(eliminar);
      var content = document.getElementById('contentInfo');
      content.style.display = "none";
   }, 45000)
}

//Verificar contraseña
// Obtener referencia al elemento del input de contraseña
var inputContraseña = document.getElementById('contraseña');

// Agregar el evento keydown al input de contraseña
inputContraseña.addEventListener('keyup', function (event) {
   var valor = inputContraseña.value.toLocaleLowerCase(); // Obtener el valor actual del input
   verificarContraseña(valor); // Llamar a la función buscarPalabraEnLista con el valor del input
});


function verificarContraseña(palabra) {
   // Lista de palabras predefinidas
   var listaPalabras = ['einstein', 'sueños', 'michelle', 'isabela', 'julian', 'Locura es seguir haciendo lo mismo y esperar resultados diferentes', '2/3', 'gina', 'ana', 'gabriela', 'linette', 'laura', 'jules', 'manzana verde', 'cool', 'cardinaux', 'great'];

   // Verificar si la palabra está en la lista
   if (listaPalabras.includes(palabra)) {
      console.log("¡Funciona!");
      window.location.replace('laInvitacion.html');
   } else {
      console.log("La palabra no se encuentra en la lista.");
   }
}

//Funcion para mostrar pregunta

/*var preguntaLana = document.getElementById('1pregunta');
preguntaLana.addEventListener('click', preguntaL);

function verificarContraseña2() {
   var listaPalabras = ['naranja'];
   let palabra = lana.value.toLocaleLowerCase();
   if (listaPalabras.includes(palabra)) {
      console.log("¡Funciona!");
      window.location.replace('laInvitacion.html');
   } else {
      console.log("La palabra no se encuentra en la lista.");
   }
}
var lana;
function preguntaL() {
   var tablero = document.getElementById('content');
   tablero.innerHTML = '<div class="preguntaL preguntaLana">  </div> <div class="preguntaL"> <div class="value opcion"> <input id="contraseña2" type="text"></div> <div class="opcion"> <div class="opcion1 opcionn">Azul</div><div class="opcion2 opcionn">No habia lana</div></div> </div> '
   var question;
   setTimeout(() => {
      question = new Typed('.preguntaLana', {
         strings: ['Lana sube y lana baja ¿De qué color es la lana?'],
         typeSpeed: 30,
         cursorChar: ''
      });
      
   }, 1);

   setTimeout(() => {
      lana = document.getElementById('contraseña2');
      lana.addEventListener('keyup', verificarContraseña2);
   }, 1000)
   
}*/



// Crear objetos de preguntas
const pregunta1 = {
   pregunta: "¿Recuerdas el juego en clase?",
   opciones: [
      "¿Cuál clase?",
      "Si"
   ],
   opcionValue: "value"
};

const pregunta2 = {
   pregunta: "¿Tiene sentido ahora 'las cucarachas'?",
   opciones: [
      "¿En la terraza?",
      "No era una cucaracha"
   ],
   opcionValue: "value"
};

const pregunta3 = {
   pregunta: "¿Por qué escupí 5 casquillos?",
   opciones: [
      "¿Eran casquillos?",
      "Por la verdad"
   ],
   opcionValue: "value"
};

const pregunta4 = {
   pregunta: "¿Cuántos cuadros había en la pared?",
   opciones: [
      "5",
      "6"
   ],
   opcionValue: "value"
};

const pregunta5 = {
   pregunta: "¿Por qué ese es mi color favorito?",
   opciones: [
      "Por McLaren",
      "Ella"
   ],
   opcionValue: "value"
};

const pregunta6 = {
   pregunta: "¿Por qué los elementos eran del mismo color?",
   opciones: [
      "Obsesión",
      "Combinación"
   ],
   opcionValue: "value"
};

// Almacenar los objetos de preguntas en un array
const arrayPreguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6];

console.log(arrayPreguntas);

//FUNCION VERIFICAR VALOR DE CADA PREGUNTA
/*function verificarContraseña2(indice) {
   var listaPalabras = arrayPreguntas[indice].opcionValue;
   var palabra = verificador.value.toLocaleLowerCase();
   if (listaPalabras.includes(palabra)) {
      console.log("¡Funciona!");
      window.location.replace('laInvitacion.html');
   } else {
      console.log("La palabra no se encuentra en la lista.");
   }
}
*/

var preguntaAleatoria = document.getElementById('1pregunta');
preguntaAleatoria.addEventListener('click', preguntaL);
//VARIABLES PARA AGREGAR LAS FUNCIONES
var verificador;
var opcion1, opcion2;
function preguntaL() {
   var tablero = document.getElementById('content');
   tablero.innerHTML = '<div class="preguntaL preguntaLana">  </div> <div class="preguntaL"> <div class="value opcion"> <input id="contraseña2" type="text"></div> <div class="opcion"> <div id="opcion1" class="opcion1 opcionn"></div><div id="opcion2" class="opcion2 opcionn"></div></div> </div> '
   //var question;

   var indice = Math.floor(Math.random() * 6);
   setTimeout(() => {
      
      
      new Typed('.preguntaLana', {
         strings: [arrayPreguntas[indice].pregunta],
         typeSpeed: 30,
         cursorChar: ''
      });

      new Typed('.opcion1', {
         strings: [arrayPreguntas[indice].opciones[0]],
         typeSpeed: 30,
         cursorChar: ''
      });

      new Typed('.opcion2', {
         strings: [arrayPreguntas[indice].opciones[1]],
         typeSpeed: 30,
         cursorChar: ''
      });

   }, 1);

   setTimeout(() => {
      var boton = document.querySelectorAll('.opcion .opcionn');

      for (let i = 0; i < boton.length; i++) {
         boton[i].style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 255, 0.5)`
      }
      opcion1 = document.getElementById('opcion1');
      opcion1.addEventListener('click', () => {
         window.location.replace('bucle2.html');
      });
      opcion2 = document.getElementById('opcion1');
      opcion2.addEventListener('click', () => {
         window.location.replace('bucle3.html');
      });
   }, 1);

   setTimeout(() => {
      verificador = document.getElementById('contraseña2');
      verificador.addEventListener('keyup', () => {
         var listaPalabras = arrayPreguntas[indice].opcionValue;
         var palabra = verificador.value.toLocaleLowerCase();
         if (listaPalabras.includes(palabra)) {
            console.log("¡Funciona!");
            window.location.replace('laInvitacion.html');
         } else {
            console.log("La palabra no se encuentra en la lista.");
         }
      } );
   }, 1000)

}