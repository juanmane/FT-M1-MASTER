"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value=value;
  this.left=null;
  this.right=null;
}

BinarySearchTree.prototype.size = function() {
  var contador = 1;
  if (this.left!=null) {
    contador++;
    this.left.size();
  }
  if (this.right!=null) {
    contador++;
    this.right.size();
  }
  return contador;
}

BinarySearchTree.prototype.insert = function(nuevo) {
  let arbol = new BinarySearchTree(nuevo);
  if(nuevo<=this.value) {
    if(this.left == null) {
    this.left = arbol;
    } else this.left.insert(nuevo);
  }
  if(nuevo>this.value) {
    if(this.right==null) {
      this.right=arbol;
    }
    else this.right.insert(nuevo);
  }
}

BinarySearchTree.prototype.contains = function(value) {
  let left = this.left;
  let right = this.right;
  if (this.value == value) return true;
  if (this.left) {
   left = this.left.contains(value);
  }
  if (this.right) {
    right = this.right.contains(value);
  }  
  if (left || right) return true;
  else return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(orden) {

}
BinarySearchTree.prototype.breadthFirstForEach = function() {

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
