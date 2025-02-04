let listaDeAmigos = document.getElementById("listaAmigos");
let inputAmigo = document.getElementById("amigo");
let resultadoAmigoSorteado = document.getElementById("resultado");


function agregarAmigo() {
    let nombreAmigo = inputAmigo.value.trim(); // Eliminar espacios al inicio y al final

    // validar que el input no esté vacío
    if (nombreAmigo === "") return alert("Debes ingresar un nombre de amigo");
    
    // validar que el input solo contenga letras y espacios
    if (!/^[a-zA-Z\s]+$/.test(nombreAmigo)) return alert("El nombre del amigo solo puede contener letras y espacios");

    // validar que el amigo no esté repetido
    if (Array.from(listaDeAmigos.children).some((amigo) => amigo.textContent === nombreAmigo)) {
        return alert("El amigo ya fue agregado");
    }

    // validar que tenga al menos 3 caracteres
    if (nombreAmigo.length < 3) return alert("El nombre del amigo debe tener al menos 3 caracteres");

    // crear un elemento li y agregarle el valor del input
    let amigo = document.createElement("li");
    amigo.textContent = nombreAmigo;

    // agregar el elemento li a la lista de amigos
    listaDeAmigos.appendChild(amigo);

    // limpiar el input
    inputAmigo.value = "";
}


function sortearAmigo() {
    let amigos = Array.from(listaDeAmigos.children);
     //validar si hay amigos para sortear
    if (amigos.length === 0) return alert("No hay amigos para sortear");
    //sortear un amigo
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(amigoSorteado);
    //mostrar el amigo sorteado
    resultadoAmigoSorteado.textContent = `El amigo secreto es: ${amigoSorteado.textContent}`;
}

function resetearLista(){
    //validar si hay amigos para eliminar
    if (listaDeAmigos.children.length === 0) return alert("No hay amigos para resetear la lista");
    //limpiar la lista de amigos
    listaDeAmigos.innerHTML = "";
    resultadoAmigoSorteado.textContent = "";
}


