var decompressRLElist = function(nums) {
    // console.log(nums.length)
    let decomList = []

    for (let i = 0; i < nums.length; i = i + 2) {
        // append(nums[i], nums[i + 1])
        for (let j = 0; j < nums[i]; j++) {
            decomList.push(nums[i + 1])
        }
       
    }
    
    // function append(freq, val) {
    //     for (let i = 0; i < freq; i++) {
    //         decomList.push(val)
    //     }
    // }
    return decomList
};


console.log(decompressRLElist([1,2, 3, 4]))

// [2,4,4,4]