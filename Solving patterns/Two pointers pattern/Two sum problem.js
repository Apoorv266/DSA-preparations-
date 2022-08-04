// given array of integers that is sorted in ascending order, find two numbers such that they add up to a specific number 

// let nums = [2, 7, 11, 15] target = 9
// output = [0,1]


// function twoSum(nums, target) {
//     // two pointer approach from 2 different sides
//     let start = 0;
//     let end = nums.length - 1

//     while (start < end) {

//         let sum = nums[start] + nums[end]
//         if (sum < target) {
//             start++
//         }

//         else if (sum > target) {
//             end--
//         }

//         else {
//            return [start, end]
//         }
//     }
// }


var twoSum = function(nums, target) {
    let i = 0
    while(i < nums.length){
        let check = target - nums[i]
        // i != nums.indexOf(check) is added so that same number cannot be picked up (3 + 3 = 6) 
        // indexof returns first index of the item (if 3 is at last and at first then even for last 3 the index will be 0)
        if(nums.includes(check) && (i != nums.indexOf(check))){
            return [i, nums.indexOf(check)]
        }else{
            i++
        }
    }
};

console.log(twoSum([3, 2, 7, 3],6))

