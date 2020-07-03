
var hasPathSum = function (root, sum) {
  if (!root) return false;
  sum = sum - root.val;
  if (root.left === null && root.right === null) {
    return sum === 0
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}
