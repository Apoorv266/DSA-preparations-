function peakElement(arr, n) {
    for (let i = 0; i < n; i++) {
        if (arr[i - 1] <= arr[i] && arr[i + 1] <= arr[i]) {
            return arr[i]
        }

        else if ( arr[i - 1] <= arr[i]  && typeof arr[i + 1] == undefined) {
            console.log(arr[i])
        }

        else if (arr[i] >= arr[i + 1] && typeof arr[i - 1] == undefined) {
            console.log(arr[i])
        }
    }
}

let arr2 = [1, 2, 3]
console.log(peakElement([1, 2, 3], 3))
console.log(arr2[1 + 1])