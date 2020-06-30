var inorderTraversal = function (root) {
  let output = []
  inorder(root, output)
  return output
}

var inorder = function (node, output) {
  if (node !== null) {
    inorder(node.left, output)
    output.push(node.val)
    inorder(node.right, output)
  }
}


var inorderTarversal = function (root) {
  let stack = []
  let output = []

  let curr = root;
  while (curr !== null || stack.length) {
    while (curr !== null) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    output.push(curr.val)
    curr = curr.right
  }

  return output;
}