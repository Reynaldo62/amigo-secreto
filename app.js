// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [] ;

function agregarAmigo() {
//capturar el valor del campo de entrada
//validar la entrada
//actualizar el array de amigo con metodo push
//limpiar campo de entrada

     const inputAmigo = document.getElementById("amigo");

     const nombreAmigo = inputAmigo.value.trim();

     if (nombreAmigo === "") {

          alert("Por favor ingrese un nombre válido");

          return;
     }

     amigos.push(nombreAmigo);

     actualizarLista();

     inputAmigo.value = "";
     inputAmigo.focus();
     console.log (nombreAmigo);
     console.log (amigos);

}

function actualizarLista(){

     const listaAmigoUl = document.getElementById("listaAmigos")
     
     listaAmigoUl.innerHTML = "" ;

     amigos.forEach (amigo => {

          const li =document.createElement("li");

          li.textContent = amigo;

          listaAmigoUl.appendChild (li);

     })
}
     
 function sortearAmigo() {


     if (amigos.length === 0){
          alert("No hay amigos para realizar sorteo");

          return;
     }

     const indiceAleatorio = Math.floor(Math.random() * amigos.length);

     const amigoSorteado = amigos[indiceAleatorio];
     const resultadoUl = document.getElementById("resultado");

     resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

 }
     
document.addEventListener('DOMContentLoaded', () => {

     document.getElementById("btnAdicionar").addEventListener("click",agregarAmigo);
     document.getElementById("btnSortear").addEventListener("click",sortearAmigo);

});