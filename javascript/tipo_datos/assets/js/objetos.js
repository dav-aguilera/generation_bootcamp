const nombre = "David"
const nombre2 = new String("David")

console.log(nombre.toLocaleLowerCase())
console.log(nombre2.toLocaleLowerCase())

//No se utiliza la siguiente manera:
const persona = new Object()
persona.nombre = "David"
persona.apellido = "Aguilera"
persona.edad = "26"

console.log(persona)

//Una manera nueva:
const nuevaPersona = {
    /* Un objeto detro de otro:*/
    /*Atributos o propiedades: */
    nombreCompleto: {
        nombre: "David",
        apellido: "Aguilera"
    },
    edad: 26,
    pasatiempos: ["pensar", "correr", "calistenia"],
    tieneTrabajo: true,

    /* metodo por que tiene una funcion (){} */

    saludar: function () {
        console.log("Hola")
    },

    sumar: function (n1, n2) {
        console.log(`El resultado de la suma es ${n1 + n2}`)
    }
}
"Hola".length //Atributo o propiedad
"Hola".toLocaleLowerCase() //Método

console.log(nuevaPersona.edad)
console.log(nuevaPersona.nombreCompleto.nombre)
console.log(nuevaPersona.pasatiempos[1])

nuevaPersona.saludar()
nuevaPersona.sumar(5, 10)

/* Para cambiar el valor  */

nuevaPersona.edad = 10
console.log(nuevaPersona.edad)

/* agregrar nuevo atributo */
nuevaPersona.colorFavorito = "Blanco"
console.log(nuevaPersona)

// Programación orientado a objetos:

console.log(nuevaPersona.hasOwnProperty("edades"))
console.log(Object.keys(nuevaPersona))
console.log(Object.values(nuevaPersona))


//Ejercicio:

const persona = {
    
    nombreCompleto: {
        nombre: "-",
        apellido: "-"
    },

    edad: n,
    pasatiempos: ["-", "-", "-"],
}







