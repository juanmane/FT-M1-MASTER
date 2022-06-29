'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<=1) return array;
  var pivot = array[0];
  var arrizq = [];
  var arrder = [];
  for (var i = 1; i < array.length; i++) {
    if(pivot > array[i]) {
       arrizq.push(array[i]);
    }
    else if (pivot <= array[i]) {
      arrder.push(array[i])
    }
  }
  return quickSort(arrizq).concat(pivot).concat(quickSort(arrder))
}

function merge (left,right) {
  var leftIndex = 0;
  var rightIndex = 0;
  var arrayResult = [];

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      arrayResult.push(left[leftIndex]);
      leftIndex++;
    } else {
      arrayResult.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return arrayResult.concat(left.slice(leftIndex).concat(right.slice(rightIndex)))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<2) return array;
  var left =[];
  var right = [];
  for(var i = 0; i < array.length; i++) {
    if(i<array.length/2) {
      left.push(array[i]);
    } else {
      right.push(array[i])
    }
  }
  return merge(mergeSort(left),mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
