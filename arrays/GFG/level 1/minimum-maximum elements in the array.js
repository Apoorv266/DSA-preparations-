// Your task is to find the minimum and maximum elements in the array.

function getMinMax(arr, n) {
    let a = 0
    let b = 0

    if (n == 1) return 0;
    arr = arr.sort(function (a, b) { return a - b });

    console.log(arr)
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i - 1] < arr[i]) { 
           a = arr[i]
           break
        }
    }

    for (let j = 0; j < arr.length; j++) {
       if (arr[j] < arr[j + 1]) {
        b = arr[j]
        break
       }
        
    }
    return `min = ${b}, max = ${a}`
}

console.log(getMinMax([1, 345, 234, 21, 56789], 5))

