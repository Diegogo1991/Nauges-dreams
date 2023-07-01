//FUNCIONES GENERALES TODOS LOS ARCHIVOS
export const funcGene = {
   musicAleatorie,
   fondoAleatorio
}

//FUNCION MUSICA ALEATORIA
function musicAleatorie() {
   var indice = Math.floor(Math.random() * 16);
   var audio = document.getElementById('audio');
   audio.src = `./src/MUSICALISTA/${indice}.mp3`;
}

//COMENTARIOS PLANTILLA LLAMAR A LA FUNCION
//setTimeout(funcGene.musicAleatorie, 1000);
/*document.addEventListener("DOMContentLoaded", function () {
   setTimeout(funcGene.musicAleatorie, 1);
});*/

//FUNCION FONDO ALEATORIO
function fondoAleatorio() {
   var indice = Math.floor(Math.random() * 5);
   var video = document.getElementById('video');
   video.src = `./src/VIDEOSLISTOS/FONDOS/${indice}.mp4`;
}

//COMENTARIOS PLANTILLA LLAMAR A LA FUNCION
//setTimeout(funcGene.fondoAleatorio, 1000);
/*document.addEventListener("DOMContentLoaded", function () {
   setTimeout(funcGene.fondoAleatorio, 1);
});*/

//FUNCIONES PARA BUCLES

export const funcBucles = {
   fondoAleatorie,
   cambiarFondo,
   ponerEvi
}

//FUNCION FONDO ALEATORIE (BUCLES)
function fondoAleatorie(hero) {
   var indice = Math.floor(Math.random() * 13);
   var video = document.querySelector(`#${hero} #video`);
   video.src = `./src/VIDEOSLISTOS/FEVDS/${indice}.mp4`;
}

//COMENTARIOS PLANTILLA LLAMAR A LA FUNCION
//setTimeout(fondoAleatorie, 1);
/*document.addEventListener("DOMContentLoaded", function () {
   setTimeout(fondoAleatorie, 1);
});*/

//CAMBIAR FONDOS ALEATORIOS
function cambiarFondo() {
   let maximo = 22;
   var fondo = Math.floor(Math.random() * maximo);
   document.getElementById('fondo').style.background = `url('../src/IMGS/LISTOS/${fondo}.jpg') center center / cover`;
}

//setTimeout(cambiarFondo, 1);

//PONER EVIDENCIAS
function ponerEvi() {
   let maximoEV = 82;
   var evidencia = Math.floor(Math.random() * maximoEV);
   document.getElementById('fondo').style.background = `url('../src/IMGS/EVDS/${evidencia}.jpg') center center / cover`;
}