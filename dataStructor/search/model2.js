// 模板二 [left,right)
var binarySearch = function (nums, target) {
  let left = 0, right = nums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }

  if (left != nums.length && nums[left] === target) return left
  return -1;
}

var isBadVersion = function (n) {
  if (n < 4) {
    return false
  } else {
    return true
  }
}

// 第一个错误版本
var solution = function (isBadVersion) {
  return function (n) {
    let left = 1, right = n;
    while (left < right) {
      let mid = Math.floor((left + right) / 2)
      console.log(mid)
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return right;
  }
}

//TODO:寻找峰值
/**
 *
 *  
 * @param {*} nums
 * @returns
 */
var findPeakElement = function (nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[mid + 1]) {
      // mid处在下坡上，所以峰值在左侧
      right = mid;
    } else {
      // mid 处在上坡上，所以峰值在右侧
      left = mid + 1;
    }
  }
  return left;
}

console.log(findPeakElement([1, 2, 3, 1]))
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))

// 寻找旋转数组中最小值
var findMin = function (nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] >= nums[left]) {
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    } else {
      right = mid;
    }
  }
  return nums[left]
}

console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([2,1]))
