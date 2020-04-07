const BinarySearchTree = require('./BTS');

function main() {
  const BST = new BinarySearchTree()
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  return BST
}

// console.log(main())

function main2() {
   const BST2 = new BinarySearchTree()
   BST2.insert('E');
   BST2.insert('A');
   BST2.insert('S');
   BST2.insert('Y');
   BST2.insert('Q');
   BST2.insert('U');
   BST2.insert('E');
   BST2.insert('S');
   BST2.insert('T');
   BST2.insert('I');
   BST2.insert('O');
   BST2.insert('N');
   return BST2
}
console.log(main2())


