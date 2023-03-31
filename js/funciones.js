
let vertexto_btn = document.getElementById('vertexto_btn');

let vertexto = document.getElementById('vertexto');

vertexto_btn.addEventListener('click', toggleText);

function toggleText() {
    vertexto.classList.toggle('show');

    if(vertexto.classList.contains('show')) {
        vertexto_btn.innerHTML = 'Leer menos' ; 
    }
    else {
        vertexto_btn.innerHTML = 'Leer mas sobre mí'; 
    }
}