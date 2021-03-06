// 中序遍历 inorder = [9,3,15,20,7]
// 后序遍历 postorder = [9,15,7,20,3]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7
var buildTree = function (inorder, postorder) {
  let post_idx = postorder.length - 1;
  let idx_map = new Map()
  for (let i = 0; i <= post_idx; i++) {
    idx_map.set(inorder[i], i)
  }
  
  return helper(idx_map, postorder, 0, post_idx)

}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const helper = (idx_map, postorder, in_left, in_right) => {
  if (in_left > in_right) {
    return null;
  }
  let root_val = postorder.pop()
  let root = new TreeNode(root_val)

  let index = idx_map.get(root_val)

  root.right = helper(idx_map, postorder, index + 1, in_right)
  root.left = helper(idx_map, postorder, in_left, index - 1)
  return root;
}


console.log(buildTree([9,3,15,20,7],[9,15,7,20,3]))