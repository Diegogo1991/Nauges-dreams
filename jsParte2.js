//CAMBIAR COLORES OPCIONES
var colores = ["rgba(221, 113, 11, 0.55)", "rgba(11, 221, 116, 0.55)", "rgba(11, 67, 221, 0.55)", "rgba(172, 11, 221, 0.55)", "rgba(221, 11, 92, 0.55)", "rgba(221, 11, 11, 0.55)", "rgba(11, 221, 116, 0.55)", "rgba(29, 221, 11, 0.55)", "rgba(221, 218, 11, 0.55)", "rgba(221, 123, 11, 0.55)", "rgba(221, 78, 11, 0.55)", "rgba(9, 204, 243, 0.55)"];

function cambiarColores(query) {
   let indice1 = Math.floor(Math.random() * colores.length);
   let indice2 = Math.floor(Math.random() * colores.length);

   let boton1 = document.querySelector(`#${query} #boton1`);
   let boton2 = document.querySelector(`#${query} #boton2`);

   boton1.style.backgroundColor = `${colores[indice1]}`;
   boton2.style.backgroundColor = `${colores[indice2]}`;

}



let b1h1 = document.getElementById('b1h1');
b1h1.addEventListener('click', mostrarHero2);
    
let b2h1 = document.getElementById('b2h1');
b2h1.addEventListener('click', mostrarHero3);

let b1h2 = document.getElementById('b1h2');
b1h2.addEventListener('click', mostrarHero5);

let b2h2 = document.getElementById('b2h2');
b2h2.addEventListener('click', mostrarHero7);

let b1h3 = document.getElementById('b1h3');
b1h3.addEventListener('click', mostrarHero4);

let b2h3 = document.getElementById('b2h3');
b2h3.addEventListener('click', mostrarHero9);

let b1h4 = document.getElementById('b1h4');
b1h4.addEventListener('click', mostrarHero7);

let b2h4 = document.getElementById('b2h4');
b2h4.addEventListener('click', mostrarHero5);

let b1h5 = document.getElementById('b1h5');
b1h5.addEventListener('click', mostrarHero8);

let b2h5 = document.getElementById('b2h5');
b2h5.addEventListener('click', mostrarHero6);

/*let b1h6 = document.getElementById('b1h6');
b1h6.addEventListener('click', mostrarHero5);*/

let b2h6 = document.getElementById('b2h6');
b2h6.addEventListener('click', mostrarHero5);

let b1h7 = document.getElementById('b1h7');
b1h7.addEventListener('click', mostrarHero8);

let b2h7 = document.getElementById('b2h7');
b2h7.addEventListener('click', mostrarHero9);

let b1h8 = document.getElementById('b1h8');
b1h8.addEventListener('click', mostrarHero3);

let b2h8 = document.getElementById('b2h8');
b2h8.addEventListener('click', mostrarHero5);

let b1h9 = document.getElementById('b1h9');
b1h9.addEventListener('click', mostrarHero5);

let b2h9 = document.getElementById('b2h9');
b2h9.addEventListener('click', mostrarHero4);

function mostrarHero() {
   cambiarColores('Hero');

   document.getElementById('Hero').style.display = 'flex';
   ocultarHeros('Hero2');
   ocultarHeros('Hero3');
   ocultarHeros('Hero4');
   ocultarHeros('Hero5');
   ocultarHeros('Hero6');
   ocultarHeros('Hero7');
   ocultarHeros('Hero8');  
}

function mostrarHero2() {
   cambiarColores('Hero2');

   document.getElementById('Hero2').style.display = 'flex';
   ocultarHeros('Hero');  
}

function mostrarHero3() {
   cambiarColores('Hero3');

   document.getElementById('Hero3').style.display = 'flex';
   ocultarHeros('Hero2'); 
   ocultarHeros('Hero');  
   ocultarHeros('Hero8');  
}

function mostrarHero4() {
   cambiarColores('Hero4');

   document.getElementById('Hero4').style.display = 'flex';
   ocultarHeros('Hero3');  
   ocultarHeros('Hero9');  
}

function mostrarHero5() {
   cambiarColores('Hero5');

   document.getElementById('Hero5').style.display = 'flex';
   ocultarHeros('Hero6'); 
   ocultarHeros('Hero2');  
   ocultarHeros('Hero4');  
   ocultarHeros('Hero8'); 
   ocultarHeros('Hero9'); 
}

function mostrarHero6() {
   cambiarColores('Hero6');

   document.getElementById('Hero6').style.display = 'flex';
   document.getElementById('Hero5').style.display = 'none';  
}

function mostrarHero7() {
   cambiarColores('Hero7');

   document.getElementById('Hero7').style.display = 'flex';
   ocultarHeros('Hero2'); 
   ocultarHeros('Hero4'); 
}

function mostrarHero8() {
   cambiarColores('Hero9'); 

   document.getElementById('Hero8').style.display = 'flex';
   ocultarHeros('Hero5'); 
   ocultarHeros('Hero7');   
}

function mostrarHero9() {
   cambiarColores('Hero9');

   ocultarHeros('Hero9');
   ocultarHeros('Hero3');  
   ocultarHeros('Hero7');
}

//ADMIN DIVS
function ocultarHeros(hero) {
   document.getElementById(hero).style.display = 'none';
}


//CAMBIAR COLORES OPCIONES
var colores = ["rgba(221, 113, 11, 0.55)", "rgba(11, 221, 116, 0.55)", "rgba(11, 67, 221, 0.55)", "rgba(172, 11, 221, 0.55)", "rgba(221, 11, 92, 0.55)", "rgba(221, 11, 11, 0.55)", "rgba(11, 221, 116, 0.55)", "rgba(29, 221, 11, 0.55)", "rgba(221, 218, 11, 0.55)", "rgba(221, 123, 11, 0.55)", "rgba(221, 78, 11, 0.55)", "rgba(9, 204, 243, 0.55)"];

function cambiarColores(query) {
   let indice1 = Math.floor(Math.random() * colores.length);
   let indice2 = Math.floor(Math.random() * colores.length);

   let boton1 = document.querySelector(`#${query} .boton1`);
   let boton2 = document.querySelector(`#${query} .boton2`);

   boton1.style.backgroundColor = `${colores[indice1]}`;
   boton2.style.backgroundColor = `${colores[indice2]}`;

}
