function eventLiteners(){
    
    burgers.addEventListener('click', (e) => {
        e.preventDefault();

            const burger = e.target.parentElement.parentElement;
            leerDatosBurger(burger);
    });
    carrito.addEventListener('click', eliminarBurger)

    btnVaciar.addEventListener('click', vaciarcarrito)
    document.addEventListener('DOMContentLoaded', leerLS);
}

function leerDatosBurger(s){
    const infoBurger = {
        id: s.querySelector('button').getAttribute('data-id'),
        imagen: s.querySelector('img').src,
        titulo: s.querySelector('h4').textContent,
        precio: s.querySelector('span').textContent
    }
    agregarCarrito(infoBurger);
}

function agregarCarrito (burger){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td><img src="${burger.imagen}" width="80"></td>
    <td>${burger.titulo}</td>
    <td>$ ${burger.precio}</td>
    <td><a href="#" class="borrar-burger" data-id="${burger.id}">X</a></td> 
    `;
    tabla.appendChild(row);
    guardarLS(burger);
}

function guardarLS(burger){
    let burgers;
    burgers = obtenerBurgerLS();
    burgers.push(burger);
    localStorage.setItem('burgers', JSON.stringify(burgers));
}

function obtenerBurgerLS(){
    let burgersLS;
    if(localStorage.getItem('burgers') === null){
        burgersLS = [];
    } else {
        burgersLS = JSON.parse(localStorage.getItem('burgers'));
    }
    return burgersLS;
}

function leerLS(){
    let burgersLS = obtenerBurgerLS();
    burgersLS.forEach(function(burger){
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${burger.imagen}" width="80"></td>
        <td>${burger.titulo}</td>
        <td>$ ${burger.precio}</td>
        <td><a href="#" class="borrar-burger" data-id="${burger.id}">X</a></td> 
        `;
        tabla.appendChild(row);
    })
}

function eliminarBurger(e) 
{
    e.preventDefault();

    let burger, burgerId;

    if (e.target.classList.contains('borrar-burger')) {
        e.target.parentElement.parentElement.remove(); 
    }  
    burger = e.target.parentElement.parentElement;
    burgerId = burger.querySelector('button').getAttribute('data-id');   
    eliminarBurgerLS(burgerId);
}

function eliminarBurgerLS(burger) 
{
    let burgerLS = obtenerBurgerLS();
    burgerLS.forEach(function(burgeLS, index) {
        if (burgeLS.id === burger) {
        burgerLS.splice(index, 1);
        }
    });
    localStorage.setItem('burgers', JSON.stringify(burgerLS));
}

function vaciarcarrito() 
{
    //listaCursos.innerHTML = '';
    while(tabla.firstChild){
        tabla.removeChild(tabla.firstChild);
    }    
    //vaciar carrito  de LS
    vaciarLs();

    return false;    
}
function vaciarLs() {
    localStorage.clear();
}