import { imprimirTexto } from "./jsFuncTexto.js";

import { chatConElla } from "./textosAventador.js";

document.getElementById('prueba').addEventListener('click', () => {
   imprimirTexto(chatConElla);
});