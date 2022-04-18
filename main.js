//Declaramos variable que contiene la distancia del viaje en millas
const l = 15;

//Definimos el monto
const monto = 20;

//Definimos arreglo de tamaño 5 para las tarifas dependiendo del carro
const tarifas = [0.3, 0.5, 0.7, 1, 1.3];

//Definimos arreglo de tamaño 5 para guardar la clase del carro
const typeCars = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

//Como su nombre lo dice se crea para crear ciertas validaciones 
validaciones(l, tarifas);
//Funcion que realiza todos los calculas necesarios
function fancyRide (millas, tarifas) {
    let diferencias = [];
    let contador = 0;
    //Recorremos el arreglo para realizar las multiplicaciones
    for (let i = 0; i < tarifas.length; i++) {

        const element = tarifas[i] * millas;

        diferencias.push(element);
    }

    for (let i = 0; i < diferencias.length; i++) {
        const resultado = monto - diferencias[i];

        if (resultado > 0) {
            contador++;
        }
    }

    console.log("Por un monto de:", diferencias[contador-1] , "$ lo carros que puede tomar (de mayor a menor lujo) son:")
    printAllCars(contador-1);
}
//Funcion hecha para realizar todas las validaciones posibles
function validaciones (millas, tarifas){

    let bandera = false;

    for (let i = 0; i < tarifas.length; i++) {
        const element = tarifas[i];

        if (element < 0.3 || element > 5) {
            console.log("Necesita cambiar el valor:", element, "por otro entre los parámetros 0.3 y 5");
            bandera = true;
        }   
    }

    if (l < 4 || l > 30){
        console.log("Cambie el valor de 'l' entre valor de 4 y 30 ya que el valor se encuentra fuera de los parametros permitidos")
    }else if (bandera == true){
        console.log("Arregle el parametro")
    }
    else{
        fancyRide(millas, tarifas);
    }
}

//funcion que imprime todos los carros a partir del indice hacia atras
function printAllCars (indice) {

    for (let index = indice; index >= 0; index--) {
        console.log(typeCars[index]);   
    }
}