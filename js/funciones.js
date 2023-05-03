function mostrarBurger(listaBurger){
    return listaBurger.map ( producto => {
    return producto.id+". "+producto.nombre+"      Precio -> "+producto.precio}).join("\n")
}

function agregarBurger(nombreBurger){
    let id = Number(prompt('introduzca el id de la hamburguesa:\nTener en cuenta el id de los productos que ya estan agregados para poder seguir una cadena'))
    let nombre = prompt('Introduzca el nombre de la hamburguesa:')
    let precio = Number(prompt('Introduzca el precio:'))
    let valoracion = prompt('Cuantas estrellas le da? del 1 al 5')
    nombreBurger =  new Burger(id, nombre, precio, valoracion)
    listaBurger.push(nombreBurger);
}