var check = function (nums) {

    let count = 0
    let n = nums.length - 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            count++
        }
    }

    if (nums[n] > nums[0]) {
        count++
    }


    if (count <= 1) {
        return true
    }

    else {
        return false
    }
}

let num = [6]
console.log(check(num))


// [3,4,5,1,2] <---> [1, 2, 3, 4, 5]


let a = 1
let b = 3
let c = a + b
console.log(c / 10)
console.log(c % 10)


