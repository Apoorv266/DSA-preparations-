// Given a random set of numbers, Print them in sorted order.

function sortArr(n, arr) {
    var  done = false
    while (!done) {
        done = true;
    for (let i = 1; i < n; i++) {
        if (arr[i - 1] > arr[i]) {
            done = false
           let temp = arr[i - 1]
            arr[i - 1] = arr[i]
            arr[i] = temp;
        }
    }
}
    return arr
}
console.log(sortArr(4, [5, 4, 8, 3]))




