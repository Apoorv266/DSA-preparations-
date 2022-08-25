var sortEvenOdd = function(nums) {
    let temp = 0
    for (let i = 0; i < nums.length -2; i += 2) {
        for (let j = i + 2; j < nums.length; j+= 2) {
            if (nums[i] > nums[j]) {
                temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }

        }  
    }

    for (let i = 1; i < nums.length; i += 2) {
        for (let j = i + 2; j < nums.length; j+= 2) {
            if (nums[i] < nums[j]) {
                temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }

        }  
    }
    return nums
};

console.log(sortEvenOdd([10, 1, 42, 3, 2, 5]))