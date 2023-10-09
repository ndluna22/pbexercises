// add whatever parameters you deem necessary

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Time Complexity - O(N + M)

//two share same nums
function sameFrequency(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] <= 0 && nums[right] > 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    } else {
      if (nums[left] > 0) left++;
      if (nums[right] <= 0) right--;
    }
  }

  return nums;
}

// Examples:

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
