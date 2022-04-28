/* nivel 1 */

/* const anioNacimiento = parseInt(prompt("Escribe tu año de nacimiento"))
const anioActual = 2022
console.log(anioNacimiento)
console.log(`Tienes ${anioActual - anioNacimiento} años` )
 */

//Nivel 2

/* opcion1 */

/*const anioActual = 2022
function calcularEdad(){
    const anioNacimiento = parseInt(document.getElementById ("anio").value)
    console.log(anioNacimiento);
    console.log(`Tienes ${anioActual - anioNacimiento} años` )
} */
/* opcion2 */

/* const boton = document.getElementById("calcular")
console.log(boton)
boton.addEventListener("click", ()=>{
    const anioNacimiento = parseInt(document.getElementById ("anio").value)
    console.log(anioNacimiento);
    console.log(`Tienes ${anioActual - anioNacimiento} años` ) 
})
 */

/*
Intento personal:

const year = document.querySelector('#year');
const btnCalcular = document.querySelector('#btnCalcular');

const yearActual = new Date().getFullYear();

btnCalcular.addEventListener('click', calcularEdad);

function calcularEdad() {
    const yearNacimiento = year.value;
    const edad = yearActual - yearNacimiento;
    console.log(edad);
}
*/

/* nivel3 */

const fecha = new Date()

const anio = fecha.getFullYear()
console.log(anio)

const mes = fecha.getMonth() + 1
console.log(mes)

const dia = fecha.getDate() + 1
console.log(dia)

const anioActual = 2022
const mesActual = 4
const diaActual = 27


function mostrarDatos(){
    const nacimiento = document.getElementById ("anio").value
    console.log(nacimiento)
    
    const nacimientoDividido = nacimiento.split("-")
    console.log(nacimientoDividido)

    const anioNacimiento = parseInt(nacimientoDividido[0])
    const mesNacimiento = parseInt(nacimientoDividido[1])
    const diaNacimiento = parseInt(nacimientoDividido [2])
    console.log(anioNacimiento,mesNacimiento,diaNacimiento)

    if(mesNacimiento<=mesActual&&diaNacimiento<=diaActual){
        console.log(`Tienes ${anioActual - anioNacimiento -1} años` ) 

    }
    else{
        console.log(`Tienes ${anioActual - anioNacimiento - 1} años` ) 

    }

}