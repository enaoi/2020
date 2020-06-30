// 宽度优先-递归
var preorderTraversal = function (root) {
  let output = []
  preorder(root, output)
  return output;
}

var preorder = (node, output) => {
  if(node !== null) {
    output.push(node.val)
    preorder(node.left, output)
   preorder(node.right, output)
  }
}


// 宽度优先-迭代  时间复杂度 O(n) 空间复杂度O(n)
var preorderTraversal = function (root) {
  let stack = []
  let output = []
  if (root == null) {
    return output
  }
  stack.push(root)

  while (stack.length) {
    node = stack.pop()
    output.push(node.val)
    if (node.right !== null) {
      stack.push(node.right)
    }
    if (node.left !== null) {
      stack.push(node.left)
    }
  }

  return output
}



