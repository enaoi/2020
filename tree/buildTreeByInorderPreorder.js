// 中序遍历 preorder = [3,9,20,15,7]
// 后序遍历 postorder = [9,15,7,20,3]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7


var buildTree = function (preorder, inorder) {
  let length = inorder.length - 1;
  let idx_map = new Map();

  for (let i = 0; i <= length; i++) {
    idx_map.set(inorder[i], i)
  }

  return helper(idx_map, preorder, 0, length)

};

var helper = function (idx_map, preorder, in_left, in_right) {
  if (in_left > in_right) {
    return null;
  }

  let root_val = preorder.shift()
  let root = new TreeNode(root_val)
  let index = idx_map.get(root_val)

  root.left = helper(idx_map, preorder, in_left, index - 1)
  root.right = helper(idx_map, preorder, index + 1, in_right)
  return root
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 15, 7, 20, 3]))
