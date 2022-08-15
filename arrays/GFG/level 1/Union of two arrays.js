// Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays.

function doUnion(a, b) {
// 
    b.map((item) => {
        if (!a.includes(item)) {
            a.push(item)
        }
    })
    return [...new Set(a)].length
}

// or

// function doUnion(a, n, b, m){
//     let oneArr = [...a,...b]
//     return [...new Set(oneArr)].length
// }

console.log(doUnion([85, 25, 1, 32, 54, 6, 85], [85, 2]))


function binarysearch(arr, val) {
    let left = 0
    let right = arr.length - 1
    let mid = Math.floor((left + right) / 2)

    while (arr[mid] != val && left <= right) {
        if (val < arr[mid]) {
            right = mid - 1
            left++
        }else {
            left = mid + 1
            right--
        }
        mid = Math.floor((left + right) / 2)
    }
    if (arr[mid] === val) {
        return mid
    }
    return -1
}


console.log(binarysearch([1, 2, 5, 6, 7, 8, 9], 5))