let productos = [];
productos.push(new Burger('Simple Bacon', 1500));
productos.push(new Burger('Doble Bacon', 2000));
productos.push(new Burger('Simple Cheddar', 1300));
productos.push(new Burger('Doble Cheddar', 1800));
productos.push(new Burger('Simple Frany', 1500));
productos.push(new Burger('Doble Frany', 2000));

localStorage.setItem('listaBurger', JSON.stringify(productos));


const listaProductos = document.getElementById('lista-productos');
const listaCarrtio = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total-carrito');


let carrito = [];

listaProductos.addEventListener('click', agregarAlCarrito);
cargarProductos();