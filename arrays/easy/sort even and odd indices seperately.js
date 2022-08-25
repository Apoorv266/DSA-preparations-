// var sortEvenOdd = function(nums) {
//     let temp = 0
//     // let temp2 = 0
//     for (let i = 0; i < nums.length -2; i += 2) {
//         for (let j = i + 2; j < nums.length; j+= 2) {
//             if (nums[i] > nums[j]) {
//                 temp = nums[i]
//                 nums[i] = nums[j]
//                 nums[j] = temp
//             }

//         }  
//     }

//     for (let i = 1; i < nums.length; i += 2) {
//         for (let j = i + 2; j < nums.length; j+= 2) {
//             if (nums[i] < nums[j]) {
//                 temp = nums[i]
//                 nums[i] = nums[j]
//                 nums[j] = temp
//             }

//         }  
//     }
//     return nums
// };


var sortEvenOdd = function (nums) {
    if (nums.length < 3) return nums;
    const evens = [];
    const odds = [];
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) evens.push(nums[i]);
        else odds.push(nums[i]);
    }

    evens.sort((a, b) => a - b);
    odds.sort((a, b) => b - a);

    console.log(evens, odds)

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            // res.push(evens[i]) 
            res[i] = evens[i]
            // console.log(i) 
        
        }
        // else{
        //     // res.push(odds[i]);
        //     res[i] = odds[i]
        // }
    }

    return res;
};

console.log(sortEvenOdd([10, 1, 42, 3, 2, 5]))