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


//FUNCION PARA RETROCEDER
document.getElementById('atras').addEventListener('click', () => {
   window.location.replace('../coleccion.html');
})