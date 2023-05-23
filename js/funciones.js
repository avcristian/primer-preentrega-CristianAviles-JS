function eventLiteners(){
    burgers.addEventListener('click', comprarBurger);
}

function comprarBurger(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        leerDatosBurger(curso);
    }
}

function leerDatosBurger()