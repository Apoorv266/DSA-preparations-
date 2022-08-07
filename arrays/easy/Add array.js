function addArr(arr1, arr2) {
    let i = arr1.length - 1
    let j = arr2.length - 1
    let ans = []

    while (i >= 0 && j >= 0) {
        let sum = arr1[i] + arr2[j]
        ans.push[sum]
        i--
        j--
    }

    return ans
}

console.log(addArr([1, 1, 1],[1, 1, 1]))

// let ar = [1, 2, 3]
// let n = ar.length - 1
// console.log(ar[n])