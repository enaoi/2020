// [left, right]

/**
 * 返回target的index，不存在则返回-1
 * @param {number[]} nums 有序的升序数组
 * @param {number} target
 * @return {number} 
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    let guess = nums[mid]
    if (guess === target) { return mid; }
    else if (guess < target) { left = mid + 1; }
    else { right = mid - 1; }
  }
  return -1;
}

const nums = [-1, 0, 3, 5, 9, 12]
console.log(search(nums, 9))

/**
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。 
 * 例如：8的平方根是 2.82842....，舍弃小数得到整数 2
 *  注意： 0，1 的特殊情况
 * @param {*} x
 */
var mySqrt = function (x) {
  let left = 0, right = Math.ceil(x / 2);
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    let midSqrt = Math.pow(mid, 2)
    if (midSqrt <= x && Math.pow(mid + 1, 2) > x) {
      return mid;
    } else if (midSqrt > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
}

console.log(mySqrt(0))
console.log(mySqrt(1))
console.log(mySqrt(8))

/**
 * 我从 1 到 n 选择一个数字。 你需要猜我选择了哪个数字。每次你猜错了，我会告诉你这个数字是大了还是小了。
 * 你调用一个预先定义好的接口 guess(int num)，
 * 它会返回 3 个可能的结果（-1，1 或 0）：
 * -1 我的数字比较小
 * 1 我的数字比较大
 * 0 恭喜你，猜对了
 * 
 * @param {*} n
 */
var guessNumber = function (n) {
  let left = 1, right = n;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    if (guess(mid) === 0) {
      return mid;
    } else if (guess(mid) === 1) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
}



/**
 * TODO: 
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 主要判断有序数组是在哪一边，然后做排除
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) return mid;
    // [left ,mid] 有序
    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

  }
  return -1;
};

const nums = [4, 5, 6, 7, 0, 1, 2]
console.log(search(nums, 0))




