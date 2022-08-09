// rotate an array to right by k steps

// Approach 1 --- using push shift

function rotate(arr, k) {
    k = k % arr.length;
   while (k > 0) {
    arr.unshift(arr[arr.length - 1])
    arr.pop()
    k--
   }
    return arr
}

console.log(rotate([1,2,3,4,5],7))



// rotate an array to right by k steps

// Approach 2 --- using reverse methods

var rotate2 = function (nums, k) {
    k = k % nums.length;
    reverse(nums, 0 , nums.length - 1)
    reverse(nums, 0 , k - 1)
    reverse(nums, k , nums.length - 1)
    return nums
}  

function reverse(nums, start ,end) {
    while (start < end) {
        let temp = nums[start]
        nums[start]  = nums[end] 
        nums[end] = temp 
        start++
        end--
    }  
}

let nums = [1, 2, 3, 4, 5, 6, 7]
console.log(rotate2(nums, 3))


