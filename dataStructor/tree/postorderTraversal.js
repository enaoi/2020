var postorderTraversal = function (root) {
  let stack = []
  let output = []

  if(root === null) {
    return output
  }

  stack.push(root)
  while(stack.length){
    node = stack.pop()
    output.unshift(node.val)

    if(node.left!==null){
      stack.push(node.left)
    }
    if(node.right!==null){
      stack.push(node.right)
    }
  }
  return output;
};