let item;
let precio;
let cantidad;
let nombreUser;
let total = 0;
let opciones; 
let sino;
let ticket = ``;

alert('Bienbenido al carrito de hamburguesas de Frany Burger');
nombreUser = prompt('ingrese su nombre:');
do{
    opciones = prompt('Hola ' + nombreUser + '\nEste es el menu de hamburguesas\n Selecciona la opcion que desees ingresando el numero\n 1- Simple Bacon ($1500)\n 2- Doble Bancon($1900)\n 3- Cheese Burger($1300)\n 4- Dobel Cheese Burger($1800)\n 5- Salir Todos los menus incluyen porcion de papas');
    if(opciones !== 5){
        if(opciones == 1){
            precio = 1500;
        } else if (opciones == 2){
            precio = 1900;
        } else if (opciones == 3){
            precio = 1300;
        } else if (opciones == 4){
            precio = 1800;
        }
        else {
            alert('Total: $ ' + total + '\n\nDetalle:\n' + ticket)        }
    }
    total += precio;
    ticket += opciones + ': $' + precio + '\n';
    
} while(opciones !== 5)

alert('Total: $ ' + total + '\n\nDetalle:\n' + ticket)