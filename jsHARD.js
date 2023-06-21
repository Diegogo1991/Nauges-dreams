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

var validador = document.getElementById('enviarCtr');
validador.addEventListener('click', mostrarRazon);
validador.addEventListener('click', () =>{
      let valor = contraseña.value.toLocaleLowerCase();
      if(valor == "sueño") {
         console.log("funciona")
      } else {
         console.log("a ver que pasa")
      }
});
var info;
function mostrarRazon() {
   var content = document.getElementById('contentInfo');
   content.style.display = "flex";
   var formacion = document.createElement('div');
   formacion.classList.add('informacion');
   formacion.setAttribute('id', 'informacion');
   content.appendChild(formacion);

   info = new Typed('.informacion', {
      strings: ['Esto es a prueba de tontos. No voy a confesar todo lo que he hecho a cualquier persona distraída como tú. Soy un ludópata, al igual que tú, y me gusta ganar. ¿No sabes qué significa "ser" ludópata? Si ves, eres ingenua. <br> Teniendo en cuenta que soy un ludópata, ¿ahora entiendes por qué las recompensas en aquel momento? ¿No? <br> Entonces tenemos un problema: el mío es personal, el tuyo es que mi problema es personal. Ahora esto te importa porque no sabes de qué manera estás involucrado, porque no sabes de todas las cosas que di, cuales podrían ser regalos o "evidencias".'],
      typeSpeed: 30,
      cursorChar: ''
   });

   setTimeout(() => {
      let eliminar = document.getElementById('informacion');
      document.getElementById('contentInfo').removeChild(eliminar);
   }, 26000)
}