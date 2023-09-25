const arrayVacio = [];

const arrayNumeros = [0, 1, 2, 3, 4, 5 ,6 ,7, 8, 9];

const arrayNumerosPares = [0, 2, 4, 6 , 8];

const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

function suma(a, b) {
    return a + b;
}

function potenciacion(a, b) {
    return Math.pow(a, b);
}

function separarPalabras(string) {
    let array = string.split(' ');
    return array;
}

function repetirString(string, num) {
    let repeatedString = '';
    for (num; num !== 0; num--) {
        repeatedString += string;
    }
    return repeatedString;
}

function esPrimo(n) {
   for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        return false;
    }
   }
   return true;
}

function ordenarArray(array) {
    return array.sort((a, b) => a - b);
}

function obtenerPares(array) {
    return array.filter((n) => n % 2 ===0);
}

function pintarArray(array) {
    return(`[${array.join(', ')}]`);
}

function arrayMapi(array, funcion) {
    return array.map((n) => funcion(n));
}

function eliminarDuplicados(array) {
    return array.filter((n, indice) => array.indexOf(n) === indice); //Checkea cada valor y le asigna un indice, que coincide con su indice actual. Si vuelve a aparecer ese valor, su indice actual no es el que le habia asignado, por lo que no pasa el filtro
}

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo = ['Hola', 'Mundo'];
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function esPar(n) {
    return n % 2 === 0 ? true : false;
}

let arrayFunciones = [suma, resta, multiplicacion];
function suma(a, b) {
    return a + b;
} 
function resta(a, b) {
    return a - b;
}
function multiplicacion(a, b) {
    return a * b;
}

function ordenarArray2(array) {
    return array.sort((a, b) => a - b);
}

function obtenerImpares(array) {
    return array.filter((n) => n % 2 !== 0);
}

function sumarArray(array) {
    let suma = 0;
    array.forEach(n => {
        suma += n;
    });
    return suma;
}

function multiplicarArray(array) {
    let multiplicacion = 1;
    array.forEach(n => {
        multiplicacion *= n; //Igual que +=, que sumaba cada n, *= multiplica cada n
    });
    return multiplicacion;
}