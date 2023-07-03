//Importación función y textos

import { imprimirTexto } from "../jsFuncTexto.js";

import { textos } from "./textosSupra.js";

//CARTA 1
document.getElementById('1').addEventListener('click', () => {
   imprimirTexto(textos.carta1);
});

//CARTA 2
document.getElementById('2').addEventListener('click', () => {
   imprimirTexto(textos.carta2);
});

//CARTA 3
document.getElementById('3').addEventListener('click', () => {
   imprimirTexto(textos.carta3);
});



//FUNCION PARA RETROCEDER
document.getElementById('atras').addEventListener('click', () => {
   window.location.replace('../coleccion.html');
})