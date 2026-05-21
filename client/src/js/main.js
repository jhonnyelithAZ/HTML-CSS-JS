const nombre= "hola vale"
const nombreCompleto= "hola vales,toi probando"
const edad=29
const diaDeLaSemana=1
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

//opcion con switch//

switch (diaDeLaSemana) {
    case 1:
        console.log("hoy es lunes")
        break;
    case 2:
        console.log("hoy es martes")
        break;
    case 3:
        console.log("hoy es miercoles")
        break;
    case 4:
        console.log("hoy es jueves")
        break;
    case 5:
        console.log("hoy es viernes")
        break;
    case 6:
        console.log("hoy es sabado")
        break;
    case 7:
        console.log("hoy es domingo")
        break;
    default:
        console.error("dia de la semana no valido")
}