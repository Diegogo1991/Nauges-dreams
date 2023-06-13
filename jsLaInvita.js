const typed = new Typed('.typed', {
   strings: ['Un día yo estaba como tú; viendo algo que llamó mi atención en la universidad. Después de eso pasaron cosas tan extrañas que llegué a sentir todo como un sueño surrealista. <br> Cosas que me hicieron dudar de mi forma de actuar. Mi forma de pensar. Cosas que me hicieron hacer otras cosas, de las cuales no sé si soy'],
   typeSpeed: 35
});

//const mclarens = new Typed('.boton')
var parrafo2; //PENDIENTEEEEEEEEE

setTimeout(() => {
   var boton = document.querySelectorAll('.botones .boton');

   for (let i = 0; i < boton.length; i++) {
      boton[i].style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`
   }
}, 1)

setTimeout(() => {
   var boton = document.querySelectorAll('.botones .boton');
   var opciones = ["Culpable", "Complice", "Elegido", "Observador"];
   for (let i = 0; i < boton.length; i++) {
      boton[i].innerHTML = `${opciones[i]}`;
   }
}, 17000)

var culpable = document.getElementById('culpable');
var complice = document.getElementById('complice');
var elegido = document.getElementById('elegido');
var observador = document.getElementById('observador');

culpable.addEventListener('click', siguienteParrafo);
complice.addEventListener('click', siguienteParrafo);
elegido.addEventListener('click', siguienteParrafo);
observador.addEventListener('click', siguienteParrafo);

function siguienteParrafo(e) {
   var palabra;
   switch (e.target.id) {
      case "culpable":
         palabra = "sueños";
         break;
      case "complice":
         palabra = "regalos";
         break;
      case "elegido":
         palabra = "********";
         break;
      case "observador":
         palabra = "hechos";
         break;
      default:
         break;
   }
   var textoOpcional = "por algo o alguien para algún tipo de plan; todo solamente por ver un suceso, por estar en un lugar a esa hora.";

   var texto = `De un plan que engañaría a muchas personas y al final esas mismas personas serían las encargadas de hacer ver la verdad sobre los “${palabra}”. Ahora que lo pienso, podría ser persona (en singular) en vez de personas, porque si el plan era solo para mí, entonces solo sería para ti.`
   var parrafo = document.getElementById('parrafo2');
   var elemento = document.createElement("div");
   var contenido; //PENDIENTEEEEEE
   if (palabra == "********") {
      contenido = textoOpcional + " " + texto;
   } else {
      contenido = texto;
   }
   /*elemento.appendChild(contenido);*/
   elemento.classList.add("texto");
   elemento.classList.add("texto2");
   parrafo.appendChild(elemento);

   setTimeout(() => {
      var botones = document.createElement("div");
      botones.setAttribute("class", "botones");
      parrafo.appendChild(botones);

      /*let ides = ["venganza", "interes", "verdad"];
      let preguntas = ["¿Por venganza?", "¿Por interés?", "¿Para decirte la verdad?"]*/
      /*for (let i = 0; i < ides.length; i++) {
         let boton = document.createElement("button");
         boton.setAttribute("class", "boton");
         boton.setAttribute("id", `${ides[i]}`);
         boton.textContent = `${preguntas[i]}`;
         
         botones.appendChild(boton);
      }*/
      botones.innerHTML = '<button id="venganza" class="boton">¿Por venganza?</button> <button id = "interes" class="boton" >¿Por interés?</button> <button id="verdad" class="boton">¿Para decirte la verdad?</button>';

      setTimeout(() => {
         var boton = document.querySelectorAll('.botones .boton');

         for (let i = 0; i < boton.length; i++) {
            boton[i].style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`
         }
      }, 1)
   }, 20000)
   
   /*var padreBotones = document.getElementById('botonesPrimeros');
   var hijosBotones = document.querySelectorAll('#botonesPrimeros .boton');
   for (let i = 0; i < hijosBotones.length; i++) {
      padreBotones.removeChild(hijosBotones[i]);
   }*/
   
   culpable.removeEventListener('click', siguienteParrafo);
   complice.removeEventListener('click', siguienteParrafo);
   elegido.removeEventListener('click', siguienteParrafo);
   observador.removeEventListener('click', siguienteParrafo);
   
   /*culpable.style.display = "none";
   complice.style.display = "none";
   observador.style.display = "none";
   elegido.style.display = "none";*/
   parrafo2 = new Typed('.texto2', {
      strings: [contenido],
      typeSpeed: 35
   })
}




