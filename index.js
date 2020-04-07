const BinarySearchTree = require('./BTS');

function main() {
  const BST = new BinarySearchTree();
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  return BST;
}

// console.log(main())

function main2() {
   const BST2 = new BinarySearchTree();
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
   return BST2;
}
// console.log(main2())

//4 
//Returns the total value of the tree (O(n))
// function tree(t){
//     if(!t){
//         return 0;
//     }
//     return tree(t.left) + t.value + tree(t.right)
// }

//5
function findHeight(BST) {
  if(BST.left === null && BST.right === null) {
    return 1;
  } else if (BST.left === null) {
    return findHeight(BST.right) + 1;
  } else if(BST.right === null) {
    return findHeight(BST.left) + 1;
  }

  return Math.max(findHeight(BST.left),findHeight(BST.right)) + 1
}

let bst = main();
let tree = new BinarySearchTree()

// console.log(bst)

console.log(findHeight(bst))