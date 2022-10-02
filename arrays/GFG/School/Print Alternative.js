function print(arr, n) {
    let str = ""
    for (let i = 0; i <= arr.length; i = i + 2) {
        str += arr[i]
    }
    return str
}

console.log(print([1, 2, 3, 4, 5]))