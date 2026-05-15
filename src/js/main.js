const nombre= "hola vale"
const nombreCompleto= "hola vales,toi probando"
const edad=29
console.log(nombre)
console.log(nombreCompleto)

let texto= "hola vale"
let numero= 10
let booleano= true
let arreglo= [1,2,3,4,5]
let objeto= {
    nombre: "vale",
    edad: 25,
    ciudad: "madrid"
}

if (edad>18){
    console.log("eres mayor de edad")
}

else if(edad===18){
    console.warn("tienes 18 años,ten cuidado con lo que haces")
}
else{
    console.error("eres menor de edad")
}