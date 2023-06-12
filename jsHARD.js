var contraseña = document.getElementById('contraseña');

var validador = document.getElementById('enviarCtr');
validador.addEventListener('click', () =>{
      let valor = contraseña.value.toLocaleLowerCase();
      if(valor == "sueño") {
         console.log("funciona")
      } else {
         console.log("a ver que pasa")
      }
});