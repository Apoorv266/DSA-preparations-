var shuffle = function(nums, n) {
    let arr1 = []
    for (let i = 0; i < nums.length - n; i++) {
        arr1.push(nums[i])
        arr1.push(nums[i + n])
    }
    return arr1
};

console.log(shuffle([1,2,3,4,4,3,2,1],4))

