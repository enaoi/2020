
var connect = function (root) {
  if (!root) return null;
  let stack = [root];

  while (stack.length) {
    let size = stack.length;
    for (let i = 0; i < size; i++) {
      let root = stack.shift()
      if (root === null) break;
      if (i > 0) {
        pre.next = root
      }
      pre = root;
      if (root.left) {
        stack.push(root.left)
      }
      if (root.right) {
        stack.push(root.right)
      }
    }
    return root;
  }

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