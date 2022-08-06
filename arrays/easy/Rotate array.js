// rotate an array to left by k steps
function rotate(arr, k) {
    for (let j = 0; j < k; j++) {
        arr.push(arr[0])
        arr.shift()
    }
    return arr
}

console.log(rotate([1, 2, 3, 4], 2))





