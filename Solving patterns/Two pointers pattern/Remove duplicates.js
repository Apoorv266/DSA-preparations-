var removeDuplicates = function(nums) {
//    let start = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1] ) {
            nums[i] = nums[i + 1]
            // start++
        }
    }
    return nums
};

console.log(removeDuplicates( [0,0,1,1,1,2,2,3,3,4]))