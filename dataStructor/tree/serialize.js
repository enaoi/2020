
// 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

const { PRIORITY_ABOVE_NORMAL } = require('constants')

// 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
var serialize = function (root) {
  let output = []
  let stack = []
  stack.push(root)
  let allNull = false
  while (stack.length) {
    let size = stack.length;
    if (allNull) break;
    allNull = true;
    for (let i = 0; i < size; i++) {
      node = stack.shift()
      if (!node) {
        output.push(null)
        stack.push(null)
        stack.push(null)

      } else {
        if (node.left || node.right) {
          allNull = false
        }
        stack.push(node.left)
        stack.push(node.right)
        output.push(node.val)
      }
    }
  }
  return JSON.stringify(output);
}
var root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
console.log(serialize(root))


const serialize = (root) => {
  let stack = [root]
  let output = []
  while(stack.length) {
    const node = stack.shift()
    if(node) {
      output.push(node.val)
      stack.push(node.left)
      stack.push(node.right)
    } else {
      output.push(null)
    }
  }

  return JSON.stringify(output)
}



function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var deserialize = function (data) {
  let stack = []
  let nodes = JSON.parse(data)
  let root = new TreeNode(nodes.shift())
  stack.push(root)
  while (nodes.length) {
    let parent = stack.shift()
    let left_val = nodes.shift()
    let right_val = nodes.shift()
    if (left_val !== null && parent) {
      let left = new TreeNode(left_val)
      parent.left = left;
      stack.push(left)
    }
    if (right_val !== null && parent) {
      let right = new TreeNode(right_val)
      parent.right = right;
      stack.push(right)
    }

  }
}