// given array of integers that is sorted in ascending order, find two numbers such that they add up to a specific number 

// let nums = [2, 7, 11, 15] target = 9
// output = [0,1]


function twoSum(arr, total) {
    let start = 0
    let end = arr.length - 1

    while (start < end) {

        let sum = arr[start] + arr[end]
        if (sum < total) {
            start++
        }

        else if (sum === total) {
            return [start + 1 , end + 1]
        }

        else {
            end--
        }
    }

    return false

}

console.log(twoSum([2, 7, 11, 15], 9))