// [left,mid,right]
var binarySearch = function (nums, target) {
  if (!nums.length) return -1;
  let left = 0, right = nums.length - 1;
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      right = mid
    } else {
      left = mid
    }
  }
// 终止   left+1 = right;
  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  return -1;
}


