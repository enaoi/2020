
var connect = function (root) {
  if (!root) return null;
  let stack = []
  stack.push(root)
  while (stack.length > 0) {
    let size = stack.length;
    while (size > 0) {
      let node = stack.shift()
      if (size === 1) {
        node.next = null
      } else {
        node.next = stack[0]
      }
      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
      size--;
    }
  }
  return root;
};

var root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    left: {
      val: 6
    },
    right: {
      val: 7
    }
  }
}

console.log(connect(root))