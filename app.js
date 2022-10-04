/* 
1. Realiza la funcion del IMC y devuelve el resultado en una etiqueta p 
2. Realiza una funcion que pida tu nombre y te salude en una eqtiqueta h5
3. Realiza una funcion que te devuelva el numero menor y su promedio de 
los elementos pasados a la funcion, en una etiqueta span.
4. Realiza una funcion que devuelva los elementos de un Array en una etiqueta 
list

 */

let alerta = document.getElementById("alerta1");
let alerta2 = document.getElementById("alerta2");
let alerta3 = document.getElementById("alerta3");
let alerta4 = document.getElementById("alerta4");



//1
let imc = () => {
  let estatura = document.getElementById("inputEstatura").value;
  let peso = document.getElementById("inputPeso").value;
  let p = document.getElementById("pIMC");
  p.innerHTML = "";
  let resultado = Math.round( peso / Math.pow(estatura, 2));

  p.innerHTML = `Tu IMC segun los datos ingresado es de: ${resultado}`;
  alerta.style.display = "block";
};

document.getElementById("buttonIMC").addEventListener("click", imc);

//2
let saludar = () => {
  let pNombre = document.getElementById("pNombre");
  let nombre = document.getElementById("input").value;
  pNombre.innerHTML = `¡Hola ${nombre} es un gusto conocerte!`;
  alerta2.style.display = "block";
};

document.getElementById("boton").addEventListener("click", saludar);

//3

const operacion = () => {
  let span = document.getElementById("span");
  let promedio = 0;
  let numero1 = parseInt(document.getElementById("numero1").value);
  let numero2 = parseInt(document.getElementById("numero2").value);
  let numero3 = parseInt(document.getElementById("numero3").value);
  console.log(numero1, numero2, numero3);
  if (numero1 <= numero2 && numero1 <= numero3) {
    promedio = Math.round( numero1 + numero2 + numero3 / 3);

    span.innerHTML = `El Numero menor es ${numero1} y el promedio de los tres numeros es de ${promedio}`;
    alerta3.style.display = "block";
  } else if (numero2 < numero1 && numero2 < numero3) {
    promedio = Math.round( numero1 + numero2 + numero3 / 3);
    span.innerHTML = `El Numero menor es ${numero2} y el promedio de los tres numeros es de ${promedio}`;
    alerta3.style.display = "block";
  } else if (numero3 < numero1 && numero3 < numero1) {
    promedio = Math.round(numero1 + numero2 + numero3 / 3);
    span.innerHTML = `El Numero menor es ${numero3} y el promedio de los tres numeros es de ${promedio}`;
    alerta3.style.display = "block";
  }
};

//4

const agregar = () => {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let lista = document.getElementById("lista");

  array.map((item) => {
    return (lista.innerHTML += `<li>${item}</li>`);
  });
  alerta4.style.display = "block";
};

//5
