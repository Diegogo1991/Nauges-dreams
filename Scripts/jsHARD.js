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
      strings: ['Esto es a prueba de tontos. No voy a confesar todo lo que he hecho a cualquier persona distraída como tú. Soy un ludópata, al igual que tú, y me gusta ganar. ¿No sabes qué significa "ser" ludópata? Si ves, eres ingenua. <br> Teniendo en cuenta que soy un ludópata, ¿ahora entiendes por qué las recompensas en aquel momento? ¿No? <br> Entonces tenemos un problema: el mío es personal, el tuyo es que mi problema es personal. Ahora esto te importa porque no sabes de qué manera estás involucrado, porque no sabes de todas las cosas que di, cuales podrían ser regalos o "evidencias".', 'De hecho esa pañoleta puede ser la contraseña, una palabra de su frase o el autor, la palabra de aquel parche, cualquier palabra del texto detras del dibujo, incluso tu nombre podria ser una opcion, pero en las preguntas es más complicado y todo es culpa de alguien que me dijo que entraba en conflicto cuando solo eran dos opciones'],
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
   var listaPalabras = ['einstein', 'sueños', 'michelle', 'isabela', 'julian', 'Locura es seguir haciendo lo mismo y esperar resultados diferentes', '2/3', 'gina', 'ana', 'gabriela', 'linette', 'laura', 'jules', 'manzana verde', 'cool', 'cardinaux'];

   // Verificar si la palabra está en la lista
   if (listaPalabras.includes(palabra)) {
      console.log("¡Funciona!");
      window.location.replace('laInvitacion.html');
   } else {
      console.log("La palabra no se encuentra en la lista.");
   }
}

//Funcion para mostrar pregunta

var preguntaLana = document.getElementById('1pregunta');
preguntaLana.addEventListener('click', preguntaL);
function preguntaL() {
   console.log("funcionaoaakshajgsh");
   var tablero = document.getElementById('content');
   tablero.innerHTML = '<div class="preguntaL preguntaLana">  </div> <div class="preguntaL"> <div class="value opcion"> <input id="contraseña2" type="text"></div> <div class="opcion"> <div class="opcion1 opcionn"></div><div class="opcion2 opcionn"></div></div> </div> '
   var question;
   setTimeout(() => {
      question = new Typed('.preguntaLana', {
         strings: ['¿Lana sube y lana baja? ¿De qué color es la lana?'],
         typeSpeed: 30,
         cursorChar: ''
      });
   }, 100)
}