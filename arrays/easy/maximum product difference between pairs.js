var maxProductDifference = function (nums) {
    nums = nums.sort((a, b) => a - b);
    console.log(nums)
    n = nums.length - 1;
    return (nums[n] * nums[n - 1]) - (nums[0] * nums[1])
};

console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]))