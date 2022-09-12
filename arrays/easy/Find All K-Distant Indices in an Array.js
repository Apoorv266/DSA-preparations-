var findKDistantIndices = function(nums, key, k) {
    const result = new Set() 
    
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === key && Math.abs(i - j) <= k) {
          result.add(i)
      }
    }
  }
  return Array.from(result)
};

console.log(findKDistantIndices([3,4,9,1,3,9,5], 9 , 1))