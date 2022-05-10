// EJERCICIO "ARREGLO DE NUMEROS" (con Cecilia)

let num: number[] = [20, 14, 8, 0, 5, 19, 24];

for (let i: number = 0; i < num.length; i++) {
  console.log(num[i]);
}

// EJERCICIO "NUMEROS DESEADOS" (con Cecilia)

let arregloNumeros: number[] = new Array(5);

for (let i: number = 0; i < 5; i++) {
  arregloNumeros[i] = Number(prompt("Por favor, ingrese un número"));
}
console.log(arregloNumeros);
