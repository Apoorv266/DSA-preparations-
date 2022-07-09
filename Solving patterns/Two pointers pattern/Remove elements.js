// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.



var removeElement = function (nums, val) { 
    console.log(nums)
  
    let start = 0  

    while (start < nums.length) {
        if (nums[start] === val) { 
            nums[start].pop() 
        }

        start++
    }

    console.log(nums)
};


removeElement([3, 2, 2, 3], 3)