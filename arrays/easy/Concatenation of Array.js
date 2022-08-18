// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i]

var getConcatenation = function(nums) {
    let ans =[]
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < nums.length; i++) {
            ans.push(nums[i])
        }
    }
    return ans
};

console.log(getConcatenation([1,3,2,1]))