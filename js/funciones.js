function cargarProductos(){
    const productos = JSON.parse(localStorage.getItem('listaBurger'));
    if(productos){
        carrito = productos;
        mostrarCarrito();
    }
}



function agregarAlCarrito(event){
    if(event.target.tagName === 'LI'){
        const producto = {
            nombre: event.target.getAttribute('date-nombre'),
            precio: Number(event.target.getAttribute('data-precio'))
        }
        carrito.push(producto);
        guardarPorductos();
        mostrarCarrito();
    }
}

function guardarPorductos(){
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function mostrarCarrito(){
    listaCarrtio.innerHTML = '';
    carrito.forEach((producto) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrtio.appendChild(li);
    });
    actualizarTotal();
}

function actualizarTotal() {
    const total = carrito.reduce((acumular, producto) => acumular + producto.precio, 0);
    totalCarrito.textContent = `$${total}`;
}

