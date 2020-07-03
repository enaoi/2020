var levelOrder = function (root) {
  let output = []
  if (!root) return output;

  let stack = []
  stack.push(root)
  while (stack.length > 0) {
    const currentLevelSize = stack.length;
    output.push([])
    for (let i = 0; i < currentLevelSize; i++) {
      const node = stack.shift()
      output[output.length - 1].push(node.val)
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
  }
  return output
}