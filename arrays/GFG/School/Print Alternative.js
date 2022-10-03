function print(arr, n) {
    let str = ""
    for (let i = 0; i < n ; i = i + 2) {
        str += arr[i]
        console.log(arr[i])
    }
    return str.split('').join(' ') 
}

console.log(print([32, 41, 23, 3, 1, 6], 6))