//Importación función y textos

import { imprimirTexto } from "../jsFuncTexto.js";

import { textos } from "./textosSupra.js";

document.getElementById('1').addEventListener('click', () => {
   imprimirTexto(textos.carta1);
});

document.getElementById('atras').addEventListener('click', () => {
   window.location.replace('../coleccion.html');
})