const BINARY_TREE = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6
    },
    right: {
      val: 2,
      left: {
        val: 7
      },
      right: {
        val: 4
      }
    }
  },
  right: {
    val: 1,
    left: {
      val: 0
    },
    right: {
      val: 8
    }
  }
}


const preorder = (root) => {
  let output = []
  if (!root) return output;
  let stack = []
  stack.push(root)
  while (stack.length) {
    let node = stack.pop()
    output.push(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return output
}

console.log(preorder(BINARY_TREE))


const inorder = (root) => {
  let output = []
  if (!root) return output;

  let stack = []
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    const node = stack.pop()
    output.push(node.val)
    curr = node.right
  }
  return output
}

console.log(inorder(BINARY_TREE))


const postorder = (root) => {

  let output = []
  if (!root) return output;

  let stack = []

  stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    output.unshift(node.val)
    if(node.left){stack.push(node.left)}
    if(node.right){stack.push(node.right)}
  }
  return output;
}
console.log(postorder(BINARY_TREE))
