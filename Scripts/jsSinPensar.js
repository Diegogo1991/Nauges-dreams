//IMPORTACION FUNCIONES GENERALES

import { funcGene } from "./functions.js";

//setTimeout(funcGene.musicAleatorie, 1);

//setTimeout(funcGene.fondoAleatorio, 1);

/*document.addEventListener/*("DOMContentLoaded", function () {
   setTimeout(funcGene.fondoAleatorie, 1);
});*/

//MOSTRAR IMAGENES
function mostrarImagenes() {
   let pensado = document.getElementById('pensado');
   pensado.innerHTML = 'Así fue casi como empezó todo con una de mis victimas, digamos caso "Elise" <img src="./src/IMGS/ELISE/0.png" alt="">';
   setTimeout(() => {
      let contador = 0;
      const intervalID = setInterval(() => {
         contador++;
         pensado.innerHTML = `<img src="./src/IMGS/ELISE/${contador}.png" alt=""></img>`
         if (contador == 9) {
            clearInterval(intervalID);
            setTimeout(() => {
               new Typed('.pensado', {
                  strings: ['Quise subir todo como imagen, pero la memoria y el tiempo no me alcanzará, los chats estarán en las carpetas de los textos'],
                  typeSpeed: 30,
                  cursorChar: '',
                  onComplete: setTimeout(() => {
                     window.location.replace('coleccion.html');
                  }, 3000) 
               });
            }, 17000);
         }
      }, 5000);
   }, 5000)
}  

//FOCUS
function setFocus(selector) {
   let element = document.querySelector(selector);
   element.focus();
}

//COMENTARIOS
function comentario4() {
   new Typed('.comentario4', {
      strings: ['Según las estadisticas un criminal suele botar o quemar cualquier evidencia, yo decidí regalarlas y esparcirlas, más divertido y poco probable de que aparezcan particularmente por lo mencionado antes'],
      typeSpeed: 30,
      cursorChar: '',
      onComplete: mostrarImagenes
   });
}
function comentario3() {
   new Typed('.comentario3', {
      strings: ['Y me aprovecho de eso, la falta de unidad, comunicación, empatía, atención y organización que hay en la U. Les encanta el individualismo, la competencia, la indiferencia, los resultados, pero no la responsabilidad'],
      typeSpeed: 30,
      cursorChar: '',
      onComplete: () => {
         setFocus('.comentario4');
         comentario4();}
   });
}
function comentario2() {
   new Typed('.comentario2', {
      strings: ['lo confirmé viendo las estadísticas de la página que disminuyeron día por día hasta 1, fue buena idea escoger días de finales cuando casi se sale a vacaciones'],
      typeSpeed: 30,
      cursorChar: '',
      onComplete: () => {
         setFocus('.comentario3');
         comentario3();
      }
   });
}
function comentario1() {
   new Typed('.comentario1', {
      strings: ['Es fácil confundir a la gente con música y fondos coloridos como si todo pareciera un juego, otro factor es el aspecto que tenía quien lo entregó'],
      typeSpeed: 30,
      cursorChar: '',
      onComplete: () => {
         setFocus('.comentario2');
         comentario2();
      }
   });
}

new Typed('.pensado', {
   strings: ['25/06/23 <br> Antes de hacer los avisos en la pared, pensaba en todas las posibilidades y en todas las posibles consecuencias, todas las cuales me beneficiaban, porque el castigo es tan importante como la recompensa. Ahora que ya está hecho, me imagino todo tipo de comentarios. Para algunos, esto será confuso y no tendrá sentido, <span tabindex="0" class="comentario1"> </span> para otros será ridículo. Tal vez alguien le dé la importancia que se merece a un tema como este, pero más allá de lo que yo imagino sobre lo que la gente piensa, lo verdaderamente importante es lo que yo pienso. De hecho, lo escribo para recordármelo, para recordarme que nadie va a entender lo que hice hasta que todo termine. Incluso cuando todas las pruebas estén expuestas, dudo que todo sea comprendido. <br> <br> Sin embargo, hay algo que no había pensado completamente: cómo mostrar todo después de lanzar los avisos y los códigos QR. Hay muchas cosas a tener en cuenta para que no salga tan mal. Ya hay algunos cuadros de evidencias desbloqueados. <br><br> Mantengo una dicotomía entre creer que esto es visto o completamente ignorado. Quizás la opción de que nadie lo ve es mejor para seguir viviendo como una sombra en la oscuridad, <span tabindex="0" class="comentario2"> </span> lo cual me permite llevar a cabo mis vilipendios y, por ende, continuar ejecutando todo según lo planeado sin pensar en consecuencias negativas. <br><br> ¿Qué crees tú que es peor: la culpa o la impotencia? <br><br> Lo curioso es que ambos sentimientos pueden llevar al arrepentimiento; la diferencia radica en la razón de si se hizo algo o no. Me he empezado a reír porque me acordé de esas imágenes con frases en fondos "Tumblr" que decían cosas como: "Es mejor arrepentirse que quedarse con las ganas". Es fácil pensar así cuando lo que haces no afecta a muchas personas ni les causa daño. Pero tú, que estás leyendo esto, debes reconocer que ni tú ni yo ni nadie actúa siempre con benevolencia.  Todos deseamos hacerle daño a alguien en algún momento de nuestras vidas y nos justificamos con muchas razones. <br> Precisamente en clase de actuación, la presentación de un compañero era un monólogo en el que él interpretaba al asesino de un cura que había violado a varios niños, en el cual cuestionaba conceptos como la justicia, el bien o qué es un crimen. No voy a extenderme en los detalles de dicho monólogo, quizás si él lee esto y hay más personas hablando sobre esto, podrían comunicarse entre sí para discutir esos detalles. Acabo de mencionar algo muy importante: imagino que diferentes personas comparten lo que saben para aclarar ciertos detalles que son muy importantes en todo esto. <span tabindex="0" class="comentario3"> </span> Eso depende más de ustedes, los que no veo, que de mí. Vuelve a leer cada texto y recuerda lo que mencioné sobre los "regalos". ¿A quién se los di? Si tú tienes uno, ¿qué harás con él? <span tabindex="0" class="comentario4"> </span> <br> Retomando lo del monólogo de mi compañero en actuación, mencioné eso porque cuando se discute de esos casos, es relativamente fácil justificarse y alabar la violencia, yo no estoy en contra de ello, solo me pregunto: ¿Me juzgarán de la misma manera por lo que hice? ¿Justificarán mis malos actos por mi objetivo final? <br> Se me ocurrió una idea: reemplazar los nombres de las victimas por nombres de autos. Eso me da más tiempo.'],
   typeSpeed: 10,
   cursorChar: '',
   smartBackspace: false,
   backSpeed: 1, 
   onComplete: () => {
      const spans = document.querySelectorAll('span');
      spans.forEach(span => {
         span.style.display = "flex";
      });
      setFocus('.comentario1');
      comentario1();
   }
});


/*new Typed('.conocimiento', {
   strings: [contenido],
   typeSpeed: 30,
   cursorChar: '',
   onComplete: comentario1
});*/
