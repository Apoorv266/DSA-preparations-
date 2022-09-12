var findKDistantIndices = function(nums, key, k) {
    let arr = []
    let indices = []

    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] == key) {
            indices.push(i)
        }
    }

    for (let j = 0; j < nums.length; j++) {
        
        for (let v = 0; v < indices.length; v++) {
            if (condition) {
                arr.push(j)
            }
        }
        
    }
    return indices
};

console.log(findKDistantIndices([3,4,9,1,3,9,5], 9 , 1))