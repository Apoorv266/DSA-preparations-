function peakElement(arr, n) {
    if (n == 1) return 0;

    for (let i = 0; i < n; i++) {
        if (arr[i - 1] <= arr[i] && arr[i + 1] <= arr[i]) {
            return i
        }

        else if ( arr[i - 1] <= arr[i]  && typeof arr[i + 1] == "undefined") {
            return i
        }

        else if (arr[i] >= arr[i + 1] && typeof arr[i - 1] == "undefined") {
            return i
        }
    }
}


console.log(peakElement([1,2, 5, 3, 1 ], 5))


