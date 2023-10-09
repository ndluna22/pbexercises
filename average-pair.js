// add whatever parameters you deem necessary

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Constraints:

// Time Complexity: O(N)

// Examples:

//frequency counter??
function averagePair() {
  const havepair = new Set();

  for (let i = 0; i < arr.length; i++) {
    const match = num * 2 - arr[i];

    if (havepair.has(match)) {
      return true;
    }

    havepair.add(arr[i]);
  }

  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
