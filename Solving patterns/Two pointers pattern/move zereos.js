// give an array nums, write a function to move all 0s to the end of it while maintaining the relative order of the non-zero elements

// input -> nums = [0, 1, 0 , 3, 12]
// output -> [1, 3, 12, 0 , 0]


function moveZero(nums) {
    // let arr = arr2.sort(function (a, b) { return a - b }).reverse()
    let start = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[start] = nums[i]
            start++
        }
    }

    console.log(nums)

    for (let i = start; i < nums.length; i++) {
        nums[i] = 0
    }

    console.log(nums)
}

moveZero([0,1,0,3,12])