// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.



var removeElement = function (nums, val) { 
  
    let start = 0  
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]  !== val) {
            nums[start] = nums[i]
            start++
        }
    }
   return nums
};


console.log(removeElement([3, 2, 2, 3], 3))