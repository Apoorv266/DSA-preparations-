function peakElement(arr, n){
for (let i = 0; i < n; i++) {
    if (arr[i] >= arr[i - 1] && arr[i + 1] >= arr[i]) {
        return arr[i]
    }

    else if (arr[i] >= arr[i - 1] && !arr[i + 1]) {
       console.log(arr[i])
    }
    
}
}

console.log(peakElement([1, 2, 3], 3))