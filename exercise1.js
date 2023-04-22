const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

const arrMap = arr.map((element) => element * 2);
console.log(arrMap);

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]
const arrFilter = arr.filter((element) => element % 2 === 0);
console.log(arrFilter);

// utilizar el método reduce para sumar todos los elementos
// 21

//Este metodo recorre el arreglo y ese es el currentValue cuando lo va recorriendo, el
//acumulador se puede setear con un segundo argumento de reduce que en este caso es '0'
//La documentacion dice 'one must return a new accumulator value on every iteration'
const arrReduce = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(arrReduce);
