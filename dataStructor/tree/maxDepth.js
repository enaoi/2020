let root = {
  val: 1,
  left: {
    val: 2,
    left: 4
  },
  right: {
    val: 3,
    right: 5
  }
}
var maxDepth = function (root) {
  let depth = 0;
  if(!root) return depth;
  let statck = [root]
  while(statck.length){
    depth++;
    let size = statck.length;
    while(size>0){
      let node = statck.shift()
      if(node.left) statck.push(node.left)
      if(node.right) statck.push(node.right)
      size--;
    }
  }
  return depth
}




var maxDepth = function (root) {
  if (!root) return 0;
  let left_height = maxDepth(root.left)
  let right_height = maxDepth(root.right)
  return Math.max(left_height, right_height) + 1;
}


console.log(maxDepth(root))