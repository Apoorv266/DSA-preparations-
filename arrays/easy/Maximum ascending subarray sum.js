var maxAscendingSum = function (nums) {
    let temp = nums[0], 
    sum = 0;
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] < nums[i + 1]) {
            temp += nums[i + 1]
        }
        
        else {
            if (sum < temp) {
                sum = temp;
            }
            temp = nums[i + 1];
        }

    }
    return sum
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]))