
function reverse(arr, n) {
    let start = 0
    let end = n - 1


    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    let inline = ""
    for (let i = 0; i < arr.length; i++) {
        inline = inline + arr[i] + " "
    }
    return inline

}

console.log(reverse([9, 19, 12, 2], 4))