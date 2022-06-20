'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var suma = 0;
  for (var i=0; i<num.length; i++) {
    suma = suma + num[num.length-1-i] * (2**i);
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  var binario = (num%2).toString();
  while (num>1) {
    num = Math.floor(num/2);
    binario = num%2 + binario;
  }
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}