/**
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
 * 给定有序数组: [-10,-3,0,5,9],
一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  let mid = Math.floor(nums.length / 2)
  let root = new TreeNode(nums[mid])

  let left = nums.slice(0, mid);
  let right = nums.slice(mid + 1);

  root.left = sortedArrayToBST(left)
  root.right = sortedArrayToBST(right)
  return root;
};