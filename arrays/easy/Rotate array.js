// rotate an array to left by k steps
// function rotate(arr, k) {
//     for (let j = 1; j <= k ; j++) {
//         arr.push(arr[0])
//         arr.shift()
//     } 
//     return arr
// }

// console.log(rotate([1,2,3,4,5,6,7],3))


// rotate an array to right by k steps



var rotate2 = function(nums, k) {
let temp = []

for (let i = 0; i < nums.length; i++) {
temp[(i + k) % nums.length] = nums[i]
}
 
temp = nums
return nums 
}



console.log(rotate2([1,2,3,4,5,6,7],3))
