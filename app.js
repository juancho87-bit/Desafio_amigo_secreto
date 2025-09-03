// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// empezando a trabajar el desafio challenge del amigo secreto

let amigos = []; // donde vamos a guardar los nombres que el usuario escriba

function agregarAmigo (){  //la funcion cuando damos en onclik en html del boton añadir

    let input = document.querySelector ("#amigo");
    let nombre = input.value.trim();

    if (nombre === ""){ // validacion primero entra al if y pregunta si esta vacio el campo
        alert ("Porfavor, inserte un nombre");
        return;
        }
        
            amigos.push(nombre); // con push agrega o lo guarda en el vector 
            mostrarAmigos();     // llama a la funcion que esta abajo y muestra los amigos que hemos agregado
            input.value =""; // limpia el cuadro de texto para seguir escribiendo
            input.focus();
        
}

    function sortearAmigo(){
        if (amigos.length === 0){
                alert ("No hay amigos para sortear");
                return;
            }

            let indiceAmigo = Math.floor(Math.random()*amigos.length); // hace el sorteo aleatorio de los amigos queh hay en el vector amigos
            let amigoElegido = amigos[indiceAmigo];

            
            document.getElementById("resultadoAmigo").innerHTML= amigoElegido;
            // console.log (amigos[indiceAmigo]);
            
        }


function mostrarAmigos (){

    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; 

    for (let amigo of amigos){
        let li = document.createElement ("li");
        li.textContent= amigo;
        lista.appendChild (li);
    }

}