function containsNearbyDuplicate(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j] && j - i <= k) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsNearbyDuplicate([-1, -1], 1));
