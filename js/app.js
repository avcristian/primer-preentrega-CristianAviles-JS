let listaBurger = [];
let carrito = [];
listaBurger.push(new Burger('Simple Bacon', 1500, '4 estrellas'));
listaBurger.push(new Burger('Doble Bacon', 2000, '5 estrellas'));
listaBurger.push(new Burger('Simple Cheddar', 1300, '4 estrellas'));
listaBurger.push(new Burger('Doble Cheddar', 1800, '5 estrellas'));
listaBurger.push(new Burger('Simple Frany', 1500, '4 estrellas'));
listaBurger.push(new Burger('Doble Frany', 2000, '5 estrellas'));
localStorage.setItem('listaBurger', JSON.stringify(listaBurger))
let nombreUser;
let total = 0;


alert('Bienvenido al carrito de hamburguesas de Frany Burger');

nombreUser = prompt('ingrese su nombre:');

let opciones = Number(prompt('Hola '+ nombreUser +'\nRecuerdo que todos los menus vinene con papas incluidas\nIngresa el numero que corresponda\n1. Ver productos.\n2. Agregar una nueva Burger al sistema. \n3. Ver productos seleccionados e ir a pagar.\n\n0. Finalizar con la compra')); 

let prod = listaBurger.map(element => {
    return new Burger(element.id, element.nombre, element.precio, element.valoracion)
});

do{
    if(opciones == 1){
        let opcion = 'Selecione el numero de la hamburguesa deseada\n ' + mostrarBurger(prod)+ '\n0. para ir atras';
        let opcion2 = Number(prompt(opcion))
        let productosSeleccionados = prod.find(producto => producto.id === opcion2)
        if(opcion2 == 0){
            opciones = opcion2
        }
        if(productosSeleccionados){
            carrito.push(productosSeleccionados);
        } else if(opcion2 != 0){
            alert('No existe esa hamburguesa');
            opcion2 = Number(prompt(opcion));
        } 
        else if(opcion2 == 00){
            opciones = Number(prompt('Hola '+ nombreUser +'\nRecuerdo que todos los menus vinene con papas incluidas\nIngresa el numero que corresponda\n1. Ver productos.\n2. Agregar una nueva Burger al sistema. \n3. Ver productos seleccionados e ir a pagar.\n\n0. Finalizar con la compra')); ; 
        }
    } else if( opciones == 2){ // queria intentar agregar un nuevo objeto al array que ya existe, desde la consola funciona, pero no se ve en los prompt
        let opcion = prompt('Introduzca el nombre para agregar al sistema de hamburguesas\nSe recomiendo usar s: simple, d: doble, t:triple y seguido de lo que es (bacon, cheddar, wacamole, etc ...)');
        agregarBurger(opcion);
        opciones = Number(prompt('Hola '+ nombreUser +'\nRecuerdo que todos los menus vinene con papas incluidas\nIngresa el numero que corresponda\n1. Ver productos.\n2. Agregar una nueva Burger al sistema. \n3. Ver productos seleccionados e ir a pagar.\n\n0. Finalizar con la compra'));  
    } else if( opciones == 3){
        for(const pro of carrito){
            total += pro.precio;
        }
        let verProdcutos= 'Los productos seleccionados fueron\n' + mostrarBurger(carrito) + '\nEl total a pagar es: '+ total;
        alert(verProdcutos);
        opciones = 0;
    } else if(opcion == 0){
    opcion = 0
    } else{
    alert("No es una opcion correcta")
    opciones = Number(prompt('Hola '+ nombreUser +'\nRecuerdo que todos los menus vinene con papas incluidas\nIngresa el numero que corresponda\n1. Ver productos.\n2. Agregar una nueva Burger al sistema. \n3. Ver productos seleccionados e ir a pagar.\n\n0. Finalizar con la compra')); 
}  
} while(opciones != 0)