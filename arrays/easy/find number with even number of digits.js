var findNumbers = function(nums) {
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
       if (nums[i].toString().length % 2 == 0) {
        counter++
       }
    }
};

//or 

var findNumbers = function(nums) {
    return nums.filter(word => word.toString().length % 2 == 0).length;
};

console.log(findNumbers([12,345,2,6,7896]))