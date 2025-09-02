// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// empezando a trabajar el desafio challenge del amigo secreto

let amigos = [];

function agregarAmigo (){

    let input = document.querySelector ("#amigo");
    let nombre = input.value.trim();

        if (nombre !==""){
            amigos.push(nombre); // lo guarda en el vector 
            mostrarAmigos();     
            input.value =" ";
        }
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